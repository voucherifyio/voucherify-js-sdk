import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Rewards {
	constructor(private client: RequestController) {}

	public list(params: $FixMe) {
		return this.client.get('/rewards', params)
	}
	public create(reward: $FixMe) {
		return this.client.post('/rewards', reward)
	}
	public get(rewardId: string) {
		return this.client.get(`/rewards/${encode(rewardId)}`)
	}
	public update(reward: $FixMe) {
		return this.client.put(`/rewards/${encode(reward.id)}`, omit(reward, ['id']))
	}
	public delete(rewardId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}`)
	}
	public listAssignments(rewardId: string, params: $FixMe) {
		return this.client.get(`/rewards/${encode(rewardId)}/assignments`, params)
	}
	public createAssignment(rewardId: string, assignment: $FixMe) {
		return this.client.post(`/rewards/${encode(rewardId)}/assignments`, assignment)
	}
	public updateAssignment(rewardId: string, assignment: $FixMe) {
		return this.client.put(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignment.id)}`,
			omit(assignment, ['id']),
		)
	}
	public deleteAssignment(rewardId: string, assignmentId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`)
	}
}
