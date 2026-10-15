# Voucherify.V2LoyaltiesProgramsMembersCardsPointsAdjustResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**CardTransaction**](CardTransaction.md) |  | [optional] 
**status** | **String** | &#x60;TRANSACTION_CREATED&#x60; when a transaction was created, &#x60;NO_CHANGE&#x60; when the requested points amount was zero. | [optional] 
**message** | **String** | Human-readable result message: - \&quot;Points addition transaction created\&quot;, - \&quot;Points subtraction transaction created\&quot;, - \&quot;Provided amount is zero, transaction was not created\&quot;. | [optional] 



## Enum: StatusEnum


* `TRANSACTION_CREATED` (value: `"TRANSACTION_CREATED"`)

* `NO_CHANGE` (value: `"NO_CHANGE"`)





## Enum: MessageEnum


* `Points addition transaction created` (value: `"Points addition transaction created"`)

* `Points subtraction transaction created` (value: `"Points subtraction transaction created"`)

* `Provided amount is zero, transaction was not created` (value: `"Provided amount is zero, transaction was not created"`)




