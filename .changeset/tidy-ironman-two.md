---
'@voucherify/sdk': minor
---

Added support for few missing endpoints in customers API:
  - Added support for new endpoints: `/customers/{customerId}/permanent-deletion`, `/customers/bulk/async` and `/customers/metadata/async` [(example available in readme.md)](packages%2Fsdk%2FREADME.md)
  - Added missing types in `CustomerRequest`
  - New exported types/interfaces:
    - `CustomerPermanentDeletion`, `CustomerRequestBasicData` and `UpdateCustomersMetadataInBulk`
