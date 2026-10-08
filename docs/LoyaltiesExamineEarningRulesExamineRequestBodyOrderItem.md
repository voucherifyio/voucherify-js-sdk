# Voucherify.LoyaltiesExamineEarningRulesExamineRequestBodyOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Order item ID assigned by Voucherify. Can be &#x60;null&#x60;. | [optional] 
**sourceId** | **String** | Order item source ID, e.g. from an external system. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**productId** | **String** | Product ID. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**skuId** | **String** | SKU ID. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**relatedObject** | **Object** |  | [optional] 
**amount** | **Number** | Item amount before discounts - a non-negative integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**discountAmount** | **Number** | Item discount amount - a non-negative integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**quantity** | **Number** | Item quantity - a positive integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**price** | **Number** | Item unit price - a non-negative integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**product** | **Object** |  | [optional] 
**sku** | **Object** |  | [optional] 
**metadata** | **Object** |  | [optional] 


