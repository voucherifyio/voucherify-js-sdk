# .QualificationsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkEligibility**](QualificationsApi.md#checkEligibility) | **POST** /v1/qualifications | Check Eligibility


# **checkEligibility**
> QualificationsCheckEligibilityResponseBody checkEligibility()

  🚧 The Qualifications endpoint ignores the rules checking:    - Limit of total redeemed discount amount per campaign  - Limit of total redemptions count per campaign  - Redemptions per customer  - Redemptions per customer in a campaign  Generate a list of redeemables that are applicable in the context of the customer and order. The new qualifications method is an improved version of [Campaign Qualifications](/api-reference/campaigns/examine-campaign-qualification), [Voucher Qualifications](/api-reference/vouchers/examine-voucher-qualification) API requests. The new qualification method introduces the following improvements: - Qualification results are returned faster - No limit on the number of returned redeemables - Introduces new qualification scenarios, not available in the previous version  👍 Scenario Guide  Read [the dedicated guide](/guides/checking-eligibility) to learn about some use cases this endpoint can cover. # Paging  The Voucherify Qualifications API request will return to you all of the redeemables available for the customer in batches of up to 50 redeemables per page. To get the next batch of redeemables, you need to use the starting_after cursor. To process of paging the redeemables works in the following manner: - You send the first API request for Qualifications without the starting_after parameter. - The response will contain a parameter named has_more. If the parameters value is set to true, then more redeemables are available. - Get the value of the created_at parameter of the last returned redeemable. The value of this parameter will be used as a cursor to retrieve the next page of redeemables. - Send another API request for Qualification with the starting_after parameter set to the value taken from the created_at parameter from the last returned redeemable. - Voucherify will return the next page of redeemables. - If the has_more parameter is set to true, apply steps 3-5 to get the next page of redeemables.

### Example


```typescript
import { createConfiguration, QualificationsApi } from 'voucherify';
import type { QualificationsApiCheckEligibilityRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new QualificationsApi(configuration);

const request: QualificationsApiCheckEligibilityRequest = {
    // Define order and customer context. (optional)
  qualificationsCheckEligibilityRequestBody: {
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

const data = await apiInstance.checkEligibility(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qualificationsCheckEligibilityRequestBody** | **QualificationsCheckEligibilityRequestBody**| Define order and customer context. |


### Return type

**QualificationsCheckEligibilityResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a qualifications object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


