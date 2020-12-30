import { encode, isObject, isString } from './helpers'
import type { RequestController } from './RequestController'

export class Redemptions {
	constructor(private client: RequestController) {}

	redeem(code: string, body?: $FixMe) {
		return this.client.post(`/vouchers/${encode(code)}/redemption`, body ?? {})
	}
	list(params?: $FixMe) {
		return this.client.get('/redemptions', params)
	}
	getForVoucher(code: string) {
		return this.client.get(`/vouchers/${encode(code)}/redemption`)
	}
	rollback(redemptionId: string, params?: $FixMe) {
		let qs: $FixMe = {}
		let payload: $FixMe = {}

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

		return this.client.post(`/redemptions/${encode(redemptionId)}/rollback`, payload, { qs })
	}
}
