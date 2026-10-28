# Voucherify.LoyaltiesProgramsReportsMembersDailyListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[MembersReportDailyEntry]**](MembersReportDailyEntry.md) | List of report entries, one per aggregation period with recorded activity, ordered by &#x60;date&#x60; ascending. Empty when no activity was recorded in the range. | [optional] 
**object** | **String** | Object type marker. Always &#x60;report&#x60;. | [optional] [default to &#39;report&#39;]



## Enum: ObjectEnum


* `report` (value: `"report"`)




