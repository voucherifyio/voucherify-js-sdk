import { ApplicableToObjectPromotionTier, InapplicableToObjectPromotionTier } from './Orders'
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

export type VoucherObjectDiscountTypes =
	| VoucherObjectDiscountAmount
	| VoucherObjectDiscountPercentage
	| VoucherObjectDiscountFixed
	| VoucherObjectDiscountUnitOne
	| VoucherObjectDiscountUnitMultiple
	| VoucherObjectDiscountShipping

export interface VoucherObject {
	id: string
	code: string
	campaign: string
	campaign_id: string
	category: string
	category_id: string
	categories: {
		id: string
		name: string
		hierarchy: number
		created_at: string
		updated_at: string
		object: 'category'
	}[]
	type: 'GIFT_VOUCHER' | 'DISCOUNT_VOUCHER' | 'LOYALTY_CARD'
	discount: VoucherObjectDiscountTypes
	gift: {
		amount: number
		balance: number
		effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	}
	loyalty_card: {
		points: number
		balance: number
		next_expiration_date: string
		next_expiration_points: number
	}
	start_date: string
	expiration_date: string
	validity_timeframe: {
		duration: string
		interval: string
	}
	validity_day_of_week: (0 | 1 | 2 | 3 | 4 | 5 | 6)[]
	active: boolean
	additional_info?: string
	metadata: Record<string, any>
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
	created_at: string
	updated_at: string
	holder_id: string
	validation_rules_assignments: {
		object: 'list'
		data_ref: 'data'
		data: {
			id: string
			rule_id: string
			related_object_id: string
			related_object_type: string
			created_at: string
			object: 'validation_rules_assignment'
		}[]
		total: number
	}
	referrer_id?: string
	redemption: {
		quantity?: number
		redeemed_quantity: number
		redeemed_amount: number
		redeemed_points: number
		data_ref: 'redemption_entries'
		object: 'list'
		url: string
	}
	publish?: {
		object: 'list'
		count: number
		data_ref: 'entries'
		entries: string[]
		total: number
		url: string
	}
	object: 'voucher'
}

export interface VouchersResponse {
	//1_obj_voucher_object
	id: string
	code?: string
	campaign?: string
	campaign_id?: string
	category?: string
	categories?: CategoryObject[]
	category_id?: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER' | 'LOYALTY_CARD'
	discount?: VoucherDiscount
	gift?: {
		amount?: number
		balance?: number
		effect?: 'APPLY_TO_ITEMS' | 'APPLY_TO_ORDER'
	}
	loyalty_card?: {
		balance?: number
		next_expiration_date?: string
		next_expiration_points?: number
		points?: number
	}
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[]
	publish?: {
		object?: 'list'
		count?: number
		url?: string
	}
	redemption?: {
		object?: 'list'
		quantity?: number
		redeemed_quantity?: number
		redeemed_amount?: number
		redeemed_points?: number
		url?: string
	}
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	assets?: {
		qr?: {
			id: string
			url?: string
		}
		barcode?: {
			id: string
			url?: string
		}
	}
	is_referral_code?: boolean
	holder_id?: string
	updated_at?: string
	created_at?: string
	object?: 'voucher'
	validation_rules_assignments?: {
		object?: 'list'
		total?: number
		data_ref?: 'data'
		data?: {
			id: string
			rule_id?: string
			related_object_id?: string
			related_object_type?: string
			created_at?: string
			object?: 'validation_rules_assignment'
		}[]
	}
}

interface CategoryObject {
	//20_obj_category_object
	id?: string
	name?: string
	hierarchy?: number
	created_at?: string
	updated_at?: string
	object?: 'category'
}

export type VoucherDiscount =
	| VoucherDiscountAmount
	| VoucherDiscountPercentage
	| VoucherDiscountFixed
	| VoucherDiscountUnitOne
	| VoucherDiscountUnitMultiple
	| VoucherDiscountShipping

export type VoucherDiscountPost =
	| VoucherDiscountAmountPost
	| VoucherDiscountPercentagePost
	| VoucherDiscountFixedPost
	| VoucherDiscountUnitOnePost
	| VoucherDiscountUnitMultiplePost
	| VoucherDiscountShippingPost

