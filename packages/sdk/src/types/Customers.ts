// Legacy code
import { DiscountUnit, DiscountAmount, DiscountPercent, DiscountFixed } from './DiscountVoucher'

export interface SimpleCustomer {
	id: string
	name?: string
	email?: string
	source_id?: string
	metadata?: Record<string, any>
	object: 'customer'
}

export interface CustomerObject {
	id: string
	source_id?: string
	name?: string
	email?: string
	phone?: string
	description?: string
	address: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	}
	summary: {
		redemptions: {
			total_redeemed: number
			total_failed: number
			total_succeeded: number
			total_rolled_back: number
			total_rollback_failed: number
			total_rollback_succeeded: number
			gift?: {
				redeemed_amount: number
				amount_to_go: number
			}
			loyalty?: {
				redeemed_points: number
				points_to_go: number
			}
		}
		orders: {
			total_amount: number
			total_count: number
			average_amount: number
			last_order_amount: number
			last_order_date?: string
		}
	}
	loyalty: {
		points: number
		referred_customers: number
		campaigns?: Record<
			string,
			{
				points: number
				referred_customers: number
			}
		>
	}
	metadata: Record<string, any>
	created_at: string
	object: 'customer'
}

export type CustomerUnconfirmed = Pick<CustomerObject, 'summary' | 'email' | 'loyalty'> & {
	object: 'unconfirmed_customer'
}
export interface CustomerRequest {
	id?: string
	source_id?: string
	name?: string
	description?: string
	email?: string
	phone?: string
	birthday?: string
	birthdate?: string
	address?: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	}
	metadata?: Record<string, any>
}

export interface CustomersCommonListRequest {
	limit?: number
	page?: number
	email?: string
	city?: string
	name?: string
	order?: 'created_at' | '-created_at'
	starting_after?: Date | string
}

export interface CustomersCommonListResponse {
	object: 'list'
	total: number
	data_ref: 'customers'
	customers: CustomerObject[]
	has_more?: boolean
}

export interface CustomerActivitiesListQueryParams {
	limit?: number
	order?: 'created_at' | '-created_at'
	starting_after?: string
	starting_after_id?: string
	campaign_type?: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	campaign_id?: string
}

export interface CustomerActivitiesListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: Record<string, any>[]
}

export interface CustomerRedeemablesListQueryParams {
	limit?: number
	order?: 'created_at' | '-created_at' | 'id' | '-id'
	starting_after_id?: string
	filters?: Record<string, any>
}

export interface CustomerRedeemablesListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: CustomerRedeemablesListItemResponse[]
	has_more: boolean
	more_starting_after?: string
}

export interface CustomerRedeemablesListItemResponse {
	id: string
	created_at: string
	redeemable_id: string
	redeemable_object: string
	customer_id: string
	holder_role: 'OWNER' | 'REFERRER' | 'REFEREE'
	campaign_id: string
	campaign_type: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	voucher_type: 'GIFT_VOUCHER' | 'DISCOUNT_VOUCHER' | 'LOYALTY_CARD'
	redeemable: CustomerRedeemablesListItemContainerResponse
}

export interface CustomerRedeemablesListItemContainerVoucherResponse {
	id: string
	code: string
	campaign?: string
	camapign_id?: string
	category_id?: string
	type: 'GIFT_VOUCHER' | 'DISCOUNT_VOUCHER' | 'LOYALTY_CARD'
	discount?: DiscountAmount | DiscountPercent | DiscountUnit | DiscountFixed
	gift?: {
		amount: number
		balance: number
		effect: string
	}
	loyalty_card?: {
		points: number
		balance: number
		next_expiration_date?: string
		next_expiration_points?: number
	}
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		interval: string
		duration: string
	}
	validity_day_of_week?: number[]
	publish?: {
		object: 'list'
		count: number
		url: string
	}
	redemption?: {
		object: 'list'
		quantity?: number
		redeemed_quantity: number
		url: string
		redeemed_points?: number
	}
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	assets: {
		qr: {
			id: string
			url: string
		}
		barcode: {
			id: string
			url: string
		}
	}
	is_referral_code: boolean
	holder_id?: string
	updated_at?: string
	created_at: string
	object: 'voucher'
}

