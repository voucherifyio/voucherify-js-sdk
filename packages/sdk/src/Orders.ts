import { encode } from './helpers'
import omit from 'lodash/omit'
import type { RequestController } from './RequestController'

export class Orders {
	constructor(private client: RequestController) {}

	public create(order: $FixMe) {
		return this.client.post('/orders', order)
	}
	public get(orderId: $FixMe) {
		return this.client.get(`/orders/${encode(orderId)}`)
	}
	public update(order: $FixMe) {
		return this.client.put(`/orders/${encode(order.id || order.source_id)}`, omit(order, ['id']))
	}
	public list(params: $FixMe) {
		return this.client.get('/orders', params)
	}
}
