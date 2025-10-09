# .RewardsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReward**](RewardsApi.md#createReward) | **POST** /v1/rewards | Create Reward
[**createRewardAssignment**](RewardsApi.md#createRewardAssignment) | **POST** /v1/rewards/{rewardId}/assignments | Create Reward Assignment
[**deleteReward**](RewardsApi.md#deleteReward) | **DELETE** /v1/rewards/{rewardId} | Delete Reward
[**deleteRewardAssignment**](RewardsApi.md#deleteRewardAssignment) | **DELETE** /v1/rewards/{rewardId}/assignments/{assignmentId} | Delete Reward Assignment
[**getReward**](RewardsApi.md#getReward) | **GET** /v1/rewards/{rewardId} | Get Reward
[**getRewardAssignment**](RewardsApi.md#getRewardAssignment) | **GET** /v1/rewards/{rewardId}/assignments/{assignmentId} | Get Reward Assignment
[**listRewardAssignments**](RewardsApi.md#listRewardAssignments) | **GET** /v1/rewards/{rewardId}/assignments | List Reward Assignments
[**listRewards**](RewardsApi.md#listRewards) | **GET** /v1/rewards | List Rewards
[**updateReward**](RewardsApi.md#updateReward) | **PUT** /v1/rewards/{rewardId} | Update Reward
[**updateRewardAssignment**](RewardsApi.md#updateRewardAssignment) | **PUT** /v1/rewards/{rewardId}/assignments/{assignmentId} | Update Reward Assignment


# **createReward**
> RewardsCreateResponseBody createReward()

Create a new reward.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiCreateRewardRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiCreateRewardRequest = {
    // Define parameters of the new reward. (optional)
  rewardsCreateRequestBody: {
    name: "name_example",
    parameters: {
      campaign: {
        id: "id_example",
        balance: 1,
      },
      product: {
        id: "prod_0b7d7dfb05cbe5c616",
        skuId: "sku_0b7d7dfb090be5c619",
      },
      coin: {
        exchangeRatio: "exchangeRatio_example",
        pointsRatio: "pointsRatio_example",
      },
    },
    metadata: {},
    stock: 1,
    attributes: {
      imageUrl: "imageUrl_example",
      description: "description_example",
    },
  },
};

const data = await apiInstance.createReward(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardsCreateRequestBody** | **RewardsCreateRequestBody**| Define parameters of the new reward. |


### Return type

**RewardsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a reward object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRewardAssignment**
> RewardsAssignmentsCreateResponseBody createRewardAssignment()

Assigns a reward to a specified loyalty campaign.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiCreateRewardAssignmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiCreateRewardAssignmentRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
    // Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points. (optional)
  rewardsAssignmentsCreateRequestBody: {
    campaign: "campaign_example",
    parameters: {
      loyalty: {
        points: 1,
        autoRedeem: true,
      },
    },
    validationRules: [
      "validationRules_example",
    ],
  },
};

const data = await apiInstance.createRewardAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardsAssignmentsCreateRequestBody** | **RewardsAssignmentsCreateRequestBody**| Provide the campaign ID of the campaign to which the reward is to be assigned and define the cost of the reward in terms of loyalty points. |
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined


### Return type

**RewardsAssignmentsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a reward assignment object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteReward**
> void deleteReward()

Delete a reward.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiDeleteRewardRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiDeleteRewardRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
};

const data = await apiInstance.deleteReward(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined


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

# **deleteRewardAssignment**
> void deleteRewardAssignment()

This method deletes a reward assignment for a particular reward.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiDeleteRewardAssignmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiDeleteRewardAssignmentRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
    // A unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.deleteRewardAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | defaults to undefined


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

# **getReward**
> Reward getReward()

Retrieve a reward by the reward ID.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiGetRewardRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiGetRewardRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
};

const data = await apiInstance.getReward(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined


### Return type

**Reward**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a reward object if a valid identifier was provided.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRewardAssignment**
> RewardsAssignmentsGetResponseBody getRewardAssignment()

Retrieve a reward assignment.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiGetRewardAssignmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiGetRewardAssignmentRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
    // A unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.getRewardAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | defaults to undefined


### Return type

**RewardsAssignmentsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a reward assignment object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRewardAssignments**
> RewardsAssignmentsListResponseBody listRewardAssignments()

Retrieve reward assignments by the reward ID.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiListRewardAssignmentsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiListRewardAssignmentsRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
};

const data = await apiInstance.listRewardAssignments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined


### Return type

**RewardsAssignmentsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of reward assignment objects. Each object contains information regarding the resource to which the reward was assigned and the cost in loyalty points for the reward. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRewards**
> RewardsListResponseBody listRewards()

Retrieve rewards.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiListRewardsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiListRewardsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID. (optional)
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.listRewards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. Use this parameter to get the reward details in the context of an assignment ID. | (optional) defaults to undefined


### Return type

**RewardsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of reward objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateReward**
> RewardsUpdateResponseBody updateReward()

Update the details of a reward.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiUpdateRewardRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiUpdateRewardRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
    // Define the parameters to be updated for the reward. (optional)
  rewardsUpdateRequestBody: {
    name: "name_example",
    parameters: {
      campaign: {
        id: "id_example",
        balance: 1,
      },
      product: {
        id: "prod_0b7d7dfb05cbe5c616",
        skuId: "sku_0b7d7dfb090be5c619",
      },
      coin: {
        exchangeRatio: "exchangeRatio_example",
        pointsRatio: "pointsRatio_example",
      },
    },
    metadata: {},
    stock: 1,
    attributes: {
      imageUrl: "imageUrl_example",
      description: "description_example",
    },
  },
};

const data = await apiInstance.updateReward(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardsUpdateRequestBody** | **RewardsUpdateRequestBody**| Define the parameters to be updated for the reward. |
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined


### Return type

**RewardsUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an updated reward object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateRewardAssignment**
> RewardsAssignmentsUpdateResponseBody updateRewardAssignment()

Update the number of points needed to successfully redeem the reward.

### Example


```typescript
import { createConfiguration, RewardsApi } from 'voucherify';
import type { RewardsApiUpdateRewardAssignmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new RewardsApi(configuration);

const request: RewardsApiUpdateRewardAssignmentRequest = {
    // A unique reward ID.
  rewardId: "rew_2erjvECLs92GYzKbak3QkyTV",
    // A unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
    // Define the number of points required to exchange for the reward. (optional)
  rewardsAssignmentsUpdateRequestBody: {
    parameters: {
      loyalty: {
        points: 1,
        autoRedeem: true,
      },
    },
  },
};

const data = await apiInstance.updateRewardAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardsAssignmentsUpdateRequestBody** | **RewardsAssignmentsUpdateRequestBody**| Define the number of points required to exchange for the reward. |
 **rewardId** | [**string**] | A unique reward ID. | defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | defaults to undefined


### Return type

**RewardsAssignmentsUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated reward assignment object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


