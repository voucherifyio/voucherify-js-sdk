# Voucherify.LocationsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocation**](LocationsApi.md#getLocation) | **GET** /v1/locations/{locationId} | Get Location
[**listLocations**](LocationsApi.md#listLocations) | **GET** /v1/locations | List Locations



## getLocation

> LocationsGetResponseBody getLocation(locationId)

Get Location

Returns a location object.

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

let apiInstance = new Voucherify.LocationsApi();
let locationId = "locationId_example"; // String | The unique location ID.
apiInstance.getLocation(locationId, (error, data, response) => {
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
 **locationId** | **String**| The unique location ID. | 

### Return type

[**LocationsGetResponseBody**](LocationsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLocations

> LocationsListResponseBody listLocations(opts)

List Locations

Returns a list of your locations.

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

let apiInstance = new Voucherify.LocationsApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'order': new Voucherify.ParameterOrderListLocations(), // ParameterOrderListLocations | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'filters': new Voucherify.ParameterFiltersListLocations(), // ParameterFiltersListLocations | Filter the locations using one of the available filters.
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16).
};
apiInstance.listLocations(opts, (error, data, response) => {
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
 **order** | [**ParameterOrderListLocations**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **filters** | [**ParameterFiltersListLocations**](.md)| Filter the locations using one of the available filters. | [optional] 
 **endDate** | **Date**| A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). | [optional] 

### Return type

[**LocationsListResponseBody**](LocationsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

