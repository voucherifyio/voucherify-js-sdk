import * as T from './types/Consents'

import type { RequestController } from './RequestController'

export class Consents {
	constructor(private client: RequestController) {}

	/**
	 * @deprecated This method is deprecated. We’re removing this method in next major version.
	 */
	public list() {
		return this.client.get<T.ConsentsListResponse>('/consents')
	}
}
