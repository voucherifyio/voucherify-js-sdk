# Voucherify.RewardValidityHoursResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Whether the reward is purchasable at any time or only during specific daily windows. | [optional] 
**daily** | [**[LoyaltyV2ActivityRewardValidityDailyHoursResponse]**](LoyaltyV2ActivityRewardValidityDailyHoursResponse.md) | Daily time windows. Present only when &#x60;type&#x60; is DAILY. | [optional] 



## Enum: TypeEnum


* `DAILY` (value: `"DAILY"`)

* `ANY_TIME` (value: `"ANY_TIME"`)




