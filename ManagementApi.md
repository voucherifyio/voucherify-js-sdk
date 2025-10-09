# .ManagementApi

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


# **assignUser**
> ManagementProjectsUsersAssignResponseBody assignUser()

Assigns a user to a given project. The user must be an existing user in Voucherify.  🚧 Correct Use of Data To avoid errors, use the role key with either id or login keys.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiAssignUserRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiAssignUserRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Defines the user details. (optional)
  managementProjectsUsersAssignRequestBody: {
    id: "id_example",
    login: "login_example",
    role: "role_example",
  },
};

const data = await apiInstance.assignUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsUsersAssignRequestBody** | **ManagementProjectsUsersAssignRequestBody**| Defines the user details. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsUsersAssignResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the user assigned to the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBrand**
> ManagementProjectsBrandingCreateResponseBody createBrand()

Creates a new brand configuration. You can have only one brand configured for a project.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiCreateBrandRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiCreateBrandRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Defines a brand configuration. (optional)
  managementProjectsBrandingCreateRequestBody: {
    brand: {
      name: "name_example",
      privacyPolicyUrl: "privacyPolicyUrl_example",
      termsOfUseUrl: "termsOfUseUrl_example",
      permissionReminder: "You are receiving this email because you opted in at our website.",
      websiteUrl: "websiteUrl_example",
    },
    address: {
      street: "street_example",
      city: "city_example",
      postal: "postal_example",
      state: "state_example",
      country: "country_example",
    },
    contact: {
      email: "email_example",
      phone: "phone_example",
    },
    cockpits: {
      campaignsOverviewEnabled: false,
      loyaltyEnabled: true,
      giftCardsEnabled: true,
      couponsEnabled: true,
      referralsEnabled: true,
      theme: "default",
      useCustomDoubleOptInRedirectUrl: false,
      customDoubleOptInRedirectUrl: "customDoubleOptInRedirectUrl_example",
    },
  },
};

const data = await apiInstance.createBrand(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsBrandingCreateRequestBody** | **ManagementProjectsBrandingCreateRequestBody**| Defines a brand configuration. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsBrandingCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the brand configuration. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCustomEventSchema**
> ManagementProjectsCustomEventSchemasCreateResponseBody createCustomEventSchema()

Creates a custom event schema. The properties object is required, but it can be empty, however. This object is for optional custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiCreateCustomEventSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiCreateCustomEventSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Defines the custom event schema. (optional)
  managementProjectsCustomEventSchemasCreateRequestBody: {
    name: "name_example",
    schema: {
      properties: {
        "key": {
          type: "string",
          optional: true,
          deleted: true,
        },
      },
    },
  },
};

const data = await apiInstance.createCustomEventSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsCustomEventSchemasCreateRequestBody** | **ManagementProjectsCustomEventSchemasCreateRequestBody**| Defines the custom event schema. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsCustomEventSchemasCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the custom event schema. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMetadataSchema**
> ManagementProjectsMetadataSchemasCreateResponseBody createMetadataSchema()

Creates a new metadata (custom attribute) schema for a given resource. The schema consists of a set of key-value pairs to customize Voucherify resources.  You can nest your object within a standard metadata schema, e.g. within a campaign or customer schema. However, your nested object cant include another nested object. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward Use this endpoint to define a metadata schema of a given resource for the first time. Once you configure a metadata schema for a given related_object, use the PUT [Update metadata schema](/api-reference/management/update-metadata-schema) endpoint to either update or add new metadata key-value pairs. For example, use this endpoint to define a metadata schema for related_object: campaign for the first time. If you want define a new metadata property for campaign, use the [PUT Update metadata schema](/api-reference/management/update-metadata-schema) endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiCreateMetadataSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiCreateMetadataSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Defines the metadata schema. (optional)
  managementProjectsMetadataSchemasCreateRequestBody: {
    relatedObject: "relatedObject_example",
    allowDefinedOnly: false,
    properties: {
      "key": {
        type: "string",
        optional: true,
        array: true,
        deleted: true,
        objectType: "objectType_example",
        minLength: 1,
        maxLength: 1,
        exactLength: 1,
        eq: [
          null,
        ],
        ne: [
          3.14,
        ],
        lt: 3.14,
        lte: 3.14,
        gt: 3.14,
        gte: 3.14,
      },
    },
  },
};

