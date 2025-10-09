# Voucherify.ManagementProjectsStackingRulesGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the stacking rules. | [optional] 
**exclusiveCategories** | **[String]** | Lists the IDs of exclusive categories. A redeemable from a campaign with an exclusive category is the only redeemable to be redeemed when applied with redeemables from other campaigns unless these campaigns are exclusive or joint. | [optional] 
**jointCategories** | **[String]** | Lists the IDs of the joint categories. A campaign with a joint category is always applied regardless of the exclusivity of other campaigns. | [optional] 
**redeemablesLimit** | **Number** | Defines how many redeemables can be sent in one request. Note: more redeemables means more processing time. | [optional] 
**applicableRedeemablesLimit** | **Number** | Defines how many redeemables can be applied in one request. The number must be less than or equal to &#x60;redeemables_limit&#x60;. For example, a user can select 30 discounts but only 5 will be applied to the order and the remaining will be &#x60;SKIPPED&#x60; according to the &#x60;redeemables_sorting_rule&#x60;. | [optional] 
**applicableRedeemablesPerCategoryLimit** | **Number** | Defines how many redeemables with the same category can be applied in one request. The number must be less than or equal to &#x60;applicable_redeemables_limit&#x60;. The ones above the limit will be &#x60;SKIPPED&#x60; according to the &#x60;redeemables_sorting_rule&#x60;. | [optional] 
**applicableRedeemablesCategoryLimits** | **{String: Number}** | Lists categories by category IDs (keys) and defines their limits (values) of applicable redeemables that belong to campaigns with that category. | [optional] 
**applicableExclusiveRedeemablesLimit** | **Number** | Defines how many redeemables with an assigned exclusive category can be applied in one request. The ones above the limit will be &#x60;SKIPPED&#x60; according to the &#x60;redeemables_sorting_rule&#x60;. | [optional] 
**applicableExclusiveRedeemablesPerCategoryLimit** | **Number** | Defines how many redeemables with an assigned exclusive category can be applied in one request. The ones above the limit will be &#x60;SKIPPED&#x60; according to the &#x60;redeemables_sorting_rule&#x60;. The number must be less than or equal to &#x60;applicable_exclusive_redeemables_limit&#x60;. | [optional] 
**discountCalculationMode** | **String** | Defines if the discounts are applied by taking into account the initial order amount or the discounted order amount. | [optional] 
**initialAmountModeCategories** | **[String]** | Lists the IDs of the categories that apply a discount based on the initial amount. | [optional] 
**discountedAmountModeCategories** | **[String]** | Lists the IDs of the categories that apply a discount based on the discounted amount. | [optional] 
**redeemablesApplicationMode** | **String** | Defines the application mode for redeemables. &#x60;\&quot;ALL\&quot;&#x60; means that all redeemables must be validated for the redemption to be successful. &#x60;\&quot;PARTIAL\&quot;&#x60; means that only those redeemables that can be validated will be redeemed. The redeemables that fail validaton will be skipped. | [optional] 
**redeemablesSortingRule** | **String** | Defines redeemables sorting rule. &#x60;CATEGORY_HIERARCHY&#x60; means that redeemables are applied oaccording to the category priority. &#x60;REQUESTED_ORDER&#x60; means that redeemables are applied in the sequence provided in the request. | [optional] 
**redeemablesProductsApplicationMode** | **String** | Defines redeemables products application mode. &#x60;STACK&#x60; means that multiple discounts can be applied to a product. &#x60;ONCE&#x60; means that only one discount can be applied to the same product. | [optional] 
**redeemablesNoEffectRule** | **String** | Defines redeemables no effect rule. &#x60;REDEEM_ANYWAY&#x60; means that the redeemable will be redeemed regardless of any restrictions or conditions in place. &#x60;SKIP&#x60; means that the redeemable will be processed only when an applicable effect is calculated. | [optional] 
**noEffectSkipCategories** | **[String]** | Lists category IDs. Redeemables with a given category are skipped even if the &#x60;redeemables_no_effect_rule&#x60; is set to &#x60;REDEEM_ANYWAY&#x60;. Category IDs can&#39;t overlap with the IDs in &#x60;no_effect_redeem_anyway_categories&#x60;. | [optional] 
**noEffectRedeemAnywayCategories** | **[String]** | Lists category IDs. Redeemables with a given category are redeemed anyway even if the &#x60;redeemables_no_effect_rule&#x60; is set to &#x60;SKIP&#x60;. Category IDs can&#39;t overlap with the IDs in &#x60;no_effect_skip_categories&#x60;. | [optional] 
**redeemablesRollbackOrderMode** | **String** | Defines the rollback mode for the order. &#x60;WITH_ORDER&#x60; is a default setting. The redemption is rolled back together with the data about the order, including related discount values. &#x60;WITHOUT_ORDER&#x60; allows rolling the redemption back without affecting order data, including the applied discount values. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the stacking rules were created. The value for this parameter is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the stacking rules were updated. The value for this parameter is shown in the ISO 8601 format. | [optional] 



## Enum: DiscountCalculationModeEnum


* `INITIAL_AMOUNT` (value: `"INITIAL_AMOUNT"`)

* `DISCOUNTED_AMOUNT` (value: `"DISCOUNTED_AMOUNT"`)





## Enum: RedeemablesApplicationModeEnum


* `ALL` (value: `"ALL"`)

* `PARTIAL` (value: `"PARTIAL"`)





## Enum: RedeemablesSortingRuleEnum


* `CATEGORY_HIERARCHY` (value: `"CATEGORY_HIERARCHY"`)

* `REQUESTED_ORDER` (value: `"REQUESTED_ORDER"`)





## Enum: RedeemablesProductsApplicationModeEnum


* `STACK` (value: `"STACK"`)

* `ONCE` (value: `"ONCE"`)





## Enum: RedeemablesNoEffectRuleEnum


* `REDEEM_ANYWAY` (value: `"REDEEM_ANYWAY"`)

* `SKIP` (value: `"SKIP"`)





## Enum: RedeemablesRollbackOrderModeEnum


* `WITH_ORDER` (value: `"WITH_ORDER"`)

* `WITHOUT_ORDER` (value: `"WITHOUT_ORDER"`)




