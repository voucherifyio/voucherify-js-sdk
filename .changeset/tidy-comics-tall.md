---
'@voucherify/sdk': major
---

**New exported types/interfaces**
- LoyaltyProportionalOrder
- LoyaltyProportionalOrderItems
- LoyaltyProportionalCustomer
- LoyaltyProportionalCustomEvent
- LoyaltiesEarningRulesResponseCommon
- LoyaltiesEarningRulesResponse
- LoyaltiesEnableEarningRulesResponse
- LoyaltiesDisableEarningRulesResponse
- LoyaltiesUpdateEarningRuleResponse
- LoyaltiesCreateEarningRuleResponse

**Breaking changes:**
- Interface `LoyaltyProportional` was replaced with type of Union of interfaces `LoyaltyProportionalOrder | LoyaltyProportionalOrderItems | LoyaltyProportionalCustomer | LoyaltyProportionalCustomEvent`
- Method name `client.loyalties.createEarningRule` has changed to `client.loyalties.createEarningRules` - notice `s` as this method requires array of earning rules.

**Example of usage (related to breaking changes):**
```js
const validation = await client.validations.validateVoucher('test')
//First we must to narrow down response type by checking the valid value
//As the response type may be either ResponseValidateVoucherTrue or ResponseValidateVoucherFalse
if (response.valid) {
  //ResponseValidateVoucherTrue
  return { success: true, order: validation.order }
}
//ResponseValidateVoucherFalse
return { success: false, reason: validation.reason || validation.error?.message || 'Unknown error' }
```


