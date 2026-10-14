# Voucherify.CardPendingPointsBucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardId** | **String** | ID of the card the bucket belongs to. | [optional] 
**cardDefinitionId** | **String** | ID of the card definition of the card. | [optional] 
**programId** | **String** | ID of the loyalty program. | [optional] 
**memberId** | **String** | ID of the member owning the card. | [optional] 
**createdAt** | **Date** | Timestamp when the bucket was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Timestamp when the bucket was last updated (ISO 8601), or &#x60;null&#x60;. | [optional] 
**id** | **String** | Unique pending point bucket ID. | [optional] 
**cardType** | **String** | Card type. | [optional] [default to &#39;INDIVIDUAL&#39;]
**points** | [**CardPendingPointsBucketPoints**](CardPendingPointsBucketPoints.md) |  | [optional] 
**date** | **Date** | Scheduled activation date of the pending points (&#x60;YYYY-MM-DD&#x60;). For the &#x60;EVENT_BASED&#x60; type this is the cancellation deadline. | [optional] 
**type** | **String** | Pending points activation type from the card definition. | [optional] 
**status** | **String** | Bucket status. | [optional] 
**object** | **String** | Object type marker, always &#x60;card_pending_points_bucket&#x60;. | [optional] [default to &#39;card_pending_points_bucket&#39;]



## Enum: CardTypeEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)





## Enum: TypeEnum


* `PERIOD_BASED` (value: `"PERIOD_BASED"`)

* `FIXED_DATES` (value: `"FIXED_DATES"`)

* `EVENT_BASED` (value: `"EVENT_BASED"`)





## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `ACTIVATED` (value: `"ACTIVATED"`)

* `CANCELED` (value: `"CANCELED"`)

* `DELETED` (value: `"DELETED"`)





## Enum: ObjectEnum


* `card_pending_points_bucket` (value: `"card_pending_points_bucket"`)




