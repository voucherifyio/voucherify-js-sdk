# Voucherify.AsyncActionsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAsyncAction**](AsyncActionsApi.md#getAsyncAction) | **GET** /v1/async-actions/{asyncActionId} | Get Async Action
[**listAsyncActions**](AsyncActionsApi.md#listAsyncActions) | **GET** /v1/async-actions | List Async Actions



## getAsyncAction

> AsyncActionGetResponseBody getAsyncAction(asyncActionId)

Get Async Action

Check the result of a scheduled asynchronous operation.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-App-Id
let X-App-Id = defaultClient.authentications['X-App-Id'];
X-App-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-App-Id.apiKeyPrefix = 'Token';
// Configure API key authorization: X-App-Token
let X-App-Token = defaultClient.authentications['X-App-Token'];
X-App-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-App-Token.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: X-Voucherify-OAuth
let X-Voucherify-OAuth = defaultClient.authentications['X-Voucherify-OAuth'];
X-Voucherify-OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Voucherify.AsyncActionsApi();
let asyncActionId = "asyncActionId_example"; // String | Unique ID of the asynchronous operation.
apiInstance.getAsyncAction(asyncActionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asyncActionId** | **String**| Unique ID of the asynchronous operation. | 

### Return type

[**AsyncActionGetResponseBody**](AsyncActionGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAsyncActions

> AsyncActionsListResponseBody listAsyncActions(opts)

List Async Actions

Track asynchronous operations scheduled in your project.   The table below lists the possible types of async actions. The types are different for each endpoint generating the async action. If you would like to learn more about importing data into Voucherify, read more [here](https://support.voucherify.io/article/574-data-import).       

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-App-Id
let X-App-Id = defaultClient.authentications['X-App-Id'];
X-App-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-App-Id.apiKeyPrefix = 'Token';
// Configure API key authorization: X-App-Token
let X-App-Token = defaultClient.authentications['X-App-Token'];
X-App-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-App-Token.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: X-Voucherify-OAuth
let X-Voucherify-OAuth = defaultClient.authentications['X-Voucherify-OAuth'];
X-Voucherify-OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Voucherify.AsyncActionsApi();
let opts = {
  'limit': 56, // Number | Limit the number of asynchronous actions that the API returns in the response.
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). 
};
apiInstance.listAsyncActions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit the number of asynchronous actions that the API returns in the response. | [optional] 
 **endDate** | **Date**| Limits results to actions scheduled before the end_date. The date format needs to be consistent with ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).  | [optional] 

### Return type

[**AsyncActionsListResponseBody**](AsyncActionsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

