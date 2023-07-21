import { ApplicableToResultList } from './ApplicableTo'

interface RulesObject {
	1: {
		name: string
		property: string | null
		conditions: {
			$one_of_voucherify_conditions: (string | number | boolean)[]
		}
		rules: {
			1: {
				name: string
				property: string
				conditions: Record<string, any>
				rules: Record<string, any>
			}
			logic: string
		}
		error: {
			message: string
		}
	}
	logic: string
}

interface ApplicableToObject {
	excluded: {
		object: 'product' | 'sku' | 'products_collection'
		id: string
		source_id: string
		strict: boolean
		effect: 'APPLY_TO_EVERY'
	}[]
	included: {
		object: 'product' | 'sku' | 'products_collection'
		id: string
		source_id: string
		strict: boolean
		effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
		quantity_limit: number
	}[]
	included_all: boolean
}

export interface ValidationRulesCreate {
	//13_req_create_validation_rule
	name: string
	rules?: RulesObject
	applicable_to?: ApplicableToObject
	error?: {
		message: string
	}
}

export type ValidationRulesCreateResponse = ValidationRulesObject

//13_res_list_validation_rules
export type ValidationRulesGetResponse = ValidationRulesObject & { assignments_count?: number }

export type ValidationRuleObjectGetResponse = ValidationRulesObject

export interface ValidationRulesValidateResponse {
	valid: boolean
	rule_id: string
	applicable_to: ApplicableToResultList
}

export interface ValidationRulesObject {
	//13_obj_validation_rule_object
	id?: string
	name?: string
	rules?: {
		1: {
			name: string
			property: string | null
			conditions: {
				$one_of_voucherify_conditions: (string | number | boolean)[]
			}
			rules: {
				1: {
					name: string
					property: string
					conditions: Record<string, any>
					rules: Record<string, any>
				}
				logic: string
			}
			error: {
				message: string
			}
		}
		logic: string
	}
	error?: {
		message: string
	}
	applicable_to?: {
		excluded: {
			object: 'product' | 'sku' | 'products_collection'
			id: string
			source_id: string
			strict: boolean
			effect: 'APPLY_TO_EVERY'
		}[]
		included: {
			object: 'product' | 'sku' | 'products_collection'
			id: string
			source_id: string
			strict: boolean
			effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
			quantity_limit: number
		}[]
		included_all: boolean
	}
	created_at?: string
	updated_at?: string
	type?: 'basic' | 'advanced' | 'complex'
	context_type?:
		| 'earning_rule.order.paid'
		| 'earning_rule.custom_event'
		| 'earning_rule.customer.segment.entered'
		| 'campaign.discount_coupons'
		| 'campaign.discount_coupons.discount.apply_to_order'
		| 'campaign.discount_coupons.discount.apply_to_items'
		| 'campaign.discount_coupons.discount.apply_to_items_proportionally'
		| 'campaign.discount_coupons.discount.apply_to_items_proportionally_by_quantity'
		| 'campaign.discount_coupons.discount.fixed.apply_to_items'
		| 'campaign.gift_vouchers'
		| 'campaign.gift_vouchers.gift.apply_to_order'
		| 'campaign.gift_vouchers.gift.apply_to_items'
		| 'campaign.referral_program'
		| 'campaign.referral_program.discount.apply_to_order'
		| 'campaign.referral_program.discount.apply_to_items'
		| 'campaign.referral_program.discount.apply_to_items_proportionally'
		| 'campaign.referral_program.discount.apply_to_items_proportionally_by_quantity'
		| 'campaign.referral_program.discount.fixed.apply_to_items'
		| 'campaign.promotion'
		| 'campaign.promotion.discount.apply_to_order'
		| 'campaign.promotion.discount.apply_to_items'
		| 'campaign.promotion.discount.apply_to_items_proportionally'
		| 'campaign.promotion.discount.apply_to_items_proportionally_by_quantity'
		| 'campaign.promotion.discount.fixed.apply_to_items'
		| 'campaign.loyalty_program'
		| 'campaign.lucky_draw'
		| 'voucher.discount_voucher'
		| 'voucher.discount_voucher.discount.apply_to_order'
		| 'voucher.discount_voucher.discount.apply_to_items'
		| 'voucher.discount_voucher.discount.apply_to_items_proportionally'
		| 'voucher.discount_voucher.discount.apply_to_items_proportionally_by_quantity'
		| 'voucher.discount_voucher.discount.fixed.apply_to_items'
		| 'voucher.gift_voucher'
		| 'voucher.gift_voucher.gift.apply_to_order'
		| 'voucher.gift_voucher.gift.apply_to_items'
		| 'voucher.loyalty_card'
		| 'voucher.lucky_draw_code'
		| 'distribution.custom_event'
		| 'reward_assignment.pay_with_points'
		| 'global'
	object?: 'validation_rules'
}

export type ValidationRulesUpdate = Partial<ValidationRulesCreate> & { id: string }

export type ValidationRulesUpdateResponse = ValidationRulesCreateResponse

//13_req_create_validation_rule_assignments
export type ValidationRulesCreateAssignment =
	| ValidationRuleAssignmentsVoucher
	| ValidationRuleAssignmentsCampaign
	| ValidationRuleAssignmentsPromotionTier
	| ValidationRuleAssignmentsEarningRule
	| ValidationRuleAssignmentsReward
	| ValidationRuleAssignmentsDistribution

interface ValidationRuleAssignmentsVoucher {
	voucher?: string
}

interface ValidationRuleAssignmentsCampaign {
	campaign?: string
}

interface ValidationRuleAssignmentsPromotionTier {
	promotion_tier?: string
}
interface ValidationRuleAssignmentsEarningRule {
	earning_rule?: string
}
interface ValidationRuleAssignmentsReward {
	related_object_id?: string
	related_object_type?: 'reward_assignment'
}
interface ValidationRuleAssignmentsDistribution {
	distribution?: string
}

export interface ValidationRulesCreateAssignmentResponse {
	//13_res_validation-rules_validationRuleId_assignments
	id: string
	rule_id: string
	related_object_id?: string
	related_object_type?:
		| 'voucher'
		| 'campaign'
		| 'earning_rule'
		| 'reward_assignment'
		| 'promotion_tier'
		| 'distribution'
	created_at?: string
	object: 'validation_rules_assignment'
}

export interface ValidationRulesListParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | '-name' | 'name' | 'updated_at' | '-updated_at'
}

export interface ValidationRulesListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: ValidationRulesGetResponse[]
}

export interface ValidationRuleListAssignmentsParams {
	limit?: number
	page?: number
	order?: '-created_at' | 'created_at'
}

export interface ValidationRulesListAssignmentsParams {
	limit?: number
	page?: number
	order?: string
	rule?: string
	related_object_id?: string
}
export type ValidationRuleListAssignmentsResponse = ValidationRulesListAssignmentsResponse
export interface ValidationRulesListAssignmentsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: ValidationRulesCreateAssignmentResponse[]
}
