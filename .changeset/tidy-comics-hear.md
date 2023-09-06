---
'@voucherify/sdk': major
---

**New exported types/interfaces**
- ResponseValidateVoucherTrue
  - DiscountUnitMultiple
  - DiscountUnitMultipleOneUnit
  - OrderObjectRedemptions
- ResponseValidateVoucherFalse

**Breaking changes:**
- Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`

**Example of usage (related to breaking changes):**
```js
const validation = await client.validations.validateVoucher('test')

// First we must to narrow down response type by checking the `valid` value
// As the response type may be either ResponseValidateVoucherTrue or ResponseValidateVoucherFalse
if (response.valid) {
  // We have narrowed down the `ValidationsValidateVoucherResponse` type to `ResponseValidateVoucherTrue` so now we can access attributes specific for this type like `order`
  // import { ResponseValidateVoucherTrue } from '@voucherify/sdk';
  return { success: true, order: validation.order }
}
// We have narrowed down the `ValidationsValidateVoucherResponse` type to `ResponseValidateVoucherFalse` so now we can access attributes specific for this type like `reason` or `error`
// import { ResponseValidateVoucherFalse } from '@voucherify/sdk';
return { success: false, reason: validation.reason || validation.error?.message || 'Unknown error' }
```

#### FOR DEVELOPERS WORKING ON SDK IMPROVEMENTS:

**SDK Scripts changes (available from packages/sdk folder):**
- npm run build-and-test (build sdk and run tests)

In order to run tests you need to copy packages/sdk/.env.example to packages/sdk/.env and fill the file with your credentials.
Tests uses REAL calls to Voucherify. You may reach the limit of your account if you are using sandbox account.****

**Workflow changes**
- Required version of node in `package.json` was changed from `14.15` to `16.x`. - This is not related to SDK usage, but rather to further contribution to the SDK. SDK 
