# .VouchersApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoucher**](VouchersApi.md#createVoucher) | **POST** /v1/vouchers/{code} | Create Voucher
[**deleteVoucher**](VouchersApi.md#deleteVoucher) | **DELETE** /v1/vouchers/{code} | Delete Voucher
[**disableVoucher**](VouchersApi.md#disableVoucher) | **POST** /v1/vouchers/{code}/disable | Disable Voucher
[**enableVoucher**](VouchersApi.md#enableVoucher) | **POST** /v1/vouchers/{code}/enable | Enable Voucher
[**exportVoucherTransactions**](VouchersApi.md#exportVoucherTransactions) | **POST** /v1/vouchers/{code}/transactions/export | Export Voucher Transactions
[**generateRandomCode**](VouchersApi.md#generateRandomCode) | **POST** /v1/vouchers | Generate Random Code
[**getVoucher**](VouchersApi.md#getVoucher) | **GET** /v1/vouchers/{code} | Get Voucher
[**importVouchers**](VouchersApi.md#importVouchers) | **POST** /v1/vouchers/import | Import Vouchers
[**importVouchersUsingCsv**](VouchersApi.md#importVouchersUsingCsv) | **POST** /v1/vouchers/importCSV | Import Vouchers using CSV
[**listVoucherTransactions**](VouchersApi.md#listVoucherTransactions) | **GET** /v1/vouchers/{code}/transactions | List Voucher Transactions
[**listVouchers**](VouchersApi.md#listVouchers) | **GET** /v1/vouchers | List Vouchers
[**releaseValidationSession**](VouchersApi.md#releaseValidationSession) | **DELETE** /v1/vouchers/{code}/sessions/{sessionKey} | Release Validation Session
[**updateVoucher**](VouchersApi.md#updateVoucher) | **PUT** /v1/vouchers/{code} | Update Voucher
[**updateVoucherBalance**](VouchersApi.md#updateVoucherBalance) | **POST** /v1/vouchers/{code}/balance | Adjust Voucher Balance
[**updateVouchersInBulk**](VouchersApi.md#updateVouchersInBulk) | **POST** /v1/vouchers/bulk/async | Update Vouchers in Bulk
[**updateVouchersMetadataInBulk**](VouchersApi.md#updateVouchersMetadataInBulk) | **POST** /v1/vouchers/metadata/async | Update Vouchers\&#39; Metadata in Bulk


# **createVoucher**
> VouchersCreateResponseBody createVoucher()

Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD. The code path parameter can use all letters of the English alphabet, Arabic numerals and special characters. When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In the case of the loyalty card, a campaign name or ID is required. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiCreateVoucherRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiCreateVoucherRequest = {
    // A unique **code** that identifies the voucher.
  code: "2CpRCE2c",
    // Specify the details of the voucher that you would like to create. (optional)
  vouchersCreateWithSpecificCodeRequestBody: {
    campaign: "Gift Card Campaign",
    campaignId: "camp_FNYR4jhqZBM9xTptxDGgeNBV",
    category: "category_example",
    categoryId: "cat_0b6152ce12414820dc",
    startDate: new Date('2021-12-01T00:00:00Z'),
    expirationDate: new Date('2021-12-31T00:00:00Z'),
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
    active: true,
    additionalInfo: "additionalInfo_example",
    metadata: {},
    validationRules: [
      "[val_4j7DCRm2IS59]",
    ],
    redemption: {
      quantity: 1,
    },
    type: "LOYALTY_CARD",
    loyaltyCard: {
      points: 1,
      balance: 1,
      nextExpirationDate: "nextExpirationDate_example",
      nextExpirationPoints: 1,
      pendingPoints: 1,
      expiredPoints: 1,
      subtractedPoints: 1,
    },
    gift: {
      amount: 3.14,
      subtractedAmount: 1,
      balance: 3.14,
      effect: "APPLY_TO_ORDER",
    },
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
};

const data = await apiInstance.createVoucher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersCreateWithSpecificCodeRequestBody** | **VouchersCreateWithSpecificCodeRequestBody**| Specify the details of the voucher that you would like to create. |
 **code** | [**string**] | A unique **code** that identifies the voucher. | defaults to undefined


### Return type

**VouchersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a voucher object if the call succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteVoucher**
> void deleteVoucher()

Deletes a voucher. This operation cannot be undone. Additionally, this operation removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the voucher will be moved to [the bin](/api-reference/bin/list-bin-entries).

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiDeleteVoucherRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiDeleteVoucherRequest = {
    // A unique **code** that identifies the voucher.
  code: "2CpRCE2c",
    // If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code. (optional)
  force: true,
};

const data = await apiInstance.deleteVoucher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | A unique **code** that identifies the voucher. | defaults to undefined
 **force** | [**boolean**] | If this flag is set to true, the voucher will be removed permanently. If it is set to false or not set at all, the voucher will be moved to the bin. Going forward, the user will be able to create another voucher with exactly the same code. | (optional) defaults to undefined


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

# **disableVoucher**
> VouchersDisableResponseBody disableVoucher()

There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ This method sets the voucher state to **inactive**. The voucher cannot be redeemed.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiDisableVoucherRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiDisableVoucherRequest = {
    // A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
  code: "2CpRCE2c",
};

const data = await apiInstance.disableVoucher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | defaults to undefined


### Return type

**VouchersDisableResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a voucher object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableVoucher**
> VouchersEnableResponseBody enableVoucher()

There are various times when youll want to manage a vouchers accessibility. This can be done by two API methods for managing the voucher state - *enable* and *disable*.   ___ The method sets the voucher state to **active**. The voucher can be redeemed - only if the redemption occurs after the start date and the voucher is not expired.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiEnableVoucherRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiEnableVoucherRequest = {
    // A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
  code: "2CpRCE2c",
};

const data = await apiInstance.enableVoucher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | defaults to undefined


### Return type

**VouchersEnableResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a voucher object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportVoucherTransactions**
> VouchersTransactionsExportCreateResponseBody exportVoucherTransactions()

Export transactions that are associated with credit movements on a gift card or loyalty card.   

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiExportVoucherTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiExportVoucherTransactionsRequest = {
    // A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
  code: "GIFT-CARD-1",
    // Specify the parameters for the camapign transaction export. (optional)
  vouchersTransactionsExportCreateRequestBody: {
    parameters: {
      order: "-created_at",
      fields: [
        "id",
      ],
    },
  },
};

const data = await apiInstance.exportVoucherTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersTransactionsExportCreateRequestBody** | **VouchersTransactionsExportCreateRequestBody**| Specify the parameters for the camapign transaction export. |
 **code** | [**string**] | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | defaults to undefined


### Return type

**VouchersTransactionsExportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an export object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateRandomCode**
> VouchersCreateResponseBody generateRandomCode()

Create a generic (standalone) vouchers. You can choose to create a GIFT_VOUCHER, a DISCOUNT_VOUCHER, or a LOYALTY_CARD.  When you create a new voucher, you can specify a type to create it. Creating a new voucher will create a new generic (standalone) vouchers if no campaign name or campaign_id is provided. However, if an ID or name of a campaign with the type set to STANDALONE is provided, the voucher will be added to such campaign. In case of the loyalty card, a campaign name is required. You can optionally use the code parameter to define a specific code or the code_config parameter to design rules for Voucherify API to create a random code. If neither of the two parameters are passed, then a random code is generated by the Voucherify API. This method will return an error when trying to create a voucher that already exists. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers created through the API do not have a campaign attached, so the values for campaign and campaign_id are null. Voucherify developers work on adding an optional feature to create a generic (standalone) vouchers campaign through the API. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiGenerateRandomCodeRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiGenerateRandomCodeRequest = {
    // Specify the details of the voucher that you would like to create. (optional)
  vouchersCreateRequestBody: {
    code: "WVPblOYX",
    campaign: "Gift Card Campaign",
    campaignId: "camp_FNYR4jhqZBM9xTptxDGgeNBV",
    category: "category_example",
    categoryId: "cat_0b6152ce12414820dc",
    startDate: new Date('2021-12-01T00:00:00Z'),
    expirationDate: new Date('2021-12-31T00:00:00Z'),
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
    active: true,
    additionalInfo: "additionalInfo_example",
    metadata: {},
    validationRules: [
      "[val_4j7DCRm2IS59]",
    ],
    redemption: {
      quantity: 1,
    },
    type: "LOYALTY_CARD",
    loyaltyCard: {
      points: 1,
      balance: 1,
      nextExpirationDate: "nextExpirationDate_example",
      nextExpirationPoints: 1,
      pendingPoints: 1,
      expiredPoints: 1,
      subtractedPoints: 1,
    },
    codeConfig: {
      length: 3.14,
      charset: "charset_example",
      prefix: "prefix_example",
      postfix: "postfix_example",
      pattern: "pattern_example",
      initialCount: 1,
    },
    gift: {
      amount: 3.14,
      subtractedAmount: 1,
      balance: 3.14,
      effect: "APPLY_TO_ORDER",
    },
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
};

const data = await apiInstance.generateRandomCode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersCreateRequestBody** | **VouchersCreateRequestBody**| Specify the details of the voucher that you would like to create. |


### Return type

**VouchersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a voucher object if the call succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVoucher**
> VouchersGetResponseBody getVoucher()

Retrieves the voucher with the given code or unique Voucherify ID. You can either pass the voucher ID which was assigned by Voucherify, e.g., v_7HxHkf4VAkMuc8u4lZs78lyRwhRze5UE, or the code of the voucher as the path parameter value, e.g., 7fjWdr.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiGetVoucherRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiGetVoucherRequest = {
    // A unique **code** that identifies the voucher.
  code: "2CpRCE2c",
};

const data = await apiInstance.getVoucher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | A unique **code** that identifies the voucher. | defaults to undefined


### Return type

**VouchersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a voucher object if a valid identifier was provided.   Additionally, the response returns validation rules related to the voucher object. They can be inherited from a campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importVouchers**
> VouchersImportCreateResponseBody importVouchers(vouchersImportCreateItemRequestBody)

Import generic (standalone) vouchers and gift cards into the repository.  📘 Important notes  - **Start and expiration dates** need to be provided in compliance with the ISO 8601 norms. For example, 2020-03-11T09:00:00.000Z.  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify Project. Any parameters not provided in the payload will be left blank or null. For both **standalone discount vouchers and gift cards**, you can import the following fields:   - code - category - active - type - start_date - expiration_date - redemption.quantity - additional_info - metadata For **gift cards**, you can also import the following field: - gift.amount For **discount vouchers**, you can import the discount object. The object will slightly vary depending on the type of discount. Each discount type **requires** the type to be defined in the import.   Fields other than the ones listed above wont be imported. Even if provided, they will be silently skipped. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiImportVouchersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiImportVouchersRequest = {
    // The request body is an array of objects. Each object contains details about a specific voucher. 
  vouchersImportCreateItemRequestBody: [
    {
      code: "code_example",
      redemption: {
        quantity: 10,
      },
      active: true,
      metadata: {},
      category: "category_example",
      startDate: new Date('2020-12-28T12:49:16.272Z'),
      expirationDate: new Date('2053-12-28T12:49:16.272Z'),
      validityTimeframe: {
        duration: "PT1H",
        interval: "P2D",
      },
      validityDayOfWeek: [
        0,
      ],
      additionalInfo: "additionalInfo_example",
      type: "GIFT_VOUCHER",
      gift: {
        amount: 3.14,
        subtractedAmount: 1,
        balance: 3.14,
        effect: "APPLY_TO_ORDER",
      },
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
  ],
};

const data = await apiInstance.importVouchers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersImportCreateItemRequestBody** | **Array<VouchersImportCreateItemRequestBody>**| The request body is an array of objects. Each object contains details about a specific voucher.  |


### Return type

**VouchersImportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns ID of the scheduled async action. The response informs you that your request has been accepted and vouchers will be added to the repository asynchronously. To check the import status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using the [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importVouchersUsingCsv**
> VouchersImportCsvCreateResponseBody importVouchersUsingCsv()

Import generic (standalone) vouchers into the repository using a CSV file. The CSV file has to include headers in the first line. All properties listed in the file headers that cannot be mapped to standard voucher fields will be added to the metadata object.   You can find an example CSV file [here](https://support.voucherify.io/article/45-import-codes-and-share-them-digitally#coupons). ___  📘 Standard voucher fields mapping  - Go to the [import vouchers](/api-reference/vouchers/import-vouchers) endpoint to see all standard CSV fields description (body params section).  - Supported CSV file headers: Code,Voucher Type,Value,Discount Type,Category,Start Date,Expiration Date,Redemption Limit,Redeemed Quantity, Redeemed Amount,Active,Additional Info,Custom Metadata Property Name - **Start and expiration dates** need to be provided in compliance with the ISO 8601 standard. For example, 2020-03-11T09:00:00.000Z.       - YYYY-MM-DD     - YYYY-MM-DDTHH     - YYYY-MM-DDTHH:mm     - YYYY-MM-DDTHH:mm:ss     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ssZ     - YYYY-MM-DDTHH:mm:ss.SSSZ  - Custom code attributes (not supported by-default) need to be added as code **metadata**.  - You **cannot import the same codes** to a single Voucherify project.  - You can, however, upload the same codes to update them.  📘 Categories  In the structure representing your data, you can define a category that the voucher belongs to. You can later use the category of a voucher to group and search by specific criteria in the Dashboard and using the [List Vouchers](/api-reference/vouchers/list-vouchers) endpoint. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action). You can pass the webhooks_enable true parameter to trigger a webhook sendout for created or updated vouchers. Configure the [respective webhooks](/api-reference/introduction-to-webhooks) in Project settings. For updated webhooks, a webhook is sent even if the voucher hasnt been changed in the CSV file. 🚧 Generic (standalone) vouchers and campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, vouchers imported through the dashboard in the Vouchers section or through the API do not have a campaign attached, so the values for campaign and campaign_id are null.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiImportVouchersUsingCsvRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiImportVouchersUsingCsvRequest = {
    // File path. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings. (optional)
  webhooksEnable: true,
};

const data = await apiInstance.importVouchersUsingCsv(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] | File path. | (optional) defaults to undefined
 **webhooksEnable** | [**boolean**] | Triggers a webhook sendout for new and updated vouchers if the voucher created and voucher updated webhooks are configured in Project settings. | (optional) defaults to undefined


### Return type

**VouchersImportCsvCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns ID of the scheduled async action. The response informs you that your request has been accepted and vouchers will be added to the repository asynchronously. To check the import status and result, copy the &#x60;async_action_id&#x60; from the **response** and pass it using the [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVoucherTransactions**
> VouchersTransactionsListResponseBody listVoucherTransactions()

List transactions that are associated with credit movements on a gift card or loyalty card.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiListVoucherTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiListVoucherTransactionsRequest = {
    // A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
  code: "2CpRCE2c",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listVoucherTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListTransactions** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | (optional) defaults to undefined


### Return type

**VouchersTransactionsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of transaction objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVouchers**
> VouchersListResponseBody listVouchers()

Returns a list of vouchers. By default, the vouchers are returned sorted by creation date, with the most recent vouchers appearing first. A maximum of 100 vouchers are returned in the response. When you get a list of vouchers, you can optionally specify query parameters to customize the number of vouchers returned per call using limit, which page of vouchers to return using page, sort the vouchers using the order query parameter and more. This method will return an error when trying to return a limit of more than 100 vouchers. 

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiListVouchersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiListVouchersRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1, the highest value is 99. (optional)
  page: 1,
    // Limit search results to vouchers within the specified category. (optional)
  category: "category_example",
    // Limit search results to vouchers within the specified campaign (optional)
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters. (optional)
  customer: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
    // A unique campaign name, identifies the parent campaign. (optional)
  campaign: "camp_rRsfatlwN7unSeUIJDCYedal",
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
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
  
  code: "2CpRCE2c",
  
  ids: [
    "ids_example",
  ],
};

const data = await apiInstance.listVouchers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1, the highest value is 99. | (optional) defaults to undefined
 **category** | [**string**] | Limit search results to vouchers within the specified category. | (optional) defaults to undefined
 **campaignId** | [**string**] | Limit search results to vouchers within the specified campaign | (optional) defaults to undefined
 **customer** | [**string**] | A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters. | (optional) defaults to undefined
 **campaign** | [**string**] | A unique campaign name, identifies the parent campaign. | (optional) defaults to undefined
 **createdAt** | **ParameterCreatedBeforeAfter** | A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z | (optional) defaults to undefined
 **updatedAt** | **ParameterUpdatedBeforeAfter** | A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z | (optional) defaults to undefined
 **order** | **ParameterOrderVouchers** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **code** | [**string**] |  | (optional) defaults to undefined
 **ids** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**VouchersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary that contains an array of vouchers. Each entry in the array is a separate voucher object. If no more vouchers are available (query parameter &#x60;page&#x60; incremented over and above the voucher count), the resulting array will be empty. The result can be narrowed down according to specified (or default) filters. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **releaseValidationSession**
> void releaseValidationSession()

Manually release a validation session that has been set up for the voucher. This method undoes the actions that are explained in the [Locking validation session](/guides/locking-validation-session) guide.   📘 Release session in the Dashboard  You can also use the [Validations Manager](https://support.voucherify.io/article/16-dashboard-sections#sessions) in the Dashboard to unlock sessions.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiReleaseValidationSessionRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiReleaseValidationSessionRequest = {
    // A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify.
  code: "2CpRCE2c",
    // A unique session identifier.
  sessionKey: "ssn_yQGMTeKBSw8OOuFPwlBEjzGy8d8VA9Ts",
};

const data = await apiInstance.releaseValidationSession(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify. | defaults to undefined
 **sessionKey** | [**string**] | A unique session identifier. | defaults to undefined


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
**204** | Returns no content if the validation session was released successfully. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVoucher**
> VouchersUpdateResponseBody updateVoucher(vouchersUpdateRequestBody)

Updates the specified voucher by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged. Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped. If you want to change the amount on a gift card or the number of points on a loyalty card, use the [Adjust voucher balance](/api-reference/vouchers/adjust-voucher-balance) endpoint.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiUpdateVoucherRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiUpdateVoucherRequest = {
    // A unique **code** that identifies the voucher.
  code: "2CpRCE2c",
    // Specify the parameters to be updated.
  vouchersUpdateRequestBody: {
    category: "category_example",
    categoryId: "cat_0bb81a481615a37b5e",
    startDate: new Date('2021-12-01T00:00:00Z'),
    expirationDate: new Date('2021-12-31T00:00:00Z'),
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
    active: true,
    additionalInfo: "additionalInfo_example",
    metadata: {},
    type: "DISCOUNT_VOUCHER",
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
};

const data = await apiInstance.updateVoucher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersUpdateRequestBody** | **VouchersUpdateRequestBody**| Specify the parameters to be updated. |
 **code** | [**string**] | A unique **code** that identifies the voucher. | defaults to undefined


### Return type

**VouchersUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the voucher object if the update succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVoucherBalance**
> VouchersBalanceUpdateResponseBody updateVoucherBalance(vouchersBalanceUpdateRequestBody)

Add balance to an existing gift card or loyalty card. For loyalty cards, it must be assigned to a holder.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiUpdateVoucherBalanceRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiUpdateVoucherBalanceRequest = {
    // A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u.
  code: "2CpRCE2c",
    // Provide the amount to be added to/subtracted from the voucher.
  vouchersBalanceUpdateRequestBody: {
    amount: 1,
    sourceId: "sourceId_example",
    reason: "reason_example",
  },
};

const data = await apiInstance.updateVoucherBalance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersBalanceUpdateRequestBody** | **VouchersBalanceUpdateRequestBody**| Provide the amount to be added to/subtracted from the voucher. |
 **code** | [**string**] | A **code** that identifies the voucher or a unique voucher ID assigned by Voucherify, i.e. v_TzD19aeNiqGc9LWciMWknyEZT8IW7u4u. | defaults to undefined


### Return type

**VouchersBalanceUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a balance object if the operation succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVouchersInBulk**
> VouchersUpdateInBulkResponseBody updateVouchersInBulk(vouchersUpdateInBulkItemRequestBody)

Updates specific metadata parameters for each code, respectively, in one asynchronous operation. The request can include up to **10 MB** of data. Upserts are not supported.  🚧 Currently, only **metadata** updates are supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiUpdateVouchersInBulkRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiUpdateVouchersInBulkRequest = {
    // List the codes to be updated with the metadata key/value pairs for that code.
  vouchersUpdateInBulkItemRequestBody: [
    {
      code: "code_example",
      metadata: {},
    },
  ],
};

const data = await apiInstance.updateVouchersInBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersUpdateInBulkItemRequestBody** | **Array<VouchersUpdateInBulkItemRequestBody>**| List the codes to be updated with the metadata key/value pairs for that code. |


### Return type

**VouchersUpdateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action. The response informs you that the request has been accepted and the resources will be updated in the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and use it as a query parameter in the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVouchersMetadataInBulk**
> VouchersMetadataUpdateInBulkResponseBody updateVouchersMetadataInBulk(vouchersMetadataUpdateInBulkRequestBody)

Updates metadata parameters for a list of codes. Every resource in the list will receive the metadata defined in the request. The request can include up to **10 MB** of data. Upserts are not supported. The response returns a unique asynchronous action ID. Use this ID in the query paramater of the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint to check, e.g.: - The status of your request (in queue, in progress, done, or failed) - Resources that failed to be updated - The report file with details about the update This API request starts a process that affects Voucherify data in bulk. In the case of small jobs (like bulk update), the request is put into a queue and processed when every other bulk request placed in the queue prior to this request is finished.

### Example


```typescript
import { createConfiguration, VouchersApi } from 'voucherify';
import type { VouchersApiUpdateVouchersMetadataInBulkRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new VouchersApi(configuration);

const request: VouchersApiUpdateVouchersMetadataInBulkRequest = {
    // List the codes of the vouchers you would like to update with the metadata key/value pairs.
  vouchersMetadataUpdateInBulkRequestBody: {
    codes: [
      "codes_example",
    ],
    metadata: {},
  },
};

const data = await apiInstance.updateVouchersMetadataInBulk(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vouchersMetadataUpdateInBulkRequestBody** | **VouchersMetadataUpdateInBulkRequestBody**| List the codes of the vouchers you would like to update with the metadata key/value pairs. |


### Return type

**VouchersMetadataUpdateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action. The response informs you that the request has been accepted and the resources will be updated in the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and use it as a query parameter in the [GET Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


