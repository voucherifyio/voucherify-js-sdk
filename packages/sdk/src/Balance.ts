import * as T from './types/Balance'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class Balance {
	constructor(private client: RequestController) {}

	/**
	 * Add Gift Voucher Balance
	 * This method gives a possibility to add balance to an existing gift voucher.
	 * @see https://docs.voucherify.io/reference/add-gift-voucher-balance
	 */
	public create(code: string, params: T.BalanceCreateParams) {
		return this.client.post<T.BalanceCreateResponse>(`/vouchers/${encode(code)}/balance`, params)
	}
}
