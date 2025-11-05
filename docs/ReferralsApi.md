# Voucherify.ReferralsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**referralsAddHolders**](ReferralsApi.md#referralsAddHolders) | **POST** /v1/referrals/members/{memberId}/holders | Add Referral Code Holders
[**referralsAddHolders1**](ReferralsApi.md#referralsAddHolders1) | **POST** /v1/referrals/{campaignId}/members/{memberId}/holders | Add Referral Code Holders with Campaign ID
[**referralsCodeHolders**](ReferralsApi.md#referralsCodeHolders) | **GET** /v1/referrals/{campaignId}/members/{memberId}/holders | List Referral Code Holders with campaign ID
[**referralsCodeHolders1**](ReferralsApi.md#referralsCodeHolders1) | **GET** /v1/referrals/members/{memberId}/holders | List Referral Code Holders
[**referralsRemoveHolder**](ReferralsApi.md#referralsRemoveHolder) | **DELETE** /v1/referrals/members/{memberId}/holders/{holderId} | Remove Referral Card Holder
[**referralsRemoveHolder1**](ReferralsApi.md#referralsRemoveHolder1) | **DELETE** /v1/referrals/{campaignId}/members/{memberId}/holders/{holderId} | Remove Referral Card Holder with campaign ID



## referralsAddHolders

> ReferralsMembersHoldersCreateInBulkResponseBody referralsAddHolders(memberId, referralsMembersHoldersCreateInBulkRequestBody)

Add Referral Code Holders

Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.

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

let apiInstance = new Voucherify.ReferralsApi();
let memberId = "memberId_example"; // String | Unique referral code or its identifier.
let referralsMembersHoldersCreateInBulkRequestBody = {"holders":[{"source_id":"cst-prsn01","name":"Alex Doe","email":"alex-doe@your.domain.com","country":"England"},{"source_id":"cst-prsn02","name":"Alex Joe","email":"alex-joe@your.domain.com","country":"Wales"}],"metadata":{"influencer_code":true}}; // ReferralsMembersHoldersCreateInBulkRequestBody | Specify the customer data to be upserted as redeemable holders.
apiInstance.referralsAddHolders(memberId, referralsMembersHoldersCreateInBulkRequestBody, (error, data, response) => {
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
 **memberId** | **String**| Unique referral code or its identifier. | 
 **referralsMembersHoldersCreateInBulkRequestBody** | [**ReferralsMembersHoldersCreateInBulkRequestBody**](ReferralsMembersHoldersCreateInBulkRequestBody.md)| Specify the customer data to be upserted as redeemable holders. | 

### Return type

[**ReferralsMembersHoldersCreateInBulkResponseBody**](ReferralsMembersHoldersCreateInBulkResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## referralsAddHolders1

> ReferralsMembersHoldersCreateInBulkResponseBody referralsAddHolders1(campaignId, memberId, referralsMembersHoldersCreateInBulkRequestBody)

Add Referral Code Holders with Campaign ID

Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.

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

let apiInstance = new Voucherify.ReferralsApi();
let campaignId = "campaignId_example"; // String | Unique identifier of a referral program campaign.
let memberId = "memberId_example"; // String | Unique referral code or its identifier.
let referralsMembersHoldersCreateInBulkRequestBody = {"holders":[{"source_id":"cst-prsn01","name":"Alex Doe","email":"alex-doe@your.domain.com","country":"England"},{"source_id":"cst-prsn02","name":"Alex Joe","email":"alex-joe@your.domain.com","country":"Wales"}],"metadata":{"influencer_code":true}}; // ReferralsMembersHoldersCreateInBulkRequestBody | Specify the customer data to be upserted as redeemable holders.
apiInstance.referralsAddHolders1(campaignId, memberId, referralsMembersHoldersCreateInBulkRequestBody, (error, data, response) => {
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
 **campaignId** | **String**| Unique identifier of a referral program campaign. | 
 **memberId** | **String**| Unique referral code or its identifier. | 
 **referralsMembersHoldersCreateInBulkRequestBody** | [**ReferralsMembersHoldersCreateInBulkRequestBody**](ReferralsMembersHoldersCreateInBulkRequestBody.md)| Specify the customer data to be upserted as redeemable holders. | 

### Return type

[**ReferralsMembersHoldersCreateInBulkResponseBody**](ReferralsMembersHoldersCreateInBulkResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## referralsCodeHolders

> ReferralsMembersHoldersListResponseBody referralsCodeHolders(campaignId, memberId, opts)

List Referral Code Holders with campaign ID

Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)

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

let apiInstance = new Voucherify.ReferralsApi();
let campaignId = "campaignId_example"; // String | Unique identifier of a referral program campaign.
let memberId = "memberId_example"; // String | Unique referral code or its identifier.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'order': new Voucherify.ParameterOrderListRedeemables(), // ParameterOrderListRedeemables | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'startingAfterId': "startingAfterId_example", // String | A cursor for pagination. It retrieves the events starting after an event with the given ID.
  'filters': new Voucherify.ParameterFiltersListReferralsRedeemableHolders() // ParameterFiltersListReferralsRedeemableHolders | Filters for listing customer redeemables.
};
apiInstance.referralsCodeHolders(campaignId, memberId, opts, (error, data, response) => {
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
 **campaignId** | **String**| Unique identifier of a referral program campaign. | 
 **memberId** | **String**| Unique referral code or its identifier. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **order** | [**ParameterOrderListRedeemables**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **startingAfterId** | **String**| A cursor for pagination. It retrieves the events starting after an event with the given ID. | [optional] 
 **filters** | [**ParameterFiltersListReferralsRedeemableHolders**](.md)| Filters for listing customer redeemables. | [optional] 

### Return type

[**ReferralsMembersHoldersListResponseBody**](ReferralsMembersHoldersListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## referralsCodeHolders1

> ReferralsMembersHoldersListResponseBody referralsCodeHolders1(memberId, opts)

List Referral Code Holders

Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.

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

let apiInstance = new Voucherify.ReferralsApi();
let memberId = "memberId_example"; // String | Unique referral code or its identifier.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'order': new Voucherify.ParameterOrderListRedeemables(), // ParameterOrderListRedeemables | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'startingAfterId': "startingAfterId_example", // String | A cursor for pagination. It retrieves the events starting after an event with the given ID.
  'filters': new Voucherify.ParameterFiltersListReferralsRedeemableHolders() // ParameterFiltersListReferralsRedeemableHolders | Filters for listing customer redeemables.
};
apiInstance.referralsCodeHolders1(memberId, opts, (error, data, response) => {
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
 **memberId** | **String**| Unique referral code or its identifier. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **order** | [**ParameterOrderListRedeemables**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **startingAfterId** | **String**| A cursor for pagination. It retrieves the events starting after an event with the given ID. | [optional] 
 **filters** | [**ParameterFiltersListReferralsRedeemableHolders**](.md)| Filters for listing customer redeemables. | [optional] 

### Return type

[**ReferralsMembersHoldersListResponseBody**](ReferralsMembersHoldersListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## referralsRemoveHolder

> referralsRemoveHolder(memberId, holderId)

Remove Referral Card Holder

Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.

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

let apiInstance = new Voucherify.ReferralsApi();
let memberId = "memberId_example"; // String | Unique referral code or its identifier.
let holderId = "holderId_example"; // String | Unique identifier of a redeemable holder.
apiInstance.referralsRemoveHolder(memberId, holderId, (error, data, response) => {
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
 **memberId** | **String**| Unique referral code or its identifier. | 
 **holderId** | **String**| Unique identifier of a redeemable holder. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## referralsRemoveHolder1

> referralsRemoveHolder1(campaignId, memberId, holderId)

Remove Referral Card Holder with campaign ID

Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)

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

let apiInstance = new Voucherify.ReferralsApi();
let campaignId = "campaignId_example"; // String | Unique identifier of a referral program campaign.
let memberId = "memberId_example"; // String | Unique referral code or its identifier.
let holderId = "holderId_example"; // String | Unique identifier of a redeemable holder.
apiInstance.referralsRemoveHolder1(campaignId, memberId, holderId, (error, data, response) => {
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
 **campaignId** | **String**| Unique identifier of a referral program campaign. | 
 **memberId** | **String**| Unique referral code or its identifier. | 
 **holderId** | **String**| Unique identifier of a redeemable holder. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

