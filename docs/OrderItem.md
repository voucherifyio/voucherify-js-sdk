# Voucherify.OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skuId** | **String** | Unique identifier of the SKU. It is assigned by Voucherify. | [optional] 
**productId** | **String** | Unique identifier of the product. It is assigned by Voucherify. | [optional] 
**relatedObject** | **String** | Used along with the source_id property, can be set to either sku or product. | [optional] 
**sourceId** | **String** | The merchant&#39;s product/SKU ID (if it is different from the Voucherify product/SKU ID). It is useful in the integration between multiple systems. It can be an ID from an eCommerce site, a database, or a third-party service. | [optional] 
**quantity** | **Number** | The quantity of the particular item in the cart. | [optional] 
**discountQuantity** | **Number** | Number of dicounted items. | [optional] 
**initialQuantity** | **Number** | A positive integer in the smallest unit quantity representing the total amount of the order; this is the sum of the order items&#39; quantity. | [optional] 
**amount** | **Number** | The total amount of the order item (price * quantity). | [optional] 
**discountAmount** | **Number** | Sum of all order-item-level discounts applied to the order. | [optional] 
**initialAmount** | **Number** | A positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the total amount of the order. This is the sum of the order items&#39; amounts. | [optional] 
**price** | **Number** | Unit price of an item. The value is multiplied by 100 to represent 2 decimal places. For example &#x60;10000 cents&#x60; for &#x60;$100.00&#x60;. | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) |  | [optional] 
**sku** | [**OrderItemSku**](OrderItemSku.md) |  | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to an order item. It can be useful for storing additional information about the order item in a structured format. It can be used to define business validation rules. | [optional] 



## Enum: RelatedObjectEnum


* `product` (value: `"product"`)

* `sku` (value: `"sku"`)




