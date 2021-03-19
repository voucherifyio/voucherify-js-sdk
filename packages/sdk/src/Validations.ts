import { encode, isObject } from './helpers'
import type { RequestController } from './RequestController'
import type { Promotions } from './Promotions'

export class Validations {
	constructor(private client: RequestController, private promotions: Promotions) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-voucher
	 */
	public validateVoucher(code: string, params?: $FixMe) {
		return this.client.post(`/vouchers/${encode(code)}/validate`, params)
	}
	public validate(code: string | $FixMe, context: $FixMe = {}) {
		if (isObject(code)) {
			return this.promotions.validate(code)
		}

		return this.validateVoucher(code, context)
	}
}
