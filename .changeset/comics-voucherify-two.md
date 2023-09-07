 ---
'@voucherify/sdk': minor
---
#### Added support for following endpoints:
- campaigns
  - POST /campaigns/campaignId/enable
    - method: `client.campaigns.enable(campaignId)`
  - POST /campaigns/campaignId/disable
    - method: `client.campaigns.disable(campaignId)`
- categories
  - GET, POST /categories
    - methods:
      - `client.categories.list()`
      - `client.categories.create(createCategory)`
  - GET, PUT, DELETE /categories/id
    - methods:
      - `client.categories.get(categoryId)`
      - `client.categories.update(categoryId, updateCategory)`
      - `client.categories.delete(categoryId)`
