---
'@voucherify/sdk': minor
---

Add missing methods covering Product Collections API.
-  Added support for new endpoints: `GET POST /product-collections`, `GET DELETE /product-collections/{productCollectionId}` and `GET /product-collections/${productCollectionId}/products` [(examples of usage available in readme.md)](..%2F..%2Fpackages%2Fsdk%2FREADME.md)
- New exported types/interfaces in `ProductCollections.ts`: `CreateProductCollection`, `CreateProductCollectionStaticProduct`, `CreateProductCollectionAutoUpdate`, `Junction`, `FiltersCondition`, `ProductCollectionsObject`, `ListProductCollectionsParameters`, `ListProductCollections`, `ListProductsInCollectionParameters`, `ListProductsInCollection`, `ProductInCollectionSku`, `ProductInCollectionSkuProduct` and `ProductInCollectionProduct`
