---
'@voucherify/sdk': minor
---

Add missing methods covering Customers API.
  - Added support for new endpoints: 
    - `POST /customers/{customerId}/permanent-deletion`, 
    - `POST /customers/bulk/async`,
    - `POST /customers/metadata/async` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - New domain types:
    - `CustomerBase`
    - `CustomerAddress`
  - New exported types/interfaces:
    - `CustomersUpdateInBulkRequestBody`,
    - `CustomersUpdateMetadataInBulkRequestBody`,
    - `CustomersDeletePermanentlyResponseBody`
