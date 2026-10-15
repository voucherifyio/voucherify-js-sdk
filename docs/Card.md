# Voucherify.Card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifies the card. | [optional] 
**cardDefinitionId** | **String** | Identifies the card definition. | [optional] 
**cardType** | **String** | Card type. Currently only &#x60;INDIVIDUAL&#x60; is supported. | [optional] [default to &#39;INDIVIDUAL&#39;]
**code** | **String** | Human-readable card code. Card code generation is asynchronous - this field is &#x60;null&#x60; right after member creation and is populated shortly after, once the background code generation completes. | [optional] 
**lifetimeBucket** | [**CardLifetimeBucket**](CardLifetimeBucket.md) |  | [optional] 
**balance** | [**CardBalance**](CardBalance.md) |  | [optional] 
**object** | **String** | Object type. Always &#x60;card&#x60;. | [optional] [default to &#39;card&#39;]
**programId** | **String** | Identifies the loyalty program. | [optional] 
**customerId** | **String** | Identifies the customer linked to the card. | [optional] 
**memberId** | **String** | Identifies the member linked to the card. | [optional] 
**createdAt** | **Date** | Records when the card was created (ISO 8601). | [optional] 
**updatedAt** | **Date** | Records the last update (ISO 8601). &#x60;null&#x60; if the card has never been updated. | [optional] 



## Enum: CardTypeEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)





## Enum: ObjectEnum


* `card` (value: `"card"`)




