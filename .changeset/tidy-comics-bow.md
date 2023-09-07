---
'@voucherify/sdk': major
---

#### New exported types/interfaces
- ResponseValidateVoucherTrue
  - DiscountUnitMultiple
  - DiscountUnitMultipleOneUnit
  - OrderObjectRedemptions
- ResponseValidateVoucherFalse

#### Interfaces changes
- `PromotionsCreate`
  - property: `promotion`
  - property: `tier`
    - value of `banner` is not required
- `ApplicableTo`
  - added optional: `product_id`, `product_source_id`, `quantity_limit`, `aggregated_quantity_limit`
- `CustomerRequest`
  - added optional: `birthdate`
- `ValidationsValidateVoucherParams`
  - property: `customer`
    - added optional: `address`, `phone`, `birthdate`
    - property: `order`
      - added optional: `status`, `customer`, `referrer`
    - property: `reward`
      - added optional: `number`

#### Breaking changes:
- Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`

#### Example of usage (related to breaking changes):
```js
const response = await client.validations.validateVoucher('test')

// First we must to narrow down response type by checking the `valid` value
// As the response type may be either ResponseValidateVoucherTrue or ResponseValidateVoucherFalse
if (response.valid) {
  // We have narrowed down the `ValidationsValidateVoucherResponse` type to `ResponseValidateVoucherTrue` so now we can access attributes specific for this type like `order`
  // import { ResponseValidateVoucherTrue } from '@voucherify/sdk';
  return { success: true, order: response.order }
}
// We have narrowed down the `ValidationsValidateVoucherResponse` type to `ResponseValidateVoucherFalse` so now we can access attributes specific for this type like `reason` or `error`
// import { ResponseValidateVoucherFalse } from '@voucherify/sdk';
return { success: false, reason: response.reason || response.error?.message || 'Unknown error' }
```
