# Voucherify.ValidationRulesUpdateResponseBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Custom, unique name for set of validation rules. | [optional] 
**rules** | **Object** | Contains all the rule definitions for the validation rule. It is a set of key value pairs representing the rules and logic between the rules. The keys are numbered consecutively beginning from &#x60;1&#x60;. The values are objects containing the rule conditions. | [optional] 
**bundleRules** | **Object** | Contains all the definitions for the bundle rules. It is a set of key value pairs representing the rules and logic between them. The keys are numbered consecutively beginning from &#x60;1&#x60;. The values are objects containing the rule conditions.  While updating with the PUT method, you can pass &#x60;\&quot;bundle_rules\&quot;: null&#x60; to delete the configuration; in the response, an empty object is then returned. | [optional] 
**error** | [**ValidationRulesUpdateResponseBodyError**](ValidationRulesUpdateResponseBodyError.md) |  | [optional] 
**applicableTo** | [**ValidationRulesUpdateResponseBodyApplicableTo**](ValidationRulesUpdateResponseBodyApplicableTo.md) |  | [optional] 
**type** | **String** | Type of validation rule. | [optional] [default to &#39;expression&#39;]
**contextType** | **String** | Validation rule context type.    | **Context Type** | **Definition** | |:---|:---| | earning_rule.order.paid |  | | earning_rule.custom_event |  | | earning_rule.customer.segment.entered |  | | campaign.discount_coupons |  | | campaign.discount_coupons.discount.apply_to_order |  | | campaign.discount_coupons.discount.apply_to_items |  | | campaign.discount_coupons.discount.apply_to_items_proportionally |  | | campaign.discount_coupons.discount.apply_to_items_proportionally_by_quantity |  | | campaign.discount_coupons.discount.fixed.apply_to_items |  | | campaign.gift_vouchers |  | | campaign.gift_vouchers.gift.apply_to_order |  | | campaign.gift_vouchers.gift.apply_to_items |  | | campaign.referral_program |  | | campaign.referral_program.discount.apply_to_order |  | | campaign.referral_program.discount.apply_to_items |  | | campaign.referral_program.discount.apply_to_items_proportionally |  | | campaign.referral_program.discount.apply_to_items_proportionally_by_quantity |  | | campaign.referral_program.discount.fixed.apply_to_items |  | | campaign.promotion |  | | campaign.promotion.discount.apply_to_order |  | | campaign.promotion.discount.apply_to_items |  | | campaign.promotion.discount.apply_to_items_proportionally |  | | campaign.promotion.discount.apply_to_items_proportionally_by_quantity |  | | campaign.promotion.discount.fixed.apply_to_items |  | | campaign.loyalty_program |  | | voucher.discount_voucher |  | | voucher.discount_voucher.discount.apply_to_order |  | | voucher.discount_voucher.discount.apply_to_items |  | | voucher.discount_voucher.discount.apply_to_items_proportionally |  | | voucher.discount_voucher.discount.apply_to_items_proportionally_by_quantity |  | | voucher.discount_voucher.discount.fixed.apply_to_items |  | | voucher.gift_voucher |  | | voucher.gift_voucher.gift.apply_to_order |  | | voucher.gift_voucher.gift.apply_to_items |  | | voucher.loyalty_card |  | | distribution.custom_event |  | | reward_assignment.pay_with_points |  | | global |  | | [optional] [default to &#39;global&#39;]
**id** | **String** | Unique validation rule ID. | [optional] 
**createdAt** | **Date** | Timestamp representing the date and time when the validation rule was created. The value is shown in the ISO 8601 format. | [optional] 
**updatedAt** | **Date** | Timestamp representing the date and time when the validation rule was updated. The value is shown in the ISO 8601 format. | [optional] 
**assignmentsCount** | **Number** | The number of instances the validation rule has been assigned to different types of redeemables. | [optional] 
**object** | **String** | The type of the object represented by JSON. This object stores information about the validation rule. | [optional] [default to &#39;validation_rules&#39;]



## Enum: TypeEnum


* `expression` (value: `"expression"`)

* `basic` (value: `"basic"`)

* `advanced` (value: `"advanced"`)

* `complex` (value: `"complex"`)





## Enum: ContextTypeEnum


* `earning_rule.order.paid` (value: `"earning_rule.order.paid"`)

* `earning_rule.custom_event` (value: `"earning_rule.custom_event"`)

* `earning_rule.customer.segment.entered` (value: `"earning_rule.customer.segment.entered"`)

* `earning_rule.customer.tier.joined` (value: `"earning_rule.customer.tier.joined"`)

* `earning_rule.customer.tier.left` (value: `"earning_rule.customer.tier.left"`)

* `earning_rule.customer.tier.upgraded` (value: `"earning_rule.customer.tier.upgraded"`)

* `earning_rule.customer.tier.downgraded` (value: `"earning_rule.customer.tier.downgraded"`)

* `earning_rule.customer.tier.prolonged` (value: `"earning_rule.customer.tier.prolonged"`)

* `campaign.discount_coupons` (value: `"campaign.discount_coupons"`)

* `campaign.discount_coupons.discount.apply_to_order` (value: `"campaign.discount_coupons.discount.apply_to_order"`)

* `campaign.discount_coupons.discount.apply_to_items` (value: `"campaign.discount_coupons.discount.apply_to_items"`)

* `campaign.discount_coupons.discount.apply_to_items_proportionally` (value: `"campaign.discount_coupons.discount.apply_to_items_proportionally"`)

* `campaign.discount_coupons.discount.apply_to_items_proportionally_by_quantity` (value: `"campaign.discount_coupons.discount.apply_to_items_proportionally_by_quantity"`)

* `campaign.discount_coupons.discount.apply_to_items_by_quantity` (value: `"campaign.discount_coupons.discount.apply_to_items_by_quantity"`)

* `campaign.discount_coupons.discount.fixed.apply_to_items` (value: `"campaign.discount_coupons.discount.fixed.apply_to_items"`)

* `campaign.discount_coupons.discount.percent.apply_to_items` (value: `"campaign.discount_coupons.discount.percent.apply_to_items"`)

* `campaign.gift_vouchers` (value: `"campaign.gift_vouchers"`)

* `campaign.gift_vouchers.gift.apply_to_order` (value: `"campaign.gift_vouchers.gift.apply_to_order"`)

* `campaign.gift_vouchers.gift.apply_to_items` (value: `"campaign.gift_vouchers.gift.apply_to_items"`)

* `campaign.referral_program` (value: `"campaign.referral_program"`)

* `campaign.referral_program.discount.apply_to_order` (value: `"campaign.referral_program.discount.apply_to_order"`)

* `campaign.referral_program.discount.apply_to_items` (value: `"campaign.referral_program.discount.apply_to_items"`)

* `campaign.referral_program.discount.apply_to_items_proportionally` (value: `"campaign.referral_program.discount.apply_to_items_proportionally"`)

* `campaign.referral_program.discount.apply_to_items_proportionally_by_quantity` (value: `"campaign.referral_program.discount.apply_to_items_proportionally_by_quantity"`)

* `campaign.referral_program.discount.apply_to_items_by_quantity` (value: `"campaign.referral_program.discount.apply_to_items_by_quantity"`)

* `campaign.referral_program.discount.fixed.apply_to_items` (value: `"campaign.referral_program.discount.fixed.apply_to_items"`)

* `campaign.referral_program.discount.percent.apply_to_items` (value: `"campaign.referral_program.discount.percent.apply_to_items"`)

* `campaign.promotion` (value: `"campaign.promotion"`)

* `campaign.promotion.discount.apply_to_order` (value: `"campaign.promotion.discount.apply_to_order"`)

* `campaign.promotion.discount.apply_to_items` (value: `"campaign.promotion.discount.apply_to_items"`)

* `campaign.promotion.discount.apply_to_items_proportionally` (value: `"campaign.promotion.discount.apply_to_items_proportionally"`)

* `campaign.promotion.discount.apply_to_items_proportionally_by_quantity` (value: `"campaign.promotion.discount.apply_to_items_proportionally_by_quantity"`)

* `campaign.promotion.discount.apply_to_items_by_quantity` (value: `"campaign.promotion.discount.apply_to_items_by_quantity"`)

* `campaign.promotion.discount.fixed.apply_to_items` (value: `"campaign.promotion.discount.fixed.apply_to_items"`)

* `campaign.promotion.discount.percent.apply_to_items` (value: `"campaign.promotion.discount.percent.apply_to_items"`)

* `campaign.loyalty_program` (value: `"campaign.loyalty_program"`)

* `voucher.discount_voucher` (value: `"voucher.discount_voucher"`)

* `voucher.discount_voucher.discount.apply_to_order` (value: `"voucher.discount_voucher.discount.apply_to_order"`)

* `voucher.discount_voucher.discount.apply_to_items` (value: `"voucher.discount_voucher.discount.apply_to_items"`)

* `voucher.discount_voucher.discount.apply_to_items_proportionally` (value: `"voucher.discount_voucher.discount.apply_to_items_proportionally"`)

* `voucher.discount_voucher.discount.apply_to_items_proportionally_by_quantity` (value: `"voucher.discount_voucher.discount.apply_to_items_proportionally_by_quantity"`)

* `voucher.discount_voucher.discount.apply_to_items_by_quantity` (value: `"voucher.discount_voucher.discount.apply_to_items_by_quantity"`)

* `voucher.discount_voucher.discount.fixed.apply_to_items` (value: `"voucher.discount_voucher.discount.fixed.apply_to_items"`)

* `voucher.discount_voucher.discount.percent.apply_to_items` (value: `"voucher.discount_voucher.discount.percent.apply_to_items"`)

* `voucher.gift_voucher` (value: `"voucher.gift_voucher"`)

* `voucher.gift_voucher.gift.apply_to_order` (value: `"voucher.gift_voucher.gift.apply_to_order"`)

* `voucher.gift_voucher.gift.apply_to_items` (value: `"voucher.gift_voucher.gift.apply_to_items"`)

* `voucher.loyalty_card` (value: `"voucher.loyalty_card"`)

* `distribution.custom_event` (value: `"distribution.custom_event"`)

* `distribution.order.paid` (value: `"distribution.order.paid"`)

* `distribution.order.created` (value: `"distribution.order.created"`)

* `distribution.order.canceled` (value: `"distribution.order.canceled"`)

* `distribution.order.updated` (value: `"distribution.order.updated"`)

* `reward_assignment.pay_with_points` (value: `"reward_assignment.pay_with_points"`)

* `global` (value: `"global"`)




