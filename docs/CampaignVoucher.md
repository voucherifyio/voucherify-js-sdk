# Voucherify.CampaignVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of voucher. | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 
**gift** | [**Gift**](Gift.md) |  | [optional] 
**loyaltyCard** | [**CampaignLoyaltyCard**](CampaignLoyaltyCard.md) |  | [optional] 
**redemption** | [**CampaignVoucherRedemption**](CampaignVoucherRedemption.md) |  | [optional] 
**codeConfig** | [**CodeConfig**](CodeConfig.md) |  | 
**isReferralCode** | **Boolean** | Flag indicating whether this voucher is a referral code; &#x60;true&#x60; for campaign type &#x60;REFERRAL_PROGRAM&#x60;. | [optional] 
**startDate** | **Date** | Activation timestamp defines when the campaign starts to be active in ISO 8601 format. Campaign is *inactive before* this date.  | [optional] 
**expirationDate** | **Date** | Expiration timestamp defines when the campaign expires in ISO 8601 format.  Campaign is *inactive after* this date. | [optional] 
**validityTimeframe** | [**ValidityTimeframe**](ValidityTimeframe.md) |  | [optional] 
**validityDayOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the voucher is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60; Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**validityHours** | [**ValidityHours**](ValidityHours.md) |  | [optional] 



## Enum: [ValidityDayOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)




