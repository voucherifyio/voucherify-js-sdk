# .SegmentsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegment**](SegmentsApi.md#createSegment) | **POST** /v1/segments | Create Segment
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /v1/segments/{segmentId} | Delete Segment
[**getSegment**](SegmentsApi.md#getSegment) | **GET** /v1/segments/{segmentId} | Get Segment


# **createSegment**
> SegmentsCreateResponseBody createSegment()

Create a customer segment.  🚧 Limit on static segments  There is a cap on the number of customers that you can assign to a static segment: **20,000**. If you would like to create a bigger segment, then you can use the unlimited auto-update or passive segment instead and use some customer metadata to build this segment.  🚧 Limit on Active and Passive segments  You can create a maximum of 100 passive and active segments.

### Example


```typescript
import { createConfiguration, SegmentsApi } from 'voucherify';
import type { SegmentsApiCreateSegmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new SegmentsApi(configuration);

const request: SegmentsApiCreateSegmentRequest = {
    // Specify the boundary conditions for the customer segment. (optional)
  segmentsCreateRequestBody: {
    name: "name_example",
    type: "static",
    customers: [
      "customers_example",
    ],
    filter: {},
  },
};

const data = await apiInstance.createSegment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentsCreateRequestBody** | **SegmentsCreateRequestBody**| Specify the boundary conditions for the customer segment. |


### Return type

**SegmentsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a customer segment object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSegment**
> void deleteSegment()

This method deletes a customer segment.

### Example


```typescript
import { createConfiguration, SegmentsApi } from 'voucherify';
import type { SegmentsApiDeleteSegmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new SegmentsApi(configuration);

const request: SegmentsApiDeleteSegmentRequest = {
    // A unique customer segment ID.
  segmentId: "seg_DNAOhUtJffvX0f57ajLMFBYR",
};

const data = await apiInstance.deleteSegment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentId** | [**string**] | A unique customer segment ID. | defaults to undefined


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

# **getSegment**
> SegmentsGetResponseBody getSegment()

Retrieves the segment with a given segment ID.

### Example


```typescript
import { createConfiguration, SegmentsApi } from 'voucherify';
import type { SegmentsApiGetSegmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new SegmentsApi(configuration);

const request: SegmentsApiGetSegmentRequest = {
    // A unique customer segment ID.
  segmentId: "seg_DNAOhUtJffvX0f57ajLMFBYR",
};

const data = await apiInstance.getSegment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentId** | [**string**] | A unique customer segment ID. | defaults to undefined


### Return type

**SegmentsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns segment object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


