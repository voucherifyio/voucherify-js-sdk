# Voucherify.SegmentsGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique segment ID. | [optional] 
**name** | **String** | Segment name. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the segment was created. The value is shown in the ISO 8601 format. | [optional] 
**type** | **String** | Defines whether the segment is: - Active (&#x60;auto-update&#x60;): customers enter and leave the segment based on the defined filters and the &#x60;customer.segment.entered&#x60; and &#x60;customer.segment.left&#x60; events are triggered, - Passive (&#x60;passive&#x60;): customers enter and leave the segment based on the defined filters, but the &#x60;customer.segment.entered&#x60; and &#x60;customer.segment.left&#x60; events are not triggered, - Static (&#x60;static&#x60;): manually selected customers. | [optional] 
**filter** | **Object** | Defines a set of criteria for an &#x60;auto-update&#x60; or &#x60;passive&#x60; segment type. | [optional] 
**initialSyncStatus** | **String** |  | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the customer segment. | [optional] [default to &#39;segment&#39;]



## Enum: TypeEnum


* `auto-update` (value: `"auto-update"`)

* `passive` (value: `"passive"`)

* `static` (value: `"static"`)





## Enum: InitialSyncStatusEnum


* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `DONE` (value: `"DONE"`)





## Enum: ObjectEnum


* `segment` (value: `"segment"`)




