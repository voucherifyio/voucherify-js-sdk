import type { RequestController } from './RequestController'

export class Consents {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-consents
	 */
	public list() {
		return this.client.get('/consents')
	}
}
