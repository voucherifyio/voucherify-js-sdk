# Voucherify.PublicationsCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique publication ID, assigned by Voucherify. | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the &#x60;publication&#x60;. | [optional] [default to &#39;publication&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the publication was created. The value is shown in the ISO 8601 format. | [optional] 
**customerId** | **String** | Unique customer ID of the customer receiving the publication. | [optional] 
**trackingId** | **String** | Customer&#39;s &#x60;source_id&#x60;. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the publication. A set of key/value pairs that you can attach to a publication object. It can be useful for storing additional information about the publication in a structured format. | [optional] 
**channel** | **String** | How the publication was originated. It can be your own custom channel or an example value provided here. | [optional] [default to &#39;API&#39;]
**sourceId** | **String** | The merchant&#39;s publication ID if it is different from the Voucherify publication ID. It&#39;s an optional tracking identifier of a publication. It is really useful in case of an integration between multiple systems. It can be a publication ID from a CRM system, database or 3rd-party service.  | [optional] 
**result** | **String** | Status of the publication attempt. | [optional] [default to &#39;SUCCESS&#39;]
**customer** | [**CustomerWithSummaryLoyaltyReferrals**](CustomerWithSummaryLoyaltyReferrals.md) |  | [optional] 
**vouchersId** | **[String]** | Contains the unique internal voucher ID that was assigned by Voucherify. | [optional] 
**voucher** | [**Voucher**](Voucher.md) |  | [optional] 
**vouchers** | **[String]** | Contains the unique voucher codes that was assigned by Voucherify. | [optional] 



## Enum: ObjectEnum


* `publication` (value: `"publication"`)





## Enum: ChannelEnum


* `API` (value: `"API"`)





## Enum: ResultEnum


* `SUCCESS` (value: `"SUCCESS"`)




