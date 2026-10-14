# Voucherify.V2LoyaltiesProgramsMembersOrdersPaymentsCreateRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardId** | **String** | Unique identifier of the member&#39;s loyalty card to spend points from (format &#x60;lcrd_...&#x60;). | [optional] 
**order** | [**OrderPaymentOrder**](OrderPaymentOrder.md) |  | 
**paymentLimit** | [**LoyaltiesProgramsMembersOrdersPaymentsCreateRequestBodyLimit**](LoyaltiesProgramsMembersOrdersPaymentsCreateRequestBodyLimit.md) |  | [optional] 
**mode** | **String** | Payment mode. &#x60;TRANSACTION&#x60; creates a &#x60;PENDING&#x60; order transaction processed asynchronously (HTTP &#x60;202&#x60;). &#x60;DRY_RUN&#x60; only simulates the payment and returns the calculation result (HTTP &#x60;200&#x60;); no transaction is created. Defaults to &#x60;TRANSACTION&#x60; when omitted or &#x60;null&#x60;. | [optional] 



## Enum: ModeEnum


* `TRANSACTION` (value: `"TRANSACTION"`)

* `DRY_RUN` (value: `"DRY_RUN"`)




