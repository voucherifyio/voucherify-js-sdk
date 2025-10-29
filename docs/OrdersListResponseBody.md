# Voucherify.OrdersListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about orders in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of order objects. | [optional] [default to &#39;orders&#39;]
**orders** | [**[OrdersListResponseBodyOrdersItem]**](OrdersListResponseBodyOrdersItem.md) | Contains array of order objects. | [optional] 
**total** | **Number** | Total number of orders. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `orders` (value: `"orders"`)




