# Voucherify.ManagementProjectsTemplatesCampaignsCopyCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the campaign template. It is assigned by Voucherify. | [optional] 
**name** | **String** | User-defined name of the campaign template. | [optional] 
**description** | **String** | User-defined description of the campaign template. | [optional] 
**campaignType** | **String** | Type of the campaign used to create the campaign template. Templates created from a promotion tier are converted to &#x60;DISCOUNT_COUPONS&#x60;. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the campaign template was created. The value is shown in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;campaign_template&#39;]



## Enum: CampaignTypeEnum


* `DISCOUNT_COUPONS` (value: `"DISCOUNT_COUPONS"`)

* `GIFT_VOUCHERS` (value: `"GIFT_VOUCHERS"`)





## Enum: ObjectEnum


* `campaign_template` (value: `"campaign_template"`)




