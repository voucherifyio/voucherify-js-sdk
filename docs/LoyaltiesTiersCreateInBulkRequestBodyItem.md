# Voucherify.LoyaltiesTiersCreateInBulkRequestBodyItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Loyalty Tier name. | [optional] 
**earningRules** | [**{String: MappingPoints}**](MappingPoints.md) | Contains a list of earning rule IDs and their points mapping for the given earning rule. | [optional] 
**rewards** | [**{String: MappingPoints}**](MappingPoints.md) | Contains a list of reward IDs and their points mapping for the given reward. | [optional] 
**points** | [**LoyaltyTierBasePoints**](LoyaltyTierBasePoints.md) |  | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the loyalty tier. A set of key/value pairs that you can attach to a loyalty tier object. It can be useful for storing additional information about the loyalty tier in a structured format. | [optional] 


