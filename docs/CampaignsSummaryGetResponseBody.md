# Voucherify.CampaignsSummaryGetResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | The type of the object, which is &#x60;campaign_summary&#x60;. | [optional] [default to &#39;campaign_summary&#39;]
**campaign** | [**CampaignBase**](CampaignBase.md) |  | [optional] 
**redemptions** | **Number** | Total number of redemptions, which includes successful and failed redemptions. | [optional] 
**redemptionsSucceeded** | **Number** | Total number of successful redemptions. | [optional] 
**redemptionsFailed** | **Number** | Total number of failed redemptions. | [optional] 
**rollbacks** | **Number** | Total number of rollbacks, which includes successful and failed rollbacks. | [optional] 
**rollbacksSucceeded** | **Number** | Total number of successful rollbacks. | [optional] 
**rollbacksFailed** | **Number** | Total number of failed rollbacks. | [optional] 
**validations** | **Number** | Total number of validations, which includes successful and failed validations. | [optional] 
**validationsSucceeded** | **Number** | Total number of successful validations. | [optional] 
**validationsFailed** | **Number** | Total number of failed validations. | [optional] 
**ordersAmount** | **Number** | Total amount of orders related to the campaign. This amount is not reduced by &#x60;orders_rolledback_amount&#x60;. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**ordersRolledbackAmount** | **Number** | Total amount of orders that were rolled back and are related to the campaign. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**vouchersCreated** | **Number** | Total number of vouchers created within the campaign. Includes vouchers generated when the campaign was created, vouchers added manually, or vouchers generated automatically when a new customer joined the campaign. | [optional] 
**vouchersDeleted** | **Number** | Total number of vouchers deleted within the campaign. Includes vouchers moved to the bin and vouchers deleted permanently. Vouchers moved to the bin and then deleted permanently are counted once. | [optional] 
**publications** | **Number** | Total number of publications, which includes successful and failed publications. | [optional] 
**publicationsSucceeded** | **Number** | Total number of successful publications. | [optional] 
**publicationsFailed** | **Number** | Total number of failed publications. | [optional] 
**discountedAmount** | **Number** | Total amount of discounts related to the campaign. This amount is not reduced by the &#x60;rolledback_discounted_amount&#x60;. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**rolledbackDiscountedAmount** | **Number** | Total amount of discounts orders that were rolled back and are related to the campaign. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**createdVouchersAmount** | **Number** | The total credit amount for all created gift cards. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**amountAdded** | **Number** | The total credit amount that was added. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**amountDeleted** | **Number** | The total credit amount that was deleted by deleting gift cards. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**amountRedeemed** | **Number** | The total credit amount that was redeemed. This amount is not reduced by the &#x60;amount_rolledback&#x60;. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**amountRolledback** | **Number** | The total credit amount that was rolled back. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**amountSubtracted** | **Number** | The total credit amount that was subtracted. The value is multiplied by &#x60;100&#x60; to precisely represent 2 decimal places. For example, &#x60;$10&#x60; is represented as &#x60;1000&#x60;. | [optional] 
**createdVouchersPoints** | **Number** | Total number of points added to newly created loyalty cards. This also counts points added for the loyalty cards which are created by importing a CSV file to a campaign. | [optional] 
**pointsDeleted** | **Number** | Total number of points that were deleted. | [optional] 
**pointsSubtracted** | **Number** | Total number of points that were subtracted. | [optional] 
**pointsAdded** | **Number** | Total number of points that were added. This includes points added manually or automatically by redeeming a reward that adds loyalty points to cards in this campaign. | [optional] 
**pointsRewarded** | **Number** | Total number of points that were rewarded to loyalty cards through earning rules. This includes pending points that were activated. | [optional] 
**pointsRedeemed** | **Number** | Total number of points that were redeemed for rewards. | [optional] 
**pointsRolledback** | **Number** | Total number of points that were rolled back for reward redemptions. | [optional] 
**pointsExpired** | **Number** | Total number of points that have expired. | [optional] 
**pointsTransferredOut** | **Number** | Total number of points transferred out of loyalty cards covered by the campaign. | [optional] 
**pointsTransferredIn** | **Number** | Total number of points transferred into loyalty cards covered by the campaign. | [optional] 
**pendingPointsAdded** | **Number** | Total number of pending points that were added either as part of earning rules or added manually to an existing pending point bucket. Pending points that were activated manually or automatically or that were canceled do not affect this number. | [optional] 
**pendingPointsSubtracted** | **Number** | Total number of pending points that were subtracted from existing pending point buckets. | [optional] 
**pendingPointsActivated** | **Number** | Total number of pending points that were activated manually or automatically. | [optional] 
**pendingPointsCanceled** | **Number** | Total number of pending points that were canceled. | [optional] 
**referredCustomers** | **Number** | Total number of all referred customers. | [optional] 



## Enum: ObjectEnum


* `campaign_summary` (value: `"campaign_summary"`)




