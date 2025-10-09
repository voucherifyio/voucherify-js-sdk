# .CategoriesApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoriesApi.md#createCategory) | **POST** /v1/categories | Create Category
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /v1/categories/{categoryId} | Delete Category
[**getCategory**](CategoriesApi.md#getCategory) | **GET** /v1/categories/{categoryId} | Get Category
[**listCategories**](CategoriesApi.md#listCategories) | **GET** /v1/categories | List Categories
[**updateCategory**](CategoriesApi.md#updateCategory) | **PUT** /v1/categories/{categoryId} | Update Category


# **createCategory**
> CategoriesCreateResponseBody createCategory()

Create category with a specific name and hierarchy.

### Example


```typescript
import { createConfiguration, CategoriesApi } from 'voucherify';
import type { CategoriesApiCreateCategoryRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CategoriesApi(configuration);

const request: CategoriesApiCreateCategoryRequest = {
    // Specify the details of the category that you would like to create. (optional)
  categoriesCreateRequestBody: {
    name: "name_example",
    hierarchy: 0,
  },
};

const data = await apiInstance.createCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoriesCreateRequestBody** | **CategoriesCreateRequestBody**| Specify the details of the category that you would like to create. |


### Return type

**CategoriesCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a newly created category object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCategory**
> void deleteCategory()

Delete a category by the category ID.

### Example


```typescript
import { createConfiguration, CategoriesApi } from 'voucherify';
import type { CategoriesApiDeleteCategoryRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CategoriesApi(configuration);

const request: CategoriesApiDeleteCategoryRequest = {
    // Unique category ID assigned by Voucherify.
  categoryId: "cat_0bb81a481615a37b5e",
};

const data = await apiInstance.deleteCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Unique category ID assigned by Voucherify. | defaults to undefined


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
**204** | No content is returned. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategory**
> CategoriesGetResponseBody getCategory()

Retrieve a category by the category ID.

### Example


```typescript
import { createConfiguration, CategoriesApi } from 'voucherify';
import type { CategoriesApiGetCategoryRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CategoriesApi(configuration);

const request: CategoriesApiGetCategoryRequest = {
    // Unique category ID assigned by Voucherify.
  categoryId: "cat_0bb81a481615a37b5e",
};

const data = await apiInstance.getCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Unique category ID assigned by Voucherify. | defaults to undefined


### Return type

**CategoriesGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a category object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCategories**
> CategoriesListResponseBody listCategories()

List all categories.

### Example


```typescript
import { createConfiguration, CategoriesApi } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CategoriesApi(configuration);

const request = {};

const data = await apiInstance.listCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CategoriesListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of category objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCategory**
> CategoriesUpdateResponseBody updateCategory()

Update a category using the category ID.

### Example


```typescript
import { createConfiguration, CategoriesApi } from 'voucherify';
import type { CategoriesApiUpdateCategoryRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CategoriesApi(configuration);

const request: CategoriesApiUpdateCategoryRequest = {
    // Unique category ID assigned by Voucherify.
  categoryId: "cat_0bb81a481615a37b5e",
    // Specify the details of the category that you would like to update. (optional)
  categoriesUpdateRequestBody: {
    name: "name_example",
    hierarchy: 0,
  },
};

const data = await apiInstance.updateCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoriesUpdateRequestBody** | **CategoriesUpdateRequestBody**| Specify the details of the category that you would like to update. |
 **categoryId** | [**string**] | Unique category ID assigned by Voucherify. | defaults to undefined


### Return type

**CategoriesUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a category object with a refreshed &#x60;updated_at&#x60; property. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


