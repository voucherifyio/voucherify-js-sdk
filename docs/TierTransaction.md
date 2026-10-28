# Voucherify.TierTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique tier transaction identifier (format &#x60;lttx_...&#x60;). | [optional] 
**cardId** | **String** | Unique identifier of the related loyalty card (format &#x60;lcrd_...&#x60;). | [optional] 
**programId** | **String** | Unique identifier of the loyalty program (format &#x60;lprg_...&#x60;). | [optional] 
**memberId** | **String** | Unique identifier of the program member (format &#x60;lmbr_...&#x60;). | [optional] 
**cardDefinitionId** | **String** | Identifies the card definition (format &#x60;lcdef_...&#x60;). | [optional] 
**tierStructureId** | **String** | Unique identifier of the tier structure (format &#x60;lts_...&#x60;). | [optional] 
**tierId** | **String** | Unique identifier of the related tier (format &#x60;lt_...&#x60;), or &#x60;null&#x60;. | [optional] 
**type** | **String** | Transaction type. &#x60;JOINED&#x60; - member joined a tier. &#x60;LEFT&#x60; - member left a tier. &#x60;UPGRADED&#x60; - member moved to a higher tier. &#x60;DOWNGRADED&#x60; - member moved to a lower tier. &#x60;EXPIRATION_CHANGED&#x60; - current tier unchanged; the expiration date was set, extended, or cleared. &#x60;EVALUATION_REFRESHED&#x60; - current tier and expiration day unchanged; the stored evaluation and points were recalculated. | [optional] 
**details** | [**TierTransactionDetails**](TierTransactionDetails.md) |  | 
**status** | **String** | Transaction status. &#x60;PENDING&#x60; - created, awaiting processing; &#x60;APPROVED&#x60; - completed successfully; &#x60;REJECTED&#x60; - rejected (see &#x60;details.rejection&#x60;). | [optional] 
**createdAt** | **Date** | Timestamp when the transaction was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the transaction was last updated (ISO 8601), or &#x60;null&#x60;. | [optional] 
**object** | **String** | Object type marker. Always &#x60;tier_transaction&#x60;. | [optional] [default to &#39;tier_transaction&#39;]



## Enum: TypeEnum


* `UPGRADED` (value: `"UPGRADED"`)

* `DOWNGRADED` (value: `"DOWNGRADED"`)

* `JOINED` (value: `"JOINED"`)

* `LEFT` (value: `"LEFT"`)

* `EXPIRATION_CHANGED` (value: `"EXPIRATION_CHANGED"`)

* `EVALUATION_REFRESHED` (value: `"EVALUATION_REFRESHED"`)





## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)





## Enum: ObjectEnum


* `tier_transaction` (value: `"tier_transaction"`)




