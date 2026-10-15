# Voucherify.LoyaltiesExamineRewardsExamineResponseBodyMembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | [**ExamineMemberReference**](ExamineMemberReference.md) |  | 
**program** | [**ExamineProgramReference**](ExamineProgramReference.md) |  | 
**cards** | [**[LoyaltiesExamineRewardsExamineResponseBodyCardEstimation]**](LoyaltiesExamineRewardsExamineResponseBodyCardEstimation.md) | Lists cards that have at least one reward with a resolved points cost. Can be empty. | [optional] 
**object** | **String** | Object type marker. Always &#x60;member_rewards_opportunity&#x60;. | [optional] [default to &#39;member_rewards_opportunity&#39;]



## Enum: ObjectEnum


* `member_rewards_opportunity` (value: `"member_rewards_opportunity"`)




