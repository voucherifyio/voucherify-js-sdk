# Voucherify.OrderPaymentTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifies the order transaction (&#x60;lotx_...&#x60;). Absent on dry-run (&#x60;SIMULATED&#x60;) create responses, which are never persisted. Always present in list responses. | [optional] 
**programId** | **String** | Unique identifier of the loyalty program (format &#x60;lprg_...&#x60;). | [optional] 
**memberId** | **String** | Unique identifier of the program member (format &#x60;lmbr_...&#x60;). | [optional] 
**cardId** | **String** | Unique identifier of the loyalty card the points were spent from (format &#x60;lcrd_...&#x60;). | [optional] 
**cardDefinitionId** | **String** | Unique identifier of the card definition (format &#x60;lcdef_...&#x60;). | [optional] 
**cardTransactionId** | **String** | Unique identifier of the underlying card transaction (format &#x60;lctx_...&#x60;). &#x60;null&#x60; for DRY_RUN (SIMULATED) transactions. | [optional] 
**orderId** | **String** | Unique identifier of the paid order (format &#x60;ord_...&#x60;). | [optional] 
**status** | **String** | Transaction status. &#x60;PENDING&#x60; - created, awaiting processing; &#x60;PROCESSING&#x60; - being processed; &#x60;APPROVED&#x60; - completed successfully; &#x60;REJECTED&#x60; - rejected (see &#x60;details.rejection&#x60;); &#x60;SIMULATED&#x60; - dry-run create result, not persisted (not returned by list). | [optional] 
**type** | **String** | Defines the transaction type. Always &#x60;PAY_WITH_POINTS&#x60;. | [optional] [default to &#39;PAY_WITH_POINTS&#39;]
**details** | **Object** |  | [optional] 
**createdAt** | **Date** | Timestamp when the transaction was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the transaction was last updated (ISO 8601), or &#x60;null&#x60;. | [optional] 
**object** | **String** | Object type marker. Always &#x60;order_transaction&#x60;. | [optional] [default to &#39;order_transaction&#39;]



## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)

* `SIMULATED` (value: `"SIMULATED"`)





## Enum: TypeEnum


* `PAY_WITH_POINTS` (value: `"PAY_WITH_POINTS"`)





## Enum: ObjectEnum


* `order_transaction` (value: `"order_transaction"`)




