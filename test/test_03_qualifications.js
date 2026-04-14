import expect from "expect.js";
import * as voucherifyClient from "../src/index.js";
import { VouchersCreateWithSpecificCodeRequestBody } from "../src";
import specUtils from "./spec_utils.js";

const randomCode = Math.floor(Math.random() * 10000000);
const VOUCHER_CODE = `qual_test_voucher_${randomCode}`;

const QUALIFICATIONS_RETRY_ATTEMPTS = 10;
const QUALIFICATIONS_RETRY_DELAY_MS = 500;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe("QualificationsAPI", function () {
  let voucherCode = null;

  before(async function () {
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);
    const qualificationsApi = new voucherifyClient.QualificationsApi(
      specUtils.apiClient,
    );

    const voucher = await vouchersApi.createVoucher(
      VOUCHER_CODE,
      VouchersCreateWithSpecificCodeRequestBody.constructFromObject({
        discount: {
          amount_off: 1000,
          type: "AMOUNT",
        },
        redemption: {
          quantity: null,
        },
      }),
    );
    voucherCode = voucher.code;

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

    let sawVoucherInQualifications = false;
    for (let attempt = 0; attempt < QUALIFICATIONS_RETRY_ATTEMPTS; attempt++) {
      if (attempt > 0) {
        await sleep(QUALIFICATIONS_RETRY_DELAY_MS);
      }
      const qualifications = await qualificationsApi.checkEligibility(
        qualificationsCheckEligibilityRequestBody,
      );
      const rows = qualifications.redeemables?.data;
      if (rows?.length) {
        sawVoucherInQualifications = rows.some((row) => row.id === voucherCode);
        if (sawVoucherInQualifications) {
          break;
        }
      }
    }

    if (!sawVoucherInQualifications) {
      throw new Error(
        `Qualifications did not return voucher ${voucherCode} after ${QUALIFICATIONS_RETRY_ATTEMPTS} attempts`,
      );
    }
  });

  after(async function () {
    if (!specUtils.HAS_CREDENTIALS || !voucherCode) {
      return;
    }
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);
    try {
      await vouchersApi.deleteVoucher(voucherCode, { force: true });
    } catch (e) {
      if (e.status !== 404) {
        console.log(`Failed to delete voucher ${voucherCode}: ${e}`);
      }
    }
  });

  it("test_01_check_if_voucher_code_was_returned", function () {
    expect(voucherCode).to.not.be(null);
  });

  it("test_02_validate_stacked_discounts", async function () {
    const validationsApi = new voucherifyClient.ValidationsApi(
      specUtils.apiClient,
    );

    const validationsValidateRequestBody =
      new voucherifyClient.ValidationsValidateRequestBody();

    const redeemableItem =
      new voucherifyClient.ValidationsValidateRequestBodyRedeemablesItem();
    redeemableItem.id = voucherCode;
    redeemableItem.object = "voucher";

    validationsValidateRequestBody.redeemables = [redeemableItem];
    validationsValidateRequestBody.customer = null;

    const order = new voucherifyClient.Order();
    order.amount = 20000;
    validationsValidateRequestBody.order = order;

    const result = await validationsApi.validateStackedDiscounts(
      validationsValidateRequestBody,
    );

    expect(result).to.not.be(null);
    expect(result.valid).to.be(true);
    expect(result.redeemables).to.not.be(null);
    expect(result.order).to.not.be(null);
    expect(result.order.amount).to.be(20000);
    expect(result.order.total_amount).to.be(20000 - 1000);
  });
});
