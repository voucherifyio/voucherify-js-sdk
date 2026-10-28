# Voucherify.MembersReportDailyEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | Identifies the start of the truncated aggregation period (&#x60;YYYY-MM-DD&#x60;). For &#x60;week&#x60; this is Monday. For &#x60;month&#x60; this is the first day. For &#x60;quarter&#x60; this is the quarter start. | [optional] 
**membersJoined** | **Number** | Counts members who joined the program in the period. | [optional] 
**membersDeactivated** | **Number** | Counts members deactivated in the period. Decreases by 1 when a member is activated again. | [optional] 
**membersDeleted** | **Number** | Counts members deleted in the period. | [optional] 
**cards** | **Number** | Counts cards created in the period. Decreases by 1 when a card is unassigned (e.g. when a member is deleted). | [optional] 
**object** | **String** | Object type marker. Always &#x60;program_members_daily_report&#x60;. | [optional] [default to &#39;program_members_daily_report&#39;]



## Enum: ObjectEnum


* `program_members_daily_report` (value: `"program_members_daily_report"`)




