import { OrdersGetResponse } from './Orders'
import { SimpleCustomer } from './Customers'

export type VoucherType = 'GIFT' | 'DISCOUNT' | 'LOYALTY_CARD' | 'LUCKY_DRAW'

export interface CodeConfig {
	length?: number
	charset?: string
	pattern?: string
	prefix?: string
	suffix?: string
}

export interface SimpleVoucher {
	code_config?: CodeConfig
	type: VoucherType
	is_referral_code?: boolean
	discount?: DiscountUnit | DiscountAmount | DiscountPercent
	loyalty_card?: {
		points: number
		balance: number
	}
	redemption?: {
		quantity: number
	}
}

export type SimpleLoyaltyVoucher = Pick<
	SimpleVoucher,
	'code_config' | 'is_referral_code' | 'loyalty_card' | 'redemption'
> & { type: 'LOYALTY_CARD' }

export interface DiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS'
	unit_type?: string
}

export interface DiscountAmount {
	type?: 'AMOUNT'
	amount_off?: number
}

export interface DiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
	amount_limit?: number
}

export interface VouchersResponse {
	id: string
	code: string
	campaign?: string
	category?: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount?: DiscountAmount | DiscountPercent | DiscountUnit
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
		entries: string[]
		total: number
		url: string
	}
	redemption?: {
		object: 'list'
		quantity?: number
		redeemed_quantity: number
		data_ref: 'redemption_entries'
		redemption_entries: string[]
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

export interface VouchersQualificationExamineBody {
	customer?: Omit<SimpleCustomer, 'object'> & { description: string }
	order?: Pick<OrdersGetResponse, 'id' | 'source_id' | 'amount' | 'items' | 'metadata'>
	reward?: {
		id: string
		assignment_id?: string
	}
	metadata?: Record<string, any>
}

export interface VouchersQualificationExamineParams {
	audienceRulesOnly?: boolean
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
	limit?: number
}

export interface VouchersQualificationExamineResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data?: VouchersResponse[]
}

export interface VouchersCreateParameters {
	active?: boolean
	code?: string
	code_config?: CodeConfig
	redemption?: {
		quantity: number
	}
}

export type VouchersCreate = VouchersCreateParameters &
	Pick<
		VouchersResponse,
		'type' | 'discount' | 'gift' | 'category' | 'additional_info' | 'start_date' | 'expiration_date' | 'metadata'
	>

export type VouchersCreateResponse = Omit<VouchersResponse, 'validation_rules_assignments'>

export type VouchersGetResponse = VouchersResponse

export interface VouchersUpdate {
	code: string
	category?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	gift?: {
		amount: number
	}
}

export type VouchersUpdateResponse = VouchersResponse

export interface VouchersDeleteParams {
	force?: boolean
}

export interface VouchersListParams {
	limit?: number
	page?: number
	category?: string
	campaign?: string
	customer?: string
	created_at?: {
		after?: string
		before?: string
	}
	updated_at?: {
		after?: string
		before?: string
	}
	order?:
		| '-created_at'
		| 'created_at'
		| '-updated_at'
		| 'updated_at'
		| '-type'
		| 'type'
		| '-code'
		| 'code'
		| '-campaign'
		| 'campaign'
		| '-category'
		| 'category'
}

export interface VouchersListResponse {
	object: 'list'
	total: number
	data_ref: 'vouchers'
	vouchers: VouchersResponse[]
}

export type VouchersEnableResponse = VouchersResponse

export type VouchersDisableResponse = VouchersResponse

export interface VouchersImport {
	code: string
	category?: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount: DiscountAmount | DiscountPercent | DiscountUnit
	additional_info?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	metadata?: Record<string, any>
	redemption?: {
		quantity: number
	}
	code_config?: CodeConfig
}

export interface VouchersBulkUpdateObject {
	code: string
	metadata?: Record<string, any>
}

export type VouchersBulkUpdate = VouchersBulkUpdateObject[]

export interface VouchersBulkUpdateMetadata {
	codes: string[]
	metadata?: Record<string, any>
}

export interface VouchersBulkUpdateMetadataObjectResponse {
	code: string
	found: boolean
	updated: boolean
}

export type VouchersBulkUpdateMetadataResponse = VouchersBulkUpdateMetadataObjectResponse[]

export interface VouchersBulkUpdateObjectResponse {
	code: string
	found: boolean
	updated: boolean
}

export type VouchersBulkUpdateResponse = VouchersBulkUpdateObjectResponse[]
