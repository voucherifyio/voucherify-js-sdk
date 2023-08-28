 ---
'@voucherify/sdk': minor
---

To run tests you need to copy packages/sdk/.env.example to packages/sdk/.env and fill the file with your credentials.
Tests uses REAL calls to Voucherify. You may reach the limit of your account if you are using sandbox account.

**Added support for following endpoints:**
- campaigns
  - POST /campaigns/campaignId/enable
  - POST /campaigns/campaignId/disable
- categories
  - GET, POST /categories
  - GET, PUT, DELETE /categories/id

**New methods**
- client.categories.list()
- client.categories.create(createCategory)
- client.categories.get(categoryId)
- client.categories.delete(categoryId)
- client.categories.update(categoryId, updateCategory)
