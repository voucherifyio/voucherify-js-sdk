# Voucherify.CardPointsBucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardId** | **String** | ID of the card the bucket belongs to. | [optional] 
**cardDefinitionId** | **String** | ID of the card definition of the card. | [optional] 
**programId** | **String** | ID of the loyalty program. | [optional] 
**memberId** | **String** | ID of the member owning the card. | [optional] 
**createdAt** | **Date** | Timestamp when the bucket was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the bucket was last updated (ISO 8601), or &#x60;null&#x60;. | [optional] 
**id** | **String** | Unique points expiration bucket ID. | [optional] 
**customerId** | **String** | Voucherify ID of the customer owning the card. | [optional] 
**cardType** | **String** | Card type. Currently, only &#x60;INDIVIDUAL&#x60; is supported. | [optional] [default to &#39;INDIVIDUAL&#39;]
**points** | [**CardPointsBucketPoints**](CardPointsBucketPoints.md) |  | [optional] 
**expirationDate** | **Date** | Date when the points in the bucket expire (&#x60;YYYY-MM-DD&#x60;). | [optional] 
**expirationType** | **String** | Points expiration type for the bucket. It can be inherited from the card definition or overridden by the earning rule. | [optional] 
**status** | **String** | Bucket status. For the List card expiring points buckets, returns only &#x60;ACTIVE&#x60; buckets. | [optional] 
**object** | **String** | Object type marker, always &#x60;card_points_bucket&#x60;. | [optional] [default to &#39;card_points_bucket&#39;]



## Enum: CardTypeEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)





## Enum: ExpirationTypeEnum


* `NO_EXPIRATION` (value: `"NO_EXPIRATION"`)

* `ROLLING_EXPIRATION` (value: `"ROLLING_EXPIRATION"`)

* `CALENDAR_EXPIRATION` (value: `"CALENDAR_EXPIRATION"`)

* `SLIDING_EXPIRATION` (value: `"SLIDING_EXPIRATION"`)





## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `DELETED` (value: `"DELETED"`)

* `EXPIRED` (value: `"EXPIRED"`)





## Enum: ObjectEnum


* `card_points_bucket` (value: `"card_points_bucket"`)




