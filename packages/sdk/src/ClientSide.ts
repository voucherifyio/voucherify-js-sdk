import * as T from './types/ClientSide'

import { assert, isNumber, isObject, isOptionalObject, isOptionalString, isString, toQueryParams } from './helpers'

import type { RequestController } from './RequestController'

export class ClientSide {
	constructor(private client: RequestController, private trackingId?: string) {}

	public setIdentity(identity?: string) {
		this.trackingId = identity
	}
	/**
	 * @see https://docs.voucherify.io/reference/#vouchers-validate
	 */
	public validate(params: T.ClientSideValidationParams) {
		assert(
			isObject(params) || isString(params),
			'client.validate: expected "params" argument to be an object or a string',
		)

		const query: Record<string, unknown> = {}

		if (isString(params)) {
			query.code = params
		} else {
			query.code = params.code
			query.item = params.order?.items
			query.amount = params.amount
			query.metadata = params.metadata
			query.order = { metadata: params.order?.metadata }
			query.customer = params.customer
			query.trackingId = this.trackingId
		}

		assert(isOptionalObject(query?.customer), 'client.validate: expected "params.customer" to be an object')
		assert(isOptionalString(query?.customer?.source_id), 'client.validate: expected "params.customer.source_id" to be a string') // prettier-ignore
		assert(isOptionalObject(query?.customer?.metadata), 'client.validate: expected "params.customer.metadata" to be an object') // prettier-ignore

		const queryParams = toQueryParams(query)

		const path = query.code ? '/validate' : '/promotions/validation'

		return this.client.get(path, queryParams)
	}
	/**
	 * @see https://docs.voucherify.io/reference#redeem-voucher-client-side
	 */
	public redeem(code: string, payload: T.ClientSideRedeemPayload = {}) {
		assert(isString(code), 'client.redeem - please provide a valid Voucher code')
		assert(isObject(payload), 'client.redeem - expected payload to be an object')
		assert(isObject(payload.order), 'client.redeem - expected payload.order to be an object')
		assert(isNumber(payload.order.amount), 'client.redeem - expected payload.order.amount to be a number')

		code = code.trim()

		payload.customer = payload.customer ?? {}
		payload.customer.source_id = payload.customer.source_id ?? this.trackingId

		return this.client.post<T.ClientSideRedeemResponse>('/redeem', payload, { code })
	}
	public publish(campaign: string, payload: $FixMe = {}) {
		assert(isString(campaign), 'client.publish - campaign is required to publish a voucher')
		assert(isObject(payload), 'client.redeem - expected payload to be an object')

		payload.customer = payload.customer ?? {}
		payload.customer.source_id = payload.customer.source_id ?? this.trackingId
		payload.channel = payload.channel ?? 'Voucherify.js' // @todo - removed hard-coded channel
		return this.client.post<$FixMe>('/publish', payload, { campaign })
	}
	/**
	 * @see https://docs.voucherify.io/reference#track-custom-event-client-side
	 */
	public track(
		event_name: string,
		metadata: Record<string, any>,
		customer?: T.ClientSideTrackEventCustomer,
		referral?: T.ClientSideTrackEventReferral,
		loyalty?: T.ClientSideTrackEventLoyalty,
	) {
		const payload: T.ClientSideTrackEventPayload = {
			event: event_name,
			metadata: metadata,
			customer: customer ?? {},
			referral: referral ?? {},
			loyalty: loyalty ?? {},
		}

		payload.customer.source_id = (customer ?? {}).source_id ?? this.trackingId

		return this.client.post<T.ClientSideTrackEventResponse>('/events', payload)
	}
}
