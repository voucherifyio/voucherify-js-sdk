# Voucherify.ValidationRulesApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createValidationRuleAssignment**](ValidationRulesApi.md#createValidationRuleAssignment) | **POST** /v1/validation-rules/{validationRuleId}/assignments | Create Validation Rules Assignments
[**createValidationRules**](ValidationRulesApi.md#createValidationRules) | **POST** /v1/validation-rules | Create Validation Rules
[**deleteValidationRuleAssignment**](ValidationRulesApi.md#deleteValidationRuleAssignment) | **DELETE** /v1/validation-rules/{validationRuleId}/assignments/{assignmentId} | Delete Validation Rule Assignment
[**deleteValidationRules**](ValidationRulesApi.md#deleteValidationRules) | **DELETE** /v1/validation-rules/{validationRuleId} | Delete Validation Rule
[**getValidationRule**](ValidationRulesApi.md#getValidationRule) | **GET** /v1/validation-rules/{validationRuleId} | Get Validation Rule
[**listValidationRuleAssignments**](ValidationRulesApi.md#listValidationRuleAssignments) | **GET** /v1/validation-rules/{validationRuleId}/assignments | List Validation Rule Assignments
[**listValidationRules**](ValidationRulesApi.md#listValidationRules) | **GET** /v1/validation-rules | List Validation Rules
[**listValidationRulesAssignments**](ValidationRulesApi.md#listValidationRulesAssignments) | **GET** /v1/validation-rules-assignments | List Validation Rules&#39; Assignment(s)
[**updateValidationRule**](ValidationRulesApi.md#updateValidationRule) | **PUT** /v1/validation-rules/{validationRuleId} | Update Validation Rule



## createValidationRuleAssignment

> ValidationRulesAssignmentsCreateResponseBody createValidationRuleAssignment(validationRuleId, validationRulesAssignmentsCreateRequestBody, opts)

Create Validation Rules Assignments

Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRuleId = "validationRuleId_example"; // String | Unique validation rule ID.
let validationRulesAssignmentsCreateRequestBody = {"voucher":"v_ssR6vhswwh5odSloN2Vc3O60w7aea018"}; // ValidationRulesAssignmentsCreateRequestBody | Specify the resource that you would like to assign the validation rule to.
let opts = {
  'force': true // Boolean | If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added.
};
apiInstance.createValidationRuleAssignment(validationRuleId, validationRulesAssignmentsCreateRequestBody, opts, (error, data, response) => {
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
 **validationRuleId** | **String**| Unique validation rule ID. | 
 **validationRulesAssignmentsCreateRequestBody** | [**ValidationRulesAssignmentsCreateRequestBody**](ValidationRulesAssignmentsCreateRequestBody.md)| Specify the resource that you would like to assign the validation rule to. | 
 **force** | **Boolean**| If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added. | [optional] 

### Return type

[**ValidationRulesAssignmentsCreateResponseBody**](ValidationRulesAssignmentsCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createValidationRules

> ValidationRulesCreateResponseBody createValidationRules(validationRulesCreateRequestBody)

Create Validation Rules

Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRulesCreateRequestBody = {"name":"Set of Validation Rules","error":{"message":"Your order does not meet at least one of the required criteria."},"applicable_to":{"included_all":false,"excluded":[{"object":"product","id":"prod_0bae45ffc7003ffc52","source_id":"second_product","effect":"APPLY_TO_EVERY"}],"included":[{"object":"product","id":"prod_0b72b00ffed198e344","source_id":null,"effect":"APPLY_TO_MOST_EXPENSIVE","quantity_limit":1},{"object":"products_collection","id":"pc_4ndRXAsTOzwSdHcQcxf489uU","source_id":null,"effect":"APPLY_TO_EVERY","quantity_limit":5}]},"rules":{"1":{"name":"order.metadata","property":"location","rules":{},"conditions":{"$is":["Santorini"]},"error":{"message":"Your order must be placed at one of our Santorini shops."}},"2":{"name":"custom_event.metadata","property":"test","rules":{},"conditions":{"$greater_than_or_equal":[1]}},"3":{"name":"order.items.every","rules":{"1":{"name":"order.items.metadata","property":"test","rules":{},"conditions":{"$greater_than_or_equal":[1]}}},"conditions":{"$is":[{"id":"<PROD_ID>","effect":"APPLY_TO_EVERY","object":"product","source_id":"<SOURCE_ID>"}]}},"logic":"1 or 2"}}; // ValidationRulesCreateRequestBody | Specify the validation rules parameters.
apiInstance.createValidationRules(validationRulesCreateRequestBody, (error, data, response) => {
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
 **validationRulesCreateRequestBody** | [**ValidationRulesCreateRequestBody**](ValidationRulesCreateRequestBody.md)| Specify the validation rules parameters. | 

### Return type

[**ValidationRulesCreateResponseBody**](ValidationRulesCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteValidationRuleAssignment

> deleteValidationRuleAssignment(validationRuleId, assignmentId)

Delete Validation Rule Assignment

This method deletes a validation rule assignment.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRuleId = "validationRuleId_example"; // String | A unique validation rule ID.
let assignmentId = "assignmentId_example"; // String | A unique validation rule assignment ID.
apiInstance.deleteValidationRuleAssignment(validationRuleId, assignmentId, (error, data, response) => {
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
 **validationRuleId** | **String**| A unique validation rule ID. | 
 **assignmentId** | **String**| A unique validation rule assignment ID. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteValidationRules

> deleteValidationRules(validationRuleId)

Delete Validation Rule

This method deletes a validation rule.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRuleId = "validationRuleId_example"; // String | A unique validation rule ID.
apiInstance.deleteValidationRules(validationRuleId, (error, data, response) => {
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
 **validationRuleId** | **String**| A unique validation rule ID. | 

### Return type

null (empty response body)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getValidationRule

> ValidationRulesGetResponseBody getValidationRule(validationRuleId)

Get Validation Rule

Retrieve the details of a validation rule.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRuleId = "validationRuleId_example"; // String | A unique validation rule ID.
apiInstance.getValidationRule(validationRuleId, (error, data, response) => {
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
 **validationRuleId** | **String**| A unique validation rule ID. | 

### Return type

[**ValidationRulesGetResponseBody**](ValidationRulesGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listValidationRuleAssignments

> ValidationRulesAssignmentsListResponseBody listValidationRuleAssignments(validationRuleId, opts)

List Validation Rule Assignments

Retrieve validation rule assignments for a specific validation rule.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRuleId = "validationRuleId_example"; // String | Unique validation rule ID.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrderListValidationRuleAssignments() // ParameterOrderListValidationRuleAssignments | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
};
apiInstance.listValidationRuleAssignments(validationRuleId, opts, (error, data, response) => {
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
 **validationRuleId** | **String**| Unique validation rule ID. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **page** | **Number**| Which page of results to return. The lowest value is 1. | [optional] 
 **order** | [**ParameterOrderListValidationRuleAssignments**](.md)| This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 

### Return type

[**ValidationRulesAssignmentsListResponseBody**](ValidationRulesAssignmentsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listValidationRules

> ValidationRulesListResponseBody listValidationRules(opts)

List Validation Rules

Retrieve validation rules.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'order': new Voucherify.ParameterOrderListValidationRules(), // ParameterOrderListValidationRules | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp representing the date and time which results must start on. Represented in ISO 8601 format.
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format.
};
apiInstance.listValidationRules(opts, (error, data, response) => {
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
 **order** | [**ParameterOrderListValidationRules**](.md)| This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **startDate** | **Date**| Timestamp representing the date and time which results must start on. Represented in ISO 8601 format. | [optional] 
 **endDate** | **Date**| Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | [optional] 

### Return type

[**ValidationRulesListResponseBody**](ValidationRulesListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listValidationRulesAssignments

> ValidationRulesAssignmentsListResponseBody listValidationRulesAssignments(opts)

List Validation Rules&#39; Assignment(s)

List all validation rules assignments or filter the results using the related object ID or the validation rule ID query parameters.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let opts = {
  'relatedObjectId': "relatedObjectId_example", // String | The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution.
  'rule': "rule_example", // String | Validation rule ID.
  'page': 56, // Number | Which page of results to return. The lowest value is 1.
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'order': "order_example" // String | Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order.
};
apiInstance.listValidationRulesAssignments(opts, (error, data, response) => {
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
 **relatedObjectId** | **String**| The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution. | [optional] 
 **rule** | **String**| Validation rule ID. | [optional] 
 **page** | **Number**| Which page of results to return. The lowest value is 1. | [optional] 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **order** | **String**| Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 

### Return type

[**ValidationRulesAssignmentsListResponseBody**](ValidationRulesAssignmentsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateValidationRule

> ValidationRulesUpdateResponseBody updateValidationRule(validationRuleId, validationRulesUpdateRequestBody)

Update Validation Rule

Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.

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

let apiInstance = new Voucherify.ValidationRulesApi();
let validationRuleId = "validationRuleId_example"; // String | A unique validation rule ID.
let validationRulesUpdateRequestBody = {"name":"Set of Validation Rules Updated","error":{"message":"Your orders do not meet at least one of the required criteria."},"applicable_to":{"included_all":false,"excluded":[{"object":"product","id":"prod_0bae45ffc7003ffccc","source_id":"second_product","effect":"APPLY_TO_EVERY"}],"included":[{"object":"product","id":"prod_0b72b00ffed198e333","source_id":null,"effect":"APPLY_TO_CHEAPEST","quantity_limit":1},{"object":"products_collection","id":"pc_4ndRXAsTOzwSdHcQcxf489uU","source_id":null,"effect":"APPLY_TO_EVERY","quantity_limit":5}]},"rules":{"1":{"name":"order.metadata","property":"place","rules":{},"conditions":{"$is":["Santorini"]},"error":{"message":"Your order must be placed at one of our Santorini shops on the beach."}},"2":{"name":"custom_event.metadata","property":"lining","rules":{},"conditions":{"$greater_than_or_equal":[1]}},"3":{"name":"order.items.every","rules":{"1":{"name":"order.items.metadata","property":"test","rules":{},"conditions":{"$greater_than_or_equal":[1]}}},"conditions":{"$is":[{"id":"<PRODs_ID>","effect":"APPLY_TO_EVERY","object":"product","source_id":"<SOURCEs_ID>"}]}},"logic":"1 and 2"}}; // ValidationRulesUpdateRequestBody | Specify the parameters to be updated.
apiInstance.updateValidationRule(validationRuleId, validationRulesUpdateRequestBody, (error, data, response) => {
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
 **validationRuleId** | **String**| A unique validation rule ID. | 
 **validationRulesUpdateRequestBody** | [**ValidationRulesUpdateRequestBody**](ValidationRulesUpdateRequestBody.md)| Specify the parameters to be updated. | 

### Return type

[**ValidationRulesUpdateResponseBody**](ValidationRulesUpdateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [X-Voucherify-OAuth](../README.md#X-Voucherify-OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

