# Voucherify.LoyaltiesMembersTiersListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about loyalty tiers in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of loyalty tier objects. | [optional] [default to &#39;data&#39;]
**data** | [**[LoyaltyTier]**](LoyaltyTier.md) |  | [optional] 
**total** | **Number** | Total number of loyalty tier objects. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




