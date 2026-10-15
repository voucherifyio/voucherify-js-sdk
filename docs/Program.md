# Voucherify.Program

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique program identifier. | [optional] 
**name** | **String** | Program name. | [optional] 
**status** | **String** | Program status. | [optional] 
**startDate** | **Date** | Program validity start date (ISO 8601), or &#x60;null&#x60; when not set. | [optional] 
**endDate** | **Date** | Program validity end date (ISO 8601), or &#x60;null&#x60; when not set. | [optional] 
**validityHours** | [**ProgramValidityHours**](ProgramValidityHours.md) |  | [optional] 
**metadata** | **Object** | Arbitrary key-value metadata. Defaults to &#x60;{}&#x60;. | [optional] 
**createdAt** | **Date** | Creation timestamp (ISO 8601). | [optional] 
**updatedAt** | **Date** | Last update timestamp (ISO 8601), or &#x60;null&#x60; when never updated. | [optional] 
**object** | **String** | Object type marker. | [optional] [default to &#39;program&#39;]



## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `DELETED` (value: `"DELETED"`)





## Enum: ObjectEnum


* `program` (value: `"program"`)




