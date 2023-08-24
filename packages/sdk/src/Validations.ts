import * as T from './types/Validations'

import { encode } from './helpers'
import type { RequestController } from './RequestController'
import type { Promotions } from './Promotions'

export class Validations {
	constructor(private client: RequestController, private promotions: Promotions) {}

	/**
	 * @see https://docs.voucherify.io/reference/validate-voucher
	 */
	public validateVoucher(code: string, params: T.ValidationsValidateVoucherParams = {}) {
		return this.client.post<T.ValidationsValidateVoucherResponse>(`/vouchers/${encode(code)}/validate`, params)
	}

	public validate(code: string | T.ValidationsValidateCode, context: T.ValidationsValidateContext = {}) {
		if (typeof code === 'string') {
			return this.validateVoucher(code, context)
		}
		return this.promotions.validate(code)
	}

	/**
	 * @see https://docs.voucherify.io/reference/validate-stacked-discounts-1
	 */
	public validateStackable(params: T.ValidationsValidateStackableParams) {
		return this.client.post<T.ValidationValidateStackableResponse>(`/validations`, params)
	}
}
