# Voucherify.PromotionsStacksUpdateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Promotion stack name. | [optional] 
**tiers** | [**PromotionsStacksUpdateResponseBodyTiers**](PromotionsStacksUpdateResponseBodyTiers.md) |  | [optional] 
**id** | **String** | Unique promotion stack ID. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the promotion stack was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the promotion stack was updated. The value is shown in the ISO 8601 format. | [optional] 
**campaignId** | **String** | Promotion stack&#39;s parent campaign&#39;s unique ID. | [optional] 
**object** | **String** | The type of the object represented by JSON.  | [optional] [default to &#39;promotion_stack&#39;]
**categoryId** | **String** | Promotion stack category ID. | [optional] 
**categories** | [**[PromotionStackBase]**](PromotionStackBase.md) | Details about the category assigned to the promotion stack. | [optional] 



## Enum: ObjectEnum


* `promotion_stack` (value: `"promotion_stack"`)




