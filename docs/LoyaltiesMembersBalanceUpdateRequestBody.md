# Voucherify.LoyaltiesMembersBalanceUpdateRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | Incremental balance to be added to/subtracted from the loyalty card.  - To add points: 100 - To subtract points, add a minus: -100 | [optional] 
**expirationType** | [**PointsExpirationTypes**](PointsExpirationTypes.md) |  | [optional] 
**expirationDate** | **Date** | Set expiration date for added points, i.e. &#x60;YYYY-MM-DD&#x60;. This parameter is required only when expiration_type is set to &#x60;CUSTOM_DATE&#x60;. | [optional] 
**reason** | **String** | Reason for the transfer. | [optional] 
**sourceId** | **String** | The merchant&#39;s transaction ID if it is different from the Voucherify transaction ID. It is really useful in case of an integration between multiple systems. It can be a transaction ID from a CRM system, database or 3rd-party service. | [optional] 