export interface CustomerRedeemablesListItemContainerResponse {
	type: 'voucher'
	voucher?: CustomerRedeemablesListItemContainerVoucherResponse
	status: 'ACTIVE' | 'USED' | 'DISABLED' | 'NOT_ACTIVE_YET' | 'EXPIRED' | 'NO_BALANCE'
}

export type CustomersCreateBody = CustomerRequest
export type CustomersCreateResponse = CustomerObject | CustomerUnconfirmed

export type CustomersGetResponse = CustomerObject | CustomerUnconfirmed

export type CustomersListParams = CustomersCommonListRequest
export type CustomersListResponse = CustomersCommonListResponse

export type CustomersScrollParams = CustomersCommonListRequest
export type CustomersScrollResponse = CustomersCommonListResponse
export type CustomersScrollYield = CustomerObject

type IdOrSourceId = { id: string } | { source_id: string }
export type CustomersUpdateParams = CustomerRequest & IdOrSourceId

export type CustomersUpdateResponse = CustomerObject | CustomerUnconfirmed

export type CustomersUpdateConsentsBody = Record<string, boolean>

// New types following guideline

// Domain types

type CustomerBase = {
	name?: string | null
	description?: string | null
	email?: string | null
	phone?: string | null
	birthdate?: string | null
	metadata?: Record<string, unknown> | null
}

type CustomerAddress = {
	address?: {
		city?: string | null
		state?: string | null
		line_1?: string | null
		line_2?: string | null
		country?: string | null
		postal_code?: string | null
	} | null
}

export type Referrer = CustomerRequest
export type Customer = CustomerRequest

export type ReferrerWithSummaryLoyaltyReferrals = CustomerWithSummaryLoyaltyReferrals

export type CustomerId = {
	id: string
	object: 'customer'
}

export type ReferrerId = CustomerId

export type CustomerWithSummaryLoyaltyReferrals = {
	id?: string
	source_id?: string
	name?: string
	description?: string
	email?: string
	phone?: string
	birthday?: string
	birthdate?: string
	address: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	} | null
	metadata?: Record<string, any>
	summary: CustomerSummary
	loyalty: CustomerLoyalty
	referrals: CustomerReferrals
	system_metadata: Record<string, unknown>
	created_at: string
	updated_at?: string
	assets?: {
		cockpit_url?: string
	}
	object: 'customer'
}

export type CustomerSummary = {
	redemptions: CustomerSummaryRedemptions
	orders: CustomerSummaryOrders
}

export type CustomerSummaryRedemptions = {
	total_redeemed: number
	total_failed: number
	total_succeeded: number
	total_rolled_back: number
	total_rollback_failed: number
	total_rollback_succeeded: number
	gift: {
		redeemed_amount: number
		amount_to_go: number
	}
	loyalty_card: {
		redeemed_points: number
		points_to_go: number
	}
}

export type CustomerSummaryOrders = {
	total_amount: number
	total_count: number
	average_amount: number
	last_order_amount: number
	last_order_date: string
}

export type CustomerLoyalty = {
	points: number
	referred_customers: number
	campaigns: Record<string, { points: number; loyalty_tier: string; referred_customers: number }>
}

export type CustomerReferrals = {
	total: number
	campaigns: {
		campaign_id: string
		referrer_id: string
		related_object_id: string
		related_object_type: string
		date: string
	}[]
}

// 0-level types

export type CustomersUpdateInBulkRequestBody = (CustomerBase &
	CustomerAddress & {
		source_id: string | null
	})[]

export interface CustomersUpdateMetadataInBulkRequestBody {
	source_ids: string[]
	metadata: Record<string, unknown>
}
export interface CustomersDeletePermanentlyResponseBody {
	id: string
	created_at: string
	related_object_id: string
	related_object: 'customer'
	status: 'DONE'
	data_json: {
		events: number
		customer_events: number
		daily_events: number
		segments: number
		orders: number
		order_events: number
		customer: 1
	}
	object: 'pernament_deletion'
}
