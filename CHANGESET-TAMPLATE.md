## This is an example of changeset

**Interfaces changes**
- `PromotionsCreate`
  - property: `promotion`
  - property: `tier`
    - value of `banner` is not required
- `ApplicableTo`
  - added optional: `product_id`, `product_source_id`, `quantity_limit`, `aggregated_quantity_limit`
- `CustomerRequest`
  - added required: `birthdate`
- `ValidationsValidateVoucherParams`
  - property: `customer`
    - added optional: `address`, `phone`, `birthdate`
    - property: `order`
      - values of `banner`, `work`, `home` are not required
    - property: `reward`
      - added optional: `number`

#### Added support for following endpoints:
- products
  - POST /skus/importCSV
    - method: `client.products.importSkusUsingCSV(filePath)`
  - POST /skus/importCSV
    - method: `client.products.importSkusUsingCSV(filePath)`

#### Example of usage:
```js
await client.customers.importCustomersUsingCSV(__dirname + '/csv/customers.csv')
```
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

#### Dependencies:
`Axios` version was updated from `0.21.4` to `0.27.2`.
Added `"dotenv": "16.3.1"` to `devDependencies`.
