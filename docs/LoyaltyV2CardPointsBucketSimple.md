# Voucherify.LoyaltyV2CardPointsBucketSimple

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Point expiration bucket ID. | [optional] 
**points** | [**LoyaltyV2CardPointsBucketSimplePoints**](LoyaltyV2CardPointsBucketSimplePoints.md) |  | [optional] 
**expirationDate** | **Date** | Date when the points expire. | [optional] 
**expirationType** | **String** | Expiration type of the points. | [optional] 



## Enum: ExpirationTypeEnum


* `NO_EXPIRATION` (value: `"NO_EXPIRATION"`)

* `ROLLING_EXPIRATION` (value: `"ROLLING_EXPIRATION"`)

* `CALENDAR_EXPIRATION` (value: `"CALENDAR_EXPIRATION"`)

* `SLIDING_EXPIRATION` (value: `"SLIDING_EXPIRATION"`)




