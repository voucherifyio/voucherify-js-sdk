 ---
'@voucherify/sdk': minor
---
Added support for few missing endpoints:
  - Added support for new endpoints: `/campaigns/campaignId/enable`,`/campaigns/campaignId/disable`, `/categories` and `/categories/id` [(examples of usage available in readme.md)](packages%2Fsdk%2FREADME.md)
  - New exported types/interfaces in `Categories.ts`:
    - `ListCategories`, `CategoryObject`, `CreateCategory`, `ResponseCreateCategory`, `ResponseUpdateCategory`, `UpdateCategoryRequest`
