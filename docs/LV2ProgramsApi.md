# Voucherify.LV2ProgramsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateProgramMembers**](LV2ProgramsApi.md#batchCreateProgramMembers) | **POST** /v2/loyalties/programs/{programId}/members/batch | Batch create program members
[**createMemberOrderPayment**](LV2ProgramsApi.md#createMemberOrderPayment) | **POST** /v2/loyalties/programs/{programId}/members/{memberId}/orders/payments | Pay for order with points
[**createProgramMember**](LV2ProgramsApi.md#createProgramMember) | **POST** /v2/loyalties/programs/{programId}/members | Create program member
[**getProgramMember**](LV2ProgramsApi.md#getProgramMember) | **GET** /v2/loyalties/programs/{programId}/members/{memberId} | Get program member
[**getProgramMembership**](LV2ProgramsApi.md#getProgramMembership) | **GET** /v2/loyalties/programs/{programId}/memberships/{customerId} | Get program membership
[**listCardTransactions**](LV2ProgramsApi.md#listCardTransactions) | **GET** /v2/loyalties/programs/{programId}/members/{memberId}/cards/{cardId}/transactions | List card transactions
[**listMemberOrderPayments**](LV2ProgramsApi.md#listMemberOrderPayments) | **GET** /v2/loyalties/programs/{programId}/members/{memberId}/orders/payments | List member order payments
[**listMemberRewardPurchases**](LV2ProgramsApi.md#listMemberRewardPurchases) | **GET** /v2/loyalties/programs/{programId}/members/{memberId}/rewards/purchases | List member reward purchases
[**purchaseMemberReward**](LV2ProgramsApi.md#purchaseMemberReward) | **POST** /v2/loyalties/programs/{programId}/members/{memberId}/rewards/purchases | Purchase reward with points



## batchCreateProgramMembers

> LoyaltiesProgramsMembersCreateInBulkResponseBody batchCreateProgramMembers(programId, memberCreate)

Batch create program members

Schedules creation of program members from a JSON array and returns 202 with async_action_id. The program must exist, be ACTIVE, and be inside its validity window. The body isnt checked before that response. Entries are processed in batches of 100. The raw body must be at most 10 MB. Each entry uses the same fields as [Create program member](/api-reference/programs/create-program-member). A failed entry is skipped. Its report row sets created to false and explains the failure in error. Skipped cases include an invalid customer_identification, an unknown customer, an invalid status, a duplicate customer in the batch (Duplicate customer ID), a customer who is already a member (Member already exists), metadata that doesnt match the vl_member schema, and entries past the loyalty members plan limit. Successful entries enroll the customer and create a loyalty card for each card definition on the program. Report columns are identification_type, customer_id, customer_source_id, program_id, member_id, created, and error. An empty array or a null entry fails the async action with invalid_request_payload. A body that isnt a JSON array fails it with top_level_object_should_be_an_array. Use [Get async action](/api-reference/async-actions/get-async-action) to read the status and the report. You can also open the result from Audit log, [Background tasks](/analyze/audit-logs#background-tasks).

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program ID (format lprg_[a-f0-9]+).
let memberCreate = [{"customer_identification":{"type":"customer_id","customer_id":"cust_X07elh40iNWLujRmDNmBufxd"}},{"customer_identification":{"type":"customer_source_id","customer_source_id":"crm-1001"},"status":"ACTIVE"}]; // [MemberCreate] | 
apiInstance.batchCreateProgramMembers(programId, memberCreate, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program ID (format lprg_[a-f0-9]+). | 
 **memberCreate** | [**[MemberCreate]**](MemberCreate.md)|  | 

### Return type

[**LoyaltiesProgramsMembersCreateInBulkResponseBody**](LoyaltiesProgramsMembersCreateInBulkResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMemberOrderPayment

> LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBody createMemberOrderPayment(programId, memberId, loyaltiesProgramsMembersOrdersPaymentsCreateRequestBody)

Pay for order with points

Pays for an order with points from the members card. The amount and points come from the card definitions pay-with-points exchange ratio, limited by the order total, the card balance, card spending caps, and the optional payment_limit. The binding cap is returned as details.spending_cap. The program and member must be ACTIVE, and the program must be inside its validity window. The card must belong to the member. The card definition must have pay-with-points enabled and an exchange-ratio formula. The order must already exist, identified by id or source_id. Modes: - TRANSACTION (default): creates a PENDING order transaction and a PENDING card transaction. Returns 202. The same order can be paid again; each call creates a new transaction. - DRY_RUN: simulates the payment and doesnt create a transaction. Returns 200 with status SIMULATED.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Identifies the loyalty program (lprg_ followed by hexadecimal characters).
let memberId = "memberId_example"; // String | Identifies the program member (lmbr_[a-f0-9]+).
let loyaltiesProgramsMembersOrdersPaymentsCreateRequestBody = {"payment_limit":{"type":"CARD_BALANCE"},"mode":"TRANSACTION","card_id":"lcrd_128f962dbd8c4ba5e1","order":{"id":"ord_12b4cdf5f30c158825"}}; // LoyaltiesProgramsMembersOrdersPaymentsCreateRequestBody | 
apiInstance.createMemberOrderPayment(programId, memberId, loyaltiesProgramsMembersOrdersPaymentsCreateRequestBody, (error, data, response) => {
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
 **programId** | **String**| Identifies the loyalty program (lprg_ followed by hexadecimal characters). | 
 **memberId** | **String**| Identifies the program member (lmbr_[a-f0-9]+). | 
 **loyaltiesProgramsMembersOrdersPaymentsCreateRequestBody** | [**LoyaltiesProgramsMembersOrdersPaymentsCreateRequestBody**](LoyaltiesProgramsMembersOrdersPaymentsCreateRequestBody.md)|  | 

### Return type

[**LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBody**](LoyaltiesProgramsMembersOrdersPaymentsCreateCombinedResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProgramMember

> LoyaltiesProgramsMembersCreateResponseBody createProgramMember(programId, loyaltiesProgramsMembersCreateRequestBody)

Create program member

Enrolls an existing customer as a member of the loyalty program and creates a loyalty card for each card definition assigned to the program. Card code generation is asynchronous, so code can be null right after creation. The program must be ACTIVE and inside its validity window, and the customer must already exist. A customer can be a member of a program only once. Identify the customer with customer_identification. status defaults to ACTIVE.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program ID (format lprg_[a-f0-9]+).
let loyaltiesProgramsMembersCreateRequestBody = {"customer_identification":{"type":"customer_id","customer_id":"cust_X07elh40iNWLujRmDNmBufxd"}}; // LoyaltiesProgramsMembersCreateRequestBody | 
apiInstance.createProgramMember(programId, loyaltiesProgramsMembersCreateRequestBody, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program ID (format lprg_[a-f0-9]+). | 
 **loyaltiesProgramsMembersCreateRequestBody** | [**LoyaltiesProgramsMembersCreateRequestBody**](LoyaltiesProgramsMembersCreateRequestBody.md)|  | 

### Return type

[**LoyaltiesProgramsMembersCreateResponseBody**](LoyaltiesProgramsMembersCreateResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProgramMember

> MemberWithCards getProgramMember(programId, memberId)

Get program member

 &lt;Info&gt; &lt;Badge color gray&gt;Documentation in progress&lt;/Badge&gt; This documentation is in progress. The parameters, fields, request and response bodies, and other data may be subject to change. If you need more information or you want to share feedback, contact [Voucherify support](https://www.voucherify.io/contact-support) or your Technical Account Manager. &lt;/Info&gt; Returns one member of the program together with that members loyalty cards. Each card includes balance, lifetime_bucket, next_expiration, and next_activation. tier_progress is not included. Use [Get program membership](/api-reference/programs/get-program-membership) when you need tier progress. card.code can be null shortly after member creation, while code generation is still running. Returns 404 when the program doesnt exist, or when the member doesnt exist in that program. The program is checked first.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program ID (format lprg_[a-f0-9]+).
let memberId = "memberId_example"; // String | Program member ID (format lmbr_[a-f0-9]+).
apiInstance.getProgramMember(programId, memberId, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program ID (format lprg_[a-f0-9]+). | 
 **memberId** | **String**| Program member ID (format lmbr_[a-f0-9]+). | 

### Return type

[**MemberWithCards**](MemberWithCards.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProgramMembership

> LoyaltiesProgramsMembershipsGetResponseBody getProgramMembership(programId, customerId, opts)

Get program membership

Returns the membership for one customer in the program: the member, the program, and the members loyalty cards. A card includes tier_progress when its card definition has a tier structure and the member has a tier on that card. Otherwise tier_progress is omitted. identification_type chooses how customerId is read. It defaults to customer_id.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program ID (format lprg_[a-f0-9]+).
let customerId = "customerId_example"; // String | Unique identifier of the customer or member, interpreted according to identification_type: a Voucherify customer ID (cust_...), a customer source_id, or a loyalty member ID (lmbr_...).
let opts = {
  'identificationType': "'customer_id'" // String | Chooses how customerId is read. customer_id is the Voucherify customer ID and the default. customer_source_id is the customers source_id. member_id is the loyalty member ID.
};
apiInstance.getProgramMembership(programId, customerId, opts, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program ID (format lprg_[a-f0-9]+). | 
 **customerId** | **String**| Unique identifier of the customer or member, interpreted according to identification_type: a Voucherify customer ID (cust_...), a customer source_id, or a loyalty member ID (lmbr_...). | 
 **identificationType** | **String**| Chooses how customerId is read. customer_id is the Voucherify customer ID and the default. customer_source_id is the customers source_id. member_id is the loyalty member ID. | [optional] [default to &#39;customer_id&#39;]

### Return type

[**LoyaltiesProgramsMembershipsGetResponseBody**](LoyaltiesProgramsMembershipsGetResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCardTransactions

> LoyaltiesProgramsMembersCardsTransactionsListResponseBody listCardTransactions(programId, memberId, cardId, opts)

List card transactions

Returns a cursor-paginated list of transactions on the members card. Filter by id, card_definition_id, and created_at. Order by id (default -id, newest first). Returns 404 when the program, member, or card doesnt exist. The program is checked first, then the member, then the card. A member of another program, or a card that isnt assigned to this member, is not found.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program ID (format lprg_[a-f0-9]+).
let memberId = "memberId_example"; // String | Program member ID (format lmbr_[a-f0-9]+).
let cardId = "cardId_example"; // String | Loyalty card ID (format lcrd_[a-f0-9]+).
let opts = {
  'limit': 10, // Number | Maximum number of transactions to return. Must be between 1 and 100. Defaults to 10 when not provided.
  'order': new Voucherify.ListCardTransactionsOrderParameter(), // ListCardTransactionsOrderParameter | Orders results by transaction id. -id is newest first and the default. id is oldest first. An array that orders by id and -id together is rejected.
  'cursor': "cursor_example", // String | Pagination cursor returned in the cursor.next field of a previous response. Must match the pattern ^lcrsctx_[a-f0-9]+$.
  'filters': new Voucherify.LoyaltiesProgramsMembersCardsTransactionsListRequestQuery() // LoyaltiesProgramsMembersCardsTransactionsListRequestQuery | Field-specific filter conditions, passed as a deep object, e.g. filters[id][conditions][$is] lctx_0f5d0a8878caa3ee5c.
};
apiInstance.listCardTransactions(programId, memberId, cardId, opts, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program ID (format lprg_[a-f0-9]+). | 
 **memberId** | **String**| Program member ID (format lmbr_[a-f0-9]+). | 
 **cardId** | **String**| Loyalty card ID (format lcrd_[a-f0-9]+). | 
 **limit** | **Number**| Maximum number of transactions to return. Must be between 1 and 100. Defaults to 10 when not provided. | [optional] [default to 10]
 **order** | [**ListCardTransactionsOrderParameter**](.md)| Orders results by transaction id. -id is newest first and the default. id is oldest first. An array that orders by id and -id together is rejected. | [optional] 
 **cursor** | **String**| Pagination cursor returned in the cursor.next field of a previous response. Must match the pattern ^lcrsctx_[a-f0-9]+$. | [optional] 
 **filters** | [**LoyaltiesProgramsMembersCardsTransactionsListRequestQuery**](.md)| Field-specific filter conditions, passed as a deep object, e.g. filters[id][conditions][$is] lctx_0f5d0a8878caa3ee5c. | [optional] 

### Return type

[**LoyaltiesProgramsMembersCardsTransactionsListResponseBody**](LoyaltiesProgramsMembersCardsTransactionsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMemberOrderPayments

> LoyaltiesProgramsMembersOrdersPaymentsListResponseBody listMemberOrderPayments(programId, memberId, opts)

List member order payments

Lists stored PAY_WITH_POINTS order transactions for the program member, with cursor pagination. Filter by id, card_definition_id, and created_at. Order by id (default -id, newest first). Dry-run (SIMULATED) results arent stored and dont appear. Returns 404 when the program or the member doesnt exist. The program is checked first.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Identifies the loyalty program (lprg_ followed by hexadecimal characters).
let memberId = "memberId_example"; // String | Identifies the program member (lmbr_[a-f0-9]+).
let opts = {
  'limit': 10, // Number | Maximum number of items to return. An integer between 1 and 100; numeric strings are also accepted. Defaults to 10.
  'order': new Voucherify.ListCardTransactionsOrderParameter(), // ListCardTransactionsOrderParameter | Orders results by transaction id. -id is newest first and the default. id is oldest first. An array that orders by id and -id together is rejected.
  'cursor': "cursor_example", // String | Pagination cursor returned in the cursor.next field of a previous response (format: lcrsotx_ followed by hexadecimal characters).
  'filters': new Voucherify.LoyaltiesProgramsMembersOrdersPaymentsListRequestQuery() // LoyaltiesProgramsMembersOrdersPaymentsListRequestQuery | Filters results by field, e.g. filters[id][conditions][$is] lotx_.... Each field accepts a conditions object with condition operators.
};
apiInstance.listMemberOrderPayments(programId, memberId, opts, (error, data, response) => {
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
 **programId** | **String**| Identifies the loyalty program (lprg_ followed by hexadecimal characters). | 
 **memberId** | **String**| Identifies the program member (lmbr_[a-f0-9]+). | 
 **limit** | **Number**| Maximum number of items to return. An integer between 1 and 100; numeric strings are also accepted. Defaults to 10. | [optional] [default to 10]
 **order** | [**ListCardTransactionsOrderParameter**](.md)| Orders results by transaction id. -id is newest first and the default. id is oldest first. An array that orders by id and -id together is rejected. | [optional] 
 **cursor** | **String**| Pagination cursor returned in the cursor.next field of a previous response (format: lcrsotx_ followed by hexadecimal characters). | [optional] 
 **filters** | [**LoyaltiesProgramsMembersOrdersPaymentsListRequestQuery**](.md)| Filters results by field, e.g. filters[id][conditions][$is] lotx_.... Each field accepts a conditions object with condition operators. | [optional] 

### Return type

[**LoyaltiesProgramsMembersOrdersPaymentsListResponseBody**](LoyaltiesProgramsMembersOrdersPaymentsListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMemberRewardPurchases

> LoyaltiesProgramsMembersRewardsPurchasesListResponseBody listMemberRewardPurchases(programId, memberId, opts)

List member reward purchases

Lists stored PURCHASE reward transactions for the program member, with cursor pagination. Filter by id, reward_id, card_definition_id, and created_at. Order by id (default -id, newest first). Purchases rejected before a transaction is stored dont appear. A purchase accepted with 202 that later fails is stored as REJECTED with details.rejection. Returns 404 when the program or the member doesnt exist. The program is checked first.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program identifier (format: lprg_ followed by hexadecimal characters).
let memberId = "memberId_example"; // String | Program member ID (format lmbr_[a-f0-9]+).
let opts = {
  'limit': 10, // Number | Maximum number of items to return. An integer between 1 and 100; numeric strings are also accepted. Defaults to 10.
  'order': new Voucherify.ListCardTransactionsOrderParameter(), // ListCardTransactionsOrderParameter | Orders results by transaction id. -id is newest first and the default. id is oldest first. An array that orders by id and -id together is rejected.
  'cursor': "cursor_example", // String | Pagination cursor returned in the cursor.next field of a previous response (format: lcrstrx_ followed by hexadecimal characters).
  'filters': new Voucherify.LoyaltiesProgramsMembersRewardsPurchasesListRequestQuery() // LoyaltiesProgramsMembersRewardsPurchasesListRequestQuery | Field filters, e.g. filters[reward_id][conditions][$is] lrew_.... Each field accepts a conditions object with condition operators.
};
apiInstance.listMemberRewardPurchases(programId, memberId, opts, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program identifier (format: lprg_ followed by hexadecimal characters). | 
 **memberId** | **String**| Program member ID (format lmbr_[a-f0-9]+). | 
 **limit** | **Number**| Maximum number of items to return. An integer between 1 and 100; numeric strings are also accepted. Defaults to 10. | [optional] [default to 10]
 **order** | [**ListCardTransactionsOrderParameter**](.md)| Orders results by transaction id. -id is newest first and the default. id is oldest first. An array that orders by id and -id together is rejected. | [optional] 
 **cursor** | **String**| Pagination cursor returned in the cursor.next field of a previous response (format: lcrstrx_ followed by hexadecimal characters). | [optional] 
 **filters** | [**LoyaltiesProgramsMembersRewardsPurchasesListRequestQuery**](.md)| Field filters, e.g. filters[reward_id][conditions][$is] lrew_.... Each field accepts a conditions object with condition operators. | [optional] 

### Return type

[**LoyaltiesProgramsMembersRewardsPurchasesListResponseBody**](LoyaltiesProgramsMembersRewardsPurchasesListResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchaseMemberReward

> LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBody purchaseMemberReward(programId, memberId, loyaltiesProgramsMembersRewardsPurchasesCreateRequestBody)

Purchase reward with points

Purchases a reward for the program member by spending points from the members card. The card comes from the matching reward costs card definition. The program, reward, and member must be ACTIVE. The program and reward must be inside their validity windows. The reward must be assigned to the program with stock available, a cost must match the customer, and the purchase must stay inside frequency, cooldown, balance, and spending limits. Modes: - TRANSACTION (default): creates a PENDING reward transaction and a PENDING card transaction. Returns 202. - DRY_RUN: simulates the purchase and doesnt create a transaction. Returns 200 with status SIMULATED.

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

let apiInstance = new Voucherify.LV2ProgramsApi();
let programId = "programId_example"; // String | Unique loyalty program identifier (format: lprg_ followed by hexadecimal characters).
let memberId = "memberId_example"; // String | Program member ID (format lmbr_[a-f0-9]+).
let loyaltiesProgramsMembersRewardsPurchasesCreateRequestBody = new Voucherify.LoyaltiesProgramsMembersRewardsPurchasesCreateRequestBody(); // LoyaltiesProgramsMembersRewardsPurchasesCreateRequestBody | 
apiInstance.purchaseMemberReward(programId, memberId, loyaltiesProgramsMembersRewardsPurchasesCreateRequestBody, (error, data, response) => {
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
 **programId** | **String**| Unique loyalty program identifier (format: lprg_ followed by hexadecimal characters). | 
 **memberId** | **String**| Program member ID (format lmbr_[a-f0-9]+). | 
 **loyaltiesProgramsMembersRewardsPurchasesCreateRequestBody** | [**LoyaltiesProgramsMembersRewardsPurchasesCreateRequestBody**](LoyaltiesProgramsMembersRewardsPurchasesCreateRequestBody.md)|  | 

### Return type

[**LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBody**](LoyaltiesProgramsMembersRewardsPurchasesCreateCombinedResponseBody.md)

### Authorization

[X-App-Id](../README.md#X-App-Id), [X-App-Token](../README.md#X-App-Token), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

