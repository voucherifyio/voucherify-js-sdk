# Voucherify.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **Number** | Error&#39;s HTTP status code. | [optional] 
**key** | **String** | Short string describing the kind of error which occurred. | [optional] 
**message** | **String** | A human-readable message providing a short description of the error. | [optional] 
**details** | **String** | A human-readable message providing more details about the error. | [optional] 
**requestId** | **String** | This ID is useful when troubleshooting and/or finding the root cause of an error response by our support team. | [optional] 
**resourceId** | **String** | Unique resource ID that can be used in another endpoint to get more details. | [optional] 
**resourceType** | **String** | The resource type. | [optional] 
**error** | [**ErrorError**](ErrorError.md) |  | [optional] 


