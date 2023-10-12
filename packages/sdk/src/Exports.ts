import * as T from './types/Exports'

import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Exports {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/create-export
	 */
	public create(exportResource: T.ExportResource) {
		return this.client.post<T.ExportsCreateResponse>('/exports', exportResource)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-exports
	 */
	public list(query: T.ExportsListRequestQuery = {}) {
		return this.client.get<T.ExportsListResponseBody>('/exports', query)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-export
	 */
	public get(exportResourceId: string) {
		return this.client.get<T.ExportsGetResponse>(`/exports/${encode(exportResourceId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-export
	 */
	public delete(exportResourceId: string) {
		return this.client.delete(`/exports/${encode(exportResourceId)}`)
	}
}
