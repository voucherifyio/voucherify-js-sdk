# Voucherify.OrderPaymentTransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Human-readable reason: \&quot;Points spent on order payment\&quot;. | [optional] 
**rejection** | [**OrderPaymentRejection**](OrderPaymentRejection.md) |  | [optional] 
**metadata** | **Object** | Transaction metadata. For pay-with-points transactions this contains the flattened payment limits used for the calculation: &#x60;amount_limit&#x60; for the &#x60;AMOUNT_LIMIT&#x60; type and/or &#x60;points_limit&#x60; for the &#x60;POINTS_LIMIT&#x60; type. Empty object when the default &#x60;CARD_BALANCE&#x60; limit was used or when not set. | [optional] 
**payment** | [**OrderPaymentPaymentDetails**](OrderPaymentPaymentDetails.md) |  | [optional] 
**spendingCap** | [**OrderPaymentTransactionDetailsSpendingCap**](OrderPaymentTransactionDetailsSpendingCap.md) |  | [optional] 


