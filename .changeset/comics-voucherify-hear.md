---
'@voucherify/sdk': minor
---

**Added support for following endpoints:**
- products
  - POST /skus/importCSV
    - method: `client.products.importSkusUsingCSV(filePath)`
  - POST /products/importCSV
    - method: `client.products.importProductsUsingCSV(filePath)`
- vouchers
  - POST /vouchers/importCSV
    - method: `client.vouchers.importVouchersUsingCSV(filePath)`
- customers
  - POST /customers/importCSV
    - method: `client.customers.importCustomersUsingCSV(filePath)`
- campaigns
  - POST /campaigns/campaignId/importCSV
    - method: `client.campaigns.importVouchersUsingCSV(campaignId, filePath)`

**Example**
```js
await client.customers.importCustomersUsingCSV(__dirname + '/csv/customers.csv')
```

**New dependencies**
- "form-data": "4.0.0"
