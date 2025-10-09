# Voucherify.ProductCollectionsProductsListResponseBodyDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**sourceId** | **String** |  | [optional] 
**name** | **String** | Unique user-defined product name. | [optional] 
**price** | **Number** | Unit price. It is represented by a value multiplied by 100 to accurately reflect 2 decimal places, such as &#x60;$100.00&#x60; being expressed as &#x60;10000&#x60;. | [optional] 
**attributes** | **[String]** | A list of product attributes whose values you can customize for given SKUs: &#x60;[\&quot;color\&quot;,\&quot;size\&quot;,\&quot;ranking\&quot;]&#x60;. Each child SKU can have a unique value for a given attribute. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the product. A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format. It can be used to create product collections. and The metadata object stores all custom attributes assigned to the SKU. A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format. It can be used to create product collections. | [optional] 
**imageUrl** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**object** | **String** |  | [optional] 
**productId** | **String** | The parent product&#39;s unique ID. | [optional] 
**sku** | **String** | Unique user-defined SKU name. | [optional] 
**currency** | **String** | SKU price currency. | [optional] 
**product** | [**ProductWithoutSkus**](ProductWithoutSkus.md) |  | [optional] 



## Enum: ObjectEnum


* `product` (value: `"product"`)

* `sku` (value: `"sku"`)




