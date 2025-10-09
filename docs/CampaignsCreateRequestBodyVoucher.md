# Voucherify.CampaignsCreateRequestBodyVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 
**codeConfig** | [**CodeConfig**](CodeConfig.md) |  | [optional] 
**redemption** | [**CampaignsCreateRequestBodyVoucherRedemption**](CampaignsCreateRequestBodyVoucherRedemption.md) |  | [optional] 
**isReferralCode** | **Boolean** | Flag indicating whether this voucher is a referral code; &#x60;true&#x60; for campaign type &#x60;REFERRAL_PROGRAM&#x60;. | [optional] 
**gift** | [**Gift**](Gift.md) |  | [optional] 
**loyaltyCard** | [**CampaignLoyaltyCard**](CampaignLoyaltyCard.md) |  | [optional] 



## Enum: TypeEnum


* `DISCOUNT_VOUCHER` (value: `"DISCOUNT_VOUCHER"`)

* `GIFT_VOUCHER` (value: `"GIFT_VOUCHER"`)

* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)




