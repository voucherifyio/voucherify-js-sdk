# Voucherify.ManagementApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignUser**](ManagementApi.md#assignUser) | **POST** /management/v1/projects/{projectId}/users | Assign User
[**createBrand**](ManagementApi.md#createBrand) | **POST** /management/v1/projects/{projectId}/branding | Create Brand
[**createCustomEventSchema**](ManagementApi.md#createCustomEventSchema) | **POST** /management/v1/projects/{projectId}/custom-event-schemas | Create Custom Event Schema
[**createMetadataSchema**](ManagementApi.md#createMetadataSchema) | **POST** /management/v1/projects/{projectId}/metadata-schemas | Create Metadata Schema
[**createProject**](ManagementApi.md#createProject) | **POST** /management/v1/projects | Create Project
[**createStackingRules**](ManagementApi.md#createStackingRules) | **POST** /management/v1/projects/{projectId}/stacking-rules | Create Stacking Rules
[**createWebhook**](ManagementApi.md#createWebhook) | **POST** /management/v1/projects/{projectId}/webhooks | Create Webhook
[**deleteBrand**](ManagementApi.md#deleteBrand) | **DELETE** /management/v1/projects/{projectId}/branding/{brandingId} | Delete Brand
[**deleteCustomEventSchema**](ManagementApi.md#deleteCustomEventSchema) | **DELETE** /management/v1/projects/{projectId}/custom-event-schemas/{customEventSchemaId} | Delete Custom Event Schema
[**deleteMetadataSchema**](ManagementApi.md#deleteMetadataSchema) | **DELETE** /management/v1/projects/{projectId}/metadata-schemas/{metadataSchemaId} | Delete Metadata Schema
[**deleteProject**](ManagementApi.md#deleteProject) | **DELETE** /management/v1/projects/{projectId} | Delete Project
[**deleteStackingRules**](ManagementApi.md#deleteStackingRules) | **DELETE** /management/v1/projects/{projectId}/stacking-rules/{stackingRulesId} | Delete Stacking Rules
[**deleteWebhook**](ManagementApi.md#deleteWebhook) | **DELETE** /management/v1/projects/{projectId}/webhooks/{webhookId} | Delete Webhook
[**getBrand**](ManagementApi.md#getBrand) | **GET** /management/v1/projects/{projectId}/branding/{brandingId} | Get Brand
[**getCustomEventSchema**](ManagementApi.md#getCustomEventSchema) | **GET** /management/v1/projects/{projectId}/custom-event-schemas/{customEventSchemaId} | Get Custom Event Schema
[**getMetadataSchema1**](ManagementApi.md#getMetadataSchema1) | **GET** /management/v1/projects/{projectId}/metadata-schemas/{metadataSchemaId} | Get Metadata Schema
[**getProject**](ManagementApi.md#getProject) | **GET** /management/v1/projects/{projectId} | Get Project
[**getStackingRules**](ManagementApi.md#getStackingRules) | **GET** /management/v1/projects/{projectId}/stacking-rules/{stackingRulesId} | Get Stacking Rules
[**getUser**](ManagementApi.md#getUser) | **GET** /management/v1/projects/{projectId}/users/{userId} | Get User
[**getWebhook**](ManagementApi.md#getWebhook) | **GET** /management/v1/projects/{projectId}/webhooks/{webhookId} | Get Webhook
[**inviteUser**](ManagementApi.md#inviteUser) | **POST** /management/v1/projects/users/invite | Invite a New User
[**listBrands**](ManagementApi.md#listBrands) | **GET** /management/v1/projects/{projectId}/branding | List Brands
[**listCustomEventSchemas**](ManagementApi.md#listCustomEventSchemas) | **GET** /management/v1/projects/{projectId}/custom-event-schemas | List Custom Event Schemas
[**listMetadataSchemas1**](ManagementApi.md#listMetadataSchemas1) | **GET** /management/v1/projects/{projectId}/metadata-schemas | List Metadata Schemas
[**listProjects**](ManagementApi.md#listProjects) | **GET** /management/v1/projects | List Projects
[**listStackingRules**](ManagementApi.md#listStackingRules) | **GET** /management/v1/projects/{projectId}/stacking-rules | List Stacking Rules
[**listUsers**](ManagementApi.md#listUsers) | **GET** /management/v1/projects/{projectId}/users | List Users
[**listWebhooks**](ManagementApi.md#listWebhooks) | **GET** /management/v1/projects/{projectId}/webhooks | List Webhooks
[**managementCopyCampaignTemplate**](ManagementApi.md#managementCopyCampaignTemplate) | **POST** /management/v1/projects/{projectId}/templates/campaigns/{campaignTemplateId}/copy | Copy Campaign Template to a Project
[**managementListCampaignTemplates**](ManagementApi.md#managementListCampaignTemplates) | **GET** /management/v1/projects/{projectId}/templates/campaigns | List Campaign Templates
[**unassignUser**](ManagementApi.md#unassignUser) | **DELETE** /management/v1/projects/{projectId}/users/{userId} | Unassign User
[**updateBrand**](ManagementApi.md#updateBrand) | **PUT** /management/v1/projects/{projectId}/branding/{brandingId} | Update Brand
[**updateCustomEventSchema**](ManagementApi.md#updateCustomEventSchema) | **PUT** /management/v1/projects/{projectId}/custom-event-schemas/{customEventSchemaId} | Update Custom Event Schema
[**updateMetadataSchema**](ManagementApi.md#updateMetadataSchema) | **PUT** /management/v1/projects/{projectId}/metadata-schemas/{metadataSchemaId} | Update Metadata Schema
[**updateProject**](ManagementApi.md#updateProject) | **PUT** /management/v1/projects/{projectId} | Update Project
[**updateStackingRules**](ManagementApi.md#updateStackingRules) | **PUT** /management/v1/projects/{projectId}/stacking-rules/{stackingRulesId} | Update Stacking Rules
[**updateUser**](ManagementApi.md#updateUser) | **PUT** /management/v1/projects/{projectId}/users/{userId} | Update User
[**updateWebhook**](ManagementApi.md#updateWebhook) | **PUT** /management/v1/projects/{projectId}/webhooks/{webhookId} | Update Webhook



## assignUser

> ManagementProjectsUsersAssignResponseBody assignUser(projectId, opts)

Assign User

Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsUsersAssignRequestBody': new Voucherify.ManagementProjectsUsersAssignRequestBody() // ManagementProjectsUsersAssignRequestBody | Defines the user details.
};
apiInstance.assignUser(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsUsersAssignRequestBody** | [**ManagementProjectsUsersAssignRequestBody**](ManagementProjectsUsersAssignRequestBody.md)| Defines the user details. | [optional] 

### Return type

[**ManagementProjectsUsersAssignResponseBody**](ManagementProjectsUsersAssignResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBrand

> ManagementProjectsBrandingCreateResponseBody createBrand(projectId, opts)

Create Brand

Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings &gt; Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsBrandingCreateRequestBody': {"brand":{"name":"Voucherify PSA","privacy_policy_url":null,"terms_of_use_url":null,"permission_reminder":"You are receiving this email because you opted in at our website.","website_url":"voucherify.io"},"address":{"street":"Porcelanowa 23","city":"Katowice","postal":"43-246","state":null,"country":"Poland"},"contact":{"email":"support@voucherify.io","phone":null},"cockpits":{"campaigns_overview_enabled":false,"loyalty_enabled":true,"gift_cards_enabled":true,"coupons_enabled":true,"referrals_enabled":true,"theme":"default","use_custom_double_opt_in_redirect_url":false,"custom_double_opt_in_redirect_url":null}} // ManagementProjectsBrandingCreateRequestBody | Defines a brand configuration.
};
apiInstance.createBrand(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsBrandingCreateRequestBody** | [**ManagementProjectsBrandingCreateRequestBody**](ManagementProjectsBrandingCreateRequestBody.md)| Defines a brand configuration. | [optional] 

### Return type

[**ManagementProjectsBrandingCreateResponseBody**](ManagementProjectsBrandingCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCustomEventSchema

> ManagementProjectsCustomEventSchemasCreateResponseBody createCustomEventSchema(projectId, opts)

Create Custom Event Schema

Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsCustomEventSchemasCreateRequestBody': new Voucherify.ManagementProjectsCustomEventSchemasCreateRequestBody() // ManagementProjectsCustomEventSchemasCreateRequestBody | Defines the custom event schema.
};
apiInstance.createCustomEventSchema(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsCustomEventSchemasCreateRequestBody** | [**ManagementProjectsCustomEventSchemasCreateRequestBody**](ManagementProjectsCustomEventSchemasCreateRequestBody.md)| Defines the custom event schema. | [optional] 

### Return type

[**ManagementProjectsCustomEventSchemasCreateResponseBody**](ManagementProjectsCustomEventSchemasCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMetadataSchema

> ManagementProjectsMetadataSchemasCreateResponseBody createMetadataSchema(projectId, opts)

Create Metadata Schema

Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsMetadataSchemasCreateRequestBody': new Voucherify.ManagementProjectsMetadataSchemasCreateRequestBody() // ManagementProjectsMetadataSchemasCreateRequestBody | Defines the metadata schema.
};
apiInstance.createMetadataSchema(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsMetadataSchemasCreateRequestBody** | [**ManagementProjectsMetadataSchemasCreateRequestBody**](ManagementProjectsMetadataSchemasCreateRequestBody.md)| Defines the metadata schema. | [optional] 

### Return type

[**ManagementProjectsMetadataSchemasCreateResponseBody**](ManagementProjectsMetadataSchemasCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProject

> ManagementProjectsCreateResponseBody createProject(opts)

Create Project

Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let opts = {
  'managementProjectsCreateRequestBody': new Voucherify.ManagementProjectsCreateRequestBody() // ManagementProjectsCreateRequestBody | Define project details.
};
apiInstance.createProject(opts, (error, data, response) => {
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
 **managementProjectsCreateRequestBody** | [**ManagementProjectsCreateRequestBody**](ManagementProjectsCreateRequestBody.md)| Define project details. | [optional] 

### Return type

[**ManagementProjectsCreateResponseBody**](ManagementProjectsCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createStackingRules

> ManagementProjectsStackingRulesCreateResponseBody createStackingRules(projectId, opts)

Create Stacking Rules

Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsStackingRulesCreateRequestBody': new Voucherify.ManagementProjectsStackingRulesCreateRequestBody() // ManagementProjectsStackingRulesCreateRequestBody | Defines the stacking rule parameters.
};
apiInstance.createStackingRules(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsStackingRulesCreateRequestBody** | [**ManagementProjectsStackingRulesCreateRequestBody**](ManagementProjectsStackingRulesCreateRequestBody.md)| Defines the stacking rule parameters. | [optional] 

### Return type

[**ManagementProjectsStackingRulesCreateResponseBody**](ManagementProjectsStackingRulesCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWebhook

> ManagementProjectsWebhooksCreateResponseBody createWebhook(projectId, opts)

Create Webhook

Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsWebhooksCreateRequestBody': new Voucherify.ManagementProjectsWebhooksCreateRequestBody() // ManagementProjectsWebhooksCreateRequestBody | Defines a webhook configuration.
};
apiInstance.createWebhook(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsWebhooksCreateRequestBody** | [**ManagementProjectsWebhooksCreateRequestBody**](ManagementProjectsWebhooksCreateRequestBody.md)| Defines a webhook configuration. | [optional] 

### Return type

[**ManagementProjectsWebhooksCreateResponseBody**](ManagementProjectsWebhooksCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBrand

> deleteBrand(projectId, brandingId)

Delete Brand

Deletes permanently a brand configuration.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let brandingId = "brandingId_example"; // String | Provide the unique identifier of the brand configuration.
apiInstance.deleteBrand(projectId, brandingId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **brandingId** | **String**| Provide the unique identifier of the brand configuration. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomEventSchema

> deleteCustomEventSchema(projectId, customEventSchemaId)

Delete Custom Event Schema

Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let customEventSchemaId = "customEventSchemaId_example"; // String | Provide the unique identifier of the custom event schema.
apiInstance.deleteCustomEventSchema(projectId, customEventSchemaId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **customEventSchemaId** | **String**| Provide the unique identifier of the custom event schema. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMetadataSchema

> deleteMetadataSchema(projectId, metadataSchemaId)

Delete Metadata Schema

Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings &gt; Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings &gt; Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let metadataSchemaId = "metadataSchemaId_example"; // String | Provide the unique identifier of the metadata schema.
apiInstance.deleteMetadataSchema(projectId, metadataSchemaId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **metadataSchemaId** | **String**| Provide the unique identifier of the metadata schema. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProject

> deleteProject(projectId)

Delete Project

Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.deleteProject(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteStackingRules

> deleteStackingRules(projectId, stackingRulesId)

Delete Stacking Rules

Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let stackingRulesId = "stackingRulesId_example"; // String | Provide the unique identifier of the stacking rules.
apiInstance.deleteStackingRules(projectId, stackingRulesId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **stackingRulesId** | **String**| Provide the unique identifier of the stacking rules. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWebhook

> deleteWebhook(projectId, webhookId)

Delete Webhook

Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let webhookId = "webhookId_example"; // String | Provide the unique identifier of the webhook configuration.
apiInstance.deleteWebhook(projectId, webhookId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **webhookId** | **String**| Provide the unique identifier of the webhook configuration. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBrand

> ManagementProjectsBrandingGetResponseBody getBrand(projectId, brandingId)

Get Brand

Retrieves a brand configuration.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let brandingId = "brandingId_example"; // String | Provide the unique identifier of the brand configuration.
apiInstance.getBrand(projectId, brandingId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **brandingId** | **String**| Provide the unique identifier of the brand configuration. | 

### Return type

[**ManagementProjectsBrandingGetResponseBody**](ManagementProjectsBrandingGetResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomEventSchema

> ManagementProjectsCustomEventSchemasGetResponseBody getCustomEventSchema(projectId, customEventSchemaId)

Get Custom Event Schema

Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let customEventSchemaId = "customEventSchemaId_example"; // String | Provide the unique identifier of the custom event schema.
apiInstance.getCustomEventSchema(projectId, customEventSchemaId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **customEventSchemaId** | **String**| Provide the unique identifier of the custom event schema. | 

### Return type

[**ManagementProjectsCustomEventSchemasGetResponseBody**](ManagementProjectsCustomEventSchemasGetResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMetadataSchema1

> ManagementProjectsMetadataSchemasGetResponseBody getMetadataSchema1(projectId, metadataSchemaId)

Get Metadata Schema

Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let metadataSchemaId = "metadataSchemaId_example"; // String | Provide the unique identifier of the metadata schema.
apiInstance.getMetadataSchema1(projectId, metadataSchemaId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **metadataSchemaId** | **String**| Provide the unique identifier of the metadata schema. | 

### Return type

[**ManagementProjectsMetadataSchemasGetResponseBody**](ManagementProjectsMetadataSchemasGetResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProject

> ManagementProjectsGetResponseBody getProject(projectId)

Get Project

Retrieves an existing project.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.getProject(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsGetResponseBody**](ManagementProjectsGetResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStackingRules

> ManagementProjectsStackingRulesGetResponseBody getStackingRules(projectId, stackingRulesId)

Get Stacking Rules

Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let stackingRulesId = "stackingRulesId_example"; // String | Provide the unique identifier of the stacking rules.
apiInstance.getStackingRules(projectId, stackingRulesId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **stackingRulesId** | **String**| Provide the unique identifier of the stacking rules. | 

### Return type

[**ManagementProjectsStackingRulesGetResponseBody**](ManagementProjectsStackingRulesGetResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> ManagementProjectsUsersGetUserResponseBody getUser(projectId, userId)

Get User

Retrieves the project users details.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let userId = "userId_example"; // String | Provide the unique identifier of the user. Alternatively, provide the users login.
apiInstance.getUser(projectId, userId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **userId** | **String**| Provide the unique identifier of the user. Alternatively, provide the users login. | 

### Return type

[**ManagementProjectsUsersGetUserResponseBody**](ManagementProjectsUsersGetUserResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhook

> ManagementProjectsWebhooksGetResponseBody getWebhook(projectId, webhookId)

Get Webhook

Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let webhookId = "webhookId_example"; // String | Provide the unique identifier of the webhook configuration.
apiInstance.getWebhook(projectId, webhookId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **webhookId** | **String**| Provide the unique identifier of the webhook configuration. | 

### Return type

[**ManagementProjectsWebhooksGetResponseBody**](ManagementProjectsWebhooksGetResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUser

> inviteUser(opts)

Invite a New User

Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let opts = {
  'managementProjectsUsersInviteCreateRequestBody': new Voucherify.ManagementProjectsUsersInviteCreateRequestBody() // ManagementProjectsUsersInviteCreateRequestBody | Defines the details of the invitation, the project, and roles to which the user will be assigned.
};
apiInstance.inviteUser(opts, (error, data, response) => {
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
 **managementProjectsUsersInviteCreateRequestBody** | [**ManagementProjectsUsersInviteCreateRequestBody**](ManagementProjectsUsersInviteCreateRequestBody.md)| Defines the details of the invitation, the project, and roles to which the user will be assigned. | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## listBrands

> ManagementProjectsBrandingListResponseBody listBrands(projectId)

List Brands

Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.listBrands(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsBrandingListResponseBody**](ManagementProjectsBrandingListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCustomEventSchemas

> ManagementProjectsCustomEventSchemasListResponseBody listCustomEventSchemas(projectId)

List Custom Event Schemas

Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.listCustomEventSchemas(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsCustomEventSchemasListResponseBody**](ManagementProjectsCustomEventSchemasListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMetadataSchemas1

> ManagementProjectsMetadataSchemasListResponseBody listMetadataSchemas1(projectId)

List Metadata Schemas

Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.listMetadataSchemas1(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsMetadataSchemasListResponseBody**](ManagementProjectsMetadataSchemasListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProjects

> ManagementProjectsListResponseBody listProjects()

List Projects

Lists all projects for the organization. The endpoint does not require any query parameters.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
apiInstance.listProjects((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ManagementProjectsListResponseBody**](ManagementProjectsListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStackingRules

> ManagementProjectsStackingRulesListResponseBody listStackingRules(projectId)

List Stacking Rules

Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.listStackingRules(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsStackingRulesListResponseBody**](ManagementProjectsStackingRulesListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> ManagementProjectsUsersListResponseBody listUsers(projectId)

List Users

Lists all users assigned to the project.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.listUsers(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsUsersListResponseBody**](ManagementProjectsUsersListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhooks

> ManagementProjectsWebhooksListResponseBody listWebhooks(projectId)

List Webhooks

Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
apiInstance.listWebhooks(projectId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 

### Return type

[**ManagementProjectsWebhooksListResponseBody**](ManagementProjectsWebhooksListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## managementCopyCampaignTemplate

> ManagementProjectsTemplatesCampaignsCopyCreateResponseBody managementCopyCampaignTemplate(projectId, campaignTemplateId, opts)

Copy Campaign Template to a Project

Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let campaignTemplateId = "campaignTemplateId_example"; // String | Provide the unique identifier of the campaign template.
let opts = {
  'managementProjectsTemplatesCampaignsCopyCreateRequestBody': new Voucherify.ManagementProjectsTemplatesCampaignsCopyCreateRequestBody() // ManagementProjectsTemplatesCampaignsCopyCreateRequestBody | Determines the details about the template in the destination project as well as the destination project itself.
};
apiInstance.managementCopyCampaignTemplate(projectId, campaignTemplateId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **campaignTemplateId** | **String**| Provide the unique identifier of the campaign template. | 
 **managementProjectsTemplatesCampaignsCopyCreateRequestBody** | [**ManagementProjectsTemplatesCampaignsCopyCreateRequestBody**](ManagementProjectsTemplatesCampaignsCopyCreateRequestBody.md)| Determines the details about the template in the destination project as well as the destination project itself. | [optional] 

### Return type

[**ManagementProjectsTemplatesCampaignsCopyCreateResponseBody**](ManagementProjectsTemplatesCampaignsCopyCreateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## managementListCampaignTemplates

> ManagementProjectsTemplatesCampaignsListResponseBody managementListCampaignTemplates(projectId, opts)

List Campaign Templates

Lists all campaign templates available in the project.  👍 List Campaign Templates  This endpoint works in the same way as the [List Campaign Templates endpoint](/api-reference/templates/list-campaign-templates).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'limit': 56, // Number | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items.
  'startingAfterId': "startingAfterId_example", // String | A cursor for pagination. It retrieves the campaign templates created after a template with the given ID.
  'order': new Voucherify.ParameterTemplatesList(), // ParameterTemplatesList | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order.
  'includeTotal': true, // Boolean | If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default.
  'filters': new Voucherify.ParameterFiltersListTemplates() // ParameterFiltersListTemplates | Filters for listing templates.
};
apiInstance.managementListCampaignTemplates(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **limit** | **Number**| Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | [optional] 
 **startingAfterId** | **String**| A cursor for pagination. It retrieves the campaign templates created after a template with the given ID. | [optional] 
 **order** | [**ParameterTemplatesList**](.md)| Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | [optional] 
 **includeTotal** | **Boolean**| If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default. | [optional] 
 **filters** | [**ParameterFiltersListTemplates**](.md)| Filters for listing templates. | [optional] 

### Return type

[**ManagementProjectsTemplatesCampaignsListResponseBody**](ManagementProjectsTemplatesCampaignsListResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unassignUser

> unassignUser(projectId, userId)

Unassign User

Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let userId = "userId_example"; // String | Provide the unique identifier of the user. Alternatively, provide the users login.
apiInstance.unassignUser(projectId, userId, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **userId** | **String**| Provide the unique identifier of the user. Alternatively, provide the users login. | 

### Return type

null (empty response body)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateBrand

> ManagementProjectsBrandingUpdateResponseBody updateBrand(projectId, brandingId, opts)

Update Brand

Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings &gt; Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let brandingId = "brandingId_example"; // String | Provide the unique identifier of the brand configuration.
let opts = {
  'managementProjectsBrandingUpdateRequestBody': new Voucherify.ManagementProjectsBrandingUpdateRequestBody() // ManagementProjectsBrandingUpdateRequestBody | Defines the brand configuration to be updated.
};
apiInstance.updateBrand(projectId, brandingId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **brandingId** | **String**| Provide the unique identifier of the brand configuration. | 
 **managementProjectsBrandingUpdateRequestBody** | [**ManagementProjectsBrandingUpdateRequestBody**](ManagementProjectsBrandingUpdateRequestBody.md)| Defines the brand configuration to be updated. | [optional] 

### Return type

[**ManagementProjectsBrandingUpdateResponseBody**](ManagementProjectsBrandingUpdateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomEventSchema

> ManagementProjectsCustomEventSchemasUpdateResponseBody updateCustomEventSchema(projectId, customEventSchemaId, opts)

Update Custom Event Schema

Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let customEventSchemaId = "customEventSchemaId_example"; // String | Provide the unique identifier of the custom event schema.
let opts = {
  'managementProjectsCustomEventSchemasUpdateRequestBody': new Voucherify.ManagementProjectsCustomEventSchemasUpdateRequestBody() // ManagementProjectsCustomEventSchemasUpdateRequestBody | Defines the custom event schema to be updated.
};
apiInstance.updateCustomEventSchema(projectId, customEventSchemaId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **customEventSchemaId** | **String**| Provide the unique identifier of the custom event schema. | 
 **managementProjectsCustomEventSchemasUpdateRequestBody** | [**ManagementProjectsCustomEventSchemasUpdateRequestBody**](ManagementProjectsCustomEventSchemasUpdateRequestBody.md)| Defines the custom event schema to be updated. | [optional] 

### Return type

[**ManagementProjectsCustomEventSchemasUpdateResponseBody**](ManagementProjectsCustomEventSchemasUpdateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMetadataSchema

> ManagementProjectsMetadataSchemasUpdateResponseBody updateMetadataSchema(projectId, metadataSchemaId, opts)

Update Metadata Schema

Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let metadataSchemaId = "metadataSchemaId_example"; // String | Provide the unique identifier of the metadata schema.
let opts = {
  'managementProjectsMetadataSchemasUpdateRequestBody': new Voucherify.ManagementProjectsMetadataSchemasUpdateRequestBody() // ManagementProjectsMetadataSchemasUpdateRequestBody | Defines the metadata schema to be updated.
};
apiInstance.updateMetadataSchema(projectId, metadataSchemaId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **metadataSchemaId** | **String**| Provide the unique identifier of the metadata schema. | 
 **managementProjectsMetadataSchemasUpdateRequestBody** | [**ManagementProjectsMetadataSchemasUpdateRequestBody**](ManagementProjectsMetadataSchemasUpdateRequestBody.md)| Defines the metadata schema to be updated. | [optional] 

### Return type

[**ManagementProjectsMetadataSchemasUpdateResponseBody**](ManagementProjectsMetadataSchemasUpdateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProject

> ManagementProjectsUpdateResponseBody updateProject(projectId, opts)

Update Project

Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let opts = {
  'managementProjectsUpdateRequestBody': new Voucherify.ManagementProjectsUpdateRequestBody() // ManagementProjectsUpdateRequestBody | Define the project details to be updated.
};
apiInstance.updateProject(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **managementProjectsUpdateRequestBody** | [**ManagementProjectsUpdateRequestBody**](ManagementProjectsUpdateRequestBody.md)| Define the project details to be updated. | [optional] 

### Return type

[**ManagementProjectsUpdateResponseBody**](ManagementProjectsUpdateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateStackingRules

> ManagementProjectsStackingRulesUpdateResponseBody updateStackingRules(projectId, stackingRulesId, opts)

Update Stacking Rules

Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let stackingRulesId = "stackingRulesId_example"; // String | Provide the unique identifier of the stacking rules.
let opts = {
  'managementProjectsStackingRulesUpdateRequestBody': new Voucherify.ManagementProjectsStackingRulesUpdateRequestBody() // ManagementProjectsStackingRulesUpdateRequestBody | Defines the stacking rules to be updated.
};
apiInstance.updateStackingRules(projectId, stackingRulesId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **stackingRulesId** | **String**| Provide the unique identifier of the stacking rules. | 
 **managementProjectsStackingRulesUpdateRequestBody** | [**ManagementProjectsStackingRulesUpdateRequestBody**](ManagementProjectsStackingRulesUpdateRequestBody.md)| Defines the stacking rules to be updated. | [optional] 

### Return type

[**ManagementProjectsStackingRulesUpdateResponseBody**](ManagementProjectsStackingRulesUpdateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> ManagementProjectsUsersUpdateRoleResponseBody updateUser(projectId, userId, opts)

Update User

Updates the users role.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let userId = "userId_example"; // String | Provide the unique identifier of the user. Alternatively, provide the users login.
let opts = {
  'managementProjectsUsersUpdateRoleRequestBody': new Voucherify.ManagementProjectsUsersUpdateRoleRequestBody() // ManagementProjectsUsersUpdateRoleRequestBody | Defines the users new role.
};
apiInstance.updateUser(projectId, userId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **userId** | **String**| Provide the unique identifier of the user. Alternatively, provide the users login. | 
 **managementProjectsUsersUpdateRoleRequestBody** | [**ManagementProjectsUsersUpdateRoleRequestBody**](ManagementProjectsUsersUpdateRoleRequestBody.md)| Defines the users new role. | [optional] 

### Return type

[**ManagementProjectsUsersUpdateRoleResponseBody**](ManagementProjectsUsersUpdateRoleResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebhook

> ManagementProjectsWebhooksUpdateResponseBody updateWebhook(projectId, webhookId, opts)

Update Webhook

Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example

```javascript
import Voucherify from 'voucherify';
let defaultClient = Voucherify.ApiClient.instance;
// Configure API key authorization: X-Management-Token
let X-Management-Token = defaultClient.authentications['X-Management-Token'];
X-Management-Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Token.apiKeyPrefix = 'Token';
// Configure API key authorization: X-Management-Id
let X-Management-Id = defaultClient.authentications['X-Management-Id'];
X-Management-Id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Management-Id.apiKeyPrefix = 'Token';

let apiInstance = new Voucherify.ManagementApi();
let projectId = "projectId_example"; // String | Provide the unique identifier of the project.
let webhookId = "webhookId_example"; // String | Provide the unique identifier of the webhook configuration.
let opts = {
  'managementProjectsWebhooksUpdateRequestBody': new Voucherify.ManagementProjectsWebhooksUpdateRequestBody() // ManagementProjectsWebhooksUpdateRequestBody | Defines the webhook configuration to be updated.
};
apiInstance.updateWebhook(projectId, webhookId, opts, (error, data, response) => {
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
 **projectId** | **String**| Provide the unique identifier of the project. | 
 **webhookId** | **String**| Provide the unique identifier of the webhook configuration. | 
 **managementProjectsWebhooksUpdateRequestBody** | [**ManagementProjectsWebhooksUpdateRequestBody**](ManagementProjectsWebhooksUpdateRequestBody.md)| Defines the webhook configuration to be updated. | [optional] 

### Return type

[**ManagementProjectsWebhooksUpdateResponseBody**](ManagementProjectsWebhooksUpdateResponseBody.md)

### Authorization

[X-Management-Token](../README.md#X-Management-Token), [X-Management-Id](../README.md#X-Management-Id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

