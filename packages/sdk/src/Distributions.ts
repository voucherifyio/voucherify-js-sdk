import * as T from './types/Distributions'

import type { Exports } from './Exports'
import type { RequestController } from './RequestController'
import { toQueryParams } from './helpers'

class DistributionsPublications {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-publications
	 */
	public list(params: T.DistributionsPublicationsListParams = {}) {
		const queryParams = toQueryParams(params)
		return this.client.get<T.DistributionsPublicationsListResponse>('/publications', queryParams)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-publication
	 */
	public create(params: T.DistributionsPublicationsCreateParams) {
		return this.client.post<T.DistributionsPublicationsCreateResponse>('/publications', params)
	}
}

export class Distributions {
	public publications: DistributionsPublications

	constructor(private client: RequestController, public exports: Exports) {
		this.publications = new DistributionsPublications(this.client)
	}
}
