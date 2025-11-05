# Voucherify.ManagementProjectsCustomEventSchemasListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about the custom event schemas in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of custom event schema objects. | [optional] [default to &#39;data&#39;]
**data** | [**[ManagementProjectsCustomEventSchema]**](ManagementProjectsCustomEventSchema.md) | Array of custom event schema objects. | [optional] 
**total** | **Number** | The total number of custom event schema objects. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




