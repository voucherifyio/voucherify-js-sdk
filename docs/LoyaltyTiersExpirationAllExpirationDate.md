# Voucherify.LoyaltyTiersExpirationAllExpirationDate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | What triggers the tier to expire for a customer.     &#x60;END_OF_PERIOD&#x60;: Expire tier at the end of the period.     &#x60;END_OF_NEXT_PERIOD&#x60;:  Expire tier at the end of the next period.   &#x60;BALANCE_DROP&#x60;: Tier expires when the points balance drops below the required range of the tier.   &#x60;CUSTOM&#x60;: Tier expires after a certain time period passes following the instance the points balance drops below the required range of the tier. | [optional] 
**extend** | **String** | Extend the expiration by adding extra months or days in ISO 8601 format. The tier will remain active even though it reaches its expiration time period. For example, a tier with a duration of &#x60;P3M&#x60; will be valid for an additional duration of 3 months and a tier with a duration of &#x60;P1D&#x60; will be valid for an additional duration of 1 day. | [optional] 
**rounding** | [**LoyaltyTiersExpirationAllExpirationDateRounding**](LoyaltyTiersExpirationAllExpirationDateRounding.md) |  | [optional] 



## Enum: TypeEnum


* `END_OF_PERIOD` (value: `"END_OF_PERIOD"`)

* `END_OF_NEXT_PERIOD` (value: `"END_OF_NEXT_PERIOD"`)

* `BALANCE_DROP` (value: `"BALANCE_DROP"`)

* `CUSTOM` (value: `"CUSTOM"`)




