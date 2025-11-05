# Voucherify.OrdersListResponseBodyOrdersItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID assigned by Voucherify of an existing order that will be linked to the redemption of this request. | [optional] 
**sourceId** | **String** | Unique source ID of an existing order that will be linked to the redemption of this request. | [optional] 
**status** | **String** | The order status. | [optional] 
**amount** | **Number** | This is the sum of the order items&#39; amounts. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**initialAmount** | **Number** | This is the sum of the order items&#39; amounts before any discount or other effect (e.g. add missing units) is applied. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**discountAmount** | **Number** | Sum of all order-level discounts applied to the order. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**itemsDiscountAmount** | **Number** | Sum of all product-specific discounts applied to the order. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**totalDiscountAmount** | **Number** | Sum of all order-level AND all product-specific discounts applied to the order. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**totalAmount** | **Number** | Order amount after undoing all the discounts through the rollback redemption. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**appliedDiscountAmount** | **Number** | This field shows the order-level discount applied. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00). | [optional] 
**itemsAppliedDiscountAmount** | **Number** | Sum of all product-specific discounts applied in a particular request. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00).   &#x60;sum(items, i &#x3D;&gt; i.applied_discount_amount)&#x60; | [optional] 
**totalAppliedDiscountAmount** | **Number** | Sum of all order-level AND all product-specific discounts applied in a particular request. It is expressed as an integer in the smallest currency unit (e.g. 100 cents for $1.00).   &#x60;total_applied_discount_amount&#x60; &#x3D; &#x60;applied_discount_amount&#x60; + &#x60;items_applied_discount_amount&#x60; | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to an order. It can be useful for storing additional information about the order in a structured format. It can be used to define business validation rules or discount formulas. | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;order&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the order was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the order was last updated in ISO 8601 format. | [optional] 
**customerId** | **String** | Unique customer identifier of the customer making the purchase. The ID is assigned by Voucherify. | [optional] 
**referrerId** | **String** | Unique referrer ID. | [optional] 
**customer** | [**CustomerId**](CustomerId.md) |  | [optional] 
**referrer** | [**ReferrerId**](ReferrerId.md) |  | [optional] 
**redemptions** | [**{String: OrderRedemptionsEntry}**](OrderRedemptionsEntry.md) |  | [optional] 
**items** | [**[OrderCalculatedItem]**](OrderCalculatedItem.md) | Array of items applied to the order. It can include up to 500 items. | [optional] 



## Enum: StatusEnum


* `CREATED` (value: `"CREATED"`)

* `PAID` (value: `"PAID"`)

* `CANCELED` (value: `"CANCELED"`)

* `FULFILLED` (value: `"FULFILLED"`)





## Enum: ObjectEnum


* `order` (value: `"order"`)




