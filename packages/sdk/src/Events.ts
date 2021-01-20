import * as T from './types/Events'

import type { RequestController } from './RequestController'

export class Events {
	constructor(private client: RequestController) {}

	public create(eventName: string, params: T.EventsParams) {
		params = { ...params, event: eventName }
		return this.client.post<T.EventsResponse>('/events', params)
	}
}
