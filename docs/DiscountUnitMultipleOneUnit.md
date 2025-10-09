# Voucherify.DiscountUnitMultipleOneUnit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unitOff** | **Number** | Number of units to be granted a full value discount. | [optional] 
**unitOffFormula** | **String** | Formula used to dynamically calculate the number of units. | [optional] 
**effect** | **String** | Defines how the unit is added to the customer&#39;s order.   | [optional] 
**unitType** | **String** | The product deemed as free, chosen from product inventory (e.g. time, items). | [optional] 
**product** | [**SimpleProductDiscountUnit**](SimpleProductDiscountUnit.md) |  | [optional] 
**sku** | [**SimpleSkuDiscountUnit**](SimpleSkuDiscountUnit.md) |  | [optional] 



## Enum: EffectEnum


* `ADD_NEW_ITEMS` (value: `"ADD_NEW_ITEMS"`)

* `ADD_MISSING_ITEMS` (value: `"ADD_MISSING_ITEMS"`)




