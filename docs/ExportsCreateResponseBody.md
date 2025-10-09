# Voucherify.ExportsCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique export ID. | [optional] 
**object** | **String** | The type of object being represented. This object stores information about the export. | [optional] [default to &#39;export&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the export was scheduled in ISO 8601 format. | [optional] 
**status** | **String** | Status of the export. Informs you whether the export has already been completed, i.e. indicates whether the file containing the exported data has been generated. | [optional] [default to &#39;SCHEDULED&#39;]
**channel** | **String** | The channel through which the export was triggered. | [optional] 
**result** | **Object** | Contains the URL of the CSV file. | [optional] 
**userId** | **String** | Identifies the specific user who initiated the export through the Voucherify Dashboard; returned when the channel value is WEBSITE. | [optional] 
**exportedObject** | **String** |  | [optional] 
**parameters** | [**ExportsCreateResponseBodyParameters**](ExportsCreateResponseBodyParameters.md) |  | [optional] 



## Enum: ObjectEnum


* `export` (value: `"export"`)





## Enum: StatusEnum


* `SCHEDULED` (value: `"SCHEDULED"`)





## Enum: ExportedObjectEnum


* `voucher` (value: `"voucher"`)

* `redemption` (value: `"redemption"`)

* `customer` (value: `"customer"`)

* `publication` (value: `"publication"`)

* `order` (value: `"order"`)

* `points_expiration` (value: `"points_expiration"`)

* `voucher_transactions` (value: `"voucher_transactions"`)




