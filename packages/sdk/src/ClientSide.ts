import * as T from './types/ClientSide'
import * as TQ from './types/Qualifications'

import { assert, encode, isObject, isOptionalObject, isOptionalString, isString } from './helpers'

import type { RequestController } from './RequestController'

export class ClientSide {
	constructor(private client: RequestController, private trackingId?: string) {}

	public setIdentity(identity?: string) {
		this.trackingId = identity
	}
	/**
	 * @see https://docs.voucherify.io/reference/vouchers-validate
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
			query.tracking_id = params.tracking_id || this.trackingId
			query.session_type = params.session_type
			query.session_key = params.session_key
			query.session_ttl = params.session_ttl
			query.session_ttl_unit = params.session_ttl_unit
		}

		if (!!query.code) {
			query.code = query.code.replace(/[\r\n\t\f\v]/g, '').trim()
		}

		assert(isOptionalObject(query?.customer), 'client.validate: expected "params.customer" to be an object')
		assert(isOptionalString(query?.customer?.source_id), 'client.validate: expected "params.customer.source_id" to be a string') // prettier-ignore
		assert(isOptionalObject(query?.customer?.metadata), 'client.validate: expected "params.customer.metadata" to be an object') // prettier-ignore

		const path = query.code ? '/validate' : '/promotions/validation'

		return this.client.get<T.ClientSideValidateResponse>(path, query)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-voucher-client-side
	 */
	public redeem(code: string, payload: T.ClientSideRedeemPayload = {}) {
		assert(isString(code), 'client.redeem - please provide a valid Voucher code')

		code = code.replace(/[\r\n\t\f\v]/g, '').trim()

		payload.customer = payload.customer ?? {}
		payload.customer.source_id = payload.customer.source_id ?? this.trackingId

		return this.client.post<T.ClientSideRedeemResponse>('/redeem', payload, { code })
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-publication
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
	 * @see https://docs.voucherify.io/reference/track-custom-event-client-side
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
			referral: referral ?? undefined,
			loyalty: loyalty ?? undefined,
		}

		payload.customer.source_id = customer.source_id ?? this.trackingId

		assert(
			isString(payload.customer?.source_id),
			'client.track - expected payload to contain customer source id or to have tracking id set up by Voucherify client',
		)

		return this.client.post<T.ClientSideTrackResponse>('/events', payload)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-vouchers
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

		return this.client.get<T.ClientSideListVouchersResponse>('/vouchers', query)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-customer
	 */
	public createCustomer(customer: T.ClientSideCustomersCreateParams, enableDoubleOptIn?: boolean) {
		return this.client.post<T.ClientSideCustomersCreateResponse>(
			'/customers',
			customer,
			{},
			enableDoubleOptIn ? { 'X-Voucherify-Double-Opt-In': true } : {},
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-consent-client-side
	 */
	public listConsents() {
		return this.client.get<T.ClientSideConsentsListResponse>('/consents')
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-customers-consents-client
	 */
	public updateConsents(idOrSourceId: string, consents: T.ClientSideCustomersUpdateConsentsBody) {
		return this.client.put<undefined>(`/customers/${encode(idOrSourceId)}/consents`, consents)
	}
	/**
	 * @see https://docs.voucherify.io/reference/validate-stackable-discounts-client-side
	 */
	public validateStackable(params: T.ClientSideValidationsValidateStackableParams) {
		return this.client.post<T.ClientSideValidationValidateStackableResponse>(`/validations`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-stackable-discounts-client-side
	 */
	public redeemStackable(params: T.ClientSideRedemptionsRedeemStackableParams) {
		return this.client.post<T.ClientSideRedemptionsRedeemStackableResponse>(`/redemptions`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/check-eligibility
	 */
	public qualifications(body: TQ.QualificationsCheckEligibilityRequestBody) {
		return this.client.post<TQ.QualificationsCheckEligibilityResponseBody>('/qualifications', body)
	}
}
