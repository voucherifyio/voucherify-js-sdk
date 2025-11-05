# Voucherify.MemberActivityDataTransactionDetailsDestinationVoucherGift

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Total gift card income over the lifetime of the card. The value is multiplied by 100 to represent 2 decimal places. For example &#x60;10000 cents&#x60; for &#x60;$100.00&#x60;. | [optional] 
**subtractedAmount** | **Number** | Total amount of subtracted credits over the gift card lifetime. | [optional] 
**balance** | **Number** | Available funds. The value is multiplied by 100 to represent 2 decimal places. For example &#x60;10000 cents&#x60; for &#x60;$100.00&#x60;. &#x60;balance&#x60; &#x3D; &#x60;amount&#x60; - &#x60;subtracted_amount&#x60; - &#x60;redemption.redeemed_amount&#x60;. | [optional] 
**effect** | **String** | Defines how the credits are applied to the customer&#39;s order. | [optional] 



## Enum: EffectEnum


* `APPLY_TO_ORDER` (value: `"APPLY_TO_ORDER"`)

* `APPLY_TO_ITEMS` (value: `"APPLY_TO_ITEMS"`)




