---
'@voucherify/sdk': minor
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
