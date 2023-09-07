---
'@voucherify/sdk': major
---

**New exported types/interfaces**
- CreateExportResource
- ExportResourceResponseCommon
- ExportResourceResponse
- ExportsCreateResponseCommon
- ExportsCreateResponse
- ExportsCreateVoucher
- ExportsCreateResponseVoucher
- ExportsCreateVoucherParameters
- FieldConditions
- ExportVoucherFilters
- ExportsCreateRedemption
- ExportsCreateResponseRedemption
- ExportsCreateRedemptionParameters
- ExportRedemptionFilters
- ExportsCreateCustomer
- ExportsCreateResponseCustomer
- ExportsCreateCustomerParameters
- ExportCustomerFilters
- ExportsCreatePublication
- ExportsCreateResponsePublication
- ExportsCreatePublicationParameters
- ExportPublicationFilters
- ExportsCreateOrder
- ExportsCreateResponseOrder
- ExportsCreateOrderParameters
- ExportOrderFilters
- ExportsCreatePointsExpiration
- ExportsCreateResponsePointsExpiration
- ExportsCreatePointsExpirationParameters
- ExportPointsExpirationFilters
- ExportsCreateVoucherTransactionsExpiration
- ExportsCreateResponseVoucherTransactionsExpiration
- ExportsCreateVoucherTransactionsExpirationParameters
- ExportVoucherTransactionsFilters
- ExportsGetResponse
- ListExportQuery
- ListExports
- Junction
- FiltersCondition
- ExportCustomerFields
- ExportCustomerOrder
- ExportPublicationFields
- ExportPublicationOrder
- ExportRedemptionFields
- ExportRedemptionOrder
- ExportVoucherFields
- ExportVoucherOrder
- ExportOrderFields
- ExportOrderOrder
- ExportPointsExpirationFields
- ExportPointsExpirationOrder
- ExportVoucherTransactionsFields
- ExportVoucherTransactionsOrder

**Breaking changes:**
- method voucherify.distributions.exports.create:
  - request parameter
    - `ExportResource` was replaced with `CreateExportResource`
      - `CreateExportResource` is a union of types, to narrow down union type use `exported_object`, or while preparing a request, declare variable with a type, for example: `const request: ExportsCreateVoucher = {...}`
  - response type
    - `ExportsCreateResponse`, now is made out of `ExportsCreateResponseCommon` and union of types, such as `ExportsCreateResponseVoucher`, so if you need get into `parameters` you will need to first narrow down types by checking `exported_object` for example: `if(response.exported_object === 'voucher'){...some logic here}`
- method voucherify.distributions.exports.create:
  - response type
    - `ExportsGetResponse` was replaced by `ExportResourceResponse`
    - Now response is made out of `ExportResourceResponseCommon` and union of types, such as `ExportsCreateResponseVoucher`, so if you need get into `parameters` you will need to first narrow down types by checking `exported_object` for example: `if(response.exported_object === 'voucher'){...some logic here}`

**Example of usage (related to breaking changes):**
```js
const request = {
  exported_object: 'voucher',
  parameters: {
    fields: ['id', 'code', 'voucher_type', 'value', 'discount_type'],
    filters: { code: { conditions: { $is_unknown: true } } },
  },
} as const
const result = await client.distributions.exports.create(request)
```

```js
const result = await client.distributions.exports.create(request)
switch (result.exported_object) {
  case 'voucher':
    if(result.parameters.fields.includes('code')){
      console.log(`will export voucher codes!`)
    }
}
```

