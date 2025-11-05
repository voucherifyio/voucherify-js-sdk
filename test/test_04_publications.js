import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

// Generate unique identifiers for test resources
const randomCode = Math.floor(Math.random() * 10000000);
const CUSTOMER_EMAIL = `voucherify+${randomCode}@example.com`;
const CAMPAIGN_NAME = `test_campaign_${randomCode}`;

describe("PublicationsAPI", function () {
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
        } catch (e) {
          if (e.status !== 404) {
            console.log(`Failed to delete campaign ${campaign.id}: ${e}`);
          }
        }
      }
      createdCampaigns = [];
    }
  });

  it("test_01_test_publications", async function () {
    const campaignsApi = new voucherifyClient.CampaignsApi(specUtils.apiClient);
    const publicationsApi = new voucherifyClient.PublicationsApi(
      specUtils.apiClient,
    );

    // Create auto-update campaign
    const campaignsCreateRequestBody =
      new voucherifyClient.CampaignsCreateRequestBody();
    campaignsCreateRequestBody.name = CAMPAIGN_NAME;
    campaignsCreateRequestBody.type = "AUTO_UPDATE";

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

    // Create publication request
    const publicationRequestBody =
      new voucherifyClient.PublicationsCreateRequestBody();

    publicationRequestBody.campaign =
      new voucherifyClient.CreatePublicationCampaign();
    publicationRequestBody.campaign.name = CAMPAIGN_NAME;

    publicationRequestBody.customer = new voucherifyClient.Customer();
    publicationRequestBody.customer.email = CUSTOMER_EMAIL;

    // Publish voucher to customer
    const publication = await publicationsApi.createPublication(
      publicationRequestBody
    );

    // Verify publication was created
    expect(publication.id).to.not.be(null);
  });
});
