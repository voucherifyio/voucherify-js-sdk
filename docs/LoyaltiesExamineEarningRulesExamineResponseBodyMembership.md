# Voucherify.LoyaltiesExamineEarningRulesExamineResponseBodyMembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | [**ExamineMemberReference**](ExamineMemberReference.md) |  | [optional] 
**program** | [**ExamineProgramReference**](ExamineProgramReference.md) |  | [optional] 
**cards** | [**[LoyaltiesExamineEarningRulesExamineResponseBodyCardEstimation]**](LoyaltiesExamineEarningRulesExamineResponseBodyCardEstimation.md) | Point estimations per card. | [optional] 
**benefits** | [**[LoyaltiesExamineEarningRulesExamineResponseBodyBenefitEstimation]**](LoyaltiesExamineEarningRulesExamineResponseBodyBenefitEstimation.md) | Benefit estimations. | [optional] 
**object** | **String** | Object type marker. Always &#x60;member_earnings_opportunity&#x60;. | [optional] [default to &#39;member_earnings_opportunity&#39;]



## Enum: ObjectEnum


* `member_earnings_opportunity` (value: `"member_earnings_opportunity"`)




