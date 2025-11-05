# Voucherify.OrderRedemptionsEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | Timestamp representing the date and time when the redemption was created. The value is shown in the ISO 8601 format. | [optional] 
**rollbackId** | **String** | Unique ID of the redemption rollback. | [optional] 
**rollbackDate** | **Date** | Timestamp representing the date and time when the redemption rollback was created. The value is shown in the ISO 8601 format. | [optional] 
**relatedObjectType** | **String** | The source of the incentive. | [optional] [default to &#39;redemption&#39;]
**relatedObjectId** | **String** | Unique ID of the parent redemption. | [optional] 
**relatedObjectParentId** | **String** | Represent&#39;s the campaign ID of the voucher if the redemption was based on a voucher that was part of bulk codes generated within a campaign. In case of a promotion tier, this represents the campaign ID of the promotion tier&#39;s parent campaign. | [optional] 
**stacked** | **[String]** | Contains a list of unique IDs of child redemptions, which belong to the stacked incentives. | [optional] 
**rollbackStacked** | **[String]** | Lists the rollback redemption IDs of the particular child redemptions. | [optional] 


