---
'@voucherify/sdk': minor
---

**New exported types/interfaces**
- CustomerPermanentDeletion
- CustomerRequestBasicData
- UpdateCustomersMetadataInBulk

**Interfaces changed**
- `CustomerRequest`
  - extended by
    - `CustomerRequestBasicData`

**Added support for following endpoints:**
- customers
  - POST /customers/{customerId}/permanent-deletion
    - method: `client.categories.deletePermanently(customerId)`
  - POST /customers/bulk/async
    - method: `client.categories.updateCustomersInBulk(customers)`
  - POST /customers/metadata/async
    - method: `client.categories.updateCustomersMetadataInBulk(sourceIdsAndMetadata)`
