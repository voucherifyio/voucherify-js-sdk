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
		return this.client.delete(`/loyalties/${encode(campaignId)}`, params)
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
		return this.client.delete(`/loyalties/${encode(campaignId)}/rewards/${assignmentId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-assignment-2
	 */
	public getRewardAssignment(campaignId: string, assignmentId: string) {
		return this.client.get<T.LoyaltiesGetRewardAssignmentResponseBody>(
			`/loyalties/${encode(campaignId)}/rewards/${encode(assignmentId)}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-earning-rules
	 */
	public listEarningRules(campaignId: string, params: T.LoyaltiesListEarningRulesParams = {}) {
		return this.client.get<T.LoyaltiesListEarningRulesResponse>(
			`/loyalties/${encode(campaignId)}/earning-rules`,
			params,
		)
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
	public updateEarningRule(campaignId: string, earningRule: T.LoyaltiesUpdateEarningRule) {
		return this.client.put<T.LoyaltiesUpdateEarningRuleResponse>(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRule.id}`,
			omit(earningRule, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-earning-rule
	 */
	public deleteEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.delete(`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-earning-rule
	 */
	public getEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.get<T.LoyaltiesGetEarningRuleResponseBody>(
			`/loyalties/${encode(campaignId)}/earning-rules/${encode(earningRuleId)}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/enable-earning-rule
	 */
	public enableEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.post<T.LoyaltiesEnableEarningRulesResponseBody>(
			`/loyalties/${encode(campaignId)}/earning-rules/${earningRuleId}/enable`,
			{},
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-earning-rule
	 */
	public disableEarningRule(campaignId: string, earningRuleId: string) {
		return this.client.post<T.LoyaltiesDisableEarningRulesResponseBody>(
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
	 * @see https://docs.voucherify.io/reference/get-member-1
	 */
	public getMember(campaignId: string | null, memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberResponse>(
			campaignId ? `/loyalties/${encode(campaignId)}/members/${memberId}` : `/loyalties/members/${memberId}`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-activities
	 * @see https://docs.voucherify.io/reference/get-member-activities-1
	 */
	public getMemberActivities(campaignId: string | null, memberId: string) {
		return this.client.get<T.LoyaltiesGetMemberActivitiesResponse>(
			campaignId
				? `/loyalties/${encode(campaignId)}/members/${memberId}/activities`
				: `/loyalties/members/${memberId}/activities`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-member-rewards
	 */
	public listMemberRewards(memberId: string, params?: T.LoyaltiesListMemberRewardsRequestQuery) {
		return this.client.get<T.LoyaltiesListMemberRewardsResponseBody>(
			`/loyalties/members/${encode(memberId)}/rewards`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance
	 * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
	 */
	public addOrRemoveCardBalance(
		memberId: string,
		balance: T.LoyaltiesAddOrRemoveCardBalanceRequestBody,
		campaignId?: string,
	) {
		return this.client.post<T.LoyaltiesAddOrRemoveCardBalanceResponseBody>(
			campaignId
				? `/loyalties/${encode(campaignId)}/members/${memberId}/balance`
				: `/loyalties/members/${memberId}/balance`,
			balance,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-remove-loyalty-card-balance-1
	 */
	public addPoints(campaignId: string, memberId: string, balance: T.LoyaltiesAddPoints) {
		return this.client.post<T.LoyaltiesAddPointsResponse>(
			`/loyalties/${encode(campaignId)}/members/${memberId}/balance`,
			balance,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/transfer-points
	 */
	public transferPoints(
		campaignId: string,
		memberId: string,
		loyaltiesTransferPoints: T.LoyaltiesTransferPointsRequestBody,
	) {
		return this.client.post<T.LoyaltiesTransferPointsResponseBody>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transfers`,
			loyaltiesTransferPoints,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-points-expiration
	 */
	public getPointsExpiration(
		campaignId: string,
		memberId: string,
		params?: T.LoyaltiesGetPointsExpirationRequestQuery,
	) {
		return this.client.get<T.LoyaltiesGetPointsExpirationResponseBody>(
			`/loyalties/${encode(campaignId)}/members/${memberId}/points-expiration`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-loyalty-card
	 */
	public redeemReward(campaignId: string, memberId: string, params: T.LoyaltiesRedeemRewardParams) {
		return this.client.post<T.LoyaltiesRedeemRewardResponse>(
			`/loyalties/${encode(campaignId)}/members/${encode(memberId)}/redemption`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-tier-rewards
	 */
	public listLoyaltyTierRewards(campaignId: string, tierId: string) {
		return this.client.get<T.LoyaltiesListLoyaltyTierRewardsResponseBody>(
			`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}/rewards`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions
	 * @see https://docs.voucherify.io/reference/list-loyalty-card-transactions-1
	 */
	public listCardTransactions(
		memberId: string,
		campaignId: string | null,
		params?: T.LoyaltiesListCardTransactionsRequestQuery,
	) {
		return this.client.get<T.LoyaltiesListCardTransactionsResponseBody>(
			campaignId
				? `/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transactions`
				: `/loyalties/members/${encode(memberId)}/transactions`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions
	 * @see https://docs.voucherify.io/reference/export-loyalty-card-transactions-1
	 */
	public exportCardTransactions(
		memberId: string,
		campaignId: string | null,
		params: T.LoyaltiesExportCardTransactionsRequestBody = {},
	) {
		return this.client.post<T.LoyaltiesExportCardTransactionsResponseBody>(
			campaignId
				? `/loyalties/${encode(campaignId)}/members/${encode(memberId)}/transactions/export`
				: `/loyalties/members/${encode(memberId)}/transactions/export`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-reward-details
	 */
	public getRewardDetails(campaignId: string, assignmentId: string) {
		return this.client.get<T.LoyaltiesGetRewardDetailsResponseBody>(
			`/loyalties/${encode(campaignId)}/reward-assignments/${encode(assignmentId)}/reward`,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-tiers
	 */
	public listTiers(campaignId: string, params?: T.LoyaltiesListTiersRequestQuery) {
		return this.client.get<T.LoyaltiesListTiersResponseBody>(`/loyalties/${encode(campaignId)}/tiers`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-loyalty-tier
	 */
	public getTier(campaignId: string, tierId: string) {
		return this.client.get<T.LoyaltiesGetTierResponseBody>(`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-loyalty-tiers
	 */
	public createTiers(campaignId: string, tiers: T.LoyaltiesCreateTiersRequestBody) {
		return this.client.post<T.LoyaltiesCreateTiersResponseBody>(`/loyalties/${encode(campaignId)}/tiers`, tiers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-loyalty-tier-earning-rules
	 */
	public listLoyaltyTierEarningRules(
		campaignId: string,
		tierId: string,
		params?: T.LoyaltiesListLoyaltyTierEarningRulesRequestQuery,
	) {
		return this.client.get<T.LoyaltiesListLoyaltyTierEarningRulesResponseBody>(
			`/loyalties/${encode(campaignId)}/tiers/${encode(tierId)}/earning-rules`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-member-loyalty-tier
	 */
	public listMemberLoyaltyTiers(memberId: string) {
		return this.client.get<T.LoyaltiesListMemberLoyaltyTiersResponseBody>(
			`/loyalties/members/${encode(memberId)}/tiers`,
		)
	}
}
