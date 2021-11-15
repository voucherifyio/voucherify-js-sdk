---
'@voucherify/sdk': major
---

Support new async API methods

Changes:
- Campaign vouchers import
  - added CampaignsVouchersImportResponse
- Vouchers import
  - added VouchersImportResponse
- Vouchers bulkUpdate
  - using new API method
  - **BREAKING** change of VouchersBulkUpdateResponse
  - **BREAKING** obligatory 'metadata' field in VouchersBulkUpdateObject
- Vouchers bulkUpdateMetadata
  - using new API method
  - **BREAKING** change of VouchersBulkUpdateMetadataResponse
  - **BREAKING** obligatory 'metadata' field in VouchersBulkUpdateMetadata
- Products bulkUpdate
  - using [new API method](https://docs.voucherify.io/reference/post-products-in-bulk)
  - **BREAKING** change of ProductsBulkUpdateResponse
- Products bulkUpdateMetadata
  - using [new API method](https://docs.voucherify.io/reference/async-update-products-metadata-in-bulk)
  - **BREAKING** change of method name
  - **BREAKING** change of ProductsBulkUpdateMetadataResponse
- Products getSku
  - using [new API method](https://docs.voucherify.io/reference/get-sku-v20210726)
  - **BREAKING** change of method params
  - changed in CR fixes