const data = await apiInstance.createMetadataSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsMetadataSchemasCreateRequestBody** | **ManagementProjectsMetadataSchemasCreateRequestBody**| Defines the metadata schema. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsMetadataSchemasCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the metadata schema. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProject**
> ManagementProjectsCreateResponseBody createProject()

Creates a new project. You can add users, specify the cluster, timezone, currency, and other details. All owners are added to the project by default.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiCreateProjectRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiCreateProjectRequest = {
    // Define project details. (optional)
  managementProjectsCreateRequestBody: {
    caseSensitiveCodes: true,
    name: "name_example",
    description: "description_example",
    timezone: "timezone_example",
    currency: "currency_example",
    dialCode: "dialCode_example",
    webhookVersion: "v2024-01-01",
    clientTrustedDomains: [
      "clientTrustedDomains_example",
    ],
    clientRedeemEnabled: true,
    clientPublishEnabled: true,
    clientListVouchersEnabled: true,
    clientCreateCustomerEnabled: true,
    clientLoyaltyEventsEnabled: true,
    clientSetVoucherExpirationDateEnabled: true,
    webhooksCalloutNotifications: {
      distributions: {
        email: true,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      webhooks: {
        email: true,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
    },
    apiUsageNotifications: {
      messages: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      apiCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      bulkApiCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      webhookCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      cycleCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
    },
    clusterId: "clusterId_example",
    apiVersion: "v2018-08-01",
    users: [
      {
        id: "id_example",
        login: "login_example",
        role: "role_example",
      },
    ],
  },
};

const data = await apiInstance.createProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsCreateRequestBody** | **ManagementProjectsCreateRequestBody**| Define project details. |


### Return type

**ManagementProjectsCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details of a created project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createStackingRules**
> ManagementProjectsStackingRulesCreateResponseBody createStackingRules()

Overwrites the default stacking rules. If new stacking rules have been created for the project earlier (e.g. in the user interface), it returns an error. Use [Update stacking rules](/api-reference/management/update-stacking-rules) endpoint to change the rules.  📘 Stacking rules documentation  Read [the Stacking rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiCreateStackingRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiCreateStackingRulesRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Defines the stacking rule parameters. (optional)
  managementProjectsStackingRulesCreateRequestBody: {
    exclusiveCategories: [
      "exclusiveCategories_example",
    ],
    jointCategories: [
      "jointCategories_example",
    ],
    redeemablesLimit: 1,
    applicableRedeemablesLimit: 1,
    applicableRedeemablesPerCategoryLimit: 1,
    applicableRedeemablesCategoryLimits: {
      "key": 1,
    },
    applicableExclusiveRedeemablesLimit: 1,
    applicableExclusiveRedeemablesPerCategoryLimit: 1,
    discountCalculationMode: "INITIAL_AMOUNT",
    initialAmountModeCategories: [
      "initialAmountModeCategories_example",
    ],
    discountedAmountModeCategories: [
      "discountedAmountModeCategories_example",
    ],
    redeemablesApplicationMode: "ALL",
    redeemablesSortingRule: "CATEGORY_HIERARCHY",
    redeemablesProductsApplicationMode: "STACK",
    redeemablesNoEffectRule: "REDEEM_ANYWAY",
    noEffectSkipCategories: [
      "noEffectSkipCategories_example",
    ],
    noEffectRedeemAnywayCategories: [
      "noEffectRedeemAnywayCategories_example",
    ],
    redeemablesRollbackOrderMode: "WITH_ORDER",
  },
};

const data = await apiInstance.createStackingRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsStackingRulesCreateRequestBody** | **ManagementProjectsStackingRulesCreateRequestBody**| Defines the stacking rule parameters. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsStackingRulesCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the stacking rules assigned to the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWebhook**
> ManagementProjectsWebhooksCreateResponseBody createWebhook()

Creates a new webhook configuration.  📘 Webhook Documentation  Read [Webhooks v2024-01-01](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiCreateWebhookRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiCreateWebhookRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Defines a webhook configuration. (optional)
  managementProjectsWebhooksCreateRequestBody: {
    targetUrl: "targetUrl_example",
    events: [
      "business_validation_rule.assignment.created",
    ],
    active: true,
  },
};

const data = await apiInstance.createWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsWebhooksCreateRequestBody** | **ManagementProjectsWebhooksCreateRequestBody**| Defines a webhook configuration. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsWebhooksCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the webhook configuration. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBrand**
> void deleteBrand()

Deletes permanently a brand configuration.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiDeleteBrandRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiDeleteBrandRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the brand configuration.
  brandingId: "brd_06d06m1944y0630hD4y",
};

const data = await apiInstance.deleteBrand(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **brandingId** | [**string**] | Provide the unique identifier of the brand configuration. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the brand configuration has been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomEventSchema**
> void deleteCustomEventSchema()

Deletes permanently the custom event schema with its custom properties (metadata).  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiDeleteCustomEventSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiDeleteCustomEventSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the custom event schema.
  customEventSchemaId: "ms_f1r5Tcu5T0m3v3nT5ch3ma",
};

const data = await apiInstance.deleteCustomEventSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **customEventSchemaId** | [**string**] | Provide the unique identifier of the custom event schema. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the custom event schema has been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMetadataSchema**
> void deleteMetadataSchema()

Deletes permanently the metadata schema. In standard metadata schemas, this endpoint removes permanently all definitions. The standard metadata schemas are: - Campaign - Voucher - Publication - Redemption - Product - Customer - Order - Order line item - Loyalty Tier - Promotion Tier - Earning rule - Reward If you want to delete only one definition, use the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. In the request, provide the deleted: true pair in the definition object. This definition will be moved to Removed definitions. If you want to create a new standard metadata schema, use the [Create Metadata Schema](/api-reference/management/create-metadata-schema) endpoint.  🚧 Metadata Purging This endpoint deletes permanently the metadata schemas only. However, it does not purge the metadata from associated entities, so the metadata added to those entities will remain. If you want to purge metadata from the entities: 1. Remove all the definitions you want to purge. You can do this either in Voucherify Project Settings > Metadata Schema tab or with the [Update Metadata Schema](/api-reference/management/update-metadata-schema) endpoint. 2. In Voucherify Project Settings > Metadata Schema tab, go to the relevant metadata schema. 3. In Removed definitions, click the bin button next to the definitions whose metadata you want to purge from entities. Note: - This is an asynchronous action. You will be notified when it has been completed. - You cannot purge metadata for the Redemption and Publication schemas. 4. Use the Delete Metadata Schema request to delete the metadata schema from Voucherify.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiDeleteMetadataSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiDeleteMetadataSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the metadata schema.
  metadataSchemaId: "ms_f0r4hm3ta6a4a5ch3ma",
};

