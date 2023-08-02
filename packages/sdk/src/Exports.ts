import * as T from './types/Exports'

import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Exports {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/create-export
	 */
	public create(exportResource: T.CreateExport) {
		return this.client.post<T.CreateExportResponse>('/exports', exportResource)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-exports
	 */
	public list(query: T.ListExportQuery = {}) {
		return this.client.get<T.ListExport>('/exports', query)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-export
	 */
	public get(exportResourceId: string) {
		return this.client.get<T.GetExportResponse>(`/exports/${encode(exportResourceId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-export
	 */
	public delete(exportResourceId: string) {
		return this.client.delete(`/exports/${encode(exportResourceId)}`)
	}
}
