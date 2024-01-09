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

export interface ValidationRulesCreateAssignment {
	voucher?: string
	campaign?: string
	promotion_tier?: string
}

export interface ValidationRulesCreateAssignmentResponse {
	id: string
	rule_id: string
	related_object_id?: string
	related_object_type?: string
	created_at?: string
	updated_at: string
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
}

export interface ValidationRulesListAssignmentsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: ValidationRulesCreateAssignmentResponse[]
}
// Domain types
// Validation Rules Assignment

export type ValidationRulesAssignmentsList = ValidationRulesListResponse

export interface ValidationRulesAssignment {
	id: string
	rule_id: string
	related_object_id: string
	related_object_type: string
	created_at: string
	object: 'validation_rules_assignment'
}

// 0-level types
// list rules assignments

export interface ValidationRulesListRulesAssignmentsRequestQuery {
	related_object_id?: string
	rule?: string
	page?: number
	limit?: number
	order?: 'created_at' | '-created_at'
}

export interface ValidationRulesListRulesAssignmentsResponseBody {
	object: 'list'
	data_ref: 'data'
	total: number
	data: ValidationRulesAssignment[]
}
