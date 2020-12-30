import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Exports {
	constructor(private client: RequestController) {}

	create(exportResource: $FixMe) {
		return this.client.post('/exports', exportResource)
	}
	get(exportResourceId: string) {
		return this.client.get(`/exports/${encode(exportResourceId)}`)
	}
	delete(exportResourceId: string) {
		return this.client.delete(`/exports/${encode(exportResourceId)}`)
	}
}
