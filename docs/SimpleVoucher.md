# Voucherify.SimpleVoucher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier that represents the voucher assigned by Voucherify. | [optional] 
**code** | **String** | Voucher code. | [optional] 
**gift** | [**Gift**](Gift.md) |  | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 
**loyaltyCard** | [**SimpleLoyaltyCard**](SimpleLoyaltyCard.md) |  | [optional] 
**type** | **String** | Type of the voucher. | [optional] 
**campaign** | **String** | Campaign name. | [optional] 
**campaignId** | **String** | Campaign unique ID. | [optional] 
**isReferralCode** | **Boolean** | Flag indicating whether this voucher is a referral code; &#x60;true&#x60; for campaign type &#x60;REFERRAL_PROGRAM&#x60;. | [optional] 
**holderId** | **String** | Unique customer identifier of the redeemable holder. It equals to the customer ID assigned by Voucherify. | [optional] 
**referrerId** | **String** | Unique identifier of the referrer assigned by Voucherify. | [optional] 
**categoryId** | **String** | Unique identifier of the category that this voucher belongs to. | [optional] 
**categories** | [**[Category]**](Category.md) | Contains details about the category. | [optional] 
**active** | **Boolean** | Shows whether the voucher is on or off. &#x60;true&#x60; indicates an *active* voucher and &#x60;false&#x60; indicates an *inactive* voucher. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the order was created in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the order was created. The value is shown in the ISO 8601 format. | [optional] 
**redemption** | [**SimpleVoucherRedemption**](SimpleVoucherRedemption.md) |  | [optional] 
**startDate** | **Date** | Activation timestamp defines when the code starts to be active in ISO 8601 format. Voucher is *inactive before* this date. | [optional] 
**expirationDate** | **Date** | Expiration timestamp defines when the code expires in ISO 8601 format.  Voucher is *inactive after* this date. | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a voucher. The metadata object stores all custom attributes assigned to the voucher. | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;voucher&#39;]



## Enum: TypeEnum


* `DISCOUNT_VOUCHER` (value: `"DISCOUNT_VOUCHER"`)

* `LOYALTY_CARD` (value: `"LOYALTY_CARD"`)

* `GIFT_VOUCHER` (value: `"GIFT_VOUCHER"`)





## Enum: ObjectEnum


* `voucher` (value: `"voucher"`)




