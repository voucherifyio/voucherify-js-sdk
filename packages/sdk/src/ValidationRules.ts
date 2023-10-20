import * as T from './types/ValidationRules'

import { encode, omit } from './helpers'

import type { RequestController } from './RequestController'

export class ValidationRules {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/create-validation-rules
	 */
	public create(validationRule: T.ValidationRulesCreate) {
		return this.client.post<T.ValidationRulesCreateResponse>('/validation-rules', validationRule)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-validation-rules
	 */
	public get(validationRuleId: string) {
		return this.client.get<T.ValidationRulesGetResponse>(`/validation-rules/${encode(validationRuleId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-validation-rules
	 */
	public update(validationRule: T.ValidationRulesUpdate) {
		return this.client.put<T.ValidationRulesUpdateResponse>(
			`/validation-rules/${encode(validationRule.id)}`,
			omit(validationRule, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-validation-rules
	 */
	public delete(validationRuleId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-validation-rules-assignment
	 */
	public createAssignment(validationRuleId: string, assignment: T.ValidationRulesCreateAssignment) {
		return this.client.post<T.ValidationRulesCreateAssignmentResponse>(
			`/validation-rules/${encode(validationRuleId)}/assignments`,
			assignment,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-validation-rules-assignment
	 */
	public deleteAssignment(validationRuleId: string, assignmentId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}/assignments/${encode(assignmentId)}`)
	}

	public validate(validationRuleId: string, params: any = {}) {
		return this.client.post<T.ValidationRulesValidateResponse>(
			`/validation-rules/${encode(validationRuleId)}/validation`,
			params,
		)
	}

	/**
	 * @see https://docs.voucherify.io/reference/list-validation-rules
	 */
	public list(params: T.ValidationRulesListParams = {}) {
		return this.client.get<T.ValidationRulesListResponse>('/validation-rules', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-validation-rules-assignments
	 */
	public listRulesAssignments(params: T.ValidationRulesListRulesAssignmentsRequestQuery = {}) {
		return this.client.get<T.ValidationRulesListRulesAssignmentsResponseBody>(`/validation-rules-assignments`, params)
	}

	/**
	 * @see https://docs.voucherify.io/reference/list-validation-rule-assignments
	 */
	public listAssignments(validationRuleId: string, params: T.ValidationRulesListAssignmentsParams = {}) {
		return this.client.get<T.ValidationRulesListAssignmentsResponse>(
			`/validation-rules/${encode(validationRuleId)}/assignments`,
			params,
		)
	}
}
