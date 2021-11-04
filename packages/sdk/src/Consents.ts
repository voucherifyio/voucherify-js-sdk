import * as T from './types/Consents'

import type { RequestController } from './RequestController'

export class Consents {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/get-consents
	 */
	public list() {
		return this.client.get<T.ConsentsListResponse>('/consents')
	}
}
