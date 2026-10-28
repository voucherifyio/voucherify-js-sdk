# Voucherify.LoyaltiesProgramsReportsSpendingDailyListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[SpendingReportDailyEntry]**](SpendingReportDailyEntry.md) | List of report entries, one per card definition and aggregation period with recorded spending, ordered by &#x60;date&#x60; ascending. Empty when no spending was recorded in the range. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




