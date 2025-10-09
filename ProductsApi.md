# .ProductsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /v1/products | Create Product
[**createSku**](ProductsApi.md#createSku) | **POST** /v1/products/{productId}/skus | Create SKU
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /v1/products/{productId} | Delete Product
[**deleteSku**](ProductsApi.md#deleteSku) | **DELETE** /v1/products/{productId}/skus/{skuId} | Delete SKU
[**getProduct**](ProductsApi.md#getProduct) | **GET** /v1/products/{productId} | Get Product
[**getSku**](ProductsApi.md#getSku) | **GET** /v1/skus/{skuId} | Get SKU
[**importProductsUsingCsv**](ProductsApi.md#importProductsUsingCsv) | **POST** /v1/products/importCSV | Import Products using CSV
[**importSKUsUsingCsv**](ProductsApi.md#importSKUsUsingCsv) | **POST** /v1/skus/importCSV | Import SKUs using CSV
[**listProducts**](ProductsApi.md#listProducts) | **GET** /v1/products | List Products
[**listSKUsInProduct**](ProductsApi.md#listSKUsInProduct) | **GET** /v1/products/{productId}/skus | List SKUs in Product
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /v1/products/{productId} | Update Product
[**updateProductsInBulk**](ProductsApi.md#updateProductsInBulk) | **POST** /v1/products/bulk/async | Update Products in Bulk
[**updateProductsMetadataInBulk**](ProductsApi.md#updateProductsMetadataInBulk) | **POST** /v1/products/metadata/async | Update Products\&#39; Metadata in Bulk
[**updateSku**](ProductsApi.md#updateSku) | **PUT** /v1/products/{productId}/skus/{skuId} | Update SKU


# **createProduct**
> ProductsCreateResponseBody createProduct()

Creates a product object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the product database, Voucherify will return a related product object with updated fields.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiCreateProductRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateProductRequest = {
    // Specify the product parameters. (optional)
  productsCreateRequestBody: {
    id: "prod_5h0wc453_1",
    sourceId: "productSourceID16",
    name: "T-shirt",
    price: 1,
    attributes: [
      "attributes_example",
    ],
    metadata: {},
    imageUrl: "https://images.com/original.jpg",
  },
};

const data = await apiInstance.createProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsCreateRequestBody** | **ProductsCreateRequestBody**| Specify the product parameters. |


### Return type

**ProductsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a product object if the operation succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSku**
> ProductsSkusCreateResponseBody createSku()

This method adds product variants to a [created product](/api-reference/products/create-product).   📘 Upsert Mode  If you pass an id or a source_id that already exists in the sku database, Voucherify will return a related sku object with updated fields.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiCreateSkuRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateSkuRequest = {
    // A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
  productId: "prod_3ttSkdxGuAfcv3",
    // Specify the SKU parameters to be created. (optional)
  productsSkusCreateRequestBody: {
    id: "sku_0c0c0012a9029bccef",
    sourceId: "sku_source_id_4",
    sku: "Large Pink Shirt",
    price: 1,
    currency: "USD",
    attributes: {},
    imageUrl: "imageUrl_example",
    metadata: {},
  },
};

const data = await apiInstance.createSku(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsSkusCreateRequestBody** | **ProductsSkusCreateRequestBody**| Specify the SKU parameters to be created. |
 **productId** | [**string**] | A Voucherify [product](/api-reference/products/get-product) ID or product source ID. | defaults to undefined


### Return type

**ProductsSkusCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the created SKU object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProduct**
> void deleteProduct()

Deletes a product and all related SKUs. This operation cannot be undone.  If the force parameter is set to false or not set at all, the product and all related SKUs will be moved to [the bin](/api-reference/bin/list-bin-entries).

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiDeleteProductRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteProductRequest = {
    // A Voucherify product ID or source ID.
  productId: "prod_3ttSkdxGuAfcv3",
    // If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id. (optional)
  force: true,
};

const data = await apiInstance.deleteProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | A Voucherify product ID or source ID. | defaults to undefined
 **force** | [**boolean**] | If this flag is set to true, the product and all related SKUs will be removed permanently. If it is set to false or not set at all, the product and all related SKUs will be moved to the bin. Going forward, the user will be able to create another product with exactly the same source_id. | (optional) defaults to undefined


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

# **deleteSku**
> void deleteSku()

Deletes a product SKU. This operation cannot be undone.  If the force parameter is set to false or not set at all, the SKU will be moved to [the bin](/api-reference/bin/list-bin-entries).

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiDeleteSkuRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteSkuRequest = {
    // A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
  productId: "prod_3ttSkdxGuAfcv3",
    // A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
  skuId: "sku_0b661e41eccd35a8e9",
    // If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id. (optional)
  force: true,
};

const data = await apiInstance.deleteSku(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID. | defaults to undefined
 **skuId** | [**string**] | A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID. | defaults to undefined
 **force** | [**boolean**] | If this flag is set to true, the SKU will be removed permanently. If it is set to false or not set at all, the SKU will be moved to the bin. Going forward, the user will be able to create another SKU with exactly the same source_id. | (optional) defaults to undefined


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

# **getProduct**
> ProductsGetResponseBody getProduct()

Retrieve details of a given product and its SKUs, if any.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiGetProductRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiGetProductRequest = {
    // A Voucherify product ID or source ID.
  productId: "prod_3ttSkdxGuAfcv3",
};

const data = await apiInstance.getProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | A Voucherify product ID or source ID. | defaults to undefined


### Return type

**ProductsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a product object if a valid identifier was provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSku**
> SkusGetResponseBody getSku()

Retrieve details of a SKU.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiGetSkuRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiGetSkuRequest = {
    // A Voucherify SKU identifier or SKU source ID.
  skuId: "sku_0b661e41eccd35a8e9",
};

const data = await apiInstance.getSku(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skuId** | [**string**] | A Voucherify SKU identifier or SKU source ID. | defaults to undefined


### Return type

**SkusGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns requested SKU object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importProductsUsingCsv**
> ProductsImportCsvCreateResponseBody importProductsUsingCsv()

Import products into the repository using a CSV file. The CSV file has to include headers in the first line.  📘 Standard product fields mapping  - Create a **comma separated value (CSV) file** or download our CSV import template. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b82ed68d51e779443f550/Import_products_template.csv).  - Supported CSV file headers: name,source_id,price,attributes,image_url,Metadata_property_name  - **Name** is a **required** field. The remaining fields in the CSV template are optional.  - Override/Update products **names** in Voucherify using this method. Data will be updated for each product included in the CSV file whose **source_id** matches a source ID in Voucherify. No other data can be updated other than the product name.  - Note that dates and date-time attributes need to be provided in compliance with the **ISO 8601 norms**. For example, 2022-03-11T09:00:00.000Z or 2022-03-11     - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Columns that cannot be mapped to standard fields, will be mapped to **Custom attributes** and added as **products metadata**. There is no limit on the number of custom attributes that you can import as metadata.   - To provide the proper data type, you need to add all custom attributes to the metadata schema **before importing the file**. Read more [here](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata).  - **Product attributes** (not custom attributes) need to be separated by a comma and enclosed in double quotes, i.e attribute1,attribute2.  - Headers with metadata names **cant contain white-space characters**.  - If you import metadata defined in the schema as **arrays (multiple)**, you need to separate each value using a comma, for example:       - array of strings: subscribed,premium       - array of numbers: 123,234.      - array of dates: 2000-01-01,2000-01-02 This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiImportProductsUsingCsvRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiImportProductsUsingCsvRequest = {
    // File path. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.importProductsUsingCsv(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] | File path. | (optional) defaults to undefined


### Return type

**ProductsImportCsvCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns ID of the scheduled async action. The response informs you that your request has been accepted and products will be added to the repository asynchronously. To check the import status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using the [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importSKUsUsingCsv**
> SkusImportCsvCreateResponseBody importSKUsUsingCsv()

Import SKUs into the repository using a CSV file. The CSV file has to include headers in the first line. All properties which cannot be mapped to standard SKU fields will be added to the metadata object. You can find an example template [here](https://s3.amazonaws.com/helpscout.net/docs/assets/5902f1c12c7d3a057f88a36d/attachments/627b98d08c9b585083488a4c/Import_SKUS_template.csv).   🚧 Import sequence  First import products using the [dedicated endpoint](/api-reference/products/import-products-using-csv), then import SKUs using this endpoint to properly match SKUs to products.  📘 Standard SKU fields mapping  - **Required** fields are source_id and product_id.  - Supported CSV file headers: product_id,sku,source_id,price,image_url,attributes  - SKU **source_id** must be unique in the entire product catalog, no duplicates are allowed.  - SKU attributes need to be in the form of a stringy-fied json, i.e.{color:blue}. These attributes must be defined in the **product** beforehand so you can import them to the SKU.  - You can use this method to update the following parameters in bulk: **sku** and the sku **price**.  - Columns that cannot be mapped to standard fields will be mapped to Custom attributes and added as product metadata. There is no limit on the number of custom attributes that you can import as metadata. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiImportSKUsUsingCsvRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiImportSKUsUsingCsvRequest = {
    // File path. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.importSKUsUsingCsv(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] | File path. | (optional) defaults to undefined


### Return type

**SkusImportCsvCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns ID of the scheduled async action. The response informs you that your request has been accepted and SKUs will be added to the repository asynchronously. To check the import status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using the [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProducts**
> ProductsListResponseBody listProducts()

Retrieve a list of products.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiListProductsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListProductsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. (optional)
  startDate: new Date('2023-12-22T10:13:06.487Z'),
    // Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. (optional)
  endDate: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listProducts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrder** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startDate** | [**Date**] | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined
 **endDate** | [**Date**] | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined


### Return type

**ProductsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with product objects. The products are returned sorted by creation date by default, with the most recent products appearing last, unless you specify another sequence using the &#x60;order&#x60; query parameter. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSKUsInProduct**
> ProductsSkusListResponseBody listSKUsInProduct()

Retrieve all SKUs for a given product.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiListSKUsInProductRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListSKUsInProductRequest = {
    // A Voucherify [product](/api-reference/products/get-product) ID or product source ID.
  productId: "prod_3ttSkdxGuAfcv3",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. (optional)
  startDate: new Date('2023-12-22T10:13:06.487Z'),
    // Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. (optional)
  endDate: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listSKUsInProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | A Voucherify [product](/api-reference/products/get-product) ID or product source ID. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrder** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startDate** | [**Date**] | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined
 **endDate** | [**Date**] | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined


### Return type

**ProductsSkusListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of SKUs. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProduct**
> ProductsUpdateResponseBody updateProduct()

Updates the specified product by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiUpdateProductRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProductRequest = {
    // A Voucherify product ID or source ID.
  productId: "prod_3ttSkdxGuAfcv3",
    // Specify the parameters of the product that are to be updated. (optional)
  productsUpdateRequestBody: {
    name: "T-shirt",
    price: 1,
    attributes: [
      "attributes_example",
    ],
    metadata: {},
    imageUrl: "https://images.com/original.jpg",
  },
};

const data = await apiInstance.updateProduct(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsUpdateRequestBody** | **ProductsUpdateRequestBody**| Specify the parameters of the product that are to be updated. |
 **productId** | [**string**] | A Voucherify product ID or source ID. | defaults to undefined


### Return type

**ProductsUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated product object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductsInBulk**
> ProductsUpdateInBulkResponseBody updateProductsInBulk()

Update products in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiUpdateProductsInBulkRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProductsInBulkRequest = {
    // List the product fields to be updated in each product object. (optional)
  productsUpdateInBulkRequestBody: [
    {
      sourceId: "test_prod_id_1",
      name: "T-shirt",
      price: 1,
      attributes: [
        "attributes_example",
      ],
      imageUrl: "https://images.com/original.jpg",
      metadata: {},
    },
  ],
};

const data = await apiInstance.updateProductsInBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsUpdateInBulkRequestBody** | **Array<ProductsUpdateInBulkRequestBody>**| List the product fields to be updated in each product object. |


### Return type

**ProductsUpdateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action. The response informs you that the request has been accepted and the resources will be updated in the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and use it as a query parameter in the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductsMetadataInBulk**
> ProductsMetadataUpdateInBulkResponseBody updateProductsMetadataInBulk()

Updates metadata parameters for a list of products. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiUpdateProductsMetadataInBulkRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProductsMetadataInBulkRequest = {
    // List the source_ids of the products you would like to update with the metadata key/value pairs. (optional)
  productsMetadataUpdateInBulkRequestBody: {
    sourceIds: [
      "sourceIds_example",
    ],
    metadata: {},
  },
};

const data = await apiInstance.updateProductsMetadataInBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsMetadataUpdateInBulkRequestBody** | **ProductsMetadataUpdateInBulkRequestBody**| List the source_ids of the products you would like to update with the metadata key/value pairs. |


### Return type

**ProductsMetadataUpdateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action. The response informs you that the request has been accepted and the resources will be updated in the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and use it as a query parameter in the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSku**
> ProductsSkusUpdateResponseBody updateSku()

Updates the specified SKU by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body schema wont be modified. Even if provided, they will be silently skipped.

### Example


```typescript
import { createConfiguration, ProductsApi } from 'voucherify';
import type { ProductsApiUpdateSkuRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateSkuRequest = {
    // A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID.
  productId: "prod_3ttSkdxGuAfcv3",
    // A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID.
  skuId: "sku_0b661e41eccd35a8e9",
    // Specify the parameters to be updated. (optional)
  productsSkusUpdateRequestBody: {
    sku: "Large Pink Shirt",
    price: 1,
    currency: "currency_example",
    attributes: {},
    imageUrl: "imageUrl_example",
    metadata: {},
  },
};

const data = await apiInstance.updateSku(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsSkusUpdateRequestBody** | **ProductsSkusUpdateRequestBody**| Specify the parameters to be updated. |
 **productId** | [**string**] | A unique Voucherify [product](/api-reference/products/get-product) ID or product source ID. | defaults to undefined
 **skuId** | [**string**] | A Voucherify [SKU ID](/api-reference/products/get-sku) or SKU source ID. | defaults to undefined


### Return type

**ProductsSkusUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the SKU object with the updated parameters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


