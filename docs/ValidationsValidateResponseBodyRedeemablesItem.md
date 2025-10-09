# Voucherify.ValidationsValidateResponseBodyRedeemablesItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** |  | [optional] 
**id** | **String** | Redeemable ID, i.e. the voucher code. | [optional] 
**object** | **String** | Redeemable&#39;s object type. | [optional] 
**order** | [**ValidationsValidateResponseBodyRedeemablesItemOrder**](ValidationsValidateResponseBodyRedeemablesItemOrder.md) |  | [optional] 
**applicableTo** | [**ApplicableToResultList**](ApplicableToResultList.md) |  | [optional] 
**inapplicableTo** | [**InapplicableToResultList**](InapplicableToResultList.md) |  | [optional] 
**result** | [**ValidationsValidateResponseBodyRedeemablesItemResult**](ValidationsValidateResponseBodyRedeemablesItemResult.md) |  | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes in the form of key/value pairs assigned to the redeemable. | [optional] 
**categories** | [**[CategoryWithStackingRulesType]**](CategoryWithStackingRulesType.md) |  | [optional] 
**campaignName** | **String** | Campaign name. Displayed only if the &#x60;options.expand&#x60; is passed with a &#x60;redeemable&#x60; value in the validation request body. | [optional] 
**campaignId** | **String** | Unique campaign ID assigned by Voucherify. Displayed only if the &#x60;options.expand&#x60; is passed with a &#x60;redeemable&#x60; value in the validation request body. | [optional] 
**name** | **String** | Name of the promotion tier. Displayed only if the &#x60;options.expand&#x60; is passed with a &#x60;redeemable&#x60; value in the validation request body. | [optional] 



## Enum: StatusEnum


* `APPLICABLE` (value: `"APPLICABLE"`)

* `INAPPLICABLE` (value: `"INAPPLICABLE"`)

* `SKIPPED` (value: `"SKIPPED"`)





## Enum: ObjectEnum


* `voucher` (value: `"voucher"`)

* `promotion_tier` (value: `"promotion_tier"`)




