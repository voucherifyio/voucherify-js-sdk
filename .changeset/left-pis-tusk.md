---
'@voucherify/sdk': minor
---

Add support for few endpoints of Loyalties API.
- Added support for new endpoints: `GET /loyalties/{campaignId}/reward-assignments/{assignmentId}`, `GET /loyalties/{campaignId}/reward-assignments/{assignmentId}/reward`, `GET /loyalties/{campaignId}/tiers`, `GET /loyalties/{campaignId}/tiers/{tierId}`, `GET /loyalties/{campaignId}/tiers/{tierId}/earning-rules`, `GET /loyalties/members/{memberId}/tiers` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `LoyaltiesGetRewardAssignmentResponseBody`, `LoyaltiesGetRewardDetailsResponseBody`, `LoyaltiesListLoyaltyTiersRequestQuery`, `LoyaltiesListLoyaltyTierEarningRulesRequestQuery`, `LoyaltiesGetLoyaltyTierResponseBody`, `LoyaltiesListLoyaltyTiersResponseBody`, `LoyaltiesListMemberLoyaltyTiersResponseBody`, `LoyaltiesListLoyaltyTierEarningRulesResponseBody`, `EarningRule`, `LoyaltyTier`, `MappingMultiply`, `MappingFixed`
