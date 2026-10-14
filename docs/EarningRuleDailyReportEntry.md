# Voucherify.EarningRuleDailyReportEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | Identifies the start of the truncated aggregation period (&#x60;YYYY-MM-DD&#x60;). For &#x60;week&#x60; this is Monday. For &#x60;month&#x60; this is the first day. For &#x60;quarter&#x60; this is the quarter start. | [optional] 
**count** | **Number** | Counts successful earning-rule triggers for the member in the period. A trigger rejected by its limit check is not included. | [optional] 
**object** | **String** | Object type marker. Always &#x60;earning_rule_daily_report&#x60;. | [optional] [default to &#39;earning_rule_daily_report&#39;]



## Enum: ObjectEnum


* `earning_rule_daily_report` (value: `"earning_rule_daily_report"`)




