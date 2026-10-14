# Voucherify.RewardsReportSummaryEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifies the summary row (format: &#x60;lprrs_&#x60; followed by hexadecimal characters). | [optional] 
**rewardId** | **String** | Identifies the reward (&#x60;lrew_...&#x60;). | [optional] 
**successCount** | **Number** | Counts approved reward purchases. | [optional] 
**failuresCount** | **Number** | Counts reward purchase attempts that failed. | [optional] 
**failuresBreakdown** | **Object** | Counts failed reward purchase attempts by reason. A reason is present only when it was recorded. Empty when no failures were recorded. Keys can also be a card-transaction rejection reason or a publication error key. | 
**object** | **String** | Object type marker. Always &#x60;program_rewards_summary_report&#x60;. | [optional] [default to &#39;program_rewards_summary_report&#39;]



## Enum: ObjectEnum


* `program_rewards_summary_report` (value: `"program_rewards_summary_report"`)




