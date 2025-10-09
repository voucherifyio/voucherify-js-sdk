# .LocationsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocation**](LocationsApi.md#getLocation) | **GET** /v1/locations/{locationId} | Get Location
[**listLocations**](LocationsApi.md#listLocations) | **GET** /v1/locations | List Locations


# **getLocation**
> LocationsGetResponseBody getLocation()

Returns a location object.

### Example


```typescript
import { createConfiguration, LocationsApi } from 'voucherify';
import type { LocationsApiGetLocationRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LocationsApi(configuration);

const request: LocationsApiGetLocationRequest = {
    // The unique location ID.
  locationId: "loc_NoMGXmHO9OUs7iz9mGWpamma",
};

const data = await apiInstance.getLocation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | The unique location ID. | defaults to undefined


### Return type

**LocationsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a location object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLocations**
> LocationsListResponseBody listLocations()

Returns a list of your locations.

### Example


```typescript
import { createConfiguration, LocationsApi } from 'voucherify';
import type { LocationsApiListLocationsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LocationsApi(configuration);

const request: LocationsApiListLocationsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // Filter the locations using one of the available filters. (optional)
  filters: null,
    // A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). (optional)
  endDate: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listLocations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListLocations** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListLocations** | Filter the locations using one of the available filters. | (optional) defaults to undefined
 **endDate** | [**Date**] | A filter on the list based on the end date. This will filter out all locations whose end date falls before the specified date and time. A date value must be presented in the ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). | (optional) defaults to undefined


### Return type

**LocationsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary that contains an array of locations. Each entry in the array is a separate location object.  If no more locations are available, the resulting array will be empty. The result can be narrowed down according to specified (or default) filters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


