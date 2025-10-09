# .PromotionsApi

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


# **addPromotionTierToCampaign**
> PromotionsTiersCreateResponseBody addPromotionTierToCampaign()

This method allows you to add a new promotion tier to an existing campaign. The tier hierarchy will be set as the next consequtive integer following the lowest ranking tier.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiAddPromotionTierToCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiAddPromotionTierToCampaignRequest = {
    // Unique campaign ID assigned by Voucherify.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the promotion tier parameters. (optional)
  promotionsTiersCreateRequestBody: {
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
    action: {
      discount: {
        type: "AMOUNT",
        amountOff: 3.14,
        amountOffFormula: "amountOffFormula_example",
        aggregatedAmountLimit: 1,
        effect: "APPLY_TO_ORDER",
        isDynamic: true,
        unitOff: 1,
        unitOffFormula: "unitOffFormula_example",
        unitType: "unitType_example",
        product: {
          id: "id_example",
          sourceId: "sourceId_example",
          name: "name_example",
        },
        sku: {
          id: "id_example",
          sourceId: "sourceId_example",
          name: "name_example",
        },
        units: [
          {
            unitOff: 3.14,
            unitOffFormula: "unitOffFormula_example",
            effect: "ADD_NEW_ITEMS",
            unitType: "unitType_example",
            product: {
              id: "id_example",
              sourceId: "sourceId_example",
              name: "name_example",
            },
            sku: {
              id: "id_example",
              sourceId: "sourceId_example",
              name: "name_example",
            },
          },
        ],
        percentOff: 3.14,
        percentOffFormula: "percentOffFormula_example",
        amountLimit: 3.14,
        fixedAmount: 3.14,
        fixedAmountFormula: "fixedAmountFormula_example",
      },
    },
    validationRuleAssignments: {
      object: "list",
      dataRef: "data",
      data: [
        {
          id: "asgm_74F7QZoYbUoljwQO",
          ruleId: "val_4j7DCRm2IS59",
          relatedObjectId: "v_JtWunK6jUo7X2qOFj0SyRHq4p9tgENlT",
          relatedObjectType: "voucher",
          createdAt: new Date('2022-02-17T08:18:15.085Z'),
          object: "validation_rules_assignment",
        },
      ],
      total: 1,
    },
  },
};

const data = await apiInstance.addPromotionTierToCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionsTiersCreateRequestBody** | **PromotionsTiersCreateRequestBody**| Specify the promotion tier parameters. |
 **campaignId** | [**string**] | Unique campaign ID assigned by Voucherify. | defaults to undefined


### Return type

**PromotionsTiersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a promotion tier object if the promotion tier was successfully added to the campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPromotionStack**
> PromotionsStacksCreateResponseBody createPromotionStack()

This method creates one promotion stack. The sequence of promotion tier IDs will determine the promotion stacking order.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiCreatePromotionStackRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiCreatePromotionStackRequest = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the order of promotion tiers for the promotion stack. (optional)
  promotionsStacksCreateRequestBody: {
    name: "name_example",
    tiers: {
      ids: [
        "ids_example",
      ],
      hierarchyMode: "MANUAL",
    },
    categoryId: "categoryId_example",
  },
};

