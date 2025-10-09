# Voucherify.ManagementProjectsListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about the projects in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of project objects. | [optional] [default to &#39;data&#39;]
**data** | [**[ManagementProject]**](ManagementProject.md) | Array of project objects. | [optional] 
**total** | **Number** | The total number of projects. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




