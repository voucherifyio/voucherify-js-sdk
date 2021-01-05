import { RequestController } from './RequestController'
import { Campaigns } from './Campaigns'
import { Distributions } from './Distributions'
import { Exports } from './Exports'
import { Events } from './Events'
import { Balance } from './Balance'
import { Vouchers } from './Vouchers'
import { Validations } from './Validations'
import { Redemptions } from './Redemptions'
import { PromotionTiers } from './PromotionTiers'
import { Promotions } from './Promotions'
import { Customers } from './Customers'
import { Consents } from './Consents'
import { Orders } from './Orders'
import { Products } from './Products'
import { Rewards } from './Rewards'
import { Loyalties } from './Loyalties'
import { ValidationRules } from './ValidationRules'
import { Segments } from './Segments'
import { assert, isString, isObject, isOptionalString, environment } from './helpers'

export interface VoucherifyServerSideOptions {
	/**
	 * Optionally, you can add `apiUrl` to the client options if you want to use Voucherify running in a specific region.
	 *
	 * ```javascript
	 * const voucherify = VoucherifyServerSide({
	 *		applicationId: 'YOUR-APPLICATION-ID',
	 *		secretKey: 'YOUR-SECRET-KEY',
	 *		apiUrl: 'https://<region>.api.voucherify.io'
	 * })
	 * ```
	 */
	apiUrl?: string
	/**
	 * [Log-in](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to Voucherify web interface and obtain your `Application Keys` from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/configuration):
	 *
	 * ```javascript
	 * const voucherify = VoucherifyServerSide({
	 *		applicationId: 'YOUR-APPLICATION-ID',
	 *		secretKey: 'YOUR-SECRET-KEY'
	 * })
	 * ```
	 */
	applicationId: string
	/**
	 * [Log-in](http://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/login) to Voucherify web interface and obtain your `Application Keys` from [Configuration](https://app.voucherify.io/?utm_source=github&utm_medium=sdk&utm_campaign=acq#/app/configuration):
	 *
	 * ```javascript
	 * const voucherify = VoucherifyServerSide({
	 *		applicationId: 'YOUR-APPLICATION-ID',
	 *		secretKey: 'YOUR-SECRET-KEY'
	 * })
	 * ```
	 */
	secretKey: string
	/**
	 * Optionally, you can add `apiVersion` to the client options if you want to use a [specific API version](http://docs.voucherify.io/docs/api-version-upgrades?utm_source=github&utm_medium=sdk&utm_campaign=acq).
	 *
	 * ```javascript
	 * const voucherify = VoucherifyServerSide({
	 *		applicationId: 'YOUR-APPLICATION-ID',
	 *		secretKey: 'YOUR-SECRET-KEY',
	 *		apiVersion: 'v2017-04-20'
	 * })
	 * ```
	 */
	apiVersion?: string
	channel?: string
	/**
	 * Set this option to disable displaying the warning about exposing your `secretKey` if you're using VoucherifyServerSide in a browser environment.
	 * By setting this option to `true`, you acknowledge that you understand the risks of exposing your `secretKey` to a browser environment.
	 *
	 * ```javascript
	 * const voucherify = VoucherifyServerSide({
	 *		applicationId: 'YOUR-APPLICATION-ID',
	 *		secretKey: 'YOUR-SECRET-KEY',
	 *		dangerouslySetSecretKeyInBrowser: true
	 * })
	 * ```
	 */
	dangerouslySetSecretKeyInBrowser?: boolean
}
export interface VoucherifyServerSideHeaders {
	'X-App-Id': string
	'X-App-Token': string
	'X-Voucherify-Channel': string
	'X-Voucherify-API-Version'?: string
	'Content-Type': 'application/json'
}
export function VoucherifyServerSide(options: VoucherifyServerSideOptions) {
	assert(isObject(options), 'VoucherifyServerSide: the "options" argument must be an object')
	assert(isString(options.applicationId), 'VoucherifyServerSide: "options.applicationId" is required')
	assert(isString(options.secretKey), 'VoucherifyServerSide: "options.secretKey" is required')
	assert(isOptionalString(options.apiVersion), 'VoucherifyServerSide: expected "options.apiVersion" to be a string')
	assert(isOptionalString(options.channel), 'VoucherifyServerSide: expected "options.channel" to be a string')

	const headers: VoucherifyServerSideHeaders = {
		'X-App-Id': options.applicationId,
		'X-App-Token': options.secretKey,
		'X-Voucherify-Channel': options.channel || `${environment()}-SDK-v${__VERSION__}`,
		'Content-Type': 'application/json',
	}
	if (options.apiVersion) {
		headers['X-Voucherify-API-Version'] = options.apiVersion
	}

	/**
	 * The option `dangerouslySetSecretKeyInBrowser` is explicitly long and not suggested in the thrown error because
	 * we don't want the user to enable this option without going through the documentation and understanding the risks
	 * of exposing a their secretKey
	 */
	if (!environment().startsWith('Node')) {
		assert(
			options.dangerouslySetSecretKeyInBrowser === true,
			`VoucherifyServerSide: you're exposing your secretKey to a ${environment().toLowerCase()} environment. This is generally considered a bad practice. Did you mean to use 'VoucherifyClientSide'?`,
		)
	}

	const client = new RequestController({
		basePath: 'v1',
		baseURL: options.apiUrl ?? 'https://api.voucherify.io',
		headers,
	})
	const balance = new Balance(client)
	const vouchers = new Vouchers(client, balance)
	const campaigns = new Campaigns(client)
	const exportsNamespace = new Exports(client)
	const events = new Events(client)
	const distributions = new Distributions(client, exportsNamespace)
	const promotionTiers = new PromotionTiers(client)
	const promotions = new Promotions(client, campaigns, promotionTiers)
	const validations = new Validations(client, promotions)
	const redemptions = new Redemptions(client)
	const customers = new Customers(client)
	const consents = new Consents(client)
	const orders = new Orders(client)
	const products = new Products(client)
	const rewards = new Rewards(client)
	const loyalties = new Loyalties(client)
	const segments = new Segments(client)
	const validationRules = new ValidationRules(client)

	return {
		vouchers,
		campaigns,
		distributions,
		validations,
		redemptions,
		promotions,
		customers,
		consents,
		orders,
		products,
		rewards,
		loyalties,
		segments,
		validationRules,
		events,
	}
}
