---
'@voucherify/sdk': minor
---

To run tests you need to copy packages/sdk/.env.example to packages/sdk/.env and fill the file with your credentials.
Tests uses REAL calls to Voucherify. You may reach the limit of your account if you are using sandbox account.

**Added support for following endpoints:**
- products
  - POST /skus/importCSV
  - POST /products/importCSV
- vouchers
  - POST /vouchers/importCSV
- customers
  - POST /customers/importCSV
- campaigns
  - POST /campaigns/campaignId/importCSV

**New methods**
- client.vouchers.importVouchersUsingCSV(filePath)
- client.campaigns.importVouchersUsingCSV(campaignId, filePath)
- client.customers.importCustomersUsingCSV(filePath)
- client.products.importSkusUsingCSV(filePath)
- client.products.importProductsUsingCSV(filePath)

**Example**
```js
await client.customers.importCustomersUsingCSV(__dirname + '/csv/customers.csv')
```

**New dependencies**
- "form-data": "4.0.0"
