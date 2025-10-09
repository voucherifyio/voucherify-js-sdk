# Voucherify.RedemptionsRedeemResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redemptions** | [**[Redemption]**](Redemption.md) |  | [optional] 
**parentRedemption** | [**Redemption**](Redemption.md) |  | [optional] 
**order** | [**RedemptionsRedeemResponseBodyOrder**](RedemptionsRedeemResponseBodyOrder.md) |  | [optional] 
**inapplicableRedeemables** | [**[ValidationsRedeemableInapplicable]**](ValidationsRedeemableInapplicable.md) | Lists validation results of each inapplicable redeemable. | [optional] 
**skippedRedeemables** | [**[ValidationsRedeemableSkipped]**](ValidationsRedeemableSkipped.md) | Lists validation results of each redeemable. If a redeemable can be applied, the API returns &#x60;\&quot;status\&quot;: \&quot;APPLICABLE\&quot;&#x60;. | [optional] 


