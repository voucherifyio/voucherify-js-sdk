---
'@voucherify/sdk': minor
---

**New exported types/interfaces**
- CustomerPermanentDeletion
- CustomerRequestBasicData
- UpdateCustomersMetadataInBulk

Added support for following endpoints:

- customers
  - POST /customers/{customerId}/permanent-deletion
  - POST /customers/bulk/async
  - POST /customers/metadata/async

- New methods
  - client.categories.deletePermanently(customerId)
  - client.categories.updateCustomersInBulk(customers)
  - client.categories.updateCustomersMetadataInBulk(sourceIdsAndMetadata)
