# Voucherify.ExportsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExport**](ExportsApi.md#createExport) | **POST** /v1/exports | Create Export
[**deleteExport**](ExportsApi.md#deleteExport) | **DELETE** /v1/exports/{exportId} | Delete Export
[**downloadExport**](ExportsApi.md#downloadExport) | **GET** /v1/exports/{export_Id} | Download Export
[**getExport**](ExportsApi.md#getExport) | **GET** /v1/exports/{exportId} | Get Export
[**listExports**](ExportsApi.md#listExports) | **GET** /v1/exports | List Exports



## createExport

> ExportsCreateResponseBody createExport(exportsCreateRequestBody)

Create Export

Create export object. The export can be any of the following types: voucher, redemption, publication, customer, order, points_expiration, voucher_transactions, product, or sku.   # Defaults If you only specify the object type in the request body without specifying the fields, the API will return the following fields per export object:    📘 Date and time in the export API  The exported date and times are always provided in the UTC time zone. # Fetching particular data sets Using the parameters body parameter, you can narrow down which fields to export and how to filter the results. The fields are an array of strings containing the data that you would like to export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields: # Orders     # Vouchers        # Publications   # Redemptions    # Customers       # Points Expirations    # Gift Card Transactions    # Loyalty Card Transactions   

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

let apiInstance = new Voucherify.ExportsApi();
let exportsCreateRequestBody = new Voucherify.ExportsCreateRequestBody(); // ExportsCreateRequestBody | Specify the details of the export that you would like to create.
apiInstance.createExport(exportsCreateRequestBody, (error, data, response) => {
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
 **exportsCreateRequestBody** | [**ExportsCreateRequestBody**](ExportsCreateRequestBody.md)| Specify the details of the export that you would like to create. | 

### Return type

[**ExportsCreateResponseBody**](ExportsCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteExport

> deleteExport(exportId)

Delete Export

This method deletes a previously created export object.

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

let apiInstance = new Voucherify.ExportsApi();
let exportId = "exportId_example"; // String | Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
apiInstance.deleteExport(exportId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **String**| Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadExport

> String downloadExport(exportId, opts)

Download Export

Download the contents of the exported CSV file.   📘 Important notes  **Base URL:**   - https://download.voucherify.io (Europe)   - https://us1.download.voucherify.io (US)   - https://as1.download.voucherify.io (Asia)   **Token:** Can be found within the result parameter of the [Get Export](/api-reference/exports/get-export) method response.

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

let apiInstance = new Voucherify.ExportsApi();
let exportId = "exp_ex6zq0x0EEa9S0N68QcqhxcQ"; // String | Unique export object ID.
let opts = {
  'token': "token_example" // String | Token that was issued to the export, to get this token, get the export first
};
apiInstance.downloadExport(exportId, opts, (error, data, response) => {
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
 **exportId** | **String**| Unique export object ID. | 
 **token** | **String**| Token that was issued to the export, to get this token, get the export first | [optional] 

### Return type

**String**

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## getExport

> ExportsGetResponseBody getExport(exportId)

Get Export

Retrieves the URL of the downloadable file, which was generated via the [Create Export](/api-reference/exports/create-export) method.

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

let apiInstance = new Voucherify.ExportsApi();
let exportId = "exportId_example"; // String | Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions.
apiInstance.getExport(exportId, (error, data, response) => {
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
 **exportId** | **String**| Unique export object ID of previously created export. This object can be a: voucher, redemption, publication, customer, order, points_expiration, or voucher_transactions. | 

### Return type

[**ExportsGetResponseBody**](ExportsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listExports

> ExportsListResponseBody listExports(opts)

List Exports

List all exports. 

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

let apiInstance = new Voucherify.ExportsApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrderListExports() // ParameterOrderListExports | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
};
apiInstance.listExports(opts, (error, data, response) => {
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
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **page** | **Number**| Which page of results to return. The lowest value is 1. | [optional] 
 **order** | [**ParameterOrderListExports**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 

### Return type

[**ExportsListResponseBody**](ExportsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

