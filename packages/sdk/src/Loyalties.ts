import * as T from './types/Loyalties'

import { encode, omit } from './helpers'

import type { RequestController } from './RequestController'
export class Loyalties {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-programs
	 */
	public list(params: T.LoyaltiesListParams = {}) {
		return this.client.get<T.LoyaltiesListResponse>('/loyalties', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-loyalty-program
	 */
	public create(campaign: T.LoyaltiesCreateCampaign) {
		return this.client.post<T.LoyaltyCampaignObject>('/loyalties', campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-loyalty-program
	 */
	public get(campaignId: string) {
		return this.client.get<T.LoyaltiesGetCampaignResponse>(`/loyalties/${encode(campaignId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-loyalty-program
	 */
	public update(campaign: T.LoyaltiesUpdateCampaign & { id: string }) {
		return this.client.put<T.LoyaltiesUpdateCampaignResponse>(
			`/loyalties/${encode(campaign.id)}`,
			omit(campaign, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-loyalty-program
	 */
	public delete(campaignId: string, params?: T.LoyaltiesDeleteCampaignParams) {
		return this.client.delete<T.DeleteLoyaltyCampaign>(`/loyalties/${encode(campaignId)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-reward-assignments-1
	 */
	public listRewardAssignments(campaignId: string, params: T.LoyaltiesListRewardAssignmentsParams = {}) {
		return this.client.get<T.LoyaltiesListRewardAssignmentsResponse>(`/loyalties/${encode(campaignId)}/rewards`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-reward-assignment-1
	 */
	public createRewardAssignments(campaignId: string, assignment: T.LoyaltiesCreateRewardAssignments[]) {
		return this.client.post<T.LoyaltiesCreateRewardAssignmentResponse[]>(
			`/loyalties/${encode(campaignId)}/rewards`,
			assignment,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-reward-assignment-1
	 */
	public updateRewardAssignment(campaignId: string, assignment: T.LoyaltiesUpdateRewardAssignment) {
		return this.client.put<T.LoyaltiesUpdateRewardAssignmentResponse>(
			`/loyalties/${encode(campaignId)}/rewards/${assignment.id}`,
			omit(assignment, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-reward-assignment-1
	 */
	public deleteRewardAssignment(campaignId: string, assignmentId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/rewards/${encode(assignmentId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-assignment-1
	 */
	public getRewardAssignment(campaignId: string, assignmentId: string) {
		return this.client.get<T.GetRewardAssignmentsResponse>(
			`/loyalties/${encode(campaignId)}/rewards/${encode(assignmentId)}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-earning-rules
	 */
	public listEarningRules(campaignId: string, params: T.LoyaltiesListEarningRulesParams = {}) {
		return this.client.get<T.LoyaltiesListEarningRules>(`/loyalties/${encode(campaignId)}/earning-rules`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-earning-rule
	 */
	public createEarningRule(campaignId: string, earningRules: T.LoyaltiesCreateEarningRule) {
		return this.client.post<T.LoyaltiesCreateEarningRuleResponse>(
			`/loyalties/${encode(campaignId)}/earning-rules`,
			earningRules,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-earning-rule
	 */
	public updateEarningRule(campaignId: string, earningRule: T.UpdateEarningRuleObject & { id: string }) {
		return this.client.put<T.EarningRuleObject>(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRule.id}`,
			omit(earningRule, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-earning-rule
	 */
	public getEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.get<T.EarningRuleObject>(
			`/loyalties/${encode(campaignId)}/earning-rules/${encode(earningRuleId)}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-earning-rule
	 */
	public deleteEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.delete<{}>(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-earning-rule
	 */
	public enableEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.post<T.EarningRuleObject>(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}/enable`,
			{},
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-earning-rule
	 */
	public disableEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.post<T.EarningRuleObject>(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}/disable`,
			{},
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-members
	 */
	public listMembers(campaignId: string, params?: T.LoyaltiesListMembersParams) {
		return this.client.get<T.LoyaltiesListMembersResponse>(`/loyalties/${encode(campaignId)}/members`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-member
	 */
	public createMember(campaignId: string, member: T.LoyaltiesCreateMember) {
		return this.client.post<T.LoyaltiesCreateMemberResponse>(`/loyalties/${encode(campaignId)}/members`, member)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member
	 */
	public getMember(campaignId: string, memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberResponse>(`/loyalties/${encode(campaignId)}/members/${memberId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-activities
	 */
	public getMemberActivities(campaignId: string, memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberActivitiesResponse>(
			`/loyalties/${encode(campaignId)}/members/${memberId}/activities`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-loyalty-card-balance
	 */
	public addPoints(campaignId: string, memberId: string, balance: T.LoyaltiesAddPoints) {
		return this.client.post<T.LoyaltiesAddPointsResponse>(
			`/loyalties/${encode(campaignId)}/members/${memberId}/balance`,
			balance,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-points-expiration
	 */
	public getPointsExpiration(campaignId: string, memberId: string, params?: T.LoyaltiesGetPointsExpirationParams) {
		return this.client.get<T.GetPointsExpirationResponse>(
			`/loyalties/${encode(campaignId)}/members/${memberId}/points-expiration`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-loyalty-card
	 */
	public redeemReward(campaignId: string, memberId: string, params: T.LoyaltiesRedeemRewardParams) {
		return this.client.post<T.LoyaltyCardObjectExpanded>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/redemption`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions
	 */
	public listLoyaltyCardTransactionsWithCampaignId(
		campaignId: string,
		memberId: string,
		params?: T.ListLoyaltyCardTransactionsParams,
	) {
		return this.client.get<T.GetLoyaltyCardTransactions>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transactions`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions-1
	 */
	public exportLoyaltyCardTransactionsWithCampaignId(
		campaignId: string,
		memberId: string,
		createLoyaltyCardTransactions: T.CreateLoyaltyCardTransactions,
	) {
		return this.client.post<T.ExportTransactionObject>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transactions/export`,
			createLoyaltyCardTransactions,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/transfer-points
	 */
	public transferPoints(campaignId: string, memberId: string, transferLoyaltyPoints: T.ReqTransferLoyaltyPoints) {
		return this.client.post<T.LoyaltyCardObjectNonExpandedCategories>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transfers`,
			transferLoyaltyPoints,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-points-expiration-export
	 */
	public createPointsExpirationExport(campaignId: string, parameters: T.ReqExportPointsExpirations) {
		return this.client.post<T.ExportObjectPointsExpiration>(
			`/loyalties/${encode(campaignId)}/points-expiration/export`,
			parameters,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-assignment-1
	 */
	public getRewardAssignments(campaignId: string, assignmentId: string) {
		return this.client.get<T.GetRewardAssignmentsResponse>(
			`/loyalties/${encode(campaignId)}/reward-assignments/${encode(assignmentId)}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-details
	 */
	public getRewardDetails(campaignId: string, assignmentId: string) {
		return this.client.get<T.GetRewardDetailsResponse>(
			`/loyalties/${encode(campaignId)}/reward-assignments/${encode(assignmentId)}/reward`,
		)
	}
}
