# .CustomersApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /v1/customers | Create Customer
[**customerPermanentlyDeletion**](CustomersApi.md#customerPermanentlyDeletion) | **POST** /v1/customers/{customerId}/permanent-deletion | Delete Customer Permanently
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /v1/customers/{customerId} | Delete Customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /v1/customers/{customerId} | Get Customer
[**importCustomersUsingCsv**](CustomersApi.md#importCustomersUsingCsv) | **POST** /v1/customers/importCSV | Import and Update Customers using CSV
[**listCustomerActivity**](CustomersApi.md#listCustomerActivity) | **GET** /v1/customers/{customerId}/activity | List Customer Activity
[**listCustomerRedeemables**](CustomersApi.md#listCustomerRedeemables) | **GET** /v1/customers/{customerId}/redeemables | List Customer\&#39;s Redeemables
[**listCustomerSegments**](CustomersApi.md#listCustomerSegments) | **GET** /v1/customers/{customerId}/segments | List Customer\&#39;s Segments
[**listCustomers**](CustomersApi.md#listCustomers) | **GET** /v1/customers | List Customers
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /v1/customers/{customerId} | Update Customer
[**updateCustomersInBulk**](CustomersApi.md#updateCustomersInBulk) | **POST** /v1/customers/bulk/async | Update Customers in Bulk
[**updateCustomersMetadataInBulk**](CustomersApi.md#updateCustomersMetadataInBulk) | **POST** /v1/customers/metadata/async | Update Customers\&#39; Metadata in Bulk


# **createCustomer**
> CustomersCreateResponseBody createCustomer()

Creates a customer object.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the customer database, Voucherify will return a related customer object with updated fields.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiCreateCustomerRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiCreateCustomerRequest = {
    // Create a customer with specified parameters. (optional)
  customersCreateRequestBody: {
    id: "id_example",
    sourceId: "sourceId_example",
    name: "name_example",
    description: "description_example",
    email: "email_example",
    phone: "phone_example",
    birthday: new Date('1970-01-01').toISOString().split('T')[0];,
    birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
    address: {
      city: "city_example",
      state: "state_example",
      line1: "line1_example",
      line2: "line2_example",
      country: "country_example",
      postalCode: "postalCode_example",
    },
    metadata: {},
  },
};

const data = await apiInstance.createCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customersCreateRequestBody** | **CustomersCreateRequestBody**| Create a customer with specified parameters. |


### Return type

**CustomersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a customer object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerPermanentlyDeletion**
> CustomersPermanentDeletionCreateResponseBody customerPermanentlyDeletion()

The organization user can remove consumer data permanently from the Voucherify system by using this API method. It deletes all customer data and connected resources. It makes the customer profile forgotten by Voucherify.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiCustomerPermanentlyDeletionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiCustomerPermanentlyDeletionRequest = {
    // A Voucherify customers id or source_id.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
};

const data = await apiInstance.customerPermanentlyDeletion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | A Voucherify customers id or source_id. | defaults to undefined


### Return type

**CustomersPermanentDeletionCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a permanent deletion object and status of the deletion. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomer**
> void deleteCustomer()

This method deletes a customer.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiDeleteCustomerRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiDeleteCustomerRequest = {
    // A Voucherify customers id or source_id.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
};

const data = await apiInstance.deleteCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | A Voucherify customers id or source_id. | defaults to undefined


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

# **getCustomer**
> CustomersGetResponseBody getCustomer()

Retrieves details of a given customer by customers id or source_id.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiGetCustomerRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiGetCustomerRequest = {
    // A Voucherify customers id or source_id.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
};

const data = await apiInstance.getCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | A Voucherify customers id or source_id. | defaults to undefined


### Return type

**CustomersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a customer object if a valid identifier was provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importCustomersUsingCsv**
> CustomersImportCsvCreateResponseBody importCustomersUsingCsv()

This API method lets you import or update customer data. To get a proper and valid response, please send a CSV file with data separated by commas.   # Request Example # CSV File Format The CSV file has to include headers in the first line. All properties which cannot be mapped to standard customer fields will be added to the metadata object.  📘 Standard customer fields mapping  **No spaces allowed in field names**    Id, Name, Email, Phone, Birthdate, Source_id, Address_line_1, Address_line_2, Address_Postal_Code, Address_City, Address_State, Address_Country, Description, Metadata_name_1, Metadata_name_2 # Update Customers using CSV If you would like to update customers data, you can do it using the CSV file with new data. However, remember to include a source_id in your CSV file to manage the update successfully. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiImportCustomersUsingCsvRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiImportCustomersUsingCsvRequest = {
    // File path. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.importCustomersUsingCsv(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] | File path. | (optional) defaults to undefined


### Return type

**CustomersImportCsvCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns ID of the scheduled async action. The response informs you that your request has been accepted and customers will be added to the repository asynchronously. To check the import status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using the [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomerActivity**
> CustomersActivityListResponseBody listCustomerActivity()

Retrieves activity details of a given customer by customers id or source_id.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiListCustomerActivityRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiListCustomerActivityRequest = {
    // A Voucherify customers id or source ID of the customer who performed the activities.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Apply this filter to order the events according the date and time when it was created.  (optional)
  order: "created_at",
    // A cursor for pagination. It retrieves the events starting after an event with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Timestamp representing the date and time which results must begin on. Represented in ISO 8601 format. (optional)
  startDate: new Date('2023-12-22T10:13:06.487Z'),
    // Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. (optional)
  endDate: new Date('2023-12-22T10:13:06.487Z'),
    // Requests only events related to specific campaign identified by its ID. (optional)
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Filters related customers activity for the selected campaign types. Allowed values:  DISCOUNT_COUPONS, REFERRAL_PROGRAM, GIFT_VOUCHERS, PROMOTION, LOYALTY_PROGRAM. (optional)
  campaignType: "PROMOTION",
    // Filters activities for actions or effects. Allowed values:  ACTION, EFFECT. (optional)
  category: "ACTION",
    // Event name of the customer event. (optional)
  type: "customer.confirmed",
};

const data = await apiInstance.listCustomerActivity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | A Voucherify customers id or source ID of the customer who performed the activities. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderCreatedAt** | Apply this filter to order the events according the date and time when it was created.  | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the events starting after an event with the given ID. | (optional) defaults to undefined
 **startDate** | [**Date**] | Timestamp representing the date and time which results must begin on. Represented in ISO 8601 format. | (optional) defaults to undefined
 **endDate** | [**Date**] | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined
 **campaignId** | [**string**] | Requests only events related to specific campaign identified by its ID. | (optional) defaults to undefined
 **campaignType** | **ParameterCampaignType** | Filters related customers activity for the selected campaign types. Allowed values:  DISCOUNT_COUPONS, REFERRAL_PROGRAM, GIFT_VOUCHERS, PROMOTION, LOYALTY_PROGRAM. | (optional) defaults to undefined
 **category** | **ParameterActivityCategory** | Filters activities for actions or effects. Allowed values:  ACTION, EFFECT. | (optional) defaults to undefined
 **type** | **ParameterCustomerEvent** | Event name of the customer event. | (optional) defaults to undefined


### Return type

**CustomersActivityListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with customer activities. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomerRedeemables**
> CustomersRedeemablesListResponseBody listCustomerRedeemables()

Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiListCustomerRedeemablesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiListCustomerRedeemablesRequest = {
    // Unique identifier of a customer represented by an internal customer ID or customer source ID.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the events starting after an event with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Filters for listing customer redeemables. (optional)
  filters: {
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
    createdAt: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    redeemableId: {
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
    redeemableObject: {
      conditions: null,
    },
    holderRole: {
      conditions: null,
    },
    campaignId: {
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
    campaignType: {
      conditions: null,
    },
    voucherType: {
      conditions: null,
    },
    junction: "and",
  },
};

const data = await apiInstance.listCustomerRedeemables(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Unique identifier of a customer represented by an internal customer ID or customer source ID. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListRedeemables** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the events starting after an event with the given ID. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListCustomerRedeemables** | Filters for listing customer redeemables. | (optional) defaults to undefined


### Return type

**CustomersRedeemablesListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The method returns redeemable(s) to which the given customer is assigned. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomerSegments**
> CustomersSegmentsListResponseBody listCustomerSegments()

Returns the list of segments IDs to which the customer belongs to.   If you pass a customerId which is not stored and recognized by Voucherify as an existing customer in the system, the response will generate a list of segments that the customer would potentialy qualify for if they were to become a customer tracked in the system.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiListCustomerSegmentsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiListCustomerSegmentsRequest = {
    // Unique identifier of a customer represented by an internal customer ID or customer source ID.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
};

const data = await apiInstance.listCustomerSegments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Unique identifier of a customer represented by an internal customer ID or customer source ID. | defaults to undefined


### Return type

**CustomersSegmentsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The method returns segment(s) to which the given customer belongs to. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomers**
> CustomersListResponseBody listCustomers()

Returns a list of customers.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiListCustomersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiListCustomersRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1, the highest value is 99. (optional)
  page: 1,
    // Limit the customers to the ones that have this specific email address. (optional)
  email: "email_example",
    // Limit the customers to the ones that are located in the specified city. (optional)
  city: "city_example",
    // Filter customers by the name property. (optional)
  name: "name_example",
    // Filter customers by the segment id. (optional)
  segmentId: "segment_id_example",
    // Filter customers by date customer was created. (optional)
  createdAtBefore: new Date('2023-12-22T10:13:06.487Z'),
    // Filter customers by date customer was created. (optional)
  createdAtAfter: new Date('2023-12-22T10:13:06.487Z'),
    // Filter customers by date customer was updated last time. (optional)
  updatedAtBefore: new Date('2023-12-22T10:13:06.487Z'),
    // Filter customers by date customer was updated last time. (optional)
  updatedAtAfter: new Date('2023-12-22T10:13:06.487Z'),
    // This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // A cursor for pagination. This is a date-time value that defines your place in the list based on created_at property from the customer object. For instance, if you make a list request and receive 100 objects, ending with an object created at 2020-05-24T13:43:09.024Z, your subsequent call can include starting_after 2020-05-24T13:43:09.024Z in order to fetch the next page of the list.   (optional)
  startingAfter: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listCustomers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1, the highest value is 99. | (optional) defaults to undefined
 **email** | [**string**] | Limit the customers to the ones that have this specific email address. | (optional) defaults to undefined
 **city** | [**string**] | Limit the customers to the ones that are located in the specified city. | (optional) defaults to undefined
 **name** | [**string**] | Filter customers by the name property. | (optional) defaults to undefined
 **segmentId** | [**string**] | Filter customers by the segment id. | (optional) defaults to undefined
 **createdAtBefore** | [**Date**] | Filter customers by date customer was created. | (optional) defaults to undefined
 **createdAtAfter** | [**Date**] | Filter customers by date customer was created. | (optional) defaults to undefined
 **updatedAtBefore** | [**Date**] | Filter customers by date customer was updated last time. | (optional) defaults to undefined
 **updatedAtAfter** | [**Date**] | Filter customers by date customer was updated last time. | (optional) defaults to undefined
 **order** | **ParameterOrderListCustomers** | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfter** | [**Date**] | A cursor for pagination. This is a date-time value that defines your place in the list based on created_at property from the customer object. For instance, if you make a list request and receive 100 objects, ending with an object created at 2020-05-24T13:43:09.024Z, your subsequent call can include starting_after 2020-05-24T13:43:09.024Z in order to fetch the next page of the list.   | (optional) defaults to undefined


### Return type

**CustomersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with customer objects. The customers are returned sorted by creation date, with the most recent customers appearing first. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomer**
> CustomersUpdateResponseBody updateCustomer()

Updates the specified customer by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiUpdateCustomerRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiUpdateCustomerRequest = {
    // A Voucherify customers id or source_id.
  customerId: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
    // Specify the parameters to be updated. (optional)
  customersUpdateRequestBody: {
    name: "name_example",
    description: "description_example",
    email: "email_example",
    phone: "phone_example",
    birthday: new Date('1970-01-01').toISOString().split('T')[0];,
    birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
    address: {
      city: "city_example",
      state: "state_example",
      line1: "line1_example",
      line2: "line2_example",
      country: "country_example",
      postalCode: "postalCode_example",
    },
    metadata: {},
  },
};

const data = await apiInstance.updateCustomer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customersUpdateRequestBody** | **CustomersUpdateRequestBody**| Specify the parameters to be updated. |
 **customerId** | [**string**] | A Voucherify customers id or source_id. | defaults to undefined


### Return type

**CustomersUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a customer object if updates were successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomersInBulk**
> CustomersUpdateInBulkResponseBody updateCustomersInBulk()

Updates customers in one asynchronous operation. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a customer object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiUpdateCustomersInBulkRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiUpdateCustomersInBulkRequest = {
    // List the customer fields to be updated in each customer object. (optional)
  customersUpdateInBulkRequestBody: [
    {
      sourceId: "sourceId_example",
      name: "name_example",
      description: "description_example",
      email: "email_example",
      phone: "phone_example",
      birthday: new Date('1970-01-01').toISOString().split('T')[0];,
      birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
      address: {
        city: "city_example",
        state: "state_example",
        line1: "line1_example",
        line2: "line2_example",
        country: "country_example",
        postalCode: "postalCode_example",
      },
      metadata: {},
    },
  ],
};

const data = await apiInstance.updateCustomersInBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customersUpdateInBulkRequestBody** | **Array<CustomersUpdateInBulkRequestBody>**| List the customer fields to be updated in each customer object. |


### Return type

**CustomersUpdateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action. The response informs you that the request has been accepted and the resources will be updated in the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and use it as a query parameter in the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomersMetadataInBulk**
> CustomersMetadataUpdateInBulkResponseBody updateCustomersMetadataInBulk()

Updates metadata parameters for a list of customers. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update If a product object is not found, it is **upserted**. This is shown in the report file in the **GET** Async Action endpoint. The upserted resources have value false in the found column and true in the updated column. This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

### Example


```typescript
import { createConfiguration, CustomersApi } from 'voucherify';
import type { CustomersApiUpdateCustomersMetadataInBulkRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CustomersApi(configuration);

const request: CustomersApiUpdateCustomersMetadataInBulkRequest = {
    // List the source_ids of the customers you would like to update with the metadata key/value pairs. (optional)
  customersMetadataUpdateInBulkRequestBody: {
    sourceIds: [
      "sourceIds_example",
    ],
    metadata: {},
  },
};

const data = await apiInstance.updateCustomersMetadataInBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customersMetadataUpdateInBulkRequestBody** | **CustomersMetadataUpdateInBulkRequestBody**| List the source_ids of the customers you would like to update with the metadata key/value pairs. |


### Return type

**CustomersMetadataUpdateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action. The response informs you that the request has been accepted and the resources will be updated in the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and use it as a query parameter in the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