const data = await apiInstance.deleteMetadataSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **metadataSchemaId** | [**string**] | Provide the unique identifier of the metadata schema. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the metadata schema has been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProject**
> void deleteProject()

Deletes an existing project. The users currently using the deleted project will be automatically logged out.  🚧 Sandbox Project The sandbox project cannot be deleted.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiDeleteProjectRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiDeleteProjectRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.deleteProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if deletion is successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteStackingRules**
> void deleteStackingRules()

Deletes permanently the current settings for the stacking rules. The stacking rules are restored to default values.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiDeleteStackingRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiDeleteStackingRulesRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the stacking rules.
  stackingRulesId: "stk_0d6264108617006147",
};

const data = await apiInstance.deleteStackingRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **stackingRulesId** | [**string**] | Provide the unique identifier of the stacking rules. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the stacking rules have been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWebhook**
> void deleteWebhook()

Deletes a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiDeleteWebhookRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiDeleteWebhookRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the webhook configuration.
  webhookId: "wh_Fk1HzL9lqC1lpuIFxp3TShB4",
};

const data = await apiInstance.deleteWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **webhookId** | [**string**] | Provide the unique identifier of the webhook configuration. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the webhook configuration has been successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBrand**
> ManagementProjectsBrandingGetResponseBody getBrand()

Retrieves a brand configuration.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetBrandRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetBrandRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the brand configuration.
  brandingId: "brd_06d06m1944y0630hD4y",
};