export type VoucherDiscountPut =
	| VoucherDiscountAmountPut
	| VoucherDiscountPercentagePut
	| VoucherDiscountFixedPut
	| VoucherDiscountUnitOnePut
	| VoucherDiscountUnitMultiplePut
export interface VoucherDiscountAmount {
	//1_obj_voucher_object_discount_amount
	type?: 'AMOUNT'
	effect?:
		| 'APPLY_TO_ITEMS'
		| 'APPLY_TO_ITEMS_BY_QUANTITY'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'
		| 'APPLY_TO_ORDER'
	amount_off?: number
	amount_off_formula?: string
}

export interface VoucherDiscountPercentage {
	//1_obj_voucher_object_discount_percentage
	type?: 'PERCENT'
	amount_limit?: string
	effect?: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	percent_off?: number
	percent_off_formula?: string
}

export interface VoucherDiscountFixed {
	//1_obj_voucher_object_discount_fixed
	type?: 'FIXED'
	fixed_amount?: number
	effect?: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	fixed_amount_formula?: string
}

export interface VoucherDiscountUnitOne {
	//1_obj_voucher_object_discount_unit_one
	type?: 'UNIT'
	unit_off?: number
	unit_off_formula?: string
	unit_type?: string
	effect?: 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS'
}

export interface VoucherDiscountUnitMultiple {
	//1_obj_voucher_object_discount_unit_multiple
	type?: 'UNIT'
	effect?: 'ADD_MANY_ITEMS'
	units?: {
		effect: 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS'
		unit_off?: number
		unit_off_formula?: string
		unit_type?: string
	}[]
}

export interface VoucherDiscountShipping {
	//1_obj_voucher_object_discount_shipping
	type?: 'UNIT'
	effect?: 'ADD_MISSING_ITEMS'
	unit_off?: number
	unit_type?: 'prod_5h1pp1ng'
}

type VoucherDiscountAmountPost = VoucherDiscountAmount
type VoucherDiscountPercentagePost = Omit<VoucherDiscountPercentage, 'amount_limit'> & { amount_limit?: number }
type VoucherDiscountFixedPost = VoucherDiscountFixed
type VoucherDiscountUnitOnePost = VoucherDiscountUnitOne
type VoucherDiscountUnitMultiplePost = VoucherDiscountUnitMultiple
type VoucherDiscountShippingPost = VoucherDiscountShipping

type VoucherDiscountAmountPut = Omit<VoucherDiscountAmount, 'type'> & { type?: string }
type VoucherDiscountPercentagePut = Omit<VoucherDiscountPercentage, 'type' | 'amount_limit'> & { amount_limit?: number }
type VoucherDiscountFixedPut = VoucherDiscountFixed
type VoucherDiscountUnitOnePut = VoucherDiscountUnitOne
type VoucherDiscountUnitMultiplePut = VoucherDiscountUnitMultiple

export interface VouchersQualificationExamineBody {
	customer?: {
		id: string
		source_id: string
		name: string
		email: string
		phone: string
		birthdate: string
		address: {
			city: string
			state: string
			country: string
			postal_code: string
		}
		metadata: Record<string, any>
	}
	order?: {
		id: string
		source_id: string
		amount: number
		items: (
			| VouchersQualificationProductObject
			| VouchersQualificationSkuObject
			| VouchersQualificationProductUsingProductIdObject
			| VouchersQualificationProductUsingSourceIdObject
		)[]
		customer: VouchersQualificationCustomer
		referrer: Record<string, any>
		metadata?: Record<string, any>
	}
	reward?: {
		id: string
		assignment_id?: string
		points: number
	}
	metadata?: Record<string, any>
}

interface VouchersQualificationProductObject {
	//1_req_obj_vouchers_qualification_product
	source_id: string
	product_id: string
	amount: number
	quantity: number
	price: number
	metadata?: Record<string, any>
	related_object: 'product'
	product: {
		source_id: string
		name: string
		price: number
		metadata: Record<string, any>
	}
}

interface VouchersQualificationSkuObject {
	//1_req_obj_vouchers_qualification_sku
	source_id: string
	sku_id: string
	amount: number
	quantity: number
	related_object: 'product' | 'sku'
	product: {
		source_id: string
		name: string
		price: number
		metadata: Record<string, any>
	}
	sku: {
		source_id: string
		sku: string
		price: number
		metadata: Record<string, any>
	}
}

