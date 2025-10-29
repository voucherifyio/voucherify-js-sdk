import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";
import fs from "fs";
import path from "path";


describe("ClientAPI", function () {
  const DELAY_TIME = 2000;
  const VOUCHER_DISCOUNT_AMOUNT = 15;
  let createdCampaigns = [];
  let createdCustomers = [];

  afterEach(async function () {
    if (specUtils.HAS_CREDENTIALS) {
      const campaignsApi = new voucherifyClient.CampaignsApi(
        specUtils.apiClient,
      );
      const customersApi = new voucherifyClient.CustomersApi(
        specUtils.apiClient,
      );

      for (const campaign of createdCampaigns) {
        try {
          await campaignsApi.deleteCampaign(campaign.id);
        } catch (e) {
          console.log(`Failed to delete campaign ${campaign.id}: ${e}`);
        }
      }
      for (const customer of createdCustomers) {
        try {
          await customersApi.deleteCustomer(customer.id);
        } catch (e) {
          console.log(`Failed to delete customer ${customer.id}: ${e}`);
        }
      }
      createdCampaigns = [];
      createdCustomers = [];
    }
  });

  it("test_01_client_configuration", function () {
    expect(specUtils.apiClient).to.not.be(null);
    expect(specUtils.apiClient.basePath).to.not.be(null);
  });

  it("test_02_csv_file_exists", function () {
    const randomCode = `Voucher_${Math.floor(Math.random() * 1000000)}`;
    const csvContent = `Code,Voucher Type,Active,Start Date,Expiration Date,Discount Type,Value,Category,Redemption Limit,Additional Info,Region\n${randomCode},DISCOUNT_VOUCHER,TRUE,,,AMOUNT,${VOUCHER_DISCOUNT_AMOUNT},New,,Planned release in Fall 2022,Europe`;

    const csvPath = path.join(
      process.cwd(),
      "standalone_discount_vouchers_template_voucherify_client.csv",
    );
    fs.writeFileSync(csvPath, csvContent);

    expect(fs.existsSync(csvPath)).to.be(true);
  });

  it("test_03_import_csv_with_vouchers", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);
    const asyncActionsApi = new voucherifyClient.AsyncActionsApi(
      specUtils.apiClient,
    );

    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = `Campaign_${Math.floor(Math.random() * 1000000)}`;
    campaignBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignBody.voucher.discount = new voucherifyClient.Discount();
    campaignBody.voucher.discount.type = "AMOUNT";
    campaignBody.voucher.discount.amount_off = VOUCHER_DISCOUNT_AMOUNT;

    const campaign = await campaignsApi.createCampaign(campaignBody);
    expect(campaign).to.not.be(null);
    expect(campaign.id).to.not.be(null);
    createdCampaigns.push(campaign);

    const randomCode = `Voucher_${Math.floor(Math.random() * 1000000)}`;
    const csvContent = `Code,Voucher Type,Active,Start Date,Expiration Date,Discount Type,Value,Category,Redemption Limit,Additional Info,Region\n${randomCode},DISCOUNT_VOUCHER,TRUE,,,AMOUNT,${VOUCHER_DISCOUNT_AMOUNT},New,,Planned release in Fall 2022,Europe`;

    const csvPath = path.join(
      process.cwd(),
      "standalone_discount_vouchers_template_voucherify_client.csv",
    );

    try {
      fs.writeFileSync(csvPath, csvContent, "utf-8");
      const file = fs.createReadStream(csvPath);

      const importResult = await campaignsApi.importVouchersToCampaignUsingCsv(
        campaign.id,
        { file }
      );

      expect(importResult).to.not.be(null);
      expect(importResult.async_action_id).to.not.be(null);

      const maxAttempts = 10;
      let attempt = 0;
      let success = false;

      while (attempt < maxAttempts) {
        attempt++;
        await specUtils.delay(DELAY_TIME);

        const action = await asyncActionsApi.getAsyncAction(
          importResult.async_action_id,
        );

        if (action.operation_status === "SUCCESS") {
          const vouchersList = await vouchersApi.listVouchers({
            campaignId: campaign.id,
          });
          expect(vouchersList.vouchers.length).to.be.greaterThan(0);
          success = true;
          break;
        } else if (action.operation_status === "FAILED") {
          throw new Error("Async action failed");
        }
      }

      if (!success) {
        throw new Error("Async action did not complete after max attempts");
      }

    } finally {
      if (fs.existsSync(csvPath)) {
        fs.unlinkSync(csvPath);
      }
    }
  });
});
