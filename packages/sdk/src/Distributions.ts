import type { RequestController } from './RequestController'
import type { Exports } from './Exports'

class DistributionsPublications {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-publications
	 */
	public list(params: $FixMe) {
		return this.client.get('/publications', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-publication
	 */
	public create(params: $FixMe) {
		return this.client.post('/publications', params)
	}
}
export class Distributions {
	public publications: DistributionsPublications

	constructor(private client: RequestController, public exports: Exports) {
		this.publications = new DistributionsPublications(this.client)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#publish-voucher
	 */
	public publish(params: $FixMe) {
		return this.client.post('/vouchers/publish', params)
	}
}
