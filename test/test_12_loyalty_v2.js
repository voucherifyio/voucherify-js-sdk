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
  const examineApi = () =>
    new voucherifyClient.LV2ExamineApi(specUtils.apiClient);
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
    // Always run cleanup; ignore 404 / empty SDK responses.
    const ignore = async (label, fn) => {
      try {
        await fn();
      } catch (error) {
        if (error?.status === 404) {
          return;
        }
        console.log(`${label}: ${error?.message || error}`);
      }
    };

    try {
      if (fixtureCtx?.programId && member?.id) {
        await ignore("deactivateProgramMember", () =>
          programsApi().deactivateProgramMember(
            fixtureCtx.programId,
            member.id,
          ),
        );
        await ignore("deleteProgramMember", () =>
          programsApi().deleteProgramMember(fixtureCtx.programId, member.id),
        );
      }

      if (customer?.id) {
        await ignore("deleteCustomer", () =>
          customersApi().deleteCustomer(customer.id),
        );
      }

      if (fixtureCtx) {
        await teardownLoyaltyV2Program(fixtureCtx);
      }
    } finally {
      fixtureCtx = null;
      member = null;
      customer = null;
      primaryCardId = null;
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
    // ADMIN_CREDIT is async; wait until balance is visible before spend ops.
    await specUtils.delay(3000);

    const refreshed = await programsApi().getProgramMember(
      fixtureCtx.programId,
      member.id,
    );
    member = refreshed;
    const primaryCard = (refreshed.cards || []).find(
      (entry) => entry?.card?.id === primaryCardId,
    );
    expect(primaryCard?.card?.balance?.points).to.be.above(0);

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

    const rewardTransactionId =
      purchase.transaction?.id ||
      purchase.id ||
      purchase.reward_transaction_id;
    expect(rewardTransactionId).to.be.a("string");

    // Purchase settles asynchronously; refund requires APPROVED.
    let approvedRow = null;
    for (let attempt = 0; attempt < 15; attempt += 1) {
      await specUtils.delay(1000);
      const listed = await programsApi().listMemberRewardPurchases(
        fixtureCtx.programId,
        member.id,
        {},
      );
      const rows = listed.data || listed.purchases || [];
      expect(rows.length).to.be.above(0);
      const match =
        rows.find((row) => row.id === rewardTransactionId) ||
        rows.find((row) => row.transaction?.id === rewardTransactionId) ||
        rows[0];
      const status = match?.status || match?.transaction?.status;
      if (status === "APPROVED") {
        approvedRow = match;
        break;
      }
    }
    expect(approvedRow).to.be.ok();

    const refundId = approvedRow.id || rewardTransactionId;
    const refunded = await programsApi().refundRewardPurchase(
      fixtureCtx.programId,
      refundId,
      {
        v2LoyaltiesProgramsRewardsPurchasesRefundRequestBody: {
          policies: { refund: "ALLOW", stock: "DEFAULT" },
        },
      },
    );
    expect(refunded).to.be.ok();
  });

  it("examines earning rules and rewards via SDK", async function () {
    const earningRules = await examineApi().examineEarningRules({
      trigger: {
        type: "SPECIFIC",
        specific: { event: "customer.order.paid" },
      },
      customer_identification: {
        type: "member_id",
        member_id: member.id,
      },
      customer_order_paid: {
        order: { amount: 5000 },
      },
    });
    expect(earningRules).to.be.ok();
    expect(earningRules.memberships || earningRules).to.be.ok();

    const rewards = await examineApi().examineRewards({
      customer_identification: {
        type: "member_id",
        member_id: member.id,
      },
    });
    expect(rewards).to.be.ok();
  });

  it("lists selected Loyalty v2 reports via SDK", async function () {
    const membersSummary = await programsApi().listProgramMembersSummaryReports(
      fixtureCtx.programId,
    );
    expect(membersSummary).to.be.ok();
    expect(membersSummary.data || []).to.be.an("array");

    const rewardsSummary = await programsApi().listProgramRewardsSummaryReports(
      fixtureCtx.programId,
      {},
    );
    expect(rewardsSummary).to.be.ok();
    expect(rewardsSummary.data || []).to.be.an("array");

    // start_date must be strictly before end_date.
    const endDate = new Date().toISOString().slice(0, 10);
    const startDate = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const membersDaily = await programsApi().listProgramMembersDailyReports(
      fixtureCtx.programId,
      startDate,
      endDate,
      "day",
    );
    expect(membersDaily).to.be.ok();
    expect(membersDaily.data || []).to.be.an("array");

    const cardDaily = await programsApi().listMemberCardDailyReports(
      fixtureCtx.programId,
      member.id,
      primaryCardId,
      startDate,
      endDate,
      "day",
    );
    expect(cardDaily).to.be.ok();
    expect(cardDaily.data || []).to.be.an("array");
  });
});



