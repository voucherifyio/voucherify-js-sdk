# Voucherify.SimpleCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Campaign ID. | [optional] 
**name** | **String** | Campaign name. | [optional] 
**campaignType** | **String** | Type of campaign. | [optional] 
**type** | **String** | Defines whether the campaign can be updated with new vouchers after campaign creation or if the campaign consists of generic (standalone) vouchers.  - &#x60;AUTO_UPDATE&#x60;: the campaign is dynamic, i.e. vouchers will generate based on set criteria -  &#x60;STATIC&#x60;: vouchers need to be manually published - &#x60;STANDALONE&#x60;: campaign for single vouchers | [optional] 
**isReferralCode** | **Boolean** | Flag indicating whether this voucher is a referral code; &#x60;true&#x60; for campaign type &#x60;REFERRAL_PROGRAM&#x60;. | [optional] 
**voucher** | [**SimpleCampaignVoucher**](SimpleCampaignVoucher.md) |  | [optional] 
**referralProgram** | [**ReferralProgram**](ReferralProgram.md) |  | [optional] 
**autoJoin** | **Boolean** | Indicates whether customers will be able to auto-join the campaign if any earning rule is fulfilled. | [optional] 
**joinOnce** | **Boolean** | If this value is set to &#x60;true&#x60;, customers will be able to join the campaign only once. It is always &#x60;false&#x60; for generic (standalone) vouchers campaigns and it cannot be changed in them. It is always &#x60;true&#x60; for loyalty campaigns and it cannot be changed in them. | [optional] 
**active** | **Boolean** | Indicates whether the campaign is active. | [optional] 
**categoryId** | **String** | The unique category ID that this campaign belongs to. | [optional] 
**category** | **String** | Unique category name. | [optional] 
**categories** | [**[Category]**](Category.md) | Contains details about the category. | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a campaign. The metadata object stores all custom attributes assigned to the campaign. | [optional] 
**startDate** | **Date** | Activation timestamp defines when the campaign starts to be active in ISO 8601 format. Campaign is inactive *before* this date.  | [optional] 
**expirationDate** | **Date** | Expiration timestamp defines when the campaign expires in ISO 8601 format.  Campaign is inactive *after* this date. | [optional] 
**description** | **String** | An optional field to keep extra textual information about the campaign such as a campaign description and details. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the campaign was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the campaign was updated in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the campaign. | [optional] [default to &#39;campaign&#39;]



## Enum: TypeEnum


* `AUTO_UPDATE` (value: `"AUTO_UPDATE"`)

* `STATIC` (value: `"STATIC"`)

* `STANDALONE` (value: `"STANDALONE"`)





## Enum: ObjectEnum


* `campaign` (value: `"campaign"`)




