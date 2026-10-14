# Voucherify.EarningRuleEffectPointsProportional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculationType** | **String** | How the proportional points are calculated. | [optional] 
**cardDefinitionId** | **String** | Card definition ID (&#x60;lcdef_...&#x60;) the points are awarded to. | [optional] 
**pointsExpiration** | [**EarningRuleEffectPointsExpiration**](EarningRuleEffectPointsExpiration.md) |  | [optional] 
**order** | [**EarningRulePointsProportionalOrder**](EarningRulePointsProportionalOrder.md) |  | [optional] 
**customer** | [**EarningRulePointsProportionalCustomer**](EarningRulePointsProportionalCustomer.md) |  | [optional] 
**customEvent** | [**EarningRulePointsProportionalCustomEvent**](EarningRulePointsProportionalCustomEvent.md) |  | [optional] 
**orderItems** | [**EarningRulePointsProportionalOrderItems**](EarningRulePointsProportionalOrderItems.md) |  | [optional] 



## Enum: CalculationTypeEnum


* `PRE_DISCOUNT_ORDER_AMOUNT` (value: `"PRE_DISCOUNT_ORDER_AMOUNT"`)

* `POST_DISCOUNT_ORDER_AMOUNT` (value: `"POST_DISCOUNT_ORDER_AMOUNT"`)

* `PRE_DISCOUNT_ORDER_ITEMS_AMOUNT` (value: `"PRE_DISCOUNT_ORDER_ITEMS_AMOUNT"`)

* `POST_DISCOUNT_ORDER_ITEMS_AMOUNT` (value: `"POST_DISCOUNT_ORDER_ITEMS_AMOUNT"`)

* `ORDER_ITEMS_QUANTITY` (value: `"ORDER_ITEMS_QUANTITY"`)

* `ORDER_METADATA_VALUE` (value: `"ORDER_METADATA_VALUE"`)

* `CUSTOMER_METADATA_VALUE` (value: `"CUSTOMER_METADATA_VALUE"`)

* `CUSTOM_EVENT_METADATA_VALUE` (value: `"CUSTOM_EVENT_METADATA_VALUE"`)




