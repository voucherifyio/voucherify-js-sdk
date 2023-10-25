---
'@voucherify/sdk': minor
---

Add support for few endpoints of Loyalties API and added new devDependency: `utility-types`.
- Added support for new endpoints: `GET /promotions/{campaignId}/stacks`, `GET /promotions/{campaignId}/stacks`, `GET PUT DELETE /promotions/{campaignId}/stacks/{stackId}`, `GET /promotions/stacks` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `PromotionsStacksListInCampaignResponseBody`, `PromotionsStacksListResponseBody`, `PromotionsStacksListRequestQuery`, `PromotionsStacksGetResponseBody`, `PromotionsStacksUpdateRequestBody`, `PromotionsStacksUpdateResponseBody`, `PromotionsStacksCreateInCampaignRequestBody`, `PromotionsStacksCreateInCampaignResponseBody`, `PromotionStackBase`, `PromotionStack`
