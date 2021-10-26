---
'@voucherify/sdk': major
---

Support new async API methods

SDK changes:
- Campaign vouchers import - added CampaignsVouchersImportResponse
- Vouchers import - added VouchersImportResponse
- Vouchers bulkUpdate - using new API method, (breaking) change of VouchersBulkUpdateResponse, (breaking) obligatory 'metadata' field in VouchersBulkUpdateObject
- Vouchers bulkUpdateMetadata - using new API method, (breaking) change of VouchersBulkUpdateMetadataResponse, (breaking) obligatory 'metadata' field in VouchersBulkUpdateMetadata
- Products bulkUpdate - using new API method, (breaking) change of ProductsBulkUpdateResponse
- Products bulkUpdateMetadata - using new API method, (breaking) change of method name, (breaking) change of ProductsBulkUpdateMetadataResponse
