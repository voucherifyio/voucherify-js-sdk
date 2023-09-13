import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed } from './DiscountVoucher'

import { OrdersItem } from './Orders'
import { PromotionTier } from './PromotionTiers'
import { SimpleCustomer } from './Customers'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'

export interface PromotionsCreateResponse {
	id: string
	name: string
	campaign_type?: 'PROMOTION'
	type: 'STATIC'
	description?: string
	start_date?: string
	expiration_date?: string
	promotion: {
		object: 'list'
		data_ref: 'tiers'
		tiers?: PromotionTier[]
		has_more: boolean
	}
	category?: string
	auto_join: boolean
	join_once: boolean
	validation_rules_assignments: {
		data?: ValidationRulesCreateAssignmentResponse[]
		object: 'list'
		total: number
		data_ref: 'data'
	}
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	metadata?: Record<string, string>
	created_at: string
	vouchers_generation_status: 'DONE'
	active: boolean
	use_voucher_metadata_schema: boolean
	protected: boolean
	object: 'campaign'
}

export interface PromotionsCreate {
	name: string
	campaign_type: 'PROMOTION'
	start_date?: string
	expiration_date?: string
	promotion?: {
		tiers: {
			name: string
			banner: string
			action: {
				discount: DiscountUnit | DiscountAmount | DiscountPercent | DiscountFixed
			}
			metadata?: Record<string, any>
		}[]
	}
}

export interface PromotionsValidateParams {
	customer?: Omit<SimpleCustomer, 'id' | 'object'> & { description?: string; id?: string }
	order?: {
		id?: string
		source_id?: string
		items?: OrdersItem[]
		amount?: number
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

export interface PromotionsValidateQueryParams {
	audienceRulesOnly?: boolean
	filters?: Record<string, any>
}

export interface PromotionsValidateResponse {
	valid: boolean
	promotions?: {
		id: string
		object: 'promotion_tier'
		banner?: string
		name: string
		start_date?: string
		expiration_date?: string
		discount?: DiscountUnit | DiscountAmount | DiscountPercent | DiscountFixed
		discount_amount?: number
		applied_discount_amount?: number
		metadata?: Record<string, any>
		order?: {
			id?: string
			source_id?: string
			amount: number
			initial_amount?: number
			items_discount_amount?: number
			items_applied_discount_amount?: number
			items?: OrdersItem[]
			metadata?: Record<string, any>
			discount_amount?: number
			total_discount_amount?: number
			total_amount?: number
			applied_discount_amount?: number
			total_applied_discount_amount?: number
		}
		hierarchy?: number
	}[]
	tracking_id?: string
}
