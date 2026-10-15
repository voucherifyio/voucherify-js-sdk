# Voucherify.CardSimple

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
**nextExpiration** | [**CardNextExpiration**](CardNextExpiration.md) |  | [optional] 
**nextActivation** | [**CardNextActivation**](CardNextActivation.md) |  | [optional] 



## Enum: CardTypeEnum


* `INDIVIDUAL` (value: `"INDIVIDUAL"`)





## Enum: ObjectEnum


* `card` (value: `"card"`)




