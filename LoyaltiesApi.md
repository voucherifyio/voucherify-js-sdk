# .LoyaltiesApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateMemberPendingPoints**](LoyaltiesApi.md#activateMemberPendingPoints) | **POST** /v1/loyalties/members/{memberId}/pending-points/{pendingPointsId}/activate | Activate Member Pending Points
[**addMember**](LoyaltiesApi.md#addMember) | **POST** /v1/loyalties/{campaignId}/members | Add Member
[**adjustMemberPendingPoints**](LoyaltiesApi.md#adjustMemberPendingPoints) | **POST** /v1/loyalties/members/{memberId}/pending-points/{pendingPointsId}/balance | Adjust Member Pending Points
[**cancelMemberPendingPoints**](LoyaltiesApi.md#cancelMemberPendingPoints) | **POST** /v1/loyalties/members/{memberId}/pending-points/{pendingPointsId}/cancel | Cancel Member Pending Points
[**createEarningRule**](LoyaltiesApi.md#createEarningRule) | **POST** /v1/loyalties/{campaignId}/earning-rules | Create Earning Rule
[**createInBulkLoyaltyTiers**](LoyaltiesApi.md#createInBulkLoyaltyTiers) | **POST** /v1/loyalties/{campaignId}/tiers | Create loyalty tiers
[**createLoyaltyProgram**](LoyaltiesApi.md#createLoyaltyProgram) | **POST** /v1/loyalties | Create Loyalty Campaign
[**createPointsExpirationExport**](LoyaltiesApi.md#createPointsExpirationExport) | **POST** /v1/loyalties/{campaignId}/points-expiration/export | Export Loyalty Campaign Point Expiration
[**createRewardAssignment1**](LoyaltiesApi.md#createRewardAssignment1) | **POST** /v1/loyalties/{campaignId}/rewards | Create Loyalty Campaign Reward Assignment
[**deleteEarningRule**](LoyaltiesApi.md#deleteEarningRule) | **DELETE** /v1/loyalties/{campaignId}/earning-rules/{earningRuleId} | Delete Earning Rule
[**deleteLoyaltyProgram**](LoyaltiesApi.md#deleteLoyaltyProgram) | **DELETE** /v1/loyalties/{campaignId} | Delete Loyalty Campaign
[**deleteRewardAssignment1**](LoyaltiesApi.md#deleteRewardAssignment1) | **DELETE** /v1/loyalties/{campaignId}/rewards/{assignmentId} | Delete Campaign Reward Assignment
[**disableEarningRule**](LoyaltiesApi.md#disableEarningRule) | **POST** /v1/loyalties/{campaignId}/earning-rules/{earningRuleId}/disable | Disable Earning Rule
[**enableEarningRule**](LoyaltiesApi.md#enableEarningRule) | **POST** /v1/loyalties/{campaignId}/earning-rules/{earningRuleId}/enable | Enable Earning Rule
[**exportLoyaltyCampaignTransactions**](LoyaltiesApi.md#exportLoyaltyCampaignTransactions) | **POST** /v1/loyalties/{campaignId}/transactions/export | Export Loyalty Campaign Transactions
[**exportLoyaltyCardTransactions**](LoyaltiesApi.md#exportLoyaltyCardTransactions) | **POST** /v1/loyalties/members/{memberId}/transactions/export | Export Loyalty Card Transactions
[**exportLoyaltyCardTransactions1**](LoyaltiesApi.md#exportLoyaltyCardTransactions1) | **POST** /v1/loyalties/{campaignId}/members/{memberId}/transactions/export | Export Loyalty Card Transactions with campaign ID
[**getEarningRule**](LoyaltiesApi.md#getEarningRule) | **GET** /v1/loyalties/{campaignId}/earning-rules/{earningRuleId} | Get Earning Rule
[**getLoyaltyProgram**](LoyaltiesApi.md#getLoyaltyProgram) | **GET** /v1/loyalties/{campaignId} | Get Loyalty Campaign
[**getLoyaltyTier**](LoyaltiesApi.md#getLoyaltyTier) | **GET** /v1/loyalties/{campaignId}/tiers/{loyaltyTierId} | Get Loyalty Tier
[**getMember**](LoyaltiesApi.md#getMember) | **GET** /v1/loyalties/members/{memberId} | Get Member
[**getMember1**](LoyaltiesApi.md#getMember1) | **GET** /v1/loyalties/{campaignId}/members/{memberId} | Get Member with campaign ID
[**getRewardAssignment1**](LoyaltiesApi.md#getRewardAssignment1) | **GET** /v1/loyalties/{campaignId}/reward-assignments/{assignmentId} | Get Campaign Reward Assignments
[**getRewardAssignment2**](LoyaltiesApi.md#getRewardAssignment2) | **GET** /v1/loyalties/{campaignId}/rewards/{assignmentId} | Get Campaign Reward Assignment
[**getRewardDetails**](LoyaltiesApi.md#getRewardDetails) | **GET** /v1/loyalties/{campaignId}/reward-assignments/{assignmentId}/reward | Get Reward Details
[**listCampaignPendingPoints**](LoyaltiesApi.md#listCampaignPendingPoints) | **GET** /v1/loyalties/{campaignId}/pending-points | List Campaign Pending Points
[**listEarningRules**](LoyaltiesApi.md#listEarningRules) | **GET** /v1/loyalties/{campaignId}/earning-rules | List Earning Rules
[**listLoyaltyCampaignTransactions**](LoyaltiesApi.md#listLoyaltyCampaignTransactions) | **GET** /v1/loyalties/{campaignId}/transactions | List Loyalty Campaign Transactions
[**listLoyaltyCardTransactions**](LoyaltiesApi.md#listLoyaltyCardTransactions) | **GET** /v1/loyalties/members/{memberId}/transactions | List Loyalty Card Transactions
[**listLoyaltyCardTransactions1**](LoyaltiesApi.md#listLoyaltyCardTransactions1) | **GET** /v1/loyalties/{campaignId}/members/{memberId}/transactions | List Loyalty Card Transactions with campaign ID
[**listLoyaltyPrograms**](LoyaltiesApi.md#listLoyaltyPrograms) | **GET** /v1/loyalties | List Loyalty Campaigns
[**listLoyaltyTierEarningRules**](LoyaltiesApi.md#listLoyaltyTierEarningRules) | **GET** /v1/loyalties/{campaignId}/tiers/{loyaltyTierId}/earning-rules | List Loyalty Tier Earning Rules
[**listLoyaltyTierRewards**](LoyaltiesApi.md#listLoyaltyTierRewards) | **GET** /v1/loyalties/{campaignId}/tiers/{loyaltyTierId}/rewards | List Loyalty Tier Rewards
[**listLoyaltyTiers**](LoyaltiesApi.md#listLoyaltyTiers) | **GET** /v1/loyalties/{campaignId}/tiers | List Loyalty Tiers
[**listMemberActivity**](LoyaltiesApi.md#listMemberActivity) | **GET** /v1/loyalties/members/{memberId}/activity | List Member Activity
[**listMemberActivity1**](LoyaltiesApi.md#listMemberActivity1) | **GET** /v1/loyalties/{campaignId}/members/{memberId}/activity | List Member Activity with campaign ID
[**listMemberLoyaltyTier**](LoyaltiesApi.md#listMemberLoyaltyTier) | **GET** /v1/loyalties/members/{memberId}/tiers | List Member\&#39;s Loyalty Tiers
[**listMemberPendingPoints**](LoyaltiesApi.md#listMemberPendingPoints) | **GET** /v1/loyalties/members/{memberId}/pending-points | List Member Pending Points
[**listMemberPendingPoints1**](LoyaltiesApi.md#listMemberPendingPoints1) | **GET** /v1/loyalties/{campaignId}/members/{memberId}/pending-points | List Member Pending Points with campaign ID
[**listMemberRewards**](LoyaltiesApi.md#listMemberRewards) | **GET** /v1/loyalties/members/{memberId}/rewards | List Member Rewards
[**listMembers**](LoyaltiesApi.md#listMembers) | **GET** /v1/loyalties/{campaignId}/members | List Members
[**listPointsExpiration**](LoyaltiesApi.md#listPointsExpiration) | **GET** /v1/loyalties/{campaignId}/members/{memberId}/points-expiration | List Loyalty Card Point Expiration
[**listRewardAssignments1**](LoyaltiesApi.md#listRewardAssignments1) | **GET** /v1/loyalties/{campaignId}/reward-assignments | List Reward Assignments with campaign ID
[**listRewardAssignments2**](LoyaltiesApi.md#listRewardAssignments2) | **GET** /v1/loyalties/{campaignId}/rewards | List Campaign Rewards
[**redeemReward**](LoyaltiesApi.md#redeemReward) | **POST** /v1/loyalties/members/{memberId}/redemption | Redeem Reward
[**redeemReward1**](LoyaltiesApi.md#redeemReward1) | **POST** /v1/loyalties/{campaignId}/members/{memberId}/redemption | Redeem Reward with campaign ID
[**transferPoints**](LoyaltiesApi.md#transferPoints) | **POST** /v1/loyalties/{campaignId}/members/{memberId}/transfers | Transfer Loyalty Points
[**updateEarningRule**](LoyaltiesApi.md#updateEarningRule) | **PUT** /v1/loyalties/{campaignId}/earning-rules/{earningRuleId} | Update Earning Rule
[**updateLoyaltyCardBalance**](LoyaltiesApi.md#updateLoyaltyCardBalance) | **POST** /v1/loyalties/members/{memberId}/balance | Adjust Loyalty Card Balance
[**updateLoyaltyCardBalance1**](LoyaltiesApi.md#updateLoyaltyCardBalance1) | **POST** /v1/loyalties/{campaignId}/members/{memberId}/balance | Adjust Loyalty Card Balance with campaign ID
[**updateLoyaltyProgram**](LoyaltiesApi.md#updateLoyaltyProgram) | **PUT** /v1/loyalties/{campaignId} | Update Loyalty Campaign
[**updateRewardAssignment1**](LoyaltiesApi.md#updateRewardAssignment1) | **PUT** /v1/loyalties/{campaignId}/rewards/{assignmentId} | Update Campaign Reward Assignment


# **activateMemberPendingPoints**
> LoyaltiesMembersPendingPointsActivateResponseBody activateMemberPendingPoints()

Activate manually the pending points and add them to the loyalty card. The pending points are determined by the pending point ID. Once activated, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiActivateMemberPendingPointsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiActivateMemberPendingPointsRequest = {
    // Unique loyalty card code assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Unique pending point identifier, assigned by Voucherify.
  pendingPointsId: "pendingPointsId_example",
};

const data = await apiInstance.activateMemberPendingPoints(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card code assigned to a particular customer. | defaults to undefined
 **pendingPointsId** | [**string**] | Unique pending point identifier, assigned by Voucherify. | defaults to undefined


### Return type

**LoyaltiesMembersPendingPointsActivateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns details about the activated pending points, the current point balance, and loyalty card in general. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addMember**
> LoyaltiesMembersCreateResponseBody addMember()

This method assigns a loyalty card to a customer. It selects a [loyalty card](/api-reference/vouchers/get-voucher) suitable for publication, adds a publish entry, and returns the published voucher.   A voucher is suitable for publication when its active and hasnt been published yet.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use **auto-update** campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiAddMemberRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiAddMemberRequest = {
    // Unique campaign ID of the loyalty program.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint. (optional)
  loyaltiesMembersCreateRequestBody: {
    voucher: "voucher_example",
    sourceId: "sourceId_example",
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
    metadata: {},
    channel: "channel_example",
  },
};

const data = await apiInstance.addMember(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersCreateRequestBody** | **LoyaltiesMembersCreateRequestBody**| Provide details to whom the loyalty card should be assigned.     You can choose to either specify the exact loyalty card code that you want to publish from existin (non-assigned) codes, or choose not to specify a voucher code. If you choose not to specify a code in the request paylaod, then the system will choose the next available voucher code available to be assigned to a customer.   You can also include metadata in the request payload. This metadata will be assigned to the publication object, but will not be returned in the response to this endpoint. To see of publications (assignments of particular codes to customers) and publication metadata, use the [List Publications](/api-reference/publications/list-publications) endpoint. |
 **campaignId** | [**string**] | Unique campaign ID of the loyalty program. | defaults to undefined


### Return type

**LoyaltiesMembersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the voucher object that was published to the customer provided in the request payload. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adjustMemberPendingPoints**
> LoyaltiesMembersPendingPointsBalanceResponseBody adjustMemberPendingPoints()

Adjusts the pending points with a given ID. You can add or subtract the number of points. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiAdjustMemberPendingPointsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiAdjustMemberPendingPointsRequest = {
    // Unique loyalty card code assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Unique pending point identifier, assigned by Voucherify.
  pendingPointsId: "pendingPointsId_example",
    // Define the number of pending points to be added or subtracted. (optional)
  loyaltiesMembersPendingPointsBalanceRequestBody: {
    points: 1,
  },
};

const data = await apiInstance.adjustMemberPendingPoints(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersPendingPointsBalanceRequestBody** | **LoyaltiesMembersPendingPointsBalanceRequestBody**| Define the number of pending points to be added or subtracted. |
 **memberId** | [**string**] | Unique loyalty card code assigned to a particular customer. | defaults to undefined
 **pendingPointsId** | [**string**] | Unique pending point identifier, assigned by Voucherify. | defaults to undefined


### Return type

**LoyaltiesMembersPendingPointsBalanceResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the details about the balance adjustment of the pending points with a given ID for a loyalty card. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelMemberPendingPoints**
> void cancelMemberPendingPoints()

Cancel manually the pending points for the loyalty card. The pending points are determined by the pending point ID. Once canceled, the pending point entry with that ID is not listed by the endpoints: List member ([with campaign ID](/api-reference/loyalties/list-member-pending-points-with-campaign-id), [without campaign ID](/api-reference/loyalties/list-member-pending-points)), [List campaign pending points](/api-reference/loyalties/list-campaign-pending-points). This **POST** method does not require a request body and it returns an empty, 204, response. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiCancelMemberPendingPointsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiCancelMemberPendingPointsRequest = {
    // Unique loyalty card code assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Unique pending point identifier, assigned by Voucherify.
  pendingPointsId: "pendingPointsId_example",
};

const data = await apiInstance.cancelMemberPendingPoints(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card code assigned to a particular customer. | defaults to undefined
 **pendingPointsId** | [**string**] | Unique pending point identifier, assigned by Voucherify. | defaults to undefined


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
**204** | Returns no content if the pending points are canceled successfully. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEarningRule**
> Array<LoyaltiesEarningRulesCreateResponseBody> createEarningRule()

Create earning rules for a loyalty campaign.  🚧 Maximum number of earning rules  You can create up to 100 earning rules per project. The limit can be customized for clients with a single-tenant setup.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiCreateEarningRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiCreateEarningRuleRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object (optional)
  loyaltiesEarningRulesCreateRequestBodyItem: [
    {
      validationRuleId: "val_248vs7tUjlIE",
      loyalty: {
        type: "FIXED",
        points: 1,
        pointsFormula: "pointsFormula_example",
        calculationType: "ORDER_AMOUNT",
        order: {
          amount: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
          },
          totalAmount: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
          },
          metadata: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
            property: "property_example",
          },
        },
        orderItems: {
          quantity: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
            object: "products_collection",
            id: "id_example",
            applicableTo: [
              {
                object: "products_collection",
                id: "id_example",
              },
            ],
          },
          amount: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
            object: "products_collection",
            id: "id_example",
            applicableTo: [
              {
                object: "products_collection",
                id: "id_example",
              },
            ],
          },
          subtotalAmount: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
            object: "products_collection",
            id: "id_example",
            applicableTo: [
              {
                object: "products_collection",
                id: "id_example",
              },
            ],
          },
        },
        customer: {
          metadata: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
            property: "property_example",
          },
        },
        customEvent: {
          metadata: {
            every: 1,
            points: 1,
            pointsFormula: "pointsFormula_example",
            property: "property_example",
          },
        },
      },
      event: "event_example",
      source: {
        banner: "Order Paid - You will get 100 points",
      },
      active: true,
      startDate: new Date('2022-02-02T13:00:00Z'),
      expirationDate: new Date('2022-03-03T14:30:00Z'),
      pendingPoints: {
        periodType: "DAY",
        periodValue: 1,
      },
      expirationRules: {
        periodType: "FIXED_DAY_OF_YEAR",
        periodValue: 1,
        roundingType: "END_OF_MONTH",
        roundingValue: 1,
        fixedMonth: 1,
        fixedDay: 1,
      },
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
      metadata: {},
      segment: {
        id: "id_example",
      },
      customEvent: {
        schemaId: "ms_gn4Qe4xsFPf7orCArCiNVY13",
      },
      loyaltyTier: {
        id: "ltr_pudTGWasuIqxdiDM0go31OV1",
      },
    },
  ],
};

const data = await apiInstance.createEarningRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesEarningRulesCreateRequestBodyItem** | **Array<LoyaltiesEarningRulesCreateRequestBodyItem>**| Customize the request body based on the type of earning rules you would like to create. The request body is an array of objects. The required minimum properties to include in the payload for each object are event and loyalty. Additionally, if you choose to add a validity_timeframe, you must include a start_date. Furthermore, an earning rule event type:   - customer.segment.entered requires a segment object - a custom event requires a custom_event object - a customer.loyalty.tier.joined, customer.loyalty.tier.left, customer.loyalty.tier.upgraded, customer.loyalty.tier.downgraded, customer.loyalty.tier.prolonged requires a loyalty_tier object |
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined


### Return type

**Array<LoyaltiesEarningRulesCreateResponseBody>**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of earning rule objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createInBulkLoyaltyTiers**
> Array<LoyaltyTier> createInBulkLoyaltyTiers()

Creates loyalty tiers for desired campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiCreateInBulkLoyaltyTiersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiCreateInBulkLoyaltyTiersRequest = {
    // Unique loyalty campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Provide tier definitions you want to add to existing loyalty campaign. (optional)
  loyaltiesTiersCreateInBulkRequestBodyItem: [
    null,
  ],
};

const data = await apiInstance.createInBulkLoyaltyTiers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesTiersCreateInBulkRequestBodyItem** | **Array<LoyaltiesTiersCreateInBulkRequestBodyItem>**| Provide tier definitions you want to add to existing loyalty campaign. |
 **campaignId** | [**string**] | Unique loyalty campaign ID or name. | defaults to undefined


### Return type

**Array<LoyaltyTier>**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns created loyalty tiers. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createLoyaltyProgram**
> LoyaltiesCreateCampaignResponseBody createLoyaltyProgram()

Creates a batch of [loyalty cards](/api-reference/loyalties/get-member) aggregated in a single loyalty campaign. It also allows you to define a custom codes pattern.    📘 Global uniqueness  All codes are unique across the whole project. Voucherify wont allow to generate the same codes in any of your campaigns.  🚧 Asynchronous action!  This is an asynchronous action, you cant read or modify a newly created campaign until the code generation is completed. See creation_status field in the [loyalty campaign object](/api-reference/loyalties/loyalty-campaign-object) description.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiCreateLoyaltyProgramRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiCreateLoyaltyProgramRequest = {
    // Specify the loyalty campaign details. (optional)
  loyaltiesCreateCampaignRequestBody: {
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
    campaignType: "LOYALTY_PROGRAM",
    voucher: {
      type: "LOYALTY_CARD",
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
      redemption: {
        quantity: 1,
      },
      codeConfig: {
        length: 3.14,
        charset: "charset_example",
        prefix: "prefix_example",
        postfix: "postfix_example",
        pattern: "pattern_example",
        initialCount: 1,
      },
    },
  },
};

const data = await apiInstance.createLoyaltyProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesCreateCampaignRequestBody** | **LoyaltiesCreateCampaignRequestBody**| Specify the loyalty campaign details. |


### Return type

**LoyaltiesCreateCampaignResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a campaign object with its settings but without the loyalty card codes. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPointsExpirationExport**
> LoyaltiesPointsExpirationExportCreateResponseBody createPointsExpirationExport()

Schedule the generation of a point expiration CSV file for a particular campaign. It can list point buckets, which can have an ACTIVE or EXPIRED status.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiCreatePointsExpirationExportRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiCreatePointsExpirationExportRequest = {
    // Unique campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the data filters, types of data to return and order in which the results should be returned. (optional)
  loyaltiesPointsExpirationExportCreateRequestBody: {
    parameters: {
      order: "expires_at",
      fields: [
        "id",
      ],
      filters: {
        junction: "and",
        voucherId: {
          conditions: {
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
            is: "is_example",
            isNot: "isNot_example",
          },
        },
        campaignId: {
          conditions: {
            _in: [
              "_in_example",
            ],
            notIn: [
              "notIn_example",
            ],
            is: "is_example",
            isNot: "isNot_example",
          },
        },
      },
    },
  },
};

const data = await apiInstance.createPointsExpirationExport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesPointsExpirationExportCreateRequestBody** | **LoyaltiesPointsExpirationExportCreateRequestBody**| Specify the data filters, types of data to return and order in which the results should be returned. |
 **campaignId** | [**string**] | Unique campaign ID or name. | defaults to undefined


### Return type

**LoyaltiesPointsExpirationExportCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an object with the export ID of the scheduled generation of CSV file with exported points expirations. You can use either the [Download Export](/api-reference/exports/download-export) endpoint to download the CSV file. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRewardAssignment1**
> LoyaltiesRewardsCreateAssignmentResponseBody createRewardAssignment1()

Add rewards to a loyalty campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiCreateRewardAssignment1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiCreateRewardAssignment1Request = {
    // Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Define the cost of the rewards in loyalty points. (optional)
  loyaltiesRewardsCreateAssignmentItemRequestBody: [
    {
      reward: "reward_example",
      parameters: {
        loyalty: {
          points: 1,
        },
      },
      validationRules: [
        "validationRules_example",
      ],
    },
  ],
};

const data = await apiInstance.createRewardAssignment1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesRewardsCreateAssignmentItemRequestBody** | **Array<LoyaltiesRewardsCreateAssignmentItemRequestBody>**| Define the cost of the rewards in loyalty points. |
 **campaignId** | [**string**] | Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined


### Return type

**LoyaltiesRewardsCreateAssignmentResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of reward assignment objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEarningRule**
> void deleteEarningRule()

This method deletes an earning rule for a specific loyalty campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiDeleteEarningRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiDeleteEarningRuleRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique earning rule ID.
  earningRuleId: "ern_CFuv1O0IDl8Jgph0ojhMu8bH",
};

const data = await apiInstance.deleteEarningRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **earningRuleId** | [**string**] | A unique earning rule ID. | defaults to undefined


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

# **deleteLoyaltyProgram**
> LoyaltiesDeleteResponseBody deleteLoyaltyProgram()

Deletes a loyalty campaign and all related loyalty cards. This action cannot be undone. Also, it immediately removes any redemptions on loyalty cards. If the force parameter is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to [the bin](/api-reference/bin/list-bin-entries).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiDeleteLoyaltyProgramRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiDeleteLoyaltyProgramRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name. (optional)
  force: true,
};

const data = await apiInstance.deleteLoyaltyProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **force** | [**boolean**] | If this flag is set to true, the campaign and related vouchers will be removed permanently. If it is set to false or not set at all, the loyalty campaign and all related loyalty cards will be moved to the bin. Going forward, the user will be able to create the next campaign with the same name. | (optional) defaults to undefined


### Return type

**LoyaltiesDeleteResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the ID of the scheduled asynchronous action, informing you that your request has been accepted and the loyalty campaign will be deleted from the repository asynchronously. To check the deletion status and result, copy the &#x60;async_action_id&#x60; from the response and pass it using [Get Async Action](/api-reference/async-actions/get-async-action) endpoint. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRewardAssignment1**
> void deleteRewardAssignment1()

This method deletes a reward assignment for a particular loyalty campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiDeleteRewardAssignment1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiDeleteRewardAssignment1Request = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.deleteRewardAssignment1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
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

# **disableEarningRule**
> LoyaltiesEarningRulesDisableResponseBody disableEarningRule()

Disable an earning rule.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiDisableEarningRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiDisableEarningRuleRequest = {
    // Unique campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique identifier of an earning rule, assigned by Voucherify.
  earningRuleId: "ern_CFuv1O0IDl8Jgph0ojhMu8bH",
};

const data = await apiInstance.disableEarningRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID or name. | defaults to undefined
 **earningRuleId** | [**string**] | Unique identifier of an earning rule, assigned by Voucherify. | defaults to undefined


### Return type

**LoyaltiesEarningRulesDisableResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an earning rule object with the &#x60;active&#x60; parameter set to &#x60;false&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableEarningRule**
> LoyaltiesEarningRulesEnableResponseBody enableEarningRule()

Enable an earning rule.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiEnableEarningRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiEnableEarningRuleRequest = {
    // Unique campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique identifier of an earning rule, assigned by Voucherify.
  earningRuleId: "ern_CFuv1O0IDl8Jgph0ojhMu8bH",
};

const data = await apiInstance.enableEarningRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID or name. | defaults to undefined
 **earningRuleId** | [**string**] | Unique identifier of an earning rule, assigned by Voucherify. | defaults to undefined


### Return type

**LoyaltiesEarningRulesEnableResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an earning rule object with the &#x60;active&#x60; parameter set to &#x60;true&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportLoyaltyCampaignTransactions**
> CampaignsTransactionsExportCreateResponseBody exportLoyaltyCampaignTransactions()

Export transactions is an asynchronous process that generates a CSV file with the data about or point movements on all loyalty cards in a given campaign. To export transactions: 1. In the export request, use parameters to select which fields will be exported, in what order, and which data will be filtered. 2. Use the returned id to track the export status with the [GET Export](/api-reference/exports/get-export) method. 3. In the GET Export method, when the returned status field has the DONE value, the export file has been generated. 4. Use the URL in the result property to download the file. You must be logged to your Voucherify account on a given cluster in the browser to be able to download the file. An export request will almost always result in a single file being generated by the system. However, when the data volume is large, the system may split the results into multiple files. An example export file can look as follows:    👍 Export Campaign Transactions  This method works in the same way the [POST Export Campaign Transactions](/api-reference/campaigns/export-campaign-transactions) does, but it is limited to loyalty campaigns only. The POST Export Campaign Transactions method can also export gift card campaign transactions.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiExportLoyaltyCampaignTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiExportLoyaltyCampaignTransactionsRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the parameters for the transaction export. (optional)
  loyaltiesTransactionsExportCreateRequestBody: {
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

const data = await apiInstance.exportLoyaltyCampaignTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesTransactionsExportCreateRequestBody** | **LoyaltiesTransactionsExportCreateRequestBody**| Specify the parameters for the transaction export. |
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

# **exportLoyaltyCardTransactions**
> LoyaltiesMembersTransactionsExportCreateResponseBody exportLoyaltyCardTransactions()

Export transactions that are associated with point movements on a loyalty card.   

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiExportLoyaltyCardTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiExportLoyaltyCardTransactionsRequest = {
    // A unique code identifying the loyalty card that you are looking to export transaction data for.
  memberId: "MmFAzfDe",
    // Specify the parameters and filters for the transaction export. (optional)
  loyaltiesMembersTransactionsExportCreateRequestBody: {
    parameters: {
      order: "-created_at",
      fields: [
        "id",
      ],
      filters: {
        junction: "and",
        createdAt: {
          conditions: {
            _in: null,
            notIn: null,
            is: null,
            isDaysAgo: null,
            isDaysInFuture: null,
            isNot: null,
            hasValue: null,
            isUnknown: null,
            contains: null,
            notContain: null,
            startsWith: null,
            endsWith: null,
            moreThan: null,
            lessThan: null,
            moreThanAgo: null,
            lessThanAgo: null,
            moreThanFuture: null,
            lessThanFuture: null,
            moreThanEqual: null,
            lessThanEqual: null,
            after: null,
            before: null,
            count: null,
            countLess: null,
            countMore: null,
          },
        },
        voucherId: {
          conditions: {
            _in: null,
            notIn: null,
            is: null,
            isDaysAgo: null,
            isDaysInFuture: null,
            isNot: null,
            hasValue: null,
            isUnknown: null,
            contains: null,
            notContain: null,
            startsWith: null,
            endsWith: null,
            moreThan: null,
            lessThan: null,
            moreThanAgo: null,
            lessThanAgo: null,
            moreThanFuture: null,
            lessThanFuture: null,
            moreThanEqual: null,
            lessThanEqual: null,
            after: null,
            before: null,
            count: null,
            countLess: null,
            countMore: null,
          },
        },
        campaignId: {
          conditions: {
            _in: null,
            notIn: null,
            is: null,
            isDaysAgo: null,
            isDaysInFuture: null,
            isNot: null,
            hasValue: null,
            isUnknown: null,
            contains: null,
            notContain: null,
            startsWith: null,
            endsWith: null,
            moreThan: null,
            lessThan: null,
            moreThanAgo: null,
            lessThanAgo: null,
            moreThanFuture: null,
            lessThanFuture: null,
            moreThanEqual: null,
            lessThanEqual: null,
            after: null,
            before: null,
            count: null,
            countLess: null,
            countMore: null,
          },
        },
      },
    },
  },
};

const data = await apiInstance.exportLoyaltyCardTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersTransactionsExportCreateRequestBody** | **LoyaltiesMembersTransactionsExportCreateRequestBody**| Specify the parameters and filters for the transaction export. |
 **memberId** | [**string**] | A unique code identifying the loyalty card that you are looking to export transaction data for. | defaults to undefined


### Return type

**LoyaltiesMembersTransactionsExportCreateResponseBody**

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

# **exportLoyaltyCardTransactions1**
> LoyaltiesMembersTransactionsExportCreateResponseBody exportLoyaltyCardTransactions1()

Export transactions that are associated with point movements on a loyalty card.   

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiExportLoyaltyCardTransactions1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiExportLoyaltyCardTransactions1Request = {
    // A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique code identifying the loyalty card that you are looking to export transaction data for.
  memberId: "MmFAzfDe",
    // Specify the parameters and filters for the transaction export. (optional)
  loyaltiesMembersTransactionsExportCreateRequestBody: {
    parameters: {
      order: "-created_at",
      fields: [
        "id",
      ],
      filters: {
        junction: "and",
        createdAt: {
          conditions: {
            _in: null,
            notIn: null,
            is: null,
            isDaysAgo: null,
            isDaysInFuture: null,
            isNot: null,
            hasValue: null,
            isUnknown: null,
            contains: null,
            notContain: null,
            startsWith: null,
            endsWith: null,
            moreThan: null,
            lessThan: null,
            moreThanAgo: null,
            lessThanAgo: null,
            moreThanFuture: null,
            lessThanFuture: null,
            moreThanEqual: null,
            lessThanEqual: null,
            after: null,
            before: null,
            count: null,
            countLess: null,
            countMore: null,
          },
        },
        voucherId: {
          conditions: {
            _in: null,
            notIn: null,
            is: null,
            isDaysAgo: null,
            isDaysInFuture: null,
            isNot: null,
            hasValue: null,
            isUnknown: null,
            contains: null,
            notContain: null,
            startsWith: null,
            endsWith: null,
            moreThan: null,
            lessThan: null,
            moreThanAgo: null,
            lessThanAgo: null,
            moreThanFuture: null,
            lessThanFuture: null,
            moreThanEqual: null,
            lessThanEqual: null,
            after: null,
            before: null,
            count: null,
            countLess: null,
            countMore: null,
          },
        },
        campaignId: {
          conditions: {
            _in: null,
            notIn: null,
            is: null,
            isDaysAgo: null,
            isDaysInFuture: null,
            isNot: null,
            hasValue: null,
            isUnknown: null,
            contains: null,
            notContain: null,
            startsWith: null,
            endsWith: null,
            moreThan: null,
            lessThan: null,
            moreThanAgo: null,
            lessThanAgo: null,
            moreThanFuture: null,
            lessThanFuture: null,
            moreThanEqual: null,
            lessThanEqual: null,
            after: null,
            before: null,
            count: null,
            countLess: null,
            countMore: null,
          },
        },
      },
    },
  },
};

const data = await apiInstance.exportLoyaltyCardTransactions1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersTransactionsExportCreateRequestBody** | **LoyaltiesMembersTransactionsExportCreateRequestBody**| Specify the parameters and filters for the transaction export. |
 **campaignId** | [**string**] | A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to export. | defaults to undefined
 **memberId** | [**string**] | A unique code identifying the loyalty card that you are looking to export transaction data for. | defaults to undefined


### Return type

**LoyaltiesMembersTransactionsExportCreateResponseBody**

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

# **getEarningRule**
> LoyaltiesEarningRulesGetResponseBody getEarningRule()

Retrieves an earning rule assigned to a campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetEarningRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetEarningRuleRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique earning rule ID.
  earningRuleId: "ern_CFuv1O0IDl8Jgph0ojhMu8bH",
};

const data = await apiInstance.getEarningRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **earningRuleId** | [**string**] | A unique earning rule ID. | defaults to undefined


### Return type

**LoyaltiesEarningRulesGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an earning rule object with the earning rule details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLoyaltyProgram**
> LoyaltiesGetCampaignResponseBody getLoyaltyProgram()

Retrieve a specific loyalty campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetLoyaltyProgramRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetLoyaltyProgramRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
};

const data = await apiInstance.getLoyaltyProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined


### Return type

**LoyaltiesGetCampaignResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a loyalty campaign object for a given loyalty campaign ID.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLoyaltyTier**
> LoyaltiesTiersGetResponseBody getLoyaltyTier()

Retrieve a loyalty tier from a loyalty campaign by the loyalty tier ID.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetLoyaltyTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetLoyaltyTierRequest = {
    // Unique loyalty campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique loyalty tier ID.
  loyaltyTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
};

const data = await apiInstance.getLoyaltyTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique loyalty campaign ID or name. | defaults to undefined
 **loyaltyTierId** | [**string**] | Unique loyalty tier ID. | defaults to undefined


### Return type

**LoyaltiesTiersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a loyalty tier object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMember**
> LoyaltiesMembersGetResponseBody getMember()

Retrieve loyalty card with the given member ID (i.e. voucher code).      📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-member-with-campaign-id). The URL was re-designed to allow you to retrieve loyalty card details without having to provide the campaignId as a path parameter.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetMemberRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetMemberRequest = {
    // Unique loyalty card code assigned to a particular customer.
  memberId: "MmFAzfDe",
};

const data = await apiInstance.getMember(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card code assigned to a particular customer. | defaults to undefined


### Return type

**LoyaltiesMembersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns loyalty card details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMember1**
> LoyaltiesMembersGetResponseBody getMember1()

Retrieves the loyalty card with the given member ID (i.e. voucher code).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetMember1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetMember1Request = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique code that identifies the loyalty card.
  memberId: "MmFAzfDe",
};

const data = await apiInstance.getMember1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined
 **memberId** | [**string**] | Unique code that identifies the loyalty card. | defaults to undefined


### Return type

**LoyaltiesMembersGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns loyalty card details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRewardAssignment1**
> LoyaltiesRewardAssignmentsGetResponseBody getRewardAssignment1()

Retrieve specific reward assignment.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetRewardAssignment1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetRewardAssignment1Request = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.getRewardAssignment1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **assignmentId** | [**string**] | Unique reward assignment ID. | defaults to undefined


### Return type

**LoyaltiesRewardAssignmentsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns specific reward assignment. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRewardAssignment2**
> LoyaltiesRewardsGetResponseBody getRewardAssignment2()

Retrieve specific reward assignment.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/get-campaign-reward-assignments). 

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetRewardAssignment2Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetRewardAssignment2Request = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.getRewardAssignment2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | defaults to undefined


### Return type

**LoyaltiesRewardsGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns specific reward assignment. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRewardDetails**
> LoyaltiesRewardAssignmentsRewardGetResponseBody getRewardDetails()

Get reward details in the context of a loyalty campaign and reward assignment ID.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiGetRewardDetailsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiGetRewardDetailsRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.getRewardDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **assignmentId** | [**string**] | Unique reward assignment ID. | defaults to undefined


### Return type

**LoyaltiesRewardAssignmentsRewardGetResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns reward details in the context of a loyalty *campaign* and reward assignment ID. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCampaignPendingPoints**
> LoyaltiesPendingPointsListResponseBody listCampaignPendingPoints()

Lists all pending points that are currently assigned to all loyalty cards in a campaign. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListCampaignPendingPointsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListCampaignPendingPointsRequest = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limit the number of the pending point entries that the API returns in the response. (optional)
  limit: 1,
    // Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the results starting after a result with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listCampaignPendingPoints(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined
 **limit** | [**number**] | Limit the number of the pending point entries that the API returns in the response. | (optional) defaults to undefined
 **order** | **ParameterOrderListPendingPoints** | Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the results starting after a result with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesPendingPointsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all pending point entries for all loyalty cards in the campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEarningRules**
> LoyaltiesEarningRulesListResponseBody listEarningRules()

Returns a list of all earning rules within a given campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListEarningRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListEarningRulesRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listEarningRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListEarningRules** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**LoyaltiesEarningRulesListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of earning rules. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLoyaltyCampaignTransactions**
> LoyaltiesTransactionsListResponseBody listLoyaltyCampaignTransactions()

Retrieves all transactions for the campaign with the given campaign ID or campaign name.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyCampaignTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyCampaignTransactionsRequest = {
    // You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
    // Filters for listing responses. The id filter denotes the unique transaction identifier. (optional)
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

const data = await apiInstance.listLoyaltyCampaignTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListTransactions** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | (optional) defaults to undefined
 **filters** | **ParametersFiltersListCampaignTransactions** | Filters for listing responses. The id filter denotes the unique transaction identifier. | (optional) defaults to undefined


### Return type

**LoyaltiesTransactionsListResponseBody**

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

# **listLoyaltyCardTransactions**
> LoyaltiesMembersTransactionsListResponseBody listLoyaltyCardTransactions()

Retrieve transaction data related to point movements for a specific loyalty card.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyCardTransactionsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyCardTransactionsRequest = {
    // A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // Filters for listing member transactions. id is the unique identifier of the transaction. (optional)
  filters: {
    createdAt: {
      after: new Date('2024-01-01T00:00:00Z'),
      before: new Date('2024-01-01T00:00:00Z'),
      hasValue: "hasValue_example",
      isUnknown: "isUnknown_example",
      moreThan: 1,
      lessThan: 1,
    },
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
  },
    // A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listLoyaltyCardTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | A unique code identifying the loyalty card that you are looking to retrieve transaction data for. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListTransactions** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListMemberTransactions** | Filters for listing member transactions. id is the unique identifier of the transaction. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesMembersTransactionsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of loyalty card transaction objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLoyaltyCardTransactions1**
> LoyaltiesMembersTransactionsListResponseBody listLoyaltyCardTransactions1()

Retrieve transaction data related to point movements for a specific loyalty card.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyCardTransactions1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyCardTransactions1Request = {
    // A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to return.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique code identifying the loyalty card that you are looking to retrieve transaction data for.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // Filters for listing member transactions. id is the unique identifier of the transaction. (optional)
  filters: {
    createdAt: {
      after: new Date('2024-01-01T00:00:00Z'),
      before: new Date('2024-01-01T00:00:00Z'),
      hasValue: "hasValue_example",
      isUnknown: "isUnknown_example",
      moreThan: 1,
      lessThan: 1,
    },
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
  },
    // A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listLoyaltyCardTransactions1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | A unique identifier of the loyalty campaign containing the voucher whose transactions you would like to return. | defaults to undefined
 **memberId** | [**string**] | A unique code identifying the loyalty card that you are looking to retrieve transaction data for. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListTransactions** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **filters** | **ParameterFiltersListMemberTransactions** | Filters for listing member transactions. id is the unique identifier of the transaction. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the transactions starting after a transaction with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesMembersTransactionsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of loyalty card transaction objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLoyaltyPrograms**
> LoyaltiesListCampaignsResponseBody listLoyaltyPrograms()

Returns a list of your loyalty campaigns.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyProgramsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyProgramsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores. (optional)
  expand: "category",
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listLoyaltyPrograms(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **expand** | **ParameterExpandListCampaigns** | Includes an expanded categories object in the response. If the [Areas and Stores](https://support.voucherify.io/article/623-areas-and-stores) Enterprise feature is enabled, add access_settings_assignments to return assigned areas and stores. | (optional) defaults to undefined
 **order** | **ParameterOrderListCampaigns** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**LoyaltiesListCampaignsResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with loyalty program objects. The loyalty campaigns are returned sorted by creation date, with the most recent campaigns appearing first. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLoyaltyTierEarningRules**
> LoyaltiesTiersEarningRulesListResponseBody listLoyaltyTierEarningRules()

Retrieve available earning rules for a given tier and the calculation method for earning points.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyTierEarningRulesRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyTierEarningRulesRequest = {
    // Unique campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique loyalty tier ID.
  loyaltyTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
};

const data = await apiInstance.listLoyaltyTierEarningRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID or name. | defaults to undefined
 **loyaltyTierId** | [**string**] | Unique loyalty tier ID. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined


### Return type

**LoyaltiesTiersEarningRulesListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of earning rules for a given tier. The object for each earning rule also contains information about how the points are calculated; this includes mapping. If a specific multiplier was used to calculate points for a given tier, then the &#x60;loyalty.points&#x60; parameter will account for this calculation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLoyaltyTierRewards**
> LoyaltiesTiersRewardsListResponseBody listLoyaltyTierRewards()

Get available rewards for a given tier.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyTierRewardsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyTierRewardsRequest = {
    // Unique campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique loyalty tier ID.
  loyaltyTierId: "promo_2EnAik6Jt7dKTOMkRTIgEjZH",
};

const data = await apiInstance.listLoyaltyTierRewards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID or name. | defaults to undefined
 **loyaltyTierId** | [**string**] | Unique loyalty tier ID. | defaults to undefined


### Return type

**LoyaltiesTiersRewardsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary of loyalty tier reward objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLoyaltyTiers**
> LoyaltiesTiersListResponseBody listLoyaltyTiers()

Retrieve a list of loyalty tiers which were added to the loyalty program.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListLoyaltyTiersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListLoyaltyTiersRequest = {
    // Unique loyalty campaign ID or name.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
};

const data = await apiInstance.listLoyaltyTiers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique loyalty campaign ID or name. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderListLoyaltyTiers** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined


### Return type

**LoyaltiesTiersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of loyalty tier objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMemberActivity**
> LoyaltiesMemberActivityListResponseBody listMemberActivity()

  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-activity-with-campaign-id). The URL was re-designed to allow you to get member activities without having to provide the campaignId as a path parameter. Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMemberActivityRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMemberActivityRequest = {
    // Unique loyalty card assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // A cursor for pagination. It retrieves the events starting after an event with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listMemberActivity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card assigned to a particular customer. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderCreatedAt** | Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the events starting after an event with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesMemberActivityListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of event objects related to the loyalty card. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMemberActivity1**
> LoyaltiesMemberActivityListResponseBody listMemberActivity1()

Retrieves the list of activities for the given member ID related to a voucher and customer who is the holder of the voucher.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMemberActivity1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMemberActivity1Request = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A code that identifies the loyalty card.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "created_at",
    // A cursor for pagination. It retrieves the events starting after an event with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listMemberActivity1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined
 **memberId** | [**string**] | A code that identifies the loyalty card. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **order** | **ParameterOrderCreatedAt** | Apply this filter to order the events according the date and time when it was created. The dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the events starting after an event with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesMemberActivityListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of event objects related to the loyalty card. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMemberLoyaltyTier**
> LoyaltiesMembersTiersListResponseBody listMemberLoyaltyTier()

Retrieve member tiers using the loyalty card ID.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMemberLoyaltyTierRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMemberLoyaltyTierRequest = {
    // Unique loyalty card assigned to a particular customer.
  memberId: "MmFAzfDe",
};

const data = await apiInstance.listMemberLoyaltyTier(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card assigned to a particular customer. | defaults to undefined


### Return type

**LoyaltiesMembersTiersListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a data array containing the member\&#39;s loyalty tiers. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMemberPendingPoints**
> LoyaltiesMembersPendingPointsListResponseBody listMemberPendingPoints()

  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-member-pending-points-with-campaign-id). The URL was re-designed to list member pending points without having to provide the campaignId as a path parameter. Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMemberPendingPointsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMemberPendingPointsRequest = {
    // Unique loyalty card code assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Limit the number of the pending point entries that the API returns in the response. (optional)
  limit: 1,
    // Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the results starting after a result with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listMemberPendingPoints(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card code assigned to a particular customer. | defaults to undefined
 **limit** | [**number**] | Limit the number of the pending point entries that the API returns in the response. | (optional) defaults to undefined
 **order** | **ParameterOrderListPendingPoints** | Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the results starting after a result with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesMembersPendingPointsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all pending point entries. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMemberPendingPoints1**
> LoyaltiesMembersPendingPointsListResponseBody listMemberPendingPoints1()

Lists all pending points that are currently assigned to the loyalty card. Once the points are added to the card, the entry is no longer returned. 👍 Configuring pending points Pending points are configured as part of an earning rule with [POST Create earning rule](/api-reference/loyalties/create-earning-rule) or [PUT Update earning rule](/api-reference/loyalties/update-earning-rule).

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMemberPendingPoints1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMemberPendingPoints1Request = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Unique loyalty card code assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Limit the number of the pending point entries that the API returns in the response. (optional)
  limit: 1,
    // Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // A cursor for pagination. It retrieves the results starting after a result with the given ID. (optional)
  startingAfterId: "starting_after_id_example",
};

const data = await apiInstance.listMemberPendingPoints1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined
 **memberId** | [**string**] | Unique loyalty card code assigned to a particular customer. | defaults to undefined
 **limit** | [**number**] | Limit the number of the pending point entries that the API returns in the response. | (optional) defaults to undefined
 **order** | **ParameterOrderListPendingPoints** | Orders the pending point entries according the pending point entry ID. The dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **startingAfterId** | [**string**] | A cursor for pagination. It retrieves the results starting after a result with the given ID. | (optional) defaults to undefined


### Return type

**LoyaltiesMembersPendingPointsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns all pending point entries. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMemberRewards**
> LoyaltiesMembersRewardsListResponseBody listMemberRewards()

Retrieves the list of rewards that the given customer (identified by member_id, which is a loyalty card assigned to a particular customer) **can get in exchange for loyalty points**.   You can use the affordable_only parameter to limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card).   Please note that rewards that are disabled (i.e. set to Not Available in the Dashboard) for a given loyalty tier reward mapping will not be returned in this endpoint.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMemberRewardsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMemberRewardsRequest = {
    // Unique loyalty card assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford. (optional)
  affordableOnly: true,
};

const data = await apiInstance.listMemberRewards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberId** | [**string**] | Unique loyalty card assigned to a particular customer. | defaults to undefined
 **affordableOnly** | [**boolean**] | Limit the results to rewards that the customer can actually afford (only rewards whose price in points is not higher than the loyalty points balance on a loyalty card). Set this flag to true to return rewards which the customer can actually afford. | (optional) defaults to undefined


### Return type

**LoyaltiesMembersRewardsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of rewards for the given &#x60;member_id&#x60;. Returns a filtered list if the query parameter &#x60;affordable_only&#x60; is set to &#x60;true&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMembers**
> LoyaltiesListMembersResponseBody listMembers()

Returns a list of your loyalty cards. The loyalty cards are sorted by creation date, with the most recent loyalty cards appearing first.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListMembersRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListMembersRequest = {
    // Unique campaign ID of the loyalty program.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters. (optional)
  customer: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
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

const data = await apiInstance.listMembers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID of the loyalty program. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **customer** | [**string**] | A tracking identifier of a customer who is the holder of the vouchers. It can be an id generated by Voucherify or the source_id. Remember to use the proper URL escape codes if the source_id contains special characters. | (optional) defaults to undefined
 **createdAt** | **ParameterCreatedBeforeAfter** | A filter on the list based on the object created_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [created_at][before] 2017-09-08T13:52:18.227Z | (optional) defaults to undefined
 **updatedAt** | **ParameterUpdatedBeforeAfter** | A filter on the list based on the object updated_at field. The value is a dictionary with the following options: before, after. A date value must be presented in ISO 8601 format (2016-11-16T14:14:31Z or 2016-11-16). An example: [updated_at][before] 2017-09-08T13:52:18.227Z | (optional) defaults to undefined
 **order** | **ParameterOrderVouchers** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **code** | [**string**] |  | (optional) defaults to undefined
 **ids** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**LoyaltiesListMembersResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of loyalty cards within a campaign. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPointsExpiration**
> LoyaltiesMembersPointsExpirationListResponseBody listPointsExpiration()

Retrieve loyalty point expiration buckets for a given loyalty card. Expired point buckets are not returned in this endpoint. You can use the [Exports API](/api-reference/exports/create-export) to retrieve a list of both ACTIVE and EXPIRED point buckets.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListPointsExpirationRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListPointsExpirationRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Loyalty card code.
  memberId: "MmFAzfDe",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
};

const data = await apiInstance.listPointsExpiration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **memberId** | [**string**] | Loyalty card code. | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined


### Return type

**LoyaltiesMembersPointsExpirationListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of loyalty points expiration buckets along with an expiration date if the points are due to expire. No expiration date parameter is returned if the loyalty points bucket does not expire. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRewardAssignments1**
> LoyaltiesRewardAssignmentsListResponseBody listRewardAssignments1()

Returns reward assignments from a given loyalty campaign.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/list-campaign-rewards). The URL was re-designed to be more contextual to the type of data returned in the response.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListRewardAssignments1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListRewardAssignments1Request = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // A unique reward assignment ID. (optional)
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.listRewardAssignments1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | (optional) defaults to undefined


### Return type

**LoyaltiesRewardAssignmentsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with reward assignment objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRewardAssignments2**
> LoyaltiesRewardsListAssignmentsResponseBody listRewardAssignments2()

Returns active rewards from a given loyalty campaign.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiListRewardAssignments2Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiListRewardAssignments2Request = {
    // Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // A unique reward assignment ID. (optional)
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
};

const data = await apiInstance.listRewardAssignments2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | Unique campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | (optional) defaults to undefined


### Return type

**LoyaltiesRewardsListAssignmentsResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a dictionary with reward assignment objects. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **redeemReward**
> LoyaltiesMembersRedemptionRedeemResponseBody redeemReward()

  📘 Alternative endpoint This endpoint is an alternative to this [endpoint](/api-reference/loyalties/redeem-reward-with-campaign-id). The URL was re-designed to allow you to redeem a reward without having to provide the campaignId as a path parameter.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiRedeemRewardRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiRedeemRewardRequest = {
    // Unique loyalty card assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order. (optional)
  loyaltiesMembersRedemptionRedeemRequestBody: {
    reward: {
      id: "rew_eSi4eYJk7o3tOycvweicR2z7",
      points: 1,
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
    metadata: {},
  },
};

const data = await apiInstance.redeemReward(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersRedemptionRedeemRequestBody** | **LoyaltiesMembersRedemptionRedeemRequestBody**| Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order. |
 **memberId** | [**string**] | Unique loyalty card assigned to a particular customer. | defaults to undefined


### Return type

**LoyaltiesMembersRedemptionRedeemResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a redemption object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **redeemReward1**
> LoyaltiesMembersRedemptionRedeemResponseBody redeemReward1()

Exchange points from a loyalty card for a specified reward. This API method returns an assigned award in the response. It means that if a requesting customer gets a coupon code with a discount for the next order, that discount code will be visible in response as part of the reward object definition.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiRedeemReward1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiRedeemReward1Request = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A code that identifies the loyalty card.
  memberId: "MmFAzfDe",
    // Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order. (optional)
  loyaltiesMembersRedemptionRedeemRequestBody: {
    reward: {
      id: "rew_eSi4eYJk7o3tOycvweicR2z7",
      points: 1,
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
    metadata: {},
  },
};

const data = await apiInstance.redeemReward1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersRedemptionRedeemRequestBody** | **LoyaltiesMembersRedemptionRedeemRequestBody**| Specify the reward to be redeemed. In case of a pay with points reward, specify the order and the number of points to be applied to the order. Please note that if you do not specify the amount of points, the application will default to applying the number of points to pay for the remainder of the order. If the limit of available points on the card is reached, then only the available points on the card will be applied to the order. |
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined
 **memberId** | [**string**] | A code that identifies the loyalty card. | defaults to undefined


### Return type

**LoyaltiesMembersRedemptionRedeemResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a redemption object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transferPoints**
> LoyaltiesMembersTransfersCreateResponseBody transferPoints()

Transfer points between different loyalty cards which have holders. Provide the campaign ID and the loyalty card ID you want the points to be transferred to as path parameters. In the request body, provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. Transfer works only for loyalty cards that have holders, meaning the cards were published to customers. The transferred points expire according to the target program expiration rules.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiTransferPointsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiTransferPointsRequest = {
    // A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination).
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination).
  memberId: "MmFAzfDe",
    // Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. (optional)
  loyaltiesTransferPoints: [
    {
      code: "code_example",
      points: 1,
      reason: "reason_example",
      sourceId: "sourceId_example",
    },
  ],
};

const data = await apiInstance.transferPoints(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesTransferPoints** | **Array<LoyaltiesTransferPoints>**| Provide the loyalty cards you want the points to be transferred from and the number of points to transfer from each card. |
 **campaignId** | [**string**] | A unique identifier of the loyalty campaign containing the voucher to which the loyalty points will be sent (destination). | defaults to undefined
 **memberId** | [**string**] | A unique code identifying the loyalty card to which the user wants to transfer loyalty points (destination). | defaults to undefined


### Return type

**LoyaltiesMembersTransfersCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a loyalty card object for the loaded loyalty card, ie. the one that that points were transferred to from the other cards(s). |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEarningRule**
> LoyaltiesEarningRulesUpdateResponseBody updateEarningRule()

Update an earning rule definition.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiUpdateEarningRuleRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiUpdateEarningRuleRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique earning rule ID.
  earningRuleId: "ern_CFuv1O0IDl8Jgph0ojhMu8bH",
    // Specify the parameters that you would like to update for the given earning rule. (optional)
  loyaltiesEarningRulesUpdateRequestBody: {
    validationRuleId: "val_248vs7tUjlIE",
    loyalty: {
      type: "FIXED",
      points: 1,
      pointsFormula: "pointsFormula_example",
      calculationType: "ORDER_AMOUNT",
      order: {
        amount: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
        },
        totalAmount: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
        },
        metadata: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
          property: "property_example",
        },
      },
      orderItems: {
        quantity: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
          object: "products_collection",
          id: "id_example",
          applicableTo: [
            {
              object: "products_collection",
              id: "id_example",
            },
          ],
        },
        amount: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
          object: "products_collection",
          id: "id_example",
          applicableTo: [
            {
              object: "products_collection",
              id: "id_example",
            },
          ],
        },
        subtotalAmount: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
          object: "products_collection",
          id: "id_example",
          applicableTo: [
            {
              object: "products_collection",
              id: "id_example",
            },
          ],
        },
      },
      customer: {
        metadata: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
          property: "property_example",
        },
      },
      customEvent: {
        metadata: {
          every: 1,
          points: 1,
          pointsFormula: "pointsFormula_example",
          property: "property_example",
        },
      },
    },
    source: {
      banner: "Order Paid - You will get 100 points",
    },
    active: true,
    startDate: new Date('2022-02-02T13:00:00Z'),
    expirationDate: new Date('2022-03-03T14:30:00Z'),
    pendingPoints: {
      periodType: "DAY",
      periodValue: 1,
    },
    expirationRules: {
      periodType: "FIXED_DAY_OF_YEAR",
      periodValue: 1,
      roundingType: "END_OF_MONTH",
      roundingValue: 1,
      fixedMonth: 1,
      fixedDay: 1,
    },
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
    metadata: {},
  },
};

const data = await apiInstance.updateEarningRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesEarningRulesUpdateRequestBody** | **LoyaltiesEarningRulesUpdateRequestBody**| Specify the parameters that you would like to update for the given earning rule. |
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **earningRuleId** | [**string**] | A unique earning rule ID. | defaults to undefined


### Return type

**LoyaltiesEarningRulesUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated earning rule object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLoyaltyCardBalance**
> LoyaltiesMembersBalanceUpdateResponseBody updateLoyaltyCardBalance()

This method gives adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.  📘 Alternative endpoint  This endpoint is an alternative to this [endpoint](/api-reference/loyalties/adjust-loyalty-card-balance-with-campaign-id). The URL was re-designed to allow you to add or remove loyalty card balance without having to provide the campaignId as a path parameter.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiUpdateLoyaltyCardBalanceRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiUpdateLoyaltyCardBalanceRequest = {
    // Unique loyalty card assigned to a particular customer.
  memberId: "MmFAzfDe",
    // Specify the point adjustment along with the expiration mechanism. (optional)
  loyaltiesMembersBalanceUpdateRequestBody: {
    points: 1,
    expirationType: "PROGRAM_RULES",
    expirationDate: new Date('1970-01-01T00:00:00.00Z'),
    reason: "reason_example",
    sourceId: "sourceId_example",
  },
};

const data = await apiInstance.updateLoyaltyCardBalance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersBalanceUpdateRequestBody** | **LoyaltiesMembersBalanceUpdateRequestBody**| Specify the point adjustment along with the expiration mechanism. |
 **memberId** | [**string**] | Unique loyalty card assigned to a particular customer. | defaults to undefined


### Return type

**LoyaltiesMembersBalanceUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a balance object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLoyaltyCardBalance1**
> LoyaltiesMembersBalanceUpdateResponseBody updateLoyaltyCardBalance1()

This method adds or removes balance to an existing loyalty card that is assigned to a holder. The removal of points will consume the points that expire the soonest.   >🚧 Async Action    This is an async action. If you want to perform several add or remove loyalty card balance actions in a short time and their order matters, set up sufficient time-out between the calls.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiUpdateLoyaltyCardBalance1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiUpdateLoyaltyCardBalance1Request = {
    // Unique campaign ID.
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A code that identifies the loyalty card.
  memberId: "MmFAzfDe",
    // Specify the point adjustment along with the expiration mechanism. (optional)
  loyaltiesMembersBalanceUpdateRequestBody: {
    points: 1,
    expirationType: "PROGRAM_RULES",
    expirationDate: new Date('1970-01-01T00:00:00.00Z'),
    reason: "reason_example",
    sourceId: "sourceId_example",
  },
};

const data = await apiInstance.updateLoyaltyCardBalance1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesMembersBalanceUpdateRequestBody** | **LoyaltiesMembersBalanceUpdateRequestBody**| Specify the point adjustment along with the expiration mechanism. |
 **campaignId** | [**string**] | Unique campaign ID. | defaults to undefined
 **memberId** | [**string**] | A code that identifies the loyalty card. | defaults to undefined


### Return type

**LoyaltiesMembersBalanceUpdateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a balance object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLoyaltyProgram**
> LoyaltiesUpdateCampaignResponseBody updateLoyaltyProgram()

Updates a loyalty program.  Fields other than those specified in the allowed request body payload wont be modified (even if provided they are silently skipped). Any parameters not provided will be left unchanged.  This method will update the [loyalty cards](/api-reference/loyalties/get-member) which have not been published or redeemed yet.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiUpdateLoyaltyProgramRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiUpdateLoyaltyProgramRequest = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // Specify the new values for the parameters that you would like to update for the given loyalty campaign. (optional)
  loyaltiesUpdateCampaignRequestBody: {
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

const data = await apiInstance.updateLoyaltyProgram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesUpdateCampaignRequestBody** | **LoyaltiesUpdateCampaignRequestBody**| Specify the new values for the parameters that you would like to update for the given loyalty campaign. |
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined


### Return type

**LoyaltiesUpdateCampaignResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the loyalty campaign object if the update succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateRewardAssignment1**
> LoyaltiesRewardsUpdateAssignmentResponseBody updateRewardAssignment1()

Updates rewards parameters, i.e. the points cost for the specific reward.

### Example


```typescript
import { createConfiguration, LoyaltiesApi } from 'voucherify';
import type { LoyaltiesApiUpdateRewardAssignment1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new LoyaltiesApi(configuration);

const request: LoyaltiesApiUpdateRewardAssignment1Request = {
    // The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign. 
  campaignId: "camp_rRsfatlwN7unSeUIJDCYedal",
    // A unique reward assignment ID.
  assignmentId: "rewa_m9hEAu10KsPcLhGXiHG85aY0",
    // Update the points cost for the reward assignment. (optional)
  loyaltiesRewardsUpdateAssignmentRequestBody: {
    parameters: {
      loyalty: {
        points: 1,
        autoRedeem: true,
      },
    },
  },
};

const data = await apiInstance.updateRewardAssignment1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loyaltiesRewardsUpdateAssignmentRequestBody** | **LoyaltiesRewardsUpdateAssignmentRequestBody**| Update the points cost for the reward assignment. |
 **campaignId** | [**string**] | The campaign ID or name of the loyalty campaign. You can either pass the campaign ID, which was assigned by Voucherify, or the name of the campaign as the path parameter value, e.g., Loyalty%20Campaign.  | defaults to undefined
 **assignmentId** | [**string**] | A unique reward assignment ID. | defaults to undefined


### Return type

**LoyaltiesRewardsUpdateAssignmentResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a reward assignment with an updated points value. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


