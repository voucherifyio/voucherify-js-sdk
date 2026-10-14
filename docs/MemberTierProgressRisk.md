# Voucherify.MemberTierProgressRisk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Risk type - &#x60;TIER_DOWNGRADE&#x60; when the member would fall to a lower tier, &#x60;TIER_LEFT&#x60; when the member would leave the tier structure entirely. | [optional] 
**date** | **Date** | Date when the risk materializes (ISO 8601), or &#x60;null&#x60;. | [optional] 
**tier** | [**MemberTierProgressTier**](MemberTierProgressTier.md) |  | [optional] 



## Enum: TypeEnum


* `TIER_DOWNGRADE` (value: `"TIER_DOWNGRADE"`)

* `TIER_LEFT` (value: `"TIER_LEFT"`)




