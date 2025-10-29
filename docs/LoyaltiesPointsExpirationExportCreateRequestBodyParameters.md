# Voucherify.LoyaltiesPointsExpirationExportCreateRequestBodyParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **String** | How the export is filtered, where the dash &#x60;-&#x60; preceding a sorting option means sorting in a descending order. | [optional] 
**fields** | **[String]** | Array of strings containing the data that was exported. These fields define the headers in the CSV file.    The array can be a combination of any of the following available fields:    | **Field** | **Definition** | **Example Export** | |:---|:---|:---| | id | Loyalty points bucket ID. | lopb_Wl1o3EjJIHSNjvO5BDLy4z1n | | campaign_id | Campaign ID of the parent loyalty campaign. | camp_7s3uXI44aKfIk5IhmeOPr6ic | | voucher_id | Voucher ID of the parent loyalty card. | v_YLn0WVWXSXbUfDvxgrgUbtfJ3SQIY655 | | status | Status of the loyalty point bucket. | &#x60;ACTIVE&#x60; or &#x60;EXPIRED&#x60; | | expires_at | Timestamp in ISO 8601 format representing the date when the points expire. | 2022-06-30 | | points | Number of points. | 1000 | | [optional] 
**filters** | [**LoyaltiesPointsExpirationExportCreateRequestBodyParametersFilters**](LoyaltiesPointsExpirationExportCreateRequestBodyParametersFilters.md) |  | [optional] 



## Enum: OrderEnum


* `expires_at` (value: `"expires_at"`)

* `-expires_at` (value: `"-expires_at"`)





## Enum: [FieldsEnum]


* `id` (value: `"id"`)

* `campaign_id` (value: `"campaign_id"`)

* `voucher_id` (value: `"voucher_id"`)

* `points` (value: `"points"`)

* `status` (value: `"status"`)

* `expires_at` (value: `"expires_at"`)




