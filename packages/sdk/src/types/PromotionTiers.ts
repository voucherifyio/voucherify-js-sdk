import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed } from './DiscountVoucher'
import { OrdersCreateResponse, OrdersItem } from './Orders'

import { SimpleCustomer } from './Customers'
import { ValidationRulesListAssignmentsResponse } from './ValidationRules'
import { ValidationSessionReleaseParams } from './ValidateSession'

export interface SimplePromotionTier {
	tracking_id: string
	metadata?: Record<string, any>
	valid: boolean
	id: string
	name: string
	banner?: string
	discount: DiscountUnit | DiscountPercent | DiscountAmount | DiscountFixed
	hierarchy: number
	object: 'promotion_tier'
}
export interface PromotionTier {
	id: string
	object: 'promotion_tier'
	name: string
	banner?: string
	campaign: {
		id: string
		object: 'campaign'
		start_date?: string
		expiration_date?: string
		active: boolean
	}
	validation_rule_assignments: ValidationRulesListAssignmentsResponse
	action: {
		discount: DiscountUnit | DiscountPercent | DiscountAmount | DiscountFixed
	}
	hierarchy: number
	metadata?: Record<string, any>
	active?: boolean
}

export interface PromotionTiersListAllParams {
	is_available?: boolean
	limit?: number
	page?: number
}

export interface PromotionTiersListAllResponse {
	object: 'list'
	data_ref: 'tiers'
	tiers: PromotionTier[]
	has_more: boolean
}

export type PromotionTiersListResponse = PromotionTiersListAllResponse

export type PromotionTierGetResponse = PromotionTier

export interface PromotionTiersCreateParams {
	name?: string
	banner?: string
	action?: {
		discount?: DiscountUnit | DiscountPercent | DiscountAmount | DiscountFixed
	}
	metadata?: Record<string, any>
}

export type PromotionTiersCreateResponse = PromotionTier

export interface PromotionTiersRedeemParams {
	customer?: Omit<SimpleCustomer, 'object'> & { description?: string }
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: OrdersItem[]
		status?: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	session?: ValidationSessionReleaseParams
}

export interface PromotionTiersRedeemResponse {
	id: string
	object: 'redemption'
	date: string
	customer_id?: string
	tracking_id?: string
	order: Omit<OrdersCreateResponse, 'object' | 'customer'> & {
		customer: {
			id: string
			object: 'customer'
			referrals: {
				campaigns: any[]
				total: number
			}
		}
		total_discount_amount?: number
		total_amount?: number
	}
	result?: string
	promotion_tier: PromotionTier & {
		summary: {
			redemptions: {
				total_redeemed: number
			}
			orders: {
				total_amount: number
				total_discount_amount: number
			}
		}
	}
}

export interface PromotionTierRedeemDetailsSimple {
	id: string
	name: string
	banner?: string
	campaign: {
		id: string
	}
}

export type PromotionTierRedeemDetails = PromotionTier & {
	summary: {
		redemptions: {
			total_redeemed: number
		}
		orders: {
			total_amount: number
			total_discount_amount: number
		}
	}
}

export type PromotionTiersUpdateParams = PromotionTiersCreateParams & { id: string }

export type PromotionTiersUpdateResponse = PromotionTier
