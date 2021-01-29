import * as T from './types/Rewards'

import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Rewards {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-rewards
	 */
	public list(params: T.RewardsListParams = {}) {
		return this.client.get<T.RewardsListResponse>('/rewards', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward
	 */
	public create(reward: T.RewardsCreate) {
		return this.client.post<T.RewardsCreateResponse>('/rewards', reward)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-reward
	 */
	public get(rewardId: string) {
		return this.client.get<T.RewardsGetResponse>(`/rewards/${encode(rewardId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward
	 */
	public update(reward: T.RewardsUpdate) {
		return this.client.put<T.RewardsUpdateResponse>(`/rewards/${encode(reward.id)}`, omit(reward, ['id']))
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
	public listAssignments(rewardId: string, params: T.RewardsListAssignmentsParams = {}) {
		return this.client.get<T.RewardsListAssignmentsResponse>(`/rewards/${encode(rewardId)}/assignments`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment
	 */
	public createAssignment(rewardId: string, assignment: T.RewardsCreateAssignment) {
		return this.client.post<T.RewardsCreateAssignmentResponse>(`/rewards/${encode(rewardId)}/assignments`, assignment)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment
	 */
	public updateAssignment(rewardId: string, assignment: T.RewardsUpdateAssignment) {
		return this.client.put<T.RewardsUpdateAssignmentResponse>(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignment.id)}`,
			omit(assignment, ['id']),
		)
	}
	public deleteAssignment(rewardId: string, assignmentId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`)
	}
}
