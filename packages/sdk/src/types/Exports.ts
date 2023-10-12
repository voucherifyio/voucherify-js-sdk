export interface ExportResource {
	exported_object: 'voucher' | 'redemption' | 'publication' | 'customer'
	parameters?: {
		order?: string
		fields?: string[]
		filters?: {
			junction?: 'AND' | 'OR'
			[filter_condition: string]: any
		}
	}
}

export interface ExportsCreateResponse {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel?: string
	exported_object: 'voucher' | 'redemption' | 'publication' | 'customer'
	parameters?: {
		fields?: string[]
		filters?: {
			junction?: string
			[filter_condition: string]: any
		}
	}
	result?: {
		url: string
	}
}

export type ExportsGetResponse = ExportsCreateResponse

// 0-level types

export interface ExportsListRequestQuery {
	limit?: number
	order?: 'created_at' | '-created_at' | 'status' | '-status'
	page?: number
}

export interface ExportsListResponseBody {
	object: 'list'
	data_ref: 'exports'
	exports: Export[]
	total: number
}

// domain types

export interface ExportBase {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel?: string
	result: {
		url: string
	} | null
	user_id: string | null
}

export type Export = ExportBase &
	(
		| ExportVoucher
		| ExportRedemption
		| ExportCustomer
		| ExportPublication
		| ExportOrder
		| ExportPointsExpiration
		| ExportVoucherTransactionsExpiration
	)

export type FieldConditions = { conditions?: Partial<Record<FiltersCondition, unknown>> }

export interface ExportVoucher {
	exported_object: 'voucher'
	parameters: {
		order?: ExportVoucherOrder
		fields?: ExportVoucherFields[]
		filters?: ExportVoucherFilters
	}
}

export type ExportVoucherFilters = {
	junction?: Junction
} & Partial<Record<ExportVoucherFields, FieldConditions>>

export interface ExportRedemption {
	exported_object: 'redemption'
	parameters: {
		order?: ExportRedemptionOrder
		fields?: ExportRedemptionFields[]
		filters?: ExportRedemptionFilters
	}
}

export type ExportRedemptionFilters = {
	junction?: Junction
} & Partial<Record<ExportRedemptionFields, FieldConditions>>

export interface ExportCustomer {
	exported_object: 'customer'
	parameters: {
		order?: ExportCustomerOrder
		fields?: ExportCustomerFields[]
		filters?: ExportCustomerFilters
	}
}

export type ExportCustomerFilters = {
	junction?: Junction
} & Partial<Record<ExportCustomerFields, FieldConditions>>

export interface ExportPublication {
	exported_object: 'publication'
	parameters: {
		order?: ExportPublicationOrder
		fields?: ExportPublicationFields[]
		filters?: ExportPublicationFilters
	}
}

export type ExportPublicationFilters = {
	junction?: Junction
} & Partial<Record<ExportPublicationFields, FieldConditions>>

export interface ExportOrder {
	exported_object: 'order'
	parameters: {
		order?: ExportOrderOrder
		fields?: ExportOrderFields[]
		filters?: ExportOrderFilters
	}
}

export type ExportOrderFilters = {
	junction?: Junction
} & Partial<Record<ExportOrderFields, FieldConditions>>

export interface ExportPointsExpiration {
	exported_object: 'points_expiration'
	parameters: {
		order?: ExportPointsExpirationOrder
		fields?: ExportPointsExpirationFields[]
		filters?: ExportPointsExpirationFilters
	}
}

export type ExportPointsExpirationFilters = {
	junction?: Junction
} & Partial<Record<ExportPointsExpirationFields, FieldConditions>>

export interface ExportVoucherTransactionsExpiration {
	exported_object: 'voucher_transactions'
	parameters: {
		order?: ExportVoucherTransactionsOrder
		fields?: ExportVoucherTransactionsFields[]
		filters?: ExportVoucherTransactionsFilters
	}
}

export type ExportVoucherTransactionsFilters = {
	junction?: Junction
} & Partial<Record<ExportVoucherTransactionsFields, FieldConditions>>

export type Junction = 'and' | 'AND' | 'or' | 'OR'

export type FiltersCondition =
	| '$in'
	| '$not_in'
	| '$is'
	| '$is_days_ago'
	| '$is_days_in_future'
	| '$is_not'
	| '$has_value'
	| '$is_unknown'
	| '$contains'
	| '$not_contain'
	| '$starts_with'
	| '$ends_with'
	| '$more_than'
	| '$less_than'
	| '$more_than_ago'
	| '$less_than_ago'
	| '$more_than_future'
	| '$less_than_future'
	| '$more_than_equal'
	| '$less_than_equal'
	| '$after'
	| '$before'
	| '$count'
	| '$count_less'
	| '$count_more'

export type ExportCustomerFields =
	| 'name'
	| 'id'
	| 'description'
	| 'email'
	| 'source_id'
	| 'created_at'
	| 'address_city'
	| 'address_state'
	| 'address_line_1'
	| 'address_line_2'
	| 'address_country'
	| 'address_postal_code'
	| 'redemptions_total_redeemed'
	| 'redemptions_total_failed'
	| 'redemptions_total_succeeded'
	| 'redemptions_total_rolled_back'
	| 'redemptions_total_rollback_failed'
	| 'redemptions_total_rollback_succeeded'
	| 'orders_total_amount'
	| 'orders_total_count'
	| 'orders_average_amount'
	| 'orders_last_order_amount'
	| 'orders_last_order_date'
	| 'loyalty_points'
	| 'loyalty_referred_customers'
	| 'updated_at'
	| 'phone'
	| 'birthday'
	| 'metadata'
	| 'birthdate'

