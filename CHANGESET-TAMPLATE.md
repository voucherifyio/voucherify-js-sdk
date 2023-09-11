[//]: # (This is an example of changeset)

Add missing methods covering Qualification API.
  - Added support for new endpoints: `/skus/importCSV` and `/categories` [(example available in readme.md)](packages%2Fsdk%2FREADME.md)
  - Added missing types in `PromotionsCreate`, `ApplicableTo`, `CustomerRequest`, `ValidationsValidateVoucherParams`
  - Update axios from `0.21.4` to `0.27.2` in SDK package
  - **(BREAKING CHANGE)** Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`
[(example of usage)](examples%2Fsdk%2Fwith-nodejs-typescript%2Fserver-product.ts)
