# Voucherify.V2LoyaltiesProgramsReportsTiersDailyListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[TiersReportDailyEntry]**](TiersReportDailyEntry.md) | List of report entries, one per tier structure, tier, and aggregation period with recorded movement, ordered by &#x60;date&#x60; ascending. Empty when no movement was recorded in the range. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




