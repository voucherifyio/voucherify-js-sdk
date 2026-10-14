# Voucherify.LV2BenefitsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBenefit**](LV2BenefitsApi.md#getBenefit) | **GET** /v2/loyalties/benefits/{benefitId} | Get benefit



## getBenefit

> V2LoyaltiesBenefitsGetResponseBody getBenefit(benefitId)

Get benefit

Returns a single benefit by its ID.

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

let apiInstance = new Voucherify.LV2BenefitsApi();
let benefitId = "benefitId_example"; // String | Unique benefit ID, prefixed with lben_.
apiInstance.getBenefit(benefitId, (error, data, response) => {
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
 **benefitId** | **String**| Unique benefit ID, prefixed with lben_. | 

### Return type

[**V2LoyaltiesBenefitsGetResponseBody**](V2LoyaltiesBenefitsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

