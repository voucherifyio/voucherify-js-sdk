import * as T from './types/Redemptions'

import { encode, isObject, isString } from './helpers'

import type { RequestController } from './RequestController'

export class Redemptions {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/redeem-voucher
	 */
	public redeem(code: string, body: T.RedemptionsRedeemBody = {}) {
		return this.client.post<T.RedemptionsRedeemResponse>(`/vouchers/${encode(code)}/redemption`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-stacked-discounts
	 */
	public redeemStackable(params: T.RedemptionsRedeemStackableParams) {
		return this.client.post<T.RedemptionsRedeemStackableResponse>(`/redemptions`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-redemption
	 */
	public get(redemptionId: string) {
		return this.client.get<T.Redemption>(`/redemptions/${encode(redemptionId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-redemptions
	 */
	public list(params: T.RedemptionsListParams = {}) {
		return this.client.get<T.RedemptionsListResponse>('/redemptions', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/vouchers-redemptions
	 */
	public getForVoucher(code: string) {
		return this.client.get<T.RedemptionsGetForVoucherResponse>(`/vouchers/${encode(code)}/redemption`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/rollback-redemption
	 */
	public rollback(redemptionId: string, params?: T.RedemptionsRollbackParams) {
		let queryParams: T.RedemptionsRollbackQueryParams = {}
		let payload: T.RedemptionsRollbackPayload = {}

		if (isString(params)) {
			queryParams.reason = params
		} else if (isObject(params)) {
			const { reason, tracking_id: trackingId, customer } = params

			queryParams = {
				reason: reason ? reason : undefined,
				tracking_id: trackingId ? trackingId : undefined,
			}
			payload = { customer }
		}

		return this.client.post<T.RedemptionsRollbackResponse>(
			`/redemptions/${encode(redemptionId)}/rollback`,
			payload,
			queryParams,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/rollback-stackable-redemptions
	 * Types of params and queryParams WILL be changed in future - please do not depend on it!
	 */
	public rollbackStackable(parentRedemptionId: string, params?: any, queryParams?: any) {
		return this.client.post<T.RedemptionsRollbackStackableResponse>(
			`/redemptions/${encode(parentRedemptionId)}/rollbacks`,
			params,
			queryParams,
		)
	}
}
