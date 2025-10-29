# Voucherify.CustomerRedeemable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique redeemable holder identifier. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the redeemable was assigned. The value is shown in the ISO 8601 format. | [optional] 
**redeemableId** | **String** | Identifier of the redeemable item. | [optional] 
**redeemableObject** | **String** | Type of the redeemable. | [optional] 
**customerId** | **String** | Identifier of the customer. | [optional] 
**holderRole** | **String** | Role of the holder. | [optional] [default to &#39;OWNER&#39;]
**campaignId** | **String** | Unique campaign identifier, assigned by Voucherify. | [optional] 
**campaignType** | **String** | Defines the type of the campaign. | [optional] [default to &#39;DISCOUNT_COUPONS&#39;]
**voucherType** | **String** | Defines the type of the voucher. | [optional] [default to &#39;DISCOUNT_VOUCHER&#39;]
**redeemable** | [**CustomerRedeemableRedeemable**](CustomerRedeemableRedeemable.md) |  | [optional] 



## Enum: HolderRoleEnum


* `OWNER` (value: `"OWNER"`)

* `REFERRER` (value: `"REFERRER"`)

* `REFEREE` (value: `"REFEREE"`)





## Enum: CampaignTypeEnum


* `LOYALTY_PROGRAM` (value: `"LOYALTY_PROGRAM"`)

* `GIFT_VOUCHERS` (value: `"GIFT_VOUCHERS"`)

* `DISCOUNT_COUPONS` (value: `"DISCOUNT_COUPONS"`)

* `PROMOTION` (value: `"PROMOTION"`)

* `REFERRAL_PROGRAM` (value: `"REFERRAL_PROGRAM"`)





## Enum: VoucherTypeEnum


* `GIFT_VOUCHER` (value: `"GIFT_VOUCHER"`)

* `DISCOUNT_VOUCHER` (value: `"DISCOUNT_VOUCHER"`)

* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)




