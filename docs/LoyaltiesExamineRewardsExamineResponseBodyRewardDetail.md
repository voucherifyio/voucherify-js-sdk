# Voucherify.LoyaltiesExamineRewardsExamineResponseBodyRewardDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique reward ID (&#x60;lrew_...&#x60;). | [optional] 
**name** | **String** | Reward name. | [optional] 
**type** | **String** | Reward type. | [optional] 
**metadata** | **{String: Object}** | Reward metadata (empty object when unset). | [optional] 
**object** | **String** | Object type marker. Always &#x60;reward&#x60;. | [optional] [default to &#39;reward&#39;]
**purchaseLimits** | [**RewardPurchaseLimits**](RewardPurchaseLimits.md) |  | [optional] 



## Enum: TypeEnum


* `MATERIAL` (value: `"MATERIAL"`)

* `DIGITAL` (value: `"DIGITAL"`)





## Enum: ObjectEnum


* `reward` (value: `"reward"`)




