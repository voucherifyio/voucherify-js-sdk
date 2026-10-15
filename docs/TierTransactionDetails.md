# Voucherify.TierTransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | Qualifying points at the time of evaluation. Returns the point balance or the points earned in the tracking period, depending on the tier structure. &#x60;null&#x60; when points were not calculated. | [optional] 
**tierFrom** | **String** | Unique identifier of the tier the member moved from (format &#x60;lt_...&#x60;). &#x60;null&#x60; when there is no source tier, including &#x60;JOINED&#x60;, &#x60;EXPIRATION_CHANGED&#x60;, and &#x60;EVALUATION_REFRESHED&#x60; transactions. | [optional] 
**tierTo** | **String** | Unique identifier of the tier the member moved to (format &#x60;lt_...&#x60;). &#x60;null&#x60; when there is no destination tier, including &#x60;LEFT&#x60;, &#x60;EXPIRATION_CHANGED&#x60;, and &#x60;EVALUATION_REFRESHED&#x60; transactions. | [optional] 
**origin** | [**TierTransactionOrigin**](TierTransactionOrigin.md) |  | [optional] 
**rejection** | [**TierTransactionRejection**](TierTransactionRejection.md) |  | [optional] 
**startAt** | **Date** | Start of the tier membership period, or &#x60;null&#x60;. | [optional] 
**expiresAt** | **Date** | Expiration of the tier membership period, or &#x60;null&#x60;. | [optional] 


