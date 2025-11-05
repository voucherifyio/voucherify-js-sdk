# Voucherify.CampaignsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVoucherWithSpecificCodeToCampaign**](CampaignsApi.md#addVoucherWithSpecificCodeToCampaign) | **POST** /v1/campaigns/{campaignId}/vouchers/{code} | Add Voucher with Specific Code to Campaign
[**addVouchersToCampaign**](CampaignsApi.md#addVouchersToCampaign) | **POST** /v1/campaigns/{campaignId}/vouchers | Add Vouchers to Campaign
[**createCampaign**](CampaignsApi.md#createCampaign) | **POST** /v1/campaigns | Create Campaign
[**deleteCampaign**](CampaignsApi.md#deleteCampaign) | **DELETE** /v1/campaigns/{campaignId} | Delete Campaign
[**disableCampaign**](CampaignsApi.md#disableCampaign) | **POST** /v1/campaigns/{campaignId}/disable | Disable Campaign
[**enableCampaign**](CampaignsApi.md#enableCampaign) | **POST** /v1/campaigns/{campaignId}/enable | Enable Campaign
[**exportCampaignTransactions**](CampaignsApi.md#exportCampaignTransactions) | **POST** /v1/campaigns/{campaignId}/transactions/export | Export Campaign Transactions
[**getCampaign**](CampaignsApi.md#getCampaign) | **GET** /v1/campaigns/{campaignId} | Get Campaign
[**getCampaignSummary**](CampaignsApi.md#getCampaignSummary) | **GET** /v1/campaigns/{campaignId}/summary | Get Campaign Summary
[**importVouchersToCampaign**](CampaignsApi.md#importVouchersToCampaign) | **POST** /v1/campaigns/{campaignId}/import | Import Vouchers to Campaign
[**importVouchersToCampaignUsingCsv**](CampaignsApi.md#importVouchersToCampaignUsingCsv) | **POST** /v1/campaigns/{campaignId}/importCSV | Import Vouchers to Campaign by CSV
[**listCampaignTransactions**](CampaignsApi.md#listCampaignTransactions) | **GET** /v1/campaigns/{campaignId}/transactions | List Campaign Transactions
[**listCampaigns**](CampaignsApi.md#listCampaigns) | **GET** /v1/campaigns | List Campaigns
[**updateCampaign**](CampaignsApi.md#updateCampaign) | **PUT** /v1/campaigns/{campaignId} | Update Campaign



## addVoucherWithSpecificCodeToCampaign

> CampaignsVouchersCreateResponseBody addVoucherWithSpecificCodeToCampaign(campaignId, code, campaignsVouchersCreateRequestBody)

Add Voucher with Specific Code to Campaign

This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let code = "code_example"; // String | A custom **code** that identifies the voucher.
let campaignsVouchersCreateRequestBody = {"category_id":"cat_0bb81a481615a37b5e","start_date":"2022-09-24T00:00:00Z","expiration_date":"2022-09-25T23:59:59Z","active":false,"redemption":{"quantity":null},"additional_info":"Voucher added using API","metadata":{"Season":"Fall"}}; // CampaignsVouchersCreateRequestBody | Specify the voucher parameters that you would like to overwrite.
apiInstance.addVoucherWithSpecificCodeToCampaign(campaignId, code, campaignsVouchersCreateRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **code** | **String**| A custom **code** that identifies the voucher. | 
 **campaignsVouchersCreateRequestBody** | [**CampaignsVouchersCreateRequestBody**](CampaignsVouchersCreateRequestBody.md)| Specify the voucher parameters that you would like to overwrite. | 

### Return type

[**CampaignsVouchersCreateResponseBody**](CampaignsVouchersCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addVouchersToCampaign

> CampaignsVouchersCreateCombinedResponseBody addVouchersToCampaign(campaignId, campaignsVouchersCreateInBulkRequestBody, opts)

Add Vouchers to Campaign

This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let campaignsVouchersCreateInBulkRequestBody = new Voucherify.CampaignsVouchersCreateInBulkRequestBody(); // CampaignsVouchersCreateInBulkRequestBody | Specify the voucher parameters that you would like to overwrite.
let opts = {
  'vouchersCount': 56 // Number | Number of vouchers that should be added.
};
apiInstance.addVouchersToCampaign(campaignId, campaignsVouchersCreateInBulkRequestBody, opts, (error, data, response) => {
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
 **campaignId** | **String**| The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **campaignsVouchersCreateInBulkRequestBody** | [**CampaignsVouchersCreateInBulkRequestBody**](CampaignsVouchersCreateInBulkRequestBody.md)| Specify the voucher parameters that you would like to overwrite. | 
 **vouchersCount** | **Number**| Number of vouchers that should be added. | [optional] 

### Return type

[**CampaignsVouchersCreateCombinedResponseBody**](CampaignsVouchersCreateCombinedResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCampaign

> CampaignsCreateResponseBody createCampaign(campaignsCreateRequestBody)

Create Campaign

Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignsCreateRequestBody = {"name":"Discount Campaign 4","campaign_type":"DISCOUNT_COUPONS","join_once":true,"type":"AUTO_UPDATE","start_date":"2020-08-16T00:00:00Z","expiration_date":"2023-12-26T00:00:00Z","vouchers_count":3,"voucher":{"type":"DISCOUNT_VOUCHER","discount":{"percent_off":10,"type":"PERCENT"},"redemption":{"quantity":10},"code_config":{"pattern":"10OFF-#######"}},"validity_timeframe":{"interval":"P2D","duration":"P1D"},"validity_day_of_week":[0,1,2],"activity_duration_after_publishing":"P24D","use_voucher_metadata_schema":false,"metadata":{"region":"AMER"}}; // CampaignsCreateRequestBody | Specify the details of the campaign that you would like to create.
apiInstance.createCampaign(campaignsCreateRequestBody, (error, data, response) => {
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
 **campaignsCreateRequestBody** | [**CampaignsCreateRequestBody**](CampaignsCreateRequestBody.md)| Specify the details of the campaign that you would like to create. | 

### Return type

[**CampaignsCreateResponseBody**](CampaignsCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCampaign

> CampaignsDeleteResponseBody deleteCampaign(campaignId, opts)

Delete Campaign

Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let opts = {
  'force': true // Boolean | If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name.
};
apiInstance.deleteCampaign(campaignId, opts, (error, data, response) => {
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
 **campaignId** | **String**| You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **force** | **Boolean**| If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name. | [optional] 

### Return type

[**CampaignsDeleteResponseBody**](CampaignsDeleteResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disableCampaign

> Object disableCampaign(campaignId)

Disable Campaign

There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
apiInstance.disableCampaign(campaignId, (error, data, response) => {
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
 **campaignId** | **String**| The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 

### Return type

**Object**

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableCampaign

> Object enableCampaign(campaignId)

Enable Campaign

There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
apiInstance.enableCampaign(campaignId, (error, data, response) => {
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
 **campaignId** | **String**| The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value. | 

### Return type

**Object**

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportCampaignTransactions

> CampaignsTransactionsExportCreateResponseBody exportCampaignTransactions(campaignId, campaignsTransactionsExportCreateRequestBody)

Export Campaign Transactions

Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let campaignsTransactionsExportCreateRequestBody = {"order":"-created_at","parameters":{"fields":["id","type","source_id","created_at"],"filters":{"created_at":{"conditions":{"$after":["2024-10-01T00:00:00.000Z"]}}}}}; // CampaignsTransactionsExportCreateRequestBody | Specify the parameters for the transaction export.
apiInstance.exportCampaignTransactions(campaignId, campaignsTransactionsExportCreateRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **campaignsTransactionsExportCreateRequestBody** | [**CampaignsTransactionsExportCreateRequestBody**](CampaignsTransactionsExportCreateRequestBody.md)| Specify the parameters for the transaction export. | 

### Return type

[**CampaignsTransactionsExportCreateResponseBody**](CampaignsTransactionsExportCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCampaign

> CampaignsGetResponseBody getCampaign(campaignId)

Get Campaign

Retrieves the campaign with the given campaign ID or campaign name.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
apiInstance.getCampaign(campaignId, (error, data, response) => {
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
 **campaignId** | **String**| You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 

### Return type

[**CampaignsGetResponseBody**](CampaignsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCampaignSummary

> CampaignsSummaryGetResponseBody getCampaignSummary(campaignId, opts)

Get Campaign Summary

Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let opts = {
  'startDate': new Date("2013-10-20"), // Date | Timestamp representing the date which results must begin on. Represented in ISO 8601 format.
  'endDate': new Date("2013-10-20") // Date | Timestamp representing the date which results must end on. Represented in ISO 8601 format.
};
apiInstance.getCampaignSummary(campaignId, opts, (error, data, response) => {
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
 **campaignId** | **String**| You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **startDate** | **Date**| Timestamp representing the date which results must begin on. Represented in ISO 8601 format. | [optional] 
 **endDate** | **Date**| Timestamp representing the date which results must end on. Represented in ISO 8601 format. | [optional] 

### Return type

[**CampaignsSummaryGetResponseBody**](CampaignsSummaryGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importVouchersToCampaign

> CampaignsImportCreateResponseBody importVouchersToCampaign(campaignId, campaignsImportVoucherItem)

Import Vouchers to Campaign

Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let campaignsImportVoucherItem = [{"code":"CODE7","category":"First","redemption":{"quantity":1},"metadata":{"season":"Fall"},"additional_info":"secret-code1","active":true},{"code":"CODE8","category":"Second","redemption":{"quantity":18},"metadata":{"season":"Fall"},"additional_info":"secret-code1","active":true},{"code":"CODE9","redemption":{"quantity":4},"metadata":{"season":"Fall"},"additional_info":"secret-code1","active":true}]; // [CampaignsImportVoucherItem] | Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings.
apiInstance.importVouchersToCampaign(campaignId, campaignsImportVoucherItem, (error, data, response) => {
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
 **campaignId** | **String**| The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **campaignsImportVoucherItem** | [**[CampaignsImportVoucherItem]**](CampaignsImportVoucherItem.md)| Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings. | 

### Return type

[**CampaignsImportCreateResponseBody**](CampaignsImportCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## importVouchersToCampaignUsingCsv

> CampaignsImportCsvCreateResponseBody importVouchersToCampaignUsingCsv(campaignId, opts)

Import Vouchers to Campaign by CSV

Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
let opts = {
  'file': "/path/to/file" // File | File path.
};
apiInstance.importVouchersToCampaignUsingCsv(campaignId, opts, (error, data, response) => {
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
 **campaignId** | **String**| The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value. | 
 **file** | **File**| File path. | [optional] 

### Return type

[**CampaignsImportCsvCreateResponseBody**](CampaignsImportCsvCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## listCampaignTransactions

> CampaignsTransactionsListResponseBody listCampaignTransactions(campaignId, opts)

List Campaign Transactions

Retrieves all transactions for the campaign with the given campaign ID or campaign name. The id filter denotes the unique transaction identifier.  🚧  The endpoint works only for gift card and loyalty campaigns.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'order': new Voucherify.ParameterOrderListTransactions(), // ParameterOrderListTransactions | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'startingAfterId': "startingAfterId_example", // String | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
  'filters': new Voucherify.ParametersFiltersListCampaignTransactions() // ParametersFiltersListCampaignTransactions | Filters for listing responses.
};
apiInstance.listCampaignTransactions(campaignId, opts, (error, data, response) => {
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
 **campaignId** | **String**| You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **order** | [**ParameterOrderListTransactions**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **startingAfterId** | **String**| A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | [optional] 
 **filters** | [**ParametersFiltersListCampaignTransactions**](.md)| Filters for listing responses. | [optional] 

### Return type

[**CampaignsTransactionsListResponseBody**](CampaignsTransactionsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCampaigns

> CampaignsListResponseBody listCampaigns(opts)

List Campaigns

Retrieve a list of campaigns in a project.  The campaigns are returned sorted by creation date, with the most recent campaigns appearing first.   When you get a list of campaigns, you can optionally specify query parameters to customize the amount of campaigns returned per call using limit, which page of campaigns to return using page, sort the campaigns using the order query parameter and filter the results by the campaign_type. This method will return an error when trying to return a limit of more than 100 campaigns.

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

let apiInstance = new Voucherify.CampaignsApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'campaignType': new Voucherify.ParameterCampaignType(), // ParameterCampaignType | This attribute allows filtering by campaign type.
  'expand': new Voucherify.ParameterExpandListCampaigns(), // ParameterExpandListCampaigns | Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores.
  'campaignStatus': new Voucherify.ParameterCampaignStatusListCampaigns(), // ParameterCampaignStatusListCampaigns | Sorts the results by the status of the campaign.
  'isReferralCode': true, // Boolean | Sorts the results that are or are not referral campaigns.
  'order': new Voucherify.ParameterOrderListCampaigns(), // ParameterOrderListCampaigns | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'filters': new Voucherify.ParameterFiltersListCampaigns(), // ParameterFiltersListCampaigns | Filters the results by various campaign properties.
  'accessSettings': new Voucherify.ParameterCampaignsAccessSetttings() // ParameterCampaignsAccessSetttings | Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area.
};
apiInstance.listCampaigns(opts, (error, data, response) => {
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
 **campaignType** | [**ParameterCampaignType**](.md)| This attribute allows filtering by campaign type. | [optional] 
 **expand** | [**ParameterExpandListCampaigns**](.md)| Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores. | [optional] 
 **campaignStatus** | [**ParameterCampaignStatusListCampaigns**](.md)| Sorts the results by the status of the campaign. | [optional] 
 **isReferralCode** | **Boolean**| Sorts the results that are or are not referral campaigns. | [optional] 
 **order** | [**ParameterOrderListCampaigns**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **filters** | [**ParameterFiltersListCampaigns**](.md)| Filters the results by various campaign properties. | [optional] 
 **accessSettings** | [**ParameterCampaignsAccessSetttings**](.md)| Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area. | [optional] 

### Return type

[**CampaignsListResponseBody**](CampaignsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCampaign

> CampaignsUpdateResponseBody updateCampaign(campaignId, campaignsUpdateRequestBody)

Update Campaign

Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.

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

let apiInstance = new Voucherify.CampaignsApi();
let campaignId = "campaignId_example"; // String | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
let campaignsUpdateRequestBody = {"description":"New description"}; // CampaignsUpdateRequestBody | Specify the campaign parameters to be updated.
apiInstance.updateCampaign(campaignId, campaignsUpdateRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | 
 **campaignsUpdateRequestBody** | [**CampaignsUpdateRequestBody**](CampaignsUpdateRequestBody.md)| Specify the campaign parameters to be updated. | 

### Return type

[**CampaignsUpdateResponseBody**](CampaignsUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

