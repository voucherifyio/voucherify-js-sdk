# Voucherify.ProductCollectionsListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about product collections. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the JSON property that contains the array of product collections. | [optional] [default to &#39;data&#39;]
**data** | [**[ProductCollectionsItem]**](ProductCollectionsItem.md) | A dictionary that contains an array of product collections and their details. | [optional] 
**total** | **Number** | Total number of product collections. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




