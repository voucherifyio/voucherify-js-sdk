---
'@voucherify/sdk': minor
---

Add support for few endpoints of Loyalties API.
- Added support for new endpoints: `/loyalties/members/{memberId}`, `/loyalties/members/{memberId}/activities`, `/loyalties/members/{memberId}/rewards`, `/loyalties/{campaignId}/members/{memberId}/transfers`, `/loyalties/{campaignId}/members/{memberId}/points-expiration`, `/loyalties/members/{memberId}/transactions`, `/loyalties/{campaignId}/members/{memberId}/transactions`, `/loyalties/members/{memberId}/transactions/export` and `/loyalties/{campaignId}/members/{memberId}/transactions/export` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `ListMemberRewardsParams`, `LoyaltiesListMemberRewardsResponse`, `LoyaltiesTransferPoints`, `GetPointsExpirationParams`, `LoyaltiesGetPointsExpirationResponse`, `ListLoyaltyCardTransactionsParams`, `LoyaltiesListLoyaltyCardTransactionsResponse`, `LoyaltyCardTransactionsType`, `SimpleLoyaltyVoucher`, `LoyaltyCardTransactionsResponse`, `LoyaltyCardTransactionsFields`, `LoyaltiesExportLoyaltyCardTransactionsParams` and `LoyaltiesExportLoyaltyCardTransactionsResponse`
