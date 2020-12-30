import { encode } from './helpers'
import omit from 'lodash/omit'
import type { RequestController } from './RequestController'

export class Orders {
	constructor(private client: RequestController) {}

	create(order: $FixMe) {
		return this.client.post('/orders', order)
	}
	get(orderId: $FixMe) {
		return this.client.get(`/orders/${encode(orderId)}`)
	}
	update(order: $FixMe) {
		return this.client.put(`/orders/${encode(order.id || order.source_id)}`, omit(order, ['id']))
	}
	list(params: $FixMe) {
		return this.client.get('/orders', params)
	}
}
