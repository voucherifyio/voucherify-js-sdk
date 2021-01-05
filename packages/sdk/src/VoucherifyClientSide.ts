import { RequestController } from './RequestController'
import { ClientSide } from './ClientSide'
import { assert, isObject, isString, isOptionalString, environment } from './helpers'

export interface VoucherifyClientSideOptions {
	/**
	 * Optionally, you can add `apiUrl` to the client options if you want to use Voucherify running in a specific region.
	 *
	 * ```javascript
	 * const client = VoucherifyClientSide({
	 *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
	 *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
	 *		apiUrl: 'https://<region>.api.voucherify.io'
	 * })
	 * ```
	 */
	apiUrl?: string
	/**
	 * [Log-in](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to Voucherify web interface and obtain your `Client-side Keys` from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/configuration):
	 *
	 * ```javascript
	 * const client = VoucherifyClientSide({
	 *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
	 *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY'
	 * })
	 * ```
	 */
	clientApplicationId: string
	/**
	 * [Log-in](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to Voucherify web interface and obtain your `Client-side Keys` from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/configuration):
	 *
	 * ```javascript
	 * const client = VoucherifyClientSide({
	 *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
	 *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY'
	 * })
	 * ```
	 */
	clientSecretKey: string
	trackingId?: string
	/**
	 * **(Required in Node.js)** Set the origin from where the requests are made.
	 *
	 * ```javascript
	 * const client = VoucherifyClientSide({
	 *		clientApplicationId: 'YOUR-CLIENT-APPLICATION-ID',
	 *		clientSecretKey: 'YOUR-CLIENT-SECRET-KEY',
	 *		origin: 'your-domain.com'
	 * })
	 * ```
	 *
	 * @note in the browser, this option will be ignored. The `origin` header is a [forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name) and it'll be automatically set by the browser for every request.
	 */
	origin?: string
}
export interface VoucherifyCustomerHeaders {
	'X-Client-Application-Id': string
	'X-Client-Token': string
	'X-Voucherify-Channel'?: string
	origin?: string
}
export function VoucherifyClientSide(options: VoucherifyClientSideOptions) {
	assert(isObject(options), 'VoucherifyCustomer: expected "options" argument to be an object')
	assert(isString(options.clientApplicationId), 'VoucherifyCustomer: "options.clientApplicationId" is required')
	assert(isString(options.clientSecretKey), 'VoucherifyCustomer: "options.clientSecretKey" is required')
	assert(isOptionalString(options.apiUrl), 'VoucherifyCustomer: expected "options.baseUrl" to be a string')
	assert(isOptionalString(options.trackingId), 'VoucherifyCustomer: expected "options.trackingId" to be a string')

	const headers: VoucherifyCustomerHeaders = {
		'X-Client-Application-Id': options.clientApplicationId,
		'X-Client-Token': options.clientSecretKey,
		'X-Voucherify-Channel': `${environment()}-ClientSide-SDK-v${__VERSION__}`,
	}

	if (environment().startsWith('Node')) {
		assert(isString(options.origin), 'VoucherifyCustomer: "options.origin" is required in Node.js')
		headers['origin'] = options.origin
	}

	const client = new RequestController({
		basePath: 'client/v1',
		baseURL: options.apiUrl ?? 'https://api.voucherify.io',
		headers,
	})

	return new ClientSide(client, options.trackingId)
}
