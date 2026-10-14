# Voucherify.RewardCostResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique cost identifier, prefixed with &#x60;lrcst_&#x60;. | [optional] 
**name** | **String** | Display name of the cost. Omitted when not set. &#x60;null&#x60; when cleared. | [optional] 
**rules** | **Object** | Rules group. Contains a &#x60;logic&#x60; formula string plus numbered rule definition properties (positive-integer keys). | [optional] 
**spending** | [**[LoyaltyV2ActivityRewardCostSpendingResponse]**](LoyaltyV2ActivityRewardCostSpendingResponse.md) | Points spending definitions, or &#x60;null&#x60; when none are defined. | [optional] 
**tierRules** | [**RewardCostTierRulesResponse**](RewardCostTierRulesResponse.md) |  | 


