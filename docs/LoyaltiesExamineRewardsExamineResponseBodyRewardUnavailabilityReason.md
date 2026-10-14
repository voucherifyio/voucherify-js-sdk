# Voucherify.LoyaltiesExamineRewardsExamineResponseBodyRewardUnavailabilityReason

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Identifies why the reward is unavailable.  - &#x60;insufficient_balance&#x60;: The source card balance is lower than the required points cost.  - &#x60;no_target_card&#x60;: The member does not have the loyalty card that would receive the points from a \&quot;points on a loyalty card\&quot; reward. | [optional] 
**details** | **Object** |  | 
**object** | **String** | Object type marker. Always &#x60;reward_unavailability_reason&#x60;. | [optional] [default to &#39;reward_unavailability_reason&#39;]



## Enum: ReasonEnum


* `insufficient_balance` (value: `"insufficient_balance"`)

* `no_target_card` (value: `"no_target_card"`)





## Enum: ObjectEnum


* `reward_unavailability_reason` (value: `"reward_unavailability_reason"`)




