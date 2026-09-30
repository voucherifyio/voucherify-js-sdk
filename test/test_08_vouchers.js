import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";
import { VouchersCreateWithSpecificCodeRequestBody } from '../src';


describe("VouchersAPI", function () {
  this.timeout(30000);
  const DELAY_TIME = 2000;
  const INITIAL_BALANCE = 1000;
  const CAMPAIGN_READY_TIMEOUT_MS = 12000;
  const CAMPAIGN_POLL_INTERVAL_MS = 500;

  async function waitUntilCampaignReady(campaignsApi, campaignId) {
    const started = Date.now();
    let campaign;
    while (Date.now() - started < CAMPAIGN_READY_TIMEOUT_MS) {
      campaign = await campaignsApi.getCampaign(campaignId);
      if (
        campaign.creation_status === "DONE" &&
        campaign.vouchers_generation_status === "DONE"
      ) {
        return campaign;
      }
      if (
        campaign.creation_status === "FAILED" ||
        campaign.vouchers_generation_status === "FAILED"
      ) {
        throw new Error(
          `Campaign ${campaignId} generation failed: creation_status=${campaign.creation_status}, vouchers_generation_status=${campaign.vouchers_generation_status}`,
        );
      }
      await specUtils.delay(CAMPAIGN_POLL_INTERVAL_MS);
    }
    throw new Error(
      `Campaign ${campaignId} stayed locked: creation_status=${campaign?.creation_status}, vouchers_generation_status=${campaign?.vouchers_generation_status}`,
    );
  }
  let createdCampaigns = [];
  let createdCustomers = [];
  let voucherToBeUsedInAdvancedFiltering;

  before(async function () {
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);

    voucherToBeUsedInAdvancedFiltering = await vouchersApi.createVoucher(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), VouchersCreateWithSpecificCodeRequestBody.constructFromObject({
      "discount": {
        "amount_off": 2000,
        "type": "AMOUNT"
      },
      "redemption": {
        "quantity": null
      },
    }));
  })

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
          await waitUntilCampaignReady(campaignsApi, campaign.id);
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

  it("test_01_enable_disable_voucher", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);

    // create campaign with 1 voucher
    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = `Campaign_${Math.floor(Math.random() * 1000000)}`;
    campaignBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignBody.voucher.discount = new voucherifyClient.Discount();
    campaignBody.voucher.discount.type = "AMOUNT";
    campaignBody.voucher.discount.amount_off = 1000;
    campaignBody.vouchers_count = 1;


    const campaign = await campaignsApi.createCampaign(campaignBody);
    createdCampaigns.push(campaign);

    await waitUntilCampaignReady(campaignsApi, campaign.id);

    const vouchersList = await vouchersApi.listVouchers({
      campaignId: campaign.id,
      limit: 1,
    });
    expect(vouchersList.vouchers.length).to.be.greaterThan(0);
    const voucher = vouchersList.vouchers[0];

    expect(voucher.active).to.be(true);

    await vouchersApi.disableVoucher(voucher.code);

    let updatedVoucher = await vouchersApi.getVoucher(voucher.code)

    expect(updatedVoucher.active).to.be(false);

    await specUtils.delay(DELAY_TIME);


    await vouchersApi.enableVoucher(voucher.code);

    updatedVoucher = await vouchersApi.getVoucher(voucher.code)

    expect(updatedVoucher.active).to.be(true);
  });

  it("test_02_update_loyalty_card_balance", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);
    const customersApi = new voucherifyClient.CustomersApi(specUtils.apiClient);
    const publicationsApi = new voucherifyClient.PublicationsApi(
      specUtils.apiClient,
    );
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);
    const loyaltiesApi = new voucherifyClient.LoyaltiesApi(specUtils.apiClient);

    // create loyalty campaign
    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = `Loyalty_${Math.floor(Math.random() * 1000000)}`;
    campaignBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "LOYALTY_CARD";
    campaignBody.voucher.loyalty_card =
      new voucherifyClient.CampaignLoyaltyCard();
    campaignBody.voucher.loyalty_card.points = INITIAL_BALANCE;
    campaignBody.vouchers_count = 1;


    const campaign = await campaignsApi.createCampaign(campaignBody);
    createdCampaigns.push(campaign);

    await waitUntilCampaignReady(campaignsApi, campaign.id);

    const vouchersList = await vouchersApi.listVouchers({
      campaignId: campaign.id,
      limit: 1,
    });
    expect(vouchersList.vouchers.length).to.be.greaterThan(0);
    const loyaltyVoucher = vouchersList.vouchers[0];

    // create customer
    const customerBody = new voucherifyClient.CustomersCreateRequestBody();
    customerBody.source_id = `Customer_${Math.floor(Math.random() * 1000000)}`;


    const customer = await customersApi.createCustomer(customerBody);
    createdCustomers.push(customer);

    // publish voucher to customer
    const publicationBody =
      new voucherifyClient.PublicationsCreateRequestBody();
    publicationBody.customer = { id: customer.id };
    publicationBody.voucher = loyaltyVoucher.code;


    await publicationsApi.createPublication(publicationBody);

    // update balance
    const sourceId = `Source_${Math.floor(Math.random() * 1000000)}`;
    const amount = 10000;
    const reason = "Regular customer";

    const updateBody =
      new voucherifyClient.LoyaltiesMembersBalanceUpdateRequestBody();
    updateBody.source_id = sourceId;
    updateBody.points = amount;
    updateBody.reason = reason;


    const updated = await loyaltiesApi.updateLoyaltyCardBalance(
      loyaltyVoucher.code,
      updateBody,
    );

    expect(updated).to.not.be(null);
    expect(updated.balance).to.be(INITIAL_BALANCE + amount);
  });

  it("test_03_list_vouchers_with_advanced_filtering_then_delete_voucher", async function () {
    const vouchersApi = new voucherifyClient.VouchersApi(specUtils.apiClient);

    const vouchersListAdvancedFiltering = await vouchersApi.listVouchers({
      filters: {
        junction: "OR",
        campaign_ids: {
          conditions: {
            $in: ['does-not-exist'],
          }
        },
        code: {
          conditions: {
            $is: voucherToBeUsedInAdvancedFiltering.code,
          }
        }
      }
    });

    expect(vouchersListAdvancedFiltering?.vouchers.length).to.be(1)
    expect(vouchersListAdvancedFiltering?.vouchers?.[0]?.code).to.be(voucherToBeUsedInAdvancedFiltering.code)

    await vouchersApi.deleteVoucher(voucherToBeUsedInAdvancedFiltering.code, { force: true });
  })
});
