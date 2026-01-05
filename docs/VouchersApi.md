# Voucherify.VouchersApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoucher**](VouchersApi.md#createVoucher) | **POST** /v1/vouchers/{code} | Create Voucher
[**deleteVoucher**](VouchersApi.md#deleteVoucher) | **DELETE** /v1/vouchers/{code} | Delete Voucher
[**disableVoucher**](VouchersApi.md#disableVoucher) | **POST** /v1/vouchers/{code}/disable | Disable Voucher
[**enableVoucher**](VouchersApi.md#enableVoucher) | **POST** /v1/vouchers/{code}/enable | Enable Voucher
[**exportVoucherTransactions**](VouchersApi.md#exportVoucherTransactions) | **POST** /v1/vouchers/{code}/transactions/export | Export Voucher Transactions
[**generateRandomCode**](VouchersApi.md#generateRandomCode) | **POST** /v1/vouchers | Generate Random Code
[**getVoucher**](VouchersApi.md#getVoucher) | **GET** /v1/vouchers/{code} | Get Voucher
[**importVouchers**](VouchersApi.md#importVouchers) | **POST** /v1/vouchers/import | Import Vouchers
[**importVouchersUsingCsv**](VouchersApi.md#importVouchersUsingCsv) | **POST** /v1/vouchers/importCSV | Import Vouchers using CSV
[**listVoucherTransactions**](VouchersApi.md#listVoucherTransactions) | **GET** /v1/vouchers/{code}/transactions | List Voucher Transactions
[**listVouchers**](VouchersApi.md#listVouchers) | **GET** /v1/vouchers | List Vouchers
[**releaseValidationSession**](VouchersApi.md#releaseValidationSession) | **DELETE** /v1/vouchers/{code}/sessions/{sessionKey} | Release Validation Session
[**updateVoucher**](VouchersApi.md#updateVoucher) | **PUT** /v1/vouchers/{code} | Update Voucher
[**updateVoucherBalance**](VouchersApi.md#updateVoucherBalance) | **POST** /v1/vouchers/{code}/balance | Adjust Voucher Balance
[**updateVouchersInBulk**](VouchersApi.md#updateVouchersInBulk) | **POST** /v1/vouchers/bulk/async | Update Vouchers in Bulk
[**updateVouchersMetadataInBulk**](VouchersApi.md#updateVouchersMetadataInBulk) | **POST** /v1/vouchers/metadata/async | Update Vouchers&#39; Metadata in Bulk



## createVoucher

> VouchersCreateResponseBody createVoucher(code, vouchersCreateWithSpecificCodeRequestBody)

Create Voucher

Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A unique **code** that identifies the voucher.
let vouchersCreateWithSpecificCodeRequestBody = {"category":"New Customers","type":"DISCOUNT_VOUCHER","discount":{"percent_off":10,"type":"PERCENT","effect":"APPLY_TO_ORDER"},"start_date":"2022-01-01T00:00:00Z","expiration_date":"2022-12-31T23:59:59Z","validity_timeframe":{"duration":"PT1H","interval":"P2D"},"validity_day_of_week":[1,2,3,4,5],"active":false,"additional_info":"This voucher will remain inactive until enabled.","redemption":{"quantity":10},"metadata":{"test":true,"locale":"de-en"},"validation_rules":["val_4j7DCRm2IS59"]}; // VouchersCreateWithSpecificCodeRequestBody | Specify the details of the voucher that you would like to create.
apiInstance.createVoucher(code, vouchersCreateWithSpecificCodeRequestBody, (error, data, response) => {
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
 **code** | **String**| A unique **code** that identifies the voucher. | 
 **vouchersCreateWithSpecificCodeRequestBody** | [**VouchersCreateWithSpecificCodeRequestBody**](VouchersCreateWithSpecificCodeRequestBody.md)| Specify the details of the voucher that you would like to create. | 

### Return type

[**VouchersCreateResponseBody**](VouchersCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVoucher

> deleteVoucher(code, opts)

Delete Voucher

Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A unique **code** that identifies the voucher.
let opts = {
  'force': true // Boolean | If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code.
};
apiInstance.deleteVoucher(code, opts, (error, data, response) => {
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
 **code** | **String**| A unique **code** that identifies the voucher. | 
 **force** | **Boolean**| If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code. | [optional] 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## disableVoucher

> VouchersDisableResponseBody disableVoucher(code)

Disable Voucher

There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
apiInstance.disableVoucher(code, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | 

### Return type

[**VouchersDisableResponseBody**](VouchersDisableResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableVoucher

> VouchersEnableResponseBody enableVoucher(code)

Enable Voucher

There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
apiInstance.enableVoucher(code, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | 

### Return type

[**VouchersEnableResponseBody**](VouchersEnableResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportVoucherTransactions

> VouchersTransactionsExportCreateResponseBody exportVoucherTransactions(code, vouchersTransactionsExportCreateRequestBody)

Export Voucher Transactions

Export transactions that are associated with credit movements on a gift card or loyalty card.   

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

let apiInstance = new Voucherify.VouchersApi();
let code = "GIFT-CARD-1"; // String | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
let vouchersTransactionsExportCreateRequestBody = {"parameters":{"order":"-created_at","fields":["id","type","source_id","reason","balance","amount","created_at","voucher_id","campaign_id","details","source"]}}; // VouchersTransactionsExportCreateRequestBody | Specify the parameters for the camapign transaction export.
apiInstance.exportVoucherTransactions(code, vouchersTransactionsExportCreateRequestBody, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | 
 **vouchersTransactionsExportCreateRequestBody** | [**VouchersTransactionsExportCreateRequestBody**](VouchersTransactionsExportCreateRequestBody.md)| Specify the parameters for the camapign transaction export. | 

### Return type

[**VouchersTransactionsExportCreateResponseBody**](VouchersTransactionsExportCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateRandomCode

> VouchersCreateResponseBody generateRandomCode(vouchersCreateRequestBody)

Generate Random Code

Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.

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

let apiInstance = new Voucherify.VouchersApi();
let vouchersCreateRequestBody = {"category":"New Customers","code":"NEW-WELCOME-COUPON","type":"DISCOUNT_VOUCHER","campaign_id":"camp_Y6dLsYIZloGqP8izufXY6SSJ","discount":{"percent_off":10,"type":"PERCENT","effect":"APPLY_TO_ORDER"},"start_date":"2016-01-01T00:00:00Z","expiration_date":"2022-12-31T23:59:59Z","validity_timeframe":{"duration":"PT1H","interval":"P2D"},"validity_day_of_week":[1,2,3,4,5],"active":false,"additional_info":"This voucher will remain inactive until enabled.","redemption":{"quantity":10},"metadata":{"test":true,"locale":"de-en"},"validation_rules":["val_4j7DCRm2IS59"]}; // VouchersCreateRequestBody | Specify the details of the voucher that you would like to create.
apiInstance.generateRandomCode(vouchersCreateRequestBody, (error, data, response) => {
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
 **vouchersCreateRequestBody** | [**VouchersCreateRequestBody**](VouchersCreateRequestBody.md)| Specify the details of the voucher that you would like to create. | 

### Return type

[**VouchersCreateResponseBody**](VouchersCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getVoucher

> VouchersGetResponseBody getVoucher(code)

Get Voucher

Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A unique **code** that identifies the voucher.
apiInstance.getVoucher(code, (error, data, response) => {
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
 **code** | **String**| A unique **code** that identifies the voucher. | 

### Return type

[**VouchersGetResponseBody**](VouchersGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importVouchers

> VouchersImportCreateResponseBody importVouchers(vouchersImportCreateItemRequestBody)

Import Vouchers

Import generic (standalone) vouchers and gift cards into the repository. You can upload up to 100,000 codes to a campaign, as a campaign can have up to 100,000 codes by default.   Also, the request can include up to **10 MB** of data.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.

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

let apiInstance = new Voucherify.VouchersApi();
let vouchersImportCreateItemRequestBody = [{"code":"PROMO-CODE30OFF-NO-EFFECT","category":"new customer acquisition","type":"DISCOUNT_VOUCHER","active":true,"discount":{"amount_off":3000,"type":"AMOUNT"},"start_date":"2020-12-01T23:00:00Z","expiration_date":"2023-12-19T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code1"},{"code":"PROMO-CODE30-PERCENT-NO-EFFECT","type":"DISCOUNT_VOUCHER","active":false,"discount":{"percent_off":30,"type":"PERCENT"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"GIFT-CARD-100","type":"GIFT_VOUCHER","active":true,"category":"new customer acquisition","gift":{"amount":10000},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":5},"metadata":{"unit":"EUR"},"additional_info":"secret-GIFT-code2"},{"code":"PROMO-CODE1-PERCENT-EFFECT-ORDER","type":"DISCOUNT_VOUCHER","active":false,"discount":{"percent_off":30,"type":"PERCENT","effect":"APPLY_TO_ORDER"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE2-PERCENT-EFFECT-ITEM","type":"DISCOUNT_VOUCHER","active":false,"discount":{"percent_off":30,"type":"PERCENT","effect":"APPLY_TO_ITEMS"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE1-PERCENT-NO-EFFECT-REDEEMED-QUANTITY-ATTRIBUTE-DOESNT-GET-PASSED","type":"DISCOUNT_VOUCHER","active":false,"discount":{"percent_off":30,"type":"PERCENT"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1,"redeemed_quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE1-AMOUNT-EFFECT-ITEMS-PROPORTIONALLY","type":"DISCOUNT_VOUCHER","active":false,"discount":{"amount_off":30,"type":"AMOUNT","effect":"APPLY_TO_ITEMS_PROPORTIONALLY"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE1-FIXED-EFFECT-ORDER","type":"DISCOUNT_VOUCHER","active":false,"discount":{"fixed_amount":30,"type":"FIXED","effect":"APPLY_TO_ORDER"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE1-UNIT-SINGLE-ITEM-EFFECT-MISSING","type":"DISCOUNT_VOUCHER","active":false,"discount":{"unit_off":1,"unit_type":"prod_0a9f9aeddb019a42db","type":"UNIT","effect":"ADD_MISSING_ITEMS"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE2-UNIT-MULTIPLE-ITEMS","type":"DISCOUNT_VOUCHER","active":true,"discount":{"type":"UNIT","effect":"ADD_MANY_ITEMS","units":[{"unit_off":1,"unit_type":"prod_0a9f9aeddb019a42db","effect":"ADD_MISSING_ITEMS"},{"unit_off":1,"unit_type":"prod_0a9f9aeddb019a42db","effect":"ADD_NEW_ITEMS"}]},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"},{"code":"PROMO-CODE1-SHIPPING","type":"DISCOUNT_VOUCHER","active":false,"discount":{"type":"UNIT","unit_off":1,"unit_type":"prod_5h1pp1ng","effect":"ADD_MISSING_ITEMS"},"start_date":"2020-12-10T23:00:00Z","expiration_date":"2023-12-31T23:00:00Z","redemption":{"quantity":1},"metadata":{"unit":"EUR"},"additional_info":"secret-code2"}]; // [VouchersImportCreateItemRequestBody] | The request body is an array of objects. Each object contains details about a specific voucher. 
apiInstance.importVouchers(vouchersImportCreateItemRequestBody, (error, data, response) => {
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
 **vouchersImportCreateItemRequestBody** | [**[VouchersImportCreateItemRequestBody]**](VouchersImportCreateItemRequestBody.md)| The request body is an array of objects. Each object contains details about a specific voucher.  | 

### Return type

[**VouchersImportCreateResponseBody**](VouchersImportCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## importVouchersUsingCsv

> VouchersImportCsvCreateResponseBody importVouchersUsingCsv(opts)

Import Vouchers using CSV

Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object. You can upload up to 100,000 codes to a campaign, as a campaign can have up to 100,000 codes by default.   Also, the request can include a max. **10 MB** CSV file. You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.

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

let apiInstance = new Voucherify.VouchersApi();
let opts = {
  'file': "/path/to/file", // File | File path.
  'webhooksEnable': true // Boolean | Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings.
};
apiInstance.importVouchersUsingCsv(opts, (error, data, response) => {
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
 **file** | **File**| File path. | [optional] 
 **webhooksEnable** | **Boolean**| Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings. | [optional] 

### Return type

[**VouchersImportCsvCreateResponseBody**](VouchersImportCsvCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## listVoucherTransactions

> VouchersTransactionsListResponseBody listVoucherTransactions(code, opts)

List Voucher Transactions

List transactions that are associated with credit movements on a gift card or loyalty card.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'order': new Voucherify.ParameterOrderListTransactions(), // ParameterOrderListTransactions | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'startingAfterId': "startingAfterId_example" // String | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID.
};
apiInstance.listVoucherTransactions(code, opts, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **order** | [**ParameterOrderListTransactions**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **startingAfterId** | **String**| A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | [optional] 

### Return type

[**VouchersTransactionsListResponseBody**](VouchersTransactionsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVouchers

> VouchersListResponseBody listVouchers(opts)

List Vouchers

Returns a list of vouchers. By default, the vouchers are returned sorted by creation date, with the most recent vouchers appearing first. A maximum of 100 vouchers are returned in the response. When you get a list of vouchers, you can optionally specify query parameters to customize the number of vouchers returned per call using limit, which page of vouchers to return using page, sort the vouchers using the order query parameter and more. This method will return an error when trying to return a limit of more than 100 vouchers. 

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

let apiInstance = new Voucherify.VouchersApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1, the highest value is 99.
  'category': "category_example", // String | Limit search results to vouchers within the specified category.
  'campaignId': "campaignId_example", // String | Limit search results to vouchers within the specified campaign
  'customer': "customer_example", // String | A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters.
  'campaign': "campaign_example", // String | A unique campaign name, identifies the parent campaign.
  'createdAt': new Voucherify.ParameterCreatedBeforeAfter(), // ParameterCreatedBeforeAfter | A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z
  'updatedAt': new Voucherify.ParameterUpdatedBeforeAfter(), // ParameterUpdatedBeforeAfter | A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z
  'order': new Voucherify.ParameterOrderVouchers(), // ParameterOrderVouchers | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'code': "code_example", // String | 
  'ids': ["null"], // [String] | 
  'filters': {key: null} // Object | Object for setting voucher filters. Read [Advanced filters for fetching resources](/api-reference/listing#advanced-filters-for-fetching-resources) for filter examples.
};
apiInstance.listVouchers(opts, (error, data, response) => {
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
 **category** | **String**| Limit search results to vouchers within the specified category. | [optional] 
 **campaignId** | **String**| Limit search results to vouchers within the specified campaign | [optional] 
 **customer** | **String**| A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters. | [optional] 
 **campaign** | **String**| A unique campaign name, identifies the parent campaign. | [optional] 
 **createdAt** | [**ParameterCreatedBeforeAfter**](.md)| A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z | [optional] 
 **updatedAt** | [**ParameterUpdatedBeforeAfter**](.md)| A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z | [optional] 
 **order** | [**ParameterOrderVouchers**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **code** | **String**|  | [optional] 
 **ids** | [**[String]**](String.md)|  | [optional] 
 **filters** | [**Object**](.md)| Object for setting voucher filters. Read [Advanced filters for fetching resources](/api-reference/listing#advanced-filters-for-fetching-resources) for filter examples. | [optional] 

### Return type

[**VouchersListResponseBody**](VouchersListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## releaseValidationSession

> releaseValidationSession(code, sessionKey)

Release Validation Session

Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
let sessionKey = "ssn_yQGMTeKBSw8OOuFPwlBEjzGy8d8VA9Ts"; // String | A unique session identifier.
apiInstance.releaseValidationSession(code, sessionKey, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify. | 
 **sessionKey** | **String**| A unique session identifier. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateVoucher

> VouchersUpdateResponseBody updateVoucher(code, vouchersUpdateRequestBody)

Update Voucher

Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A unique **code** that identifies the voucher.
let vouchersUpdateRequestBody = {"category":"Second","type":"DISCOUNT_VOUCHER","discount":{"type":"PERCENT","percent_off":45,"percent_off_formula":"IF(ORDER_AMOUNT > 100;CUSTOMER_METADATA(\"age\");CUSTOMER_METADATA(\"age\") / 2)","amount_limit":1800,"effect":"APPLY_TO_ORDER"},"start_date":"2020-02-01T00:00:00Z","expiration_date":"2023-12-31T23:59:59Z","validity_timeframe":{"duration":"PT2H","interval":"P3D"},"validity_day_of_week":[0,1,2],"active":false,"additional_info":"This voucher can be used with other coupons. Please feel free to do so.","metadata":{"Season":"Winter"}}; // VouchersUpdateRequestBody | Specify the parameters to be updated.
apiInstance.updateVoucher(code, vouchersUpdateRequestBody, (error, data, response) => {
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
 **code** | **String**| A unique **code** that identifies the voucher. | 
 **vouchersUpdateRequestBody** | [**VouchersUpdateRequestBody**](VouchersUpdateRequestBody.md)| Specify the parameters to be updated. | 

### Return type

[**VouchersUpdateResponseBody**](VouchersUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVoucherBalance

> VouchersBalanceUpdateResponseBody updateVoucherBalance(code, vouchersBalanceUpdateRequestBody)

Adjust Voucher Balance

Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.

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

let apiInstance = new Voucherify.VouchersApi();
let code = "code_example"; // String | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
let vouchersBalanceUpdateRequestBody = {"amount":10000}; // VouchersBalanceUpdateRequestBody | Provide the amount to be added to/subtracted from the voucher.
apiInstance.updateVoucherBalance(code, vouchersBalanceUpdateRequestBody, (error, data, response) => {
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
 **code** | **String**| A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | 
 **vouchersBalanceUpdateRequestBody** | [**VouchersBalanceUpdateRequestBody**](VouchersBalanceUpdateRequestBody.md)| Provide the amount to be added to/subtracted from the voucher. | 

### Return type

[**VouchersBalanceUpdateResponseBody**](VouchersBalanceUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVouchersInBulk

> VouchersUpdateInBulkResponseBody updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody)

Update Vouchers in Bulk

Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

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

let apiInstance = new Voucherify.VouchersApi();
let vouchersUpdateInBulkItemRequestBody = [{"code":"example_code","metadata":{"lang":"en","test":false,"MetadataTest":"Update metadata","update_value":1,"next_update_date":"2022-11-11T09:00:00.000Z"}},{"code":"example_code2","metadata":{"lang":"pl","test":false,"MetadataTest":"Update metadata","update_value":2}}]; // [VouchersUpdateInBulkItemRequestBody] | List the codes to be updated with the metadata key/value pairs for that code.
apiInstance.updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody, (error, data, response) => {
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
 **vouchersUpdateInBulkItemRequestBody** | [**[VouchersUpdateInBulkItemRequestBody]**](VouchersUpdateInBulkItemRequestBody.md)| List the codes to be updated with the metadata key/value pairs for that code. | 

### Return type

[**VouchersUpdateInBulkResponseBody**](VouchersUpdateInBulkResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVouchersMetadataInBulk

> VouchersMetadataUpdateInBulkResponseBody updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody)

Update Vouchers&#39; Metadata in Bulk

Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

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

let apiInstance = new Voucherify.VouchersApi();
let vouchersMetadataUpdateInBulkRequestBody = {"codes":["PROMO-CODE810","PROMO-CODE726"],"metadata":{"lang":"en","authorized_internally":true}}; // VouchersMetadataUpdateInBulkRequestBody | List the codes of the vouchers you would like to update with the metadata key/value pairs.
apiInstance.updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody, (error, data, response) => {
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
 **vouchersMetadataUpdateInBulkRequestBody** | [**VouchersMetadataUpdateInBulkRequestBody**](VouchersMetadataUpdateInBulkRequestBody.md)| List the codes of the vouchers you would like to update with the metadata key/value pairs. | 

### Return type

[**VouchersMetadataUpdateInBulkResponseBody**](VouchersMetadataUpdateInBulkResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

