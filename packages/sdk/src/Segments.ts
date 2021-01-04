import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Segments {
	constructor(private client: RequestController) {}

	public create(segment: $FixMe) {
		return this.client.post('/segments', segment)
	}
	public get(segmentId: string) {
		return this.client.get(`/segments/${encode(segmentId)}`)
	}
	public delete(segmentId: string) {
		return this.client.delete(`/segments/${encode(segmentId)}`)
	}
}
