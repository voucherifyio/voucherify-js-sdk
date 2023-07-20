export interface ListExportQuery {
	limit: number
	order: 'created_at' | '-created_at' | 'status' | '-status'
	page: number
}

export interface ListExport {
	object: 'list'
	data_ref: 'exports'
	exports: ExportObject[]
	total: number
}

export interface CreateExport {
	exported_object:
		| 'order'
		| 'voucher'
		| 'publication'
		| 'redemption'
		| 'customer'
		| 'points_expiration'
		| 'voucher_transactions'
	parameters:
		| ExportOrder
		| ExportVoucher
		| ExportPublication
		| ExportRedemption
		| ExportCustomer
		| ExportPointsExpiration
		| ExportGiftCardTransactions
		| ExportLoyaltyCardTransactions
}

export interface ExportObject {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel: 'API' | 'WEBSITE'
	exported_object:
		| 'order'
		| 'voucher'
		| 'publication'
		| 'redemption'
		| 'customer'
		| 'points_expiration'
		| 'voucher_transactions'
	parameters:
		| ExportOrder
		| ExportVoucher
		| ExportPublication
		| ExportRedemption
		| ExportCustomer
		| ExportPointsExpiration
		| ExportGiftCardTransactions
		| ExportLoyaltyCardTransactions
	result: {
		url: string
	}
	user_id: string
}

interface ExportOrder {
	order: '-created_at' | 'created_at' | 'updated_at' | '-updated_at' | 'status' | '-status'
	fields: (
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
	)[]
	filters:
		| FilterOrderStatus
		| FilterOrderSourceId
		| FilterOrderAmount
		| FilterOrderTotalAmount
		| FilterOrderDiscountAmount
		| FilterOrderTotalDiscountAmount
		| FilterOrderItemsDiscountAmount
}

interface ExportVoucher {
	order: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'code' | '-code'
	fields: (
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
		| 'metadata'
	)[]
	filters: Record<string, any>
}

interface ExportPublication {
	order:
		| 'id'
		| '-id'
		| 'voucher_code'
		| '-voucher_code'
		| 'tracking_id'
		| '-tracking_id'
		| 'customer_id'
		| '-customer_id'
		| 'created_at'
		| '-created_at'
		| 'channel'
		| '-channel'
	fields: (
		| 'voucher_code'
		| 'customer_id'
		| 'customer_source_id'
		| 'date'
		| 'channel'
		| 'campaign'
		| 'is_winner'
		| 'metadata'
	)[]
	filters:
		| FilterPublicationFailureCode
		| FilterPublicationResult
		| FilterPublicationCustomerId
		| FilterPublicationCampaignName
		| FilterVoucherType
		| FilterIsReferralCode
		| FilterParentObjectId
		| FilterRelatedObjectId
		| FilterPublicationSourceId
}

interface ExportRedemption {
	order:
		| 'id'
		| '-id'
		| 'voucher_code'
		| '-voucher_code'
		| 'tracking_id'
		| '-tracking_id'
		| 'customer_id'
		| '-customer_id'
		| 'created_at'
		| '-created_at'
	fields: (
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
	)[]
	filters: Record<string, any>
}

interface ExportCustomer {
	order:
		| 'name'
		| '-name'
		| 'id'
		| '-id'
		| 'email'
		| '-email'
		| 'source_id'
		| '-source_id'
		| 'created_at'
		| '-created_at'
		| 'updated_at'
		| '-updated_at'
	fields: (
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
	)[]
	filters: Record<string, any>
}

interface ExportPointsExpiration {
	order: 'expires_at' | '-expires_at'
	fields: ('id' | 'campaign_id' | 'voucher_id' | 'status' | 'expires_at' | 'points')[]
	filters: FilterPointsExpirationCampaignId | FilterPointsExpirationVoucherId
}

interface ExportGiftCardTransactions {
	order: '-created_at' | 'created_at'
	fields: (
		| 'id'
		| 'type'
		| 'source_id'
		| 'reason'
		| 'balance'
		| 'amount'
		| 'created_at'
		| 'voucher_id'
		| 'campaign_id'
		| 'source'
		| 'details'
	)[]
	filters: FilterGiftCardTransactionsVoucherId
}

interface ExportLoyaltyCardTransactions {
	order: '-created_at' | 'created_at'
	fields: (
		| 'id'
		| 'type'
		| 'source_id'
		| 'reason'
		| 'balance'
		| 'amount'
		| 'created_at'
		| 'voucher_id'
		| 'campaign_id'
		| 'details'
		| 'related_transaction_id'
	)[]
	filters: FilterLoyaltyCardTransactionsVoucherId
}

interface FilterPointsExpirationCampaignId {
	campaign_id?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterPointsExpirationVoucherId {
	voucher_id?: FilterConditionsString
	junction?: FilterJunction
}
type FilterGiftCardTransactionsVoucherId = FilterPointsExpirationVoucherId
type FilterLoyaltyCardTransactionsVoucherId = FilterPointsExpirationVoucherId
interface FilterPublicationFailureCode {
	failure_code?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterPublicationResult {
	result?: FilterConditionsString //16_filter_conditions_string
	junction?: FilterJunction
}

interface FilterPublicationCustomerId {
	customer_id?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterPublicationCampaignName {
	campaign_name?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterOrderStatus {
	status?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterVoucherType {
	voucher_type?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterIsReferralCode {
	is_referral_code?: FilterConditionsBoolean
	junction?: FilterJunction
}

interface FilterParentObjectId {
	parent_object_id?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterRelatedObjectId {
	related_object_id?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterPublicationSourceId {
	source_id?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterConditionsBoolean {
	conditions: {
		$is: string
		$is_not: string
		$has_value: string
		$is_unknown: string
	}
}

interface FilterConditionsString {
	conditions: {
		$in?: string[]
		$not_in?: string[]
		$is?: string
		$is_not?: string
		$has_value?: string
		$is_unknown?: string
		$starts_with?: string
		$ends_with?: string
	}
}

type FilterJunction = 'AND' | 'OR'
interface FilterOrderSourceId {
	source_id?: FilterConditionsString //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

interface FilterOrderAmount {
	amount?: FilterConditionsNumber //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

interface FilterConditionsNumber {
	conditions: {
		$in?: number[]
		$not_in?: number[]
		$is?: number
		$is_not?: number
		$has_value?: string
		$is_unknown?: string
		$more_than?: number
		$more_than_equal?: number
		$less_than?: number
		$less_than_equal?: number
	}
}

interface FilterOrderTotalAmount {
	total_amount?: FilterConditionsNumber //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

interface FilterOrderDiscountAmount {
	discount_amount?: FilterConditionsNumber //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

interface FilterOrderDiscountAmount {
	discount_amount?: FilterConditionsNumber //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

interface FilterOrderTotalDiscountAmount {
	total_discount_amount?: FilterConditionsNumber //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

interface FilterOrderItemsDiscountAmount {
	items_discount_amount?: FilterConditionsNumber //16_filter_conditions_string
	junction?: FilterJunction //16_filter_junction
}

export type ExportsGetResponse = ExportsCreateResponse
