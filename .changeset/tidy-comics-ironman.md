---
'@voucherify/sdk': major
---

Added support for new endpoints and adding missing types in rewards api.
- Added support for new endpoints: `/loyalties/{campaignId}/rewards/{assignmentId}` and `/loyalties/${campaignId}/tiers/{tierId}/rewards` [(example available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces in `Loyalties.ts`: `ListLoyaltyTierRewardResponse`, `LoyaltyTierRewardObject`, `LoyaltyTierRewardRewardObject`, `LoyaltyTierRewardRewardObjectCommon`, `LoyaltyTierRewardRewardCampaignObject`, `LoyaltyTierRewardRewardCoinObject`, `LoyaltyTierRewardRewardMaterialObject`, `RewardParametersCampaign`, `RewardParametersCoin`, `RewardParametersProduct` and `GetRewardAssignmentsResponse`
- New exported types/interfaces in `Rewards.ts`: `RewardsAssignmentObjectCommon`
- **(BREAKING CHANGE)** Interface `RewardsAssignmentObject` was changed. Few values are now required, uses union type.
- **(BREAKING CHANGE)** Interface `RewardsCreateAssignment` was changed. Few values are now required. **If previously you send data without required parameters, you failed anyway.**
- **(BREAKING CHANGE)** Interface `RewardsCreateAssignmentResponse` was changed. Type of value `updated_at` is always `null`.
- **(BREAKING CHANGE)** Interface `RewardsUpdateAssignmentResponse` was changed. Type of value `updated_at` is always `string`.
