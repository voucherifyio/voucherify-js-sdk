# Voucherify.LoyaltiesProgramsReportsRewardsSummaryListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[RewardsReportSummaryEntry]**](RewardsReportSummaryEntry.md) | List of summary rows, one per reward with a recorded purchase attempt, ordered by &#x60;id&#x60; descending. Contains at most 100 rows. Empty when no purchase attempts were recorded. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




