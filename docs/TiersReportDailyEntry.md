# Voucherify.TiersReportDailyEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | Identifies the start of the aggregation period on the project-local calendar (&#x60;YYYY-MM-DD&#x60;). The date is truncated to the resolution. For &#x60;week&#x60; this is Monday. For &#x60;month&#x60; this is the first day. For &#x60;quarter&#x60; this is the quarter start. | [optional] 
**tierStructureId** | **String** | Unique identifier of the tier structure (format &#x60;lts_...&#x60;). | [optional] 
**tierId** | **String** | Unique identifier of the tier (format &#x60;lt_...&#x60;). | [optional] 
**joins** | **Number** | Number of members who joined this tier in the period. | [optional] 
**upgrades** | **Number** | Number of upgrades into this tier in the period. | [optional] 
**downgrades** | **Number** | Number of downgrades into this tier in the period. | [optional] 
**lefts** | **Number** | Number of members who left this tier in the period. | [optional] 
**prolongs** | **Number** | Counts expiration-date changes for members who stayed on this tier in the period. | [optional] 
**object** | **String** | Object type marker. Always &#x60;program_tiers_daily_report&#x60;. | [optional] [default to &#39;program_tiers_daily_report&#39;]



## Enum: ObjectEnum


* `program_tiers_daily_report` (value: `"program_tiers_daily_report"`)




