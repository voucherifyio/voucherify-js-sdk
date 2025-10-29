# Voucherify.ProductsSkusCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier that represents the SKU and is assigned by Voucherify. | [optional] 
**sourceId** | **String** | A unique SKU identifier from your inventory system. | [optional] 
**productId** | **String** | The parent product&#39;s unique ID. | [optional] 
**sku** | **String** | Unique user-defined SKU name. | [optional] 
**price** | **Number** | Unit price. It is represented by a value multiplied by 100 to accurately reflect 2 decimal places, such as &#x60;$100.00&#x60; being expressed as &#x60;10000&#x60;. | [optional] 
**currency** | **String** | SKU price currency. | [optional] 
**attributes** | **Object** | The attributes object stores values for all custom attributes inherited by the SKU from the parent product. A set of key/value pairs that are attached to a SKU object and are unique to each SKU within a product family. | [optional] 
**imageUrl** | **String** | The HTTPS URL pointing to the .png or .jpg file that will be used to render the SKU image. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the SKU. A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format. It can be used to create product collections. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the SKU was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the SKU was updated. The value is shown in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the &#x60;SKU&#x60;. | [optional] [default to &#39;sku&#39;]



## Enum: ObjectEnum


* `sku` (value: `"sku"`)




