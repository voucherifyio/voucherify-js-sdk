# .OAuthApi

All URIs are relative to *https://api.voucherify.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateOauthToken**](OAuthApi.md#generateOauthToken) | **POST** /v1/oauth/token | Generate OAuth 2.0 Token
[**introspectOauthToken**](OAuthApi.md#introspectOauthToken) | **POST** /v1/oauth/introspect | Introspect OAuth 2.0 Token
[**revokeOauthToken**](OAuthApi.md#revokeOauthToken) | **POST** /v1/oauth/token/revoke | Revoke OAuth 2.0 Token


# **generateOauthToken**
> OAuthTokenGenerateResponseBody generateOauthToken()

Generate an OAuth 2.0 token for an API client. The token can be used to authorize access to the Voucherify API. The token inherits the permissions and IP whitelists of the API key that is used to generate the OAuth token. You can define the scope that limits its usage. You can generate up to 1000 OAuth tokens per project. The token expires in 900 seconds (15 minutes). If the API key that is used to generate the OAuth token is deleted or blocked, you cannot generate new OAuth tokens and the existing ones will stop working within one minute. If the API key used to generate an OAuth token is regenerated, the OAuth token can still be used. 🚧 Format of scope values Separate the values of the scope property with spaces.

### Example


```typescript
import { createConfiguration, OAuthApi } from 'voucherify';
import type { OAuthApiGenerateOauthTokenRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OAuthApi(configuration);

const request: OAuthApiGenerateOauthTokenRequest = {
    // Gives an access token outside of the context of a user. (optional)
  grantType: "client_credentials",
    // Defines the scope of possible actions that can be done with the OAuth token. The `api` scope allows using the server-side API. The `client_api` scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: `api`, `assets`, `async-actions`, `campaigns`, `categories`, `client_api`, `client_consents`, `client_customers`, `client_events`, `client_promotions`, `client_publish`, `client_qualifications`, `client_redeem`, `client_redemptions`, `client_validate`, `client_validations`, `client_vouchers`, `consents`, `customers`, `events`, `exports`, `locations`, `loyalties`, `metadata-schemas`, `orders`, `product-collections`, `products`, `promotions`, `publications`, `qualifications`, `redemptions`, `referrals`, `rewards`, `segments`, `SKUs`, `task-results`, `templates`, `trash-bin`, `validation-rules-assignments`, `validation-rules`, `validations`, `vouchers`. (optional)
  scope: "scope_example",
};

const data = await apiInstance.generateOauthToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**string**]**Array<&#39;client_credentials&#39;>** | Gives an access token outside of the context of a user. | (optional) defaults to 'client_credentials'
 **scope** | [**string**] | Defines the scope of possible actions that can be done with the OAuth token. The &#x60;api&#x60; scope allows using the server-side API. The &#x60;client_api&#x60; scope allows using the whole client-side API. The values are space-delimited; do **not** use commas to separate the values.  Allowed values: &#x60;api&#x60;, &#x60;assets&#x60;, &#x60;async-actions&#x60;, &#x60;campaigns&#x60;, &#x60;categories&#x60;, &#x60;client_api&#x60;, &#x60;client_consents&#x60;, &#x60;client_customers&#x60;, &#x60;client_events&#x60;, &#x60;client_promotions&#x60;, &#x60;client_publish&#x60;, &#x60;client_qualifications&#x60;, &#x60;client_redeem&#x60;, &#x60;client_redemptions&#x60;, &#x60;client_validate&#x60;, &#x60;client_validations&#x60;, &#x60;client_vouchers&#x60;, &#x60;consents&#x60;, &#x60;customers&#x60;, &#x60;events&#x60;, &#x60;exports&#x60;, &#x60;locations&#x60;, &#x60;loyalties&#x60;, &#x60;metadata-schemas&#x60;, &#x60;orders&#x60;, &#x60;product-collections&#x60;, &#x60;products&#x60;, &#x60;promotions&#x60;, &#x60;publications&#x60;, &#x60;qualifications&#x60;, &#x60;redemptions&#x60;, &#x60;referrals&#x60;, &#x60;rewards&#x60;, &#x60;segments&#x60;, &#x60;SKUs&#x60;, &#x60;task-results&#x60;, &#x60;templates&#x60;, &#x60;trash-bin&#x60;, &#x60;validation-rules-assignments&#x60;, &#x60;validation-rules&#x60;, &#x60;validations&#x60;, &#x60;vouchers&#x60;. | (optional) defaults to undefined


### Return type

**OAuthTokenGenerateResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns details about the token to be used and its expiration times. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **introspectOauthToken**
> OAuthTokenIntrospectResponseBody introspectOauthToken()

Introspect an OAuth 2.0 token for an API client.

### Example


```typescript
import { createConfiguration, OAuthApi } from 'voucherify';
import type { OAuthApiIntrospectOauthTokenRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OAuthApi(configuration);

const request: OAuthApiIntrospectOauthTokenRequest = {
    // An OAuth 2.0 token generated with the API token and key. (optional)
  accessToken: "1ABCde2FGHijKl3m4NO5pqR6STUv7wxYzAbc8dE90FgH1IJkLm",
};

const data = await apiInstance.introspectOauthToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | [**string**] | An OAuth 2.0 token generated with the API token and key. | (optional) defaults to undefined


### Return type

**OAuthTokenIntrospectResponseBody**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns details about an existing token and its expiration times. If an nonexistent token is sent in the request, the response returns that it is inactive. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeOauthToken**
> void revokeOauthToken()

Revoke an OAuth 2.0 token for an API client. Once revoked, the token cannot be used anymore.

### Example


```typescript
import { createConfiguration, OAuthApi } from 'voucherify';
import type { OAuthApiRevokeOauthTokenRequest } from 'voucherify';

const configuration = createConfiguration();
const apiInstance = new OAuthApi(configuration);

const request: OAuthApiRevokeOauthTokenRequest = {
    // An OAuth 2.0 token generated with the API token and key. (optional)
  accessToken: "1ABCde2FGHijKl3m4NO5pqR6STUv7wxYzAbc8dE90FgH1IJkLm",
};

const data = await apiInstance.revokeOauthToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | [**string**] | An OAuth 2.0 token generated with the API token and key. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[X-App-Id](README.md#X-App-Id), [X-App-Token](README.md#X-App-Token)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returns no content if the OAuth 2.0 token is revoked successfully. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


