# Voucherify.CampaignsTransactionsExportCreateRequestBodyParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **String** | How the export is ordered, where the dash &#x60;-&#x60; preceding a sorting option means sorting in a descending order. | [optional] 
**fields** | **[String]** | Data fields that will be exported for the transactions that are associated with balance movements on cards in a campaign. | [optional] 
**filters** | [**ExportCampaignTransactionsFilters**](ExportCampaignTransactionsFilters.md) |  | [optional] 



## Enum: OrderEnum


* `-created_at` (value: `"-created_at"`)

* `created_at` (value: `"created_at"`)





## Enum: [FieldsEnum]


* `id` (value: `"id"`)

* `type` (value: `"type"`)

* `source_id` (value: `"source_id"`)

* `reason` (value: `"reason"`)

* `balance` (value: `"balance"`)

* `amount` (value: `"amount"`)

* `created_at` (value: `"created_at"`)

* `voucher_id` (value: `"voucher_id"`)

* `source` (value: `"source"`)

* `details` (value: `"details"`)

* `related_transaction_id` (value: `"related_transaction_id"`)




