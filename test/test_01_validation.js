import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

// Generate unique identifiers for test resources
const randomCode1 = Math.floor(Math.random() * 10000000);
const VOUCHER_CODE_1 = `test_code_${randomCode1}`;

const randomCode2 = Math.floor(Math.random() * 10000000);
const VOUCHER_CODE_2 = `test_code_${randomCode2}`;

const CAMPAIGN_NAME = `test_campaign_${randomCode1}`;
const CUSTOMER_SOURCE_ID = `test_customer_${randomCode2}`;

describe("ValidationAPI", function () {
  let createdCampaigns = [];

  beforeEach(async function () {
    await specUtils.generateOAuthClient();
  })

  // Cleanup: delete all created campaigns after each test
  afterEach(async function () {
    if (specUtils.HAS_CREDENTIALS) {
      const campaignsApi = new voucherifyClient.CampaignsApi(
        specUtils.apiClient,
      );
      for (const campaign of createdCampaigns) {
        try {
          await campaignsApi.deleteCampaign(campaign.id);
        } catch (e) {
          if (e.status !== 404) {
            console.log(`Failed to delete campaign ${campaign.id}: ${e}`);
          }
        }
      }
      createdCampaigns = [];
    }
  });

  for(const apiClientType of Object.keys(specUtils.CLIENT_TYPES)){
    it(`test_01_validate_stacked_discounts_all_applicable_${apiClientType}`, async function () {
      const apiClient = specUtils.getClientBasedOnType(apiClientType);

      const campaignsApi = new voucherifyClient.CampaignsApi(apiClient);
      const validationsApi = new voucherifyClient.ValidationsApi(
        apiClient,
      );

      // Step 1: Create a new campaign with a discount voucher
      const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
      campaignBody.name = `${CAMPAIGN_NAME}_${apiClientType}`,
      campaignBody.voucher =
        new voucherifyClient.CampaignsCreateRequestBodyVoucher();
      campaignBody.voucher.type = "DISCOUNT_VOUCHER";
      campaignBody.voucher.discount = new voucherifyClient.Discount();
      campaignBody.voucher.discount.type = "AMOUNT";
      campaignBody.voucher.discount.amount_off = 1000;

      const campaign = await campaignsApi.createCampaign(campaignBody);
      createdCampaigns.push(campaign);

      // Step 2: Add a specific voucher code to the campaign
      const voucher = await campaignsApi.addVoucherWithSpecificCodeToCampaign(
        campaign.id,
        `${VOUCHER_CODE_1}_${apiClientType}`,
      );

      // Step 3: Prepare a stacked discount validation request
      const validationsValidateRequestBody =
        new voucherifyClient.ValidationsValidateRequestBody();

      const redeemableItem =
        new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
      redeemableItem.id = voucher.code;
      redeemableItem.object = "voucher";

      validationsValidateRequestBody.redeemables = [redeemableItem];
      validationsValidateRequestBody.customer = null;

      const order = new voucherifyClient.Order();
      order.amount = 20000;
      validationsValidateRequestBody.order = order;

      // Step 4: Perform the stacked discount validation
      const result = await validationsApi.validateStackedDiscounts(
        validationsValidateRequestBody,
      );

      // Step 5: Basic checks on the validation result
      expect(result).to.not.be(null);
      expect(result.valid).to.be(true);
      expect(result.redeemables).to.not.be(null);
      expect(result.inapplicable_redeemables).to.be(undefined);

      // Step 6: Check order details
      expect(result.order).to.not.be(null);
      expect(result.order.amount).to.be(20000);
      expect(result.order.total_amount).to.be(20000 - 1000);

      // Step 7: Inspect the first redeemable item
      const redeemable = result.redeemables[0];
      expect(redeemable.result).to.be.an("object");
      expect(redeemable.applicable_to).to.be.an("object");
      expect(redeemable.inapplicable_to).to.be.an("object");

      // Step 8: Check the discount applied to the redeemable
      const discount = redeemable.result.discount;
      expect(discount.type).to.be("AMOUNT");
      expect(discount.amount_off).to.be(1000);

      // Step 9: Verify all redeemables are of the correct type
      for (const r of result.redeemables) {
        expect(r).to.be.an("object");
      }
    });

    it(`test_02_validate_stacked_discounts_with_inapplicable_${apiClientType}`, async function () {
      const apiClient = specUtils.getClientBasedOnType(apiClientType);

      const validationsApi = new voucherifyClient.ValidationsApi(
        apiClient,
      );

      // Prepare validation request with one non-existing voucher
      const validationsValidateRequestBody =
        new voucherifyClient.ValidationsValidateRequestBody();

      const redeemableItem1 =
        new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
      redeemableItem1.id = `${VOUCHER_CODE_2}_${apiClientType}`;
      redeemableItem1.object = "voucher";

      const redeemableItem2 =
        new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
      redeemableItem2.id = "non_existing_voucher";
      redeemableItem2.object = "voucher";

      validationsValidateRequestBody.redeemables = [
        redeemableItem1,
        redeemableItem2,
      ];

      const customer = new voucherifyClient.Customer();
      customer.source_id = `${CUSTOMER_SOURCE_ID}_${apiClientType}`;
      validationsValidateRequestBody.customer = customer;

      const order = new voucherifyClient.Order();
      order.amount = 1000;
      validationsValidateRequestBody.order = order;

      // Perform validation - should return inapplicable redeemables
      const result = await validationsApi.validateStackedDiscounts(
        validationsValidateRequestBody,
      );

      // Verify validation result contains inapplicable redeemables
      expect(result).to.not.be(null);
      for (const r of result.redeemables || []) {
        expect(r).to.be.an("object");
      }
      expect(result.valid).to.be(false);
      expect(result.inapplicable_redeemables).to.not.be(null);

      // Check the first inapplicable redeemable
      const inapplicableRedeemable = result.inapplicable_redeemables[0];
      expect(inapplicableRedeemable).to.not.be(null);
      expect(inapplicableRedeemable).to.be.an("object");
      expect(inapplicableRedeemable.status).to.be("INAPPLICABLE");
      expect(inapplicableRedeemable.id).to.not.be(null);
      expect(inapplicableRedeemable.object).to.not.be(null);
      expect(inapplicableRedeemable.result).to.not.be(null);
      expect(inapplicableRedeemable.result).to.be.an("object");
      expect(inapplicableRedeemable.result.error).to.not.be(null);
      expect(inapplicableRedeemable.result.error).to.be.an("object");
    });

    it(`test_03_validate_stacked_discounts_without_customer_${apiClientType}`, async function () {
      const apiClient = specUtils.getClientBasedOnType(apiClientType);

      const validationsApi = new voucherifyClient.ValidationsApi(
        apiClient,
      );

      // Prepare validation request without customer information
      const validationsValidateRequestBody =
        new voucherifyClient.ValidationsValidateRequestBody();

      const redeemableItem =
        new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
      redeemableItem.id = "random_voucher";
      redeemableItem.object = "voucher";

      validationsValidateRequestBody.redeemables = [redeemableItem];
      validationsValidateRequestBody.customer = null;

      const order = new voucherifyClient.Order();
      order.amount = 1000;
      validationsValidateRequestBody.order = order;

      // Perform validation
      const result = await validationsApi.validateStackedDiscounts(
        validationsValidateRequestBody,
      );

      // Verify all redeemables are inapplicable
      expect(result).to.not.be(null);
      expect(result.valid).to.be(false);
      expect(result.redeemables).to.not.be(null);
      expect(result.inapplicable_redeemables).to.not.be(null);
      expect(result.redeemables.length).to.be(
        result.inapplicable_redeemables.length,
      );
    });
  }
});
