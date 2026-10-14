# Voucherify.BenefitTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programId** | **String** | Unique identifier of the loyalty program (format &#x60;lprg_...&#x60;). | [optional] 
**memberId** | **String** | Unique identifier of the program member (format &#x60;lmbr_...&#x60;). | [optional] 
**createdAt** | **Date** | Timestamp when the transaction was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the transaction was last updated (ISO 8601), or &#x60;null&#x60;. | [optional] 
**id** | **String** | Unique benefit transaction identifier (format &#x60;lbtx_...&#x60;). | [optional] 
**benefitId** | **String** | Unique identifier of the fulfilled benefit (format &#x60;lben_...&#x60;). | [optional] 
**earningRuleId** | **String** | Unique identifier of the earning rule that triggered the fulfillment (format &#x60;lern_...&#x60;). | [optional] 
**type** | **String** | Transaction type. Always &#x60;FULFILLMENT&#x60;. | [optional] [default to &#39;FULFILLMENT&#39;]
**details** | [**BenefitTransactionDetails**](BenefitTransactionDetails.md) |  | [optional] 
**status** | **String** | Transaction status. &#x60;PENDING&#x60; - created, awaiting processing; &#x60;APPROVED&#x60; - completed successfully; &#x60;REJECTED&#x60; - rejected (see &#x60;details.rejection&#x60;). | [optional] 
**object** | **String** | Object type marker. Always &#x60;benefit_transaction&#x60;. | [optional] [default to &#39;benefit_transaction&#39;]



## Enum: TypeEnum


* `FULFILLMENT` (value: `"FULFILLMENT"`)





## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)





## Enum: ObjectEnum


* `benefit_transaction` (value: `"benefit_transaction"`)




