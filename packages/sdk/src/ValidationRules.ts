import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class ValidationRules {
	constructor(private client: RequestController) {}

	create(validationRule: $FixMe) {
		return this.client.post('/validation-rules', validationRule)
	}
	get(validationRuleId: string) {
		return this.client.get(`/validation-rules/${encode(validationRuleId)}`)
	}
	update(validationRule: $FixMe) {
		return this.client.put(`/validation-rules/${encode(validationRule.id)}`, omit(validationRule, ['id']))
	}
	delete(validationRuleId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}`)
	}
	createAssignment(validationRuleId: string, assignment: $FixMe) {
		return this.client.post(`/validation-rules/${encode(validationRuleId)}/assignments`, assignment)
	}
	deleteAssignment(validationRuleId: string, assignmentId: string) {
		return this.client.delete(`/validation-rules/${encode(validationRuleId)}/assignments/${encode(assignmentId)}`)
	}
	validate(validationRuleId: string, params?: $FixMe) {
		return this.client.post(`/validation-rules/${encode(validationRuleId)}/validation`, params)
	}
	list(params: $FixMe) {
		return this.client.get('/validation-rules', params)
	}
	listAssignments(validationRuleId: string, params: $FixMe) {
		return this.client.get(`/validation-rules/${encode(validationRuleId)}/assignments`, params)
	}
}
