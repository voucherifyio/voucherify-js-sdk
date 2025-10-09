# .TemplatesApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTierFromTemplate**](TemplatesApi.md#addTierFromTemplate) | **POST** /v1/templates/campaigns/{campaignTemplateId}/tier-setup | Add Promotion Tier From Template
[**createCampaignFromTemplate**](TemplatesApi.md#createCampaignFromTemplate) | **POST** /v1/templates/campaigns/{campaignTemplateId}/campaign-setup | Create Campaign From Template
[**createCampaignTemplate**](TemplatesApi.md#createCampaignTemplate) | **POST** /v1/templates/campaigns | Create Campaign Template
[**deleteCampaignTemplate**](TemplatesApi.md#deleteCampaignTemplate) | **DELETE** /v1/templates/campaigns/{campaignTemplateId} | Delete Campaign Template
[**getCampaignTemplate**](TemplatesApi.md#getCampaignTemplate) | **GET** /v1/templates/campaigns/{campaignTemplateId} | Get Campaign Template
[**listCampaignTemplates**](TemplatesApi.md#listCampaignTemplates) | **GET** /v1/templates/campaigns | List Campaign Templates
[**updateCampaignTemplate**](TemplatesApi.md#updateCampaignTemplate) | **PUT** /v1/templates/campaigns/{campaignTemplateId} | Update Campaign Template


# **addTierFromTemplate**
> TemplatesCampaignsTierSetupCreateResponseBody addTierFromTemplate()

Creates a promotion tier out of a discount campaign template and adds it to an existing promotion campaign. To add a promotion tier to a campaign, you need to provide the name in the request and the campaign ID. Other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an action or an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the promotion tier. When the promotion tier has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rule-assignment).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiAddTierFromTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiAddTierFromTemplateRequest = {
    // Pass the campaign template ID that was assigned by Voucherify.
  campaignTemplateId: "camp_tpl_zLtn2H9fgcG3NwO7t4PAfHcq",
    // Only name and campaign_id are required. The rest of the fields will overwrite the template configuration. (optional)
  templatesCampaignsTierSetupCreateRequestBody: {
    campaignId: "campaignId_example",
    name: "name_example",
    banner: "banner_example",
    metadata: {},
    hierarchy: 1,
    active: true,
    startDate: new Date('2022-09-23T00:00:00Z'),
    expirationDate: new Date('2022-09-26T00:00:00Z'),
    validityTimeframe: {
      duration: "PT1H",
      interval: "P2D",
    },
    validityDayOfWeek: [
      0,
    ],
    validityHours: {
      daily: [
        {
          startTime: "12:00",
          daysOfWeek: [
            0,
          ],
          expirationTime: "14:00",
        },
      ],
    },
    category: "cat_0c9da30e7116ba6bba",
    categoryId: "cat_0c9da30e7116ba6bba",
  },
};

const data = await apiInstance.addTierFromTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatesCampaignsTierSetupCreateRequestBody** | **TemplatesCampaignsTierSetupCreateRequestBody**| Only name and campaign_id are required. The rest of the fields will overwrite the template configuration. |
 **campaignTemplateId** | [**string**] | Pass the campaign template ID that was assigned by Voucherify. | defaults to undefined


### Return type

**TemplatesCampaignsTierSetupCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the added promotion tier and about the resources that have been created out of the template and added to the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCampaignFromTemplate**
> TemplatesCampaignsCampaignSetupCreateResponseBody createCampaignFromTemplate()

Creates a campaign out of a campaign template. To create a campaign, you need to provide the name in the request, while other fields are optional. If no other fields are sent, the configuration from the template will be used. You can send new values of the fields listed below to replace the settings saved in the template. However, you cannot assign an existing validation rule or create a new one in the request. If the template has a validation rule, a new validation rule is always created for the campaign. When the campaign has been created, then you can: - [Update the validation rule](/api-reference/validation-rules/update-validation-rule), - [Unassign the validation rule](/api-reference/validation-rules/delete-validation-rule-assignment), - [Assign an existing validation rule](/api-reference/validation-rules/create-validation-rules-assignments).  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template) - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template)  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiCreateCampaignFromTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiCreateCampaignFromTemplateRequest = {
    // Pass the campaign template ID that was assigned by Voucherify.
  campaignTemplateId: "camp_tpl_zLtn2H9fgcG3NwO7t4PAfHcq",
    // Only name is required. The rest of the fields will overwrite the template configuration. (optional)
  templatesCampaignsCampaignSetupCreateRequestBody: {
    name: "name_example",
    description: "description_example",
    type: "AUTO_UPDATE",
    joinOnce: true,
    autoJoin: true,
    useVoucherMetadataSchema: true,
    vouchersCount: 1,
    startDate: new Date('2022-09-20T00:00:00Z'),
    expirationDate: new Date('2022-09-30T00:00:00Z'),
    validityTimeframe: {
      duration: "PT1H",
      interval: "P2D",
    },
    validityDayOfWeek: [
      0,
    ],
    validityHours: {
      daily: [
        {
          startTime: "12:00",
          daysOfWeek: [
            0,
          ],
          expirationTime: "14:00",
        },
      ],
    },
    activityDurationAfterPublishing: "activityDurationAfterPublishing_example",
    categoryId: "cat_0b688929a2476386a7",
    category: "category_example",
    metadata: {},
    accessSettings: {
      assign: {
        areasIds: [
          "areasIds_example",
        ],
        areaStoresIds: [
          "areaStoresIds_example",
        ],
        areaAllStoresIds: [
          "areaAllStoresIds_example",
        ],
      },
      unassign: {
        areasIds: [
          "areasIds_example",
        ],
        areaStoresIds: [
          "areaStoresIds_example",
        ],
        areaAllStoresIds: [
          "areaAllStoresIds_example",
        ],
      },
    },
    voucher: {
      codeConfig: {
        length: 3.14,
        charset: "charset_example",
        prefix: "prefix_example",
        postfix: "postfix_example",
        pattern: "pattern_example",
        initialCount: 1,
      },
      redemption: {
        quantity: 1,
      },
    },
  },
};

const data = await apiInstance.createCampaignFromTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatesCampaignsCampaignSetupCreateRequestBody** | **TemplatesCampaignsCampaignSetupCreateRequestBody**| Only name is required. The rest of the fields will overwrite the template configuration. |
 **campaignTemplateId** | [**string**] | Pass the campaign template ID that was assigned by Voucherify. | defaults to undefined


### Return type

**TemplatesCampaignsCampaignSetupCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the created campaign and about the resources that have been created out of the template and added to the project. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCampaignTemplate**
> TemplatesCampaignsCreateTemplateResponseBody createCampaignTemplate()

Creates a template for a discount or gift campaign, or a promotion tier. A template stores campaign configuration **without** the following details: - Campaign name - Category - Code count The following elements are not supported by campaign templates: - Redeeming API keys - Redeeming users - Customer loyalty tier - Static segments  👍 Promotion Tiers and Campaign Templates You can create a campaign template out of a promotion tier. Promotion tiers are converted to a discount campaign with the DISCOUNT_COUPON type. You can use this template to create: - [Discount campaign](/api-reference/templates/create-campaign-from-template), - [Promotion tier](/api-reference/templates/add-promotion-tier-from-template).  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiCreateCampaignTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiCreateCampaignTemplateRequest = {
    // Provide details for a campaign template (optional)
  templatesCampaignsCreateRequestBody: {
    campaignId: "campaignId_example",
    promotionTierId: "promotionTierId_example",
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.createCampaignTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatesCampaignsCreateRequestBody** | **TemplatesCampaignsCreateRequestBody**| Provide details for a campaign template |


### Return type

**TemplatesCampaignsCreateTemplateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details of a created campaign template. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCampaignTemplate**
> void deleteCampaignTemplate()

Deletes the campaign template permanently.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiDeleteCampaignTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiDeleteCampaignTemplateRequest = {
    // Pass the campaign template ID that was assigned by Voucherify.
  campaignTemplateId: "camp_tpl_zLtn2H9fgcG3NwO7t4PAfHcq",
};

const data = await apiInstance.deleteCampaignTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignTemplateId** | [**string**] | Pass the campaign template ID that was assigned by Voucherify. | defaults to undefined


### Return type

**void**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if deletion is successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaignTemplate**
> TemplatesCampaignsGetResponseBody getCampaignTemplate()

Retrieves a campaign template available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiGetCampaignTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiGetCampaignTemplateRequest = {
    // Pass the campaign template ID that was assigned by Voucherify.
  campaignTemplateId: "camp_tpl_zLtn2H9fgcG3NwO7t4PAfHcq",
};

const data = await apiInstance.getCampaignTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignTemplateId** | [**string**] | Pass the campaign template ID that was assigned by Voucherify. | defaults to undefined


### Return type

**TemplatesCampaignsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about a campaign template. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCampaignTemplates**
> TemplatesCampaignsListResponseBody listCampaignTemplates()

Lists all campaign templates available in the project.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiListCampaignTemplatesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiListCampaignTemplatesRequest = {
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

const data = await apiInstance.listCampaignTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the campaign templates created after a template with the given ID. | (optional) defaults to undefined
 **order** | **ParameterTemplatesList** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **includeTotal** | [**boolean**] | If set to true, the response returns the number of all campaign templates, regardless of the applied filters or limits. Set to false by default. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListTemplates** | Filters for listing templates. | (optional) defaults to undefined


### Return type

**TemplatesCampaignsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of campaign template objects. The templates are returned by creation date by default. The most recent objects appear last unless specified otherwise with the &#x60;order&#x60; parameter. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCampaignTemplate**
> TemplatesCampaignsUpdateResponseBody updateCampaignTemplate()

Updates the name or description of the campaign template.  📘 Campaign Templates – Documentation Read the [Campaign Templates documentation](https://support.voucherify.io/article/620-campaign-templates) to learn more about this feature.

### Example


```typescript
import { createConfiguration, TemplatesApi } from 'voucherify';
import type { TemplatesApiUpdateCampaignTemplateRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new TemplatesApi(configuration);

const request: TemplatesApiUpdateCampaignTemplateRequest = {
    // Pass the campaign template ID that was assigned by Voucherify.
  campaignTemplateId: "camp_tpl_zLtn2H9fgcG3NwO7t4PAfHcq",
    // Provide the new name or description for the campaign template (optional)
  templatesCampaignsUpdateRequestBody: {
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.updateCampaignTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatesCampaignsUpdateRequestBody** | **TemplatesCampaignsUpdateRequestBody**| Provide the new name or description for the campaign template |
 **campaignTemplateId** | [**string**] | Pass the campaign template ID that was assigned by Voucherify. | defaults to undefined


### Return type

**TemplatesCampaignsUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details of an updated campaign template. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


