import { DiscountUnit, DiscountAmount, DiscountPercent } from './Vouchers'
import { ValidationRulesListAssignmentsResponse } from './ValidationRules'
import { SimpleCustomer } from './Customers'
import { OrdersCreateResponse, OrdersItem } from './Orders'

export interface PromotionTiersTier {
	id?: string
	object?: string
	name?: string
	banner?: string
	campaign?: {
		id?: string
		object?: 'campaign'
		start_date?: string
		expiration_date?: string
		active?: boolean
	}
	validation_rule_assignments?: ValidationRulesListAssignmentsResponse
	action: {
		discount?: DiscountUnit | DiscountPercent | DiscountAmount
	}
	metadata: Record<string, any>
}

export interface PromotionTiersListAllParams {
	is_available?: boolean
	limit?: number
	page?: number
}

export interface PromotionTiersListAllResponse {
	object: 'list'
	data_ref: string
	tiers?: PromotionTiersTier[]
	has_more?: boolean
}

export type PromotionTiersListResponse = Omit<PromotionTiersListAllResponse, 'has_more'> & { total?: number }

export interface PromotionTiersCreateParams {
	name?: string
	banner?: string
	action?: {
		discount?: DiscountUnit | DiscountPercent | DiscountAmount
	}
	metadata?: Record<string, any>
}

export type PromotionTiersCreateResponse = Omit<PromotionTiersTier, 'validation_rule_assignments'>

export interface PromotionTiersRedeemParams {
	customer?: Omit<SimpleCustomer, 'object'> & { description?: string }
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: OrdersItem[]
		status?: 'CREATED' | 'PAID' | 'CANCELLED' | 'FULFILLED'
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	session?: {
		key?: string
	}
}

export interface PromotionTiersRedeemResponse {
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	order: OrdersCreateResponse & { referrer?: $FixMe }
	result?: string
	promotion_tier?: {
		id?: string
		object?: 'promotion_tier'
		name?: string
		banner?: string
		campaign?: {
			id?: string
			object?: 'campaign'
			start_date?: string
			expiration_date?: string
			active?: boolean
		}
		condition?: {
			id?: string
			created_at?: string
			junction?: 'AND' | 'OR'
			[orders: string]: $FixMe
		}
		action?: {
			discount?: DiscountUnit | DiscountPercent | DiscountAmount
		}
		metadata?: Record<string, any>
	}
}

export type PromotionTiersUpdateParams = PromotionTiersCreateParams & { id: string }

export type PromotionTiersUpdateResponse = Omit<PromotionTiersTier, 'validation_rule_assignments'>
