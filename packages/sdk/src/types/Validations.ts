import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed } from './DiscountVoucher'
import { CreateCustomer, ValidateVoucherCustomerId, ValidateVoucherSourceId } from './Customers'
import { StackableOptions, StackableRedeemableParams, StackableRedeemableResponse } from './Stackable'
import { ValidationSessionParams, ValidationSessionResponse } from './ValidateSession'
import { ApplicableToResultList } from './ApplicableTo'
import { ValidationError } from './ValidationError'

import {
	OrdersItem,
	OrdersCreateResponse,
	ApplicableToObjectPromotionTier,
	InapplicableToObjectPromotionTier,
	ValidateVoucherOrderId,
	ValidateVoucherOrderSourceId,
	CreateOrder,
} from './Orders'
import { PromotionsValidateParams } from './Promotions'
import { CategoryObject } from './Categories'
import {
	VoucherObjectDiscountAmount,
	VoucherObjectDiscountFixed,
	VoucherObjectDiscountPercentage,
	VoucherObjectDiscountShipping,
	VoucherObjectDiscountUnitMultiple,
	VoucherObjectDiscountUnitOne,
} from './Vouchers'
import { ErrorNoTranslation } from './PromotionTiers'

export interface ValidationsValidateVoucherParams {
	customer?: {
		id?: string
		source_id?: string
		name?: string
		email?: string
		description?: string
		metadata?: Record<string, any>
	}
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: OrdersItem[]
		metadata?: Record<string, any>
	}
	gift?: {
		credits: number
	}
	reward?: {
		id: string
	}
	session?: ValidationSessionParams
}

export interface ValidationsValidateVoucherResponse {
	applicable_to?: ApplicableToResultList
	inapplicable_to?: ApplicableToResultList
	campaign?: string
	campaign_id?: string
	metadata?: Record<string, any>
	code?: string
	valid?: boolean
	discount?: DiscountAmount | DiscountUnit | DiscountPercent | DiscountFixed
	gift?: {
		amount: number
		balance: number
	}
	loyalty?: {
		points_cost: number
	}
	order?: {
		amount: number
		discount_amount: number
		total_discount_amount: number
		total_amount: number
		applied_discount_amount?: number
		total_applied_discount_amount?: number
		items?: OrdersItem[]
		initial_amount?: number
		items_discount_amount?: number
		items_applied_discount_amount?: number
		metadata?: Record<string, any>
	}
	session?: ValidationSessionParams
	start_date?: string
	expiration_date?: string
	tracking_id: string
	error?: ValidationError
}

export interface ValidationsValidateStackableParams {
	options?: StackableOptions
	redeemables: (RedeemablesDiscountReferralPromotionTierPromotionStack | RedeemablesGiftCard | RedeemablesLoyaltyCard)[]
	session?: ValidationSessionParams
	order?: ValidateVoucherOrderId | ValidateVoucherOrderSourceId | CreateOrder
	customer?: ValidateVoucherCustomerId | ValidateVoucherSourceId | CreateCustomer
	metadata?: Record<string, any>
}

interface RedeemablesDiscountReferralPromotionTierPromotionStack {
	type: 'voucher' | 'promotion_tier' | 'promotion_stack'
	id: string
}

interface RedeemablesGiftCard {
	id: string
	object: 'voucher'
	gift: { credits: number }
}

interface RedeemablesLoyaltyCard {
	id: string
	object: 'voucher'
	reward: { id: string; points: number }
}

export type ResponseValidations = ResponseValidationsTrue | ResponseValidationsFalse

export interface ResponseValidationsTrue {
	valid: true
	redeemables: (
		| ResponseValidationsRedeemablesDiscountVoucher
		| ResponseValidationsRedeemablesGiftCard
		| ResponseValidationsRedeemablesLoyaltyCard
		| ResponseValidationsRedeemablesPromotionTier
		| ResponseValidationsRedeemablesPromotionStack
	)[]
	order: {
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
	} //19_obj_order_object_validation_res
	tracking_id: string
	session: {
		type: 'LOCK'
		key: string
		ttl_unit: 'HOURS' | 'DAYS' | 'MINUTES' | 'SECONDS' | 'MILLISECONDS' | 'MICROSECONDS' | 'NANOSECONDS'
		ttl: number
	}
}
interface ResponseValidationsFalse {
	valid: false
	redeemables: {
		status: 'APPLICABLE' | 'INAPPLICABLE' | 'SKIPPED'
		id: string
		object: 'voucher' | 'promotion_tier' | 'promotion_stack'
		result: ErrorNoTranslation & { error: { message: string } }
		metadata: Record<string, any>
		categories: CategoryObject
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
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result: {
		discount:
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
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result: { loyalty_card: { points: number } }
	metadata: Record<string, any>
	categories: CategoryObject
}

interface ResponseValidationsRedeemablesGiftCard {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result: { gift: { credits: number } }
	metadata: Record<string, any>
	categories: CategoryObject
}

interface ResponseValidationsRedeemablesDiscountVoucher {
	status: 'APPLICABLE'
	id: string
	object: 'voucher'
	order: OrderObjectValidationResPerRedeemable //19_obj_order_object_validation_res_per_redeemable
	applicable_to: ApplicableToObjectPromotionTier //6_res_applicable_to_object
	inapplicable_to: InapplicableToObjectPromotionTier //6_res_inapplicable_to_object
	result: ValidationsTrueResultVoucherCode //19_obj_validations-true_result_voucher_code
	metadata: Record<string, any>
	categories: CategoryObject
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

interface VoucherObjectDiscountFixedItems2 {
	type: 'FIXED'
	effect: 'APPLY_TO_ITEMS'
	is_dynamic: false
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

export interface ValidationValidateStackableResponse {
	valid: boolean
	tracking_id?: string
	session?: ValidationSessionResponse
	order?: OrdersCreateResponse
	redeemables?: StackableRedeemableResponse[]
}

export type ValidationsValidateCode = PromotionsValidateParams

export type ValidationsValidateContext = ValidationsValidateVoucherParams