const data = await apiInstance.getBrand(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **brandingId** | [**string**] | Provide the unique identifier of the brand configuration. | defaults to undefined


### Return type

**ManagementProjectsBrandingGetResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the brand configuration. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomEventSchema**
> ManagementProjectsCustomEventSchemasGetResponseBody getCustomEventSchema()

Retrieves a custom event schema.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetCustomEventSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetCustomEventSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the custom event schema.
  customEventSchemaId: "ms_f1r5Tcu5T0m3v3nT5ch3ma",
};

const data = await apiInstance.getCustomEventSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **customEventSchemaId** | [**string**] | Provide the unique identifier of the custom event schema. | defaults to undefined


### Return type

**ManagementProjectsCustomEventSchemasGetResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the custom event schema. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMetadataSchema1**
> ManagementProjectsMetadataSchemasGetResponseBody getMetadataSchema1()

Retrieves a metadata schema.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetMetadataSchema1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetMetadataSchema1Request = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the metadata schema.
  metadataSchemaId: "ms_f0r4hm3ta6a4a5ch3ma",
};

const data = await apiInstance.getMetadataSchema1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **metadataSchemaId** | [**string**] | Provide the unique identifier of the metadata schema. | defaults to undefined


### Return type

**ManagementProjectsMetadataSchemasGetResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the metadata schema. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProject**
> ManagementProjectsGetResponseBody getProject()

Retrieves an existing project.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetProjectRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetProjectRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.getProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsGetResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details of a project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStackingRules**
> ManagementProjectsStackingRulesGetResponseBody getStackingRules()

Retrieves the stacking rules for the project.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetStackingRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetStackingRulesRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the stacking rules.
  stackingRulesId: "stk_0d6264108617006147",
};

const data = await apiInstance.getStackingRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **stackingRulesId** | [**string**] | Provide the unique identifier of the stacking rules. | defaults to undefined


### Return type

**ManagementProjectsStackingRulesGetResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the stacking rules for the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUser**
> ManagementProjectsUsersGetUserResponseBody getUser()

Retrieves the project users details.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetUserRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetUserRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the user. Alternatively, provide the users login.
  userId: "user_v18mvPOjOXE5733eO4cAz8k1pn492wKK",
};

const data = await apiInstance.getUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **userId** | [**string**] | Provide the unique identifier of the user. Alternatively, provide the users login. | defaults to undefined


### Return type

**ManagementProjectsUsersGetUserResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the project user\&#39;s details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWebhook**
> ManagementProjectsWebhooksGetResponseBody getWebhook()

Retrieves a webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiGetWebhookRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiGetWebhookRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the webhook configuration.
  webhookId: "wh_Fk1HzL9lqC1lpuIFxp3TShB4",
};

const data = await apiInstance.getWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **webhookId** | [**string**] | Provide the unique identifier of the webhook configuration. | defaults to undefined


### Return type

**ManagementProjectsWebhooksGetResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the webhook configuration. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inviteUser**
> void inviteUser()

Sends an invitation to an email address that has not been used yet as a Voucherify user login. You can specify the projects to which the invited user will be assigned and define their roles.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiInviteUserRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiInviteUserRequest = {
    // Defines the details of the invitation, the project, and roles to which the user will be assigned. (optional)
  managementProjectsUsersInviteCreateRequestBody: {
    email: "alex.doe@your-domain-name.com",
    firstName: "Alex",
    lastName: "Doe",
    projects: {
      "key": "key_example",
    },
  },
};

const data = await apiInstance.inviteUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsUsersInviteCreateRequestBody** | **ManagementProjectsUsersInviteCreateRequestBody**| Defines the details of the invitation, the project, and roles to which the user will be assigned. |


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the invitation has been sent successfully. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBrands**
> ManagementProjectsBrandingListResponseBody listBrands()

