import { isObject, isString, isNumber, assert } from './helpers'
import type { RequestController } from './RequestController'

export class ClientSide {
	constructor(private client: RequestController, private trackingId?: string) {}

	/**
	 * @see https://docs.voucherify.io/reference/#vouchers-validate
	 */
	public validate(_params: $FixMe) {
		/**
		 * @todo mismatch in API reference and voucherify.js (client) code,
		 * e.g:
		 * - code accepts `orderMetadata` but it isn't documented
		 * - there is `order.items` in documentation but not used in voucherify.js
		 **/
		throw Error('client.validate is not implemented yet')
	}
	public redeem(code: string, payload: $FixMe = {}) {
		assert(isString(code), 'client.redeem - please provide a valid Voucher code')
		assert(isObject(payload), 'client.redeem - expected payload to be an object')
		assert(isObject(payload.order), 'client.redeem - expected payload.order to be an object')
		assert(isNumber(payload.order.amount), 'client.redeem - expected payload.order.amount to be a number')

		code = code.trim()

		payload.customer = payload.customer ?? {}
		payload.customer.source_id = payload.customer.source_id ?? this.trackingId

		return this.client.post<$FixMe>('/redeem', payload, { code })
	}
	public publish(campaign: string, payload: $FixMe = {}) {
		assert(isString(campaign), 'client.publish - campaign is required to publish a voucher')
		assert(isObject(payload), 'client.redeem - expected payload to be an object')

		payload.customer = payload.customer ?? {}
		payload.customer.source_id = payload.customer.source_id ?? this.trackingId
		payload.channel = payload.channel ?? 'Voucherify.js' // @todo - removed hard-coded channel

		return this.client.post<$FixMe>('/publish', payload, { campaign })
	}
	public listVouchers(filters?: $FixMe) {
		return this.client.get<$FixMe>('/vouchers', filters)
	}
	public track(event_name: $FixMe, metadata: $FixMe, customer?: $FixMe) {
		const payload: $FixMe = {
			event: event_name,
			metadata: metadata,
			customer: customer ?? {},
		}
		payload.customer.source_id = (customer ?? {}).source_id ?? this.trackingId

		return this.client.post<$FixMe>('/events', payload)
	}
}
