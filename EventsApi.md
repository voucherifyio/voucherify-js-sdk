# .EventsApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trackCustomEvent**](EventsApi.md#trackCustomEvent) | **POST** /v1/events | Track Custom Event


# **trackCustomEvent**
> EventsCreateResponseBody trackCustomEvent()

To track a custom event, you create an event object.   The event object must be linked to the customer who performs the action. If a customer doesnt exist in Voucherify, the customer will be created.

### Example


```typescript
import { createConfiguration, EventsApi } from 'voucherify';
import type { EventsApiTrackCustomEventRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new EventsApi(configuration);

const request: EventsApiTrackCustomEventRequest = {
    // Specify the details of the custom event. (optional)
  eventsCreateRequestBody: {
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

const data = await apiInstance.trackCustomEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsCreateRequestBody** | **EventsCreateRequestBody**| Specify the details of the custom event. |


### Return type

**EventsCreateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token), [X-Voucherify-OAuth](README.md#X-Voucherify-OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the event type if the event was received by the application. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


