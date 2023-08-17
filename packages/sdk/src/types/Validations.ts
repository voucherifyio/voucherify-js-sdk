import { CreateCustomer } from './Customers'
import {
	StackableOptions,
	StackableRedeemableObject,
	StackableRedeemableResponse,
	StackableRedeemableResponseStatus,
} from './Stackable'
import { ValidationSessionParams, ValidationSessionResponse } from './ValidateSession'
import {
	OrdersCreateResponse,
	ApplicableToObjectPromotionTier,
	InapplicableToObjectPromotionTier,
	CreateOrder,
	ObjectOrder,
	ObjectOrderApplyToOrder,
} from './Orders'
import { PromotionsValidationParams } from './Promotions'
import { CategoryObject } from './Categories'
import {
	VoucherObjectDiscountAmount,
	VoucherObjectDiscountFixed,
	VoucherObjectDiscountPercentage,
	VoucherObjectDiscountShipping,
	VoucherObjectDiscountUnitMultiple,
	VoucherObjectDiscountUnitOne,
} from './DiscountVoucher'
import { ErrorNoTranslation } from './PromotionTiers'

export interface ReqValidateVoucherDiscountCode {
	session?: ValidationSessionParams
	order?: CreateOrder
	customer?: CreateCustomer
	metadata?: Record<string, any>
} //6_req_validate_voucher_discount_code
export type ReqValidateVoucherGiftCard = ReqValidateVoucherDiscountCode & { gift: { credits: number } } //6_req_validate_voucher_gift_card
export type ReqValidateVoucherLoyaltyCard = ReqValidateVoucherDiscountCode & { reward: { id: string; points: number } } //6_req_validate_voucher_loyalty_card

export type ValidationsValidateVoucherParams =
	| ReqValidateVoucherDiscountCode
	| ReqValidateVoucherGiftCard
	| ReqValidateVoucherLoyaltyCard

export type ValidationsValidateVoucherResponse =
	| ResponseValidateVoucherDiscountCode
	| ResponseValidateVoucherGiftCard
	| ResponseValidateVoucherLoyaltyCard
	| ResponseValidateVoucherFalse

export interface ResponseValidateVoucherFalse {
	valid: false
	reason: string
	error: {
		message: string
	}
	tracking_id: string
	code: string
	metadata?: Record<string, any>
}

export interface ResponseValidateVoucherLoyaltyCard {
	valid: boolean
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	tracking_id: string
	order: ObjectOrderApplyToOrder //6_obj_order_object_apply_to_order
	code: string
	loyalty: {
		points_cost: number
	}
	reward: {
		id: string
		assignment_id: string
		points: number
	}
	metadata: Record<string, any>
	start_date: string
	expiration_date: string
	campaign: string
	campaign_id: string
	session: ValidationSessionParams
}

export interface ResponseValidateVoucherGiftCard {
	valid: boolean
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	tracking_id: string
	order: ObjectOrder
	code: string
	gift: {
		amount: number
		balance: number
		effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	}
	metadata: Record<string, any>
	start_date: string
	expiration_date: string
	campaign: string
	campaign_id: string
	session: ValidationSessionParams
}

export interface ResponseValidateVoucherDiscountCode {
	valid: boolean
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	tracking_id: string
	order: ObjectOrder
	code: string
	discount:
		| ValidateVoucherDiscountAmount
		| ValidateVoucherDiscountPercent
		| ValidateVoucherDiscountFixed
		| ValidateVoucherDiscountUnit
		| ValidateVoucherDiscountUnitMultiple
		| ValidateVoucherDiscountShipping
	metadata: Record<string, any>
	start_date: string
	expiration_date: string
	campaign: string
	campaign_id: string
	session: ValidationSessionParams
}

export interface ValidationsValidateStackableParams {
	options?: StackableOptions
	redeemables: (RedeemablesDiscountReferralPromotionTierPromotionStack | RedeemablesGiftCard | RedeemablesLoyaltyCard)[]
	session?: ValidationSessionParams
	order?: CreateOrder
	customer?: CreateCustomer
	metadata?: Record<string, any>
}

interface RedeemablesDiscountReferralPromotionTierPromotionStack {
	type: 'voucher' | 'promotion_tier' | 'promotion_stack'
	id: string
}

interface RedeemablesGiftCard {
	id: string
	object: 'voucher'
	gift?: { credits: number }
}

