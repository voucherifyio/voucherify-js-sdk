import { encode, isObject } from './helpers'
import type { RequestController } from './RequestController'
import type { Promotions } from './Promotions'

export class Validations {
	constructor(private client: RequestController, private promotions: Promotions) {}

	validateVoucher(code: string, params?: $FixMe) {
		return this.client.post(`/vouchers/${encode(code)}/validate`, params)
	}
	validate(code: string | $FixMe, context: $FixMe = {}) {
		if (isObject(code)) {
			return this.promotions.validate(code)
		}

		return this.validateVoucher(code, context)
	}
}
