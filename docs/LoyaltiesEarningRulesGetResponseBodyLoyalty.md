# Voucherify.LoyaltiesEarningRulesGetResponseBodyLoyalty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**points** | **Number** | Defines how the points will be added to the loyalty card. FIXED adds a fixed number of points. | [optional] 
**pointsFormula** | **String** | Formula used to dynamically calculate the rewarded points. | [optional] 
**calculationType** | **String** |  | [optional] 
**order** | [**LoyaltiesEarningRulesGetResponseBodyLoyaltyOrder**](LoyaltiesEarningRulesGetResponseBodyLoyaltyOrder.md) |  | [optional] 
**orderItems** | [**LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItems**](LoyaltiesEarningRulesGetResponseBodyLoyaltyOrderItems.md) |  | [optional] 
**customer** | [**LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomer**](LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomer.md) |  | [optional] 
**customEvent** | [**LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomEvent**](LoyaltiesEarningRulesGetResponseBodyLoyaltyCustomEvent.md) |  | [optional] 



## Enum: TypeEnum


* `FIXED` (value: `"FIXED"`)

* `PROPORTIONAL` (value: `"PROPORTIONAL"`)





## Enum: CalculationTypeEnum


* `ORDER_AMOUNT` (value: `"ORDER_AMOUNT"`)

* `ORDER_TOTAL_AMOUNT` (value: `"ORDER_TOTAL_AMOUNT"`)

* `ORDER_METADATA` (value: `"ORDER_METADATA"`)

* `ORDER_ITEMS_QUANTITY` (value: `"ORDER_ITEMS_QUANTITY"`)

* `ORDER_ITEMS_AMOUNT` (value: `"ORDER_ITEMS_AMOUNT"`)

* `ORDER_ITEMS_SUBTOTAL_AMOUNT` (value: `"ORDER_ITEMS_SUBTOTAL_AMOUNT"`)

* `CUSTOMER_METADATA` (value: `"CUSTOMER_METADATA"`)

* `CUSTOM_EVENT_METADATA` (value: `"CUSTOM_EVENT_METADATA"`)




