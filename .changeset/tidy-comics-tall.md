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

**Scripts changes:**
- npm run build-and-test (build sdk and run tests)

**Workflow changes**
- Required version of node in `package.json` was changed from `14.15` to `16.x`. - This is not related to SDK usage, but rather to further contribution to the SDK. SDK

**Breaking changes:**
- Interface `LoyaltyProportional` was replaced with type of Union of interfaces `LoyaltyProportionalOrder | LoyaltyProportionalOrderItems | LoyaltyProportionalCustomer | LoyaltyProportionalCustomEvent`

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