interface RedeemablesLoyaltyCard {
	id: string
	object: 'voucher'
	reward?: { id: string; points: number }
}

export type ValidationValidateStackableResponse = ResponseValidationsTrue | ResponseValidationsFalse

export interface ResponseValidationsTrue {
	valid: true
	redeemables?: (
		| ResponseValidationsRedeemablesDiscountVoucher
		| ResponseValidationsRedeemablesGiftCard
		| ResponseValidationsRedeemablesLoyaltyCard
		| ResponseValidationsRedeemablesPromotionTier
		| ResponseValidationsRedeemablesPromotionStack
	)[]
	order?: {
		amount?: number
		discount_amount?: number
		items_discount_amount?: number
		total_discount_amount?: number
		total_amount?: number
		applied_discount_amount?: number
		items_applied_discount_amount?: number
		total_applied_discount_amount?: number
		items?: {
			object?: 'order_item'
			product_id?: string
			sku_id?: string
			quantity?: number
			amount?: number
			price?: number
			subtotal_amount?: number
			product?: {
				id?: string
				source_id?: string
				name?: string
				price?: number
			}
			sku?: {
				id?: string
				source_id?: string
				sku?: string
				price?: number
			}
		}[]
		metadata?: Record<string, any>
		customer_id?: string
		referrer_id?: string
		object: 'order'
	} //19_obj_order_object_validation_res
	tracking_id?: string
	session?: ValidationSessionResponse
}
interface ResponseValidationsFalse {
	valid: false
	redeemables?: {
		status: StackableRedeemableResponseStatus
		id: string
		object: StackableRedeemableObject
		result?: ErrorNoTranslation & { error: { message: string } }
		metadata?: Record<string, any>
		categories?: CategoryObject
	}[]
}

interface ResponseValidationsRedeemablesPromotionStack {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result: { loyalty_card: { points: number } }
	metadata: Record<string, any>
	categories: CategoryObject
}

interface ResponseValidationsRedeemablesPromotionTier {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	applicable_to?: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to?: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result?: {
		discount?:
			| VoucherObjectDiscountAmount
			| VoucherObjectDiscountPercentage
			| VoucherObjectDiscountFixed
			| VoucherObjectDiscountUnitOne
			| VoucherObjectDiscountUnitMultiple
			| VoucherObjectDiscountShipping
	}
	metadata: Record<string, any>
	categories: CategoryObject
}

interface ResponseValidationsRedeemablesLoyaltyCard {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	applicable_to?: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to?: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result?: { loyalty_card: { points: number } }
	metadata?: Record<string, any>
	categories?: CategoryObject
}

interface ResponseValidationsRedeemablesGiftCard {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	applicable_to?: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to?: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result?: { gift: { credits: number } }
	metadata?: Record<string, any>
	categories?: CategoryObject
}

interface ResponseValidationsRedeemablesDiscountVoucher {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	order?: OrderObjectValidationResPerRedeemable //19_obj_order_object_validation_res_per_redeemable
	applicable_to?: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to?: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result?: ValidationsTrueResultVoucherCode //19_obj_validations-true_result_voucher_code
	metadata?: Record<string, any>
	categories?: CategoryObject
}

interface OrderObjectValidationResPerRedeemable {
	amount: number
	discount_amount: number
	items_discount_amount: number
	total_discount_amount: number
	total_amount: number
	applied_discount_amount: number
	items_applied_discount_amount: number
	total_applied_discount_amount: number
	items: {
		object: 'order_item'
		product_id: string
		sku_id: string
		quantity: number
		amount: number
		price: number
		subtotal_amount: number
		product: {
			id: string
			source_id: string
			name: string
			price: number
		}
		sku: {
			id: string
			source_id: string
			sku: string
			price: number
		}
	}[]
	metadata: Record<string, any>
	customer_id: string
	referrer_id: string
	object: 'order'
}

interface ValidationsTrueResultVoucherCode {
	//19_obj_validations-true_result_voucher_code"
	discount:
		| VoucherObjectDiscountAmount2
		| VoucherObjectDiscountAmountDynamic2
		| VoucherObjectDiscountPercentage2
		| VoucherObjectDiscountPercentageDynamic2
		| VoucherObjectDiscountFixedOrder2
		| VoucherObjectDiscountFixedItems2
		| VoucherObjectDiscountUnitOne2
		| VoucherObjectDiscountUnitMultiple2
		| VoucherObjectDiscountShipping2
}

