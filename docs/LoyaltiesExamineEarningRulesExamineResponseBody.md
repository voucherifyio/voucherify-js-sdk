# Voucherify.LoyaltiesExamineEarningRulesExamineResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | Examined trigger event (e.g. &#x60;customer.order.paid&#x60;, &#x60;customer.segment.entered&#x60;, &#x60;customer.custom_event&#x60;). &#x60;null&#x60; when &#x60;trigger.type&#x60; is &#x60;ALL&#x60;. | [optional] 
**customer** | [**ExamineCustomerReference**](ExamineCustomerReference.md) |  | [optional] 
**earningRules** | [**[LoyaltiesExamineEarningRulesExamineResponseBodyEarningRuleDetail]**](LoyaltiesExamineEarningRulesExamineResponseBodyEarningRuleDetail.md) | Lists earning rules that produced a points or benefit estimation, deduplicated across memberships. | [optional] 
**memberships** | [**[LoyaltiesExamineEarningRulesExamineResponseBodyMembership]**](LoyaltiesExamineEarningRulesExamineResponseBodyMembership.md) | Lists one entry for each active membership whose program has earning rules for the examined trigger. Includes a card only when its estimated points are greater than 0, and a benefit only when an earning rule can grant it. Both arrays can be empty. | [optional] 
**object** | **String** | Object type marker. Always &#x60;earnings_examine_result&#x60;. | [optional] [default to &#39;earnings_examine_result&#39;]



## Enum: ObjectEnum


* `earnings_examine_result` (value: `"earnings_examine_result"`)




