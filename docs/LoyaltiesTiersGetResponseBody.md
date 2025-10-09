# Voucherify.LoyaltiesTiersGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Loyalty Tier name. | [optional] 
**earningRules** | [**{String: MappingPoints}**](MappingPoints.md) | Contains a list of earning rule IDs and their points mapping for the given earning rule. | [optional] 
**rewards** | [**{String: MappingPoints}**](MappingPoints.md) | Contains a list of reward IDs and their points mapping for the given reward. | [optional] 
**points** | [**LoyaltiesTiersGetResponseBodyPoints**](LoyaltiesTiersGetResponseBodyPoints.md) |  | [optional] 
**id** | **String** | Unique loyalty tier ID. | [optional] 
**campaignId** | **String** | Unique parent campaign ID. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the loyalty tier. A set of key/value pairs that you can attach to a loyalty tier object. It can be useful for storing additional information about the loyalty tier in a structured format. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the loyalty tier was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the loyalty tier was updated. The value is shown in the ISO 8601 format. | [optional] 
**config** | [**LoyaltiesTiersGetResponseBodyConfig**](LoyaltiesTiersGetResponseBodyConfig.md) |  | [optional] 
**expiration** | [**LoyaltyTierExpiration**](LoyaltyTierExpiration.md) |  | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the loyalty. | [optional] [default to &#39;loyalty_tier&#39;]



## Enum: ObjectEnum


* `loyalty_tier` (value: `"loyalty_tier"`)




