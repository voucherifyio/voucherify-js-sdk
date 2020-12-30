import { encode } from './helpers'
import omit from 'lodash/omit'
import type { RequestController } from './RequestController'

export class Loyalties {
	constructor(private client: RequestController) {}

	list(params: $FixMe) {
		return this.client.get('/loyalties', params)
	}
	create(campaign: $FixMe) {
		return this.client.post('/loyalties', campaign)
	}
	get(campaignId: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}`)
	}
	update(campaign: $FixMe) {
		return this.client.put(`/loyalties/${encode(campaign.id)}`, omit(campaign, ['id']))
	}
	delete(campaignId: $FixMe) {
		return this.client.delete(`/loyalties/${encode(campaignId)}`)
	}
	listRewardAssignments(campaignId: string, params: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/rewards`, params)
	}
	createRewardAssignments(campaignId: string, assignment: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/rewards`, assignment)
	}
	updateRewardAssignment(campaignId: string, assignment: $FixMe) {
		return this.client.put(`/loyalties/${encode(campaignId)}/rewards/${assignment.id}`, omit(assignment, ['id']))
	}
	deleteRewardAssignment(campaignId: string, assignmentId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/rewards/${assignmentId}`)
	}
	listEarningRules(campaignId: string, params: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/earning-rules`, params)
	}
	createEarningRule(campaignId: string, earningRules: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/earning-rules`, earningRules)
	}
	updateEarningRule(campaignId: string, earningRule: $FixMe) {
		return this.client.put(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRule.id}`,
			omit(earningRule, ['id']),
		)
	}
	deleteEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}`)
	}
	listMembers(campaignId: string, params?: $FixMe) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members`, params)
	}
	createMember(campaignId: string, member: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members`, member)
	}
	getMember(campaignId: string, memberId: string) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}`)
	}
	getMemberActivities(campaignId: string, memberId: string) {
		return this.client.get(`/loyalties/${encode(campaignId)}/members/${memberId}/activities`)
	}
	addPoints(campaignId: string, memberId: string, balance: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/balance`, balance)
	}
	redeemReward(campaignId: string, memberId: string, reward: $FixMe) {
		return this.client.post(`/loyalties/${encode(campaignId)}/members/${memberId}/redemption`, reward)
	}
}
