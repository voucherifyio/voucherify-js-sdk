# Voucherify.RedemptionsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRedemption**](RedemptionsApi.md#getRedemption) | **GET** /v1/redemptions/{redemptionId} | Get Redemption
[**getVoucherRedemptions**](RedemptionsApi.md#getVoucherRedemptions) | **GET** /v1/vouchers/{code}/redemption | Get Voucher&#39;s Redemptions
[**listRedemptions**](RedemptionsApi.md#listRedemptions) | **GET** /v1/redemptions | List Redemptions
[**redeemStackedDiscounts**](RedemptionsApi.md#redeemStackedDiscounts) | **POST** /v1/redemptions | Redeem Stackable Discounts
[**rollbackRedemption**](RedemptionsApi.md#rollbackRedemption) | **POST** /v1/redemptions/{redemptionId}/rollback | Rollback Redemption
[**rollbackStackedRedemptions**](RedemptionsApi.md#rollbackStackedRedemptions) | **POST** /v1/redemptions/{parentRedemptionId}/rollbacks | Rollback Stackable Redemptions



## getRedemption

> RedemptionsGetResponseBody getRedemption(redemptionId)

Get Redemption

Return a redemption or redemption rollback object. This object can either be a successfull or failed redemption or redemption rollback.

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

let apiInstance = new Voucherify.RedemptionsApi();
let redemptionId = "redemptionId_example"; // String | ID of previously created redemption.
apiInstance.getRedemption(redemptionId, (error, data, response) => {
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
 **redemptionId** | **String**| ID of previously created redemption. | 

### Return type

[**RedemptionsGetResponseBody**](RedemptionsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoucherRedemptions

> VouchersRedemptionGetResponseBody getVoucherRedemptions(code)

Get Voucher&#39;s Redemptions

Retrieve the number of times a voucher was redeemed and each of the redemption details.

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

let apiInstance = new Voucherify.RedemptionsApi();
let code = "code_example"; // String | A **code** that identifies the voucher.
apiInstance.getVoucherRedemptions(code, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher. | 

### Return type

[**VouchersRedemptionGetResponseBody**](VouchersRedemptionGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRedemptions

> RedemptionsListResponseBody listRedemptions(opts)

List Redemptions

Returns a list of redemptions previously created. The redemptions are returned in a sorted order, with the most recent redemptions appearing first. The response returns a list of redemptions of all vouchers.  # Filtering results The result can be narrowed according to specified (or default) filters, for example, you can sort redemptions by date: https://api.voucherify.io/v1/redemptions?limit 3&amp;[created_at][before] 2017-09-08T13:52:18.227Z. A filter based on the object created_at field narrows down the results and lists redemptions done before or after a particular date time. You can use the following options: [created_at][after], [created_at][before]. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z. # Failed Redemptions A redemption may fail for various reasons. You can figure out an exact reason from the failure_code: - resource_not_found - voucher with given code does not exist - voucher_not_active - voucher is not active yet (before start date) - voucher_expired - voucher has already expired (after expiration date) - voucher_disabled -  voucher has been disabled (active: false) - quantity_exceeded - vouchers redemptions limit has been exceeded - gift_amount_exceeded - gift amount has been exceeded - customer_rules_violated - customer did not match the segment - order_rules_violated - order did not match validation rules - invalid_order - order was specified incorrectly - invalid_amount - order amount was specified incorrectly - missing_amount - order amount was not specified - missing_order_items - order items were not specified - missing_customer - customer was not specified

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

let apiInstance = new Voucherify.RedemptionsApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1, the highest value is 99.
  'result': "result_example", // String | A filter on the list based on the redemption result. Available options are: SUCCESS, FAILURE. You can provide multiple values by repeating the param.
  'campaign': "campaign_example", // String | A filter by the campaign **name** that the redemption resources originate from.
  'customer': "customer_example", // String | Return redemptions performed by the customer with given id or source_id.
  'order': new Voucherify.ParameterOrderListRedemptions(), // ParameterOrderListRedemptions | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'createdAt': new Voucherify.ParameterCreatedBeforeAfter(), // ParameterCreatedBeforeAfter | A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
  'filters': new Voucherify.ParameterFiltersListRedemptions() // ParameterFiltersListRedemptions | Filters for listing responses.
};
apiInstance.listRedemptions(opts, (error, data, response) => {
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
 **page** | **Number**| Which page of results to return. The lowest value is 1, the highest value is 99. | [optional] 
 **result** | **String**| A filter on the list based on the redemption result. Available options are: SUCCESS, FAILURE. You can provide multiple values by repeating the param. | [optional] 
 **campaign** | **String**| A filter by the campaign **name** that the redemption resources originate from. | [optional] 
 **customer** | **String**| Return redemptions performed by the customer with given id or source_id. | [optional] 
 **order** | [**ParameterOrderListRedemptions**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **createdAt** | [**ParameterCreatedBeforeAfter**](.md)| A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z | [optional] 
 **filters** | [**ParameterFiltersListRedemptions**](.md)| Filters for listing responses. | [optional] 

### Return type

[**RedemptionsListResponseBody**](RedemptionsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## redeemStackedDiscounts

> RedemptionsRedeemResponseBody redeemStackedDiscounts(redemptionsRedeemRequestBody)

Redeem Stackable Discounts

# How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:   API keys with a Merchant role cant use this endpoint.  📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).      📘 Also available on client-side  This method is also accessible through public keys which you can use in client-side​ apps: mobile and web browser apps. Go to the dedicated [endpoint](/api-reference/client-side/redeem-stackable-discounts-client-side) to learn more.

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

let apiInstance = new Voucherify.RedemptionsApi();
let redemptionsRedeemRequestBody = {"redeemables":[{"object":"voucher","id":"BLCKFRDY"}],"order":{"amount":5500}}; // RedemptionsRedeemRequestBody | 
apiInstance.redeemStackedDiscounts(redemptionsRedeemRequestBody, (error, data, response) => {
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
 **redemptionsRedeemRequestBody** | [**RedemptionsRedeemRequestBody**](RedemptionsRedeemRequestBody.md)|  | 

### Return type

[**RedemptionsRedeemResponseBody**](RedemptionsRedeemResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rollbackRedemption

> RedemptionsRollbackCreateResponseBody rollbackRedemption(redemptionId, redemptionsRollbackCreateRequestBody, opts)

Rollback Redemption

Your business logic may include a case when you need to undo a redemption. You can revert a redemption by calling this API endpoint. This endpoint rolls back only single redemptions, meaning those that are not stacked. Stacked redemptions belong to a parent redemption. To roll back a parent redemption, including all of its individual redemptions, use the [POST Rollback Stackable Redemptions](/api-reference/redemptions/rollback-stackable-redemptions)  🚧  You can roll back a redemption up to 3 months back.   # Effect  The operation  - creates a rollback entry in vouchers redemption history (redemption.redemption_entries) and  - gives 1 redemption back to the pool (decreases redeemed_quantity by 1).  # Returned funds  In case of *gift card vouchers*, this method returns funds back according to the source redemption. In case of *loyalty card vouchers*, this method returns points back according to the source redemption.

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

let apiInstance = new Voucherify.RedemptionsApi();
let redemptionId = "redemptionId_example"; // String | The original redemption ID to be rolled back (undone).
let redemptionsRollbackCreateRequestBody = {"customer":{"id":"cust_SolpIN5N4oZbCnrxZ5NHrbVB","name":"Annie Lemons","email":"annie@lemon.com","phone":"+1 933 222 3334","birthday":"1900-12-02","birthdate":"1900-12-01","address":{"city":"New York","state":"NY","line_1":"123 Main St.","line_2":"APT 3 BLG 5","country":"United States","postal_code":"100012"},"metadata":{"age":23}},"order":{"source_id":"test_rollback_8"},"metadata":{"location_id":["L2"]}}; // RedemptionsRollbackCreateRequestBody | Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
let opts = {
  'reason': "reason_example", // String | Reason for the rollback.
  'trackingId': "trackingId_example" // String | Customers source_id.
};
apiInstance.rollbackRedemption(redemptionId, redemptionsRollbackCreateRequestBody, opts, (error, data, response) => {
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
 **redemptionId** | **String**| The original redemption ID to be rolled back (undone). | 
 **redemptionsRollbackCreateRequestBody** | [**RedemptionsRollbackCreateRequestBody**](RedemptionsRollbackCreateRequestBody.md)| Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body. | 
 **reason** | **String**| Reason for the rollback. | [optional] 
 **trackingId** | **String**| Customers source_id. | [optional] 

### Return type

[**RedemptionsRollbackCreateResponseBody**](RedemptionsRollbackCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rollbackStackedRedemptions

> RedemptionsRollbacksCreateResponseBody rollbackStackedRedemptions(parentRedemptionId, redemptionsRollbacksCreateRequestBody, opts)

Rollback Stackable Redemptions

Rollback a stackable redemption. When you roll back a stacked redemption, all child redemptions will be rolled back. Provide the parent redemption ID as the path parameter. However, you can use this endpoint to roll back a single redemption that does not have a parent, similarly to [POST Rollback redemption](/api-reference/redemptions/rollback-redemption). 🚧   You can roll back a redemption up to 3 months back.

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

let apiInstance = new Voucherify.RedemptionsApi();
let parentRedemptionId = "parentRedemptionId_example"; // String | Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm.
let redemptionsRollbacksCreateRequestBody = {"customer":{"id":"cust_SolpIN5N4oZbCnrxZ5NHrbVB","name":"Annie Lemons","email":"annie@lemon.com","phone":"+1 933 222 3334","birthday":"1900-12-02","birthdate":"1900-12-01","address":{"city":"New York","state":"NY","line_1":"123 Main St.","line_2":"APT 3 BLG 5","country":"United States","postal_code":"100012"},"metadata":{"age":23}},"order":{"source_id":"test_rollback_8"},"metadata":{"location_id":["L2"]}}; // RedemptionsRollbacksCreateRequestBody | Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body.
let opts = {
  'reason': "reason_example", // String | Reason for the rollback.
  'trackingId': "trackingId_example" // String | Customers source_id.
};
apiInstance.rollbackStackedRedemptions(parentRedemptionId, redemptionsRollbacksCreateRequestBody, opts, (error, data, response) => {
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
 **parentRedemptionId** | **String**| Unique identifier of a parent redemption, e.g. r_JQfm73zWSJFQxs3bGxweYjgm. | 
 **redemptionsRollbacksCreateRequestBody** | [**RedemptionsRollbacksCreateRequestBody**](RedemptionsRollbacksCreateRequestBody.md)| Add information about the original customer and order. Customer data and Redemption metadata can be updated in Voucherify when passing the customer data in the request body. | 
 **reason** | **String**| Reason for the rollback. | [optional] 
 **trackingId** | **String**| Customers source_id. | [optional] 

### Return type

[**RedemptionsRollbacksCreateResponseBody**](RedemptionsRollbacksCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

