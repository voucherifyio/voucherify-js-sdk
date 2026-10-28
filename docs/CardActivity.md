# Voucherify.CardActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | Timestamp when the activity was recorded (ISO 8601). | [optional] 
**groupId** | **String** | ID grouping activities recorded within the same request. | [optional] 
**source** | [**ActivitySource**](ActivitySource.md) |  | [optional] 
**id** | **String** | Unique activity ID. | [optional] 
**cardId** | **String** | ID of the card the activity relates to. | [optional] 
**type** | **String** | Activity type. Allowed values: &#x60;vl.card.created&#x60;, &#x60;vl.card.assigned&#x60;, &#x60;vl.card.unassigned&#x60;, &#x60;vl.card.code_generation.succeeded&#x60;, and &#x60;vl.card.code_generation.failed&#x60;. | [optional] 
**data** | [**CardActivityData**](CardActivityData.md) |  | [optional] 



## Enum: TypeEnum


* `vl.card.created` (value: `"vl.card.created"`)

* `vl.card.assigned` (value: `"vl.card.assigned"`)

* `vl.card.unassigned` (value: `"vl.card.unassigned"`)

* `vl.card.code_generation.succeeded` (value: `"vl.card.code_generation.succeeded"`)

* `vl.card.code_generation.failed` (value: `"vl.card.code_generation.failed"`)




