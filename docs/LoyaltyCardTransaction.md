# Voucherify.LoyaltyCardTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique transaction ID. | [optional] 
**sourceId** | **String** | The merchant&#39;s transaction ID if it is different from the Voucherify transaction ID. It is really useful in case of an integration between multiple systems. It can be a transaction ID from a CRM system, database or 3rd-party service. In case of a redemption, this value is null. | [optional] 
**voucherId** | **String** | Unique voucher ID. | [optional] 
**campaignId** | **String** | Unqiue campaign ID of the voucher&#39;s parent campaign if it is part of campaign that generates bulk codes. | [optional] 
**source** | **String** | The channel through which the transaction took place, whether through the API or the Dashboard. In case of a redemption, this value is null. | [optional] 
**reason** | **String** | Reason why the transaction occurred. In case of a redemption, this value is null. | [optional] 
**relatedTransactionId** | **String** | The related transaction ID on the receiving card. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the transaction was created. The value is shown in the ISO 8601 format. | [optional] 
**details** | [**LoyaltyCardTransactionDetails**](LoyaltyCardTransactionDetails.md) |  | [optional] 
**type** | [**LoyaltyCardTransactionsType**](LoyaltyCardTransactionsType.md) |  | [optional] 


