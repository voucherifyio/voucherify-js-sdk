# Voucherify.SimpleRedemption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique redemption ID. | [optional] 
**customerId** | **String** | Unique customer ID of the redeeming customer. | [optional] 
**trackingId** | **String** | Hashed customer source ID. | [optional] 
**date** | **Date** | Timestamp representing the date and time when the redemption was created in the ISO 8601 format. | [optional] 
**amount** | **Number** | For gift cards, this is a positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the number of redeemed credits. For loyalty cards, this is the number of loyalty points used in the transaction. In the case of redemption rollback, the numbers are expressed as negative integers. | [optional] 
**order** | [**SimpleOrder**](SimpleOrder.md) |  | [optional] 
**reward** | [**SimpleRedemptionRewardResult**](SimpleRedemptionRewardResult.md) |  | [optional] 
**customer** | [**SimpleCustomer**](SimpleCustomer.md) |  | [optional] 
**result** | **String** | Redemption result. | [optional] 
**status** | **String** |  | [optional] 
**voucher** | [**SimpleVoucher**](SimpleVoucher.md) |  | [optional] 
**promotionTier** | [**SimplePromotionTier**](SimplePromotionTier.md) |  | [optional] 
**redemption** | **String** | Unique redemption ID of the parent redemption. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes in the form of key/value pairs assigned to the redemption. | [optional] 
**failureCode** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a generic reason as to why the redemption failed. | [optional] 
**failureMessage** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide an expanded reason as to why the redemption failed. | [optional] 
**reason** | **String** | The reason for the redemption rollback. | [optional] 
**channel** | [**SimpleRedemptionChannel**](SimpleRedemptionChannel.md) |  | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the &#x60;redemption&#x60;. | [optional] [default to &#39;redemption&#39;]



## Enum: ResultEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `FAILURE` (value: `"FAILURE"`)





## Enum: StatusEnum


* `SUCCEEDED` (value: `"SUCCEEDED"`)

* `FAILED` (value: `"FAILED"`)

* `ROLLED BACK` (value: `"ROLLED BACK"`)




