# Voucherify.V2LoyaltiesProgramsReportsTiersSummaryListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[TiersReportSummaryEntry]**](TiersReportSummaryEntry.md) | List of summary rows, one per tier structure and tier with recorded movement, ordered by &#x60;id&#x60; descending. Contains at most 100 rows. Empty when no movement was recorded. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