interface VouchersQualificationProductUsingProductIdObject {
	//1_req_obj_vouchers_qualification_product_using_product_id
	product_id: string
	amount: number
	quantity: number
	price: number
	metadata?: Record<string, any>
	product: {
		name: string
		price: number
		metadata: Record<string, any>
	}
}

interface VouchersQualificationProductUsingSourceIdObject {
	//1_req_obj_vouchers_qualification_product_using_source_id
	source_id: string
	amount: number
	quantity: number
	price: number
	metadata?: Record<string, any>
	related_object: 'product'
	product: {
		source_id: string
		name: string
		price: number
		metadata: Record<string, any>
	}
}

interface VouchersQualificationCustomer {
	//1_req_obj_vouchers_qualification_customer
	id: string
	source_id: string
	name: string
	email: string
	phone: string
	address: {
		city: string
		country: string
		postal_code: string
		state: string
	}
	metadata: Record<string, any>
	birthdate: string
}
export interface VouchersQualificationExamineParams {
	audienceRulesOnly?: boolean
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'code' | '-code'
	limit?: number
}

export interface VouchersQualificationExamineResponse {
	object: 'list'
	data_ref: 'data'
	data?: VoucherObjectExtended[]
	total: number
	id: string
	created_at: string
	tracking_id: string
}