Lists all brand configurations. Because a project can have only one brand, it always returns a list with one item. This endpoint can be used to retrieve the brand configuration created with the Voucherify Dashboard and the ID.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiListBrandsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiListBrandsRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.listBrands(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsBrandingListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the brand created in the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomEventSchemas**
> ManagementProjectsCustomEventSchemasListResponseBody listCustomEventSchemas()

Lists all custom event schemas available in the project.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiListCustomEventSchemasRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiListCustomEventSchemasRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.listCustomEventSchemas(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsCustomEventSchemasListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the custom event schemas created in the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMetadataSchemas1**
> ManagementProjectsMetadataSchemasListResponseBody listMetadataSchemas1()

Lists all metadata schemas available in the project.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiListMetadataSchemas1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiListMetadataSchemas1Request = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.listMetadataSchemas1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsMetadataSchemasListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the metadata schemas created in the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjects**
> ManagementProjectsListResponseBody listProjects()

Lists all projects for the organization. The endpoint does not require any query parameters.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request = {};

const data = await apiInstance.listProjects(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ManagementProjectsListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of all projects with their details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStackingRules**
> ManagementProjectsStackingRulesListResponseBody listStackingRules()

Lists all stacking rules. Returns always a list with one item. This endpoint can be used to retrieve the default stacking rules. The default stacking rules do not have an ID that could be used with the [Get Stacking Rules](/api-reference/management/get-stacking-rules) or [Update Stacking Rules](/api-reference/management/update-stacking-rules) endpoints.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiListStackingRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiListStackingRulesRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.listStackingRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsStackingRulesListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the stacking rules assigned to the project. These can be either the default stacking rules or the created ones. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUsers**
> ManagementProjectsUsersListResponseBody listUsers()

Lists all users assigned to the project.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiListUsersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiListUsersRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.listUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsUsersListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of all the users assigned to the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWebhooks**
> ManagementProjectsWebhooksListResponseBody listWebhooks()

Lists all webhook configurations for the project.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiListWebhooksRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiListWebhooksRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
};

const data = await apiInstance.listWebhooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsWebhooksListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about webhook configurations created in the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **managementCopyCampaignTemplate**
> ManagementProjectsTemplatesCampaignsCopyCreateResponseBody managementCopyCampaignTemplate()

Copies a campaign template to another project. The resources, like validation rules or products, will not be copied to the destination project yet. When the template is used to create a new campaign or add a new promotion tier, the resources will be created in the destination project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiManagementCopyCampaignTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiManagementCopyCampaignTemplateRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the campaign template.
  campaignTemplateId: "camp_tpl_zLtn2H9fgcG3NwO7t4PAfHcq",
    // Determines the details about the template in the destination project as well as the destination project itself. (optional)
  managementProjectsTemplatesCampaignsCopyCreateRequestBody: {
    name: "name_example",
    description: "description_example",
    destinationProjectId: "destinationProjectId_example",
  },
};

const data = await apiInstance.managementCopyCampaignTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsTemplatesCampaignsCopyCreateRequestBody** | **ManagementProjectsTemplatesCampaignsCopyCreateRequestBody**| Determines the details about the template in the destination project as well as the destination project itself. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **campaignTemplateId** | [**string**] | Provide the unique identifier of the campaign template. | defaults to undefined


### Return type

**ManagementProjectsTemplatesCampaignsCopyCreateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the copied campaign template. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **managementListCampaignTemplates**
> ManagementProjectsTemplatesCampaignsListResponseBody managementListCampaignTemplates()

Lists all campaign templates available in the project.  👍 List Campaign Templates  This endpoint works in the same way as the [List Campaign Templates endpoint](/api-reference/templates/list-campaign-templates).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiManagementListCampaignTemplatesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiManagementListCampaignTemplatesRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // A cursor for pagination. It retrieves the campaign templates created after a template with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default. (optional)
  includeTotal: true,
    // Filters for listing templates. (optional)
  filters: {
    junction: "and",
    id: {
      conditions: {
        _in: [
          "_in_example",
        ],
        notIn: [
          "notIn_example",
        ],
        is: "is_example",
        isNot: "isNot_example",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
        contains: "contains_example",
        notContain: "notContain_example",
      },
    },
    name: {
      conditions: {
        _in: [
          "_in_example",
        ],
        notIn: [
          "notIn_example",
        ],
        is: "is_example",
        isNot: "isNot_example",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
        contains: "contains_example",
        notContain: "notContain_example",
      },
    },
    campaignType: {
      conditions: {
        _in: [
          "DISCOUNT_COUPONS",
        ],
        notIn: [
          "DISCOUNT_COUPONS",
        ],
        is: "DISCOUNT_COUPONS",
        isNot: "DISCOUNT_COUPONS",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
      },
    },
  },
};

const data = await apiInstance.managementListCampaignTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the campaign templates created after a template with the given ID. | (optional) defaults to undefined
 **order** | **ParameterTemplatesList** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **includeTotal** | [**boolean**] | If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListTemplates** | Filters for listing templates. | (optional) defaults to undefined


