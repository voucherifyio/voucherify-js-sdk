# Voucherify.SimpleEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier assigned by Voucherify that will be linked to the this event. | [optional] 
**type** | **String** | Type of the triggering event. | [optional] 
**category** | **String** | Type of the event. | [optional] 
**entityId** | **String** | ID of the entity that initiated the event. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the event was created in the ISO 8601 format. | [optional] 
**groupId** | **String** | Unique identifier of the request that triggered the event. | [optional] 



## Enum: CategoryEnum


* `EFFECT` (value: `"EFFECT"`)

* `ACTION` (value: `"ACTION"`)




