# Voucherify.QualificationsRedeemable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the redeemable. For a voucher, it&#39;s its &#x60;code&#x60; value. | [optional] 
**object** | **String** | Object type of the redeemable. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the object was created. The value is shown in the ISO 8601 format. | [optional] 
**result** | [**RedeemableResult**](RedeemableResult.md) |  | [optional] 
**order** | [**QualificationsRedeemableOrder**](QualificationsRedeemableOrder.md) |  | [optional] 
**validationRuleId** | **String** | A unique validation rule identifier assigned by the Voucherify API. The validation rule is verified before points are added to the balance. | [optional] 
**applicableTo** | [**ApplicableToResultList**](ApplicableToResultList.md) |  | [optional] 
**inapplicableTo** | [**InapplicableToResultList**](InapplicableToResultList.md) |  | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the product. A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format. | [optional] 
**categories** | [**[CategoryWithStackingRulesType]**](CategoryWithStackingRulesType.md) | List of category information. | [optional] 
**banner** | **String** | Name of the earning rule. This is displayed as a header for the earning rule in the Dashboard. | [optional] 
**name** | **String** | Name of the redeemable. | [optional] 
**campaignName** | **String** | Name of the campaign associated to the redeemable. This field is available only if object is not &#x60;campaign&#x60; | [optional] 
**campaignId** | **String** | Id of the campaign associated to the redeemable. This field is available only if object is not &#x60;campaign&#x60; | [optional] 
**validationRulesAssignments** | [**ValidationRulesAssignmentsList**](ValidationRulesAssignmentsList.md) |  | [optional] 
**redeemables** | [**[QualificationsRedeemableBase]**](QualificationsRedeemableBase.md) |  | [optional] 



## Enum: ObjectEnum


* `campaign` (value: `"campaign"`)

* `promotion_tier` (value: `"promotion_tier"`)

* `promotion_stack` (value: `"promotion_stack"`)

* `voucher` (value: `"voucher"`)




