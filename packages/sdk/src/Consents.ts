import type { RequestController } from './RequestController'

export class Consents {
	constructor(private client: RequestController) {}

	list() {
		return this.client.get('/consents')
	}
}
