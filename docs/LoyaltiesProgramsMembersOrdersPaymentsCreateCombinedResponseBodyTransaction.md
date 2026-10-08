# Voucherify.LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBodyTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **String** | Unique identifier of the loyalty program (format &#x60;lprg_...&#x60;). | [optional] 
**memberId** | **String** | Unique identifier of the program member (format &#x60;lmbr_...&#x60;). | [optional] 
**cardId** | **String** | Unique identifier of the loyalty card the points were spent from (format &#x60;lcrd_...&#x60;). | [optional] 
**cardDefinitionId** | **String** | Unique identifier of the card definition (format &#x60;lcdef_...&#x60;). | [optional] 
**cardTransactionId** | **Object** | &#x60;null&#x60; for &#x60;DRY_RUN&#x60; (&#x60;SIMULATED&#x60;) transactions. | [optional] 
**orderId** | **String** | Unique identifier of the paid order (format &#x60;ord_...&#x60;). | [optional] 
**status** | **String** | Transaction status. &#x60;SIMULATED&#x60; - dry-run create result, not persisted. | [optional] [default to &#39;SIMULATED&#39;]
**type** | **String** | Defines the transaction type. Always &#x60;PAY_WITH_POINTS&#x60;. | [optional] [default to &#39;PAY_WITH_POINTS&#39;]
**details** | **Object** |  | [optional] 
**updatedAt** | **Object** | Timestamp when the transaction was last updated (ISO 8601), or &#x60;null&#x60; for &#x60;DRY_RUN&#x60; (&#x60;SIMULATED&#x60;) transactions. | [optional] 
**object** | **String** | Object type marker. Always &#x60;order_transaction&#x60;. | [optional] [default to &#39;order_transaction&#39;]



## Enum: StatusEnum


* `SIMULATED` (value: `"SIMULATED"`)





## Enum: TypeEnum


* `PAY_WITH_POINTS` (value: `"PAY_WITH_POINTS"`)





## Enum: ObjectEnum


* `order_transaction` (value: `"order_transaction"`)




