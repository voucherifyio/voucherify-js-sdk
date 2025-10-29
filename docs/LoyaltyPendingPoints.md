# Voucherify.LoyaltyPendingPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the pending point entry, assigned by Voucherify. | [optional] 
**voucherId** | **String** | Unique identifier of the loyalty card, assigned by Voucherify. | [optional] 
**campaignId** | **String** | Unique campaign identifier, assigned by Voucherify. | [optional] 
**customerId** | **String** | Unique customer identifier, assigned by Voucherify. | [optional] 
**orderId** | **String** | Unique order identifier, assigned by Voucherify. | [optional] 
**points** | **Number** | Number of points in the pending state. | [optional] 
**activatesAt** | **Date** | Date when the pending points are activated and added to the customer&#39;s loyalty card. | [optional] 
**details** | [**LoyaltyPendingPointsDetails**](LoyaltyPendingPointsDetails.md) |  | 
**createdAt** | **Date** | Timestamp representing the date and time when the pending point entry was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the pending point entry was modified. The value is shown in the ISO 8601 format. | [optional] 


