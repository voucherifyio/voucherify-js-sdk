import * as T from './types/Rewards'

import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Rewards {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/list-rewards
	 */
	public list(params?: T.RewardsListParams) {
		return this.client.get<T.RewardsListResponse>('/rewards', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-reward
	 */
	public create(body: T.RewardsCreateBody) {
		return this.client.post<T.RewardsCreateResponse>('/rewards', body)
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
	public update(reward: T.RewardsUpdateResponse, body: T.RewardsUpdateBody) {
		return this.client.put<T.RewardsUpdateResponse>(`/rewards/${encode(reward.id)}`, omit(reward, ['id']), body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-reward
	 */
	public delete(rewardId: string) {
		return this.client.delete<undefined>(`/rewards/${encode(rewardId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-reward-assignments
	 */
	public listAssignments(rewardId: string, params: T.RewardsListAssignmentsParams = {}) {
		return this.client.get<T.RewardsListAssignmentsResponse>(`/rewards/${encode(rewardId)}/assignments`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-reward-assignment
	 */
	public createAssignment(rewardId: string, assignment: T.RewardsCreateAssignment) {
		return this.client.post<T.RewardsCreateAssignmentResponse>(`/rewards/${encode(rewardId)}/assignments`, assignment)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-reward-assignment
	 */
	public updateAssignment(rewardId: string, assignment: T.RewardsUpdateAssignmentBody & { id: string }) {
		return this.client.put<T.RewardsUpdateAssignmentResponse>(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignment.id)}`,
			omit(assignment, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-assignment
	 */
	public getAssignment(rewardId: string, assignmentId: string) {
		return this.client.get<T.RewardsUpdateAssignmentResponse>(
			`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`,
		)
	}
	public deleteAssignment(rewardId: string, assignmentId: string) {
		return this.client.delete<undefined>(`/rewards/${encode(rewardId)}/assignments/${encode(assignmentId)}`)
	}
}
