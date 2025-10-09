# .ClientSideApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkEligibilityClientSide**](ClientSideApi.md#checkEligibilityClientSide) | **POST** /client/v1/qualifications | Check Eligibility (client-side)
[**listPromotionTiersClientSide**](ClientSideApi.md#listPromotionTiersClientSide) | **GET** /client/v1/promotions/tiers | List Promotion Tiers (client-side)
[**redeemStackedDiscountsClientSide**](ClientSideApi.md#redeemStackedDiscountsClientSide) | **POST** /client/v1/redemptions | Redeem Stackable Discounts (client-side)
[**trackCustomEventClientSide**](ClientSideApi.md#trackCustomEventClientSide) | **POST** /client/v1/events | Track Custom Event (client-side)
[**validateStackedDiscountsClientSide**](ClientSideApi.md#validateStackedDiscountsClientSide) | **POST** /client/v1/validations | Validate Stackable Discounts (client-side)


# **checkEligibilityClientSide**
> ClientQualificationsCheckEligibilityResponseBody checkEligibilityClientSide()

Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read our dedicated guide to learn about some use cases this endpoint can cover [here](/guides/checking-eligibility). # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.

### Example


```typescript
import { createConfiguration, ClientSideApi } from 'voucherify';
import type { ClientSideApiCheckEligibilityClientSideRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ClientSideApi(configuration);

const request: ClientSideApiCheckEligibilityClientSideRequest = {
    // Define order and customer context. (optional)
  clientQualificationsCheckEligibilityRequestBody: {
    customer: {
      id: "id_example",
      sourceId: "sourceId_example",
      name: "name_example",
      description: "description_example",
      email: "email_example",
      phone: "phone_example",
      birthday: new Date('1970-01-01').toISOString().split('T')[0];,
      birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
      address: {
        city: "city_example",
        state: "state_example",
        line1: "line1_example",
        line2: "line2_example",
        country: "country_example",
        postalCode: "postalCode_example",
      },
      metadata: {},
    },
    order: {
      id: "id_example",
      sourceId: "sourceId_example",
      status: "CREATED",
      amount: 1,
      initialAmount: 1,
      discountAmount: 1,
      items: [
        {
          skuId: "skuId_example",
          productId: "productId_example",
          relatedObject: "product",
          sourceId: "sourceId_example",
          quantity: 1,
          discountQuantity: 1,
          initialQuantity: 1,
          amount: 1,
          discountAmount: 1,
          initialAmount: 1,
          price: 1,
          product: {
            id: "id_example",
            sourceId: "sourceId_example",
            override: true,
            name: "name_example",
            metadata: {},
            price: 3.14,
          },
          sku: {
            id: "id_example",
            sourceId: "sourceId_example",
            override: true,
            sku: "sku_example",
            price: 3.14,
            metadata: {},
          },
          metadata: {},
        },
      ],
      metadata: {},
    },
    trackingId: "trackingId_example",
    scenario: "ALL",
    options: {
      limit: 1,
      startingAfter: new Date('2021-09-08T13:52:18.227Z'),
      filters: {
        junction: "and",
        categoryId: {
          conditions: {
            is: [
              "is_example",
            ],
            isNot: [
              "isNot_example",
            ],
            hasValue: null,
            isUnknown: null,
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
          },
        },
        campaignId: {
          conditions: {
            is: [
              "is_example",
            ],
            isNot: [
              "isNot_example",
            ],
            hasValue: null,
            isUnknown: null,
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
          },
        },
        campaignType: {
          conditions: {
            is: [
              "PROMOTION",
            ],
            isNot: [
              "PROMOTION",
            ],
            _in: [
              "PROMOTION",
            ],
            notIn: [
              "PROMOTION",
            ],
          },
        },
        resourceId: {
          conditions: {
            is: [
              "is_example",
            ],
            isNot: [
              "isNot_example",
            ],
            hasValue: null,
            isUnknown: null,
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
          },
        },
        resourceType: {
          conditions: {
            is: [
              "campaign",
            ],
            isNot: [
              "campaign",
            ],
            _in: [
              "campaign",
            ],
            notIn: [
              "campaign",
            ],
          },
        },
        voucherType: {
          conditions: {
            is: [
              "is_example",
            ],
            isNot: [
              "isNot_example",
            ],
            hasValue: null,
            isUnknown: null,
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
          },
        },
        code: {
          conditions: {
            is: [
              "is_example",
            ],
            isNot: [
              "isNot_example",
            ],
            hasValue: null,
            isUnknown: null,
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
          },
        },
        holderRole: {
          conditions: {
            is: [
              "OWNER",
            ],
            isNot: [
              "OWNER",
            ],
            _in: [
              "OWNER",
            ],
            notIn: [
              "OWNER",
            ],
          },
        },
      },
      expand: [
        "redeemable",
      ],
      sortingRule: "BEST_DEAL",
    },
    session: {
      type: "LOCK",
    },
    metadata: {},
  },
};

const data = await apiInstance.checkEligibilityClientSide(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientQualificationsCheckEligibilityRequestBody** | **ClientQualificationsCheckEligibilityRequestBody**| Define order and customer context. |


### Return type

**ClientQualificationsCheckEligibilityResponseBody**

### Authorization

[X-Client-Application-Id](README.md#X-Client-Application-Id), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth), [X-Client-Token](README.md#X-Client-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a qualifications object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPromotionTiersClientSide**
> ClientPromotionsTiersListResponseBody listPromotionTiersClientSide()

This method enables you to list promotion tiers.

### Example


```typescript
import { createConfiguration, ClientSideApi } from 'voucherify';
import type { ClientSideApiListPromotionTiersClientSideRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ClientSideApi(configuration);

const request: ClientSideApiListPromotionTiersClientSideRequest = {
    // Indicates the origin (scheme, hostname, and port).
  origin: "origin_example",
    // This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions. (optional)
  isAvailable: true,
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listPromotionTiersClientSide(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origin** | [**string**] | Indicates the origin (scheme, hostname, and port). | defaults to undefined
 **isAvailable** | [**boolean**] | This parameter allows filtering promotions that are only available at the moment. When set to true, it selects only non-expired and active promotions. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListPromotionTiersClientSide** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**ClientPromotionsTiersListResponseBody**

### Authorization

[X-Client-Application-Id](README.md#X-Client-Application-Id), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth), [X-Client-Token](README.md#X-Client-Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a &#x60;tiers&#x60; property that contains an array of promotion tiers. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **redeemStackedDiscountsClientSide**
> ClientRedemptionsRedeemResponseBody redeemStackedDiscountsClientSide()

This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications. # How API returns calculated discounts and order amounts in the response In the table below, you can see the logic the API follows to calculate discounts and amounts:    📘 Rollbacks  You cant roll back a child redemption. When you call rollback on a stacked redemption, all child redemptions will be rolled back. You need to refer to a parent redemption ID in your [rollback request](/api-reference/redemptions/rollback-stackable-redemptions).

### Example


```typescript
import { createConfiguration, ClientSideApi } from 'voucherify';
import type { ClientSideApiRedeemStackedDiscountsClientSideRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ClientSideApi(configuration);

const request: ClientSideApiRedeemStackedDiscountsClientSideRequest = {
    // Indicates the origin (scheme, hostname, and port).
  origin: "origin_example",
  
  clientRedemptionsRedeemRequestBody: {
    options: {
      expand: [
        "order",
      ],
    },
    redeemables: [
      {
        object: "voucher",
        id: "id_example",
        gift: {
          credits: 1,
        },
        reward: {
          id: "rew_EPx1hCTpqzF0HW1z9NKckZH4",
          points: 1,
        },
      },
    ],
    order: {
      id: "id_example",
      sourceId: "sourceId_example",
      status: "CREATED",
      amount: 1,
      initialAmount: 1,
      discountAmount: 1,
      items: [
        {
          skuId: "skuId_example",
          productId: "productId_example",
          relatedObject: "product",
          sourceId: "sourceId_example",
          quantity: 1,
          discountQuantity: 1,
          initialQuantity: 1,
          amount: 1,
          discountAmount: 1,
          initialAmount: 1,
          price: 1,
          product: {
            id: "id_example",
            sourceId: "sourceId_example",
            override: true,
            name: "name_example",
            metadata: {},
            price: 3.14,
          },
          sku: {
            id: "id_example",
            sourceId: "sourceId_example",
            override: true,
            sku: "sku_example",
            price: 3.14,
            metadata: {},
          },
          metadata: {},
        },
      ],
      metadata: {},
    },
    customer: {
      id: "id_example",
      sourceId: "sourceId_example",
      name: "name_example",
      description: "description_example",
      email: "email_example",
      phone: "phone_example",
      birthday: new Date('1970-01-01').toISOString().split('T')[0];,
      birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
      address: {
        city: "city_example",
        state: "state_example",
        line1: "line1_example",
        line2: "line2_example",
        country: "country_example",
        postalCode: "postalCode_example",
      },
      metadata: {},
    },
    session: {
      key: "key_example",
      type: "LOCK",
      ttl: 3.14,
      ttlUnit: "DAYS",
    },
    trackingId: "trackingId_example",
    metadata: {},
  },
};

const data = await apiInstance.redeemStackedDiscountsClientSide(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientRedemptionsRedeemRequestBody** | **ClientRedemptionsRedeemRequestBody**|  |
 **origin** | [**string**] | Indicates the origin (scheme, hostname, and port). | defaults to undefined


### Return type

**ClientRedemptionsRedeemResponseBody**

### Authorization

[X-Client-Application-Id](README.md#X-Client-Application-Id), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth), [X-Client-Token](README.md#X-Client-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Depending on your project settings: all redeemables must be valid or just one must be valid to result as valid redemption. Read more in the [Stacking Rule Documentation](https://support.voucherify.io/article/604-stacking-rules). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **trackCustomEventClientSide**
> ClientEventsCreateResponseBody trackCustomEventClientSide()

To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.

### Example


```typescript
import { createConfiguration, ClientSideApi } from 'voucherify';
import type { ClientSideApiTrackCustomEventClientSideRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ClientSideApi(configuration);

const request: ClientSideApiTrackCustomEventClientSideRequest = {
    // Indicates the origin (scheme, hostname, and port).
  origin: "origin_example",
    // Specify the details of the custom event. (optional)
  clientEventsCreateRequestBody: {
    event: "event_example",
    customer: {
      id: "id_example",
      sourceId: "sourceId_example",
      name: "name_example",
      description: "description_example",
      email: "email_example",
      phone: "phone_example",
      birthday: new Date('1970-01-01').toISOString().split('T')[0];,
      birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
      address: {
        city: "city_example",
        state: "state_example",
        line1: "line1_example",
        line2: "line2_example",
        country: "country_example",
        postalCode: "postalCode_example",
      },
      metadata: {},
    },
    referral: {
      code: "code_example",
      referrerId: "cust_Vzck5i8U3OhcEUFY6MKhN9Rv",
    },
    loyalty: {
      code: "L-CARD-BUHuH6g",
    },
    metadata: {},
  },
};

const data = await apiInstance.trackCustomEventClientSide(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientEventsCreateRequestBody** | **ClientEventsCreateRequestBody**| Specify the details of the custom event. |
 **origin** | [**string**] | Indicates the origin (scheme, hostname, and port). | defaults to undefined


### Return type

**ClientEventsCreateResponseBody**

### Authorization

[X-Client-Application-Id](README.md#X-Client-Application-Id), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth), [X-Client-Token](README.md#X-Client-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the event type if the event was received by the application. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validateStackedDiscountsClientSide**
> ClientValidationsValidateResponseBody validateStackedDiscountsClientSide()

Verify redeemables provided in the request. This method is accessible through public keys which you can use in client side requests coming from mobile and web browser applications.

### Example


```typescript
import { createConfiguration, ClientSideApi } from 'voucherify';
import type { ClientSideApiValidateStackedDiscountsClientSideRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ClientSideApi(configuration);

const request: ClientSideApiValidateStackedDiscountsClientSideRequest = {
    // Indicates the origin (scheme, hostname, and port).
  origin: "origin_example",
  
  clientValidationsValidateRequestBody: {
    options: {
      expand: [
        "order",
      ],
    },
    redeemables: [
      {
        object: "voucher",
        id: "id_example",
        gift: {
          credits: 1,
        },
        reward: {
          id: "rew_EPx1hCTpqzF0HW1z9NKckZH4",
          points: 1,
        },
      },
    ],
    order: {
      id: "id_example",
      sourceId: "sourceId_example",
      status: "CREATED",
      amount: 1,
      initialAmount: 1,
      discountAmount: 1,
      items: [
        {
          skuId: "skuId_example",
          productId: "productId_example",
          relatedObject: "product",
          sourceId: "sourceId_example",
          quantity: 1,
          discountQuantity: 1,
          initialQuantity: 1,
          amount: 1,
          discountAmount: 1,
          initialAmount: 1,
          price: 1,
          product: {
            id: "id_example",
            sourceId: "sourceId_example",
            override: true,
            name: "name_example",
            metadata: {},
            price: 3.14,
          },
          sku: {
            id: "id_example",
            sourceId: "sourceId_example",
            override: true,
            sku: "sku_example",
            price: 3.14,
            metadata: {},
          },
          metadata: {},
        },
      ],
      metadata: {},
    },
    customer: {
      id: "id_example",
      sourceId: "sourceId_example",
      name: "name_example",
      description: "description_example",
      email: "email_example",
      phone: "phone_example",
      birthday: new Date('1970-01-01').toISOString().split('T')[0];,
      birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
      address: {
        city: "city_example",
        state: "state_example",
        line1: "line1_example",
        line2: "line2_example",
        country: "country_example",
        postalCode: "postalCode_example",
      },
      metadata: {},
    },
    session: {
      key: "key_example",
      type: "LOCK",
      ttl: 3.14,
      ttlUnit: "DAYS",
    },
    trackingId: "trackingId_example",
    metadata: {},
  },
};

const data = await apiInstance.validateStackedDiscountsClientSide(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientValidationsValidateRequestBody** | **ClientValidationsValidateRequestBody**|  |
 **origin** | [**string**] | Indicates the origin (scheme, hostname, and port). | defaults to undefined


### Return type

**ClientValidationsValidateResponseBody**

### Authorization

[X-Client-Application-Id](README.md#X-Client-Application-Id), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth), [X-Client-Token](README.md#X-Client-Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Depending on your project settings: all redeemables must be valid or just one must be valid to result as valid validation. Read more in the [Stacking Rule Documentation](https://support.voucherify.io/article/604-stacking-rules). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


