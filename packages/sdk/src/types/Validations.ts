import { DiscountAmount, DiscountPercent, DiscountUnit } from './DiscountVoucher'
import { CustomersCreateBody } from './Customers'
import { StackableOptions, StackableRedeemableParams, StackableRedeemableResponse } from './Stackable'
import { ValidationSessionParams, ValidationSessionResponse } from './ValidateSession'
import { ApplicableToResultList } from './ApplicableTo'

import { OrdersItem, OrdersCreate, OrdersCreateResponse } from './Orders'
import { PromotionsValidateParams } from './Promotions'

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
	discount?: DiscountAmount | DiscountUnit | DiscountPercent
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
	}
	start_date?: string
	expiration_date?: string
	tracking_id: string
}

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
