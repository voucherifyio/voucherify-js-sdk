# Voucherify.RewardTypeCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique campaign ID, assigned by Voucherify. | [optional] 
**balance** | **Number** | The number of points to be added to a loyalty card or the amount to be added to the current balance on the gift card.  For gift cards, the value is multiplied by 100 to precisely represent 2 decimal places. For example, $100 amount is written as 10000. | [optional] 
**type** | **String** | Campaign type. | [optional] 



## Enum: TypeEnum


* `DISCOUNT_COUPONS` (value: `"DISCOUNT_COUPONS"`)

* `GIFT_VOUCHERS` (value: `"GIFT_VOUCHERS"`)

* `LOYALTY_PROGRAM` (value: `"LOYALTY_PROGRAM"`)




