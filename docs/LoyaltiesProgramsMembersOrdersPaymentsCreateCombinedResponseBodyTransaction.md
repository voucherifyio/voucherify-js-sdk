# Voucherify.LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBodyTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **String** | Unique identifier of the loyalty program (format &#x60;lprg_...&#x60;). | [optional] 
**memberId** | **String** | Unique identifier of the program member (format &#x60;lmbr_...&#x60;). | [optional] 
**cardId** | **String** | Unique identifier of the loyalty card the points were spent from (format &#x60;lcrd_...&#x60;). | [optional] 
**cardDefinitionId** | **String** | Identifies the card definition (format &#x60;lcdef_...&#x60;). | [optional] 
**cardTransactionId** | **Object** | &#x60;null&#x60; for &#x60;DRY_RUN&#x60; (&#x60;SIMULATED&#x60;) transactions. | [optional] 
**orderId** | **String** | Identifies the paid order (format &#x60;ord_...&#x60;). | [optional] 
**status** | **String** |  | [optional] 
**type** | **String** | Defines the transaction type. Always &#x60;PAY_WITH_POINTS&#x60;. | [optional] [default to &#39;PAY_WITH_POINTS&#39;]
**details** | [**LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBodyTransactionDetails**](LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBodyTransactionDetails.md) |  | [optional] 
**updatedAt** | **Object** | Timestamp when the transaction was last updated (ISO 8601), or &#x60;null&#x60; for &#x60;DRY_RUN&#x60; (&#x60;SIMULATED&#x60;) transactions. | [optional] 
**object** | **String** | Object type marker. Always &#x60;order_transaction&#x60;. | [optional] [default to &#39;order_transaction&#39;]
**createdAt** | **Date** | Timestamp when the transaction was created (ISO 8601). | [optional] 
**id** | **String** | Identifies the order transaction (&#x60;lotx_...&#x60;). Absent on dry-run (&#x60;SIMULATED&#x60;) create responses, which are never persisted. Always present in list responses. | [optional] 



## Enum: StatusEnum


* `SIMULATED` (value: `"SIMULATED"`)

* `PENDING` (value: `"PENDING"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)





## Enum: TypeEnum


* `PAY_WITH_POINTS` (value: `"PAY_WITH_POINTS"`)





## Enum: ObjectEnum


* `order_transaction` (value: `"order_transaction"`)




