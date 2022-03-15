---
'@voucherify/sdk': patch
---

Query params passed to `this.client.post` method are now correctly stringified. Added possibility to pass query params to `voucherify.promotions.validate` method in order to allow developers using SDK to pass advanced filters to restrict possible range of promotion campaigns against which validation should be performed.
