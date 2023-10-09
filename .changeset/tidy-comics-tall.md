---
'@voucherify/sdk': minor
---

Add support for 3 missing endpoints in loyalties api. Corrected a typo in one of loyalties api method.
- Added support for new endpoints: `GET /loyalties/{campaignId}/earning-rules/{earningRuleId}`, `POST /loyalties/{campaignId}/earning-rules/{earningRuleId}/enable` and `POST /loyalties/{campaignId}/earning-rules/{earningRuleId}/disable` [(examples available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces: `LoyaltiesGetEarningRuleResponseBody`, `LoyaltiesEnableEarningRulesResponseBody`, `LoyaltiesDisableEarningRulesResponseBody`, `EarningRuleEvent`, `EarningRuleBase`, `EarningRuleLoyaltyFixed`, `EarningRuleLoyaltyProportionalOrder`, `EarningRuleLoyaltyProportionalOrderAmount`, `EarningRuleLoyaltyProportionalOrderTotalAmount`, `EarningRuleLoyaltyProportionalOrderMetadata`, `EarningRuleLoyaltyProportionalOrderItems`, `EarningRuleLoyaltyProportionalOrderItemsQuantity`, `EarningRuleLoyaltyProportionalOrderItemsAmount`, `EarningRuleLoyaltyProportionalOrderItemsSubtotalAmount`, `EarningRuleLoyaltyProportionalCustomerMetadata`, `EarningRuleLoyaltyProportionalCustomEvent`, `EarningRuleLoyaltyProportional`
- Added optional parameter `calculation_type` to `LoyaltyProportional`
