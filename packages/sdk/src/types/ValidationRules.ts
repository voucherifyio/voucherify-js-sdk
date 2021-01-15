export interface ValidationRulesCreate {
	name?: string
	error?: {
		message?: string
	}
	rules?: {
		logic?: string
		[rule: string]: $FixMe
	}
}

export interface ValidationRulesCreateResponse {
	id?: string
	name: string
	error?: {
		message?: string
	}
	rules?: {
		logic?: string
		[rule: string]: $FixMe
	}
	createdAt?: string
	updatedAt?: string
	object?: 'validation_rules'
	assignments_count?: string
}

export type ValidationRulesGetResponse = ValidationRulesCreateResponse

export interface ValidationRulesUpdate {
	name?: string
	rules?: {
		logic?: string
		[rule: string]: $FixMe
	}
}

export type ValidationRulesUpdateResponse = ValidationRulesCreateResponse

export interface ValidationRulesCreateAssigment {
	voucher?: string
	campaign?: string
	promotion_tier?: string
}

export interface ValidationRulesCreateAssigmentResponse {
	id?: string
	rule_id?: string
	related_object_id?: string
	related_object_type?: string
	created_at?: string
	updated_at?: string
	object?: 'validation_rules_assignment'
}

export interface ValidationRulesListParams {
	limit?: number
	page?: number
}

export interface ValidationRulesListResponse {
	object?: 'list'
	total?: number
	data_ref?: 'data'
	data: ValidationRulesCreateResponse[]
}

export type ValidationRulesListAssigmentsParams = ValidationRulesListParams

export interface ValidationRulesListAssigmentsResponse {
	object?: 'list'
	total?: number
	data_ref?: 'data'
	data: ValidationRulesCreateAssigmentResponse[]
}
