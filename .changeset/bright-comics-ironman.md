---
'@voucherify/sdk': minor
---

Added support for new endpoints and adding missing types in Rewards API.

Added support for new endpoints: 
- `/loyalties/{campaignId}/rewards/{assignmentId}`,
- `/loyalties/{campaignId}/tiers/{tierId}/rewards`,
- `/rewards/{rewardId}/assignments/{assignmentId}` (example available in readme.md)

New exported types/interfaces in `Loyalties.ts`: 
Domain types:
- LoyaltyTierRewardItemParameters, 
- LoyaltyTierRewardItemCampaignParameters, 
- LoyaltyTierRewardItemCoinParameters, 
- LoyaltyTierRewardItemMaterialParameters, 
- LoyaltyTierRewardItemCampaignDiscountCoupons, 
- LoyaltyTierRewardItemCampaignGiftVouchersAndLoyaltyProgram

0-level types:
- LoyaltiesGetRewardAssignmentResponseBody,
- LoyaltiesListLoyaltyTierRewardsResponseBody

New exported types/interfaces in `Rewards.ts`: 
Domain types:
- RewardAssignment (old `RewardsAssignmentObject`), 
- RewardsAssignmentCampaignOrMaterialReward,
- RewardsAssignmentCoinReward
- 
0-level types:
- RewardsListAssignmentsRequestQuery (old `RewardsListAssignmentsParams`),
- RewardsListAssignmentsResponseBody (old `RewardsListAssignmentsResponse`), 
- RewardsCreateAssignmentRequestBody (old `RewardsCreateAssignment`), 
- RewardsCreateAssignmentCoinRewardRequestBody, 
- RewardsCreateAssignmentCampaignOrMaterialRewardRequestBody,
- RewardsCreateAssignmentResponseBody (old `RewardsCreateAssignmentResponse`), 
- RewardsUpdateAssignmentRequestBody (old `RewardsUpdateAssignment`), 
- RewardsUpdateAssignmentResponseBody (old `RewardsUpdateAssignmentResponse`)
- RewardsGetAssignmentResponseBody (brand new)

--------------------------------------------------------

Added support for following endpoints:
- GET /vouchers/{code}/transactions (client.vouchers.listTransactions(code, query))
- POST /vouchers/{code}/transactions/export (client.vouchers.exportTransactions(code, body))
- GET /validation-rules-assignments (client.client.validationRules.listRulesAssignments(validationRuleId))

**New exported types/interfaces**
Domain types:
- GiftCardTransaction
- GiftCardTransactionBase
  GiftCardTransactionDetails
- GiftCardTransactionRedemptionDetails
- GiftCardTransactionRefundDetails
- GiftCardTransactionAdditionDetails
- GiftCardTransactionRemovalDetails
- VoucherTransaction
- VoucherTransactionsExportFields
- ValidationRulesAssignment

0-level types:
- VouchersListTransactionsRequestQuery
- VouchersListTransactionsResponseBody
- VouchersExportTransactionsRequestBody
- VouchersExportTransactionsResponseBody
- ValidationRulesListRulesAssignmentsRequestQuery
- ValidationRulesListRulesAssignmentsResponseBody

**Other changes**
- Use `VouchersExportTransactionsRequestBody` as `LoyaltiesExportCardTransactionsRequestBody` (these types are identical, both related to the export of loyalty card transactions)
- Use `VouchersExportTransactionsResponseBody` as `LoyaltiesExportCardTransactionsResponseBody` (these types are identical, both related to the export of loyalty card transactions)

----------------------------------------------------------------

New exported types/interfaces in `Categories.ts`:
- CategoriesListRequestQuery

Added support for query parameters(CategoriesListRequestQuery) in `/categories` (categories.list method)

----------------------------------------------------------------

Add support for few endpoints of Loyalties API:
- Added support for new endpoints: `GET /promotions/{campaignId}/stacks`, `GET /promotions/{campaignId}/stacks`, `GET PUT DELETE /promotions/{campaignId}/stacks/{stackId}`, `GET /promotions/stacks` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `PromotionsStacksListInCampaignResponseBody`, `PromotionsStacksListResponseBody`, `PromotionsStacksListRequestQuery`, `PromotionsStacksGetResponseBody`, `PromotionsStacksUpdateRequestBody`, `PromotionsStacksUpdateResponseBody`, `PromotionsStacksCreateInCampaignRequestBody`, `PromotionsStacksCreateInCampaignResponseBody`, `PromotionStackBase`, `PromotionStack`
