import type { RequestController } from './RequestController'

export class Events {
	constructor(private client: RequestController) {}

	create(eventName: string, params: $FixMe) {
		params = { ...params, event: eventName }
		return this.client.post('/events', params)
	}
}
