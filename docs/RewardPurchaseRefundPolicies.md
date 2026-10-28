# Voucherify.RewardPurchaseRefundPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund** | **String** | Applies the refund override. &#x60;DEFAULT&#x60; follows the reward&#39;s refunds setting. &#x60;ALLOW&#x60; refunds even when the reward is not refundable. Defaults to &#x60;DEFAULT&#x60;. | [optional] 
**stock** | **String** | Controls assignment stock. &#x60;DEFAULT&#x60; restores one unit when stock is limited. &#x60;WRITE_OFF&#x60; does not restore stock. Unlimited (&#x60;null&#x60;) stock is unchanged. Defaults to &#x60;DEFAULT&#x60;. | [optional] 



## Enum: RefundEnum


* `DEFAULT` (value: `"DEFAULT"`)

* `ALLOW` (value: `"ALLOW"`)





## Enum: StockEnum


* `DEFAULT` (value: `"DEFAULT"`)

* `WRITE_OFF` (value: `"WRITE_OFF"`)




