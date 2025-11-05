import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

// Store voucher code retrieved from qualifications
let voucherCode = null;

describe("QualificationsAPI", function () {
  // Setup: retrieve a voucher code using qualifications API
  before(async function () {
    const qualificationsApi = new voucherifyClient.QualificationsApi(
      specUtils.apiClient,
    );

    // Prepare eligibility check request
    const qualificationsCheckEligibilityRequestBody =
      new voucherifyClient.QualificationsCheckEligibilityRequestBody();
    qualificationsCheckEligibilityRequestBody.scenario = "ALL";

    const options = new voucherifyClient.QualificationsOption();
    options.filters = new voucherifyClient.QualificationsOptionFilters();
    options.filters.resource_type =
      new voucherifyClient.QualificationsOptionFiltersResourceType();
    options.filters.resource_type.conditions =
      new voucherifyClient.QualificationsOptionFiltersResourceTypeConditions();
    options.filters.resource_type.conditions.$in = ["voucher"];

    qualificationsCheckEligibilityRequestBody.options = options;

    // Check eligibility and store the first voucher code
    const qualifications = await qualificationsApi.checkEligibility(
      qualificationsCheckEligibilityRequestBody,
    );
    voucherCode = qualifications.redeemables.data[0].id;
  });

  it("test_01_check_if_voucher_code_was_returned", function () {
    expect(voucherCode).to.not.be(null);
  });

  it("test_02_validate_stacked_discounts", async function () {
    const validationsApi = new voucherifyClient.ValidationsApi(
      specUtils.apiClient,
    );

    // Prepare a validation request with the voucher from qualifications
    const validationsValidateRequestBody =
      new voucherifyClient.ValidationsValidateRequestBody();

    const redeemableItem =
      new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
    redeemableItem.id = voucherCode;
    redeemableItem.object = "voucher";

    validationsValidateRequestBody.redeemables = [redeemableItem];

    const order = new voucherifyClient.Order();
    order.amount = 30000;
    order.metadata = { key_customer: "test" };
    validationsValidateRequestBody.order = order;

    validationsValidateRequestBody.metadata = { key: "value" };

    // Validate the voucher
    const result = await validationsApi.validateStackedDiscounts(
      validationsValidateRequestBody,
    );

    // Verify validation is successful
    expect(result).to.not.be(null);
    expect(result.valid).to.be(true);
  });
});
