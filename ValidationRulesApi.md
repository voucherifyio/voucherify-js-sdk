# .ValidationRulesApi

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
[**listValidationRulesAssignments**](ValidationRulesApi.md#listValidationRulesAssignments) | **GET** /v1/validation-rules-assignments | List Validation Rules\&#39; Assignment(s)
[**updateValidationRule**](ValidationRulesApi.md#updateValidationRule) | **PUT** /v1/validation-rules/{validationRuleId} | Update Validation Rule


# **createValidationRuleAssignment**
> ValidationRulesAssignmentsCreateResponseBody createValidationRuleAssignment()

Assign validation rule to either one of the following objects: voucher, campaign, promotion tier, earning rule, reward, distribution.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiCreateValidationRuleAssignmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiCreateValidationRuleAssignmentRequest = {
    // Unique validation rule ID.
  validationRuleId: "val_TU4de3EP4dlL",
    // If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added. (optional)
  force: true,
    // Specify the resource that you would like to assign the validation rule to. (optional)
  validationRulesAssignmentsCreateRequestBody: {
    relatedObjectType: "voucher",
    relatedObjectId: "relatedObjectId_example",
  },
};

const data = await apiInstance.createValidationRuleAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRulesAssignmentsCreateRequestBody** | **ValidationRulesAssignmentsCreateRequestBody**| Specify the resource that you would like to assign the validation rule to. |
 **validationRuleId** | [**string**] | Unique validation rule ID. | defaults to undefined
 **force** | [**boolean**] | If this flag is set to true, the previous assignment with the same data will be deleted and a new one will be added. | (optional) defaults to undefined


### Return type

**ValidationRulesAssignmentsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a validation rules assignment object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createValidationRules**
> ValidationRulesCreateResponseBody createValidationRules()

Create a validation rule.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiCreateValidationRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiCreateValidationRulesRequest = {
    // Specify the validation rules parameters. (optional)
  validationRulesCreateRequestBody: {
    name: "Business Validation Rule",
    rules: {},
    bundleRules: {},
    error: {
      message: "message_example",
    },
    applicableTo: {
      excluded: [
        {
          object: "product",
          id: "id_example",
          sourceId: "sourceId_example",
          productId: "productId_example",
          productSourceId: "productSourceId_example",
          price: 3.14,
          priceFormula: 3.14,
          effect: "APPLY_TO_EVERY",
          quantityLimit: 1,
          aggregatedQuantityLimit: 1,
          amountLimit: 1,
          aggregatedAmountLimit: 1,
          orderItemIndices: [
            1,
          ],
          orderItemUnits: [
            {
              index: 0,
              units: [
                1,
              ],
              unitsLimitExceeded: true,
            },
          ],
          repeat: 1,
          skipInitially: 1,
          target: "ITEM",
        },
      ],
      included: [
        {
          object: "product",
          id: "id_example",
          sourceId: "sourceId_example",
          productId: "productId_example",
          productSourceId: "productSourceId_example",
          price: 3.14,
          priceFormula: 3.14,
          effect: "APPLY_TO_EVERY",
          quantityLimit: 1,
          aggregatedQuantityLimit: 1,
          amountLimit: 1,
          aggregatedAmountLimit: 1,
          orderItemIndices: [
            1,
          ],
          orderItemUnits: [
            {
              index: 0,
              units: [
                1,
              ],
              unitsLimitExceeded: true,
            },
          ],
          repeat: 1,
          skipInitially: 1,
          target: "ITEM",
        },
      ],
      includedAll: true,
    },
    type: "expression",
    contextType: "global",
  },
};

const data = await apiInstance.createValidationRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRulesCreateRequestBody** | **ValidationRulesCreateRequestBody**| Specify the validation rules parameters. |


### Return type

**ValidationRulesCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a validation rule object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteValidationRuleAssignment**
> void deleteValidationRuleAssignment()

This method deletes a validation rule assignment.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiDeleteValidationRuleAssignmentRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiDeleteValidationRuleAssignmentRequest = {
    // A unique validation rule ID.
  validationRuleId: "val_TU4de3EP4dlL",
    // A unique validation rule assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.deleteValidationRuleAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRuleId** | [**string**] | A unique validation rule ID. | defaults to undefined
 **assignmentId** | [**string**] | A unique validation rule assignment ID. | defaults to undefined


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

# **deleteValidationRules**
> void deleteValidationRules()

This method deletes a validation rule.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiDeleteValidationRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiDeleteValidationRulesRequest = {
    // A unique validation rule ID.
  validationRuleId: "val_TU4de3EP4dlL",
};

const data = await apiInstance.deleteValidationRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRuleId** | [**string**] | A unique validation rule ID. | defaults to undefined


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

# **getValidationRule**
> ValidationRulesGetResponseBody getValidationRule()

Retrieve the details of a validation rule.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiGetValidationRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiGetValidationRuleRequest = {
    // A unique validation rule ID.
  validationRuleId: "val_TU4de3EP4dlL",
};

const data = await apiInstance.getValidationRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRuleId** | [**string**] | A unique validation rule ID. | defaults to undefined


### Return type

**ValidationRulesGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the validation rule object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listValidationRuleAssignments**
> ValidationRulesAssignmentsListResponseBody listValidationRuleAssignments()

Retrieve validation rule assignments for a specific validation rule.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiListValidationRuleAssignmentsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiListValidationRuleAssignmentsRequest = {
    // Unique validation rule ID.
  validationRuleId: "val_TU4de3EP4dlL",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listValidationRuleAssignments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRuleId** | [**string**] | Unique validation rule ID. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListValidationRuleAssignments** | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**ValidationRulesAssignmentsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of validation rule assignments.  If the validation rule ID provided in the path parameter cannot be found, the endpoint will return an empty &#x60;data&#x60; array and a total of &#x60;0&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listValidationRules**
> ValidationRulesListResponseBody listValidationRules()

Retrieve validation rules.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiListValidationRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiListValidationRulesRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // Timestamp representing the date and time which results must start on. Represented in ISO 8601 format. (optional)
  startDate: new Date('2023-12-22T10:13:06.487Z'),
    // Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. (optional)
  endDate: new Date('2023-12-22T10:13:06.487Z'),
};

const data = await apiInstance.listValidationRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListValidationRules** | This is a property that controls the sorting direction of the results. Sort the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startDate** | [**Date**] | Timestamp representing the date and time which results must start on. Represented in ISO 8601 format. | (optional) defaults to undefined
 **endDate** | [**Date**] | Timestamp representing the date and time which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined


### Return type

**ValidationRulesListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of validation rules. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listValidationRulesAssignments**
> ValidationRulesAssignmentsListResponseBody listValidationRulesAssignments()

List all validation rules assignments or filter the results using the related object ID or the validation rule ID query parameters.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiListValidationRulesAssignmentsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiListValidationRulesAssignmentsRequest = {
    // The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution. (optional)
  relatedObjectId: "related_object_id_example",
    // Validation rule ID. (optional)
  rule: "val_TU4de3EP4dlL",
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "order_example",
};

const data = await apiInstance.listValidationRulesAssignments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relatedObjectId** | [**string**] | The resource ID to which the validation rule was assigned; this could be, for example, a resource ID of a voucher, campaign, earning rule, reward assignment, promotion tier, or distribution. | (optional) defaults to undefined
 **rule** | [**string**] | Validation rule ID. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | [**string**] | Sorts the results using one of the filtering options: -created_at, created_at, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**ValidationRulesAssignmentsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a data property that contains an array of validation rule assignments. Each entry in the array is a separate object. If no more validation rule assignments are available, the resulting array will be empty. The result can be narrowed down according to default filters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateValidationRule**
> ValidationRulesUpdateResponseBody updateValidationRule()

Update validation rule parameters.  🚧 Managing validation rules  It is recommended to [create or update validation rules](https://support.voucherify.io/article/148-how-to-build-a-rule) in the Voucherify dashboard. The rule builder in the dashboard helps configuring the desired conditions in a convenient way. The API should not be used as a preferable way to create and manage validation rules.

### Example


```typescript
import { createConfiguration, ValidationRulesApi } from 'voucherify';
import type { ValidationRulesApiUpdateValidationRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationRulesApi(configuration);

const request: ValidationRulesApiUpdateValidationRuleRequest = {
    // A unique validation rule ID.
  validationRuleId: "val_TU4de3EP4dlL",
    // Specify the parameters to be updated. (optional)
  validationRulesUpdateRequestBody: {
    name: "Business Validation Rule",
    rules: {},
    bundleRules: {},
    error: {
      message: "message_example",
    },
    applicableTo: {
      excluded: [
        {
          object: "product",
          id: "id_example",
          sourceId: "sourceId_example",
          productId: "productId_example",
          productSourceId: "productSourceId_example",
          price: 3.14,
          priceFormula: 3.14,
          effect: "APPLY_TO_EVERY",
          quantityLimit: 1,
          aggregatedQuantityLimit: 1,
          amountLimit: 1,
          aggregatedAmountLimit: 1,
          orderItemIndices: [
            1,
          ],
          orderItemUnits: [
            {
              index: 0,
              units: [
                1,
              ],
              unitsLimitExceeded: true,
            },
          ],
          repeat: 1,
          skipInitially: 1,
          target: "ITEM",
        },
      ],
      included: [
        {
          object: "product",
          id: "id_example",
          sourceId: "sourceId_example",
          productId: "productId_example",
          productSourceId: "productSourceId_example",
          price: 3.14,
          priceFormula: 3.14,
          effect: "APPLY_TO_EVERY",
          quantityLimit: 1,
          aggregatedQuantityLimit: 1,
          amountLimit: 1,
          aggregatedAmountLimit: 1,
          orderItemIndices: [
            1,
          ],
          orderItemUnits: [
            {
              index: 0,
              units: [
                1,
              ],
              unitsLimitExceeded: true,
            },
          ],
          repeat: 1,
          skipInitially: 1,
          target: "ITEM",
        },
      ],
      includedAll: true,
    },
    type: "expression",
    contextType: "global",
  },
};

const data = await apiInstance.updateValidationRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationRulesUpdateRequestBody** | **ValidationRulesUpdateRequestBody**| Specify the parameters to be updated. |
 **validationRuleId** | [**string**] | A unique validation rule ID. | defaults to undefined


### Return type

**ValidationRulesUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the validation rule object with the updated parameters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


