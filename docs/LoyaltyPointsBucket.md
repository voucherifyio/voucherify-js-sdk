# Voucherify.LoyaltyPointsBucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the loyalty points bucket. | [optional] 
**voucherId** | **String** | Unique identifier of the parent loyalty card. | [optional] 
**campaignId** | **String** | Unique identifier of the parent campaign. | [optional] 
**bucket** | [**LoyaltyPointsBucketBucket**](LoyaltyPointsBucketBucket.md) |  | [optional] 
**status** | **String** | Loyalty point point bucket status. | [optional] 
**expiresAt** | **Date** | Date when the number of points defined in the bucket object are due to expire. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the loyalty point bucket object was created in ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the loyalty point bucket object was updated in ISO 8601 format. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the loyalty point bucket. | [optional] [default to &#39;loyalty_points_bucket&#39;]



## Enum: ObjectEnum


* `loyalty_points_bucket` (value: `"loyalty_points_bucket"`)




