# Voucherify.PromotionsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPromotionTierToCampaign**](PromotionsApi.md#addPromotionTierToCampaign) | **POST** /v1/promotions/{campaignId}/tiers | Add Promotion Tier to Campaign
[**createPromotionStack**](PromotionsApi.md#createPromotionStack) | **POST** /v1/promotions/{campaignId}/stacks | Create Promotion Stack
[**deletePromotionStack**](PromotionsApi.md#deletePromotionStack) | **DELETE** /v1/promotions/{campaignId}/stacks/{stackId} | Delete Promotion Stack
[**deletePromotionTier**](PromotionsApi.md#deletePromotionTier) | **DELETE** /v1/promotions/tiers/{promotionTierId} | Delete Promotion Tier
[**disablePromotionTier**](PromotionsApi.md#disablePromotionTier) | **POST** /v1/promotions/tiers/{promotionTierId}/disable | Disable Promotion Tier
[**enablePromotionTier**](PromotionsApi.md#enablePromotionTier) | **POST** /v1/promotions/tiers/{promotionTierId}/enable | Enable Promotion Tier
[**getPromotionStack**](PromotionsApi.md#getPromotionStack) | **GET** /v1/promotions/{campaignId}/stacks/{stackId} | Get Promotion Stack
[**getPromotionTier**](PromotionsApi.md#getPromotionTier) | **GET** /v1/promotions/tiers/{promotionTierId} | Get Promotion Tier
[**listAllPromotionStacks**](PromotionsApi.md#listAllPromotionStacks) | **GET** /v1/promotions/stacks | List Promotion Stacks
[**listPromotionStacksInCampaign**](PromotionsApi.md#listPromotionStacksInCampaign) | **GET** /v1/promotions/{campaignId}/stacks | List Promotion Stacks in Campaign
[**listPromotionTiers**](PromotionsApi.md#listPromotionTiers) | **GET** /v1/promotions/tiers | List Promotion Tiers
[**listPromotionTiersFromCampaign**](PromotionsApi.md#listPromotionTiersFromCampaign) | **GET** /v1/promotions/{campaignId}/tiers | List Promotion Tiers from Campaign
[**updatePromotionStack**](PromotionsApi.md#updatePromotionStack) | **PUT** /v1/promotions/{campaignId}/stacks/{stackId} | Update Promotion Stack
[**updatePromotionTier**](PromotionsApi.md#updatePromotionTier) | **PUT** /v1/promotions/tiers/{promotionTierId} | Update Promotion Tier



## addPromotionTierToCampaign

> PromotionsTiersCreateResponseBody addPromotionTierToCampaign(campaignId, promotionsTiersCreateRequestBody)

Add Promotion Tier to Campaign

This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | Unique campaign ID assigned by Voucherify.
let promotionsTiersCreateRequestBody = {"name":"Order more than $100","banner":"Order more than $100","action":{"discount":{"type":"AMOUNT","amount_off":3000,"effect":"APPLY_TO_ORDER"}},"metadata":{},"active":true,"start_date":"2022-09-21T00:00:00.000Z","expiration_date":"2022-09-30T00:00:00.000Z","validity_timeframe":{"interval":"P2D","duration":"P1D"},"validity_day_of_week":[1,2,3,4],"validation_rules":["val_q8qUBMOh5qIQ"]}; // PromotionsTiersCreateRequestBody | Specify the promotion tier parameters.
apiInstance.addPromotionTierToCampaign(campaignId, promotionsTiersCreateRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| Unique campaign ID assigned by Voucherify. | 
 **promotionsTiersCreateRequestBody** | [**PromotionsTiersCreateRequestBody**](PromotionsTiersCreateRequestBody.md)| Specify the promotion tier parameters. | 

### Return type

[**PromotionsTiersCreateResponseBody**](PromotionsTiersCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPromotionStack

> PromotionsStacksCreateResponseBody createPromotionStack(campaignId, promotionsStacksCreateRequestBody)

Create Promotion Stack

This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | Unique campaign ID.
let promotionsStacksCreateRequestBody = {"name":"Fifth Stack","tiers":{"ids":["promo_aaAF8mVAzA0PF1igia2OC63d","promo_t9zdL6XMFk7B8fQ23zxELtdE","promo_dJNhAEeV5sR5oPQq1UrUdnMC"],"hierarchy_mode":"MANUAL"}}; // PromotionsStacksCreateRequestBody | Specify the order of promotion tiers for the promotion stack.
apiInstance.createPromotionStack(campaignId, promotionsStacksCreateRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| Unique campaign ID. | 
 **promotionsStacksCreateRequestBody** | [**PromotionsStacksCreateRequestBody**](PromotionsStacksCreateRequestBody.md)| Specify the order of promotion tiers for the promotion stack. | 

### Return type

[**PromotionsStacksCreateResponseBody**](PromotionsStacksCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePromotionStack

> deletePromotionStack(campaignId, stackId)

Delete Promotion Stack

This method deletes a promotion stack.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
let stackId = "stackId_example"; // String | Promotion stack ID.
apiInstance.deletePromotionStack(campaignId, stackId, (error, data, response) => {
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
 **campaignId** | **String**| ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign.  | 
 **stackId** | **String**| Promotion stack ID. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePromotionTier

> deletePromotionTier(promotionTierId)

Delete Promotion Tier

This method deletes a promotion tier.

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

let apiInstance = new Voucherify.PromotionsApi();
let promotionTierId = "promotionTierId_example"; // String | Unique promotion tier ID.
apiInstance.deletePromotionTier(promotionTierId, (error, data, response) => {
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
 **promotionTierId** | **String**| Unique promotion tier ID. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## disablePromotionTier

> PromotionsTiersDisableResponseBody disablePromotionTier(promotionTierId)

Disable Promotion Tier

This method disables a promotion tier, i.e. makes the active parameter   false.

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

let apiInstance = new Voucherify.PromotionsApi();
let promotionTierId = "promotionTierId_example"; // String | Unique promotion tier ID.
apiInstance.disablePromotionTier(promotionTierId, (error, data, response) => {
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
 **promotionTierId** | **String**| Unique promotion tier ID. | 

### Return type

[**PromotionsTiersDisableResponseBody**](PromotionsTiersDisableResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enablePromotionTier

> PromotionsTiersEnableResponseBody enablePromotionTier(promotionTierId)

Enable Promotion Tier

This method enables a promotion tier, i.e. makes the active parameter   true.

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

let apiInstance = new Voucherify.PromotionsApi();
let promotionTierId = "promotionTierId_example"; // String | Unique promotion tier ID.
apiInstance.enablePromotionTier(promotionTierId, (error, data, response) => {
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
 **promotionTierId** | **String**| Unique promotion tier ID. | 

### Return type

[**PromotionsTiersEnableResponseBody**](PromotionsTiersEnableResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPromotionStack

> PromotionsStacksGetResponseBody getPromotionStack(campaignId, stackId)

Get Promotion Stack

This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
let stackId = "stackId_example"; // String | Promotion stack ID.
apiInstance.getPromotionStack(campaignId, stackId, (error, data, response) => {
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
 **campaignId** | **String**| ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign.  | 
 **stackId** | **String**| Promotion stack ID. | 

### Return type

[**PromotionsStacksGetResponseBody**](PromotionsStacksGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPromotionTier

> PromotionsTiersGetResponseBody getPromotionTier(promotionTierId)

Get Promotion Tier

This method enables you to retrieve a specific promotion tier.

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

let apiInstance = new Voucherify.PromotionsApi();
let promotionTierId = "promotionTierId_example"; // String | Unique promotion tier ID.
apiInstance.getPromotionTier(promotionTierId, (error, data, response) => {
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
 **promotionTierId** | **String**| Unique promotion tier ID. | 

### Return type

[**PromotionsTiersGetResponseBody**](PromotionsTiersGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllPromotionStacks

> PromotionsStacksListResponseBody listAllPromotionStacks(opts)

List Promotion Stacks

This method enables you to list promotion stacks irrespective of the campaign they are associated with.  You can use filters in the query parameters to specify the stacks to be returned in the response. # Advanced filters for fetching promotion stacks  

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

let apiInstance = new Voucherify.PromotionsApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrderListAllPromotionStacks(), // ParameterOrderListAllPromotionStacks | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'createdAt': new Voucherify.ParameterCreatedBeforeAfter(), // ParameterCreatedBeforeAfter | A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
  'updatedAt': new Voucherify.ParameterUpdatedBeforeAfter() // ParameterUpdatedBeforeAfter | A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
};
apiInstance.listAllPromotionStacks(opts, (error, data, response) => {
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
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. | [optional] 
 **page** | **Number**| Which page of results to return. The lowest value is 1. | [optional] 
 **order** | [**ParameterOrderListAllPromotionStacks**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **createdAt** | [**ParameterCreatedBeforeAfter**](.md)| A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z | [optional] 
 **updatedAt** | [**ParameterUpdatedBeforeAfter**](.md)| A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z | [optional] 

### Return type

[**PromotionsStacksListResponseBody**](PromotionsStacksListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPromotionStacksInCampaign

> PromotionsStacksListResponseBody listPromotionStacksInCampaign(campaignId)

List Promotion Stacks in Campaign

This method enables you to list promotion stacks from a specified campaign.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | Unique campaign ID.
apiInstance.listPromotionStacksInCampaign(campaignId, (error, data, response) => {
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
 **campaignId** | **String**| Unique campaign ID. | 

### Return type

[**PromotionsStacksListResponseBody**](PromotionsStacksListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPromotionTiers

> PromotionsTiersListResponseBody listPromotionTiers(opts)

List Promotion Tiers

This method enables you to list promotion tiers.

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

let apiInstance = new Voucherify.PromotionsApi();
let opts = {
  'isAvailable': true, // Boolean | This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions.
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrderListPromotionTiers() // ParameterOrderListPromotionTiers | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
};
apiInstance.listPromotionTiers(opts, (error, data, response) => {
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
 **isAvailable** | **Boolean**| This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions. | [optional] 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. | [optional] 
 **page** | **Number**| Which page of results to return. The lowest value is 1. | [optional] 
 **order** | [**ParameterOrderListPromotionTiers**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 

### Return type

[**PromotionsTiersListResponseBody**](PromotionsTiersListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPromotionTiersFromCampaign

> PromotionsTiersListResponseBody listPromotionTiersFromCampaign(campaignId)

List Promotion Tiers from Campaign

This method enables you to list promotion tiers from a specified campaign.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | Unique campaign ID assigned by Voucherify.
apiInstance.listPromotionTiersFromCampaign(campaignId, (error, data, response) => {
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
 **campaignId** | **String**| Unique campaign ID assigned by Voucherify. | 

### Return type

[**PromotionsTiersListResponseBody**](PromotionsTiersListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePromotionStack

> PromotionsStacksUpdateResponseBody updatePromotionStack(campaignId, stackId, promotionsStacksUpdateRequestBody)

Update Promotion Stack

This methods allows for editing an existing stack.

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

let apiInstance = new Voucherify.PromotionsApi();
let campaignId = "campaignId_example"; // String | ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
let stackId = "stackId_example"; // String | Promotion stack ID.
let promotionsStacksUpdateRequestBody = {"name":"Fifth Stack Modified","tiers":{"ids":["promo_aaAF8mVAzA0PF1igia2OC63d","promo_t9zdL6XMFk7B8fQ23zxELtdE"],"hierarchy_mode":"MANUAL"}}; // PromotionsStacksUpdateRequestBody | Specify the promotion stack parameters that you would like to update.
apiInstance.updatePromotionStack(campaignId, stackId, promotionsStacksUpdateRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign.  | 
 **stackId** | **String**| Promotion stack ID. | 
 **promotionsStacksUpdateRequestBody** | [**PromotionsStacksUpdateRequestBody**](PromotionsStacksUpdateRequestBody.md)| Specify the promotion stack parameters that you would like to update. | 

### Return type

[**PromotionsStacksUpdateResponseBody**](PromotionsStacksUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePromotionTier

> PromotionsTiersUpdateResponseBody updatePromotionTier(promotionTierId, promotionsTiersUpdateRequestBody)

Update Promotion Tier

This method updates a promotion tier.

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

let apiInstance = new Voucherify.PromotionsApi();
let promotionTierId = "promotionTierId_example"; // String | Unique promotion tier ID.
let promotionsTiersUpdateRequestBody = {"name":"Order more than $100 USD","banner":"Order more than $100 USD","action":{"discount":{"type":"PERCENT","percent_off":25,"effect":"APPLY_TO_ORDER"}},"metadata":{"level":"A-21"},"hierarchy":1,"start_date":"2022-09-22T00:00:00.000Z","expiration_date":"2022-09-29T00:00:00.000Z","validity_timeframe":{"interval":"P3D","duration":"P2D"},"validity_day_of_week":[1,2,3]}; // PromotionsTiersUpdateRequestBody | Specify the promotion tier parameters that you would like to update.
apiInstance.updatePromotionTier(promotionTierId, promotionsTiersUpdateRequestBody, (error, data, response) => {
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
 **promotionTierId** | **String**| Unique promotion tier ID. | 
 **promotionsTiersUpdateRequestBody** | [**PromotionsTiersUpdateRequestBody**](PromotionsTiersUpdateRequestBody.md)| Specify the promotion tier parameters that you would like to update. | 

### Return type

[**PromotionsTiersUpdateResponseBody**](PromotionsTiersUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

