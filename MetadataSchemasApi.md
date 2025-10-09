# .MetadataSchemasApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMetadataSchema**](MetadataSchemasApi.md#getMetadataSchema) | **GET** /v1/metadata-schemas/{resource} | Get Metadata Schema
[**listMetadataSchemas**](MetadataSchemasApi.md#listMetadataSchemas) | **GET** /v1/metadata-schemas | List Metadata Schema Definitions


# **getMetadataSchema**
> MetadataSchemasGetResponseBody getMetadataSchema()

Retrieves a metadata schema per resource type. # Resource types ## Standard You can retrieve metadata schemas for the standard metadata schema definitions listed below. Add one of these types as the resource path parameter. - campaign - customer - earning_rule - loyalty_tier - order - order_item - product - promotion_tier - publication - redemption - reward - voucher ## Custom If you have defined a [custom metadata schema](https://support.voucherify.io/article/99-schema-validation-metadata#add-metadata), provide its name in the resource field to retrieve its details. 📘 Management API If you have Management API enabled, you can also use the [Get Metadata Schemas](/api-reference/management/get-metadata-schema) endpoint to retrieve a metadata schema using its ID.

### Example


```typescript
import { createConfiguration, MetadataSchemasApi } from 'voucherify';
import type { MetadataSchemasApiGetMetadataSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new MetadataSchemasApi(configuration);

const request: MetadataSchemasApiGetMetadataSchemaRequest = {
    // There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas.
  resource: "resource_example",
};

const data = await apiInstance.getMetadataSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | [**string**] | There is an infinite number of possibilities for retrieving metadata schemas by the resource type because you can define custom metadata schemas. | defaults to undefined


### Return type

**MetadataSchemasGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response does not include unknown metadata properties in the response, i.e. those that have been defined outside of the **Project Settings** &gt; **Metadata Schema** definitions. For example, an unknown metadata property can be defined in the campaign manager. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMetadataSchemas**
> MetadataSchemasListResponseBody listMetadataSchemas()

Retrieve metadata schema definitions. 📘 Management API If you have Management API enabled, you can also use the [List Metadata Schemas](/api-reference/management/list-metadata-schemas) endpoint to list all metadata schemas.

### Example


```typescript
import { createConfiguration, MetadataSchemasApi } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new MetadataSchemasApi(configuration);

const request = {};

const data = await apiInstance.listMetadataSchemas(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MetadataSchemasListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of metadata schema definitions. The response does not include unknown metadata properties in the response, i.e. those that have been defined outside of the **Project Settings** &gt; **Metadata Schema** definitions. For example, an unknown metadata property can be defined in the campaign manager while creating a campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


