# Voucherify.RedemptionsGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**object** | **String** |  | [optional] 
**date** | **Date** | Timestamp representing the date and time when the object was created. The value is shown in the ISO 8601 format. | [optional] 
**customerId** | **String** | Unique customer ID of the redeeming customer. | [optional] 
**trackingId** | **String** | Hashed customer source ID. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the redemption. | [optional] 
**amount** | **Number** | For gift cards, this is a positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the number of redeemed credits. For loyalty cards, this is the number of loyalty points used in the transaction. and For gift cards, this represents the number of the credits restored to the card in the rolledback redemption. The number is a negative integer in the smallest currency unit, e.g. -100 cents for $1.00 added back to the card. For loyalty cards, this represents the number of loyalty points restored to the card in the rolledback redemption. The number is a negative integer. | [optional] 
**redemption** | **String** | Unique redemption ID of the parent redemption. | [optional] 
**result** | **String** | Redemption result. | [optional] 
**status** | **String** |  | [optional] 
**session** | [**RedemptionsGetResponseBodySession**](RedemptionsGetResponseBodySession.md) |  | [optional] 
**relatedRedemptions** | [**RedemptionsGetResponseBodyRelatedRedemptions**](RedemptionsGetResponseBodyRelatedRedemptions.md) |  | [optional] 
**failureCode** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a generic reason as to why the redemption failed. | [optional] 
**failureMessage** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a more expanded reason as to why the redemption failed. | [optional] 
**order** | [**RedemptionsGetResponseBodyOrder**](RedemptionsGetResponseBodyOrder.md) |  | [optional] 
**channel** | [**RedemptionsGetResponseBodyChannel**](RedemptionsGetResponseBodyChannel.md) |  | [optional] 
**customer** | [**RedemptionsGetResponseBodyCustomer**](RedemptionsGetResponseBodyCustomer.md) |  | [optional] 
**relatedObjectType** | **String** | Defines the related object. | [optional] 
**relatedObjectId** | **String** |  | [optional] 
**promotionTier** | [**RedemptionsGetResponseBodyPromotionTier**](RedemptionsGetResponseBodyPromotionTier.md) |  | [optional] 
**reward** | [**RedemptionRewardResult**](RedemptionRewardResult.md) |  | [optional] 
**gift** | [**RedemptionsGetResponseBodyGift**](RedemptionsGetResponseBodyGift.md) |  | [optional] 
**loyaltyCard** | [**RedemptionsGetResponseBodyLoyaltyCard**](RedemptionsGetResponseBodyLoyaltyCard.md) |  | [optional] 
**voucher** | [**RedemptionsGetResponseBodyVoucher**](RedemptionsGetResponseBodyVoucher.md) |  | [optional] 
**reason** | **String** | System generated cause for the redemption being invalid in the context of the provided parameters. | [optional] 



## Enum: ObjectEnum


* `redemption` (value: `"redemption"`)

* `redemption_rollback` (value: `"redemption_rollback"`)





## Enum: ResultEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `FAILURE` (value: `"FAILURE"`)





## Enum: StatusEnum


* `SUCCEEDED` (value: `"SUCCEEDED"`)

* `FAILED` (value: `"FAILED"`)

* `ROLLED_BACK` (value: `"ROLLED_BACK"`)





## Enum: RelatedObjectTypeEnum


* `voucher` (value: `"voucher"`)

* `promotion_tier` (value: `"promotion_tier"`)

* `redemption` (value: `"redemption"`)




