import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Balance {
	constructor(private client: RequestController) {}

	create(code: $FixMe, params: $FixMe) {
		return this.client.post(`/vouchers/${encode(code)}/balance`, params)
	}
}
