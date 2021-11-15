import * as T from './types/Events'

import type { RequestController } from './RequestController'

export class Events {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/track-custom-event-client-side
	 */
	public create(eventName: string, params: T.EventsParams) {
		params = { ...params, event: eventName }
		return this.client.post<T.EventsResponse>('/events', params)
	}
}
