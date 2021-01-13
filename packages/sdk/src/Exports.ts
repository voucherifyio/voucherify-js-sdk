import * as T from './types/Exports'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class Exports {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-export
	 */
	public create(exportResource: T.ExportResource) {
		return this.client.post<T.ExportCreateResponse>('/exports', exportResource)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-export
	 */
	public get(exportResourceId: string) {
		return this.client.get<T.ExportGetResponse>(`/exports/${encode(exportResourceId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-export
	 */
	public delete(exportResourceId: string) {
		return this.client.delete(`/exports/${encode(exportResourceId)}`)
	}
}
