import * as T from './types/AsyncActions'

import { encode } from './helpers'

import type { RequestController } from './RequestController'

class AsyncActions {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/get-async-actions-1
	 */
	public get(asyncActionId: string) {
		return this.client.get<T.AsyncActionsGetResponse>(`/async-actions/${encode(asyncActionId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-async-actions
	 */
	public list(params: T.AsyncActionsListParams) {
		return this.client.get<T.AsyncActionsListResponse>('/async-actions', params)
	}
}

export { AsyncActions }
