import * as T from './types/Rewards'

import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Rewards {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/list-rewards
	 */
	public list(params: T.RewardsListParams = {}) {
		return this.client.get<T.RewardsListResponse>('/rewards', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-reward
	 */
	public create(reward: T.RewardsCreate) {
		return this.client.post<T.RewardsCreateResponse>('/rewards', reward)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward
	 */
	public get(rewardId: string) {
		return this.client.get<T.RewardsGetResponse>(`/rewards/${encode(rewardId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-reward
	 */
	public update(reward: T.RewardsUpdate) {
		return this.client.put<T.RewardsUpdateResponse>(`/rewards/${encode(reward.id)}`, omit(reward, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-reward
	 */
	public delete(rewardId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-assignment
	 */
	public getAssignment(rewardId: string, assignmentId: string) {
		return this.client.get<T.RewardsGetAssignmentResponseBody>(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-reward-assignments
	 */
	public listAssignments(rewardId: string, params: T.RewardsListAssignmentsRequestQuery = {}) {
		return this.client.get<T.RewardsListAssignmentsResponseBody>(`/rewards/${encode(rewardId)}/assignments`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-reward-assignment
	 */
	public createAssignment(rewardId: string, assignment: T.RewardsCreateAssignmentRequestBody) {
		return this.client.post<T.RewardsCreateAssignmentResponseBody>(
			`/rewards/${encode(rewardId)}/assignments`,
			assignment,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-reward-assignment
	 */
	public updateAssignment(rewardId: string, assignment: T.RewardsUpdateAssignmentRequestBody) {
		return this.client.put<T.RewardsUpdateAssignmentResponseBody>(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignment.id)}`,
			omit(assignment, ['id']),
		)
	}
	public deleteAssignment(rewardId: string, assignmentId: string) {
		return this.client.delete(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`)
	}
}
