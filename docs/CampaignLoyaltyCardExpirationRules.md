# Voucherify.CampaignLoyaltyCardExpirationRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**periodType** | **String** | Type of period. Can be set for &#x60;MONTH&#x60; or &#x60;FIXED_DAY_OF_YEAR&#x60;. &#x60;MONTH&#x60; requires the &#x60;period_value&#x60; field. &#x60;FIXED_DAY_OF_YEAR&#x60; requires the &#x60;fixed_month&#x60; and &#x60;fixed_day&#x60; fields. | [optional] 
**periodValue** | **Number** | Value of the period. Required for the &#x60;period_type: MONTH&#x60;. | [optional] 
**roundingType** | **String** | Type of rounding of the expiration period. Optional for the &#x60;period_type: MONTH&#x60;. | [optional] 
**roundingValue** | **Number** | Value of rounding of the expiration period. Required for the &#x60;rounding_type&#x60;. | [optional] 
**fixedMonth** | **Number** | Determines the month when the points expire; &#x60;1&#x60; is January, &#x60;2&#x60; is February, and so on. Required for the &#x60;period_type: FIXED_DAY_OF_YEAR&#x60;. | [optional] 
**fixedDay** | **Number** | Determines the day of the month when the points expire. Required for the &#x60;period_type: FIXED_DAY_OF_YEAR&#x60;. | [optional] 



## Enum: PeriodTypeEnum


* `FIXED_DAY_OF_YEAR` (value: `"FIXED_DAY_OF_YEAR"`)

* `MONTH` (value: `"MONTH"`)





## Enum: RoundingTypeEnum


* `END_OF_MONTH` (value: `"END_OF_MONTH"`)

* `END_OF_QUARTER` (value: `"END_OF_QUARTER"`)

* `END_OF_HALF_YEAR` (value: `"END_OF_HALF_YEAR"`)

* `END_OF_YEAR` (value: `"END_OF_YEAR"`)

* `PARTICULAR_MONTH` (value: `"PARTICULAR_MONTH"`)




