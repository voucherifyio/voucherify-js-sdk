# Voucherify.LoyaltiesProgramsReportsRewardsSpendingsDailyListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[RewardsSpendingsReportDailyEntry]**](RewardsSpendingsReportDailyEntry.md) | List of report entries, one per reward, cost, spending, card definition, and aggregation period with an approved point spend, ordered by &#x60;date&#x60; ascending. Empty when no approved point spend was recorded in the range. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




