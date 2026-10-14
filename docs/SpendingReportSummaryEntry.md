# Voucherify.SpendingReportSummaryEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifies the summary row (&#x60;lssum_...&#x60;). | [optional] 
**cardDefinitionId** | **String** | Identifies the card definition (&#x60;lcdef_...&#x60;). | [optional] 
**success** | **Number** | Counts successful spending operations. | [optional] 
**successOnReward** | **Number** | Counts successful reward purchases. | [optional] 
**successOnOrder** | **Number** | Counts successful order payments. | [optional] 
**points** | **Number** | Totals points spent. | [optional] 
**pointsOnRewards** | **Number** | Totals points spent on reward purchases. | [optional] 
**pointsOnOrder** | **Number** | Totals points spent on order payments. | [optional] 
**amountOnOrder** | **Number** | Totals order amount paid with points. | [optional] 
**object** | **String** | Object type marker. Always &#x60;spending_summary_report&#x60;. | [optional] [default to &#39;spending_summary_report&#39;]



## Enum: ObjectEnum


* `spending_summary_report` (value: `"spending_summary_report"`)




