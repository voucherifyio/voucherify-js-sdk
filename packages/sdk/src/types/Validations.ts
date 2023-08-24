import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed, DiscountUnitMultiple } from './DiscountVoucher'
import { CustomerRequest, CustomersCreateBody } from './Customers'
import { StackableOptions, StackableRedeemableParams, StackableRedeemableResponse } from './Stackable'
import { ValidationSessionParams, ValidationSessionResponse } from './ValidateSession'
import { ApplicableToResultList } from './ApplicableTo'
import { ValidationError } from './ValidationError'

import { OrdersItem, OrdersCreate, OrdersCreateResponse } from './Orders'
import { PromotionsValidateParams } from './Promotions'

export interface ValidationsValidateVoucherParams {
	customer?: CustomerRequest
	order?: {
		id?: string
		source_id?: string
		status?: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
		amount?: number
		items?: OrdersItem[]
		customer?: CustomerRequest
		referrer?: CustomerRequest
		metadata?: Record<string, any>
	}
	gift?: {
		credits: number
	}
	reward?: {
		id: string
		points?: number
	}
	session?: ValidationSessionParams
}

export interface ValidationsValidateVoucherResponse {
	applicable_to: ApplicableToResultList
	inapplicable_to: ApplicableToResultList
	campaign?: string
	campaign_id?: string
	metadata: Record<string, any>
	code: string
	valid?: boolean
	discount?: DiscountAmount | DiscountUnit | DiscountUnitMultiple | DiscountPercent | DiscountFixed
	gift?: {
		amount: number
		balance: number
		effect?: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	}
	loyalty?: {
		points_cost: number
	}
	reward?: {
		id: string
		assignment_id: string
		points: number
	}
	order?: {
		id?: string
		source_id?: string
		created_at?: string
		updated_at?: string
		status?: 'CREATED' | 'PAID' | 'PROCESSING' | 'CANCELED' | 'FULFILLED'
		amount: number
		initial_amount?: number
		discount_amount: number
		applied_discount_amount?: number
		items_discount_amount?: number
		total_discount_amount?: number
		total_amount: number
		items_applied_discount_amount?: number
		total_applied_discount_amount?: number
		items?: OrdersItem[]
		metadata?: Record<string, any>
		customer?: CustomerRequest
		customer_id?: string
		referrer_id: string | null
		object: 'order'
		redemptions?: OrderObjectRedemptions
	}
	session?: ValidationSessionParams
	start_date?: string
	expiration_date?: string
	tracking_id: string
	error?: ValidationError
}

type OrderObjectRedemptions = Record<
	string,
	{
		date?: string
		related_object_type?: 'voucher' | 'promotion_tier'
		related_object_id?: string
		related_object_parent_id?: string
		stacked?: string[]
	}
>

export interface ValidationsValidateStackableParams {
	options?: StackableOptions
	redeemables: StackableRedeemableParams[]
	session?: ValidationSessionParams
	order?: OrdersCreate
	customer?: CustomersCreateBody
	metadata?: Record<string, any>
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
