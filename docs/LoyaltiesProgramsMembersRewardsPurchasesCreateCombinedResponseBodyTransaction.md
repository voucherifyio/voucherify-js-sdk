# Voucherify.LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBodyTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardId** | **String** |  | [optional] 
**cardDefinitionId** | **String** | Unique identifier of the card definition for that card (format &#x60;lcdef_...&#x60;). | [optional] 
**cardTransactionId** | **Object** | &#x60;null&#x60; for &#x60;DRY_RUN&#x60; (SIMULATED) transactions. | [optional] 
**programId** | **String** | Unique identifier of the loyalty program (format &#x60;lprg_...&#x60;). | [optional] 
**memberId** | **String** | Unique identifier of the program member (format &#x60;lmbr_...&#x60;). | [optional] 
**rewardId** | **String** | Unique identifier of the purchased reward (format &#x60;lrew_...&#x60;). | [optional] 
**status** | **String** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;PURCHASE&#39;]
**details** | [**LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBodyTransactionDetails**](LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBodyTransactionDetails.md) |  | [optional] 
**updatedAt** | **Object** | For &#x60;DRY_RUN&#x60; transactions, this is always &#x60;null&#x60;. | [optional] 
**object** | **String** | Object type marker. Always &#x60;reward_transaction&#x60;. | [optional] [default to &#39;reward_transaction&#39;]
**id** | **String** | Unique reward transaction identifier (format &#x60;lrtx_...&#x60;). | [optional] 
**createdAt** | **Date** | Timestamp when the transaction was created (ISO 8601). | [optional] 



## Enum: StatusEnum


* `SIMULATED` (value: `"SIMULATED"`)

* `PENDING` (value: `"PENDING"`)





## Enum: TypeEnum


* `PURCHASE` (value: `"PURCHASE"`)





## Enum: ObjectEnum


* `reward_transaction` (value: `"reward_transaction"`)




