import * as T from './types/Redemptions'

import { encode, isObject, isString } from './helpers'
import type { RequestController } from './RequestController'

export class Redemptions {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher
	 */
	public redeem(code: string, body?: T.RedemptionsRedeemBody) {
		return this.client.post<T.RedemptionsRedeemResponse>(`/vouchers/${encode(code)}/redemption`, body ?? {})
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-redemptions
	 */
	public list(params?: T.RedemptionsListParams) {
		return this.client.get<T.RedemptionsListResponse>('/redemptions', params)
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
		let qs: T.RedemptionsRollbackQs = {}
		let payload: T.RedemptionsRollbackPayload = {}

		if (isString(params)) {
			qs.reason = encode(params)
		} else if (isObject(params)) {
			const { reason, tracking_id: trackingId, customer } = params

			qs = {
				reason: reason ? encode(reason) : undefined,
				tracking_id: trackingId ? encode(trackingId) : undefined,
			}
			payload = { customer }
		}

		return this.client.post<T.RedemptionsRollbackResponse>(`/redemptions/${encode(redemptionId)}/rollback`, payload, {
			qs,
		})
	}
}
