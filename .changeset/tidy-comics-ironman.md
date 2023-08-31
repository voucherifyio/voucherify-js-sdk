---
'@voucherify/sdk': major
---

To run tests you need to copy packages/sdk/.env.example to packages/sdk/.env and fill the file with your credentials.
Tests uses REAL calls to Voucherify. You may reach the limit of your account if you are using sandbox account.

**New exported types/interfaces**
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
- Rewards.ts
  - RewardsAssignmentObjectCommon

**Breaking changes in types/interfaces**
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

**Note**
- RewardsCreateAssignment
  - This type was defined incorrectly, if you have tried before to `createAssignment` without parameters as they were not required, you would fail every time. So change in types shall not hurt you if your script already worked properly.

