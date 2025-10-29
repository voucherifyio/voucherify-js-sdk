# Voucherify.MemberActivityDataRedemption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique redemption ID. | [optional] 
**customerId** | **String** | Unique customer ID of the redeeming customer. | [optional] 
**trackingId** | **String** | Hashed customer source ID. | [optional] 
**date** | **Date** | Timestamp representing the date and time when the redemption was created in the ISO 8601 format. | [optional] 
**amount** | **Number** | For gift cards, this is a positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the number of redeemed credits. For loyalty cards, this is the number of loyalty points used in the transaction. In the case of redemption rollback, the numbers are expressed as negative integers. and For gift cards, this is a positive integer in the smallest currency unit (e.g. 100 cents for $1.00) representing the number of redeemed credits. For loyalty cards, this is the number of loyalty points used in the transaction. | [optional] 
**order** | [**MemberActivityDataRedemptionOrder**](MemberActivityDataRedemptionOrder.md) |  | [optional] 
**reward** | [**MemberActivityDataRedemptionReward**](MemberActivityDataRedemptionReward.md) |  | [optional] 
**customer** | [**SimpleCustomer**](SimpleCustomer.md) |  | [optional] 
**result** | **String** | Redemption result. | [optional] 
**status** | **String** |  | [optional] 
**voucher** | [**MemberActivityDataRedemptionVoucher**](MemberActivityDataRedemptionVoucher.md) |  | [optional] 
**promotionTier** | [**MemberActivityDataRedemptionPromotionTier**](MemberActivityDataRedemptionPromotionTier.md) |  | [optional] 
**redemption** | **String** | Unique redemption ID of the parent redemption. | [optional] 
**metadata** | **Object** | The metadata object stores all custom attributes in the form of key/value pairs assigned to the redemption. and The metadata object stores all custom attributes assigned to the redemption. | [optional] 
**failureCode** | **String** | If the result is &#x60;FAILURE&#x60;, this parameter will provide a generic reason as to why the redemption failed. | [optional] 
**failureMessage** | **String** |  | [optional] 
**reason** | **String** |  | [optional] 
**channel** | [**MemberActivityDataRedemptionChannel**](MemberActivityDataRedemptionChannel.md) |  | [optional] 
**object** | **String** | The type of the object represented by the JSON. This object stores information about the &#x60;redemption&#x60;. | [optional] [default to &#39;redemption&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the redemption was created. The value is shown in the ISO 8601 format. | [optional] 
**channelType** | **String** | The source of the channel for the redemption rollback. A &#x60;USER&#x60; corresponds to the Voucherify Dashboard and an &#x60;API&#x60; corresponds to the API. | [optional] 
**channelId** | **String** | Unique channel ID of the user performing the redemption. This is either a user ID from a user using the Voucherify Dashboard or an X-APP-Id of a user using the API. | [optional] 
**previousOrder** | [**MemberActivityDataRedemptionPreviousOrder**](MemberActivityDataRedemptionPreviousOrder.md) |  | [optional] 
**relatedRedemptions** | [**MemberActivityDataRedemptionRelatedRedemptions**](MemberActivityDataRedemptionRelatedRedemptions.md) |  | [optional] 
**parentRedemptionId** | **String** | Unique redemption ID of the parent redemption. | [optional] 
**relatedObjectType** | **String** | Defines the related object. | [optional] 
**relatedObjectId** | **String** | Unique related object ID assigned by Voucherify, i.e. v_lfZi4rcEGe0sN9gmnj40bzwK2FH6QUno for a voucher. | [optional] 
**relatedObjectParentId** | **String** | Unique related parent object ID assigned by Voucherify, i.e. v_lfZi4rcEGe0sN9gmnj40bzwK2FH6QUno for a voucher. | [optional] 
**campaignName** | **String** | Campaign name | [optional] 



## Enum: ResultEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `FAILURE` (value: `"FAILURE"`)





## Enum: StatusEnum


* `SUCCEEDED` (value: `"SUCCEEDED"`)

* `FAILED` (value: `"FAILED"`)

* `ROLLED BACK` (value: `"ROLLED BACK"`)





## Enum: ChannelTypeEnum


* `USER` (value: `"USER"`)

* `API` (value: `"API"`)





## Enum: RelatedObjectTypeEnum


* `voucher` (value: `"voucher"`)

* `promotion_tier` (value: `"promotion_tier"`)




