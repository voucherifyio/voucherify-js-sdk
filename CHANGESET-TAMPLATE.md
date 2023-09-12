[//]: # (This is an example of changeset)
[//]: # (Note `..%2F..%2F` in paths, this changelog will be in packages/sdk)

Add missing methods covering Qualification API.
  - Added support for new endpoints: `/skus/importCSV` and `/categories` [(example available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
  - Added missing types in `PromotionsCreate`, `ApplicableTo`, `CustomerRequest`, `ValidationsValidateVoucherParams`
  - Update axios from `0.21.4` to `0.27.2` in SDK package
  - **(BREAKING CHANGE)** Interface `ValidationsValidateVoucherResponse` was replaced with type of Union of interfaces `ResponseValidateVoucherTrue | ResponseValidateVoucherFalse`
[(example of usage)](..%2F..%2Fexamples%2Fsdk%2Fwith-nodejs-typescript%2Fserver-product.ts)
