import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Rewards {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-rewards
	 */
	public list(params: $FixMe) {
		return this.client.get('/rewards', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward
	 */
	public create(reward: $FixMe) {
		return this.client.post('/rewards', reward)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-reward
	 */
	public get(rewardId: string) {
		return this.client.get(`/rewards/${encode(rewardId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward
	 */
	public update(reward: $FixMe) {
		return this.client.put(`/rewards/${encode(reward.id)}`, omit(reward, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward
	 */
	public delete(rewardId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-reward-assignments
	 */
	public listAssignments(rewardId: string, params: $FixMe) {
		return this.client.get(`/rewards/${encode(rewardId)}/assignments`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment
	 */
	public createAssignment(rewardId: string, assignment: $FixMe) {
		return this.client.post(`/rewards/${encode(rewardId)}/assignments`, assignment)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment
	 */
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
