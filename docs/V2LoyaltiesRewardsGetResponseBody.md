# Voucherify.V2LoyaltiesRewardsGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique reward identifier, prefixed with &#x60;lrew_&#x60;. | [optional] 
**name** | **String** | Display name of the reward. | [optional] 
**type** | **String** | Reward type. | [optional] 
**status** | **String** | Current lifecycle status of the reward. | [optional] 
**startDate** | **Date** | Date from which the reward is available, or &#x60;null&#x60; when not set. | [optional] 
**endDate** | **Date** | Date until which the reward is available, or &#x60;null&#x60; when not set. | [optional] 
**validityHours** | [**RewardValidityHoursResponse**](RewardValidityHoursResponse.md) |  | 
**material** | [**RewardMaterialResponse**](RewardMaterialResponse.md) |  | [optional] 
**digital** | [**RewardDigitalResponse**](RewardDigitalResponse.md) |  | [optional] 
**refunds** | [**LoyaltyV2ActivityRewardRefunds**](LoyaltyV2ActivityRewardRefunds.md) |  | 
**costs** | [**[RewardCostResponse]**](RewardCostResponse.md) | Point costs of the reward. Empty array when no costs are defined. | [optional] 
**purchaseLimits** | [**RewardPurchaseLimits**](RewardPurchaseLimits.md) |  | 
**metadata** | **Object** | Arbitrary key-value metadata attached to the reward. Empty object when not set. | [optional] 
**createdAt** | **Date** | Timestamp when the reward was created (ISO-8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the reward was last updated (ISO-8601), or &#x60;null&#x60; when never updated. | [optional] 
**object** | **String** | Object type marker; always &#x60;reward&#x60;. | [optional] [default to &#39;reward&#39;]



## Enum: TypeEnum


* `MATERIAL` (value: `"MATERIAL"`)

* `DIGITAL` (value: `"DIGITAL"`)





## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `DRAFT` (value: `"DRAFT"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `DELETED` (value: `"DELETED"`)





## Enum: ObjectEnum


* `reward` (value: `"reward"`)




