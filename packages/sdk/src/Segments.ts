import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Segments {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-segment
	 */
	public create(segment: $FixMe) {
		return this.client.post('/segments', segment)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-segment
	 */
	public get(segmentId: string) {
		return this.client.get(`/segments/${encode(segmentId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-segment
	 */
	public delete(segmentId: string) {
		return this.client.delete(`/segments/${encode(segmentId)}`)
	}
}