interface VoucherObjectDiscountAmount2 {
	type: 'AMOUNT'
	effect:
		| 'APPLY_TO_ORDER'
		| 'APPLY_TO_ITEMS'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'
		| 'APPLY_TO_ITEMS_BY_QUANTITY'
	amount_off: number
	is_dynamic: false
}

type ValidateVoucherDiscountAmount = Omit<VoucherObjectDiscountAmount2, 'is_dynamic'>

interface VoucherObjectDiscountAmountDynamic2 {
	type: 'AMOUNT'
	effect:
		| 'APPLY_TO_ORDER'
		| 'APPLY_TO_ITEMS'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY'
		| 'APPLY_TO_ITEMS_PROPORTIONALLY_BY_QUANTITY'
		| 'APPLY_TO_ITEMS_BY_QUANTITY'
	amount_off: number
	is_dynamic: true
}

interface VoucherObjectDiscountPercentage2 {
	type: 'PERCENT'
	effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	percent_off: number
	amount_limit: number
	is_dynamic: false
}

type ValidateVoucherDiscountPercent = Omit<VoucherObjectDiscountPercentage2, 'is_dynamic'>

interface VoucherObjectDiscountPercentageDynamic2 {
	type: 'PERCENT'
	effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	percent_off: number
	amount_limit: number
	is_dynamic: true
}

interface VoucherObjectDiscountFixedOrder2 {
	type: 'FIXED'
	effect: 'APPLY_TO_ORDER'
	fixed_amount: number
	is_dynamic: boolean
}

interface ValidateVoucherDiscountFixed {
	type: 'FIXED'
	effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	fixed_amount: number
}

interface VoucherObjectDiscountFixedItems2 {
	type: 'FIXED'
	effect: 'APPLY_TO_ITEMS'
	is_dynamic: false
}

interface ValidateVoucherDiscountUnitMultiple {
	type: 'UNIT'
	effect: 'ADD_MANY_ITEMS'
	units: ValidateVoucherDiscountUnit[]
}

type ValidateVoucherDiscountUnit = ValidateVoucherDiscountUnitProduct | ValidateVoucherDiscountUnitSku

interface ValidateVoucherDiscountUnitProduct {
	type: 'UNIT'
	effect: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
	unit_off: number
	unit_type: string
	product: {
		id: string
		source_id: string
		name: string
	}
}

interface ValidateVoucherDiscountUnitSku {
	type: 'UNIT'
	effect: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
	unit_off: number
	unit_type: string
	product: {
		id: string
		source_id: string
		name: string
	}
	sku: {
		id: string
		source_id: string
		sku: string
	}
}

interface ValidateVoucherDiscountShipping {
	type: 'UNIT'
	effect: 'ADD_MISSING_ITEMS'
	unit_off: 1
	unit_type: 'prod_5h1pp1ng'
	product: {
		id: 'prod_5h1pp1ng'
		source_id: '5h1pp1ng'
		name: 'Shipping'
	}
}

interface VoucherObjectDiscountUnitOne2 {
	type: 'UNIT'
	effect: 'ADD_NEW_ITEMS' | 'ADD_MISSING_ITEMS'
	unit_off: number
	unit_type: string
	product: {
		id: string
		source_id: string
		name: string
	}
	sku: {
		id: string
		source_id: string
		sku: string
	}
	is_dynamic: boolean
}

interface VoucherObjectDiscountUnitMultiple2 {
	type: 'UNIT'
	effect: 'ADD_MANY_ITEMS'
	units: Omit<VoucherObjectDiscountUnitOne2, 'is_dynamic'>[]
	is_dynamic: boolean
}

interface VoucherObjectDiscountShipping2 {
	type: 'UNIT'
	effect: 'ADD_MISSING_ITEMS'
	unit_off: number
	unit_type: string
	product: {
		id: 'prod_5h1pp1ng'
		source_id: '5h1pp1ng'
		name: 'Shipping'
	}
	is_dynamic: false
}

export interface ValidationValidateStackableResponseClientSide {
	valid: boolean
	tracking_id?: string
	session?: ValidationSessionResponse
	order?: OrdersCreateResponse
	redeemables?: StackableRedeemableResponse[]
}

export type ValidationsValidateCode = Partial<PromotionsValidationParams>

export type ValidationsValidateContext = ValidationsValidateVoucherParams
