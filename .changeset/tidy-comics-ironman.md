---
'@voucherify/sdk': major
---

#### Added support for following endpoints:
- loyalties
  - GET /loyalties/{campaignId}/rewards/{assignmentId}
    - method: `client.loyalties.getRewardAssignment(campaignId, assignmentId)`
  - GET `/loyalties/${campaignId}/tiers/{tierId}/rewards`
    - method: `client.loyalties.listLoyaltyTierReward(campaignId, tierId)`

#### New exported types/interfaces
- Loyalties.ts
  - ListLoyaltyTierRewardResponse
  - LoyaltyTierRewardObject
  - LoyaltyTierRewardRewardObject
  - LoyaltyTierRewardRewardObjectCommon
  - LoyaltyTierRewardRewardCampaignObject
  - LoyaltyTierRewardRewardCoinObject
  - LoyaltyTierRewardRewardMaterialObject
  - RewardParametersCampaign
  - RewardParametersCoin
  - RewardParametersProduct
  - GetRewardAssignmentsResponse
- Rewards.ts
  - RewardsAssignmentObjectCommon

#### Breaking changes in types/interfaces
- RewardsAssignmentObject
  - related_object_id - required
  - related_object_type - required, value always: `campaign`
  - parameters - required
    - loyalty - required
      - points - not required
  - updated_at - required `string` or `null`
- RewardsCreateAssignment
  - campaign - required
  - parameters - required
    - loyalty - required
      - points - not required
- RewardsCreateAssignmentResponse
  - updated_at - required, value always: `null`
- RewardsUpdateAssignmentResponse
  - updated_at - required, value always: `string`

#### Note
- RewardsCreateAssignment
  - This type was defined incorrectly, if you have tried before to `createAssignment` without parameters as they were not required, you would fail every time. So change in types shall not hurt you if your script already worked properly.