### Return type

**ManagementProjectsTemplatesCampaignsListResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of campaign template objects. The templates are returned by creation date by default. The most recent objects appear last unless specified otherwise with the &#x60;order&#x60; parameter. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unassignUser**
> void unassignUser()

Unassigns the user from the project. If the user is currently logged in, they are automatically logged out. If the user is assigned to only one project, they cannot be unassigned from that project.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUnassignUserRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUnassignUserRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the user. Alternatively, provide the users login.
  userId: "user_v18mvPOjOXE5733eO4cAz8k1pn492wKK",
};

const data = await apiInstance.unassignUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **userId** | [**string**] | Provide the unique identifier of the user. Alternatively, provide the users login. | defaults to undefined


### Return type

**void**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the user has been successfully unnassigned. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBrand**
> ManagementProjectsBrandingUpdateResponseBody updateBrand()

Updates a brand configuration. Only the fields sent in the request will be updated. The fields omitted in the request will remain unchanged.  📘 White Labelling  The white labelling settings which can be found in Project Settings > Brand Details and which are available only for Enterprise clients as a separate service can be configured only in the user interface.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateBrandRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateBrandRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the brand configuration.
  brandingId: "brd_06d06m1944y0630hD4y",
    // Defines the brand configuration to be updated. (optional)
  managementProjectsBrandingUpdateRequestBody: {
    brand: {
      name: "name_example",
      privacyPolicyUrl: "privacyPolicyUrl_example",
      termsOfUseUrl: "termsOfUseUrl_example",
      permissionReminder: "permissionReminder_example",
      websiteUrl: "websiteUrl_example",
    },
    address: {
      street: "street_example",
      city: "city_example",
      postal: "postal_example",
      state: "state_example",
      country: "country_example",
    },
    contact: {
      email: "email_example",
      phone: "phone_example",
    },
    cockpits: {
      campaignsOverviewEnabled: true,
      loyaltyEnabled: true,
      giftCardsEnabled: true,
      couponsEnabled: true,
      referralsEnabled: true,
      theme: "orange",
      useCustomDoubleOptInRedirectUrl: true,
      customDoubleOptInRedirectUrl: "customDoubleOptInRedirectUrl_example",
    },
  },
};

