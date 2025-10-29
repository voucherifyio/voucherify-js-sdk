# Voucherify.LoyaltiesMembersPendingPointsActivateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | The number of pending points added to the loyalty card. | [optional] 
**total** | **Number** | Total number of points incurred over the lifespan of the loyalty card, minus the expired points. | [optional] 
**balance** | **Number** | The current number of loyalty points after the pending points have been added. | [optional] 
**type** | **String** | The type of the voucher being modified. For pending points, it is always &#x60;loyalty_card&#x60;. | [optional] [default to &#39;loyalty_card&#39;]
**object** | **String** | The type of the object represented by JSON. Default is &#x60;balance&#x60;. | [optional] [default to &#39;balance&#39;]
**relatedObject** | [**LoyaltiesMembersPendingPointsActivateResponseBodyRelatedObject**](LoyaltiesMembersPendingPointsActivateResponseBodyRelatedObject.md) |  | [optional] 
**operationType** | **String** | The type of the operation being performed. | [optional] [default to &#39;MANUAL&#39;]



## Enum: TypeEnum


* `loyalty_card` (value: `"loyalty_card"`)





## Enum: ObjectEnum


* `balance` (value: `"balance"`)





## Enum: OperationTypeEnum


* `MANUAL` (value: `"MANUAL"`)




