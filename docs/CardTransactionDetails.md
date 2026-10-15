# Voucherify.CardTransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason for the transaction (e.g. the reason provided in a manual adjustment request). | [optional] 
**rejection** | [**CardTransactionDetailsRejection**](CardTransactionDetailsRejection.md) |  | [optional] 
**metadata** | **Object** | Transaction metadata (empty object when none). | [optional] 
**points** | [**CardTransactionDetailsPoints**](CardTransactionDetailsPoints.md) |  | [optional] 
**bucket** | [**LoyaltyV2CardPointsBucketSimple**](LoyaltyV2CardPointsBucketSimple.md) |  | [optional] 
**buckets** | [**[LoyaltyV2CardPointsBucketSimple]**](LoyaltyV2CardPointsBucketSimple.md) | The points buckets that expired (&#x60;POINTS_EXPIRED&#x60; only). | [optional] 
**date** | **Date** | Expiration date (&#x60;POINTS_EXPIRED&#x60; only, &#x60;YYYY-MM-DD&#x60;). | [optional] 
**reward** | [**CardTransactionDetailsReward**](CardTransactionDetailsReward.md) |  | [optional] 
**rewardTransaction** | [**CardTransactionDetailsRewardTransaction**](CardTransactionDetailsRewardTransaction.md) |  | [optional] 
**cardTransaction** | [**CardTransactionDetailsCardTransaction**](CardTransactionDetailsCardTransaction.md) |  | [optional] 
**purchase** | [**CardTransactionDetailsPurchase**](CardTransactionDetailsPurchase.md) |  | [optional] 
**order** | [**CardTransactionDetailsOrder**](CardTransactionDetailsOrder.md) |  | [optional] 
**orderTransaction** | [**CardTransactionDetailsOrderTransaction**](CardTransactionDetailsOrderTransaction.md) |  | [optional] 
**targetCard** | [**CardTransactionDetailsTargetCard**](CardTransactionDetailsTargetCard.md) |  | [optional] 
**purchaseTransaction** | [**CardTransactionDetailsPurchaseTransaction**](CardTransactionDetailsPurchaseTransaction.md) |  | [optional] 


