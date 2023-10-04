---
'@voucherify/sdk': major
---

Add support for 3 missing endpoints in loyalties api. Corrected a typo in one of loyalties api method.
- Added support for new endpoints: `/loyalties/{campaignId}/earning-rules/{earningRuleId}`, `/loyalties/{campaignId}/earning-rules/{earningRuleId}/enable` and `/loyalties/{campaignId}/earning-rules/{earningRuleId}/disable` [(examples available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- Corrected a typo in `*.loyalties.createEarningRule` method, new name: `*.loyalties.createEarningRules` as this endpoint requires array of earning rules objects.
- New exported types/interfaces: `LoyaltyProportionalOrder`, `LoyaltyProportionalOrderItems`, `LoyaltyProportionalCustomer`, `LoyaltyProportionalCustomEvent`, `LoyaltiesEarningRulesResponseCommon`, `LoyaltiesEarningRulesResponse`, `LoyaltiesEnableEarningRulesResponse`, `LoyaltiesDisableEarningRulesResponse`, `LoyaltiesUpdateEarningRuleResponse`, `LoyaltiesCreateEarningRuleResponse`
- **(BREAKING CHANGE)** Interface `LoyaltyProportional` was replaced with type of Union of interfaces `LoyaltyProportionalOrder | LoyaltyProportionalOrderItems | LoyaltyProportionalCustomer | LoyaltyProportionalCustomEven` [(example of usage)](..%2F..%2Fexamples%2Fsdk%2Fwith-nodejs-typescript%2Fserver-loyalties-get-earning-rule.ts)


 
