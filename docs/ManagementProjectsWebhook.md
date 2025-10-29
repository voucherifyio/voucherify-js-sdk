# Voucherify.ManagementProjectsWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the webhook. | [optional] 
**object** | **String** | The type of the object represented by JSON. | [optional] [default to &#39;webhook&#39;]
**createdAt** | **Date** | Timestamp representing the date and time when the webhook configuration was created. The value for this parameter is shown in the ISO 8601 format. | [optional] 
**targetUrl** | **String** | URL address that receives webhooks. | [optional] 
**events** | **[String]** | Lists the events that trigger webhook sendout. | [optional] 
**active** | **Boolean** | Determines if the webhook configuration is active. | [optional] [default to true]



## Enum: ObjectEnum


* `webhook` (value: `"webhook"`)





## Enum: [EventsEnum]


* `business_validation_rule.assignment.created` (value: `"business_validation_rule.assignment.created"`)

* `business_validation_rule.assignment.deleted` (value: `"business_validation_rule.assignment.deleted"`)

* `business_validation_rule.created` (value: `"business_validation_rule.created"`)

* `business_validation_rule.deleted` (value: `"business_validation_rule.deleted"`)

* `business_validation_rule.updated` (value: `"business_validation_rule.updated"`)

* `campaign.created` (value: `"campaign.created"`)

* `campaign.deleted` (value: `"campaign.deleted"`)

* `campaign.disabled` (value: `"campaign.disabled"`)

* `campaign.enabled` (value: `"campaign.enabled"`)

* `campaign.earning_rule.assigned` (value: `"campaign.earning_rule.assigned"`)

* `campaign.earning_rule.deleted` (value: `"campaign.earning_rule.deleted"`)

* `campaign.earning_rule.disabled` (value: `"campaign.earning_rule.disabled"`)

* `campaign.earning_rule.enabled` (value: `"campaign.earning_rule.enabled"`)

* `campaign.earning_rule.updated` (value: `"campaign.earning_rule.updated"`)

* `campaign.loyalty_tier.created` (value: `"campaign.loyalty_tier.created"`)

* `campaign.loyalty_tier.deleted` (value: `"campaign.loyalty_tier.deleted"`)

* `campaign.loyalty_tier.updated` (value: `"campaign.loyalty_tier.updated"`)

* `campaign.promotion_stack.created` (value: `"campaign.promotion_stack.created"`)

* `campaign.promotion_stack.updated` (value: `"campaign.promotion_stack.updated"`)

* `campaign.promotion_tier.created` (value: `"campaign.promotion_tier.created"`)

* `campaign.promotion_tier.deleted` (value: `"campaign.promotion_tier.deleted"`)

* `campaign.promotion_tier.disabled` (value: `"campaign.promotion_tier.disabled"`)

* `campaign.promotion_tier.enabled` (value: `"campaign.promotion_tier.enabled"`)

* `campaign.promotion_tier.updated` (value: `"campaign.promotion_tier.updated"`)

* `campaign.referral_tier.created` (value: `"campaign.referral_tier.created"`)

* `campaign.referral_tier.deleted` (value: `"campaign.referral_tier.deleted"`)

* `campaign.referral_tier.updated` (value: `"campaign.referral_tier.updated"`)

* `campaign.reward.assignment.created` (value: `"campaign.reward.assignment.created"`)

* `campaign.reward.assignment.deleted` (value: `"campaign.reward.assignment.deleted"`)

* `campaign.reward.assignment.updated` (value: `"campaign.reward.assignment.updated"`)

* `campaign.updated` (value: `"campaign.updated"`)

* `campaign.vouchers.aded` (value: `"campaign.vouchers.aded"`)

* `campaign.vouchers.generation.completed` (value: `"campaign.vouchers.generation.completed"`)

* `campaign.vouchers.generation.failed` (value: `"campaign.vouchers.generation.failed"`)

* `campaign.vouchers.generation.started` (value: `"campaign.vouchers.generation.started"`)

* `customer.confirmed` (value: `"customer.confirmed"`)

* `customer.created` (value: `"customer.created"`)

* `customer.deleted` (value: `"customer.deleted"`)

* `customer.rewarded` (value: `"customer.rewarded"`)

* `customer.rewarded.loyalty_points` (value: `"customer.rewarded.loyalty_points"`)

* `publication.succeeded` (value: `"publication.succeeded"`)

* `redemption.failed` (value: `"redemption.failed"`)

* `redemption.rollback.failed` (value: `"redemption.rollback.failed"`)

* `redemption.rollback.succeeded` (value: `"redemption.rollback.succeeded"`)

* `redemption.succeeded` (value: `"redemption.succeeded"`)

* `voucher.created` (value: `"voucher.created"`)

* `voucher.deleted` (value: `"voucher.deleted"`)

* `voucher.disabled` (value: `"voucher.disabled"`)

* `voucher.enabled` (value: `"voucher.enabled"`)

* `voucher.gift.balance_aded` (value: `"voucher.gift.balance_aded"`)

* `voucher.gift.transaction.created` (value: `"voucher.gift.transaction.created"`)

* `voucher.loyalty_card.pending_points.activated` (value: `"voucher.loyalty_card.pending_points.activated"`)

* `voucher.loyalty_card.pending_points.aded` (value: `"voucher.loyalty_card.pending_points.aded"`)

* `voucher.loyalty_card.pending_points.canceled` (value: `"voucher.loyalty_card.pending_points.canceled"`)

* `voucher.loyalty_card.pending_points.updated` (value: `"voucher.loyalty_card.pending_points.updated"`)

* `voucher.loyalty_card.points_aded` (value: `"voucher.loyalty_card.points_aded"`)

* `voucher.loyalty_card.points_expired` (value: `"voucher.loyalty_card.points_expired"`)

* `voucher.loyalty_card.transaction.created` (value: `"voucher.loyalty_card.transaction.created"`)

* `voucher.published` (value: `"voucher.published"`)

* `voucher.updated` (value: `"voucher.updated"`)




