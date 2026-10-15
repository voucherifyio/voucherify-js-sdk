# Voucherify.RewardPurchaseLimitsFrequency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Frequency limit type. &#x60;NO_LIMIT&#x60; - unlimited purchases. &#x60;LIMITED&#x60; - limited by the &#x60;limits&#x60; array. | [optional] 
**limits** | [**[RewardPurchaseLimitsFrequencyLimit]**](RewardPurchaseLimitsFrequencyLimit.md) | Frequency limit definitions. Empty array when &#x60;type&#x60; is &#x60;NO_LIMIT&#x60;; one entry when &#x60;type&#x60; is &#x60;LIMITED&#x60;. | [optional] 



## Enum: TypeEnum


* `NO_LIMIT` (value: `"NO_LIMIT"`)

* `LIMITED` (value: `"LIMITED"`)




