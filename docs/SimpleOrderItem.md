# Voucherify.SimpleOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the order line item. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the &#x60;order_item&#x60;. | [optional] [default to &#39;order_item&#39;]
**sourceId** | **String** | The merchant&#39;s product/SKU ID (if it is different from the Voucherify product/SKU ID). It is useful in the integration between multiple systems. It can be an ID from an eCommerce site, a database, or a third-party service. | [optional] 
**relatedObject** | **String** | Used along with the &#x60;source_id&#x60; property, can be set to either SKU or product. | [optional] 
**productId** | **String** | Unique identifier of the product. It is assigned by Voucherify. | [optional] 
**skuId** | **String** | Unique identifier of the SKU. It is assigned by Voucherify. | [optional] 
**quantity** | **Number** | Quantity of the particular item in the cart. | [optional] 
**appliedQuantity** | **Number** | Quantity of items changed by the application of a new quantity items. It can be positive when an item is added or negative if an item is replaced. | [optional] 
**appliedQuantityAmount** | **Number** | Amount for the items changed by the application of a new quantity items. It can be positive when an item is added or negative if an item is replaced. | [optional] 
**discountQuantity** | **Number** | Number of discounted items. | [optional] 
**appliedDiscountQuantity** | **Number** | Number of the discounted items applied in the transaction. | [optional] 
**amount** | **Number** | Total amount of the order item (price * quantity). | [optional] 
**discountAmount** | **Number** | Sum of all order-item-level discounts applied to the order. | [optional] 
**appliedDiscountAmount** | **Number** | Order-level discount amount applied in the transaction. | [optional] 
**price** | **Number** | Unit price of an item. The value is multiplied by 100 to represent 2 decimal places. For example &#x60;10000 cents&#x60; for &#x60;$100.00&#x60;. | [optional] 
**subtotalAmount** | **Number** | Final order item amount after the applied item-level discount.  If there are no item-level discounts applied, this item is equal to the &#x60;amount&#x60;.    &#x60;subtotal_amount&#x60;&#x3D;&#x60;amount&#x60;-&#x60;discount_amount&#x60; | [optional] 



## Enum: ObjectEnum


* `order_item` (value: `"order_item"`)





## Enum: RelatedObjectEnum


* `product` (value: `"product"`)

* `sku` (value: `"sku"`)




