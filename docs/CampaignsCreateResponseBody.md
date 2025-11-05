# Voucherify.CampaignsCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique campaign ID, assigned by Voucherify. | [optional] 
**name** | **String** | Campaign name. | [optional] 
**description** | **String** | An optional field to keep any extra textual information about the campaign such as a campaign description and details. | [optional] 
**campaignType** | **String** | Type of campaign. | [optional] 
**type** | **String** | Defines whether the campaign can be updated with new vouchers after campaign creation or if the campaign consists of generic (standalone) vouchers.  - &#x60;AUTO_UPDATE&#x60;: the campaign is dynamic, i.e. vouchers will generate based on set criteria -  &#x60;STATIC&#x60;: vouchers need to be manually published - &#x60;STANDALONE&#x60;: campaign for single vouchers | [optional] 
**voucher** | [**CampaignVoucher**](CampaignVoucher.md) |  | [optional] 
**autoJoin** | **Boolean** | Indicates whether customers will be able to auto-join a loyalty campaign if any earning rule is fulfilled. | [optional] 
**joinOnce** | **Boolean** | If this value is set to &#x60;true&#x60;, customers will be able to join the campaign only once. It is always &#x60;false&#x60; for generic (standalone) vouchers campaigns and it cannot be changed in them. It is always &#x60;true&#x60; for loyalty campaigns and it cannot be changed in them. | [optional] 
**useVoucherMetadataSchema** | **Boolean** | Flag indicating whether the campaign is to use the voucher&#39;s metadata schema instead of the campaign metadata schema. | [optional] 
**validityTimeframe** | [**ValidityTimeframe**](ValidityTimeframe.md) |  | [optional] 
**validityDayOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the voucher is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60; Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**validityHours** | [**ValidityHours**](ValidityHours.md) |  | [optional] 
**activityDurationAfterPublishing** | **String** | Defines the amount of time the vouchers will be active after publishing. The value is shown in the ISO 8601 format. For example, a voucher with the value of P24D will be valid for a duration of 24 days. | [optional] 
**vouchersCount** | **Number** | Total number of unique vouchers in campaign. | [optional] 
**startDate** | **Date** | Activation timestamp defines when the campaign starts to be active in ISO 8601 format. Campaign is *inactive before* this date.  | [optional] 
**expirationDate** | **Date** | Expiration timestamp defines when the campaign expires in ISO 8601 format.  Campaign is *inactive after* this date. | [optional] 
**active** | **Boolean** | A flag to toggle the campaign on or off. You can disable a campaign even though it&#39;s within the active period defined by the &#x60;start_date&#x60; and &#x60;expiration_date&#x60;.    - &#x60;true&#x60; indicates an *active* campaign - &#x60;false&#x60; indicates an *inactive* campaign | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the campaign. A set of key/value pairs that you can attach to a campaign object. It can be useful for storing additional information about the campaign in a structured format. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the campaign was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the campaign was last updated in ISO 8601 format. | [optional] 
**category** | **String** | Unique category name. | [optional] 
**creationStatus** | **String** | Indicates the status of the campaign creation. | [optional] 
**vouchersGenerationStatus** | **String** | Indicates the status of the campaign&#39;s voucher generation. | [optional] 
**readonly** | **Boolean** | Indicates whether the campaign can be only read by a restricted user in the Areas and Stores enterprise feature. It is returned only to restricted users; this field is not returned for users with other roles. It is also not returned for restricted users who use the [GET Campaign summary](/api-reference/campaigns/get-campaign-summary) endpoint. | [optional] 
**_protected** | **Boolean** | Indicates whether the resource can be deleted. | [optional] 
**categoryId** | **String** | Unique category ID that this campaign belongs to. | [optional] 
**categories** | [**[Category]**](Category.md) | Contains details about the campaign category. For the GET [List campaigns](/api-reference/campaigns/list-campaigns) endpoint, this is returned only if the &#x60;expand&#x3D;category&#x60; query parameter is passed in the request. Otherwise, it is returned as an empty array. For GET [Campaign summary](/api-reference/campaigns/get-campaign-summary) endpoint, it is always returned as an empty array. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the campaign. | [optional] [default to &#39;campaign&#39;]
**referralProgram** | [**ReferralProgram**](ReferralProgram.md) |  | [optional] 
**loyaltyTiersExpiration** | [**LoyaltyTiersExpirationAll**](LoyaltyTiersExpirationAll.md) |  | [optional] 
**accessSettingsAssignments** | [**AccessSettingsCampaignAssignmentsList**](AccessSettingsCampaignAssignmentsList.md) |  | [optional] 
**promotion** | [**PromotionTiersList**](PromotionTiersList.md) |  | [optional] 
**validationRulesAssignments** | [**ValidationRulesAssignmentsList**](ValidationRulesAssignmentsList.md) |  | [optional] 



## Enum: CampaignTypeEnum


* `LOYALTY_PROGRAM` (value: `"LOYALTY_PROGRAM"`)

* `GIFT_VOUCHERS` (value: `"GIFT_VOUCHERS"`)

* `DISCOUNT_COUPONS` (value: `"DISCOUNT_COUPONS"`)

* `PROMOTION` (value: `"PROMOTION"`)

* `REFERRAL_PROGRAM` (value: `"REFERRAL_PROGRAM"`)





## Enum: TypeEnum


* `AUTO_UPDATE` (value: `"AUTO_UPDATE"`)

* `STATIC` (value: `"STATIC"`)

* `STANDALONE` (value: `"STANDALONE"`)





## Enum: [ValidityDayOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)





## Enum: CreationStatusEnum


* `DONE` (value: `"DONE"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `FAILED` (value: `"FAILED"`)

* `DRAFT` (value: `"DRAFT"`)

* `MODIFYING` (value: `"MODIFYING"`)





## Enum: VouchersGenerationStatusEnum


* `DONE` (value: `"DONE"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `FAILED` (value: `"FAILED"`)

* `DRAFT` (value: `"DRAFT"`)

* `MODIFYING` (value: `"MODIFYING"`)




