# .CampaignsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVoucherWithSpecificCodeToCampaign**](CampaignsApi.md#addVoucherWithSpecificCodeToCampaign) | **POST** /v1/campaigns/{campaignId}/vouchers/{code} | Add Voucher with Specific Code to Campaign
[**addVouchersToCampaign**](CampaignsApi.md#addVouchersToCampaign) | **POST** /v1/campaigns/{campaignId}/vouchers | Add Vouchers to Campaign
[**createCampaign**](CampaignsApi.md#createCampaign) | **POST** /v1/campaigns | Create Campaign
[**deleteCampaign**](CampaignsApi.md#deleteCampaign) | **DELETE** /v1/campaigns/{campaignId} | Delete Campaign
[**disableCampaign**](CampaignsApi.md#disableCampaign) | **POST** /v1/campaigns/{campaignId}/disable | Disable Campaign
[**enableCampaign**](CampaignsApi.md#enableCampaign) | **POST** /v1/campaigns/{campaignId}/enable | Enable Campaign
[**exportCampaignTransactions**](CampaignsApi.md#exportCampaignTransactions) | **POST** /v1/campaigns/{campaignId}/transactions/export | Export Campaign Transactions
[**getCampaign**](CampaignsApi.md#getCampaign) | **GET** /v1/campaigns/{campaignId} | Get Campaign
[**getCampaignSummary**](CampaignsApi.md#getCampaignSummary) | **GET** /v1/campaigns/{campaignId}/summary | Get Campaign Summary
[**importVouchersToCampaign**](CampaignsApi.md#importVouchersToCampaign) | **POST** /v1/campaigns/{campaignId}/import | Import Vouchers to Campaign
[**importVouchersToCampaignUsingCsv**](CampaignsApi.md#importVouchersToCampaignUsingCsv) | **POST** /v1/campaigns/{campaignId}/importCSV | Import Vouchers to Campaign by CSV
[**listCampaignTransactions**](CampaignsApi.md#listCampaignTransactions) | **GET** /v1/campaigns/{campaignId}/transactions | List Campaign Transactions
[**listCampaigns**](CampaignsApi.md#listCampaigns) | **GET** /v1/campaigns | List Campaigns
[**updateCampaign**](CampaignsApi.md#updateCampaign) | **PUT** /v1/campaigns/{campaignId} | Update Campaign


# **addVoucherWithSpecificCodeToCampaign**
> CampaignsVouchersCreateResponseBody addVoucherWithSpecificCodeToCampaign()

This method gives a possibility to add a new voucher to an existing campaign. The voucher definition will be inherited from the definition kept in the campaign profile. However, you are able to overwrite a few properties inherited from the campaign.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiAddVoucherWithSpecificCodeToCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiAddVoucherWithSpecificCodeToCampaignRequest = {
    // The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A custom **code** that identifies the voucher.
  code: "2CpRCE2c",
    // Specify the voucher parameters that you would like to overwrite. (optional)
  campaignsVouchersCreateRequestBody: {
    category: "category_example",
    metadata: {},
    redemption: {
      quantity: 1,
    },
    additionalInfo: "additionalInfo_example",
    startDate: new Date('2022-09-20T00:00:00Z'),
    expirationDate: new Date('2022-09-30T00:00:00Z'),
  },
};

const data = await apiInstance.addVoucherWithSpecificCodeToCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsVouchersCreateRequestBody** | **CampaignsVouchersCreateRequestBody**| Specify the voucher parameters that you would like to overwrite. |
 **campaignId** | [**string**] | The campaign ID or name of the campaign to which voucher will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined
 **code** | [**string**] | A custom **code** that identifies the voucher. | defaults to undefined


### Return type

**CampaignsVouchersCreateResponseBody**

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

# **addVouchersToCampaign**
> CampaignsVouchersCreateCombinedResponseBody addVouchersToCampaign()

This method gives the possibility to push new vouchers to an existing campaign. New vouchers will inherit properties from the campaign profile. However, it is possible to overwrite some of them in the request body. If you provide an optional code_config parameter with a voucher code configuration, then it will be used to generate new voucher codes. Otherwise, the voucher code configuration from the campaign will be used. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiAddVouchersToCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiAddVouchersToCampaignRequest = {
    // The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Number of vouchers that should be added. (optional)
  vouchersCount: 1,
    // Specify the voucher parameters that you would like to overwrite. (optional)
  campaignsVouchersCreateInBulkRequestBody: {
    code: "code_example",
    codeConfig: {
      length: 3.14,
      charset: "charset_example",
      prefix: "prefix_example",
      postfix: "postfix_example",
      pattern: "pattern_example",
      initialCount: 1,
    },
    category: "category_example",
    metadata: {},
    redemption: {
      quantity: 1,
    },
    additionalInfo: "additionalInfo_example",
    startDate: new Date('2022-09-20T00:00:00Z'),
    expirationDate: new Date('2022-09-30T00:00:00Z'),
  },
};

const data = await apiInstance.addVouchersToCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsVouchersCreateInBulkRequestBody** | **CampaignsVouchersCreateInBulkRequestBody**| Specify the voucher parameters that you would like to overwrite. |
 **campaignId** | [**string**] | The campaign ID or name of the campaign to which voucher(s) will be added. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined
 **vouchersCount** | [**number**] | Number of vouchers that should be added. | (optional) defaults to undefined


### Return type

**CampaignsVouchersCreateCombinedResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a voucher object if the call succeeded for a voucher count of 1. and Returns an &#x60;async_action_id&#x60; if the request was made to create more than 1 voucher. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCampaign**
> CampaignsCreateResponseBody createCampaign()

Method to create a batch of vouchers aggregated in one campaign. You can choose a variety of voucher types and define a unique pattern for generating codes.    📘 Global uniqueness  All campaign codes are unique across the whole project. Voucherify will not allow you to generate 2 campaigns with the same coupon code.    🚧 Code generation status  This is an asynchronous action; you cant read or modify a newly created campaign until the code generation is completed. See the creation_status field in the [campaign object](/api-reference/campaigns/campaign-object) description. 🚧 Standalone Vouchers and Campaigns In version [v20241004](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20241004), generic (standalone) vouchers created through the Voucherify dashboard create a campaign for that voucher. However, you cannot create a standalone discount or gift voucher campaign with the type: STANDALONE through the API. Voucherify developers work on adding that feature. Follow the [Voucherify Release Notes](https://support.voucherify.io/article/23-whats-new-in-voucherify) for more details about released features.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiCreateCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiCreateCampaignRequest = {
    // Specify the details of the campaign that you would like to create. (optional)
  campaignsCreateRequestBody: {
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
    validationRules: [
      "validationRules_example",
    ],
    campaignType: "DISCOUNT_COUPONS",
    voucher: {
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
      isReferralCode: true,
      gift: {
        amount: 3.14,
        subtractedAmount: 1,
        balance: 3.14,
        effect: "APPLY_TO_ORDER",
      },
      loyaltyCard: {
        points: 1,
        expirationRules: {
          periodType: "FIXED_DAY_OF_YEAR",
          periodValue: 1,
          roundingType: "END_OF_MONTH",
          roundingValue: 1,
          fixedMonth: 1,
          fixedDay: 1,
        },
      },
    },
    referralProgram: {
      conversionEventType: "redemption",
      customEvent: {
        id: "ms_Ll9enAm2BCN0M1s4VxWobLFM",
        name: "name_example",
      },
      refereeReward: {
        relatedObjectParent: {
          id: "camp_kdxp3vf1clQ9CFs1jpqv3tZe",
          name: "name_example",
          object: "CAMPAIGN",
        },
        type: "LOYALTY_CARD",
        amount: "amount_example",
      },
    },
    promotion: {
      tiers: [
        {
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
          validationRules: [
            "validationRules_example",
          ],
          active: true,
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
          category: "category_example",
          categoryId: "cat_0c9da30e7116ba6bba",
        },
      ],
    },
  },
};

const data = await apiInstance.createCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsCreateRequestBody** | **CampaignsCreateRequestBody**| Specify the details of the campaign that you would like to create. |


### Return type

**CampaignsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a campaign object if the call succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCampaign**
> CampaignsDeleteResponseBody deleteCampaign()

Deletes a campaign and all related vouchers. This action cannot be undone. Also, this method immediately removes any redemptions on the voucher. If the force parameter is set to false or not set at all, the campaign and all related vouchers will be moved to [the bin](/api-reference/bin/list-bin-entries). This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiDeleteCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiDeleteCampaignRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name. (optional)
  force: true,
};

const data = await apiInstance.deleteCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined
 **force** | [**boolean**] | If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the campaign and related vouchers will be moved to the bin. Going forward, the user will be able to create the next campaign with exactly the same name. | (optional) defaults to undefined


### Return type

**CampaignsDeleteResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action, informing you that your request has been accepted and the campaign will be deleted from the repository asynchronously. To check the deletion status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableCampaign**
> any disableCampaign()

There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **inactive**. The vouchers in this campaign can no longer be redeemed.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiDisableCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiDisableCampaignRequest = {
    // The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
};

const data = await apiInstance.disableCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the campaign being disabled. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined


### Return type

**any**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an empty json &#x60;{}&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableCampaign**
> any enableCampaign()

There are various times when youll want to manage a campaigns accessibility. This can be done by two API methods for managing the campaign state - *enable* and *disable*.   Sets campaign state to **active**. The vouchers in this campaign can be redeemed - only if the redemption occurs after the start date of the campaign and voucher and the voucher and campaign are not expired.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiEnableCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiEnableCampaignRequest = {
    // The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
};

const data = await apiInstance.enableCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value. | defaults to undefined


### Return type

**any**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an empty json &#x60;{}&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportCampaignTransactions**
> CampaignsTransactionsExportCreateResponseBody exportCampaignTransactions()

Export transactions is an asynchronous process that generates a CSV file with the data about credit movements on all gift cards or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Loyalty Campaign Transactions  For loyalty campaigns, this method works in the same way the [POST Export Loyalty Campaign Transactions](/api-reference/loyalties/export-loyalty-campaign-transactions) does.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiExportCampaignTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiExportCampaignTransactionsRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the parameters for the transaction export. (optional)
  campaignsTransactionsExportCreateRequestBody: {
    parameters: {
      order: "-created_at",
      fields: [
        "id",
      ],
      filters: {
        junction: "and",
        createdAt: {
          after: new Date('2024-01-01T00:00:00Z'),
          before: new Date('2024-01-01T00:00:00Z'),
          hasValue: "hasValue_example",
          isUnknown: "isUnknown_example",
          moreThan: 1,
          lessThan: 1,
        },
        voucherId: {
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
    },
  },
};

const data = await apiInstance.exportCampaignTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsTransactionsExportCreateRequestBody** | **CampaignsTransactionsExportCreateRequestBody**| Specify the parameters for the transaction export. |
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined


### Return type

**CampaignsTransactionsExportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object representing an export. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaign**
> CampaignsGetResponseBody getCampaign()

Retrieves the campaign with the given campaign ID or campaign name.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiGetCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiGetCampaignRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
};

const data = await apiInstance.getCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined


### Return type

**CampaignsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a campaign object if a valid identifier was provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCampaignSummary**
> CampaignsSummaryGetResponseBody getCampaignSummary()

Returns data for campaign analytics, covering validations, redemptions, publications, and other details specific to a given campaign type. Use start_date and end_date to narrow down the data to specific periods. 🚧 Campaigns created before v20250602 version This endpoint returns analytics data for campaigns that were created after the [v20250602 version](https://support.voucherify.io/article/23-whats-new-in-voucherify#v20250602) was released on 17 June 2025. Older campaigns return empty data.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiGetCampaignSummaryRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiGetCampaignSummaryRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Timestamp representing the date which results must begin on. Represented in ISO 8601 format. (optional)
  startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    // Timestamp representing the date which results must end on. Represented in ISO 8601 format. (optional)
  endDate: new Date('1970-01-01').toISOString().split('T')[0];,
};

const data = await apiInstance.getCampaignSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined
 **startDate** | [**string**] | Timestamp representing the date which results must begin on. Represented in ISO 8601 format. | (optional) defaults to undefined
 **endDate** | [**string**] | Timestamp representing the date which results must end on. Represented in ISO 8601 format. | (optional) defaults to undefined


### Return type

**CampaignsSummaryGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns campaign analytics data. Returns different data depending on the campaign type. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importVouchersToCampaign**
> CampaignsImportCreateResponseBody importVouchersToCampaign()

Imports vouchers to an **existing** campaign. This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiImportVouchersToCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiImportVouchersToCampaignRequest = {
    // The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings. (optional)
  campaignsImportVoucherItem: [
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
  ],
};

const data = await apiInstance.importVouchersToCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsImportVoucherItem** | **Array<CampaignsImportVoucherItem>**| Discount type, expiration date and the remaining attributes will be taken from the [Campaign](/api-reference/campaigns/get-campaign) settings. |
 **campaignId** | [**string**] | The ID of an existing campaign to which youre importing the codes. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined


### Return type

**CampaignsImportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Returns the ID of the scheduled asynchronous action, informing you that your request has been accepted and the vouchers will be imported to the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importVouchersToCampaignUsingCsv**
> CampaignsImportCsvCreateResponseBody importVouchersToCampaignUsingCsv()

Imports vouchers to an **existing** campaign.   The CSV file has to include headers in the first line.  This API request starts a process that affects Voucherify data in bulk.  In case of small jobs (like bulk update) the request is put into a queue and processed once every other bulk request placed in the queue prior to this request is finished. However, when the job takes a longer time (like vouchers generation) then it is processed in small portions in a round-robin fashion. When there is a list of vouchers generation scheduled, then they will all have the IN_PROGRESS status shortly. This way, small jobs added just after scheduling big jobs of the same type will be processed in a short time window.  The result will return the async ID. You can verify the status of your request via this [API request](/api-reference/async-actions/get-async-action).

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiImportVouchersToCampaignUsingCsvRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiImportVouchersToCampaignUsingCsvRequest = {
    // The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // File path. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.importVouchersToCampaignUsingCsv(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the campaign being enabled. You can either pass the campaign ID, which was assigned by Voucherify or the name of the campaign as the path parameter value. | defaults to undefined
 **file** | [**HttpFile**] | File path. | (optional) defaults to undefined


### Return type

**CampaignsImportCsvCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the ID of the scheduled asynchronous action, informing you that your request has been accepted and the vouchers will be imported to the repository asynchronously. To check the status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCampaignTransactions**
> CampaignsTransactionsListResponseBody listCampaignTransactions()

Retrieves all transactions for the campaign with the given campaign ID or campaign name. The id filter denotes the unique transaction identifier.  🚧  The endpoint works only for gift card and loyalty campaigns.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiListCampaignTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiListCampaignTransactionsRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Filters for listing responses. (optional)
  filters: {
    junction: "and",
    id: {
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
    voucherId: {
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
};

const data = await apiInstance.listCampaignTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListTransactions** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | (optional) defaults to undefined
 **filters** | **ParametersFiltersListCampaignTransactions** | Filters for listing responses. | (optional) defaults to undefined


### Return type

**CampaignsTransactionsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a &#x60;data&#x60; property that contains an array of transactions. The maximum number of transactions returned is determined by the &#x60;limit&#x60; query parameter. Each entry in the array is a separate transaction object. If more results are available, the &#x60;has_more&#x60; flag has value &#x60;true&#x60; and the value of the &#x60;more_starting_after&#x60; property can be used to retrieve another page of results. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCampaigns**
> CampaignsListResponseBody listCampaigns()

Retrieve a list of campaigns in a project.  The campaigns are returned sorted by creation date, with the most recent campaigns appearing first.   When you get a list of campaigns, you can optionally specify query parameters to customize the amount of campaigns returned per call using limit, which page of campaigns to return using page, sort the campaigns using the order query parameter and filter the results by the campaign_type. This method will return an error when trying to return a limit of more than 100 campaigns.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiListCampaignsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiListCampaignsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // This attribute allows filtering by campaign type. (optional)
  campaignType: "PROMOTION",
    // Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores. (optional)
  expand: "category",
    // Sorts the results by the status of the campaign. (optional)
  campaignStatus: "DONE",
    // Sorts the results that are or are not referral campaigns. (optional)
  isReferralCode: true,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // Filters the results by various campaign properties. (optional)
  filters: {
    campaigns: {
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
    campaignsId: {
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
    campaignStatus: {
      conditions: {
        _in: [
          "DONE",
        ],
        notIn: [
          "DONE",
        ],
        is: "DONE",
        isNot: "DONE",
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        startsWith: "startsWith_example",
        endsWith: "endsWith_example",
      },
    },
    status: {
      conditions: {
        active: {},
        failed: {},
        inProgress: {},
        expired: {},
        beforeStart: {},
      },
    },
    active: {
      enabled: {},
      disabled: {},
      expired: {},
      active: {},
    },
    isReferralCode: {
      conditions: {
        is: "TRUE",
        isNot: "TRUE",
      },
    },
    validityTimeframe: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    voucherType: {
      conditions: null,
    },
    categories: {
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
    categoryIds: {
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
    type: {
      conditions: null,
    },
    createdDate: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    updatedAt: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    startDate: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    expirationDate: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    validityDayOfWeek: {
      conditions: {
        is: [
          0,
        ],
      },
    },
    junction: "and",
  },
    // Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area. (optional)
  accessSettings: {
    filter: {
      areasIds: [
        "ar_0ab12cde3456789fgh",
      ],
      areaAllStoresIds: [
        "ar_0ab12cde3456789fgh",
      ],
      areaStoresIds: [
        "ars_0ab12cde3456789fgh",
      ],
    },
  },
};

const data = await apiInstance.listCampaigns(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **campaignType** | **ParameterCampaignType** | This attribute allows filtering by campaign type. | (optional) defaults to undefined
 **expand** | **ParameterExpandListCampaigns** | Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores. | (optional) defaults to undefined
 **campaignStatus** | **ParameterCampaignStatusListCampaigns** | Sorts the results by the status of the campaign. | (optional) defaults to undefined
 **isReferralCode** | [**boolean**] | Sorts the results that are or are not referral campaigns. | (optional) defaults to undefined
 **order** | **ParameterOrderListCampaigns** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListCampaigns** | Filters the results by various campaign properties. | (optional) defaults to undefined
 **accessSettings** | **ParameterCampaignsAccessSetttings** | Filter by areas and stores IDs to return campaigns that are assigned to areas, stores, and all stores in an area. | (optional) defaults to undefined


### Return type

**CampaignsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with a &#x60;campaign&#x60; property that contains an array of campaigns. The maximum number of campaigns returned is determined by the &#x60;limit&#x60; query parameter. Each entry in the array is a separate campaign object. If no more campaigns are available, the resulting array on a given page will be empty. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCampaign**
> CampaignsUpdateResponseBody updateCampaign()

Updates the specified campaign by setting the values of the parameters passed in the request body. Any parameters not provided in the payload will be left unchanged.  Fields other than the ones listed in the request body wont be modified. Even if provided, they will be silently skipped.     🚧 Vouchers will be affected  This method will update vouchers aggregated in the campaign. It will affect all vouchers that are not published or redeemed yet.

### Example


```typescript
import { createConfiguration, CampaignsApi } from 'voucherify';
import type { CampaignsApiUpdateCampaignRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new CampaignsApi(configuration);

const request: CampaignsApiUpdateCampaignRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the campaign parameters to be updated. (optional)
  campaignsUpdateRequestBody: {
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
    description: "description_example",
    category: "category_example",
    metadata: {},
    unsetMetadataFields: [
      "unsetMetadataFields_example",
    ],
    categoryId: "cat_0b688929a2476386a7",
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
    activityDurationAfterPublishing: "activityDurationAfterPublishing_example",
    joinOnce: true,
    autoJoin: true,
    type: "AUTO_UPDATE",
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
    referralProgram: {
      conversionEventType: "redemption",
      customEvent: {
        id: "ms_Ll9enAm2BCN0M1s4VxWobLFM",
        name: "name_example",
      },
      refereeReward: {
        relatedObjectParent: {
          id: "camp_kdxp3vf1clQ9CFs1jpqv3tZe",
          name: "name_example",
          object: "CAMPAIGN",
        },
        type: "LOYALTY_CARD",
        amount: "amount_example",
      },
    },
    gift: {
      amount: 3.14,
      subtractedAmount: 1,
      balance: 3.14,
      effect: "APPLY_TO_ORDER",
    },
    loyaltyTiersExpiration: {
      qualificationType: "BALANCE",
      qualificationPeriod: "MONTH",
      startDate: {
        type: "IMMEDIATE",
      },
      expirationDate: {
        type: "END_OF_PERIOD",
        extend: "extend_example",
        rounding: null,
      },
    },
    options: {
      recalculateTiers: true,
    },
  },
};

const data = await apiInstance.updateCampaign(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignsUpdateRequestBody** | **CampaignsUpdateRequestBody**| Specify the campaign parameters to be updated. |
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined


### Return type

**CampaignsUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the campaign object if the update succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


