# Voucherify.ProgramRewardAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rewardId** | **String** | Unique reward identifier. | [optional] 
**stock** | [**ProgramRewardAssignmentStock**](ProgramRewardAssignmentStock.md) |  | 
**redeemed** | **Number** | Number of times the reward has been redeemed within the program. Defaults to 0. | [optional] 
**createdAt** | **Date** | Assignment creation timestamp (ISO 8601). | [optional] 
**updatedAt** | **Date** | Last update timestamp (ISO 8601), or &#x60;null&#x60; when never updated. | [optional] 
**object** | **String** | Object type marker. Always &#x60;program_reward&#x60;. | [optional] [default to &#39;program_reward&#39;]



## Enum: ObjectEnum


* `program_reward` (value: `"program_reward"`)




