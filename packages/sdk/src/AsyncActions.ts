import * as T from './types/AsyncActions'

import { encode } from './helpers'

import type { RequestController } from './RequestController'

class AsyncActions {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-async-actions-1
	 */
	public get(asyncActionId: string) {
		return this.client.get<T.AsyncActionsGetResponse>(`/async-actions/${encode(asyncActionId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-async-actions
	 */
	public list(params: T.AsyncActionsListParams) {
		return this.client.get<T.AsyncActionsListResponse>('/async-actions', params)
	}
}

export { AsyncActions }
