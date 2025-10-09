# Voucherify.LoyaltiesEarningRulesEnableResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Assigned by the Voucherify API, identifies the earning rule object. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the earning rule was created. The value is shown in the ISO 8601 format. | [optional] 
**loyalty** | [**LoyaltiesEarningRulesEnableResponseBodyLoyalty**](LoyaltiesEarningRulesEnableResponseBodyLoyalty.md) |  | [optional] 
**event** | **String** |  | [optional] 
**customEvent** | [**LoyaltiesEarningRulesEnableResponseBodyCustomEvent**](LoyaltiesEarningRulesEnableResponseBodyCustomEvent.md) |  | [optional] 
**segment** | [**LoyaltiesEarningRulesEnableResponseBodySegment**](LoyaltiesEarningRulesEnableResponseBodySegment.md) |  | [optional] 
**loyaltyTier** | [**LoyaltiesEarningRulesEnableResponseBodyLoyaltyTier**](LoyaltiesEarningRulesEnableResponseBodyLoyaltyTier.md) |  | [optional] 
**pendingPoints** | [**LoyaltiesEarningRulesEnableResponseBodyPendingPoints**](LoyaltiesEarningRulesEnableResponseBodyPendingPoints.md) |  | [optional] 
**source** | [**LoyaltiesEarningRulesEnableResponseBodySource**](LoyaltiesEarningRulesEnableResponseBodySource.md) |  | [optional] 
**object** | **String** | The type of the object represented by JSON. Default is earning_rule. | [optional] [default to &#39;earning_rule&#39;]
**automationId** | **String** | For internal use by Voucherify. | [optional] 
**startDate** | **String** | Start date defines when the earning rule starts to be active. Activation timestamp is presented in the ISO 8601 format. The earning rule is inactive before this date. If you do not define the start date for an earning rule, it will inherit the campaign start date by default. | [optional] 
**expirationDate** | **String** | Expiration date defines when the earning rule expires. Expiration timestamp is presented in the ISO 8601 format. The earning rule is inactive after this date. If you do not define the expiration date for an earning rule, it will inherit the campaign expiration date by default. | [optional] 
**validityTimeframe** | [**ValidityTimeframe**](ValidityTimeframe.md) |  | [optional] 
**validityDayOfWeek** | **[Number]** | Integer array corresponding to the particular days of the week in which the voucher is valid.  - &#x60;0&#x60; Sunday - &#x60;1&#x60; Monday - &#x60;2&#x60; Tuesday - &#x60;3&#x60; Wednesday - &#x60;4&#x60; Thursday - &#x60;5&#x60; Friday - &#x60;6&#x60; Saturday | [optional] 
**validityHours** | [**ValidityHours**](ValidityHours.md) |  | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the earning rule. A set of key/value pairs that you can attach to an earning rule object. It can be useful for storing additional information about the earning rule in a structured format. | [optional] 
**expirationRules** | [**EarningRuleExpirationRules**](EarningRuleExpirationRules.md) |  | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the earning rule was last updated in ISO 8601 format. | [optional] 
**active** | **Boolean** | A flag to toggle the earning rule on or off. You can disable an earning rule even though it&#39;s within the active period defined by the start_date and expiration_date of the campaign or the earning rule&#39;s own start_date and expiration_date. | [optional] [default to true]



## Enum: ObjectEnum


* `earning_rule` (value: `"earning_rule"`)





## Enum: [ValidityDayOfWeekEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)




