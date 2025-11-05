# Voucherify.ValidationsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateStackedDiscounts**](ValidationsApi.md#validateStackedDiscounts) | **POST** /v1/validations | Validate Stackable Discounts



## validateStackedDiscounts

> ValidationsValidateResponseBody validateStackedDiscounts(validationsValidateRequestBody)

Validate Stackable Discounts

Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.

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

let apiInstance = new Voucherify.ValidationsApi();
let validationsValidateRequestBody = {"redeemables":[{"object":"voucher","id":"BLCKFRDY"}],"order":{"amount":5500}}; // ValidationsValidateRequestBody | 
apiInstance.validateStackedDiscounts(validationsValidateRequestBody, (error, data, response) => {
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
 **validationsValidateRequestBody** | [**ValidationsValidateRequestBody**](ValidationsValidateRequestBody.md)|  | 

### Return type

[**ValidationsValidateResponseBody**](ValidationsValidateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

