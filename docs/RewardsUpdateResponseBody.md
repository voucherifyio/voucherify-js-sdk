# Voucherify.RewardsUpdateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique reward ID, assigned by Voucherify. | [optional] 
**name** | **String** | Reward name. | [optional] 
**stock** | **Number** | Configurable for **material rewards**. The number of units of the product that you want to share as a reward. Use this parameter to code a stock-taking logic. | [optional] 
**redeemed** | **Number** | Defines the number of already invoked (successful) reward redemptions.  | [optional] 
**attributes** | [**RewardsUpdateResponseBodyAttributes**](RewardsUpdateResponseBodyAttributes.md) |  | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the reward. A set of key/value pairs that you can attach to a reward object. It can be useful for storing additional information about the reward in a structured format. | [optional] 
**type** | **String** | Reward type. | [optional] 
**parameters** | [**RewardType**](RewardType.md) |  | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the reward was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the reward was updated. The value is shown in the ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the reward. | [default to &#39;reward&#39;]



## Enum: TypeEnum


* `CAMPAIGN` (value: `"CAMPAIGN"`)

* `COIN` (value: `"COIN"`)

* `MATERIAL` (value: `"MATERIAL"`)





## Enum: ObjectEnum


* `reward` (value: `"reward"`)




