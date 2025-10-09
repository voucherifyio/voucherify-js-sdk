# Voucherify.LoyaltiesMembersBalanceUpdateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | The incremental points removed or added to the current balance on the loyalty card. | [optional] 
**total** | **Number** | The total of points accrued over the lifetime of the loyalty card. | [optional] 
**balance** | **Number** | The balance after adding/removing points. | [optional] 
**type** | **String** | The type of voucher being modified. | [optional] 
**object** | **String** | The type of the object represented by JSON. Default is balance. | [optional] [default to &#39;balance&#39;]
**relatedObject** | [**LoyaltiesMembersBalanceUpdateResponseBodyRelatedObject**](LoyaltiesMembersBalanceUpdateResponseBodyRelatedObject.md) |  | [optional] 
**operationType** | **String** | The type of operation being performed. | [optional] 



## Enum: TypeEnum


* `loyalty_card` (value: `"loyalty_card"`)

* `gift_voucher` (value: `"gift_voucher"`)





## Enum: ObjectEnum


* `balance` (value: `"balance"`)





## Enum: OperationTypeEnum


* `MANUAL` (value: `"MANUAL"`)

* `AUTOMATIC` (value: `"AUTOMATIC"`)




