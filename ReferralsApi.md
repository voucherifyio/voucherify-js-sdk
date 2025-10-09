# .ReferralsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**referralsAddHolders**](ReferralsApi.md#referralsAddHolders) | **POST** /v1/referrals/members/{memberId}/holders | Add Referral Code Holders
[**referralsAddHolders1**](ReferralsApi.md#referralsAddHolders1) | **POST** /v1/referrals/{campaignId}/members/{memberId}/holders | Add Referral Code Holders with Campaign ID
[**referralsCodeHolders**](ReferralsApi.md#referralsCodeHolders) | **GET** /v1/referrals/{campaignId}/members/{memberId}/holders | List Referral Code Holders with campaign ID
[**referralsCodeHolders1**](ReferralsApi.md#referralsCodeHolders1) | **GET** /v1/referrals/members/{memberId}/holders | List Referral Code Holders
[**referralsRemoveHolder**](ReferralsApi.md#referralsRemoveHolder) | **DELETE** /v1/referrals/members/{memberId}/holders/{holderId} | Remove Referral Card Holder
[**referralsRemoveHolder1**](ReferralsApi.md#referralsRemoveHolder1) | **DELETE** /v1/referrals/{campaignId}/members/{memberId}/holders/{holderId} | Remove Referral Card Holder with campaign ID


# **referralsAddHolders**
> ReferralsMembersHoldersCreateInBulkResponseBody referralsAddHolders()

Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.  📘 Alternative endpoint This endpoint is an alternative to the [Add Referral Code Holders endpoint](/api-reference/referrals/add-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.

### Example


```typescript
import { createConfiguration, ReferralsApi } from 'voucherify';
import type { ReferralsApiReferralsAddHoldersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiReferralsAddHoldersRequest = {
    // Unique referral code or its identifier.
  memberId: "MmFAzfDe",
    // Specify the customer data to be upserted as redeemable holders. (optional)
  referralsMembersHoldersCreateInBulkRequestBody: {
    holders: [
      {
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
    ],
    metadata: {},
  },
};

const data = await apiInstance.referralsAddHolders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referralsMembersHoldersCreateInBulkRequestBody** | **ReferralsMembersHoldersCreateInBulkRequestBody**| Specify the customer data to be upserted as redeemable holders. |
 **memberId** | [**string**] | Unique referral code or its identifier. | defaults to undefined


### Return type

**ReferralsMembersHoldersCreateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of redeemable holder objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **referralsAddHolders1**
> ReferralsMembersHoldersCreateInBulkResponseBody referralsAddHolders1()

Adds new holders to a referral code as **referees**. The data sent in the request is upserted into the customer data. If the request returns an error even for one customer, you have to resend the whole request. Customer data is upserted if the data for all customers is correct. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  👍 To add a holder as a referrer, use the [Create Publication](/api-reference/publications/create-publication) endpoint.

### Example


```typescript
import { createConfiguration, ReferralsApi } from 'voucherify';
import type { ReferralsApiReferralsAddHolders1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiReferralsAddHolders1Request = {
    // Unique identifier of a referral program campaign.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique referral code or its identifier.
  memberId: "MmFAzfDe",
    // Specify the customer data to be upserted as redeemable holders. (optional)
  referralsMembersHoldersCreateInBulkRequestBody: {
    holders: [
      {
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
    ],
    metadata: {},
  },
};

const data = await apiInstance.referralsAddHolders1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referralsMembersHoldersCreateInBulkRequestBody** | **ReferralsMembersHoldersCreateInBulkRequestBody**| Specify the customer data to be upserted as redeemable holders. |
 **campaignId** | [**string**] | Unique identifier of a referral program campaign. | defaults to undefined
 **memberId** | [**string**] | Unique referral code or its identifier. | defaults to undefined


### Return type

**ReferralsMembersHoldersCreateInBulkResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of redeemable holder objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **referralsCodeHolders**
> ReferralsMembersHoldersListResponseBody referralsCodeHolders()

Retrieves all the redeemables that have been assigned to the customer. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)

### Example


```typescript
import { createConfiguration, ReferralsApi } from 'voucherify';
import type { ReferralsApiReferralsCodeHoldersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiReferralsCodeHoldersRequest = {
    // Unique identifier of a referral program campaign.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique referral code or its identifier.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the events starting after an event with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Filters for listing customer redeemables. (optional)
  filters: {
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
    createdAt: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    holderRole: {
      conditions: null,
    },
    customerId: {
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
    junction: "and",
  },
};

const data = await apiInstance.referralsCodeHolders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique identifier of a referral program campaign. | defaults to undefined
 **memberId** | [**string**] | Unique referral code or its identifier. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListRedeemables** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the events starting after an event with the given ID. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListReferralsRedeemableHolders** | Filters for listing customer redeemables. | (optional) defaults to undefined


### Return type

**ReferralsMembersHoldersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the holders of the redeemable that is assigned to the referral campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **referralsCodeHolders1**
> ReferralsMembersHoldersListResponseBody referralsCodeHolders1()

Retrieves the holders of the referral code from a referral campaign. To use this endpoint, you must have the following permissions: - Read Customers (customers.details.read)  📘 Alternative endpoint This endpoint is an alternative to the [List Member Holders endpoint](/api-reference/referrals/list-referral-code-holders-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.

### Example


```typescript
import { createConfiguration, ReferralsApi } from 'voucherify';
import type { ReferralsApiReferralsCodeHolders1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiReferralsCodeHolders1Request = {
    // Unique referral code or its identifier.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the events starting after an event with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Filters for listing customer redeemables. (optional)
  filters: {
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
    createdAt: {
      conditions: {
        after: new Date('2024-01-01T00:00:00Z'),
        before: new Date('2024-01-01T00:00:00Z'),
        hasValue: "hasValue_example",
        isUnknown: "isUnknown_example",
        moreThan: 1,
        lessThan: 1,
      },
    },
    holderRole: {
      conditions: null,
    },
    customerId: {
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
    junction: "and",
  },
};

const data = await apiInstance.referralsCodeHolders1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique referral code or its identifier. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListRedeemables** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the events starting after an event with the given ID. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListReferralsRedeemableHolders** | Filters for listing customer redeemables. | (optional) defaults to undefined


### Return type

**ReferralsMembersHoldersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the holders of the redeemable that is assigned to the referral campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **referralsRemoveHolder**
> void referralsRemoveHolder()

Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)  📘 Alternative endpoint This endpoint is an alternative to the [Remove Referral Card Holder endpoint](/api-reference/referrals/remove-referral-card-holder-with-campaign-id). The URL was re-designed to retrieve the referral member holders without providing the campaignId as a path paremeter.

### Example


```typescript
import { createConfiguration, ReferralsApi } from 'voucherify';
import type { ReferralsApiReferralsRemoveHolderRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiReferralsRemoveHolderRequest = {
    // Unique referral code or its identifier.
  memberId: "MmFAzfDe",
    // Unique identifier of a redeemable holder.
  holderId: "rh_0f1ab744ce8277d0dc",
};

const data = await apiInstance.referralsRemoveHolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique referral code or its identifier. | defaults to undefined
 **holderId** | [**string**] | Unique identifier of a redeemable holder. | defaults to undefined


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
**204** | Returns no content if removal is successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **referralsRemoveHolder1**
> void referralsRemoveHolder1()

Removes the holder from a referral card. You can remove a referee only. To use this endpoint, you must have the following permissions: - Create and modify Customers and Segments (customers.modify) - Publish Voucher (vouchers.publish)

### Example


```typescript
import { createConfiguration, ReferralsApi } from 'voucherify';
import type { ReferralsApiReferralsRemoveHolder1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiReferralsRemoveHolder1Request = {
    // Unique identifier of a referral program campaign.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique referral code or its identifier.
  memberId: "MmFAzfDe",
    // Unique identifier of a redeemable holder.
  holderId: "rh_0f1ab744ce8277d0dc",
};

const data = await apiInstance.referralsRemoveHolder1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique identifier of a referral program campaign. | defaults to undefined
 **memberId** | [**string**] | Unique referral code or its identifier. | defaults to undefined
 **holderId** | [**string**] | Unique identifier of a redeemable holder. | defaults to undefined


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
**204** | Returns no content if removal is successful. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


