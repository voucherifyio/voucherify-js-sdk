# .ProductCollectionsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductCollection**](ProductCollectionsApi.md#createProductCollection) | **POST** /v1/product-collections | Create Product Collection
[**deleteProductCollection**](ProductCollectionsApi.md#deleteProductCollection) | **DELETE** /v1/product-collections/{productCollectionId} | Delete Product Collection
[**getProductCollection**](ProductCollectionsApi.md#getProductCollection) | **GET** /v1/product-collections/{productCollectionId} | Get Product Collection
[**listProductCollections**](ProductCollectionsApi.md#listProductCollections) | **GET** /v1/product-collections | List Product Collections
[**listProductsInCollection**](ProductCollectionsApi.md#listProductsInCollection) | **GET** /v1/product-collections/{productCollectionId}/products | List Products in Collection


# **createProductCollection**
> ProductCollectionsCreateResponseBody createProductCollection()

This method creates a new product collection.

### Example


```typescript
import { createConfiguration, ProductCollectionsApi } from 'voucherify';
import type { ProductCollectionsApiCreateProductCollectionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductCollectionsApi(configuration);

const request: ProductCollectionsApiCreateProductCollectionRequest = {
  
  productCollectionsCreateRequestBody: {
    type: "STATIC",
    name: "name_example",
    products: [
      {
        id: "prod_0a41bcf807c5fcaaf6",
        productId: "productId_example",
        object: "sku",
      },
    ],
    filter: {},
  },
};

const data = await apiInstance.createProductCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCollectionsCreateRequestBody** | **ProductCollectionsCreateRequestBody**|  |


### Return type

**ProductCollectionsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns information about the newly created collection, as well as an array containing the products. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductCollection**
> void deleteProductCollection()

This method deletes a product collection.

### Example


```typescript
import { createConfiguration, ProductCollectionsApi } from 'voucherify';
import type { ProductCollectionsApiDeleteProductCollectionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductCollectionsApi(configuration);

const request: ProductCollectionsApiDeleteProductCollectionRequest = {
    // A unique product collection ID.
  productCollectionId: "pc_41V4DiQQO8YGqj0J2oZD57j4",
};

const data = await apiInstance.deleteProductCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCollectionId** | [**string**] | A unique product collection ID. | defaults to undefined


### Return type

**void**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if deletion is successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductCollection**
> ProductCollectionsGetResponseBody getProductCollection()

Retrieves the product collection.

### Example


```typescript
import { createConfiguration, ProductCollectionsApi } from 'voucherify';
import type { ProductCollectionsApiGetProductCollectionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductCollectionsApi(configuration);

const request: ProductCollectionsApiGetProductCollectionRequest = {
    // A unique product collection ID.
  productCollectionId: "pc_41V4DiQQO8YGqj0J2oZD57j4",
};

const data = await apiInstance.getProductCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCollectionId** | [**string**] | A unique product collection ID. | defaults to undefined


### Return type

**ProductCollectionsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a product collection object if a valid identifier was provided in the path. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductCollections**
> ProductCollectionsListResponseBody listProductCollections()

This method returns a list of product collections.

### Example


```typescript
import { createConfiguration, ProductCollectionsApi } from 'voucherify';
import type { ProductCollectionsApiListProductCollectionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductCollectionsApi(configuration);

const request: ProductCollectionsApiListProductCollectionsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listProductCollections(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrder** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**ProductCollectionsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary containing a list of product collections and details about each product collection. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductsInCollection**
> ProductCollectionsProductsListResponseBody listProductsInCollection()

Retrieves list of products from a product collection; works for both dynamic and static product collections.

### Example


```typescript
import { createConfiguration, ProductCollectionsApi } from 'voucherify';
import type { ProductCollectionsApiListProductsInCollectionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductCollectionsApi(configuration);

const request: ProductCollectionsApiListProductsInCollectionRequest = {
    // Unique product collection ID.
  productCollectionId: "pc_41V4DiQQO8YGqj0J2oZD57j4",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format. (optional)
  startingAfter: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listProductsInCollection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCollectionId** | [**string**] | Unique product collection ID. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrder** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfter** | [**Date**] | Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format. | (optional) defaults to undefined


### Return type

**ProductCollectionsProductsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of products and/or SKUs grouped in the collection with each product\&#39;s/SKU\&#39;s details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


