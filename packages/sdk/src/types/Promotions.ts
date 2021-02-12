import { OrdersItem } from './Orders'
import { DiscountUnit, DiscountAmount, DiscountPercent } from './Vouchers'
import { SimpleCustomer } from './Customers'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'

export interface PromotionsCreateResponse {
	id: string
	name: string
	campaign_type?: 'PROMOTION'
	type: 'AUTO_UPDATE' | 'STATIC'
	description: string
	start_date?: string
	expiration_date?: string
	promotion: {
		object: 'list'
		data_ref: 'tiers'
		tiers?: {
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
			action: {
				discount: DiscountUnit | DiscountAmount | DiscountPercent
			}
			metadata: Record<string, any>
			hierarchy: number
			validation_rule_assignments: {
				data?: ValidationRulesCreateAssignmentResponse[]
				object: 'list'
				total: number
				data_ref: 'data'
			}
		}[]
		has_more: boolean
	}
	category?: string
	auto_join?: boolean
	join_once?: boolean
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
	use_voucher_metadata_schema?: boolean
	protected?: boolean
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
				discount: DiscountUnit | DiscountAmount | DiscountPercent
			}
		}[]
	}
}

export interface PromotionsValidateParams {
	customer?: Omit<SimpleCustomer, 'object'> & { description?: string }
	order?: {
		id?: string
		source_id?: string
		items?: OrdersItem[]
		amount?: number
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

export interface PromotionsValidateResponse {
	valid: boolean
	promotions?: {
		id: string
		object: 'promotion_tier'
		banner?: string
		discount?: DiscountUnit | DiscountAmount | DiscountPercent
		discount_amount?: number
	}[]
	tracking_id?: string
}
