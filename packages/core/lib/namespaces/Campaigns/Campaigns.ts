import { Campaigns } from './types'
import { RequestController } from 'lib/controllers'

class Campaigns {
	/** @internal */
	constructor(private client: RequestController) {}

	create(body: Campaigns.Create.Body) {
		return this.client.post('/campaigns', body)
	}
}

export { Campaigns }
