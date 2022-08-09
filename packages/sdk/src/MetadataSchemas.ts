import * as T from './types/MetadataSchemas'

import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class MetadataSchemas {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/list-metadata-schemas
	 */
	public list() {
		return this.client.get<T.MetadataSchemasListResponse>('/metadata-schemas')
	}

	/**
	 * @see https://docs.voucherify.io/reference/get-metadata-schema
	 */
	public get(schemaName: string) {
		return this.client.get<T.MetadataSchemasGetResponse>(`/metadata-schemas/${encode(schemaName)}`)
	}
}
