import * as T from './types/ClientSide'

import { assert, isObject, isOptionalObject, isOptionalString, isString, toQueryParams } from './helpers'

import type { RequestController } from './RequestController'

export class ClientSide {
	constructor(private client: RequestController, private trackingId?: string) {}

	public setIdentity(identity?: string) {
		this.trackingId = identity
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq##vouchers-validate
	 */
	public validate(params: T.ClientSideValidateParams | string) {
		assert(
			isObject(params) || isString(params),
			'client.validate: expected "params" argument to be an object or a string',
		)

		const query: Record<string, any> = {}

		if (isString(params)) {
			query.code = params
		} else {
			query.code = params.code
			query.item = params.items
			query.amount = params.amount
			query.metadata = params.metadata
			query.order = { metadata: params.orderMetadata }
			query.customer = params.customer
			query.tracking_id = this.trackingId
		}

		if (!!query.code) {
			query.code = query.code.replace(/[\r\n\t\f\v]/g, '').trim()
		}

		assert(isOptionalObject(query?.customer), 'client.validate: expected "params.customer" to be an object')
		assert(isOptionalString(query?.customer?.source_id), 'client.validate: expected "params.customer.source_id" to be a string') // prettier-ignore
		assert(isOptionalObject(query?.customer?.metadata), 'client.validate: expected "params.customer.metadata" to be an object') // prettier-ignore

		const queryParams = toQueryParams(query)

		const path = query.code ? '/validate' : '/promotions/validation'

		return this.client.get<T.ClientSideValidateResponse>(path, queryParams)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-voucher-client-side
	 */
	public redeem(code: string, payload: T.ClientSideRedeemPayload = {}) {
		assert(isString(code), 'client.redeem - please provide a valid Voucher code')

		code = code.replace(/[\r\n\t\f\v]/g, '').trim()

		payload.customer = payload.customer ?? {}
		payload.customer.source_id = payload.customer.source_id ?? this.trackingId

		return this.client.post<T.ClientSideRedeemResponse>('/redeem', payload, { code })
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-publication
	 */
	public publish(
		campaign: string,
		payload: T.ClientSidePublishPayload = {},
		queryParams: T.ClientSidePublishQueryParams = {},
	) {
		assert(isObject(payload), 'client.publish - expected payload to be an object')

		const preparedPayload: T.ClientSidePublishPreparedPayload = {}

		preparedPayload.customer = payload.customer ?? {}
		preparedPayload.customer.source_id = payload.customer?.source_id ?? this.trackingId
		preparedPayload.channel = payload.channel ?? 'Voucherify.js' // @todo - removed hard-coded channel

		assert(
			isString(preparedPayload.customer?.source_id),
			'client.publish - expected payload to contain customer source id or to have tracking id set up by Voucherify client',
		)

		queryParams.campaign = campaign.replace(/[\r\n\t\f\v]/g, '').trim()

		return this.client.post<T.ClientSidePublishResponse>('/publish', preparedPayload, queryParams)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#track-custom-event-client-side
	 */

	public track(
		event_name: string,
		customer: T.ClientSideTrackCustomer,
		metadata?: Record<string, any>,
		referral?: T.ClientSideTrackReferral,
		loyalty?: T.ClientSideTrackLoyalty,
	) {
		assert(isString(event_name), 'client.track - expected event name to be an string')
		assert(isObject(customer), 'client.track - expected customer to be an object')

		const payload: T.ClientSideTrackPayload = {
			event: event_name,
			metadata: metadata ?? {},
			customer: customer,
			referral: referral ?? {},
			loyalty: loyalty ?? {},
		}

		payload.customer.source_id = customer.source_id ?? this.trackingId

		assert(
			isString(payload.customer?.source_id),
			'client.track - expected payload to contain customer source id or to have tracking id set up by Voucherify client',
		)

		return this.client.post<T.ClientSideTrackResponse>('/events', payload)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-vouchers
	 */
	public listVouchers(params: T.ClientSideListVouchersParams = {}) {
		const query: Record<string, any> = {}

		query.campaign = params.campaign
		query.category = params.category
		query.page = params.page
		query.limit = params.limit
		query.customer = params.customer
		query.created_at = params.created_at
		query.updated_at = params.updated_at

		const queryParams = toQueryParams(query)

		return this.client.get<T.ClientSideListVouchersResponse>('/vouchers', queryParams)
	}
}
