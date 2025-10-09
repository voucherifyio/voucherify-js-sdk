# Voucherify.CustomersPermanentDeletionCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique permanent deletion object ID. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the customer was requested to be deleted in ISO 8601 format. | [optional] 
**relatedObjectId** | **String** | Unique customer ID that is being deleted. | [optional] 
**relatedObject** | **String** | Object being deleted. | [optional] [default to &#39;customer&#39;]
**status** | **String** | Deletion status. | [optional] [default to &#39;DONE&#39;]
**dataJson** | [**CustomersPermanentDeletionCreateResponseBodyDataJson**](CustomersPermanentDeletionCreateResponseBodyDataJson.md) |  | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;pernament_deletion&#39;]


