# Voucherify.LoyaltiesRewardsCreateAssignmentResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique reward assignment ID, assigned by Voucherify. | [optional] 
**rewardId** | **String** | Associated reward ID. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the reward assignment was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the reward assignment was updated. The value is shown in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the reward assignment. | [optional] [default to &#39;reward_assignment&#39;]
**relatedObjectId** | **String** | Related object ID to which the reward was assigned. | [optional] 
**relatedObjectType** | **String** | Related object type to which the reward was assigned. | [optional] [default to &#39;campaign&#39;]
**parameters** | [**LoyaltiesRewardsCreateAssignmentResponseBodyParameters**](LoyaltiesRewardsCreateAssignmentResponseBodyParameters.md) |  | [optional] 



## Enum: ObjectEnum


* `reward_assignment` (value: `"reward_assignment"`)





## Enum: RelatedObjectTypeEnum


* `campaign` (value: `"campaign"`)




