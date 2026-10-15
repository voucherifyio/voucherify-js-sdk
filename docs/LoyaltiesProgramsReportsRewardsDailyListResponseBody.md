# Voucherify.LoyaltiesProgramsReportsRewardsDailyListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[RewardsReportDailyEntry]**](RewardsReportDailyEntry.md) | List of report entries, one per reward and aggregation period with recorded purchases, ordered by &#x60;date&#x60; ascending. Empty when no purchases were recorded in the range. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




