# Voucherify.ProductCollectionsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductCollection**](ProductCollectionsApi.md#createProductCollection) | **POST** /v1/product-collections | Create Product Collection
[**deleteProductCollection**](ProductCollectionsApi.md#deleteProductCollection) | **DELETE** /v1/product-collections/{productCollectionId} | Delete Product Collection
[**getProductCollection**](ProductCollectionsApi.md#getProductCollection) | **GET** /v1/product-collections/{productCollectionId} | Get Product Collection
[**listProductCollections**](ProductCollectionsApi.md#listProductCollections) | **GET** /v1/product-collections | List Product Collections
[**listProductsInCollection**](ProductCollectionsApi.md#listProductsInCollection) | **GET** /v1/product-collections/{productCollectionId}/products | List Products in Collection



## createProductCollection

> ProductCollectionsCreateResponseBody createProductCollection(productCollectionsCreateRequestBody)

Create Product Collection

This method creates a new product collection.

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

let apiInstance = new Voucherify.ProductCollectionsApi();
let productCollectionsCreateRequestBody = {"type":"STATIC","name":"Static collection example","products":[{"id":"prod_0a41dd45dc85fcab40","object":"product"}]}; // ProductCollectionsCreateRequestBody | 
apiInstance.createProductCollection(productCollectionsCreateRequestBody, (error, data, response) => {
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
 **productCollectionsCreateRequestBody** | [**ProductCollectionsCreateRequestBody**](ProductCollectionsCreateRequestBody.md)|  | 

### Return type

[**ProductCollectionsCreateResponseBody**](ProductCollectionsCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProductCollection

> deleteProductCollection(productCollectionId)

Delete Product Collection

This method deletes a product collection.

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

let apiInstance = new Voucherify.ProductCollectionsApi();
let productCollectionId = "productCollectionId_example"; // String | A unique product collection ID.
apiInstance.deleteProductCollection(productCollectionId, (error, data, response) => {
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
 **productCollectionId** | **String**| A unique product collection ID. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProductCollection

> ProductCollectionsGetResponseBody getProductCollection(productCollectionId)

Get Product Collection

Retrieves the product collection.

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

let apiInstance = new Voucherify.ProductCollectionsApi();
let productCollectionId = "productCollectionId_example"; // String | A unique product collection ID.
apiInstance.getProductCollection(productCollectionId, (error, data, response) => {
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
 **productCollectionId** | **String**| A unique product collection ID. | 

### Return type

[**ProductCollectionsGetResponseBody**](ProductCollectionsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductCollections

> ProductCollectionsListResponseBody listProductCollections(opts)

List Product Collections

This method returns a list of product collections.

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

let apiInstance = new Voucherify.ProductCollectionsApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrder() // ParameterOrder | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
};
apiInstance.listProductCollections(opts, (error, data, response) => {
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
 **order** | [**ParameterOrder**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 

### Return type

[**ProductCollectionsListResponseBody**](ProductCollectionsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductsInCollection

> ProductCollectionsProductsListResponseBody listProductsInCollection(productCollectionId, opts)

List Products in Collection

Retrieves list of products from a product collection; works for both dynamic and static product collections.

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

let apiInstance = new Voucherify.ProductCollectionsApi();
let productCollectionId = "productCollectionId_example"; // String | Unique product collection ID.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrder(), // ParameterOrder | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'startingAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format.
};
apiInstance.listProductsInCollection(productCollectionId, opts, (error, data, response) => {
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
 **productCollectionId** | **String**| Unique product collection ID. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **page** | **Number**| Which page of results to return. The lowest value is 1. | [optional] 
 **order** | [**ParameterOrder**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **startingAfter** | **Date**| Timestamp representing the date and time to use in starting_after cursor to get more data. Represented in ISO 8601 format. | [optional] 

### Return type

[**ProductCollectionsProductsListResponseBody**](ProductCollectionsProductsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

