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
		return this.client.post<T.LoyaltiesCreateCampaignResponse>('/loyalties', campaign)
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
	public update(campaign: T.LoyaltiesUpdateCampaign) {
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
	 * @see https://docs.voucherify.io/reference/list-reward-assignments-1
	 */
	public listLoyaltyTierReward(campaignId: string, tierId: string) {
		return this.client.get<T.ListLoyaltyTierRewardResponse>(`/loyalties/${encode(campaignId)}/tiers/${tierId}/rewards`)
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
	public createEarningRule(campaignId: string, earningRules: T.LoyaltiesCreateEarningRule[]) {
		return this.client.post<T.LoyaltiesCreateEarningRuleResponse[]>(
			`/loyalties/${encode(campaignId)}/earning-rules`,
			earningRules,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-earning-rule
	 */
	public updateEarningRule(campaignId: string, earningRule: T.UpdateEarningRuleObject) {
		return this.client.put<T.LoyaltiesUpdateEarningRuleResponse>(
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
	public getMemberWithoutCampaignId(memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberResponse>(`/loyalties/members/${memberId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-1
	 */
	public getMemberWithCampaignId(campaignId: string, memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberResponse>(`/loyalties/${encode(campaignId)}/members/${memberId}`)
	}
	//backward compatibility
	public getMember(campaignId: string, memberId: string) {
		return this.getMemberWithCampaignId(campaignId, memberId)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-activities
	 */
	public getMemberActivities(memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberActivitiesResponse>(`/loyalties/members/${memberId}/activities`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-activities-1
	 */
	public getMemberActivitiesWithCampaignId(campaignId: string, memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberActivitiesResponse>(
			`/loyalties/${encode(campaignId)}/members/${memberId}/activities`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
	 */
	//backward compatibility
	public addPoints(campaignId: string, memberId: string, balance: T.LoyaltiesAddPoints) {
		return this.addOrRemovePointsWithCampaignId(campaignId, memberId, balance)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance
	 */
	public addOrRemovePoints(memberId: string, balance: T.LoyaltiesAddPoints) {
		return this.client.post<T.LoyaltiesAddPointsResponse>(`/loyalties/members/${memberId}/balance`, balance)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
	 */
	public addOrRemovePointsWithCampaignId(campaignId: string, memberId: string, balance: T.LoyaltiesAddPoints) {
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
	 * @see https://docs.voucherify.io/reference/redeem-reward
	 */
	public redeemRewardWithoutCampaignId(memberId: string, params: T.LoyaltiesRedeemRewardParams) {
		return this.client.post<T.LoyaltiesRedeemRewardResponse>(
			`/loyalties/members/${encode(memberId)}/redemption`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-reward-1
	 */
	public redeemRewardWithCampaignId(campaignId: string, memberId: string, params: T.LoyaltiesRedeemRewardParams) {
		return this.client.post<T.LoyaltiesRedeemRewardResponse>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/redemption`,
			params,
		)
	}
	//backward compatibility
	public redeemReward(campaignId: string, memberId: string, params: T.LoyaltiesRedeemRewardParams) {
		return this.redeemRewardWithCampaignId(campaignId, memberId, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-member-rewards
	 */
	public listMemberRewards(memberId: string, params?: T.ListMemberRewardsParams) {
		return this.client.get<T.ListMemberRewardsResponse>(`/loyalties/members/${encode(memberId)}/rewards`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions
	 */
	public listLoyaltyCardTransactions(memberId: string, params?: T.ListLoyaltyCardTransactionsParams) {
		return this.client.get<T.GetLoyaltyCardTransactions>(`/loyalties/members/${encode(memberId)}/transactions`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions-1
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
	 * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions
	 */
	public exportLoyaltyCardTransactions(
		memberId: string,
		createLoyaltyCardTransactions: T.CreateLoyaltyCardTransactions,
	) {
		return this.client.post<T.ExportTransactionObject>(
			`/loyalties/members/${encode(memberId)}/transactions/export`,
			createLoyaltyCardTransactions,
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
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-tiers
	 */
	public listLoyaltyTier(campaignId: string, params?: T.ListLoyaltyTierParameters) {
		return this.client.get<T.ListLoyaltyTiers>(`/loyalties/${encode(campaignId)}/tiers`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-loyalty-tier
	 */
	public getLoyaltyTier(campaignId: string, tierId: string) {
		return this.client.get<T.LoyaltyTierObject>(`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-tier-earning-rules
	 */
	public listLoyaltyTierEarningRules(
		campaignId: string,
		tierId: string,
		parameters?: T.ListLoyaltyTierEarningRulesParameters,
	) {
		return this.client.get<T.ListLoyaltyTierEarningRulesResponse>(
			`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}/earning-rules`,
			parameters,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-loyalty-tier
	 */
	public listMembersLoyaltyTiers(memberId: string) {
		return this.client.get<T.ListMembersLoyaltyTiersResponse>(`/loyalties/members/${encode(memberId)}/tiers`)
	}
}
