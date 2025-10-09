# Voucherify.RedeemableHolder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the redeemable holder. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the redeemable was assigned. The value is shown in the ISO 8601 format. | [optional] 
**redeemableId** | **String** | Identifier of the redeemable item. | [optional] 
**redeemableObject** | **String** | Type of the redeemable. | [optional] 
**customerId** | **String** | Unique identifier of the customer. | [optional] 
**holderRole** | **String** | Role of the holder. | [optional] 
**campaignId** | **String** | Unique identifier of the campaign as assigned by Voucherify. | [optional] 
**campaignType** | **String** | Defines the type of the campaign. | [optional] [default to &#39;REFERRAL_PROGRAM&#39;]
**voucherType** | **String** | Defines the type of the voucher. | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a redeemable holder. The metadata object stores all custom attributes assigned to the &#x60;redeemable_holder&#x60; object. | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;redeemable_holder&#39;]



## Enum: HolderRoleEnum


* `OWNER` (value: `"OWNER"`)

* `REFERRER` (value: `"REFERRER"`)

* `REFEREE` (value: `"REFEREE"`)





## Enum: CampaignTypeEnum


* `REFERRAL_PROGRAM` (value: `"REFERRAL_PROGRAM"`)





## Enum: VoucherTypeEnum


* `GIFT_VOUCHER` (value: `"GIFT_VOUCHER"`)

* `DISCOUNT_VOUCHER` (value: `"DISCOUNT_VOUCHER"`)

* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)





## Enum: ObjectEnum


* `redeemable_holder` (value: `"redeemable_holder"`)




