import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Segments {
	constructor(private client: RequestController) {}

	create(segment: $FixMe) {
		return this.client.post('/segments', segment)
	}
	get(segmentId: string) {
		return this.client.get(`/segments/${encode(segmentId)}`)
	}
	delete(segmentId: string) {
		return this.client.delete(`/segments/${encode(segmentId)}`)
	}
}
