# Voucherify.LV2EarningRulesApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEarningRule**](LV2EarningRulesApi.md#getEarningRule) | **GET** /v2/loyalties/earning-rules/{earningRuleId} | Get earning rule



## getEarningRule

> V2LoyaltiesEarningRulesGetResponseBody getEarningRule(earningRuleId)

Get earning rule

Returns a single earning rule by its ID.

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
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Voucherify.LV2EarningRulesApi();
let earningRuleId = "earningRuleId_example"; // String | Identifies the earning rule. Format lern_[a-f0-9]+.
apiInstance.getEarningRule(earningRuleId, (error, data, response) => {
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
 **earningRuleId** | **String**| Identifies the earning rule. Format lern_[a-f0-9]+. | 

### Return type

[**V2LoyaltiesEarningRulesGetResponseBody**](V2LoyaltiesEarningRulesGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

