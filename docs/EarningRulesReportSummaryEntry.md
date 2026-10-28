# Voucherify.EarningRulesReportSummaryEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifies the summary row (format: &#x60;lpers_&#x60; followed by hexadecimal characters). | [optional] 
**earningRuleId** | **String** | Identifies the earning rule (format &#x60;lern_...&#x60;). | [optional] 
**successCount** | **Number** | Counts eligibility checks that passed the trigger limit. | [optional] 
**failuresCount** | **Number** | Counts eligibility checks that failed the trigger limit. | [optional] 
**failuresBreakdown** | [**EarningRulesReportFailuresBreakdown**](EarningRulesReportFailuresBreakdown.md) |  | 
**object** | **String** | Object type marker. Always &#x60;program_earning_rules_summary_report&#x60;. | [optional] [default to &#39;program_earning_rules_summary_report&#39;]



## Enum: ObjectEnum


* `program_earning_rules_summary_report` (value: `"program_earning_rules_summary_report"`)