const data = await apiInstance.createPromotionStack(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionsStacksCreateRequestBody** | **PromotionsStacksCreateRequestBody**| Specify the order of promotion tiers for the promotion stack. |
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined


### Return type

**PromotionsStacksCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a new stack object if a valid promotion campaign identifier was provided in the path and available promotion IDs in the payload. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePromotionStack**
> void deletePromotionStack()

This method deletes a promotion stack.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiDeletePromotionStackRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiDeletePromotionStackRequest = {
    // ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Promotion stack ID.
  stackId: "stack_KOIde7AUf08at12lZ1r3OfFL",
};

const data = await apiInstance.deletePromotionStack(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign.  | defaults to undefined
 **stackId** | [**string**] | Promotion stack ID. | defaults to undefined


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

# **deletePromotionTier**
> void deletePromotionTier()

This method deletes a promotion tier.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiDeletePromotionTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiDeletePromotionTierRequest = {
    // Unique promotion tier ID.
  promotionTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
};

const data = await apiInstance.deletePromotionTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionTierId** | [**string**] | Unique promotion tier ID. | defaults to undefined


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

# **disablePromotionTier**
> PromotionsTiersDisableResponseBody disablePromotionTier()

This method disables a promotion tier, i.e. makes the active parameter   false.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiDisablePromotionTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiDisablePromotionTierRequest = {
    // Unique promotion tier ID.
  promotionTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
};

const data = await apiInstance.disablePromotionTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionTierId** | [**string**] | Unique promotion tier ID. | defaults to undefined


### Return type

**PromotionsTiersDisableResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the promotion tier object with an updated &#x60;active&#x60; parameter. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enablePromotionTier**
> PromotionsTiersEnableResponseBody enablePromotionTier()

This method enables a promotion tier, i.e. makes the active parameter   true.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiEnablePromotionTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiEnablePromotionTierRequest = {
    // Unique promotion tier ID.
  promotionTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
};

const data = await apiInstance.enablePromotionTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionTierId** | [**string**] | Unique promotion tier ID. | defaults to undefined


### Return type

**PromotionsTiersEnableResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the promotion tier object with an updated &#x60;active&#x60; parameter. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPromotionStack**
> PromotionsStacksGetResponseBody getPromotionStack()

This method returns the details of a promotion stack, including the promotion tiers grouped within the stack.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiGetPromotionStackRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiGetPromotionStackRequest = {
    // ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Promotion stack ID.
  stackId: "stack_KOIde7AUf08at12lZ1r3OfFL",
};

const data = await apiInstance.getPromotionStack(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign.  | defaults to undefined
 **stackId** | [**string**] | Promotion stack ID. | defaults to undefined


### Return type

**PromotionsStacksGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a stack object if valid identifiers were provided in the path. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPromotionTier**
> PromotionsTiersGetResponseBody getPromotionTier()

This method enables you to retrieve a specific promotion tier.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiGetPromotionTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiGetPromotionTierRequest = {
    // Unique promotion tier ID.
  promotionTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
};

const data = await apiInstance.getPromotionTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionTierId** | [**string**] | Unique promotion tier ID. | defaults to undefined


### Return type

**PromotionsTiersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a promotion tier object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllPromotionStacks**
> PromotionsStacksListResponseBody listAllPromotionStacks()

This method enables you to list promotion stacks irrespective of the campaign they are associated with.  You can use filters in the query parameters to specify the stacks to be returned in the response. # Advanced filters for fetching promotion stacks  

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiListAllPromotionStacksRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiListAllPromotionStacksRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z (optional)
  createdAt: {
    before: new Date('2021-12-22T10:13:06.487Z'),
    after: new Date('2021-12-22T10:13:06.487Z'),
  },
    // A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z (optional)
  updatedAt: {
    before: new Date('2021-12-22T10:13:06.487Z'),
    after: new Date('2021-12-22T10:13:06.487Z'),
  },
};

const data = await apiInstance.listAllPromotionStacks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListAllPromotionStacks** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **createdAt** | **ParameterCreatedBeforeAfter** | A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z | (optional) defaults to undefined
 **updatedAt** | **ParameterUpdatedBeforeAfter** | A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z | (optional) defaults to undefined


### Return type

**PromotionsStacksListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a &#x60;data&#x60; property that contains an array of promotion stacks across all your campaigns. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPromotionStacksInCampaign**
> PromotionsStacksListResponseBody listPromotionStacksInCampaign()

This method enables you to list promotion stacks from a specified campaign.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiListPromotionStacksInCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiListPromotionStacksInCampaignRequest = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
};

const data = await apiInstance.listPromotionStacksInCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined


### Return type

**PromotionsStacksListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of promotion stack objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPromotionTiers**
> PromotionsTiersListResponseBody listPromotionTiers()

This method enables you to list promotion tiers.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiListPromotionTiersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiListPromotionTiersRequest = {
    // This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions. (optional)
  isAvailable: true,
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listPromotionTiers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isAvailable** | [**boolean**] | This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListPromotionTiers** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**PromotionsTiersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a &#x60;tiers&#x60; property that contains an array of promotion tiers. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPromotionTiersFromCampaign**
> PromotionsTiersListResponseBody listPromotionTiersFromCampaign()

This method enables you to list promotion tiers from a specified campaign.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiListPromotionTiersFromCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiListPromotionTiersFromCampaignRequest = {
    // Unique campaign ID assigned by Voucherify.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
};

const data = await apiInstance.listPromotionTiersFromCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID assigned by Voucherify. | defaults to undefined


### Return type

**PromotionsTiersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a &#x60;tiers&#x60; property that contains an array of promotion tiers. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePromotionStack**
> PromotionsStacksUpdateResponseBody updatePromotionStack()

This methods allows for editing an existing stack.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiUpdatePromotionStackRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiUpdatePromotionStackRequest = {
    // ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Promotion stack ID.
  stackId: "stack_KOIde7AUf08at12lZ1r3OfFL",
    // Specify the promotion stack parameters that you would like to update. (optional)
  promotionsStacksUpdateRequestBody: {
    name: "name_example",
    tiers: {
      ids: [
        "ids_example",
      ],
      hierarchyMode: "MANUAL",
    },
    categoryId: "categoryId_example",
  },
};

const data = await apiInstance.updatePromotionStack(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionsStacksUpdateRequestBody** | **PromotionsStacksUpdateRequestBody**| Specify the promotion stack parameters that you would like to update. |
 **campaignId** | [**string**] | ID of the promotion campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty Campaign.  | defaults to undefined
 **stackId** | [**string**] | Promotion stack ID. | defaults to undefined


### Return type

**PromotionsStacksUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a promotion stack with updated parameters if the update was successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePromotionTier**
> PromotionsTiersUpdateResponseBody updatePromotionTier()

This method updates a promotion tier.

### Example


```typescript
import { createConfiguration, PromotionsApi } from 'voucherify';
import type { PromotionsApiUpdatePromotionTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PromotionsApi(configuration);

const request: PromotionsApiUpdatePromotionTierRequest = {
    // Unique promotion tier ID.
  promotionTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
    // Specify the promotion tier parameters that you would like to update. (optional)
  promotionsTiersUpdateRequestBody: {
    name: "name_example",
    banner: "banner_example",
    action: {
      discount: {
        type: "AMOUNT",
        amountOff: 3.14,
        amountOffFormula: "amountOffFormula_example",
        aggregatedAmountLimit: 1,
        effect: "APPLY_TO_ORDER",
        isDynamic: true,
        unitOff: 1,
        unitOffFormula: "unitOffFormula_example",
        unitType: "unitType_example",
        product: {
          id: "id_example",
          sourceId: "sourceId_example",
          name: "name_example",
        },
        sku: {
          id: "id_example",
          sourceId: "sourceId_example",
          name: "name_example",
        },
        units: [
          {
            unitOff: 3.14,
            unitOffFormula: "unitOffFormula_example",
            effect: "ADD_NEW_ITEMS",
            unitType: "unitType_example",
            product: {
              id: "id_example",
              sourceId: "sourceId_example",
              name: "name_example",
            },
            sku: {
              id: "id_example",
              sourceId: "sourceId_example",
              name: "name_example",
            },
          },
        ],
        percentOff: 3.14,
        percentOffFormula: "percentOffFormula_example",
        amountLimit: 3.14,
        fixedAmount: 3.14,
        fixedAmountFormula: "fixedAmountFormula_example",
      },
    },
    metadata: {},
    hierarchy: 1,
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
    validationRuleAssignments: {
      object: "list",
      dataRef: "data",
      data: [
        {
          id: "asgm_74F7QZoYbUoljwQO",
          ruleId: "val_4j7DCRm2IS59",
          relatedObjectId: "v_JtWunK6jUo7X2qOFj0SyRHq4p9tgENlT",
          relatedObjectType: "voucher",
          createdAt: new Date('2022-02-17T08:18:15.085Z'),
          object: "validation_rules_assignment",
        },
      ],
      total: 1,
    },
    category: "cat_0c9da30e7116ba6bba",
    categoryId: "cat_0c9da30e7116ba6bba",
  },
};

const data = await apiInstance.updatePromotionTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionsTiersUpdateRequestBody** | **PromotionsTiersUpdateRequestBody**| Specify the promotion tier parameters that you would like to update. |
 **promotionTierId** | [**string**] | Unique promotion tier ID. | defaults to undefined


### Return type

**PromotionsTiersUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a promotion tier object if the update was successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


