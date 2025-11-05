import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

// Generate unique identifiers for test resources
const randomCode = Math.floor(Math.random() * 10000000);
const CUSTOMER_NAME = `Customer_${randomCode}`;
const CUSTOMER_EMAIL = `customer_${randomCode}@example.com`;
const CAMPAIGN_NAME = `Campaign_${randomCode}`;
const CAMPAIGN_NAME_2 = `Campaign_2_${randomCode}`;
const CAMPAIGN_NAME_3 = `Campaign_3_${randomCode}`;
const CAMPAIGN_NAME_4 = `Campaign_4_${randomCode}`;
const VOUCHER_CODE = `test_code_${randomCode}`;

describe("CampaignsAPI", function () {
  const VOUCHERS_COUNT = 3;
  let createdCampaigns = [];
  let createdCustomers = [];

  // Cleanup: delete all created campaigns and customers after each test
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
        } catch (_error) {
          // Ignore errors
        }
      }
      for (const customer of createdCustomers) {
        try {
          await customersApi.deleteCustomer(customer.id);
        } catch (_error) {
          // Ignore errors
        }
      }
      createdCampaigns = [];
      createdCustomers = [];
    }
  });

  it("test_01_publish_campaign_voucher", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);
    const customersApi = new voucherifyClient.CustomersApi(specUtils.apiClient);
    const publicationsApi = new voucherifyClient.PublicationsApi(
      specUtils.apiClient,
    );

    // Step 1: Create a campaign with discount vouchers
    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = CAMPAIGN_NAME;
    campaignBody.voucher = new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignBody.voucher.discount = new voucherifyClient.Discount();
    campaignBody.voucher.discount.type = "AMOUNT";
    campaignBody.voucher.discount.amount_off = 1000;

    const campaign = await campaignsApi.createCampaign(campaignBody);
    createdCampaigns.push(campaign);

    // Assertions on campaign
    expect(campaign).to.not.be(null);
    expect(campaign.name).to.be(CAMPAIGN_NAME);
    expect(campaign.id).to.not.be(null);
    expect(campaign.id).to.not.be("");

    // Step 2: Add vouchers to the campaign
    const firstVoucher = await campaignsApi.addVouchersToCampaign(campaign.id);
    expect(firstVoucher).to.not.be(null);
    expect(firstVoucher.code).to.not.be(null);
    expect(firstVoucher.code).to.not.be("");

    const bundle = await campaignsApi.addVouchersToCampaign(
      campaign.id,
      undefined,
      {vouchersCount: VOUCHERS_COUNT}
    );
    expect(bundle).to.not.be(null);
    expect(bundle.async_action_id).to.not.be(null);

    // Step 3: Create a customer
    const customerBody = new voucherifyClient.CustomersCreateRequestBody();
    customerBody.name = CUSTOMER_NAME;
    customerBody.email = CUSTOMER_EMAIL;

    const customer = await customersApi.createCustomer(customerBody);
    createdCustomers.push(customer);

    expect(customer).to.not.be(null);
    expect(customer.name).to.be(CUSTOMER_NAME);
    expect(customer.email).to.be(CUSTOMER_EMAIL);
    expect(customer.id).to.not.be(null);
    expect(customer.id).to.not.be("");

    // Step 4: Create a publication for the first voucher
    const publicationBody = new voucherifyClient.PublicationsCreateRequestBody();
    publicationBody.voucher = firstVoucher.code;

    const customerObj = new voucherifyClient.Customer();
    customerObj.id = customer.id;
    publicationBody.customer = customerObj;

    publicationBody.channel = null;
    publicationBody.campaign = null;
    publicationBody.metadata = null;

    const publication = await publicationsApi.createPublication(
      publicationBody
    );
    expect(publication).to.not.be(null);
    expect(publication.id).to.not.be(null);
    expect(publication.id).to.not.be("");
  });

  it("test_02_create_campaign_and_add_vouchers_basic", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);

    const campaignsCreateRequestBody =
      new voucherifyClient.CampaignsCreateRequestBody();
    campaignsCreateRequestBody.name = CAMPAIGN_NAME_2;
    campaignsCreateRequestBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignsCreateRequestBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignsCreateRequestBody.voucher.discount =
      new voucherifyClient.Discount();
    campaignsCreateRequestBody.voucher.discount.type = "AMOUNT";
    campaignsCreateRequestBody.voucher.discount.amount_off = 1000;
    campaignsCreateRequestBody.metadata = { mandatory_v: "test" };

    const campaign = await campaignsApi.createCampaign(
      campaignsCreateRequestBody,
    );
    createdCampaigns.push(campaign);

    const asyncActionId = (
      await campaignsApi.addVouchersToCampaign(campaign.id, 5)
    ).async_action_id;
    const campaignsVouchersCreateResponseBody =
      await campaignsApi.addVouchersToCampaign(campaign.id);
    const campaignsVouchersSpecificCodeCreateResponseBody =
      await campaignsApi.addVoucherWithSpecificCodeToCampaign(
        campaign.id,
        VOUCHER_CODE,
      );

    expect(asyncActionId).to.not.be(null);
    expect(campaignsVouchersCreateResponseBody).to.not.be(null);
    expect(campaignsVouchersSpecificCodeCreateResponseBody).to.not.be(null);
  });

  it("test_03_add_vouchers_to_campaign", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);

    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = CAMPAIGN_NAME_3;
    campaignBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignBody.voucher.discount = new voucherifyClient.Discount();
    campaignBody.voucher.discount.type = "AMOUNT";
    campaignBody.voucher.discount.amount_off = 1000;

    const campaign = await campaignsApi.createCampaign(campaignBody);
    createdCampaigns.push(campaign);

    expect(campaign).to.not.be(null);
    expect(campaign.name).to.be(CAMPAIGN_NAME_3);

    const singleVoucher = await campaignsApi.addVouchersToCampaign(campaign.id);
    expect(singleVoucher).to.not.be(null);
    expect(singleVoucher.code).to.not.be(null);
    expect(singleVoucher.campaign_id).to.be(campaign.id);

    const bundle = await campaignsApi.addVouchersToCampaign(campaign.id, 5);
    expect(bundle).to.not.be(null);
    expect(bundle.async_action_id).to.not.be(null);

    const allVoucherCodes = [
      singleVoucher.code,
      ...Array.from({ length: 5 }, (_, i) => `generated_code_${i}`),
    ];
    expect(allVoucherCodes.length).to.be(6);
  });

  it("test_04_update_expiration_date_in_campaign", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);
    const expirationDate = "2090-10-08T12:57:09.386Z";

    const campaignBody = new voucherifyClient.CampaignsCreateRequestBody();
    campaignBody.name = CAMPAIGN_NAME_4;
    campaignBody.voucher =
      new voucherifyClient.CampaignsCreateRequestBodyVoucher();
    campaignBody.voucher.type = "DISCOUNT_VOUCHER";
    campaignBody.voucher.discount = new voucherifyClient.Discount();
    campaignBody.voucher.discount.type = "AMOUNT";
    campaignBody.voucher.discount.amount_off = 1000;
    campaignBody.expiration_date = expirationDate;

    const campaign = await campaignsApi.createCampaign(campaignBody);
    expect(campaign.expiration_date).to.not.be(null);

    const updateCampaignBody =
      new voucherifyClient.CampaignsUpdateRequestBody();
    updateCampaignBody.expiration_date = null;

    const updatedCampaign = await campaignsApi.updateCampaign(
      campaign.id,
      updateCampaignBody,
    );
    expect(updatedCampaign.expiration_date).to.be(undefined);
  });
});
