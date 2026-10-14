# Voucherify.PointsEarningsReportSummaryEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earningRuleId** | **String** | Identifies the earning rule (format &#x60;lern_...&#x60;). | [optional] 
**earningItemId** | **String** | Identifies the earning item that produced the points (format: &#x60;lernei_&#x60; followed by hexadecimal characters). | [optional] 
**cardDefinitionId** | **String** | Identifies the card definition (format &#x60;lcdef_...&#x60;). | [optional] 
**id** | **String** | Identifies the summary row (format: &#x60;lppes_&#x60; followed by hexadecimal characters). | [optional] 
**successCount** | **Number** | Counts earning operations that credited points or added pending points. | [optional] 
**points** | **Number** | Sums points credited immediately by earning rules. Pending points activated later are not included. | [optional] 
**pendingPoints** | **Number** | Sums pending points added. Activated and canceled pending points are not deducted. | [optional] 
**object** | **String** | Object type marker. Always &#x60;program_points_earnings_summary_report&#x60;. | [optional] [default to &#39;program_points_earnings_summary_report&#39;]



## Enum: ObjectEnum


* `program_points_earnings_summary_report` (value: `"program_points_earnings_summary_report"`)




