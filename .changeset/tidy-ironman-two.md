---
'@voucherify/sdk': minor
---

Add missing methods covering Customers API.
  - Added support for new endpoints: `POST /customers/{customerId}/permanent-deletion`, `POST /customers/bulk/async` and `POST /customers/metadata/async` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - Added missing attributes in `CustomerRequest` (extends `CustomerRequestBasicData`)
  - New exported types/interfaces: `CustomersDeletePermanentlyResponseBody`, `CustomerRequestBasicData`, `CustomersUpdateCustomersInBulkRequestBody` and `CustomersUpdateCustomersMetadataInBulkRequestBody`
