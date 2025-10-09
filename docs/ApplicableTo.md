# Voucherify.ApplicableTo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | This object stores information about the resource to which the discount is applicable. | [optional] 
**id** | **String** | Unique product collection, product, or SKU identifier assigned by Voucherify. | [optional] 
**sourceId** | **String** | The source identifier from your inventory system. | [optional] 
**productId** | **String** | Parent product&#39;s unique ID assigned by Voucherify. | [optional] 
**productSourceId** | **String** | Parent product&#39;s source ID from your inventory system. | [optional] 
**price** | **Number** | New fixed price of an item. Value is multiplied by 100 to precisely represent 2 decimal places. For example, a $10 price is written as 1000. In case of the fixed price being calculated by the formula, i.e. the price_formula parameter is present in the fixed price definition, this value becomes the fallback value. Such that in a case where the formula cannot be calculated due to missing metadata, for example, this value will be used as the fixed price. | [optional] 
**priceFormula** | **Number** | Formula used to dynamically calculate the discounted price of an item. | [optional] 
**effect** | [**ApplicableToEffect**](ApplicableToEffect.md) |  | 
**quantityLimit** | **Number** | The maximum number of units allowed to be discounted per order line item. | [optional] 
**aggregatedQuantityLimit** | **Number** | The maximum number of units allowed to be discounted combined across all matched order line items. | [optional] 
**amountLimit** | **Number** | Upper limit allowed to be applied as a discount per order line item. Value is multiplied by 100 to precisely represent 2 decimal places. For example, a $6 maximum discount is written as 600. | [optional] 
**aggregatedAmountLimit** | **Number** | Maximum discount amount per order. Value is multiplied by 100 to precisely represent 2 decimal places. For example, a $6 maximum discount on the entire order is written as 600. This value is definable for the following discount effects: - &#x60;APPLY_TO_ITEMS&#x60; (each item subtotal is discounted equally) - &#x60;APPLY_TO_ITEMS_BY_QUANTITY&#x60; (each unit of matched products has the same discount value) | [optional] 
**orderItemIndices** | **[Number]** | Lists which order lines are (not) covered by the discount. The order in the array is determined by the sequence of applied discounts, while the numbers correspond to the order lines sent in the &#x60;order&#x60; object in the request. The first order line is assigned &#x60;0&#x60;, the second order line is assigned &#x60;1&#x60;, and so on. | [optional] 
**orderItemUnits** | [**[ApplicableToOrderItemUnitsItem]**](ApplicableToOrderItemUnitsItem.md) | Lists which units within order lines are covered by the discount. The order line items are listed according to sequence of applied discounts while the &#x60;index&#x60; corresponds to the order line sent in the &#x60;order&#x60; object in the request. | [optional] 
**repeat** | **Number** | Determines the recurrence of the discount, e.g. &#x60;\&quot;repeat\&quot;: 3&#x60; means that the discount is applied to every third item. | [optional] 
**skipInitially** | **Number** | Determines how many items are skipped before the discount is applied. | [optional] 
**target** | **String** | Determines to which kinds of objects the discount is applicable. &#x60;ITEM&#x60; includes products and SKUs. &#x60;UNIT&#x60; means particular units within an order line. | [optional] 



## Enum: ObjectEnum


* `product` (value: `"product"`)

* `sku` (value: `"sku"`)

* `products_collection` (value: `"products_collection"`)





## Enum: TargetEnum


* `ITEM` (value: `"ITEM"`)

* `UNIT` (value: `"UNIT"`)




