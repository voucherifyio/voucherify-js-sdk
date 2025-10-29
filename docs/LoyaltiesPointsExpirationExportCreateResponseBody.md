# Voucherify.LoyaltiesPointsExpirationExportCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique export ID. | [optional] 
**object** | **String** | The type of object being represented. This object stores information about the export. | [optional] [default to &#39;export&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the export was scheduled in ISO 8601 format. | [optional] 
**status** | **String** | Status of the export. Informs you whether the export has already been completed. | [optional] [default to &#39;SCHEDULED&#39;]
**channel** | **String** | The channel through which the export was triggered. | [optional] 
**exportedObject** | **String** | The type of exported object. | [optional] [default to &#39;points_expiration&#39;]
**parameters** | [**LoyaltiesPointsExpirationExportCreateResponseBodyParameters**](LoyaltiesPointsExpirationExportCreateResponseBodyParameters.md) |  | [optional] 
**result** | **Object** | Always null. | [optional] 
**userId** | **String** | &#x60;user_id&#x60; identifies the specific user who initiated the export through the Voucherify Dashboard. &#x60;user_id&#x60; is returned when the channel value is &#x60;WEBSITE&#x60;. | [optional] 



## Enum: ObjectEnum


* `export` (value: `"export"`)





## Enum: StatusEnum


* `SCHEDULED` (value: `"SCHEDULED"`)





## Enum: ChannelEnum


* `API` (value: `"API"`)

* `WEBSITE` (value: `"WEBSITE"`)





## Enum: ExportedObjectEnum


* `points_expiration` (value: `"points_expiration"`)




