# Voucherify.VLMemberActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | Timestamp when the activity was recorded (ISO 8601). | [optional] 
**groupId** | **String** | ID grouping activities recorded within the same request. | [optional] 
**source** | [**ActivitySource**](ActivitySource.md) |  | [optional] 
**id** | **String** | Unique activity ID. | [optional] 
**memberId** | **String** | ID of the member the activity relates to. | [optional] 
**type** | **String** | Activity type. Allowed values: &#x60;vl.member.created&#x60;, &#x60;vl.member.updated&#x60;, &#x60;vl.member.deleted&#x60;, &#x60;vl.member.activated&#x60;, &#x60;vl.member.deactivated&#x60;, &#x60;vl.member.card.assigned&#x60;, and &#x60;vl.member.card.unassigned&#x60;. | [optional] 
**data** | [**VLMemberActivityData**](VLMemberActivityData.md) |  | [optional] 



## Enum: TypeEnum


* `vl.member.created` (value: `"vl.member.created"`)

* `vl.member.updated` (value: `"vl.member.updated"`)

* `vl.member.deleted` (value: `"vl.member.deleted"`)

* `vl.member.activated` (value: `"vl.member.activated"`)

* `vl.member.deactivated` (value: `"vl.member.deactivated"`)

* `vl.member.card.assigned` (value: `"vl.member.card.assigned"`)

* `vl.member.card.unassigned` (value: `"vl.member.card.unassigned"`)




