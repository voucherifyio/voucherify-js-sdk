import { OrdersGetResponse } from './Orders'
import { SimpleCustomer } from './Customers'
import { DiscountUnit, DiscountAmount, DiscountPercent, DiscountFixed } from './DiscountVoucher'

export type VoucherType = 'GIFT_VOUCHER' | 'DISCOUNT_VOUCHER' | 'LOYALTY_CARD'
export interface SimpleVoucher {
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
	type: VoucherType
	is_referral_code?: boolean
	discount?: DiscountUnit | DiscountAmount | DiscountPercent | DiscountFixed
	loyalty_card?: {
		points: number
		balance: number
	}
	redemption?: {
		quantity: number
	}
}

export interface VouchersResponse {
	id: string
	code: string
	campaign?: string
	category?: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount?: DiscountAmount | DiscountPercent | DiscountUnit | DiscountFixed
	gift?: {
		amount: number
		balance: number
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
	created_at: string
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
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
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
	filters?: {
		junction?: string
		[filter_condition: string]: any
	}
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
	discount: DiscountAmount | DiscountPercent | DiscountUnit | DiscountFixed
	additional_info?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	metadata?: Record<string, any>
	redemption?: {
		quantity: number
	}
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
}

export interface VouchersBulkUpdateObject {
	code: string
	metadata: Record<string, any>
}

export type VouchersBulkUpdate = VouchersBulkUpdateObject[]

export interface VouchersBulkUpdateMetadata {
	codes: string[]
	metadata: Record<string, any>
}

export type VouchersImportResponse = {
	async_action_id: string
}

export type VouchersBulkUpdateMetadataResponse = {
	async_action_id: string
}

export type VouchersBulkUpdateResponse = {
	async_action_id: string
}

export interface ExportTransactionsResponse {
	id?: string
	object?: 'export'
	status?: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	exported_object?: 'voucher_transactions'
	channel?: 'API'
	created_at?: string
	result?: {
		url: string
	}
	user_id?: string
	parameters: ExportGiftCardTransactions
}
type ExportGiftCardTransactionsFields =
	| 'id'
	| 'type'
	| 'source_id'
	| 'balance'
	| 'amount'
	| 'reason'
	| 'created_at'
	| 'voucher_id'
	| 'campaign_id'
	| 'source'
	| 'details'
interface ExportGiftCardTransactions {
	//16_obj_export_gift_card_transactions
	order?: '-created_at' | 'created_at'
	fields?: ExportGiftCardTransactionsFields
	//16_obj_filter_gift_card_transactions_voucher_id
	filters?: {
		voucher_id: {
			conditions: {
				$in: string[]
				$not_in: string[]
				$is: string
				$is_not: string
				$has_value: string
				$is_unknown: string
				$starts_with: string
				$ends_with: string
			}
		}
		junction: 'AND' | 'OR'
	}
}

export interface TransactionsExportBody {
	//1_req_create_gift_card_transactions_export
	parameters?: {
		order: '-created_at' | 'created_at'
		fields: ExportGiftCardTransactionsFields
	}
}

export interface ListTransactionsResponse {
	//1_res_vouchers_code_transactions
	object?: 'list'
	has_more?: boolean
	data_ref?: 'data'
	data?:
		| GiftCardTransactionObjectRedemption
		| GiftCardTransactionObjectRefund
		| GiftCardTransactionObjectAddition
		| GiftCardTransactionObjectRemoval
}

interface GiftCardTransactionObjectRedemption {
	//1_obj_gift_card_transaction_object_redemption
	id?: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_REDEMPTION'
	details?: {
		balance: {
			type: 'gift_voucher'
			total: number
			amount: number
			object: 'balance'
			balance: number
			related_object: {
				id: string
				type: 'voucher'
			}
		}
		order: {
			id: string
			source_id: string
		}
		redemption: {
			id: string
		}
	}
	related_transaction_id?: string
	created_at?: string
}

interface GiftCardTransactionObjectRefund {
	//1_obj_gift_card_transaction_object_refund
	id?: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_REFUND'
	details?: {
		balance: {
			type: 'gift_voucher'
			total: number
			amount: number
			object: 'balance'
			balance: number
			related_object: {
				id: string
				type: 'voucher'
			}
		}
		order: {
			id: string
			source_id: string
		}
		redemption: {
			id: string
		}
		rollback: {
			id: string
		}
	}
	related_transaction_id?: string
	created_at?: string
}

interface GiftCardTransactionObjectAddition {
	//1_obj_gift_card_transaction_object_addition
	id?: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_ADDITION'
	details?: {
		balance: {
			type: 'gift_voucher'
			total: number
			amount: number
			object: 'balance'
			balance: number
			related_object: {
				id: string
				type: 'voucher'
			}
		}
	}
	related_transaction_id?: string
	created_at?: string
}
interface GiftCardTransactionObjectRemoval {
	//1_obj_gift_card_transaction_object_removal
	id?: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_REMOVAL'
	details?: {
		balance: {
			type: 'gift_voucher'
			total: number
			amount: number
			object: 'balance'
			balance: number
			related_object: {
				id: string
				type: 'voucher'
			}
		}
	}
	related_transaction_id?: string
	created_at?: string
}

export interface ListTransactionsQuery {
	limit?: number
	page?: number
}
