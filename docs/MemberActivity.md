# Voucherify.MemberActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique event ID, assigned by Voucherify. | [optional] 
**type** | **String** | Event type. | [optional] 
**data** | [**MemberActivityData1**](MemberActivityData1.md) |  | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the member activity occurred in ISO 8601 format. | [optional] 
**groupId** | **String** | Unique identifier of the request that caused the event. | [optional] 



## Enum: TypeEnum


* `customer.loyalty.tier.upgraded` (value: `"customer.loyalty.tier.upgraded"`)

* `customer.loyalty.tier.downgraded` (value: `"customer.loyalty.tier.downgraded"`)

* `customer.loyalty.tier.prolonged` (value: `"customer.loyalty.tier.prolonged"`)

* `customer.loyalty.tier.expiration.changed` (value: `"customer.loyalty.tier.expiration.changed"`)

* `customer.loyalty.tier.joined` (value: `"customer.loyalty.tier.joined"`)

* `customer.loyalty.tier.left` (value: `"customer.loyalty.tier.left"`)

* `customer.publication.succeeded` (value: `"customer.publication.succeeded"`)

* `customer.publication.failed` (value: `"customer.publication.failed"`)

* `customer.redemption.failed` (value: `"customer.redemption.failed"`)

* `customer.redemption.succceeded` (value: `"customer.redemption.succceeded"`)

* `customer.redemption.rollback.failed` (value: `"customer.redemption.rollback.failed"`)

* `customer.redemption.rollback.succceeded` (value: `"customer.redemption.rollback.succceeded"`)

* `customer.rewarded` (value: `"customer.rewarded"`)

* `customer.rewarded.loyalty_points` (value: `"customer.rewarded.loyalty_points"`)

* `customer.reward_redemptions.created` (value: `"customer.reward_redemptions.created"`)

* `customer.reward_redemptions.pending` (value: `"customer.reward_redemptions.pending"`)

* `customer.reward_redemptions.completed` (value: `"customer.reward_redemptions.completed"`)

* `customer.reward_redemptions.rolledback` (value: `"customer.reward_redemptions.rolledback"`)

* `customer.voucher.deleted` (value: `"customer.voucher.deleted"`)

* `customer.voucher.loyalty_card.pending_points.activated` (value: `"customer.voucher.loyalty_card.pending_points.activated"`)

* `customer.voucher.loyalty_card.pending_points.added` (value: `"customer.voucher.loyalty_card.pending_points.added"`)

* `customer.voucher.loyalty_card.pending_points.canceled` (value: `"customer.voucher.loyalty_card.pending_points.canceled"`)

* `customer.voucher.loyalty_card.pending_points.updated` (value: `"customer.voucher.loyalty_card.pending_points.updated"`)

* `customer.voucher.loyalty_card.points_added` (value: `"customer.voucher.loyalty_card.points_added"`)

* `customer.voucher.loyalty_card.points_transferred` (value: `"customer.voucher.loyalty_card.points_transferred"`)

* `customer.voucher.loyalty_card.points_expired` (value: `"customer.voucher.loyalty_card.points_expired"`)




