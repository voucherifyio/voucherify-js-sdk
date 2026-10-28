# Voucherify.V2LoyaltiesBenefitsGetResponseBodyPointsProportional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculationType** | **String** | How the points are calculated: - &#x60;PRE_DISCOUNT_ORDER_AMOUNT&#x60; - points per every specified order amount before discounts (requires &#x60;order.amount&#x60;) - &#x60;POST_DISCOUNT_ORDER_AMOUNT&#x60; - points per every specified order amount after discounts (requires &#x60;order.total_amount&#x60;) - &#x60;PRE_DISCOUNT_ORDER_ITEMS_AMOUNT&#x60; - points per every specified amount spent on selected products before discounts (requires &#x60;order_items.amount&#x60;) - &#x60;POST_DISCOUNT_ORDER_ITEMS_AMOUNT&#x60; - points per every specified amount spent on selected products after discounts (requires &#x60;order_items.subtotal_amount&#x60;) - &#x60;ORDER_ITEMS_QUANTITY&#x60; - points per every specified quantity of selected products, excluding free items (requires &#x60;order_items.quantity&#x60;) - &#x60;ORDER_METADATA_VALUE&#x60; - points per every specified value in the order metadata (requires &#x60;order.metadata&#x60;) - &#x60;CUSTOMER_METADATA_VALUE&#x60; - points per every specified value in the customer metadata (requires &#x60;customer.metadata&#x60;) - &#x60;CUSTOM_EVENT_METADATA_VALUE&#x60; - points per every specified value in the custom event metadata (requires &#x60;custom_event.metadata&#x60;) | [optional] 
**cardDefinitionId** | **String** | ID of the card definition whose cards receive the points. The card definition must exist and be ACTIVE. | [optional] 
**order** | [**BenefitPointsProportionalOrder**](BenefitPointsProportionalOrder.md) |  | [optional] 
**customer** | [**BenefitPointsProportionalCustomer**](BenefitPointsProportionalCustomer.md) |  | [optional] 
**customEvent** | [**BenefitPointsProportionalCustomEvent**](BenefitPointsProportionalCustomEvent.md) |  | [optional] 
**orderItems** | [**BenefitPointsProportionalOrderItems**](BenefitPointsProportionalOrderItems.md) |  | [optional] 



## Enum: CalculationTypeEnum


* `PRE_DISCOUNT_ORDER_AMOUNT` (value: `"PRE_DISCOUNT_ORDER_AMOUNT"`)

* `POST_DISCOUNT_ORDER_AMOUNT` (value: `"POST_DISCOUNT_ORDER_AMOUNT"`)

* `PRE_DISCOUNT_ORDER_ITEMS_AMOUNT` (value: `"PRE_DISCOUNT_ORDER_ITEMS_AMOUNT"`)

* `POST_DISCOUNT_ORDER_ITEMS_AMOUNT` (value: `"POST_DISCOUNT_ORDER_ITEMS_AMOUNT"`)

* `ORDER_ITEMS_QUANTITY` (value: `"ORDER_ITEMS_QUANTITY"`)

* `ORDER_METADATA_VALUE` (value: `"ORDER_METADATA_VALUE"`)

* `CUSTOMER_METADATA_VALUE` (value: `"CUSTOMER_METADATA_VALUE"`)

* `CUSTOM_EVENT_METADATA_VALUE` (value: `"CUSTOM_EVENT_METADATA_VALUE"`)




