import { Validations } from './types'
import { RequestController } from 'lib/controllers'

class Validations {
	/** @internal */
	constructor(private client: RequestController, promotions: any) {}

	public validateVoucher(code: string, params: Validations.ValidateVoucher.Params) {
		return this.client.post<Validations.ValidateVoucher.Response>(
			`/vouchers/${encodeURIComponent(code)}/validate`,
			params,
		)
	}
}

export { Validations }
