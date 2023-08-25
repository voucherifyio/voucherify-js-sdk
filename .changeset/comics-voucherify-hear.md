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
