# .BinApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBinEntry**](BinApi.md#deleteBinEntry) | **DELETE** /v1/trash-bin/{binEntryId} | Delete Bin Entry
[**listBinEntries**](BinApi.md#listBinEntries) | **GET** /v1/trash-bin | List Bin Entries


# **deleteBinEntry**
> void deleteBinEntry()

Deletes permanently a bin entry with a given ID.The following resources can be moved to the bin and permanently deleted: - campaigns - vouchers - products - SKUs To use this endpoint and delete a given resource type, you must have the following permissions: - vouchers.delete to delete a voucher, - campaigns.delete to delete a campaign, - products.delete to delete a product or SKU.

### Example


```typescript
import { createConfiguration, BinApi } from 'voucherify';
import type { BinApiDeleteBinEntryRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new BinApi(configuration);

const request: BinApiDeleteBinEntryRequest = {
    // Provide the unique identifier of the bin entry.
  binEntryId: "tbe_0ec1cf03fe133e2de7",
};

const data = await apiInstance.deleteBinEntry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binEntryId** | [**string**] | Provide the unique identifier of the bin entry. | defaults to undefined


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

# **listBinEntries**
> TrashBinListResponseBody listBinEntries()

Retrieves a list of resources moved to the bin. The following resources can be moved to the bin: - campaigns - vouchers - products - SKUs To use this endpoint, you must have the following permissions: - vouchers.read - campaigns.read - products.read

### Example


```typescript
import { createConfiguration, BinApi } from 'voucherify';
import type { BinApiListBinEntriesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new BinApi(configuration);

const request: BinApiListBinEntriesRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the results starting after a result with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Filters for listing bin entries. (optional)
  filters: {
    junction: "and",
    id: {
      conditions: {
        _in: [
          "_in_example",
        ],
        notIn: [
          "notIn_example",
        ],
        is: "is_example",
        isNot: "isNot_example",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
        contains: "contains_example",
        notContain: "notContain_example",
      },
    },
    resourceType: {
      conditions: null,
    },
    resourceName: {
      conditions: {
        _in: [
          "_in_example",
        ],
        notIn: [
          "notIn_example",
        ],
        is: "is_example",
        isNot: "isNot_example",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
        contains: "contains_example",
        notContain: "notContain_example",
      },
    },
    resourceId: {
      conditions: {
        _in: [
          "_in_example",
        ],
        notIn: [
          "notIn_example",
        ],
        is: "is_example",
        isNot: "isNot_example",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
        contains: "contains_example",
        notContain: "notContain_example",
      },
    },
  },
};

const data = await apiInstance.listBinEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListBin** | Orders the bin entries according to the bin entry ID. The dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the results starting after a result with the given ID. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListBin** | Filters for listing bin entries. | (optional) defaults to undefined


### Return type

**TrashBinListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of all the bin entries matching the query parameters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