type VoucherObjectExtended = VouchersResponse & {
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
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

//1_req_vouchers_code_POST
export type VouchersCreateBody = Pick<
	VouchersResponse,
	| 'type'
	| 'active'
	| 'additional_info'
	| 'campaign'
	| 'campaign_id'
	| 'category'
	| 'category_id'
	| 'expiration_date'
	| 'metadata'
	| 'start_date'
	| 'validity_timeframe'
> & {
	discount?: VoucherDiscountPost
	gift?: {
		amount: number
		effect: 'APPLY_TO_ITEMS' | 'APPLY_TO_ORDER'
	}
	loyalty_card?: {
		points: number
	}
	redemption?: {
		quantity: null | number
	}
	validation_rules?: string[]
	validity_day_of_week?: number[]
}

export type VouchersCreateResponse = VouchersResponse

export type VouchersGetResponse = VouchersResponse

export interface VouchersUpdate {
	//1_req_vouchers_code_PUT
	category?: string
	category_id?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	gift?: {
		amount?: number
		effect?: 'APPLY_TO_ITEMS' | 'APPLY_TO_ORDER'
	}
	loyalty_card?: {
		points?: number
	}
	discount?: VoucherDiscountPut
	validity_day_of_week?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[]
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
}

export type VouchersUpdateResponse = VouchersResponse

export interface VouchersDeleteParams {
	force?: string
}

export interface VouchersListParams {
	limit?: number
	page?: number
	category?: string
	campaign_id?: string
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
	order?: '-created_at' | 'created_at' | '-updated_at' | 'updated_at' | '-code' | 'code'
}

export interface VouchersListResponse {
	//1_res_vouchers_GET
	object: 'list'
	total: number
	data_ref: 'vouchers'
	vouchers: Omit<VouchersResponse[], 'validation_rules_assignments'>
}

export type VouchersEnableResponse = VouchersResponse

export type VouchersDisableResponse = VouchersResponse

export type VouchersImport = VouchersImporGiftVoucherObject | VouchersImporGiftDiscountObject
interface VouchersImporGiftVoucherObject {
	//1_obj_vouchers_import_gift_voucher
	code: string
	category?: string
	active?: boolean
	type?: 'GIFT_VOUCHER'
	gift?: {
		amount: number
	}
	start_date?: string
	expiration_date?: string
	redemption?: {
		quantity: number
	}
	additional_info?: string
	metadata?: Record<string, any>
}

interface VouchersImporGiftDiscountObject {
	//1_obj_vouchers_import_discount_voucher
	code: string
	category?: string
	active?: boolean
	type?: 'DISCOUNT_VOUCHER'
	discount?:
		| VoucherObjectDiscountAmount
		| VoucherObjectDiscountPercentage
		| VoucherObjectDiscountFixed
		| VoucherObjectDiscountUnitOne
		| VoucherObjectDiscountUnitMultiple
		| VoucherObjectDiscountShipping
	start_date?: string
	expiration_date?: string
	redemption?: {
		quantity: number
	}
	additional_info?: string
	metadata?: Record<string, any>
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
	id: string
	object?: 'export'
	status?: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	exported_object?: 'voucher_transactions'
	channel?: 'API'
	created_at?: string
	result?: {
		url?: string
	}
	user_id?: string
	parameters?: ExportGiftCardTransactions
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
	fields?: ExportGiftCardTransactionsFields[]
	//16_obj_filter_gift_card_transactions_voucher_id
	filters?: {
		voucher_id?: {
			conditions?: {
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
		junction?: 'AND' | 'OR'
	}
}

export interface TransactionsExportBody {
	//1_req_create_gift_card_transactions_export
	parameters?: {
		order?: '-created_at' | 'created_at'
		fields?: ExportGiftCardTransactionsFields[]
	}
}

export interface ListTransactionsResponse {
	//1_res_vouchers_code_transactions
	object?: 'list'
	has_more?: boolean
	data_ref?: 'data'
	data?: (
		| GiftCardTransactionObjectRedemption
		| GiftCardTransactionObjectRefund
		| GiftCardTransactionObjectAddition
		| GiftCardTransactionObjectRemoval
	)[]
}

interface GiftCardTransactionObjectRedemption {
	//1_obj_gift_card_transaction_object_redemption
	id: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_REDEMPTION'
	details?: {
		balance?: {
			type?: 'gift_voucher'
			total?: number
			amount?: number
			object?: 'balance'
			balance?: number
			related_object?: {
				id: string
				type?: 'voucher'
			}
		}
		order?: {
			id: string
			source_id?: string
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
	id: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_REFUND'
	details?: {
		balance?: {
			type?: 'gift_voucher'
			total?: number
			amount?: number
			object?: 'balance'
			balance?: number
			related_object?: {
				id: string
				type?: 'voucher'
			}
		}
		order?: {
			id: string
			source_id?: string
		}
		redemption?: {
			id: string
		}
		rollback?: {
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
		balance?: {
			type?: 'gift_voucher'
			total?: number
			amount?: number
			object?: 'balance'
			balance?: number
			related_object?: {
				id: string
				type?: 'voucher'
			}
		}
	}
	related_transaction_id?: string
	created_at?: string
}
interface GiftCardTransactionObjectRemoval {
	//1_obj_gift_card_transaction_object_removal
	id: string
	source_id?: string
	voucher_id?: string
	campaign_id?: string
	source?: 'voucherify-web-ui' | 'API'
	reason?: string
	type?: 'CREDITS_REMOVAL'
	details?: {
		balance?: {
			type?: 'gift_voucher'
			total?: number
			amount?: number
			object?: 'balance'
			balance?: number
			related_object?: {
				id: string
				type?: 'voucher'
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

export interface VoucherObjectDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: number
	amount_off_formula?: string
	effect?:
		| 'APPLY_TO_ORDER'
		| 'APPLY_TO_ITEMS'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'
		| 'APPLY_TO_ITEMS_BY_QUANTITY'
}

export interface VoucherObjectDiscountPercentage {
	type?: 'PERCENT'
	amount_limit?: string
	percent_off?: number
	percent_off_formula?: string
	effect?: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
}

export interface VoucherObjectDiscountFixed {
	type?: 'FIXED'
	fixed_amount?: number
	fixed_amount_formula?: string
	effect?: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
}
export interface VoucherObjectDiscountUnitOne {
	type?: 'UNIT'
	unit_off?: number
	unit_off_formula?: string
	unit_type?: string
	effect?: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
}

export interface VoucherObjectDiscountUnitMultiple {
	type?: 'UNIT'
	effect?: 'ADD_MANY_ITEMS'
	units?: {
		unit_off?: number
		unit_off_formula?: string
		unit_type?: string
		effect?: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
	}[]
}

export interface VoucherObjectDiscountShipping {
	type?: 'UNIT'
	unit_off?: number
	unit_type?: 'prod_5h1pp1ng'
	effect?: 'ADD_MISSING_ITEMS'
}
