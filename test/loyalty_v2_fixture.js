import loyaltyV2Http from "./loyalty_v2_http.js";
import specUtils from "./spec_utils.js";

const uniqueSuffix = () =>
  `${Date.now().toString(36)}_${Math.floor(Math.random() * 1e6)}`;

/**
 * Creates a Loyalty v2 program with card definition, earning rule, reward
 * (points spending), assignments, and activation — via HTTP only.
 *
 * @returns {Promise<{
 *   suffix: string,
 *   programId: string,
 *   cardDefinitionId: string,
 *   earningRuleId: string,
 *   rewardId: string,
 * }>}
 */
export const setupLoyaltyV2Program = async () => {
  const suffix = uniqueSuffix();
  const programName = `js_sdk_lv2_program_${suffix}`;
  const cardName = `js_sdk_lv2_card_${suffix}`;
  const earningRuleName = `js_sdk_lv2_earn_${suffix}`;
  const rewardName = `js_sdk_lv2_reward_${suffix}`;

  const program = await loyaltyV2Http.createProgram({
    name: programName,
  });
  const programId = program.id;
  if (!programId) {
    throw new Error(`createProgram returned no id: ${JSON.stringify(program)}`);
  }

  const buildCardDefinitionBody = (name, { enablePayWithPoints = false } = {}) => ({
    name,
    type: "INDIVIDUAL",
    status: "DRAFT",
    points_expiration: { type: "NO_EXPIRATION" },
    pending_points: { type: "IMMEDIATE" },
    spending_limits: {
      global: { type: "NO_LIMIT", limits: null },
      transactions: { type: "NO_LIMIT", limits: null },
    },
    // Order payments require EXCHANGE_RATIO; default is NO_PAYMENTS (423).
    pay_with_points: enablePayWithPoints
      ? {
          type: "EXCHANGE_RATIO",
          exchange_ratio: { formula: 1 },
        }
      : { type: "NO_PAYMENTS" },
  });

  const cardDefinition = await loyaltyV2Http.createCardDefinition(
    buildCardDefinitionBody(cardName, { enablePayWithPoints: true }),
  );
  const cardDefinitionId = cardDefinition.id;
  if (!cardDefinitionId) {
    throw new Error(
      `createCardDefinition returned no id: ${JSON.stringify(cardDefinition)}`,
    );
  }
  await loyaltyV2Http.activateCardDefinition(cardDefinitionId);

  // Reward spend source and credit target must be different card definitions.
  const rewardCardDefinition = await loyaltyV2Http.createCardDefinition(
    buildCardDefinitionBody(`js_sdk_lv2_reward_card_${suffix}`),
  );
  const rewardCardDefinitionId = rewardCardDefinition.id;
  if (!rewardCardDefinitionId) {
    throw new Error(
      `createCardDefinition (reward target) returned no id: ${JSON.stringify(
        rewardCardDefinition,
      )}`,
    );
  }
  await loyaltyV2Http.activateCardDefinition(rewardCardDefinitionId);

  const earningRule = await loyaltyV2Http.createEarningRule({
    name: earningRuleName,
    status: "DRAFT",
    trigger: {
      event: "customer.order.paid",
    },
    earnings: [
      {
        effects: [
          {
            type: "POINTS",
            points: {
              value: 100,
              card_definition_id: cardDefinitionId,
            },
          },
        ],
      },
    ],
  });
  const earningRuleId = earningRule.id;
  if (!earningRuleId) {
    throw new Error(
      `createEarningRule returned no id: ${JSON.stringify(earningRule)}`,
    );
  }
  await loyaltyV2Http.activateEarningRule(earningRuleId);

  const reward = await loyaltyV2Http.createReward({
    name: rewardName,
    type: "DIGITAL",
    status: "DRAFT",
    material: null,
    digital: {
      type: "LOYALTY_CARD_POINTS",
      discount_coupons: null,
      gift_vouchers: null,
      loyalty_card_points: {
        points: 5,
        card_definition_id: rewardCardDefinitionId,
      },
    },
    costs: [
      {
        spending: [
          {
            points: 10,
            card_definition_id: cardDefinitionId,
          },
        ],
      },
    ],
  });
  const rewardId = reward.id;
  if (!rewardId) {
    throw new Error(`createReward returned no id: ${JSON.stringify(reward)}`);
  }
  await loyaltyV2Http.activateReward(rewardId);

  await loyaltyV2Http.batchAssignCardDefinitions(programId, {
    assign: [{ id: cardDefinitionId }, { id: rewardCardDefinitionId }],
  });
  await loyaltyV2Http.batchAssignEarningRules(programId, {
    assign: [{ id: earningRuleId }],
  });
  await loyaltyV2Http.batchAssignRewards(programId, {
    assign: [{ id: rewardId, stock: { type: "UNLIMITED" } }],
  });

  await loyaltyV2Http.activateProgram(programId);

  return {
    suffix,
    programId,
    cardDefinitionId,
    rewardCardDefinitionId,
    earningRuleId,
    rewardId,
    programName,
  };
};

/**
 * Best-effort teardown for resources created by setupLoyaltyV2Program.
 *
 * Cleanup matrix (what the API allows):
 * - Program: deactivate → delete (delete soft-removes assignments).
 * - Earning rule / reward: deactivate → delete (no draft required).
 * - Card definitions: delete after program + reward are gone.
 *   Drafting while still assigned to a non-draft program/reward returns 423.
 */
export const teardownLoyaltyV2Program = async (ctx) => {
  if (!ctx) {
    return;
  }
  const {
    programId,
    cardDefinitionId,
    rewardCardDefinitionId,
    earningRuleId,
    rewardId,
  } = ctx;

  const ignore = async (label, fn) => {
    try {
      await fn();
    } catch (error) {
      if (error?.status === 404) {
        return;
      }
      console.log(`Loyalty v2 teardown ${label}: ${error?.message || error}`);
    }
  };

  if (programId) {
    await ignore("deactivateProgram", () =>
      loyaltyV2Http.deactivateProgram(programId),
    );
    await ignore("deleteProgram", () => loyaltyV2Http.deleteProgram(programId));
  }

  if (earningRuleId) {
    await ignore("deactivateEarningRule", () =>
      loyaltyV2Http.deactivateEarningRule(earningRuleId),
    );
  }
  if (rewardId) {
    await ignore("deactivateReward", () =>
      loyaltyV2Http.deactivateReward(rewardId),
    );
  }

  await specUtils.delay(500);

  if (earningRuleId) {
    await ignore("deleteEarningRule", () =>
      loyaltyV2Http.deleteEarningRule(earningRuleId),
    );
  }
  if (rewardId) {
    await ignore("deleteReward", () => loyaltyV2Http.deleteReward(rewardId));
  }
  for (const id of [cardDefinitionId, rewardCardDefinitionId]) {
    if (id) {
      await ignore(`deleteCardDefinition ${id}`, () =>
        loyaltyV2Http.deleteCardDefinition(id),
      );
    }
  }
};

export default {
  setupLoyaltyV2Program,
  teardownLoyaltyV2Program,
};
