import expect from "expect.js";
import specUtils from "./spec_utils.js";
import {
  setupLoyaltyV2Program,
  teardownLoyaltyV2Program,
} from "./loyalty_v2_fixture.js";

describe("Loyalty v2", function () {
  this.timeout(120000);

  let fixtureCtx = null;

  after(async function () {
    if (fixtureCtx) {
      await teardownLoyaltyV2Program(fixtureCtx);
      fixtureCtx = null;
    }
  });

  it("setup creates an activated program with card definition, earning rule, and reward", async function () {
    if (!specUtils.HAS_CREDENTIALS) {
      this.skip();
    }

    fixtureCtx = await setupLoyaltyV2Program();

    expect(fixtureCtx.programId).to.be.a("string");
    expect(fixtureCtx.cardDefinitionId).to.match(/^lcdef_/);
    expect(fixtureCtx.earningRuleId).to.match(/^lern_/);
    expect(fixtureCtx.rewardId).to.match(/^lrew_/);
  });
});
