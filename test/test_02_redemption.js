import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

// Generate unique identifiers for test resources
const randomCode = Math.floor(Math.random() * 10000000);
const VOUCHER_CODE = `test_code_${randomCode}`;
const SPECIFIC_CODE_1 = `test_code_1_${randomCode}`;
const SPECIFIC_CODE_2 = `test_code_2_${randomCode}`;
const CUSTOMER_SOURCE_ID = `test_customer_${randomCode}`;
const CUSTOMER_METADATA = { key_customer: "test" };

describe("RedemptionAPI", function () {
  let createdCampaigns = [];

  // Cleanup: delete all created campaigns after each test
  afterEach(async function () {
    if (specUtils.HAS_CREDENTIALS) {
      const campaignsApi = new voucherifyClient.CampaignsApi(
        specUtils.apiClient,
      );
      for (const campaign of createdCampaigns) {
        try {
          await campaignsApi.deleteCampaign(campaign.id);
        } catch (_error) {
          // Ignore errors
        }
      }
      createdCampaigns = [];
    }
  });

  // Helper function: creates a campaign with specified vouchers
  async function createCampaignWithVouchers(campaignName, voucherCodes) {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);

    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = campaignName;
    campaignBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignBody.voucher.discount = new voucherifyClient.Discount();
    campaignBody.voucher.discount.type = "AMOUNT";
    campaignBody.voucher.discount.amount_off = 1000;

    const campaign = await campaignsApi.createCampaign(campaignBody);
    createdCampaigns.push(campaign);

    // Add specific vouchers
    for (const code of voucherCodes) {
      await campaignsApi.addVoucherWithSpecificCodeToCampaign(
        campaign.id,
        code,
      );
    }

    return campaign;
  }

  it("test_01_validate_stacked_discounts", async function () {
    // Create campaign with two vouchers
    await createCampaignWithVouchers(`campaign_${randomCode}`, [
      SPECIFIC_CODE_1,
      SPECIFIC_CODE_2,
    ]);

    const validationsApi = new voucherifyClient.ValidationsApi(
      specUtils.apiClient,
    );

    // Prepare validation request with two redeemables
    const validationsRequest =
      new voucherifyClient.ValidationsValidateRequestBody();

    const redeemableItem1 =
      new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
    redeemableItem1.id = SPECIFIC_CODE_1;
    redeemableItem1.object = "voucher";

    const redeemableItem2 =
      new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
    redeemableItem2.id = SPECIFIC_CODE_2;
    redeemableItem2.object = "voucher";

    validationsRequest.redeemables = [redeemableItem1, redeemableItem2];

    const customer = new voucherifyClient.Customer();
    customer.source_id = CUSTOMER_SOURCE_ID;
    customer.metadata = CUSTOMER_METADATA;
    validationsRequest.customer = customer;

    const order = new voucherifyClient.Order();
    order.amount = 20000;
    order.metadata = CUSTOMER_METADATA;
    validationsRequest.order = order;

    // Validate stacked discounts
    const result =
      await validationsApi.validateStackedDiscounts(validationsRequest);

    // Verify validation result
    expect(result).to.not.be(null);
    expect(result.redeemables).to.not.be(null);
    expect(result.redeemables.length).to.be(2);
  });

  it("test_02_redeem_stacked_discounts", async function () {
    // Create campaign with voucher for redemption
    await createCampaignWithVouchers(`campaign_${randomCode}_redeem`, [
      VOUCHER_CODE,
    ]);

    const redemptionsApi = new voucherifyClient.RedemptionsApi(
      specUtils.apiClient,
    );

    // Prepare redemption request
    const redemptionsRequest =
      new voucherifyClient.RedemptionsRedeemRequestBody();

    const redeemableItem =
      new voucherifyClient.RedemptionsRedeemRequestBodyRedeemablesItem();
    redeemableItem.id = VOUCHER_CODE;
    redeemableItem.object = "voucher";

    redemptionsRequest.redeemables = [redeemableItem];

    const customer = new voucherifyClient.Customer();
    customer.source_id = CUSTOMER_SOURCE_ID;
    customer.metadata = CUSTOMER_METADATA;
    redemptionsRequest.customer = customer;

    const order = new voucherifyClient.Order();
    order.amount = 30000;
    order.metadata = { key_customer: "test" };
    redemptionsRequest.order = order;

    redemptionsRequest.metadata = { key: "value" };

    // Redeem stacked discounts
    const result =
      await redemptionsApi.redeemStackedDiscounts(redemptionsRequest);

    // Verify redemption result
    expect(result).to.not.be(null);
    expect(result.redemptions[0].result).to.be("SUCCESS");
  });

  it("test_03_list_redemptions", async function () {
    const redemptionsApi = new voucherifyClient.RedemptionsApi(
      specUtils.apiClient,
    );

    // Prepare filters for listing redemptions
    const listRedemptionsFilters =
      new voucherifyClient.ParameterFiltersListRedemptions();
    listRedemptionsFilters.voucher_code =
      new voucherifyClient.ParameterFiltersListRedemptionsVoucherCode();
    listRedemptionsFilters.voucher_code.conditions =
      new voucherifyClient.FilterConditionsString();
    listRedemptionsFilters.voucher_code.conditions.$is_not = VOUCHER_CODE;

    // List redemptions with filters
    const result = await redemptionsApi.listRedemptions({
      filters: listRedemptionsFilters,
      limit: 100
    });

    // Verify result is a list
    expect(result.object).to.be("list");
  });
});
