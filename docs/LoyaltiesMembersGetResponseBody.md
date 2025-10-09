# Voucherify.LoyaltiesMembersGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Assigned by the Voucherify API, identifies the voucher. | [optional] 
**code** | **String** | A code that identifies a voucher. Pattern can use all letters of the English alphabet, Arabic numerals, and special characters. | [optional] 
**campaign** | **String** | A unique campaign name, identifies the voucher&#39;s parent campaign. | [optional] 
**campaignId** | **String** | Assigned by the Voucherify API, identifies the voucher&#39;s parent campaign. | [optional] 
**category** | **String** | Tag defining the category that this voucher belongs to. | [optional] 
**categoryId** | **String** | Unique category ID assigned by Voucherify. | [optional] 
**type** | **String** | Defines the type of the voucher.  | [optional] [default to &#39;LOYALTY_CARD&#39;]
**discount** | **Object** |  | [optional] 
**gift** | **Object** |  | [optional] 
**loyaltyCard** | [**LoyaltiesMembersGetResponseBodyLoyaltyCard**](LoyaltiesMembersGetResponseBodyLoyaltyCard.md) |  | [optional] 
**startDate** | **Date** | Activation timestamp defines when the code starts to be active in ISO 8601 format. Voucher is *inactive before* this date.  | [optional] 
**expirationDate** | **Date** | Expiration timestamp defines when the code expires in ISO 8601 format.  Voucher is *inactive after* this date. | [optional] 
**validityTimeframe** | [**ValidityTimeframe**](ValidityTimeframe.md) |  | [optional] 
**validityDayOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the voucher is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60; Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**validityHours** | [**ValidityHours**](ValidityHours.md) |  | [optional] 
**active** | **Boolean** | A flag to toggle the voucher on or off. You can disable a voucher even though it&#39;s within the active period defined by the &#x60;start_date&#x60; and &#x60;expiration_date&#x60;.    - &#x60;true&#x60; indicates an *active* voucher - &#x60;false&#x60; indicates an *inactive* voucher | [optional] 
**additionalInfo** | **String** | An optional field to keep any extra textual information about the code such as a code description and details. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the code. A set of key/value pairs that you can attach to a voucher object. It can be useful for storing additional information about the voucher in a structured format. | [optional] 
**assets** | [**VoucherAssets**](VoucherAssets.md) |  | [optional] 
**isReferralCode** | **Boolean** | This is always false for loyalty members. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the voucher was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the voucher was last updated in ISO 8601 format. | [optional] 
**holderId** | **String** | Unique identifier of the customer who owns the voucher. | [optional] 
**object** | **String** | The type of the object represented by JSON. Default is &#x60;voucher&#x60;. | [optional] [default to &#39;voucher&#39;]
**publish** | [**LoyaltiesMembersGetResponseBodyPublish**](LoyaltiesMembersGetResponseBodyPublish.md) |  | [optional] 
**redemption** | [**LoyaltiesMembersGetResponseBodyRedemption**](LoyaltiesMembersGetResponseBodyRedemption.md) |  | [optional] 



## Enum: TypeEnum


* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)





## Enum: [ValidityDayOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)




