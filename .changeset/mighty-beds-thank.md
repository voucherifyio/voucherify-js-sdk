---
'@voucherify/sdk': patch
---

Add function which return "Retry-After" header from response. The purpose is to get information how long it's needed to wait until new requests can be made, when api limits are reached. This ddition is backward compatible so no changes are needed to be made in older code
