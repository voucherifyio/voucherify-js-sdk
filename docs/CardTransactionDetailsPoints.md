# Voucherify.CardTransactionDetailsPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Number** | Number of points. Negative for debits. | [optional] 
**expirationDate** | **Date** | Expiration date of the affected points (&#x60;YYYY-MM-DD&#x60;), or &#x60;null&#x60;. | [optional] 
**expirationType** | **String** | Points expiration type of the affected points, or &#x60;null&#x60;. | [optional] 
**date** | **Date** | Activation date of the pending points (&#x60;YYYY-MM-DD&#x60;). Pending points variants only. | [optional] 
**type** | **String** | Pending points activation type. Pending points variants only. | [optional] 



## Enum: ExpirationTypeEnum


* `NO_EXPIRATION` (value: `"NO_EXPIRATION"`)

* `ROLLING_EXPIRATION` (value: `"ROLLING_EXPIRATION"`)

* `CALENDAR_EXPIRATION` (value: `"CALENDAR_EXPIRATION"`)

* `SLIDING_EXPIRATION` (value: `"SLIDING_EXPIRATION"`)





## Enum: TypeEnum


* `IMMEDIATE` (value: `"IMMEDIATE"`)

* `PERIOD_BASED` (value: `"PERIOD_BASED"`)

* `FIXED_DATES` (value: `"FIXED_DATES"`)

* `EVENT_BASED` (value: `"EVENT_BASED"`)




