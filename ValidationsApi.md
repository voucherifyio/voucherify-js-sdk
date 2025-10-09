# .ValidationsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateStackedDiscounts**](ValidationsApi.md#validateStackedDiscounts) | **POST** /v1/validations | Validate Stackable Discounts


# **validateStackedDiscounts**
> ValidationsValidateResponseBody validateStackedDiscounts()

Verify redeemables provided in the request. This method is designed for server side integration which means that it is accessible only through private keys. API keys with a Merchant role cant use this endpoint.

### Example


```typescript
import { createConfiguration, ValidationsApi } from 'voucherify';
import type { ValidationsApiValidateStackedDiscountsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ValidationsApi(configuration);

const request: ValidationsApiValidateStackedDiscountsRequest = {
  
  validationsValidateRequestBody: {
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

const data = await apiInstance.validateStackedDiscounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationsValidateRequestBody** | **ValidationsValidateRequestBody**|  |


### Return type

**ValidationsValidateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Depending on your project settings: all redeemables must be valid or just one must be valid to result as valid validation. Read more in the [Stacking Rule Documentation](https://support.voucherify.io/article/604-stacking-rules). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


