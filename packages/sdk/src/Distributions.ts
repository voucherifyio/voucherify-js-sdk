import type { RequestController } from './RequestController'
import type { Exports } from './Exports'

class DistributionsPublications {
	constructor(private client: RequestController) {}

	list(params: $FixMe) {
		return this.client.get('/publications', params)
	}
	create(params: $FixMe) {
		return this.client.post('/publications', params)
	}
}
export class Distributions {
	public publications: DistributionsPublications

	constructor(private client: RequestController, public exports: Exports) {
		this.publications = new DistributionsPublications(this.client)
	}

	publish(params: $FixMe) {
		return this.client.post('/vouchers/publish', params)
	}
}
