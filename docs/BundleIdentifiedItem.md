# Voucherify.BundleIdentifiedItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the product or SKU that meets the bundle condition. This is an ID assigned by Voucherify. | 
**object** | **String** | Determines the type of the object that meets the bundle condition. | 
**itemIndex** | **Number** | Number assigned to the order line item in accordance with the order sent in the request. It starts with &#x60;0&#x60; for the first order line item in the request. | 
**itemQuantity** | **Number** | Quantity of items that meet the bundle conditions. If the quantity in the order is higher than the quantity required by the bundle, this returns only the number that meets the bundle. For example, if the bundle requires &#x60;5&#x60; coffees, but the order includes &#x60;10&#x60; coffees, &#x60;item_quantity&#x60; returns &#x60;5&#x60;. | 



## Enum: ObjectEnum


* `product` (value: `"product"`)

* `sku` (value: `"sku"`)




