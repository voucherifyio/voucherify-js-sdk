# Voucherify.ExportParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **String** |  | [optional] 
**fields** | **[String]** | Array of strings containing the data in the export. These fields define the headers in the CSV file. | [optional] 
**filters** | **Object** | Allowed additional properties must start with \&quot;metadata.\&quot; or \&quot;redemption.\&quot; and Allowed additional properties must start with \&quot;metadata.\&quot; and Allowed additional properties must start with \&quot;metadata.\&quot; or \&quot;address.\&quot; or \&quot;summary.\&quot; or \&quot;loyalty.\&quot; or \&quot;loyalty_tier.\&quot; or \&quot;loyalty_points.\&quot; or \&quot;system_metadata.\&quot; | [optional] 
**campaignId** | **String** | Unique identifier of the campaign. It is assigned by Voucherify. The campaign ID defines the campaign for which the voucher export will be triggered. | [optional] 



## Enum: OrderEnum


* `-created_at` (value: `"-created_at"`)

* `created_at` (value: `"created_at"`)

* `-updated_at` (value: `"-updated_at"`)

* `updated_at` (value: `"updated_at"`)

* `-code` (value: `"-code"`)

* `code` (value: `"code"`)

* `-id` (value: `"-id"`)

* `id` (value: `"id"`)

* `-voucher_code` (value: `"-voucher_code"`)

* `voucher_code` (value: `"voucher_code"`)

* `-tracking_id` (value: `"-tracking_id"`)

* `tracking_id` (value: `"tracking_id"`)

* `-customer_id` (value: `"-customer_id"`)

* `customer_id` (value: `"customer_id"`)

* `-name` (value: `"-name"`)

* `name` (value: `"name"`)

* `-email` (value: `"-email"`)

* `email` (value: `"email"`)

* `-source_id` (value: `"-source_id"`)

* `source_id` (value: `"source_id"`)

* `-channel` (value: `"-channel"`)

* `channel` (value: `"channel"`)

* `-status` (value: `"-status"`)

* `status` (value: `"status"`)

* `-expires_at` (value: `"-expires_at"`)

* `expires_at` (value: `"expires_at"`)





## Enum: [FieldsEnum]


* `code` (value: `"code"`)

* `voucher_type` (value: `"voucher_type"`)

* `value` (value: `"value"`)

* `formula` (value: `"formula"`)

* `discount_type` (value: `"discount_type"`)

* `campaign` (value: `"campaign"`)

* `category` (value: `"category"`)

* `start_date` (value: `"start_date"`)

* `expiration_date` (value: `"expiration_date"`)

* `gift_balance` (value: `"gift_balance"`)

* `loyalty_balance` (value: `"loyalty_balance"`)

* `redemption_quantity` (value: `"redemption_quantity"`)

* `redemption_count` (value: `"redemption_count"`)

* `active` (value: `"active"`)

* `qr_code` (value: `"qr_code"`)

* `bar_code` (value: `"bar_code"`)

* `metadata` (value: `"metadata"`)

* `id` (value: `"id"`)

* `is_referral_code` (value: `"is_referral_code"`)

* `created_at` (value: `"created_at"`)

* `updated_at` (value: `"updated_at"`)

* `validity_timeframe_interval` (value: `"validity_timeframe_interval"`)

* `validity_timeframe_duration` (value: `"validity_timeframe_duration"`)

* `validity_day_of_week` (value: `"validity_day_of_week"`)

* `discount_amount_limit` (value: `"discount_amount_limit"`)

* `campaign_id` (value: `"campaign_id"`)

* `additional_info` (value: `"additional_info"`)

* `customer_id` (value: `"customer_id"`)

* `discount_effect` (value: `"discount_effect"`)

* `discount_unit_type` (value: `"discount_unit_type"`)

* `discount_unit_effect` (value: `"discount_unit_effect"`)

* `validation_rules_id` (value: `"validation_rules_id"`)

* `customer_source_id` (value: `"customer_source_id"`)

* `object` (value: `"object"`)

* `date` (value: `"date"`)

* `voucher_code` (value: `"voucher_code"`)

* `promotion_tier_id` (value: `"promotion_tier_id"`)

* `customer_name` (value: `"customer_name"`)

* `tracking_id` (value: `"tracking_id"`)

* `order_id` (value: `"order_id"`)

* `order_amount` (value: `"order_amount"`)

* `gift_amount` (value: `"gift_amount"`)

* `loyalty_points` (value: `"loyalty_points"`)

* `result` (value: `"result"`)

* `failure_code` (value: `"failure_code"`)

* `failure_message` (value: `"failure_message"`)

* `name` (value: `"name"`)

* `description` (value: `"description"`)

* `email` (value: `"email"`)

* `source_id` (value: `"source_id"`)

* `address_city` (value: `"address_city"`)

* `address_state` (value: `"address_state"`)

* `address_line_1` (value: `"address_line_1"`)

* `address_line_2` (value: `"address_line_2"`)

* `address_country` (value: `"address_country"`)

* `address_postal_code` (value: `"address_postal_code"`)

* `redemptions_total_redeemed` (value: `"redemptions_total_redeemed"`)

* `redemptions_total_failed` (value: `"redemptions_total_failed"`)

* `redemptions_total_succeeded` (value: `"redemptions_total_succeeded"`)

* `redemptions_total_rolled_back` (value: `"redemptions_total_rolled_back"`)

* `redemptions_total_rollback_failed` (value: `"redemptions_total_rollback_failed"`)

* `redemptions_total_rollback_succeeded` (value: `"redemptions_total_rollback_succeeded"`)

* `orders_total_amount` (value: `"orders_total_amount"`)

* `orders_total_count` (value: `"orders_total_count"`)

* `orders_average_amount` (value: `"orders_average_amount"`)

* `orders_last_order_amount` (value: `"orders_last_order_amount"`)

* `orders_last_order_date` (value: `"orders_last_order_date"`)

* `loyalty_referred_customers` (value: `"loyalty_referred_customers"`)

* `phone` (value: `"phone"`)

* `birthday` (value: `"birthday"`)

* `birthdate` (value: `"birthdate"`)

* `channel` (value: `"channel"`)

* `is_winner` (value: `"is_winner"`)

* `status` (value: `"status"`)

* `amount` (value: `"amount"`)

* `discount_amount` (value: `"discount_amount"`)

* `items_discount_amount` (value: `"items_discount_amount"`)

* `total_discount_amount` (value: `"total_discount_amount"`)

* `total_amount` (value: `"total_amount"`)

* `referrer_id` (value: `"referrer_id"`)

* `voucher_id` (value: `"voucher_id"`)

* `points` (value: `"points"`)

* `expires_at` (value: `"expires_at"`)

* `type` (value: `"type"`)

* `reason` (value: `"reason"`)

* `source` (value: `"source"`)

* `balance` (value: `"balance"`)

* `related_transaction_id` (value: `"related_transaction_id"`)

* `details` (value: `"details"`)




