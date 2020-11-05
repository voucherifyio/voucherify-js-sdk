import { RequestController, Validations, Promotions, Campaigns, PromotionTiers } from '@voucherify/core'

type FetchType = typeof fetch
type URLType = typeof import('url').URL
type URLSearchParamsType = typeof import('url').URLSearchParams
type HeadersType = typeof Headers

/**
 * @voucherify/client (as in voucherify.js)
 * @todo
 */
export default function (options: any /** @todo */) {
	/**
	 * These polyfills are only needed to support IE11 🤷‍♀️
	 * All other browsers have built-in these features
	 */
	const URL: URLType = require('core-js-pure/features/url')
	const URLSearchParams: URLSearchParamsType = require('core-js-pure/features/url-search-params')
	const Fetch: FetchType = require('whatwg-fetch').Fetch
	const Headers: HeadersType = require('whatwg-fetch').Headers

	const client = new RequestController({
		Fetch,
		URL: URL,
		URLSearchParams: URLSearchParams,
		headers: new Headers({
			'X-Client-Application-Id': options.applicationId,
			'X-Client-Token': options.token,
			'X-Voucherify-Channel': 'Voucherify.js',
		}),
		credentials: 'include',
	})

	const campaigns = new Campaigns(client)
	const promotionTiers = new PromotionTiers(client)
	const promotions = new Promotions(client, campaigns, promotionTiers)
	const validations = new Validations(client, promotions)

	/**
	 * @todo - Implement Client side namespaces correctly
	 */
	return {
		validations,
		/**
		 * Old API, mark as @deprecated and warn
		 */
		// initialize() {},
		// setIdentity(trackingId) {},
		// setBaseUrl(baseUrl) {},
		// validate(code) {}, // client.validations.validateVoucher(code, params) ??
		// redeem(code, payload) {}, // client.redemptions.redeem(code, trackingId) ??
		// publish(campaign, payload) {}, // client.distributions.publish(campaignName) ??
		// listVouchers(filters) {}, // client.vouchers.list(query) ??
		// track(event_name, metadata, customer) {}, // client.events.create(eventName, { customer, metadata }) ??
	}
}
