# Voucherify.LoyaltiesProgramsReportsSpendingSummaryListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[SpendingReportSummaryEntry]**](SpendingReportSummaryEntry.md) | Lists summary rows, one per card definition that has recorded spending. Contains at most 10 rows (max number of card definitions per program), ordered by &#x60;id&#x60; descending. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




