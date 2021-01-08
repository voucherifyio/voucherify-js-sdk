import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Loyalties {
	constructor(private client: RequestController) {}

	public list(params: $FixMe) {
		return this.client.get('/loyalties', params)
	}
	public create(campaign: $FixMe) {
		return this.client.post('/loyalties', campaign)
	}
	public get(campaignId: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}`)
	}
	public update(campaign: $FixMe) {
		return this.client.put(`/loyalties/${encode(campaign.id)}`, omit(campaign, ['id']))
	}
	public delete(campaignId: $FixMe) {
		return this.client.delete(`/loyalties/${encode(campaignId)}`)
	}
	public listRewardAssignments(campaignId: string, params: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/rewards`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-reward-assignment-1
	 */
	public createRewardAssignments(campaignId: string, assignment: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/rewards`, assignment)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-reward-assignment-1
	 */
	public updateRewardAssignment(campaignId: string, assignment: $FixMe) {
		return this.client.put(`/loyalties/${encode(campaignId)}/rewards/${assignment.id}`, omit(assignment, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-reward-assignment-1
	 */
	public deleteRewardAssignment(campaignId: string, assignmentId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/rewards/${assignmentId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-earning-rules
	 */
	public listEarningRules(campaignId: string, params: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/earning-rules`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-earning-rule
	 */
	public createEarningRule(campaignId: string, earningRules: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/earning-rules`, earningRules)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-earning-rule
	 */
	public updateEarningRule(campaignId: string, earningRule: $FixMe) {
		return this.client.put(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRule.id}`,
			omit(earningRule, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-earning-rule
	 */
	public deleteEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-members
	 */
	public listMembers(campaignId: string, params?: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-member
	 */
	public createMember(campaignId: string, member: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members`, member)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-member
	 */
	public getMember(campaignId: string, memberId: string) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference#get-member-activities
	 */
	public getMemberActivities(campaignId: string, memberId: string) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}/activities`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-loyalty-card-balance
	 */
	public addPoints(campaignId: string, memberId: string, balance: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/balance`, balance)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-loyalty-card
	 */
	public redeemReward(campaignId: string, memberId: string, reward: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/redemption`, reward)
	}
}
