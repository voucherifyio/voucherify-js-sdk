# Voucherify.Card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardType** | **String** | Card type. Currently only &#x60;INDIVIDUAL&#x60; is supported. | [optional] [default to &#39;INDIVIDUAL&#39;]
**lifetimeBucket** | [**CardLifetimeBucket**](CardLifetimeBucket.md) |  | [optional] 
**balance** | [**CardBalance**](CardBalance.md) |  | [optional] 
**id** | **String** | Identifies the card. | [optional] 
**programId** | **String** | Identifies the loyalty program. | [optional] 
**cardDefinitionId** | **String** | Identifies the card definition. | [optional] 
**code** | **String** | Human-readable card code. &#x60;null&#x60; until asynchronous code generation finishes. | [optional] 
**customerId** | **String** | Identifies the customer linked to the card. | [optional] 
**memberId** | **String** | Identifies the member linked to the card. | [optional] 
**createdAt** | **Date** | Records when the card was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Records the last update (ISO 8601). &#x60;null&#x60; if the card has never been updated. | [optional] 
**object** | **String** | Object type. Always &#x60;card&#x60;. | [optional] [default to &#39;card&#39;]



## Enum: CardTypeEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)





## Enum: ObjectEnum


* `card` (value: `"card"`)




