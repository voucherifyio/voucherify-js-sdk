---
'@voucherify/sdk': minor
---

Add missing methods covering Categories and Campaigns API.
- Added support for new endpoints [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md):
  - `POST /campaigns/campaignId/enable`,
  - `POST /campaigns/campaignId/disable`,
  - `GET, POST DELETE /categories`,
  - `GET PUT /categories/id`.
- New exported types/interfaces in `Categories.ts`:
  - `ListCategories`,
  - `CategoryObject`,
  - `CreateCategory`,
  - `ResponseCreateCategory`,
  - `ResponseUpdateCategory`,
  - `UpdateCategoryRequest`.
