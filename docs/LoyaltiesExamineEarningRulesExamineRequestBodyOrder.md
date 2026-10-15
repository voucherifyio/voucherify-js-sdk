# Voucherify.LoyaltiesExamineEarningRulesExamineRequestBodyOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Order amount after discounts - a non-negative integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**initialAmount** | **Number** | Order amount before discounts - a non-negative integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**discountAmount** | **Number** | Total discount amount - a non-negative integer. May be provided as a string or a number. Can be &#x60;null&#x60;. | [optional] 
**items** | [**[LoyaltiesExamineEarningRulesExamineRequestBodyOrderItem]**](LoyaltiesExamineEarningRulesExamineRequestBodyOrderItem.md) | Order line items (up to 500). Can be &#x60;null&#x60;. | [optional] 
**metadata** | **{String: Object}** | Arbitrary key-value metadata; any JSON object is accepted. | [optional] 


