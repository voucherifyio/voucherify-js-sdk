# Voucherify.V2LoyaltiesProgramsMembersCardsPendingPointsCancelResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**CardTransaction**](CardTransaction.md) |  | 
**status** | **String** | Result status. The API endpoint returns &#x60;TRANSACTION_CREATED&#x60;. | [optional] [default to &#39;TRANSACTION_CREATED&#39;]
**message** | **String** | Human-readable result message - \&quot;Points cancellation transaction created\&quot;. | [optional] [default to &#39;Points cancellation transaction created&#39;]



## Enum: StatusEnum


* `TRANSACTION_CREATED` (value: `"TRANSACTION_CREATED"`)





## Enum: MessageEnum


* `Points cancellation transaction created` (value: `"Points cancellation transaction created"`)




