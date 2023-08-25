---
'@voucherify/sdk': major
---

To run tests you need to copy packages/sdk/.env.example to packages/sdk/.env and fill the file with your credentials.
Tests uses REAL calls to Voucherify. You may reach the limit of your account if you are using sandbox account.

**New exported types/interfaces**
- ResponseValidateVoucherTrue
  - DiscountUnitMultiple
  - DiscountUnitMultipleOneUnit
  - OrderObjectRedemptions
- ResponseValidateVoucherFalse

**Scripts changes:**
- npm run build-and-test (build sdk and run tests)

**Workflow changes**
- Required version of node in `package.json` was changed from `14.15` to `16.x`. - This is not related to SDK usage, but rather to further contribution to the SDK. SDK 

**Breaking changes:**
- Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`

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

