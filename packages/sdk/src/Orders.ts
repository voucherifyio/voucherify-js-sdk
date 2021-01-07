import { encode } from './helpers'
import omit from 'lodash/omit'
import type { RequestController } from './RequestController'

export class Orders {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-order
	 */
	public create(order: $FixMe) {
		return this.client.post('/orders', order)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-order
	 */
	public get(orderId: $FixMe) {
		return this.client.get(`/orders/${encode(orderId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-order
	 */
	public update(order: $FixMe) {
		return this.client.put(`/orders/${encode(order.id || order.source_id)}`, omit(order, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-orders
	 */
	public list(params: $FixMe) {
		return this.client.get('/orders', params)
	}
}
