import { ApplicableToResultList } from './ApplicableTo'

export interface ValidationRulesCreate {
	name: string
	error?: {
		message?: string
	}
	rules?: {
		logic?: string
		[rule: string]: any
	}
}

export interface ValidationRulesCreateResponse {
	id: string
	name: string
	error?: {
		message?: string
	}
	rules?: {
		logic?: string
		[rule: string]: any
	}
	created_at: string
	updated_at?: string
	object: 'validation_rules'
}

export interface ValidationRulesValidateResponse {
	valid: boolean
	rule_id: string
	applicable_to: ApplicableToResultList
}

export type ValidationRulesGetResponse = ValidationRulesCreateResponse & { assignments_count?: string }

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
}

export interface ValidationRulesListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: ValidationRulesGetResponse[]
}

export interface ValidationRulesListAssignmentsParams {
	limit?: number
	page?: number
	order?: '-created_at' | 'created_at'
}

export interface ValidationRulesListAssignmentsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: ValidationRulesCreateAssignmentResponse[]
}
