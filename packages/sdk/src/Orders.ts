import * as T from './types/Orders'
import * as AAT from './types/AsyncActions'

import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Orders {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference/create-order
	 */
	public create(order: T.OrdersCreate) {
		return this.client.post<T.OrdersCreateResponse>('/orders', order)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-order
	 */
	public get(orderId: string) {
		return this.client.get<T.OrdersGetResponse>(`/orders/${encode(orderId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-order
	 */
	public update(order: T.OrdersUpdate) {
		return this.client.put<T.OrdersUpdateResponse>(
			`/orders/${encode(order.id || order.source_id)}`,
			omit(order, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-orders
	 */
	public list(params: T.OrdersListParams = {}) {
		return this.client.get<T.OrdersListResponse>('/orders', params)
	}

	/**
	 * @see https://docs.voucherify.io/reference/import-orders
	 */
	public import(orders: T.OrdersCreate[]) {
		return this.client.post<AAT.AsyncActionCreateResponse>('/orders/import', orders)
	}
}
