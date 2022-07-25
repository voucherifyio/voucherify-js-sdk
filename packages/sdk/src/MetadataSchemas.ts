import * as T from './types/MetadataSchemas'

import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class MetadataSchemas {
	constructor(private client: RequestController) {}

	public list() {
		return this.client.get<T.MetadataSchemasListResponse>('/metadata-schemas')
	}

	public get(schemaName: string) {
		return this.client.get<T.MetadataSchemasGetResponse>(`/metadata-schemas/${encode(schemaName)}`)
	}
}
