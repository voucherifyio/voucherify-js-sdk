# Voucherify.CustomEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique custom event ID. | [optional] 
**object** | **String** | The object represented is an &#x60;event&#x60;. | [optional] [default to &#39;event&#39;]
**type** | **String** | The event name. | [optional] 
**customer** | [**SimpleCustomerRequiredObjectType**](SimpleCustomerRequiredObjectType.md) |  | 
**referral** | [**CustomEventReferral**](CustomEventReferral.md) |  | [optional] 
**loyalty** | [**CustomEventLoyalty**](CustomEventLoyalty.md) |  | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a customer. The metadata object stores all custom attributes assigned to the customer object. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the custom event was created. The value is shown in the ISO 8601 format. | [optional] 



## Enum: ObjectEnum


* `event` (value: `"event"`)




