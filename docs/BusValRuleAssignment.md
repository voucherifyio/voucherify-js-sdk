# Voucherify.BusValRuleAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for a assignment | [optional] 
**ruleId** | **String** | The unique identifier for a rule | [optional] 
**relatedObjectId** | **String** | The unique identifier for a related object | [optional] 
**relatedObjectType** | **String** | The type of related object | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the object was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the object was last updated in ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;validation_rules_assignment&#39;]
**validationStatus** | **String** | The validation status of the assignment | [optional] 
**validationOmittedRules** | **[String]** | The list of omitted rules | [optional] 



## Enum: ObjectEnum


* `validation_rules_assignment` (value: `"validation_rules_assignment"`)





## Enum: ValidationStatusEnum


* `VALID` (value: `"VALID"`)

* `PARTIALLY_VALID` (value: `"PARTIALLY_VALID"`)

* `INVALID` (value: `"INVALID"`)




