# Voucherify.LV2ExamineApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**examineEarningRules**](LV2ExamineApi.md#examineEarningRules) | **POST** /v2/loyalties/examine/earning-rules | Examine earning rules
[**examineRewards**](LV2ExamineApi.md#examineRewards) | **POST** /v2/loyalties/examine/rewards | Examine rewards



## examineEarningRules

> LoyaltiesExamineEarningRulesExamineResponseBody examineEarningRules(loyaltiesExamineEarningRulesExamineRequestBody)

Examine earning rules

Estimates earning opportunities for a customer without triggering any actual earning for loyalty v2 earning rules. The trigger selects whether all trigger events or one specific event is examined. When a specific event is selected, exactly one matching context object is required: customer_order_paid for customer.order.paid, customer_segment_entered for customer.segment.entered, and customer_custom_event for customer.custom_event. The other context objects must not be present. This endpoint can examine earning rules for all loyalty programs the customer belongs to by using customer_identification with customer_id or customer_source_id. To examine earning rules only for one program, use member_id in customer_identification, as member_id is loyalty program-specific. A customer who exists but has no active membership returns 200 with an empty memberships array.

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
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Voucherify.LV2ExamineApi();
let loyaltiesExamineEarningRulesExamineRequestBody = {"trigger":{"type":"ALL"},"customer_identification":{"type":"member_id","member_id":"lmbr_128f962dbc8c4ba5dc"},"customer_order_paid":{"customer":{"metadata":{"tier":"gold"}},"member":{"metadata":{"channel":"mobile"}},"order":{"amount":10000,"metadata":{"source":"pos"}}},"customer_segment_entered":{"customer":{"metadata":{"is_premium":"true","loyalty_score":10}}},"customer_custom_event":{"type":"ALL","all":{"customer":{"metadata":{"plan":"pro"}},"custom_event":{"metadata":{"source":"mobile","score":40}}}}}; // LoyaltiesExamineEarningRulesExamineRequestBody | 
apiInstance.examineEarningRules(loyaltiesExamineEarningRulesExamineRequestBody, (error, data, response) => {
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
 **loyaltiesExamineEarningRulesExamineRequestBody** | [**LoyaltiesExamineEarningRulesExamineRequestBody**](LoyaltiesExamineEarningRulesExamineRequestBody.md)|  | 

### Return type

[**LoyaltiesExamineEarningRulesExamineResponseBody**](LoyaltiesExamineEarningRulesExamineResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## examineRewards

> LoyaltiesExamineRewardsExamineResponseBody examineRewards(loyaltiesExamineRewardsExamineRequestBody)

Examine rewards

Evaluates rewards assigned to a customers active Loyalty v2 program memberships. Applies temporary customer and member metadata overrides without updating stored data. Returns reward availability by card, including points costs and applicable unavailability reasons. Omits a reward when it is inactive, out of stock, has no matching cost, or the member has no card for that cost. This endpoint can examine rewards for all loyalty programs the customer belongs to by using customer_identification with customer_id or customer_source_id. To examine rewards only for one program, use member_id in customer_identification, as member_id is loyalty program-specific. A customer who exists but has no active membership returns 200 with an empty memberships array.

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
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Voucherify.LV2ExamineApi();
let loyaltiesExamineRewardsExamineRequestBody = new Voucherify.LoyaltiesExamineRewardsExamineRequestBody(); // LoyaltiesExamineRewardsExamineRequestBody | 
apiInstance.examineRewards(loyaltiesExamineRewardsExamineRequestBody, (error, data, response) => {
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
 **loyaltiesExamineRewardsExamineRequestBody** | [**LoyaltiesExamineRewardsExamineRequestBody**](LoyaltiesExamineRewardsExamineRequestBody.md)|  | 

### Return type

[**LoyaltiesExamineRewardsExamineResponseBody**](LoyaltiesExamineRewardsExamineResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

