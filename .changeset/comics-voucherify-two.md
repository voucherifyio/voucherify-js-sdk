 ---
'@voucherify/sdk': minor
---
Add missing methods covering Categories and Campaigns API.
  - Added support for new endpoints: `POST /campaigns/campaignId/enable`, `POST /campaigns/campaignId/disable`, `GET, POST DELETE /categories` and `GET PUT /categories/id` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New exported types/interfaces in `Categories.ts`:
    - `ListCategories`, `CategoryObject`, `CreateCategory`, `ResponseCreateCategory`, `ResponseUpdateCategory`, `UpdateCategoryRequest`
