# Voucherify.RedemptionRewardResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**SimpleCustomer**](SimpleCustomer.md) |  | [optional] 
**assignmentId** | **String** | Unique reward assignment ID assigned by Voucherify. | [optional] 
**voucher** | [**Voucher**](Voucher.md) |  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**loyaltyTierId** | **String** | Unique loyalty tier ID assigned by Voucherify. | [optional] 
**id** | **String** | Unique reward ID. | [optional] 
**name** | **String** | Name of the reward. | [optional] 
**object** | **String** | The type of the object represented by the JSON | [optional] [default to &#39;reward&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the redemption was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp in ISO 8601 format indicating when the reward was updated. | [optional] 
**parameters** | [**RedemptionRewardResultParameters**](RedemptionRewardResultParameters.md) |  | [optional] 
**metadata** | **Object** | A set of custom key/value pairs that you can attach to a reward. The metadata object stores all custom attributes assigned to the reward. | [optional] 
**type** | **String** | Reward type. | [optional] 



## Enum: ObjectEnum


* `reward` (value: `"reward"`)





## Enum: TypeEnum


* `CAMPAIGN` (value: `"CAMPAIGN"`)

* `COIN` (value: `"COIN"`)

* `MATERIAL` (value: `"MATERIAL"`)




