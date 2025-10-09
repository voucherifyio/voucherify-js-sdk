# Voucherify.LoyaltiesMembersPointsExpirationListResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object represented by JSON. This object stores information about loyalty points expiration buckets in a dictionary. | [optional] [default to &#39;list&#39;]
**dataRef** | **String** | Identifies the name of the attribute that contains the array of loyalty points expiration bucket objects. | [optional] [default to &#39;data&#39;]
**data** | [**[LoyaltyPointsBucket]**](LoyaltyPointsBucket.md) | Contains array of loyalty points expiration buckets. | [optional] 
**total** | **Number** | Total number of point expiration buckets. | [optional] 



## Enum: ObjectEnum


* `list` (value: `"list"`)





## Enum: DataRefEnum


* `data` (value: `"data"`)




