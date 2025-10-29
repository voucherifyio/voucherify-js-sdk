# Voucherify.LoyaltyPendingPointsDetailsEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique event identifier, assigned by Voucherify. | [optional] 
**type** | **String** | Type of the event that triggered the creation of pending points. | [optional] [default to &#39;customer.order.paid&#39;]
**groupId** | **String** | Unique identifier of the request that triggered the event, assigned by Voucherify. | [optional] 
**entityId** | **String** | Unique identifier of the entity that triggered the event, assigned by Voucherify. For pending points, it is the &#x60;customer_id&#x60; of the customer who paid for the order. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the event occurred. The value is shown in the ISO 8601 format. | [optional] 
**category** | **String** | Type of the event. | [optional] 
**eventSource** | [**EventSource**](EventSource.md) |  | [optional] 



## Enum: TypeEnum


* `customer.order.paid` (value: `"customer.order.paid"`)





## Enum: CategoryEnum


* `ACTION` (value: `"ACTION"`)

* `EFFECT` (value: `"EFFECT"`)




