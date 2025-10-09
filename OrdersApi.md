# .OrdersApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](OrdersApi.md#createOrder) | **POST** /v1/orders | Create Order
[**createOrderExport**](OrdersApi.md#createOrderExport) | **POST** /v1/orders/export | Create Orders Export
[**getOrder**](OrdersApi.md#getOrder) | **GET** /v1/orders/{orderId} | Get Order
[**importOrders**](OrdersApi.md#importOrders) | **POST** /v1/orders/import | Import Orders
[**listOrders**](OrdersApi.md#listOrders) | **GET** /v1/orders | List Orders
[**updateOrder**](OrdersApi.md#updateOrder) | **PUT** /v1/orders/{orderId} | Update Order


# **createOrder**
> OrdersCreateResponseBody createOrder()

Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.

### Example


```typescript
import { createConfiguration, OrdersApi } from 'voucherify';
import type { OrdersApiCreateOrderRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderRequest = {
    // Specify the order parameters. (optional)
  ordersCreateRequestBody: {
    id: "id_example",
    sourceId: "sourceId_example",
    status: "CREATED",
    amount: 1,
    initialAmount: 1,
    discountAmount: 1,
    items: [
      {
        skuId: "skuId_example",
        productId: "productId_example",
        relatedObject: "product",
        sourceId: "sourceId_example",
        quantity: 1,
        discountQuantity: 1,
        initialQuantity: 1,
        amount: 1,
        discountAmount: 1,
        initialAmount: 1,
        price: 1,
        product: {
          id: "id_example",
          sourceId: "sourceId_example",
          override: true,
          name: "name_example",
          metadata: {},
          price: 3.14,
        },
        sku: {
          id: "id_example",
          sourceId: "sourceId_example",
          override: true,
          sku: "sku_example",
          price: 3.14,
          metadata: {},
        },
        metadata: {},
      },
    ],
    metadata: {},
    createdAt: new Date('2021-12-22T10:13:06.487Z'),
    referrerId: "cust_nM4jqPiaXUvQdVSA6vTRUnix",
    customer: {
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
    referrer: {
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
  },
};

const data = await apiInstance.createOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersCreateRequestBody** | **OrdersCreateRequestBody**| Specify the order parameters. |


### Return type

**OrdersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an order object if the operation succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrderExport**
> OrdersExportCreateResponseBody createOrderExport()

Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    

### Example


```typescript
import { createConfiguration, OrdersApi } from 'voucherify';
import type { OrdersApiCreateOrderExportRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderExportRequest = {
    // Specify which order parameters you would like to export. (optional)
  ordersExportCreateRequestBody: {
    parameters: {
      order: "-created_at",
      fields: [
        "id",
      ],
      filters: {},
    },
  },
};

const data = await apiInstance.createOrderExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersExportCreateRequestBody** | **OrdersExportCreateRequestBody**| Specify which order parameters you would like to export. |


### Return type

**OrdersExportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the &#x60;id&#x60; of the export object and &#x60;status&#x60; of the file generation process. The &#x60;id&#x60; is used in the [Get Export](/api-reference/exports/get-export) method to generate the url for the downloadable CSV file or in the [Download Export](/api-reference/exports/download-export) method to return the contents of the CSV file. The status indicates whether the file has been scheduled for creation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrder**
> OrdersGetResponseBody getOrder()

Retrieve a specific order by passing its ID.

### Example


```typescript
import { createConfiguration, OrdersApi } from 'voucherify';
import type { OrdersApiGetOrderRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiGetOrderRequest = {
    // Unique Voucherify order ID or order source ID.
  orderId: "ord_smEh8p1p6W6DgOmeERk092LG",
};

const data = await apiInstance.getOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | Unique Voucherify order ID or order source ID. | defaults to undefined


### Return type

**OrdersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an order object if a valid identifier was provided.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importOrders**
> OrdersImportCreateResponseBody importOrders()

  🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.

### Example


```typescript
import { createConfiguration, OrdersApi } from 'voucherify';
import type { OrdersApiImportOrdersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiImportOrdersRequest = {
    // The request body is sent in the form of an array of order objects. (optional)
  ordersImportCreateRequestBodyItem: [
    ,
  ],
};

const data = await apiInstance.importOrders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersImportCreateRequestBodyItem** | **Array<OrdersImportCreateRequestBodyItem>**| The request body is sent in the form of an array of order objects. |


### Return type

**OrdersImportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the ID of the scheduled asynchronous action, informing you that your request has been accepted and the order(s) will be added to the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrders**
> OrdersListResponseBody listOrders()

Returns a list of orders. 

### Example


```typescript
import { createConfiguration, OrdersApi } from 'voucherify';
import type { OrdersApiListOrdersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiListOrdersRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listOrders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListOrders** | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**OrdersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with order objects. The orders are returned sorted by creation date by default, with the most recent orders appearing last, unless you specify another sequence using the order query parameter. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrder**
> OrdersUpdateResponseBody updateOrder()

Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.

### Example


```typescript
import { createConfiguration, OrdersApi } from 'voucherify';
import type { OrdersApiUpdateOrderRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderRequest = {
    // Unique Voucherify order ID or order source ID.
  orderId: "ord_smEh8p1p6W6DgOmeERk092LG",
    // Specify the parameters of the order that are to be updated. (optional)
  ordersUpdateRequestBody: {
    sourceId: "sourceId_example",
    status: "CREATED",
    amount: 1,
    initialAmount: 1,
    discountAmount: 1,
    items: [
      {
        skuId: "skuId_example",
        productId: "productId_example",
        relatedObject: "product",
        sourceId: "sourceId_example",
        quantity: 1,
        discountQuantity: 1,
        initialQuantity: 1,
        amount: 1,
        discountAmount: 1,
        initialAmount: 1,
        price: 1,
        product: {
          id: "id_example",
          sourceId: "sourceId_example",
          override: true,
          name: "name_example",
          metadata: {},
          price: 3.14,
        },
        sku: {
          id: "id_example",
          sourceId: "sourceId_example",
          override: true,
          sku: "sku_example",
          price: 3.14,
          metadata: {},
        },
        metadata: {},
      },
    ],
    metadata: {},
    createdAt: new Date('2021-12-22T10:13:06.487Z'),
    referrerId: "cust_nM4jqPiaXUvQdVSA6vTRUnix",
    customer: {
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
    referrer: {
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
  },
};

const data = await apiInstance.updateOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordersUpdateRequestBody** | **OrdersUpdateRequestBody**| Specify the parameters of the order that are to be updated. |
 **orderId** | [**string**] | Unique Voucherify order ID or order source ID. | defaults to undefined


### Return type

**OrdersUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the order object if the update succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


