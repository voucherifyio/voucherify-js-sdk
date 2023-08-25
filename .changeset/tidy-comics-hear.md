---
'@voucherify/sdk': major
---

To run tests you need to copy packages/sdk/.env.example to packages/sdk/.env and fill the file with your credentials.
Tests uses REAL calls to Voucherify. You may reach the limit of your account if you are using sandbox account.

**Scripts changes:**
- npm run test (build sdk and run tests)
- npm run test:without-build (run tests)

**Breaking changes:**
- Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`
- Required version of node was changed from `14.15` to `16.x`.

**Example of usage (related to breaking changes):**
```js
const validation = await client.validations.validateVoucher('test')
//You must to check `valid` first!
if(validation.valid){
  return { success: true, order: validation.order }
}else{
  return { success: false, reason: validation.reason || validation.error?.message || 'Unknown error' }
}
```

