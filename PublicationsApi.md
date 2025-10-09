# .PublicationsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPublication**](PublicationsApi.md#createPublication) | **POST** /v1/publications | Create Publication
[**createPublication1**](PublicationsApi.md#createPublication1) | **GET** /v1/publications/create | Create Publication with GET
[**listPublications**](PublicationsApi.md#listPublications) | **GET** /v1/publications | List Publications


# **createPublication**
> PublicationsCreateResponseBody createPublication()

This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  In case you want to publish multiple vouchers within a single publication, you need to specify the campaign name and number of vouchers you want to publish.    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.

### Example


```typescript
import { createConfiguration, PublicationsApi } from 'voucherify';
import type { PublicationsApiCreatePublicationRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PublicationsApi(configuration);

const request: PublicationsApiCreatePublicationRequest = {
    // Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer. (optional)
  joinOnce: true,
    // Specify the publication parameters. (optional)
  publicationsCreateRequestBody: {
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
    campaign: {
      name: "camp_dphuwqH7BOVkgh4JmpDtS32l",
      count: 1,
    },
  },
};

const data = await apiInstance.createPublication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicationsCreateRequestBody** | **PublicationsCreateRequestBody**| Specify the publication parameters. |
 **joinOnce** | [**boolean**] | Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer. | (optional) defaults to undefined


### Return type

**PublicationsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a publication object if a valid identifier was provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPublication1**
> PublicationsCreateResponseBody createPublication1()

This method selects vouchers that are suitable for publication, adds a publish entry and returns the publication. A voucher is suitable for publication when its active and hasnt been published yet.  ❗️ Limited access  Access to this endpoint is limited. This endpoint is designed for specific integrations and the API keys need to be configured to access this endpoint. Navigate to the **Dashboard** &rarr; **Project Settings** &rarr; **General** &rarr; **Integration Keys** to set up a pair of API keys and use them to send the request.    🚧 Clearly define the source of the voucher  You must clearly define which source you want to publish the voucher code from. It can either be a code from a campaign or a specific voucher identified by a code.    🚧 Publish multiple vouchers  This endpoint does not support the publishing of multiple vouchers from a single campaign. In case you want to publish multiple vouchers within a single publication, you need to use a [dedicated endpoint](/api-reference/publications/create-publication).    📘 Auto-update campaign  In case you want to ensure the number of publishable codes increases automatically with the number of customers, you should use an **auto-update** campaign.   # Example Request      ❗️ Required    Query param voucher OR campaign MUST be filled out. If you provide both, campaign param will be skipped.

### Example


```typescript
import { createConfiguration, PublicationsApi } from 'voucherify';
import type { PublicationsApiCreatePublication1Request } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PublicationsApi(configuration);

const request: PublicationsApiCreatePublication1Request = {
    // Contains information about the customer to whom the publication was directed.
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
    // Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer. (optional)
  joinOnce: true,
    // Code of voucher being published. (optional)
  voucher: "2CpRCE2c",
    // Create publication with campaign. (optional)
  campaign: {
    name: "camp_dphuwqH7BOVkgh4JmpDtS32l",
    count: 1,
  },
    // The merchants publication ID if it is different from the Voucherify publication ID. Its an optional tracking identifier of a publication. It is really useful in case of an integration between multiple systems. It can be a publication ID from a CRM system, database or 3rd-party service. If source_id is provided only 1 voucher can be published per request. (optional)
  sourceId: "source_id_example",
    // The metadata object stores all custom attributes assigned to the publication. A set of key/value pairs that you can attach to a publication object. It can be useful for storing additional information about the publication in a structured format. (optional)
  metadata: {},
};

const data = await apiInstance.createPublication1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | **Customer** | Contains information about the customer to whom the publication was directed. | defaults to undefined
 **joinOnce** | [**boolean**] | Through this flag, you can control if a particular person gets only one and always the same code even if the app sends multiple publication requests. It means that if you have a referral program, a referrer is assigned only to one code if an integration sends publication requests more than once for the same customer. | (optional) defaults to undefined
 **voucher** | [**string**] | Code of voucher being published. | (optional) defaults to undefined
 **campaign** | **CreatePublicationCampaign** | Create publication with campaign. | (optional) defaults to undefined
 **sourceId** | [**string**] | The merchants publication ID if it is different from the Voucherify publication ID. Its an optional tracking identifier of a publication. It is really useful in case of an integration between multiple systems. It can be a publication ID from a CRM system, database or 3rd-party service. If source_id is provided only 1 voucher can be published per request. | (optional) defaults to undefined
 **metadata** | **any** | The metadata object stores all custom attributes assigned to the publication. A set of key/value pairs that you can attach to a publication object. It can be useful for storing additional information about the publication in a structured format. | (optional) defaults to undefined


### Return type

**PublicationsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a publication object. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPublications**
> PublicationsListResponseBody listPublications()

Retrieve a list of publications. To return a **particular** publication, you can use the source_id query parameter and provide the source_id of the publication you are looking for specifically. # Pagination  🚧 Important!  If you want to scroll through a huge set of records, it is recommended to use the [Exports API](/api-reference/exports/create-export). This API will return an error page_over_limit if you reach a page above 1000. # Filter Query The filters query parameter allows for joining multiple parameters with logical operators. The syntax looks as follows:  ## Examples  

### Example


```typescript
import { createConfiguration, PublicationsApi } from 'voucherify';
import type { PublicationsApiListPublicationsRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new PublicationsApi(configuration);

const request: PublicationsApiListPublicationsRequest = {
    // Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. (optional)
  limit: 1,
    // Which page of results to return. The lowest value is 1. (optional)
  page: 1,
    // Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. (optional)
  order: "id",
    // Filters by a given campaign name. (optional)
  campaign: "campaign_example",
    // Filters by a unique customer ID. (optional)
  customer: "cust_nk0N1uNQ1YnupAoJGOgvsODC",
    // Filters by a given voucher code. (optional)
  voucher: "2CpRCE2c",
    // Filters by a publication result. (optional)
  result: "SUCCESS",
    // Filters by a voucher type. (optional)
  voucherType: "discount",
    // This filter works only for the true option. If set to true, the query returns only publications of codes from referral campaigns.  (optional)
  isReferralCode: true,
    // Filters for listing publications. (optional)
  filters: {
    junction: "and",
    failureCode: {
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
    result: {
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
    campaignName: {
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
    voucherType: {
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
    isReferralCode: {
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
    parentObjectId: {
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
    relatedObjectId: {
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
    sourceId: {
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
  },
    // Using this endpoint with a particular publication source_id, which was sent with the original request to create a publication, returns in the response, exactly the same code published initially because the code was assigned to the given publication. As a result, you can use this endpoint as a reference and return a code that was assigned in a publication by using a particular source_id. (optional)
  sourceId: "source_id_example",
};

const data = await apiInstance.listPublications(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limits the number of objects to be returned. The limit can range between 1 and 100 items. If no limit is set, it returns 10 items. | (optional) defaults to undefined
 **page** | [**number**] | Which page of results to return. The lowest value is 1. | (optional) defaults to undefined
 **order** | **ParameterOrderListPublications** | Sorts the results using one of the filtering options, where the dash - preceding a sorting option means sorting in a descending order. | (optional) defaults to undefined
 **campaign** | [**string**] | Filters by a given campaign name. | (optional) defaults to undefined
 **customer** | [**string**] | Filters by a unique customer ID. | (optional) defaults to undefined
 **voucher** | [**string**] | Filters by a given voucher code. | (optional) defaults to undefined
 **result** | **ParameterResultListPublications** | Filters by a publication result. | (optional) defaults to undefined
 **voucherType** | **ParameterVoucherTypeListPublications** | Filters by a voucher type. | (optional) defaults to undefined
 **isReferralCode** | [**boolean**] | This filter works only for the true option. If set to true, the query returns only publications of codes from referral campaigns.  | (optional) defaults to undefined
 **filters** | **ParameterFiltersListPublications** | Filters for listing publications. | (optional) defaults to undefined
 **sourceId** | [**string**] | Using this endpoint with a particular publication source_id, which was sent with the original request to create a publication, returns in the response, exactly the same code published initially because the code was assigned to the given publication. As a result, you can use this endpoint as a reference and return a code that was assigned in a publication by using a particular source_id. | (optional) defaults to undefined


### Return type

**PublicationsListResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of publications you\&#39;ve previously created with [create publication](/api-reference/publications/create-publication) or implicitly by the distribution manager. The publications are returned in sorted order, with the most recent ones appearing first. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


