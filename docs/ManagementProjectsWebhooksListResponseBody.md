# Voucherify.ManagementProjectsWebhooksListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about the webhook configurations in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of webhook objects. | [optional] [default to &#39;data&#39;]
**data** | [**[ManagementProjectsWebhook]**](ManagementProjectsWebhook.md) | Array of webhook objects. | [optional] 
**total** | **Number** | The total number of webhook objects. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




