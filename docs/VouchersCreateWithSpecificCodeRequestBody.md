# Voucherify.VouchersCreateWithSpecificCodeRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | **String** | Identifies the voucher&#39;s parent campaign using a unique campaign name. | [optional] 
**campaignId** | **String** | Identifies the voucher&#39;s parent campaign using a unique campaign ID assigned by the Voucherify API. | [optional] 
**category** | **String** | The name of the category that this voucher belongs to. Useful when listing vouchers with the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. | [optional] 
**categoryId** | **String** | Unique identifier assigned by Voucherify to the name of the category that this voucher belongs to. Useful when listing vouchers with the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. | [optional] 
**startDate** | **Date** | Start date defines when the code starts to be active. Activation timestamp is presented in the ISO 8601 format. Voucher is *inactive before* this date. | [optional] 
**expirationDate** | **Date** | Expiration date defines when the code expires. Expiration timestamp is presented in the ISO 8601 format.  Voucher is *inactive after* this date. | [optional] 
**validityTimeframe** | [**ValidityTimeframe**](ValidityTimeframe.md) |  | [optional] 
**validityDayOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the voucher is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60; Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**validityHours** | [**ValidityHours**](ValidityHours.md) |  | [optional] 
**active** | **Boolean** | A flag to toggle the voucher on or off. You can disable a voucher even though it&#39;s within the active period defined by the &#x60;start_date&#x60; and &#x60;expiration_date&#x60;.    - &#x60;true&#x60; indicates an *active* voucher - &#x60;false&#x60; indicates an *inactive* voucher | [optional] 
**additionalInfo** | **String** | An optional field to keep any extra textual information about the code such as a code description and details. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the code. A set of key/value pairs that you can attach to a voucher object. It can be useful for storing additional information about the voucher in a structured format. | [optional] 
**validationRules** | **[String]** | Array containing the ID of the validation rule associated with the voucher. | [optional] 
**redemption** | [**VouchersCreateWithSpecificCodeRequestBodyRedemption**](VouchersCreateWithSpecificCodeRequestBodyRedemption.md) |  | [optional] 
**type** | **String** |  | [optional] 
**loyaltyCard** | [**SimpleLoyaltyCard**](SimpleLoyaltyCard.md) |  | [optional] 
**gift** | [**Gift**](Gift.md) |  | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 



## Enum: [ValidityDayOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)





## Enum: TypeEnum


* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)

* `GIFT_VOUCHER` (value: `"GIFT_VOUCHER"`)

* `DISCOUNT_VOUCHER` (value: `"DISCOUNT_VOUCHER"`)




