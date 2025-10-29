# Voucherify.OrdersApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](OrdersApi.md#createOrder) | **POST** /v1/orders | Create Order
[**createOrderExport**](OrdersApi.md#createOrderExport) | **POST** /v1/orders/export | Create Orders Export
[**getOrder**](OrdersApi.md#getOrder) | **GET** /v1/orders/{orderId} | Get Order
[**importOrders**](OrdersApi.md#importOrders) | **POST** /v1/orders/import | Import Orders
[**listOrders**](OrdersApi.md#listOrders) | **GET** /v1/orders | List Orders
[**updateOrder**](OrdersApi.md#updateOrder) | **PUT** /v1/orders/{orderId} | Update Order



## createOrder

> OrdersCreateResponseBody createOrder(ordersCreateRequestBody)

Create Order

Creates an order object and triggers an order creation event.  📘 Upsert Mode  If you pass an id or a source_id that already exists in the order database, Voucherify will return a related order object with updated fields.

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

let apiInstance = new Voucherify.OrdersApi();
let ordersCreateRequestBody = {"amount":20000,"customer":{"source_id":"sample_customer"},"status":"PAID","items":[{"quantity":1,"price":20000,"source_id":"sample product1","related_object":"product","product":{"metadata":{"key":"value"}}}]}; // OrdersCreateRequestBody | Specify the order parameters.
apiInstance.createOrder(ordersCreateRequestBody, (error, data, response) => {
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
 **ordersCreateRequestBody** | [**OrdersCreateRequestBody**](OrdersCreateRequestBody.md)| Specify the order parameters. | 

### Return type

[**OrdersCreateResponseBody**](OrdersCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderExport

> OrdersExportCreateResponseBody createOrderExport(ordersExportCreateRequestBody)

Create Orders Export

Creates a downloadable CSV file containing a list of orders. The parameters listed in the payload resembles headers in the CSV file. To include a parameter to the file, add it to the parameters.fields object in the request body. The available filters are all [order object](/api-reference/orders/order-calculated-object) attributes. Additionally, any metadata defined in the metadata schema can be exported. Passing an empty JSON will generate a file containing three default fields: id, source_id, and status. The fields array is an array of strings containing the data in the export. These fields define the headers in the CSV file. The array can be a combination of any of the following available fields:    

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

let apiInstance = new Voucherify.OrdersApi();
let ordersExportCreateRequestBody = {"parameters":{"fields":["id","source_id","status","created_at","updated_at","amount","discount_amount","items_discount_amount","total_discount_amount","total_amount","customer_id","referrer_id","metadata.payment_mean"]}}; // OrdersExportCreateRequestBody | Specify which order parameters you would like to export.
apiInstance.createOrderExport(ordersExportCreateRequestBody, (error, data, response) => {
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
 **ordersExportCreateRequestBody** | [**OrdersExportCreateRequestBody**](OrdersExportCreateRequestBody.md)| Specify which order parameters you would like to export. | 

### Return type

[**OrdersExportCreateResponseBody**](OrdersExportCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrder

> OrdersGetResponseBody getOrder(orderId)

Get Order

Retrieve a specific order by passing its ID.

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

let apiInstance = new Voucherify.OrdersApi();
let orderId = "orderId_example"; // String | Unique Voucherify order ID or order source ID.
apiInstance.getOrder(orderId, (error, data, response) => {
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
 **orderId** | **String**| Unique Voucherify order ID or order source ID. | 

### Return type

[**OrdersGetResponseBody**](OrdersGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importOrders

> OrdersImportCreateResponseBody importOrders(ordersImportCreateRequestBodyItem)

Import Orders

  🚧 Historical orders  This endpoint should only be used to import historical orders into Voucherify. For on-going synchronization, the [update order](/api-reference/orders/update-order) endpoints should be used. This is critical because this endpoint does not store events or launch distributions. # Limitations ## Import volume There can be only a single on-going order import per tenant per project at a given time. The user can schedule more imports but those extra imports will be scheduled to run in sequence one by one.   ## Maximum count of orders in single import There is a 2000 limit but we might decide to change it to a lower / higher value at any given time depending if we find this value is too high or too low with time. # Notifications There are no notifications on the Dashboard because this import is launched via the API. # Triggered actions    If you import orders with customers, then a logic will be scheduled responsible for placing these customers into segments and refreshing the segments summary. Consequently, this update will trigger  - **customers entering into segments**  - **distributions** based on any rules tied to customer entering segment(s) - **earning rules** based on the customer entering segment(s) # What is not triggered 1. No webhooks are triggered during the import of orders - for both orders and upserted products / SKUs.   2. Distributions based on Order Update, Order Paid, Order Created and Order Cancelled. In other words if you have a distribution based on Order Paid and you import an order with a PAID status, the distribution is not going to be triggered.     3. No events are created during the import of orders - for both orders and upserted products / SKUs. In other words you wont see any events in the Activity tab in the Dashboard such as Order created or Order paid. If you are additionally upserting products / SKUs, then you wont see the Product created events listed, etc.    4. Earning rules based on Order Paid wont be triggered. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request with [GET Async Action](/api-reference/async-actions/get-async-action) endpoint.

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

let apiInstance = new Voucherify.OrdersApi();
let ordersImportCreateRequestBodyItem = [{"source_id":"orderImport14","status":"PAID","metadata":{"location_id":["L1","L2"],"payment_mean":["paypal","credit-card"]},"customer":{"source_id":"bob2.smith@email.com","name":"Bob Smith","description":"A nice customer","email":"bob.smith@email.com","phone":"+1 933 222 3333","address":{"city":"New York","country":"United States","line_1":"123 Main St.","line_2":"APT 3 BLG 4","postal_code":"10001","state":"NY"},"metadata":{"lang":"en","test":true},"birthdate":"2022-01-01"},"referrer":{"source_id":"jane.smith@email.com","name":"Jane Smith","description":"A really nice customer","email":"jane.smith@email.com","phone":"+1 933 222 3334","address":{"city":"New York","country":"United States","line_1":"123 Main St.","line_2":"APT 3 BLG 4","postal_code":"10001","state":"NY"},"metadata":{"lang":"en","test":false},"birthday":"2022-03-03"},"items":[{"source_id":"prod_1","related_object":"product","quantity":2,"product":{"name":"Apple iPhone 12","price":70000,"metadata":{"color":["silver"],"vendor":"mall"},"override":true}},{"source_id":"ComicBook_1","related_object":"sku","quantity":1,"product":{"source_id":"Books","name":"Comic Books1","price":1600,"metadata":{"color":["silver"],"vendor":"Bookstore1"},"override":true},"sku":{"sku":"Comics1","source_id":"ComicBook_1","price":1600,"metadata":{"color":["golden"],"vendor":"islands"},"override":true}}]},{"source_id":"orderImport15","status":"PAID","metadata":{"location_id":["L3"],"payment_mean":["wire-transfer"]},"customer":{"source_id":"bob2.smith@email.com"},"referrer":{"source_id":"jane.smith@email.com"},"items":[{"source_id":"ComicBook_1","quantity":4,"related_object":"sku","sku":{"source_id":"ComicBook_1"}},{"source_id":"vase_1","quantity":1,"related_object":"product","product":{"source_id":"vase_1"}}]},{"source_id":"orderImport16","status":"FULFILLED","metadata":{"location_id":["L3"],"payment_mean":["wire-transfer"]},"customer":{"id":"cust_LMY4ZylSdUYB1J4tzqNcl5VV"},"referrer":{"id":"cust_Vzck5i8U3OhcEUFY6MKhN9Rv"},"items":[{"product_id":"prod_0b72b0bd64d198e3ae","quantity":2},{"sku_id":"sku_0b1621b319d248b79f","quantity":2}]},{"source_id":"orderImport17","status":"CANCELED","amount":7000,"metadata":{"location_id":["L3"],"payment_mean":["wire-transfer"]}},{"source_id":"orderImport18","status":"CREATED","metadata":{"location_id":["L3"],"payment_mean":["wire-transfer"]},"items":[{"source_id":"ComicBook_1","amount":900,"related_object":"sku"},{"source_id":"vase_1","amount":2000,"related_object":"product"}]},{"source_id":"orderImport19","status":"CREATED","metadata":{"location_id":["L3"],"payment_mean":["wire-transfer"]},"items":[{"amount":900},{"amount":2000}]},{"source_id":"orderImport20","status":"CREATED","metadata":{"location_id":["L3"],"payment_mean":["wire-transfer"]},"items":[{"price":900,"quantity":2},{"price":2000,"quantity":3}]}]; // [OrdersImportCreateRequestBodyItem] | The request body is sent in the form of an array of order objects.
apiInstance.importOrders(ordersImportCreateRequestBodyItem, (error, data, response) => {
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
 **ordersImportCreateRequestBodyItem** | [**[OrdersImportCreateRequestBodyItem]**](OrdersImportCreateRequestBodyItem.md)| The request body is sent in the form of an array of order objects. | 

### Return type

[**OrdersImportCreateResponseBody**](OrdersImportCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listOrders

> OrdersListResponseBody listOrders(opts)

List Orders

Returns a list of orders. 

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

let apiInstance = new Voucherify.OrdersApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrderListOrders() // ParameterOrderListOrders | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
};
apiInstance.listOrders(opts, (error, data, response) => {
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
 **order** | [**ParameterOrderListOrders**](.md)| This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 

### Return type

[**OrdersListResponseBody**](OrdersListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrder

> OrdersUpdateResponseBody updateOrder(orderId, ordersUpdateRequestBody)

Update Order

Updates the specified order by setting the values of the parameters passed in the request body. Any parameters not provided will be left unchanged.

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

let apiInstance = new Voucherify.OrdersApi();
let orderId = "orderId_example"; // String | Unique Voucherify order ID or order source ID.
let ordersUpdateRequestBody = {"status":"CANCELED"}; // OrdersUpdateRequestBody | Specify the parameters of the order that are to be updated.
apiInstance.updateOrder(orderId, ordersUpdateRequestBody, (error, data, response) => {
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
 **orderId** | **String**| Unique Voucherify order ID or order source ID. | 
 **ordersUpdateRequestBody** | [**OrdersUpdateRequestBody**](OrdersUpdateRequestBody.md)| Specify the parameters of the order that are to be updated. | 

### Return type

[**OrdersUpdateResponseBody**](OrdersUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

