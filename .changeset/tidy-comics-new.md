---
'@voucherify/sdk': minor
---

#### New exported types/interfaces
- ProductCollections.ts
  - CreateProductCollection
  - CreateProductCollectionStaticProduct
  - CreateProductCollectionAutoUpdate
  - Junction
  - FiltersCondition
  - ProductCollectionsObject
  - ListProductCollectionsParameters
  - ListProductCollections
  - ListProductsInCollectionParameters
  - ListProductsInCollection
  - ProductInCollectionSku
  - ProductInCollectionSkuProduct
  - ProductInCollectionProduct

#### Added support for following endpoints:
- productCollections
  - POST GET /product-collections
    - methods:
      - `client.productCollections.create(productCollection)`
      - `client.productCollections.list()`
  - GET DELETE /product-collections/{productCollectionId}
    - methods:
      - `client.productCollections.get(productCollectionId)`
      - `client.productCollections.delete(productCollectionId)`
  - GET /product-collections/${productCollectionId}/products
    - method: `client.productCollections.listProductsInCollection(productCollectionId)`

