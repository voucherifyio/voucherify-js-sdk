# Voucherify.AsyncActionGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Async action unique ID. | [optional] 
**type** | **String** | Type of async action. | [optional] 
**status** | **String** | Status of the async action. Informs you whether the async action has already been completed. | [optional] 
**operationStatus** | **String** | Status of async action processing. Informs about the async action status, whether it failed, succeeded, or the status is unknown. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the async action was scheduled in ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the async action was updated. The value is shown in the ISO 8601 format. | [optional] 
**requestId** | **String** | Unique request ID. | [optional] 
**processingTime** | **Number** | The length of time it took to process the request in milliseconds. | [optional] 
**progress** | **Number** | % progress to completion of the asynchronous action. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the &#x60;async_action&#x60;. | [optional] [default to &#39;async_action&#39;]
**result** | **Object** |  | [optional] 



## Enum: StatusEnum


* `DONE` (value: `"DONE"`)

* `ENQUEUED` (value: `"ENQUEUED"`)

* `FAILED` (value: `"FAILED"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)





## Enum: OperationStatusEnum


* `FAILED` (value: `"FAILED"`)

* `SUCCESS` (value: `"SUCCESS"`)

* `UNKNOWN` (value: `"UNKNOWN"`)





## Enum: ObjectEnum


* `async_action` (value: `"async_action"`)




