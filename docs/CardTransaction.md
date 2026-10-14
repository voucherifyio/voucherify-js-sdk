# Voucherify.CardTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique card transaction ID assigned by Voucherify. | [optional] 
**cardId** | **String** | ID of the card the transaction belongs to. Assigned by Voucherify. | [optional] 
**programId** | **String** | ID of the loyalty program. Assigned by Voucherify. | [optional] 
**memberId** | **String** | ID of the member owning the card. Assigned by Voucherify. | [optional] 
**cardDefinitionId** | **String** | ID of the card definition of the card. Assigned by Voucherify. | [optional] 
**cardType** | **String** | Card type. | [optional] [default to &#39;INDIVIDUAL&#39;]
**type** | **String** | Transaction type. Options depend on the endpoint and the transaction variant. | [optional] 
**details** | [**CardTransactionDetails**](CardTransactionDetails.md) |  | [optional] 
**status** | **String** | Transaction processing status. Transactions are created as &#x60;PENDING&#x60; and processed asynchronously. | [optional] 
**createdAt** | **Date** | Timestamp when the transaction was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the transaction was last updated (ISO 8601), or &#x60;null&#x60;. | [optional] 
**object** | **String** | Object type marker, always &#x60;card_transaction&#x60;. | [optional] [default to &#39;card_transaction&#39;]



## Enum: CardTypeEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)





## Enum: TypeEnum


* `ADMIN_CREDIT` (value: `"ADMIN_CREDIT"`)

* `ADMIN_DEBIT` (value: `"ADMIN_DEBIT"`)

* `ADMIN_POINTS_EXPIRATION` (value: `"ADMIN_POINTS_EXPIRATION"`)

* `POINTS_EARNED` (value: `"POINTS_EARNED"`)

* `POINTS_SPENT_ON_REWARD` (value: `"POINTS_SPENT_ON_REWARD"`)

* `POINTS_PURCHASED` (value: `"POINTS_PURCHASED"`)

* `POINTS_PURCHASE_REVERSED` (value: `"POINTS_PURCHASE_REVERSED"`)

* `POINTS_SPENT_ON_ORDER` (value: `"POINTS_SPENT_ON_ORDER"`)

* `POINTS_REFUNDED` (value: `"POINTS_REFUNDED"`)

* `POINTS_RETURNED` (value: `"POINTS_RETURNED"`)

* `POINTS_EXPIRED` (value: `"POINTS_EXPIRED"`)

* `PENDING_POINTS_ADDED` (value: `"PENDING_POINTS_ADDED"`)

* `PENDING_POINTS_ACTIVATED` (value: `"PENDING_POINTS_ACTIVATED"`)

* `PENDING_POINTS_CANCELED` (value: `"PENDING_POINTS_CANCELED"`)





## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)





## Enum: ObjectEnum


* `card_transaction` (value: `"card_transaction"`)




