# Voucherify.ValidationsRedeemableInapplicable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Indicates whether the redeemable can be applied or not applied based on the validation rules. | [optional] [default to &#39;INAPPLICABLE&#39;]
**id** | **String** | Redeemable ID, i.e. the voucher code. | [optional] 
**object** | **String** | Redeemable&#39;s object type. | [optional] 
**result** | [**ValidationsRedeemableInapplicableResult**](ValidationsRedeemableInapplicableResult.md) |  | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes in the form of key/value pairs assigned to the redeemable. | [optional] 
**categories** | [**[CategoryWithStackingRulesType]**](CategoryWithStackingRulesType.md) |  | [optional] 
**campaignName** | **String** | Campaign name. Displayed only if the &#x60;options.expand&#x60; is passed with a &#x60;redeemable&#x60; value in the validation request body. | [optional] 
**campaignId** | **String** | Unique campaign ID assigned by Voucherify. Displayed only if the &#x60;options.expand&#x60; is passed with a &#x60;redeemable&#x60; value in the validation request body. | [optional] 
**name** | **String** | Name of the promotion tier. Displayed only if the &#x60;options.expand&#x60; is passed with a &#x60;redeemable&#x60; value in the validation request body. | [optional] 



## Enum: StatusEnum


* `INAPPLICABLE` (value: `"INAPPLICABLE"`)





## Enum: ObjectEnum


* `voucher` (value: `"voucher"`)

* `promotion_tier` (value: `"promotion_tier"`)




