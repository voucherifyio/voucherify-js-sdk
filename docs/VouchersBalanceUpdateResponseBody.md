# Voucherify.VouchersBalanceUpdateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The incremental amount added (positive integer) or subtracted (negative integer) to the current balance on the gift card or loyalty card. The value is multiplied by 100 to represent 2 decimal places. For example &#x60;10000 cents&#x60; for &#x60;$100.00&#x60;. | [optional] 
**total** | **Number** | Total income incurred over the lifespan of the gift card or loyalty card. | [optional] 
**balance** | **Number** | The balance after adding or subtracting a specified amount. The value is multiplied by 100 to represent 2 decimal places. For example &#x60;10000 cents&#x60; for &#x60;$100.00&#x60;. | [optional] 
**type** | **String** | The type of voucher being modified. | [optional] 
**operationType** | **String** | The type of the operation being performed. | [optional] [default to &#39;MANUAL&#39;]
**object** | **String** | The type of the object represented by JSON. Default is &#x60;balance&#x60;. | [optional] [default to &#39;balance&#39;]
**relatedObject** | [**VouchersBalanceUpdateResponseBodyRelatedObject**](VouchersBalanceUpdateResponseBodyRelatedObject.md) |  | [optional] 



## Enum: TypeEnum


* `gift_voucher` (value: `"gift_voucher"`)

* `loyalty_card` (value: `"loyalty_card"`)





## Enum: OperationTypeEnum


* `MANUAL` (value: `"MANUAL"`)





## Enum: ObjectEnum


* `balance` (value: `"balance"`)




