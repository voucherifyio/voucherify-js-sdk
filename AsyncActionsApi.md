# .AsyncActionsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAsyncAction**](AsyncActionsApi.md#getAsyncAction) | **GET** /v1/async-actions/{asyncActionId} | Get Async Action
[**listAsyncActions**](AsyncActionsApi.md#listAsyncActions) | **GET** /v1/async-actions | List Async Actions


# **getAsyncAction**
> AsyncActionGetResponseBody getAsyncAction()

Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       

### Example


```typescript
import { createConfiguration, AsyncActionsApi } from 'voucherify';
import type { AsyncActionsApiGetAsyncActionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new AsyncActionsApi(configuration);

const request: AsyncActionsApiGetAsyncActionRequest = {
    // Unique ID of the asynchronous operation.
  asyncActionId: "aa_0afb3d009a55814a48",
};

const data = await apiInstance.getAsyncAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asyncActionId** | [**string**] | Unique ID of the asynchronous operation. | defaults to undefined


### Return type

**AsyncActionGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns detailed information about the async action result. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAsyncActions**
> AsyncActionsListResponseBody listAsyncActions()

Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       

### Example


```typescript
import { createConfiguration, AsyncActionsApi } from 'voucherify';
import type { AsyncActionsApiListAsyncActionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new AsyncActionsApi(configuration);

const request: AsyncActionsApiListAsyncActionsRequest = {
    // Limit the number of asynchronous actions that the API returns in the response. (optional)
  limit: 1,
    // Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).  (optional)
  endDate: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listAsyncActions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit the number of asynchronous actions that the API returns in the response. | (optional) defaults to undefined
 **endDate** | [**Date**] | Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).  | (optional) defaults to undefined


### Return type

**AsyncActionsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all scheduled asynchronous actions and detailed information for each scheduled action. Note that a status &#x60;DONE&#x60;doesn\&#39;t include the result of the completed action. If you need more information about the result, use the ID of the respective async action to call the [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


