import { OrdersItem, OrdersCreateResponse } from './Orders'
import { SimpleCustomer } from './Customers'

interface RedemptionsVoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface RedemptionsVoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface RedemptionsVoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface RedemptionsRedeemBody {
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
	order?: Pick<OrdersCreateResponse, 'id' | 'source_id' | 'amount' | 'items' | 'status' | 'metadata'>
	metadata?: Record<string, any>
	reward?: {
		id?: string
		points?: number
	}
	gift?: {
		credits: number
	}
	session?: {
		key: string
	}
}

export interface RedemptionsRedeemResponse {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: OrdersCreateResponse
	metadata?: Record<string, any>
	result?: string
	voucher?: {
		id: string
		code: string
		campaign?: string
		category?: string
		type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
		discount: RedemptionsVoucherDiscountAmount | RedemptionsVoucherDiscountPercent | RedemptionsVoucherDiscountUnit
		gift?: {
			amount: number
		}
		loyalty_card?: {
			points: number
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
			data_ref: 'entries'
			entries: $FixMe[]
			total: number
			url: string
		}
		redemption?: {
			object: 'list'
			quantity?: number
			redeemed_quantity: number
			data_ref: 'redemption_entries'
			redemption_entries: $FixMe[]
			total: number
			url: string
		}
		active: boolean
		additional_info?: string
		metadata?: Record<string, any>
		assets?: {
			qr?: {
				id: string
				url: string
			}
			barcode?: {
				id: string
				url: string
			}
		}
		is_referral_code: boolean
		referrer_id?: string
		holder_id?: string
		updated_at?: string
		object: 'voucher'
		validation_rules_assignments: {
			object: 'list'
			total: number
			data_ref: 'data'
			data?: {
				id: string
				rule_id?: string
				related_object_id?: string
				related_object_type?: string
				created_at: string
				object: 'validation_rules_assignment'
			}[]
		}
	}
}

export interface RedemptionsListParams {
	limit?: number
	page?: number
	result?: 'SUCCESS' | 'FAILURE'
	campaign?: string
	customer?: string
	created_at?: {
		before?: string
		after?: string
	}
}

// Here API returns string for 'total' as in other API examples it returns number
export interface RedemptionsListResponse {
	object: 'list'
	total: number
	data_ref: 'redemptions'
	redemptions: {
		id?: string
		object: 'redemption'
		date?: string
		customer_id?: string
		tracking_id?: string
		order?: {
			amount?: number
			items?: OrdersItem[]
		}
		metadata?: Record<string, any>
		result?: string
		customer?: SimpleCustomer
		related_object_type?: 'string'
		voucher?: {
			code?: string
			campaign?: string
		}
		gift?: {
			amount: number
		}
		loyalty_card?: {
			points: number
		}
	}[]
}

export interface RedemptionsGetForVoucherResponse {
	object: 'list'
	total: number
	data_ref: string
	quantity: number
	redeemed_quantity?: number
	redeemed_amount?: number
	redemption_entries?: {
		id?: string
		object?: string
		date?: string
		customer_id?: string
		tracking_id?: string
		order?: {
			amount?: number
			items?: Pick<OrdersItem, 'product_id' | 'sku_id' | 'quantity'>[]
		}
		result?: string
	}[]
}

export interface RedemptionsRollbackParams {
	reason?: string
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
}

export interface RedemptionsRollbackQs {
	reason?: string
	tracking_id?: string
}

export interface RedemptionsRollbackPayload {
	customer?: SimpleCustomer & { description?: string }
}

export interface RedemptionsRollbackResponse {
	id: string
	object: 'redemption_rollback'
	date?: string
	customer_id?: string
	tracking_id?: string
	redemption?: string
	reason?: string
	result?: string
	voucher?: {
		code?: string
		campaign?: string
		category?: string
		type?: string
		discount?: RedemptionsVoucherDiscountPercent | RedemptionsVoucherDiscountAmount | RedemptionsVoucherDiscountUnit
		gift?: $FixMe
		start_date?: string
		expiration_date?: string
		publish?: {
			count?: number
			entries?: $FixMe[]
		}
		redemption?: {
			quantity?: number
			redeemed_quantity?: number
			redeemed_amount?: number
			redemption_entries?: $FixMe[]
		}
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		assets?: {
			qr?: {
				id?: string
				url?: string
			}
		}
	}
}
