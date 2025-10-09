# Voucherify.MemberActivityDataRedemptionRewardVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**code** | **String** |  | [optional] 
**gift** | [**MemberActivityDataRedemptionRewardVoucherGift**](MemberActivityDataRedemptionRewardVoucherGift.md) |  | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 
**loyaltyCard** | [**MemberActivityDataRedemptionRewardVoucherLoyaltyCard**](MemberActivityDataRedemptionRewardVoucherLoyaltyCard.md) |  | [optional] 
**type** | **String** |  | [optional] 
**campaign** | **String** |  | [optional] 
**campaignId** | **String** |  | [optional] 
**isReferralCode** | **Boolean** | Flag indicating whether this voucher is a referral code; &#x60;true&#x60; for campaign type &#x60;REFERRAL_PROGRAM&#x60;. | [optional] 
**holderId** | **String** | Unique customer identifier of the redeemable holder. It equals to the customer ID assigned by Voucherify. | [optional] 
**referrerId** | **String** |  | [optional] 
**categoryId** | **String** |  | [optional] 
**categories** | [**[Category]**](Category.md) | Contains details about the category. | [optional] 
**active** | **Boolean** | Shows whether the voucher is on or off. &#x60;true&#x60; indicates an *active* voucher and &#x60;false&#x60; indicates an *inactive* voucher. and A flag to toggle the voucher on or off. You can disable a voucher even though it&#39;s within the active period defined by the &#x60;start_date&#x60; and &#x60;expiration_date&#x60;.    - &#x60;true&#x60; indicates an *active* voucher - &#x60;false&#x60; indicates an *inactive* voucher | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**redemption** | [**MemberActivityDataRedemptionRewardVoucherRedemption**](MemberActivityDataRedemptionRewardVoucherRedemption.md) |  | [optional] 
**startDate** | **String** |  | [optional] 
**expirationDate** | **Date** | Expiration timestamp defines when the code expires in ISO 8601 format.  Voucher is *inactive after* this date. | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a voucher. The metadata object stores all custom attributes assigned to the voucher. and The metadata object stores all custom attributes assigned to the code. A set of key/value pairs that you can attach to a voucher object. It can be useful for storing additional information about the voucher in a structured format. | [optional] 
**object** | **String** |  | [optional] 
**category** | **String** | Tag defining the category that this voucher belongs to. Useful when listing vouchers using the List Vouchers endpoint. | [optional] 
**validityTimeframe** | [**ValidityTimeframe**](ValidityTimeframe.md) |  | [optional] 
**validityDayOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the voucher is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60; Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**validityHours** | [**ValidityHours**](ValidityHours.md) |  | [optional] 
**additionalInfo** | **String** | An optional field to keep any extra textual information about the code such as a code description and details. | [optional] 
**assets** | [**VoucherAssets**](VoucherAssets.md) |  | [optional] 
**publish** | [**MemberActivityDataRedemptionRewardVoucherPublish**](MemberActivityDataRedemptionRewardVoucherPublish.md) |  | [optional] 
**validationRulesAssignments** | [**ValidationRulesAssignmentsList**](ValidationRulesAssignmentsList.md) |  | [optional] 



## Enum: TypeEnum


* `DISCOUNT_VOUCHER` (value: `"DISCOUNT_VOUCHER"`)

* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)

* `GIFT_VOUCHER` (value: `"GIFT_VOUCHER"`)





## Enum: [ValidityDayOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)




