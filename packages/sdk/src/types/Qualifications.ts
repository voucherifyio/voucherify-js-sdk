import { CustomerRequest } from './Customers'
import { Junction } from './Exports'
import { Order, OrderCalculated } from './Orders'
import { ApplicableToResultList, InapplicableToResultList } from './ApplicableTo'
import { Category } from './Categories'
import { Discount } from './DiscountVoucher'
import { LoyaltiesTransferPoints } from './Loyalties'
import { ValidationRulesAssignmentsList } from './ValidationRules'

export type QualificationsCheckEligibilityRequestBody = {
	customer?: CustomerRequest
	order?: Order
	mode?: 'BASIC' | 'ADVANCED'
	tracking_id?: string
	scenario?:
		| 'ALL'
		| 'CUSTOMER_WALLET'
		| 'AUDIENCE_ONLY'
		| 'PRODUCTS'
		| 'PRODUCTS_DISCOUNT'
		| 'PROMOTION_STACKS'
		| 'PRODUCTS_BY_CUSTOMER'
		| 'PRODUCTS_DISCOUNT_BY_CUSTOMER' // default ALL
	options?: {
		limit?: number //max 100
		starting_after?: string
		filters?: {
			junction?: Junction
		} & Partial<Record<QualificationsFiltersFields, QualificationsFieldConditions>>
		expand?: ('redeemable' | 'category' | 'validation_rules')[]
		sorting_rule?: 'BEST_DEAL' | 'LEAST_DEAL' | 'DEFAULT'
	}
	metadata?: Record<string, any>
}

export type QualificationsCheckEligibilityResponseBody = {
	redeemables: QualificationsRedeemableList
	tracking_id?: string
	order?: OrderCalculated
	stacking_rules: QualificationsStackingRules
}

//domain type
export type QualificationsFiltersFields =
	| 'category_id'
	| 'campaign_id'
	| 'resource_id'
	| 'resource_type'
	| 'voucher_type'
	| 'code'

export type QualificationsFiltersCondition = '$in' | '$not_in' | '$is' | '$is_not' | '$has_value' | '$is_unknown'

export type QualificationsFieldConditions = { conditions?: Partial<Record<QualificationsFiltersCondition, any>> }

export type QualificationsRedeemableList = {
	object: 'list'
	data_ref: 'data'
	data: QualificationsRedeemable[]
	total: number
	has_more: boolean
	more_starting_after?: string
}

export type QualificationsStackingRules = {
	redeemables_limit: number
	applicable_redeemables_limit: number
	applicable_exclusive_redeemables_limit: number
	exclusive_categories: string[]
	joint_categories: string[]
}

export type QualificationsRedeemable = QualificationsRedeemableBase & {
	redeemables?: QualificationsRedeemableBase[]
}

export type QualificationsRedeemableBase = {
	id: string
	object: 'campaign' | 'promotion_tier' | 'promotion_stack' | 'voucher'
	created_at: string
	result: RedeemableResult
	order?: OrderCalculated
	validation_rule_id?: string
	applicable_to: ApplicableToResultList
	inapplicable_to: InapplicableToResultList
	metadata: Record<string, unknown> | null
	categories: Category[]
	banner?: string
	name?: string
	campaign_name?: string
	campaign_id?: string
	validation_rules_assignments?: ValidationRulesAssignmentsList
}

export type RedeemableResult = {
	discount?: Discount
	gift?: {
		balance: number
		credits: number
	}
	loyalty_card?: {
		points?: number
		balance?: number
		exchange_ratio?: number
		points_ratio?: number
		transfers?: LoyaltiesTransferPoints[]
	}
	error?: Error
}
