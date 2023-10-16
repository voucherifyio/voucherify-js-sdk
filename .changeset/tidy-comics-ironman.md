---
'@voucherify/sdk': major
---

Added support for new endpoints and adding missing types in Rewards API.

Added support for new endpoints: 
- `/loyalties/{campaignId}/rewards/{assignmentId}`,
- `/loyalties/{campaignId}/tiers/{tierId}/rewards` (example available in readme.md)
- `rewards/{rewardId}/assignments/{assignmentId}`

New exported types/interfaces in Loyalties.ts: 
Domain types:
- LoyaltyTierReward, LoyaltyTierRewardItem, LoyaltyTierRewardItemIdentity, LoyaltyTierRewardItemBase, LoyaltyTierRewardItemResponseData, LoyaltyTierRewardItemParameters, LoyaltyTierRewardItemCampaignParameters, LoyaltyTierRewardItemCoinParameters, LoyaltyTierRewardItemMaterialParameters, LoyaltyTierRewardItemCampaignDiscountCoupons, LoyaltyTierRewardItemCampaignGiftVouchersAndLoyaltyProgram
0-level types:
- LoyaltiesGetRewardAssignmentResponseBody, LoyaltiesListLoyaltyTierRewardsResponseBody

New exported types/interfaces in Rewards.ts: 
Domain types:
- RewardAssignment (old `RewardsAssignmentObject`), RewardAssignmentIdentity, RewardAssignmentBase, RewardAssignmentResponseData
0-level types:
- RewardsListAssignmentsRequestQuery (old `RewardsListAssignmentsParams`),
- RewardsListAssignmentsResponseBody (old `RewardsListAssignmentsResponse`), 
- RewardsCreateAssignmentRequestBody (old `RewardsCreateAssignment`), 
- RewardsCreateAssignmentCoinRequestBody, 
- RewardsCreateAssignmentMainRequestBody,
- RewardsCreateAssignmentResponseBody (old `RewardsCreateAssignmentResponse`), 
- RewardsUpdateAssignmentRequestBody (old `RewardsUpdateAssignment`), 
- RewardsUpdateAssignmentResponseBody (old `RewardsUpdateAssignmentResponse`)
- RewardsGetAssignmentResponseBody (brand new)

(BREAKING CHANGE) Interface `RewardsAssignmentObject` was removed. Now it's `RewardAssignment`.
(BREAKING CHANGE) Interface `RewardsListAssignmentsParams` was renamed. Now it's `RewardsListAssignmentsRequestQuery`.
(BREAKING CHANGE) Interface `RewardsListAssignmentsResponse` was renamed. Now it's `RewardsListAssignmentsResponseBody`.
(BREAKING CHANGE) Interface `RewardsCreateAssignment` was removed. Now it's `RewardsCreateAssignmentRequestBody`. There are two options for the `parameters` property: 
- `RewardsCreateAssignmentCoinRequestBody`: when you are creating assignments for coin reward the `parameters` object is not required. 
- `RewardsCreateAssignmentMainRequestBody`: in other cases the `parameters` object is required.
(BREAKING CHANGE) Interface `RewardsCreateAssignmentResponse` was changed. Now it's equal to required `RewardAssignment` type.
(BREAKING CHANGE) Interface `RewardsUpdateAssignment` was renamed. Now it's `RewardsUpdateAssignmentRequestBody`.
(BREAKING CHANGE) Interface `RewardsUpdateAssignmentResponse` was changed. Now it's equal to required `RewardAssignment` type.