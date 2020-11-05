import { Balance } from './types'
import { RequestController } from 'lib/controllers'

class Balance {
	/** @internal */
	constructor(private client: RequestController) { }

	/**
	 * This method gives a possibility to add balance to an existing gift voucher.
	 */
	create(code: string, params: Balance.Create.Params) {
		return this.client.post<Balance.Create.Response>(`/vouchers/${encodeURIComponent(code)}/balance`, params)
	}
}

export { Balance }
