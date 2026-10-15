# Voucherify.V2LoyaltiesEarningRulesGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Earning rule ID (&#x60;lern_...&#x60;). | [optional] 
**name** | **String** | Earning rule name. | [optional] 
**status** | **String** | Current status. &#x60;DELETED&#x60; also exists internally but deleted rules are excluded from API reads. | [optional] 
**earnings** | [**[EarningRuleEarning]**](EarningRuleEarning.md) | Earning definitions of the rule. Contains at least one earning. | [optional] 
**trigger** | [**EarningRuleTrigger**](EarningRuleTrigger.md) |  | 
**error** | [**LoyaltyV2ActivityEarningRuleError**](LoyaltyV2ActivityEarningRuleError.md) |  | [optional] 
**validityHours** | [**EarningRuleValidityHours**](EarningRuleValidityHours.md) |  | 
**startDate** | **Date** | Date-time from which the rule is active. Can be &#x60;null&#x60;. | [optional] 
**endDate** | **Date** | Date-time until which the rule is active. Can be &#x60;null&#x60;. | [optional] 
**triggerLimits** | [**V2LoyaltiesEarningRulesGetResponseBodyTriggerLimits**](V2LoyaltiesEarningRulesGetResponseBodyTriggerLimits.md) |  | [optional] 
**earningLimits** | [**LoyaltyV2ActivityEarningRuleEarningLimits**](LoyaltyV2ActivityEarningRuleEarningLimits.md) |  | 
**metadata** | **{String: Object}** | Arbitrary key-value metadata; any JSON object is accepted. | 
**createdAt** | **Date** | Creation timestamp (ISO 8601). | [optional] 
**updatedAt** | **Date** | Last update timestamp (ISO 8601). &#x60;null&#x60; when never updated. | [optional] 
**object** | **String** | Object type marker. Always &#x60;earning_rule&#x60;. | [optional] [default to &#39;earning_rule&#39;]



## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)





## Enum: ObjectEnum


* `earning_rule` (value: `"earning_rule"`)




