import expect from "expect.js";
import * as voucherifyClient from "../src/index.js";
import specUtils from "./spec_utils.js";
import {
  setupLoyaltyV2Program,
  teardownLoyaltyV2Program,
} from "./loyalty_v2_fixture.js";

describe("Loyalty v2", function () {
  this.timeout(180000);

  let fixtureCtx = null;
  let customer = null;
  let member = null;
  let primaryCardId = null;
  const programsApi = () =>
    new voucherifyClient.LV2ProgramsApi(specUtils.apiClient);
  const customersApi = () =>
    new voucherifyClient.CustomersApi(specUtils.apiClient);

  const resolvePrimaryCardId = (memberBody) => {
    const cards = memberBody?.cards || [];
    const match = cards.find(
      (entry) => entry?.card?.card_definition_id === fixtureCtx.cardDefinitionId,
    );
    const id = (match || cards[0])?.card?.id;
    if (!id) {
      throw new Error(
        `No loyalty card on member: ${JSON.stringify(memberBody?.cards)}`,
      );
    }
    return id;
  };

  before(async function () {
    if (!specUtils.HAS_CREDENTIALS) {
      this.skip();
    }

    fixtureCtx = await setupLoyaltyV2Program();

    const customerBody = new voucherifyClient.CustomersCreateRequestBody();
    customerBody.source_id = `lv2_customer_${fixtureCtx.suffix}`;
    customerBody.name = "Loyalty v2 JS SDK test";
    customer = await customersApi().createCustomer(customerBody);

    member = await programsApi().createProgramMember(fixtureCtx.programId, {
      customer_identification: {
        type: "customer_id",
        customer_id: customer.id,
        customer_source_id: null,
      },
    });
    primaryCardId = resolvePrimaryCardId(member);
  });

  after(async function () {
    if (fixtureCtx && member?.id) {
      try {
        await programsApi().deactivateProgramMember(
          fixtureCtx.programId,
          member.id,
        );
      } catch (error) {
        if (error?.status !== 404) {
          console.log(`deactivateProgramMember: ${error?.message || error}`);
        }
      }
      try {
        await programsApi().deleteProgramMember(
          fixtureCtx.programId,
          member.id,
        );
      } catch (error) {
        if (error?.status !== 404) {
          console.log(`deleteProgramMember: ${error?.message || error}`);
        }
      }
    }

    if (customer?.id) {
      try {
        await customersApi().deleteCustomer(customer.id);
      } catch (error) {
        if (error?.status !== 404) {
          console.log(`deleteCustomer: ${error?.message || error}`);
        }
      }
    }

    if (fixtureCtx) {
      await teardownLoyaltyV2Program(fixtureCtx);
      fixtureCtx = null;
    }
  });

  it("setup creates an activated program with card definition, earning rule, and reward", async function () {
    expect(fixtureCtx.programId).to.be.a("string");
    expect(fixtureCtx.cardDefinitionId).to.match(/^lcdef_/);
    expect(fixtureCtx.earningRuleId).to.match(/^lern_/);
    expect(fixtureCtx.rewardId).to.match(/^lrew_/);
  });

  it("creates, gets, lists, activates, and deactivates a program member via SDK", async function () {
    expect(member).to.be.ok();
    expect(member.id).to.be.a("string");
    expect(member.customer_id).to.be(customer.id);
    expect(member.cards).to.be.an("array");
    expect(member.cards.length).to.be.above(0);

    const fetched = await programsApi().getProgramMember(
      fixtureCtx.programId,
      member.id,
    );
    expect(fetched.id).to.be(member.id);

    const listed = await programsApi().listProgramMembers(
      fixtureCtx.programId,
      {},
    );
    const ids = (listed.data || listed.members || []).map((item) => item.id);
    expect(ids).to.contain(member.id);

    const membership = await programsApi().getProgramMembership(
      fixtureCtx.programId,
      customer.id,
      {},
    );
    expect(membership).to.be.ok();

    if (member.status === "INACTIVE" || member.status === "DRAFT") {
      const activated = await programsApi().activateProgramMember(
        fixtureCtx.programId,
        member.id,
      );
      expect(activated.status).to.be("ACTIVE");
      member = activated;
    }

    const deactivated = await programsApi().deactivateProgramMember(
      fixtureCtx.programId,
      member.id,
    );
    expect(deactivated.status).to.not.be("ACTIVE");

    const reactivated = await programsApi().activateProgramMember(
      fixtureCtx.programId,
      member.id,
    );
    expect(reactivated.status).to.be("ACTIVE");
    member = await programsApi().getProgramMember(
      fixtureCtx.programId,
      member.id,
    );
    expect(primaryCardId).to.match(/^lcrd_/);
    expect(resolvePrimaryCardId(member)).to.be(primaryCardId);
  });

  it("adjusts card points and lists card transactions via SDK", async function () {
    const adjusted = await programsApi().adjustCardPoints(
      fixtureCtx.programId,
      member.id,
      primaryCardId,
      { points: 100, reason: "js sdk loyalty v2 e2e" },
    );
    expect(adjusted).to.be.ok();

    const transactions = await programsApi().listCardTransactions(
      fixtureCtx.programId,
      member.id,
      primaryCardId,
      {},
    );
    expect(transactions).to.be.ok();
    const rows = transactions.data || transactions.transactions || [];
    expect(rows.length).to.be.above(0);
  });

  it("creates a member order payment dry-run via SDK", async function () {
    const ordersApi = new voucherifyClient.OrdersApi(specUtils.apiClient);
    const orderBody = new voucherifyClient.OrdersCreateRequestBody();
    orderBody.amount = 2500;
    orderBody.source_id = `lv2_order_${fixtureCtx.suffix}`;
    orderBody.customer = { id: customer.id };

    const order = await ordersApi.createOrder(orderBody);
    expect(order.id).to.match(/^ord_/);

    const payment = await programsApi().createMemberOrderPayment(
      fixtureCtx.programId,
      member.id,
      {
        card_id: primaryCardId,
        order: { id: order.id, source_id: null },
        payment_limit: { type: "CARD_BALANCE" },
        mode: "DRY_RUN",
      },
    );
    expect(payment).to.be.ok();

    const listed = await programsApi().listMemberOrderPayments(
      fixtureCtx.programId,
      member.id,
      {},
    );
    expect(listed).to.be.ok();
  });

  it("purchases a member reward via SDK", async function () {
    const dryRun = await programsApi().purchaseMemberReward(
      fixtureCtx.programId,
      member.id,
      {
        reward_id: fixtureCtx.rewardId,
        mode: "DRY_RUN",
      },
    );
    expect(dryRun).to.be.ok();

    const purchase = await programsApi().purchaseMemberReward(
      fixtureCtx.programId,
      member.id,
      {
        reward_id: fixtureCtx.rewardId,
        mode: "TRANSACTION",
      },
    );
    expect(purchase).to.be.ok();

    const listed = await programsApi().listMemberRewardPurchases(
      fixtureCtx.programId,
      member.id,
      {},
    );
    expect(listed).to.be.ok();
    const rows = listed.data || listed.purchases || [];
    expect(rows.length).to.be.above(0);

    const rewardTransactionId =
      purchase.id ||
      purchase.transaction?.id ||
      purchase.reward_transaction_id ||
      rows[0]?.id;
    if (rewardTransactionId) {
      const refunded = await programsApi().refundRewardPurchase(
        fixtureCtx.programId,
        rewardTransactionId,
        {},
      );
      expect(refunded).to.be.ok();
    }
  });
});
