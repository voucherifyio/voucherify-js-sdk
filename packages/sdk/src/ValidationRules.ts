import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class ValidationRules {
	constructor(private client: RequestController) {}

	public create(validationRule: $FixMe) {
		return this.client.post('/validation-rules', validationRule)
	}
	public get(validationRuleId: string) {
		return this.client.get(`/validation-rules/${encode(validationRuleId)}`)
	}
	public update(validationRule: $FixMe) {
		return this.client.put(`/validation-rules/${encode(validationRule.id)}`, omit(validationRule, ['id']))
	}
	public delete(validationRuleId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}`)
	}
	public createAssignment(validationRuleId: string, assignment: $FixMe) {
		return this.client.post(`/validation-rules/${encode(validationRuleId)}/assignments`, assignment)
	}
	public deleteAssignment(validationRuleId: string, assignmentId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}/assignments/${encode(assignmentId)}`)
	}
	public validate(validationRuleId: string, params?: $FixMe) {
		return this.client.post(`/validation-rules/${encode(validationRuleId)}/validation`, params)
	}
	public list(params: $FixMe) {
		return this.client.get('/validation-rules', params)
	}
	public listAssignments(validationRuleId: string, params: $FixMe) {
		return this.client.get(`/validation-rules/${encode(validationRuleId)}/assignments`, params)
	}
}
