# Voucherify.SimpleRedemptionRewardResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**SimpleCustomer**](SimpleCustomer.md) |  | [optional] 
**assignmentId** | **String** | Unique reward assignment ID assigned by Voucherify. | [optional] 
**voucher** | [**SimpleVoucher**](SimpleVoucher.md) |  | [optional] 
**product** | [**SimpleProduct**](SimpleProduct.md) |  | [optional] 
**sku** | [**SimpleSku**](SimpleSku.md) |  | [optional] 
**loyaltyTierId** | **String** | Unique loyalty tier ID assigned by Voucherify. | [optional] 
**id** | **String** | Unique reward ID, assigned by Voucherify. | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the reward. | [optional] [default to &#39;reward&#39;]
**name** | **String** | Reward name. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the reward was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the reward was updated. The value is shown in the ISO 8601 format. | [optional] 
**parameters** | [**RewardType**](RewardType.md) |  | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a reward. The metadata object stores all custom attributes assigned to the reward. | [optional] 
**type** | **String** | Reward type. | [optional] 



## Enum: ObjectEnum


* `reward` (value: `"reward"`)





## Enum: TypeEnum


* `CAMPAIGN` (value: `"CAMPAIGN"`)

* `COIN` (value: `"COIN"`)

* `MATERIAL` (value: `"MATERIAL"`)




