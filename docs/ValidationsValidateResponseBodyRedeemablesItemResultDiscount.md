# Voucherify.ValidationsValidateResponseBodyRedeemablesItemResultDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**amountOff** | **Number** | Amount taken off the subtotal of a price. Value is multiplied by 100 to precisely represent 2 decimal places. For example, a $10 discount is written as 1000. | [optional] 
**amountOffFormula** | **String** | Formula used to dynamically calculate the discount. | [optional] 
**aggregatedAmountLimit** | **Number** | Maximum discount amount per order. | [optional] 
**effect** | **String** |  | [optional] 
**isDynamic** | **Boolean** | Flag indicating whether the discount was calculated using a formula. | [optional] 
**unitOff** | **Number** | Number of units to be granted a full value discount. | [optional] 
**unitOffFormula** | **String** | Formula used to dynamically calculate the number of units. | [optional] 
**unitType** | **String** | The product deemed as free, chosen from product inventory (e.g. time, items). | [optional] 
**product** | [**ValidationsValidateResponseBodyRedeemablesItemResultDiscountProduct**](ValidationsValidateResponseBodyRedeemablesItemResultDiscountProduct.md) |  | [optional] 
**sku** | [**SimpleSkuDiscountUnit**](SimpleSkuDiscountUnit.md) |  | [optional] 
**units** | [**[DiscountUnitMultipleOneUnit]**](DiscountUnitMultipleOneUnit.md) |  | [optional] 
**percentOff** | **Number** | The percent discount that the customer will receive. | [optional] 
**percentOffFormula** | **String** | Formula used to dynamically calculate the discount. | [optional] 
**amountLimit** | **Number** | Upper limit allowed to be applied as a discount. Value is multiplied by 100 to precisely represent 2 decimal places. For example, a $6 maximum discount is written as 600. | [optional] 
**fixedAmount** | **Number** | Sets a fixed value for an order total or the item price. The value is multiplied by 100 to precisely represent 2 decimal places. For example, a $10 discount is written as 1000. If the fixed amount is calculated by the formula, i.e. the &#x60;fixed_amount_formula&#x60; parameter is present in the fixed amount definition, this value becomes the **fallback value**. As a result, if the formula cannot be calculated due to missing metadata, for example, this value will be used as the fixed value. | [optional] 
**fixedAmountFormula** | **String** | Formula used to dynamically calculate the discount. | [optional] 



## Enum: TypeEnum


* `AMOUNT` (value: `"AMOUNT"`)

* `UNIT` (value: `"UNIT"`)

* `PERCENT` (value: `"PERCENT"`)

* `FIXED` (value: `"FIXED"`)





## Enum: EffectEnum


* `APPLY_TO_ORDER` (value: `"APPLY_TO_ORDER"`)

* `APPLY_TO_ITEMS` (value: `"APPLY_TO_ITEMS"`)

* `APPLY_TO_ITEMS_PROPORTIONALLY` (value: `"APPLY_TO_ITEMS_PROPORTIONALLY"`)

* `APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY` (value: `"APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY"`)

* `APPLY_TO_ITEMS_BY_QUANTITY` (value: `"APPLY_TO_ITEMS_BY_QUANTITY"`)

* `ADD_MISSING_ITEMS` (value: `"ADD_MISSING_ITEMS"`)

* `ADD_NEW_ITEMS` (value: `"ADD_NEW_ITEMS"`)

* `ADD_MANY_ITEMS` (value: `"ADD_MANY_ITEMS"`)




