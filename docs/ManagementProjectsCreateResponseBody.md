# Voucherify.ManagementProjectsCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the project. | [optional] 
**name** | **String** | The name of the project. | [optional] 
**description** | **String** | A user-defined description of the project, e.g. its purpose, scope, region. | [optional] 
**timezone** | **String** | The time zone in which the project is established. It can be in the GMT format or in accordance with IANA time zone database. | [optional] 
**currency** | **String** | The currency used in the project. It is equal to a 3-letter ISO 4217 code. | [optional] 
**dialCode** | **String** | The country dial code for the project. It is equal to an ITU country code. | [optional] 
**webhookVersion** | **String** | The webhook version used in the project. | [optional] [default to &#39;v2024-01-01&#39;]
**clientTrustedDomains** | **[String]** | An array of URL addresses that allow client requests. | [optional] 
**clientRedeemEnabled** | **Boolean** | Enables client-side redemption. | [optional] 
**clientPublishEnabled** | **Boolean** | Enables client-side publication. | [optional] 
**clientListVouchersEnabled** | **Boolean** | Enables client-side listing of vouchers. | [optional] 
**clientCreateCustomerEnabled** | **Boolean** | Enables client-side creation of customers. | [optional] 
**clientLoyaltyEventsEnabled** | **Boolean** | Enables client-side events for loyalty and referral programs. | [optional] 
**clientSetVoucherExpirationDateEnabled** | **Boolean** | Enables client-side setting of voucher expiration date. | [optional] 
**webhooksCalloutNotifications** | [**ManagementProjectsCreateResponseBodyWebhooksCalloutNotifications**](ManagementProjectsCreateResponseBodyWebhooksCalloutNotifications.md) |  | [optional] 
**apiUsageNotifications** | [**ManagementProjectsCreateResponseBodyApiUsageNotifications**](ManagementProjectsCreateResponseBodyApiUsageNotifications.md) |  | [optional] 
**clusterId** | **String** | The identifier of the cluster where the project will be created. | [optional] 
**caseSensitiveCodes** | **Boolean** | Determines if the vouchers in the project will be: - case sensitive - if &#x60;true&#x60;, &#x60;C0dE-cfV&#x60; is **not** equal to &#x60;c0de-cfv&#x60;), - case insensitive - if &#x60;false&#x60;, &#x60;C0dE-cfV&#x60; is equal to &#x60;c0de-cfv&#x60;. | [optional] 
**apiVersion** | **String** | The API version used in the project. Currently, the default and only value is &#x60;v2018-08-01&#x60;. | [optional] [default to &#39;v2018-08-01&#39;]
**isSandbox** | **Boolean** | Determines if the project is a sandbox project. | [optional] 
**webhookToken** | **String** | Webhook token used for authentication. | [optional] 
**serverSideKey** | [**ManagementProjectsCreateResponseBodyServerSideKey**](ManagementProjectsCreateResponseBodyServerSideKey.md) |  | [optional] 
**clientSideKey** | [**ManagementProjectsCreateResponseBodyClientSideKey**](ManagementProjectsCreateResponseBodyClientSideKey.md) |  | [optional] 



## Enum: WebhookVersionEnum


* `v2024-01-01` (value: `"v2024-01-01"`)





## Enum: ApiVersionEnum


* `v2018-08-01` (value: `"v2018-08-01"`)




