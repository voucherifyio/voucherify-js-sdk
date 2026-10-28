# Voucherify.EarningRulesReportDailyEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | Identifies the start of the truncated aggregation period (&#x60;YYYY-MM-DD&#x60;). For &#x60;week&#x60; this is Monday. For &#x60;month&#x60; this is the first day. For &#x60;quarter&#x60; this is the quarter start. | [optional] 
**earningRuleId** | **String** | Identifies the earning rule (format &#x60;lern_...&#x60;). | [optional] 
**successCount** | **Number** | Counts eligibility checks that passed the trigger limit in the period. | [optional] 
**failuresCount** | **Number** | Counts eligibility checks that failed the trigger limit in the period. | [optional] 
**failuresBreakdown** | **Object** | Always an empty object even if &#x60;failures_count&#x60; is above zero. | [optional] 
**object** | **String** | Object type marker. Always &#x60;program_earning_rules_daily_report&#x60;. | [optional] [default to &#39;program_earning_rules_daily_report&#39;]



## Enum: ObjectEnum


* `program_earning_rules_daily_report` (value: `"program_earning_rules_daily_report"`)