export type ExportCustomerOrder =
	| ExportCustomerFields
	| '-name'
	| '-id'
	| '-description'
	| '-email'
	| '-source_id'
	| '-created_at'
	| '-address_city'
	| '-address_state'
	| '-address_line_1'
	| '-address_line_2'
	| '-address_country'
	| '-address_postal_code'
	| '-redemptions_total_redeemed'
	| '-redemptions_total_failed'
	| '-redemptions_total_succeeded'
	| '-redemptions_total_rolled_back'
	| '-redemptions_total_rollback_failed'
	| '-redemptions_total_rollback_succeeded'
	| '-orders_total_amount'
	| '-orders_total_count'
	| '-orders_average_amount'
	| '-orders_last_order_amount'
	| '-orders_last_order_date'
	| '-loyalty_points'
	| '-loyalty_referred_customers'
	| '-updated_at'
	| '-phone'
	| '-birthday'
	| '-metadata'
	| '-birthdate'

export type ExportPublicationFields =
	| 'voucher_code'
	| 'customer_id'
	| 'customer_source_id'
	| 'date'
	| 'channel'
	| 'campaign'
	| 'is_winner'
	| 'metadata'

export type ExportPublicationOrder =
	| ExportPublicationFields
	| '-voucher_code'
	| '-customer_id'
	| '-customer_source_id'
	| '-date'
	| '-channel'
	| '-campaign'
	| '-is_winner'
	| '-metadata'

export type ExportRedemptionFields =
	| 'id'
	| 'object'
	| 'date'
	| 'voucher_code'
	| 'campaign'
	| 'promotion_tier_id'
	| 'customer_id'
	| 'customer_source_id'
	| 'customer_name'
	| 'tracking_id'
	| 'order_amount'
	| 'gift_amount'
	| 'loyalty_points'
	| 'result'
	| 'failure_code'
	| 'failure_message'
	| 'metadata'

export type ExportRedemptionOrder =
	| ExportRedemptionFields
	| '-id'
	| '-object'
	| '-date'
	| '-voucher_code'
	| '-campaign'
	| '-promotion_tier_id'
	| '-customer_id'
	| '-customer_source_id'
	| '-customer_name'
	| '-tracking_id'
	| '-order_amount'
	| '-gift_amount'
	| '-loyalty_points'
	| '-result'
	| '-failure_code'
	| '-failure_message'
	| '-metadata'

export type ExportVoucherFields =
	| 'code'
	| 'voucher_type'
	| 'value'
	| 'discount_type'
	| 'campaign'
	| 'category'
	| 'start_date'
	| 'expiration_date'
	| 'gift_balance'
	| 'loyalty_balance'
	| 'redemption_quantity'
	| 'redemption_count'
	| 'active'
	| 'qr_code'
	| 'bar_code'
	| 'metadata'
	| 'id'
	| 'is_referral_code'
	| 'created_at'
	| 'updated_at'
	| 'validity_timeframe_interval'
	| 'validity_timeframe_duration'
	| 'validity_day_of_week'
	| 'discount_amount_limit'
	| 'campaign_id'
	| 'additional_info'
	| 'customer_id'
	| 'discount_unit_type'
	| 'discount_unit_effect'
	| 'customer_source_id'

export type ExportVoucherOrder =
	| ExportVoucherFields
	| '-code'
	| '-voucher_type'
	| '-value'
	| '-discount_type'
	| '-campaign'
	| '-category'
	| '-start_date'
	| '-expiration_date'
	| '-gift_balance'
	| '-loyalty_balance'
	| '-redemption_quantity'
	| '-redemption_count'
	| '-active'
	| '-qr_code'
	| '-bar_code'
	| '-metadata'
	| '-id'
	| '-is_referral_code'
	| '-created_at'
	| '-updated_at'
	| '-validity_timeframe_interval'
	| '-validity_timeframe_duration'
	| '-validity_day_of_week'
	| '-discount_amount_limit'
	| '-campaign_id'
	| '-additional_info'
	| '-customer_id'
	| '-discount_unit_type'
	| '-discount_unit_effect'
	| '-customer_source_id'

export type ExportOrderFields =
	| 'id'
	| 'source_id'
	| 'created_at'
	| 'updated_at'
	| 'status'
	| 'amount'
	| 'discount_amount'
	| 'items_discount_amount'
	| 'total_discount_amount'
	| 'total_amount'
	| 'customer_id'
	| 'referrer_id'
	| 'metadata'

export type ExportOrderOrder =
	| ExportOrderFields
	| '-id'
	| '-source_id'
	| '-created_at'
	| '-updated_at'
	| '-status'
	| '-amount'
	| '-discount_amount'
	| '-items_discount_amount'
	| '-total_discount_amount'
	| '-total_amount'
	| '-customer_id'
	| '-referrer_id'
	| '-metadata'

export type ExportPointsExpirationFields = 'id' | 'campaign_id' | 'voucher_id' | 'points' | 'status' | 'expires_at'

export type ExportPointsExpirationOrder =
	| ExportPointsExpirationFields
	| '-id'
	| '-campaign_id'
	| '-voucher_id'
	| '-points'
	| '-status'
	| '-expires_at'

export type ExportVoucherTransactionsFields =
	| 'id'
	| 'campaign_id'
	| 'voucher_id'
	| 'type'
	| 'source_id'
	| 'reason'
	| 'source'
	| 'balance'
	| 'amount'
	| 'related_transaction_id'
	| 'created_at'
	| 'details'

export type ExportVoucherTransactionsOrder =
	| ExportVoucherTransactionsFields
	| '-id'
	| '-campaign_id'
	| '-voucher_id'
	| '-type'
	| '-source_id'
	| '-reason'
	| '-source'
	| '-balance'
	| '-amount'
	| '-related_transaction_id'
	| '-created_at'
	| '-details'
