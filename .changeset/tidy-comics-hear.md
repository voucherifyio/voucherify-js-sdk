---
'@voucherify/sdk': minor
---

**New exported types/interfaces**
- ResponseValidateVoucherTrue
    - DiscountUnitMultiple
    - DiscountUnitMultipleOneUnit
    - OrderObjectRedemptions
- ResponseValidateVoucherFalse

**Interfaces changes**
- `PromotionsCreate`
    - property: `promotion`
        - property: `tier`
            - changed:
                - value of `banner` is not required
- `ApplicableTo`
    - added:
        - product_id?: string
        - product_source_id?: string
        - quantity_limit?: number
        - aggregated_quantity_limit?: number
- `CustomerRequest`
    - added:
        - birthdate?: string
- `ValidationsValidateVoucherParams`
    - property: `customer`
        - added:
            - address
            - phone
            - birthdate
    - property: `order`
        - added:
            - status?: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
            - customer?: CustomerRequest
            - referrer?: CustomerRequest
    - property: `reward`
        - added
            - points?: number

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
