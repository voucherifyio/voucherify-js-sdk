# Voucherify.ValidationRulesAssignmentsCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Validation rule assignment ID. | [optional] 
**ruleId** | **String** | Validation rule ID. | [optional] 
**relatedObjectId** | **String** | The resource ID to which the validation rule was assigned. | [optional] 
**relatedObjectType** | **String** | The type of resource to which the validation rule was assigned. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the validation rule assignment was created. The value is shown in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by the ID. | [optional] [default to &#39;validation_rules_assignment&#39;]



## Enum: RelatedObjectTypeEnum


* `voucher` (value: `"voucher"`)

* `campaign` (value: `"campaign"`)

* `earning_rule` (value: `"earning_rule"`)

* `reward_assignment` (value: `"reward_assignment"`)

* `promotion_tier` (value: `"promotion_tier"`)

* `distribution` (value: `"distribution"`)





## Enum: ObjectEnum


* `validation_rules_assignment` (value: `"validation_rules_assignment"`)




