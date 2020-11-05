import { RequestController } from '@voucherify/core'
import { Voucherify } from './Voucherify'

type FetchType = typeof fetch
type URLType = typeof import('url').URL
type URLSearchParamsType = typeof import('url').URLSearchParams
type HeadersType = typeof Headers

/**
 * @voucherify/manager – in Browser env
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
			'X-App-Id': options.applicationId,
			'X-App-Token': options.clientSecretKey,
			'X-Voucherify-Channel': options.channel,
			'X-Voucherify-API-Version': options.apiVersion,
		}),
	})

	return Voucherify(client)
}
