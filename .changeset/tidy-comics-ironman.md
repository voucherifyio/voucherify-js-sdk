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
