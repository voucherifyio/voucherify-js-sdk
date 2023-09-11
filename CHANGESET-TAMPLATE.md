[//]: # (This is an example of changeset)

#### Add missing methods covering Qualification API.
  - Added support for new endpoints: `/skus/importCSV` and `/categories`
```js
await client.customers.importCustomersUsingCSV(__dirname + '/csv/customers.csv')
await client.categories.list()
await client.categories.create(createCategory)
```
  - Added missing types in `PromotionsCreate`, `ApplicableTo`, `CustomerRequest`, `ValidationsValidateVoucherParams`
  - Update axios from `0.21.4` to `0.27.2` in SDK package
  - **(BREAKING CHANGE)** Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`
```js
const response = await client.validations.validateVoucher('test')

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
