# Voucherify.VoucherBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of voucher whose balance is being adjusted due to the transaction. | [optional] 
**total** | **Number** | The number of all points or credits accumulated on the card as affected by add or subtract operations. | [optional] 
**object** | **String** | The type of the object represented by the JSON. | [optional] [default to &#39;balance&#39;]
**amount** | **Number** | Credits added or subtracted on a gift card. | [optional] 
**points** | **Number** | Points added or subtracted in the transaction of a loyalty card. | [optional] 
**balance** | **Number** | The available points or credits on the card after the transaction as affected by redemption or rollback. | [optional] 
**operationType** | **String** | The type of the operation being performed. The operation type is &#x60;AUTOMATIC&#x60; if it is an automatic redemption. | [optional] 
**relatedObject** | [**VoucherBalanceRelatedObject**](VoucherBalanceRelatedObject.md) |  | [optional] 



## Enum: TypeEnum


* `loyalty_card` (value: `"loyalty_card"`)

* `gift_voucher` (value: `"gift_voucher"`)





## Enum: ObjectEnum


* `balance` (value: `"balance"`)





## Enum: OperationTypeEnum


* `MANUAL` (value: `"MANUAL"`)

* `AUTOMATIC` (value: `"AUTOMATIC"`)




