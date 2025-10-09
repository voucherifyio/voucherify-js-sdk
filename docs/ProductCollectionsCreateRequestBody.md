# Voucherify.ProductCollectionsCreateRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Show that the product collection is static (manually selected products). | [optional] [default to &#39;STATIC&#39;]
**name** | **String** | Unique user-defined product collection name. | [optional] 
**products** | [**[ProductCollectionsCreateRequestBodyProductsItem]**](ProductCollectionsCreateRequestBodyProductsItem.md) | Defines a set of products for a &#x60;STATIC&#x60; product collection type. | [optional] 
**filter** | **Object** | Defines a set of criteria and boundary conditions for an &#x60;AUTO_UPDATE&#x60; product collection type. | [optional] 



## Enum: TypeEnum


* `STATIC` (value: `"STATIC"`)




