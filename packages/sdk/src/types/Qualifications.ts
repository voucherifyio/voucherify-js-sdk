import { CustomerRequest } from './Customers'
import { Junction } from './Exports'
import { OrderRequest, OrderResponse } from './Orders'
import {
	ApplicableToResultList,
	Discount,
	InapplicableToResultList,
	LoyaltiesTransferPoints,
	ValidationRulesAssignmentsList,
} from '@voucherify/sdk'
import { Category } from './Categories'

export type QualificationsCheckEligibilityRequestBody = {
	customer?: CustomerRequest
	order?: OrderRequest
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
	redeemables: QualificationsRedeemablesResponse
	tracking_id?: string
	order?: OrderResponse
	stacking_rules: QualificationsStackingRulesResponse
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

export type QualificationsRedeemablesResponse = {
	object: 'list'
	data_ref: 'data'
	data: QualificationsRedeemableSingleResponse[]
	total: number
	has_more: boolean
	more_starting_after?: string
}

export type QualificationsStackingRulesResponse = {
	redeemables_limit: number
	applicable_redeemables_limit: number
	applicable_exclusive_redeemables_limit: number
	exclusive_categories: string[]
	joint_categories: string[]
}

export type QualificationsRedeemableSingleResponse = QualificationsRedeemableSingleResponseBase & {
	redeemables?: QualificationsRedeemableSingleResponseBase[]
}

export type QualificationsRedeemableSingleResponseBase = {
	id: string
	object: 'campaign' | 'promotion_tier' | 'promotion_stack' | 'voucher'
	created_at: string
	result: RedeemableSingleResultResponse
	order?: OrderResponse
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

export type RedeemableSingleResultResponse = {
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
