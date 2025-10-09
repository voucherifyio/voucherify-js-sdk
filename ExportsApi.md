# .ExportsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExport**](ExportsApi.md#createExport) | **POST** /v1/exports | Create Export
[**deleteExport**](ExportsApi.md#deleteExport) | **DELETE** /v1/exports/{exportId} | Delete Export
[**downloadExport**](ExportsApi.md#downloadExport) | **GET** /v1/exports/{export_Id} | Download Export
[**getExport**](ExportsApi.md#getExport) | **GET** /v1/exports/{exportId} | Get Export
[**listExports**](ExportsApi.md#listExports) | **GET** /v1/exports | List Exports


# **createExport**
> ExportsCreateResponseBody createExport()

Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   

### Example


```typescript
import { createConfiguration, ExportsApi } from 'voucherify';
import type { ExportsApiCreateExportRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ExportsApi(configuration);

const request: ExportsApiCreateExportRequest = {
    // Specify the details of the export that you would like to create. (optional)
  exportsCreateRequestBody: {
    exportedObject: "voucher",
    parameters: {
      order: "-created_at",
      fields: [
        "code",
      ],
      filters: {},
      campaignId: "camp_0dJG7cCAjquzcxWmZ634bA0C",
    },
  },
};

const data = await apiInstance.createExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportsCreateRequestBody** | **ExportsCreateRequestBody**| Specify the details of the export that you would like to create. |


### Return type

**ExportsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns export object and URL of CSV file. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteExport**
> void deleteExport()

This method deletes a previously created export object.

### Example


```typescript
import { createConfiguration, ExportsApi } from 'voucherify';
import type { ExportsApiDeleteExportRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ExportsApi(configuration);

const request: ExportsApiDeleteExportRequest = {
    // Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
  exportId: "exp_2bYLdY2lQ2886wmYIHyeBWUZ",
};

const data = await apiInstance.deleteExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | [**string**] | Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions. | defaults to undefined


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

# **downloadExport**
> string downloadExport()

Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.

### Example


```typescript
import { createConfiguration, ExportsApi } from 'voucherify';
import type { ExportsApiDownloadExportRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ExportsApi(configuration);

const request: ExportsApiDownloadExportRequest = {
    // Unique export object ID.
  exportId: "exp_ex6zq0x0EEa9S0N68QcqhxcQ",
    // Token that was issued to the export, to get this token, get the export first (optional)
  token: "token_example",
};

const data = await apiInstance.downloadExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | [**string**] | Unique export object ID. | defaults to undefined
 **token** | [**string**] | Token that was issued to the export, to get this token, get the export first | (optional) defaults to undefined


### Return type

**string**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns contents of CSV file. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExport**
> ExportsGetResponseBody getExport()

Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.

### Example


```typescript
import { createConfiguration, ExportsApi } from 'voucherify';
import type { ExportsApiGetExportRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ExportsApi(configuration);

const request: ExportsApiGetExportRequest = {
    // Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
  exportId: "exp_2bYLdY2lQ2886wmYIHyeBWUZ",
};

const data = await apiInstance.getExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | [**string**] | Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions. | defaults to undefined


### Return type

**ExportsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the export object if a valid identifier was provided in the path. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listExports**
> ExportsListResponseBody listExports()

List all exports. 

### Example


```typescript
import { createConfiguration, ExportsApi } from 'voucherify';
import type { ExportsApiListExportsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ExportsApi(configuration);

const request: ExportsApiListExportsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listExports(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListExports** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**ExportsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A dictionary with an exports property that contains an array of exports. Each entry in the array is a separate export object. The list will return the following types of exported objects: &#x60;voucher&#x60;, &#x60;redemption&#x60;, &#x60;publication&#x60;, &#x60;customer&#x60;, &#x60;order&#x60;, &#x60;points_expiration&#x60;, or &#x60;voucher_transactions&#x60;.   The &#x60;channel&#x60; parameter in the response body returns the channel that was used to generate the particular export. The &#x60;user_id&#x60; identifies the specific user who initiated the export through the Voucherify Dashboard; this &#x60;user_id&#x60; is returned when the channel value is &#x60;WEBSITE&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


