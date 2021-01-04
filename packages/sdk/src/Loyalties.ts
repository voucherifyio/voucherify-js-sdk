import { encode } from './helpers'
import omit from 'lodash/omit'
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
	public createRewardAssignments(campaignId: string, assignment: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/rewards`, assignment)
	}
	public updateRewardAssignment(campaignId: string, assignment: $FixMe) {
		return this.client.put(`/loyalties/${encode(campaignId)}/rewards/${assignment.id}`, omit(assignment, ['id']))
	}
	public deleteRewardAssignment(campaignId: string, assignmentId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/rewards/${assignmentId}`)
	}
	public listEarningRules(campaignId: string, params: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/earning-rules`, params)
	}
	public createEarningRule(campaignId: string, earningRules: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/earning-rules`, earningRules)
	}
	public updateEarningRule(campaignId: string, earningRule: $FixMe) {
		return this.client.put(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRule.id}`,
			omit(earningRule, ['id']),
		)
	}
	public deleteEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}`)
	}
	public listMembers(campaignId: string, params?: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members`, params)
	}
	public createMember(campaignId: string, member: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members`, member)
	}
	public getMember(campaignId: string, memberId: string) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}`)
	}
	public getMemberActivities(campaignId: string, memberId: string) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}/activities`)
	}
	public addPoints(campaignId: string, memberId: string, balance: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/balance`, balance)
	}
	public redeemReward(campaignId: string, memberId: string, reward: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/redemption`, reward)
	}
}
