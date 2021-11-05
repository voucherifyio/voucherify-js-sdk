import * as T from './types/Redemptions'

import { encode, isObject, isString, toQueryParams } from './helpers'

import type { RequestController } from './RequestController'

export class Redemptions {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher
	 */
	public redeem(code: string, body: T.RedemptionsRedeemBody = {}) {
		return this.client.post<T.RedemptionsRedeemResponse>(`/vouchers/${encode(code)}/redemption`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-redemption
	 */
	public get(redemptionId: string) {
		return this.client.get<T.Redemption>(`/redemptions/${encode(redemptionId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-redemptions
	 */
	public list(params: T.RedemptionsListParams = {}) {
		const queryParams = toQueryParams(params)
		return this.client.get<T.RedemptionsListResponse>('/redemptions', queryParams)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-redemptions
	 */
	public getForVoucher(code: string) {
		return this.client.get<T.RedemptionsGetForVoucherResponse>(`/vouchers/${encode(code)}/redemption`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#rollback-redemption
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
}
