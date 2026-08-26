# Voucherify.OrdersCreateRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID assigned by Voucherify of an existing order that will be linked to the redemption of this request. | [optional] 
**sourceId** | **String** | Unique source ID of an existing order that will be linked to the redemption of this request.  For validation and redemption, if &#x60;source_id&#x60; is used with an existing order, the original order data will be used, like &#x60;items&#x60;, &#x60;amount&#x60;, and so on, not the one sent in the new request. | [optional] 
**status** | **String** | The order status. | [optional] 
**amount** | **Number** | A positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the total amount of the order. This is the sum of the order items&#39; amounts. | [optional] 
**initialAmount** | **Number** | A positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the total amount of the order. This is the sum of the order items&#39; amounts. | [optional] 
**discountAmount** | **Number** | Sum of all order-level discounts applied to the order. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**items** | [**[OrderItem]**](OrderItem.md) | Array of items applied to the order. It can include up to 500 items. | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to an order. It can be useful for storing additional information about the order in a structured format. It can be used to define business validation rules or discount formulas. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the order was created. The value is shown in the ISO 8601 format. | [optional] 
**referrerId** | **String** | Unique referrer ID. | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**referrer** | [**Referrer**](Referrer.md) |  | [optional] 



## Enum: StatusEnum


* `CREATED` (value: `"CREATED"`)

* `PAID` (value: `"PAID"`)

* `CANCELED` (value: `"CANCELED"`)

* `FULFILLED` (value: `"FULFILLED"`)




