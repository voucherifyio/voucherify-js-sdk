import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Exports {
	constructor(private client: RequestController) {}

	public create(exportResource: $FixMe) {
		return this.client.post('/exports', exportResource)
	}
	public get(exportResourceId: string) {
		return this.client.get(`/exports/${encode(exportResourceId)}`)
	}
	public delete(exportResourceId: string) {
		return this.client.delete(`/exports/${encode(exportResourceId)}`)
	}
}
