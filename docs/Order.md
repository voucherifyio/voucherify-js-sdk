# Voucherify.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID assigned by Voucherify of an existing order that will be linked to the redemption of this request. | [optional] 
**sourceId** | **String** | Unique source ID of an existing order that will be linked to the redemption of this request. | [optional] 
**status** | **String** | The order status. | [optional] 
**amount** | **Number** | A positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the total amount of the order. This is the sum of the order items&#39; amounts. | [optional] 
**initialAmount** | **Number** | A positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the total amount of the order. This is the sum of the order items&#39; amounts. | [optional] 
**discountAmount** | **Number** | Sum of all order-level discounts applied to the order. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**items** | [**[OrderItem]**](OrderItem.md) | Array of items applied to the order. It can include up to 500 items. | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to an order. It can be useful for storing additional information about the order in a structured format. It can be used to define business validation rules or discount formulas. | [optional] 



## Enum: StatusEnum


* `CREATED` (value: `"CREATED"`)

* `PAID` (value: `"PAID"`)

* `CANCELED` (value: `"CANCELED"`)

* `FULFILLED` (value: `"FULFILLED"`)




