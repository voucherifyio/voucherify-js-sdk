# Voucherify.MemberActivityDataRedemptionReward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**MemberActivityDataRedemptionRewardCustomer**](MemberActivityDataRedemptionRewardCustomer.md) |  | [optional] 
**assignmentId** | **String** | Unique reward assignment ID assigned by Voucherify. | [optional] 
**voucher** | [**MemberActivityDataRedemptionRewardVoucher**](MemberActivityDataRedemptionRewardVoucher.md) |  | [optional] 
**product** | [**MemberActivityDataRedemptionRewardProduct**](MemberActivityDataRedemptionRewardProduct.md) |  | [optional] 
**sku** | [**MemberActivityDataRedemptionRewardSku**](MemberActivityDataRedemptionRewardSku.md) |  | [optional] 
**loyaltyTierId** | **String** | Unique loyalty tier ID assigned by Voucherify. | [optional] 
**id** | **String** |  | [optional] 
**object** | **String** |  | [optional] [default to &#39;reward&#39;]
**name** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**parameters** | [**MemberActivityDataRedemptionRewardParameters**](MemberActivityDataRedemptionRewardParameters.md) |  | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a reward. The metadata object stores all custom attributes assigned to the reward. | [optional] 
**type** | **String** | Reward type. | [optional] 



## Enum: ObjectEnum


* `reward` (value: `"reward"`)





## Enum: TypeEnum


* `CAMPAIGN` (value: `"CAMPAIGN"`)

* `COIN` (value: `"COIN"`)

* `MATERIAL` (value: `"MATERIAL"`)




