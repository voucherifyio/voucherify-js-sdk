import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class ValidationRules {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-validation-rules
	 */
	public create(validationRule: $FixMe) {
		return this.client.post('/validation-rules', validationRule)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-validation-rules
	 */
	public get(validationRuleId: string) {
		return this.client.get(`/validation-rules/${encode(validationRuleId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-validation-rules
	 */
	public update(validationRule: $FixMe) {
		return this.client.put(`/validation-rules/${encode(validationRule.id)}`, omit(validationRule, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-validation-rules
	 */
	public delete(validationRuleId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-validation-rules-assignment
	 */
	public createAssignment(validationRuleId: string, assignment: $FixMe) {
		return this.client.post(`/validation-rules/${encode(validationRuleId)}/assignments`, assignment)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-validation-rules-assignment
	 */
	public deleteAssignment(validationRuleId: string, assignmentId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}/assignments/${encode(assignmentId)}`)
	}
	public validate(validationRuleId: string, params?: $FixMe) {
		return this.client.post(`/validation-rules/${encode(validationRuleId)}/validation`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-validation-rules
	 */
	public list(params: $FixMe) {
		return this.client.get('/validation-rules', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-validation-rule-assignments
	 */
	public listAssignments(validationRuleId: string, params: $FixMe) {
		return this.client.get(`/validation-rules/${encode(validationRuleId)}/assignments`, params)
	}
}
