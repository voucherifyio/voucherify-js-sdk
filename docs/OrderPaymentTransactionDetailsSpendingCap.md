# Voucherify.OrderPaymentTransactionDetailsSpendingCap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Identifies which cap limited the payment. | [optional] 
**unit** | **String** | Whether &#x60;value&#x60; is points or an amount. | [optional] 
**value** | **Number** | Cap value in &#x60;unit&#x60;. | [optional] 



## Enum: TypeEnum


* `CARD_SPENDING_GLOBAL_SPENDING_BASED_LIMIT` (value: `"CARD_SPENDING_GLOBAL_SPENDING_BASED_LIMIT"`)

* `CARD_SPENDING_GLOBAL_TIME_BASED_LIMIT` (value: `"CARD_SPENDING_GLOBAL_TIME_BASED_LIMIT"`)

* `CARD_SPENDING_TRANSACTIONS_LIMIT` (value: `"CARD_SPENDING_TRANSACTIONS_LIMIT"`)

* `REQUEST_PAYMENT_LIMIT` (value: `"REQUEST_PAYMENT_LIMIT"`)

* `ORDER_TOTAL_AMOUNT` (value: `"ORDER_TOTAL_AMOUNT"`)

* `CARD_BALANCE_POINTS` (value: `"CARD_BALANCE_POINTS"`)





## Enum: UnitEnum


* `POINTS` (value: `"POINTS"`)

* `AMOUNT` (value: `"AMOUNT"`)




