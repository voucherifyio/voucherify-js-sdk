# Voucherify.LoyaltiesMembersRedemptionRedeemResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique redemption ID. | [optional] 
**object** | **String** | The type of the object represented by the JSON | [optional] [default to &#39;redemption&#39;]
**date** | **Date** | Timestamp representing the date and time when the object was created. The value is shown in the ISO 8601 format. | [optional] 
**customerId** | **String** | Unique customer ID of the redeeming customer. | [optional] 
**trackingId** | **String** | Hashed customer source ID. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes assigned to the redemption. | [optional] 
**amount** | **Number** | For gift cards, this is a positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the number of redeemed credits. For loyalty cards, this is the number of loyalty points used in the transaction. | [optional] 
**redemption** | **String** | Unique redemption ID of the parent redemption. | [optional] 
**result** | **String** | Redemption result. | [optional] 
**status** | **String** | Redemption status. | [optional] 
**session** | [**LoyaltiesMembersRedemptionRedeemResponseBodySession**](LoyaltiesMembersRedemptionRedeemResponseBodySession.md) |  | [optional] 
**relatedRedemptions** | [**LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptions**](LoyaltiesMembersRedemptionRedeemResponseBodyRelatedRedemptions.md) |  | [optional] 
**failureCode** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a generic reason as to why the redemption failed. | [optional] 
**failureMessage** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a more expanded reason as to why the redemption failed. | [optional] 
**order** | [**LoyaltiesMembersRedemptionRedeemResponseBodyOrder**](LoyaltiesMembersRedemptionRedeemResponseBodyOrder.md) |  | [optional] 
**channel** | [**LoyaltiesMembersRedemptionRedeemResponseBodyChannel**](LoyaltiesMembersRedemptionRedeemResponseBodyChannel.md) |  | [optional] 
**customer** | [**SimpleCustomer**](SimpleCustomer.md) |  | [optional] 
**relatedObjectType** | **String** | Defines the related object. | [optional] 
**relatedObjectId** | **String** | Unique related object ID assigned by Voucherify, i.e. v_lfZi4rcEGe0sN9gmnj40bzwK2FH6QUno for a voucher. | [optional] 
**promotionTier** | [**PromotionTier**](PromotionTier.md) |  | [optional] 
**reward** | [**RedemptionRewardResult**](RedemptionRewardResult.md) |  | [optional] 
**gift** | [**LoyaltiesMembersRedemptionRedeemResponseBodyGift**](LoyaltiesMembersRedemptionRedeemResponseBodyGift.md) |  | [optional] 
**loyaltyCard** | [**LoyaltiesMembersRedemptionRedeemResponseBodyLoyaltyCard**](LoyaltiesMembersRedemptionRedeemResponseBodyLoyaltyCard.md) |  | [optional] 
**voucher** | [**LoyaltiesMembersRedemptionRedeemResponseBodyVoucher**](LoyaltiesMembersRedemptionRedeemResponseBodyVoucher.md) |  | [optional] 



## Enum: ObjectEnum


* `redemption` (value: `"redemption"`)





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




