---
'@voucherify/sdk': minor
---

Add support for few endpoints of Loyalties API.
- Added support for new endpoints: `GET /loyalties/{campaignId}/reward-assignments/{assignmentId}`, `GET /loyalties/{campaignId}/reward-assignments/{assignmentId}/reward`, `GET /loyalties/{campaignId}/tiers`, `GET /loyalties/{campaignId}/tiers/{tierId}`, `POST /loyalties/{campaignId}/tiers`, `GET /loyalties/{campaignId}/tiers/{tierId}/earning-rules`, `GET /loyalties/members/{memberId}/tiers` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `LoyaltiesGetRewardAssignmentResponseBody`, `LoyaltiesGetRewardDetailsResponseBody`, `LoyaltiesListTiersRequestQuery`, `LoyaltiesListLoyaltyTierEarningRulesRequestQuery`, `LoyaltiesGetTierResponseBody`, `LoyaltiesCreateTiersRequestBody`, `LoyaltiesCreateTiersResponseBody`,`LoyaltiesListTiersResponseBody`, `LoyaltiesListMemberLoyaltyTiersResponseBody`, `LoyaltiesListLoyaltyTierEarningRulesResponseBody`, `EarningRule`, `LoyaltyTier`, `CreateLoyaltyTier`, MappingMultiply`, `MappingFixed`
