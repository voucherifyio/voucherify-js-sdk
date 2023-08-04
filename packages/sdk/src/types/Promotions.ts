import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed } from './DiscountVoucher'

import { CreateOrder } from './Orders'
import { PromotionTier, RedeemPromotionTier, ValidationPromotionTierTrue } from './PromotionTiers'
import { CreateCustomer } from './Customers'
import { ValidationRulesCreateAssignmentObject } from './ValidationRules'
import { CategoryObject } from './Categories'

export type ValidatePromotionRequest = Partial<
	RedeemPromotionTier & {
		options: {
			expand: string[]
		}
	}
>

export interface ResponseValidatePromotion {
	valid: boolean
	tracking_id: string
	promotions?: ValidationPromotionTierTrue & { category_id?: string; categories?: CategoryObject }
}

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
		data?: ValidationRulesCreateAssignmentObject[]
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
	customer: CreateCustomer
	order: CreateOrder
	metadata?: Record<string, any>
}

export interface PromotionsValidateQueryParams {
	audienceRulesOnly?: boolean
	filters?: Record<string, any>
}
