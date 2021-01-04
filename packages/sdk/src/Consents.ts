import type { RequestController } from './RequestController'

export class Consents {
	constructor(private client: RequestController) {}

	public list() {
		return this.client.get('/consents')
	}
}
