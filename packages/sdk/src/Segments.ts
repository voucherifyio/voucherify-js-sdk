import * as T from './types/Segments'

import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Segments {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-segment
	 */
	public create(segment: T.SegmentsCreate) {
		return this.client.post<T.SegmentsCreateResponse>('/segments', segment)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-segment
	 */
	public get(segmentId: string) {
		return this.client.get<T.SegmentsGetResponse>(`/segments/${encode(segmentId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-segment
	 */
	public delete(segmentId: string) {
		return this.client.delete(`/segments/${encode(segmentId)}`)
	}

	// I see that list method is missing

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-segments
	 */
	public list(customerId: string) {
		return this.client.delete(`/customers/${encode(customerId)}/segments`)
	}
}
