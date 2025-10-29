# Voucherify.RedemptionsRollbackCreateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the redemption rollback. | [optional] 
**object** | **String** | The type of the object represented by the JSON | [optional] [default to &#39;redemption_rollback&#39;]
**date** | **Date** | Timestamp representing the date and time when the object was created. The value is shown in the ISO 8601 format. | [optional] 
**customerId** | **String** | Unique customer ID of the redeeming customer. | [optional] 
**trackingId** | **String** | Hashed customer source ID. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the redemption. | [optional] 
**amount** | **Number** | For gift cards, this represents the number of the credits restored to the card in the rolledback redemption. The number is a negative integer in the smallest currency unit, e.g. -100 cents for $1.00 added back to the card. For loyalty cards, this represents the number of loyalty points restored to the card in the rolledback redemption. The number is a negative integer. | [optional] 
**redemption** | **String** | Unique redemption ID of the parent redemption. | [optional] 
**reason** | **String** | System generated cause for the redemption being invalid in the context of the provided parameters. | [optional] 
**result** | **String** | Redemption result. | [optional] 
**status** | **String** | Redemption status. | [optional] 
**failureCode** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a generic reason as to why the redemption failed. | [optional] 
**failureMessage** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a more expanded reason as to why the redemption failed. | [optional] 
**order** | [**RedemptionsRollbackCreateResponseBodyOrder**](RedemptionsRollbackCreateResponseBodyOrder.md) |  | [optional] 
**channel** | [**RedemptionsRollbackCreateResponseBodyChannel**](RedemptionsRollbackCreateResponseBodyChannel.md) |  | [optional] 
**customer** | [**SimpleCustomer**](SimpleCustomer.md) |  | [optional] 
**relatedObjectType** | **String** | Defines the related object. | [optional] 
**relatedObjectId** | **String** | Unique identifier of the related object. It is assigned by Voucherify, i.e. &#x60;v_lfZi4rcEGe0sN9gmnj40bzwK2FH6QUno&#x60; for a voucher. | [optional] 
**voucher** | [**Voucher**](Voucher.md) |  | [optional] 
**promotionTier** | [**PromotionTier**](PromotionTier.md) |  | [optional] 
**reward** | [**RedemptionRewardResult**](RedemptionRewardResult.md) |  | [optional] 
**gift** | [**RedemptionsRollbackCreateResponseBodyGift**](RedemptionsRollbackCreateResponseBodyGift.md) |  | [optional] 
**loyaltyCard** | [**RedemptionsRollbackCreateResponseBodyLoyaltyCard**](RedemptionsRollbackCreateResponseBodyLoyaltyCard.md) |  | [optional] 



## Enum: ObjectEnum


* `redemption_rollback` (value: `"redemption_rollback"`)





## Enum: ResultEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `FAILURE` (value: `"FAILURE"`)





## Enum: StatusEnum


* `SUCCEEDED` (value: `"SUCCEEDED"`)

* `FAILED` (value: `"FAILED"`)





## Enum: RelatedObjectTypeEnum


* `voucher` (value: `"voucher"`)

* `promotion_tier` (value: `"promotion_tier"`)

* `redemption` (value: `"redemption"`)




