import { CustomerRequest, SimpleCustomer } from './Customers'

import { VoucherType } from './Vouchers'

type OrderType =
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

export interface VoucherDiscount {
	type: 'UNIT' | 'AMOUNT' | 'DISCOUNT'
	unit_off?: number
	unit_off_formula?: string
	effect?: string
	amount_off?: number
	amount_off_formula?: string
	percent_off?: number
	percent_off_formula?: string
	amount_limit?: number
}

interface DistributionsPublicationsVoucher {
	code?: string
	object?: 'voucher'
	campaign?: string
	gift?: {
		amount: number
		balance: number
	}
	loyalty_card?: {
		amount: number
		balance: number
	}
	is_referral_code?: boolean
	discount?: VoucherDiscount
}

interface DistributionsPublicationsCreateResponseVoucher {
	id: string
	code: string
	campaign?: string
	campaign_id?: string
	category?: string
	type?: VoucherType
	discount?: VoucherDiscount
	gift?: {
		amount: number
		balance: number
	}
	loyalty_card?: {
		amount: number
		balance: number
	}
	start_date?: string
	expiration_date?: string
	validity_timeframe?: string
	validity_day_of_week?: string
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
	is_referral_code?: boolean
	created_at: string
	updated_at?: string
	holder_id?: string
	object: 'voucher'
	publish: {
		object: string
		count: number
		url: string
	}
	redemption: {
		object: string
		quantity: number
		redeemed_quantity: number
		url: string
	}
}
// Eddy's comment (regarding how to set up filters type) is not quite working here - as we can have multiple `conditions` inside the `filter_condition`. I did not explained it correctly

export interface DistributionsPublicationsListParams {
	limit?: number
	page?: number
	order?: OrderType
	campaign?: string
	customer?: string
	voucher?: string
	result?: 'SUCCESS' | 'FAILURE'
	voucher_type?: 'GIFT' | 'DISCOUNT' | 'LOYALTY_CARD' | 'LUCKY_DRAW'
	is_referral_code?: boolean
	filters?: {
		junction?: 'OR' | 'AND'
		[filter_condition: string]: any
	}
}

interface PublicationResponse {
	id: string
	source_id?: string
	object: 'publication'
	created_at: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	channel?: string
	result: 'SUCCESS' | 'FAILURE'
	customer?: {
		object?: string
		id: string
	}
	voucher?: DistributionsPublicationsVoucher
	vouchers?: string[]
	failure_code?: string
	failure_message?: string
}

export interface DistributionsPublicationsListResponse {
	object: 'list'
	total: number
	data_ref: 'publications'
	publications?: PublicationResponse[]
}

export interface DistributionsPublicationsCreateParams {
	join_once?: boolean
	source_id?: string
	campaign?: {
		name: string
		count?: number
	}
	voucher?: string
	channel?: string
	customer: CustomerRequest
}

export interface DistributionsPublicationsCreateResponse {
	id: string
	object: 'publication'
	created_at: string
	customer_id: string
	tracking_id?: string
	metadata?: Record<string, any>
	channel?: string
	source_id?: string
	result: 'SUCCESS' | 'FAILURE'
	customer?: SimpleCustomer
	voucher: DistributionsPublicationsCreateResponseVoucher
}