const data = await apiInstance.updateBrand(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsBrandingUpdateRequestBody** | **ManagementProjectsBrandingUpdateRequestBody**| Defines the brand configuration to be updated. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **brandingId** | [**string**] | Provide the unique identifier of the brand configuration. | defaults to undefined


### Return type

**ManagementProjectsBrandingUpdateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the updated brand configuration. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomEventSchema**
> ManagementProjectsCustomEventSchemasUpdateResponseBody updateCustomEventSchema()

Updates a custom event schema. With this request, you can: - Add a nonexistent property to a custom event schema. - Update an existing property. In the request, you can provide only those properties you want to add or update. Definitions omitted in the request remain unchanged.  👍 Additional Notes - You can change the type of an existing property, e.g. from string to number. - You can remove a custom property with this endpoint by providing deleted: true in the request. However, you cannot permanently remove an event definition or its property with this endpoint.  📘 Custom Event Documentation  Read [Custom Events](https://support.voucherify.io/article/111-custom-events) article to learn how custom events work in Voucherify. Read also the details about the [Track Custom Event](/api-reference/events/track-custom-event) endpoint and the [Custom Event Object](/api-reference/events/event-object).

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateCustomEventSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateCustomEventSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the custom event schema.
  customEventSchemaId: "ms_f1r5Tcu5T0m3v3nT5ch3ma",
    // Defines the custom event schema to be updated. (optional)
  managementProjectsCustomEventSchemasUpdateRequestBody: {
    schema: {
      properties: {
        "key": {
          type: "string",
          optional: true,
          deleted: true,
        },
      },
    },
  },
};

const data = await apiInstance.updateCustomEventSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsCustomEventSchemasUpdateRequestBody** | **ManagementProjectsCustomEventSchemasUpdateRequestBody**| Defines the custom event schema to be updated. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **customEventSchemaId** | [**string**] | Provide the unique identifier of the custom event schema. | defaults to undefined


### Return type

**ManagementProjectsCustomEventSchemasUpdateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the updated custom event schema. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMetadataSchema**
> ManagementProjectsMetadataSchemasUpdateResponseBody updateMetadataSchema()

Updates a metadata schema. With this request, you can: - Add a nonexistent attribute definition to the metadata schema. - Update an existing attribute definition by overwriting its current values. In the request, you can provide only those definitions you want to add or update. Definitions omitted in the request remain unchanged. However, if you want to update a definition, you will have to add all its current key-value pairs as well. Only the pairs sent in the request are saved for this definition. This means that the key-value pairs that are not sent in a request are restored to default values. For example, if your definition has an array with values and it is not sent in an update request, the array values will be deleted.  👍 Additional Notes - You cannot change the type of an existing schema, e.g. from string to number. - You can remove a definition with this endpoint by providing deleted: true in the request. It will be moved to the Removed definitions section in the user interface. However, you cannot permanently remove a definition with this endpoint.  📘 Metadata Documentation  Read [the Getting Started with Metadata](https://support.voucherify.io/article/99-schema-validation-metadata) and [Metadata Mapping](/guides/metadata-mapping) articles to learn how metadata work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateMetadataSchemaRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateMetadataSchemaRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the metadata schema.
  metadataSchemaId: "ms_f0r4hm3ta6a4a5ch3ma",
    // Defines the metadata schema to be updated. (optional)
  managementProjectsMetadataSchemasUpdateRequestBody: {
    allowDefinedOnly: true,
    properties: {
      "key": {
        type: "string",
        optional: true,
        array: true,
        deleted: true,
        objectType: "objectType_example",
        minLength: 1,
        maxLength: 1,
        exactLength: 1,
        eq: [
          null,
        ],
        ne: [
          3.14,
        ],
        lt: 3.14,
        lte: 3.14,
        gt: 3.14,
        gte: 3.14,
      },
    },
  },
};

const data = await apiInstance.updateMetadataSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsMetadataSchemasUpdateRequestBody** | **ManagementProjectsMetadataSchemasUpdateRequestBody**| Defines the metadata schema to be updated. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **metadataSchemaId** | [**string**] | Provide the unique identifier of the metadata schema. | defaults to undefined


### Return type

**ManagementProjectsMetadataSchemasUpdateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the updated metadata schema. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProject**
> ManagementProjectsUpdateResponseBody updateProject()

Updates an existing project. You can add or modify settings for timezone, currency, notifications, and other details. Only the fields sent in the request will be updated.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateProjectRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateProjectRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Define the project details to be updated. (optional)
  managementProjectsUpdateRequestBody: {
    name: "name_example",
    description: "description_example",
    timezone: "timezone_example",
    currency: "currency_example",
    dialCode: "dialCode_example",
    webhookVersion: "v2024-01-01",
    clientTrustedDomains: [
      "clientTrustedDomains_example",
    ],
    clientRedeemEnabled: true,
    clientPublishEnabled: true,
    clientListVouchersEnabled: true,
    clientCreateCustomerEnabled: true,
    clientLoyaltyEventsEnabled: true,
    clientSetVoucherExpirationDateEnabled: true,
    webhooksCalloutNotifications: {
      distributions: {
        email: true,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      webhooks: {
        email: true,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
    },
    apiUsageNotifications: {
      messages: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      apiCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      bulkApiCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      webhookCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
      cycleCalls: {
        enabled: true,
        value: 10,
        inApp: true,
        emails: [
          "emails_example",
        ],
      },
    },
    defaultCodeConfig: {
      charset: "charset_example",
    },
  },
};

const data = await apiInstance.updateProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsUpdateRequestBody** | **ManagementProjectsUpdateRequestBody**| Define the project details to be updated. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined


### Return type

**ManagementProjectsUpdateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details of an updated project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateStackingRules**
> ManagementProjectsStackingRulesUpdateResponseBody updateStackingRules()

Updates the stacking rules. Only the provided fields will be updated. However, if you update an array, the content of the array is overwritten. This means that if you want to add new values to an array and retain existing ones, you need to provide both the existing and new values in the request.  📘 Stacking Rules Documentation  Read [the Stacking Rules article](https://support.voucherify.io/article/604-stacking-rules) to learn how they work.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateStackingRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateStackingRulesRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the stacking rules.
  stackingRulesId: "stk_0d6264108617006147",
    // Defines the stacking rules to be updated. (optional)
  managementProjectsStackingRulesUpdateRequestBody: {
    exclusiveCategories: [
      "exclusiveCategories_example",
    ],
    jointCategories: [
      "jointCategories_example",
    ],
    redeemablesLimit: 1,
    applicableRedeemablesLimit: 1,
    applicableRedeemablesPerCategoryLimit: 1,
    applicableRedeemablesCategoryLimits: {
      "key": 1,
    },
    applicableExclusiveRedeemablesLimit: 1,
    applicableExclusiveRedeemablesPerCategoryLimit: 1,
    discountCalculationMode: "INITIAL_AMOUNT",
    initialAmountModeCategories: [
      "initialAmountModeCategories_example",
    ],
    discountedAmountModeCategories: [
      "discountedAmountModeCategories_example",
    ],
    redeemablesApplicationMode: "ALL",
    redeemablesSortingRule: "CATEGORY_HIERARCHY",
    redeemablesProductsApplicationMode: "STACK",
    redeemablesNoEffectRule: "REDEEM_ANYWAY",
    noEffectSkipCategories: [
      "noEffectSkipCategories_example",
    ],
    noEffectRedeemAnywayCategories: [
      "noEffectRedeemAnywayCategories_example",
    ],
    redeemablesRollbackOrderMode: "WITH_ORDER",
  },
};

const data = await apiInstance.updateStackingRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsStackingRulesUpdateRequestBody** | **ManagementProjectsStackingRulesUpdateRequestBody**| Defines the stacking rules to be updated. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **stackingRulesId** | [**string**] | Provide the unique identifier of the stacking rules. | defaults to undefined


### Return type

**ManagementProjectsStackingRulesUpdateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the updated stacking rules. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> ManagementProjectsUsersUpdateRoleResponseBody updateUser()

Updates the users role.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateUserRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateUserRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the user. Alternatively, provide the users login.
  userId: "user_v18mvPOjOXE5733eO4cAz8k1pn492wKK",
    // Defines the users new role. (optional)
  managementProjectsUsersUpdateRoleRequestBody: {
    role: "role_example",
  },
};

const data = await apiInstance.updateUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsUsersUpdateRoleRequestBody** | **ManagementProjectsUsersUpdateRoleRequestBody**| Defines the users new role. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **userId** | [**string**] | Provide the unique identifier of the user. Alternatively, provide the users login. | defaults to undefined


### Return type

**ManagementProjectsUsersUpdateRoleResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the user assigned to the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWebhook**
> ManagementProjectsWebhooksUpdateResponseBody updateWebhook()

Updates a webhook configuration. The events listed in the request are overwritten. If you want to add more events, provide also the events that are already in the webhook configuration.  📘 Webhook Documentation  Read [Introduction to webhooks](/api-reference/introduction-to-webhooks) article to learn how webhooks work in Voucherify.

### Example


```typescript
import { createConfiguration, ManagementApi } from 'voucherify';
import type { ManagementApiUpdateWebhookRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ManagementApi(configuration);

const request: ManagementApiUpdateWebhookRequest = {
    // Provide the unique identifier of the project.
  projectId: "proj_TrlkLiH4",
    // Provide the unique identifier of the webhook configuration.
  webhookId: "wh_Fk1HzL9lqC1lpuIFxp3TShB4",
    // Defines the webhook configuration to be updated. (optional)
  managementProjectsWebhooksUpdateRequestBody: {
    targetUrl: "targetUrl_example",
    events: [
      "business_validation_rule.assignment.created",
    ],
    active: true,
  },
};

const data = await apiInstance.updateWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managementProjectsWebhooksUpdateRequestBody** | **ManagementProjectsWebhooksUpdateRequestBody**| Defines the webhook configuration to be updated. |
 **projectId** | [**string**] | Provide the unique identifier of the project. | defaults to undefined
 **webhookId** | [**string**] | Provide the unique identifier of the webhook configuration. | defaults to undefined


### Return type

**ManagementProjectsWebhooksUpdateResponseBody**

### Authorization

[X-Management-Token](README.md#X-Management-Token), [X-Management-Id](README.md#X-Management-Id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the updated webhook configuration. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


