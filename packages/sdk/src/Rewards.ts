import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Rewards {
	constructor(private client: RequestController) {}

	list(params: $FixMe) {
		return this.client.get('/rewards', params)
	}
	create(reward: $FixMe) {
		return this.client.post('/rewards', reward)
	}
	get(rewardId: string) {
		return this.client.get(`/rewards/${encode(rewardId)}`)
	}
	update(reward: $FixMe) {
		return this.client.put(`/rewards/${encode(reward.id)}`, omit(reward, ['id']))
	}
	delete(rewardId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}`)
	}
	listAssignments(rewardId: string, params: $FixMe) {
		return this.client.get(`/rewards/${encode(rewardId)}/assignments`, params)
	}
	createAssignment(rewardId: string, assignment: $FixMe) {
		return this.client.post(`/rewards/${encode(rewardId)}/assignments`, assignment)
	}
	updateAssignment(rewardId: string, assignment: $FixMe) {
		return this.client.put(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignment.id)}`,
			omit(assignment, ['id']),
		)
	}
	deleteAssignment(rewardId: string, assignmentId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`)
	}
}
