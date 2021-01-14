import * as T from './types/Distributions'

import type { Exports } from './Exports'
import type { RequestController } from './RequestController'

class DistributionsPublications {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-publications
	 */
	public list(params: T.DistributionsPublicationsListParams) {
		return this.client.get<T.DistributionsPublicationsListResponse>('/publications', params)
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
