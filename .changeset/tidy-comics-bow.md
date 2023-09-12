---
'@voucherify/sdk': major
---

Type of `ValidationsValidateVoucherResponse` was clarified.
 - **(BREAKING CHANGE)** Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse` [(example of usage)](..%2F..%2Fexamples%2Fsdk%2Fwith-nodejs-typescript%2Fserver-validations-validate-voucher.ts)
 - New exported types/interfaces: `ResponseValidateVoucherTrue`, `DiscountUnitMultiple`, `DiscountUnitMultipleOneUnit`, `OrderObjectRedemptions` and `ResponseValidateVoucherFalse`
 - Added optional properties in `ValidationsValidateVoucherParams`
 - Added optional properties in `CustomerRequest`
 - Added optional properties in `ApplicableTo`
 - Value of banner in `PromotionsCreate[.promotion.tier]` is not required
