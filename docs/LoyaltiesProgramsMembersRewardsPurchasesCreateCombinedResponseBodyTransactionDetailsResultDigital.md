# Voucherify.LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBodyTransactionDetailsResultDigital

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Digital reward type. | [optional] 
**discountCoupons** | [**[RewardPurchaseDigitalCoupon]**](RewardPurchaseDigitalCoupon.md) | Fulfilled discount coupons (present when &#x60;type&#x60; is &#x60;DISCOUNT_COUPONS&#x60;). | [optional] 
**giftVouchers** | [**[RewardPurchaseDigitalGiftVoucher]**](RewardPurchaseDigitalGiftVoucher.md) | Fulfilled gift vouchers (present when &#x60;type&#x60; is &#x60;GIFT_VOUCHERS&#x60;). | [optional] 
**loyaltyCardPoints** | [**LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBodyTransactionDetailsResultDigitalLoyaltyCardPoints**](LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBodyTransactionDetailsResultDigitalLoyaltyCardPoints.md) |  | [optional] 



## Enum: TypeEnum


* `DISCOUNT_COUPONS` (value: `"DISCOUNT_COUPONS"`)

* `GIFT_VOUCHERS` (value: `"GIFT_VOUCHERS"`)

* `LOYALTY_CARD_POINTS` (value: `"LOYALTY_CARD_POINTS"`)




