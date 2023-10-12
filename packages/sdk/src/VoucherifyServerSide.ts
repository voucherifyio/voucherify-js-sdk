import { RequestController } from './RequestController'
import { AsyncActions } from './AsyncActions'
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
import { ApiLimitsHandler } from './ApiLimitsHandler'
import { MetadataSchemas } from './MetadataSchemas'
import { Categories } from './Categories'
import { PromotionStack } from './PromotionStack'

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
	 * [Log-in](https://app.voucherify.io/#/login) to Voucherify web interface and obtain your `Application Keys` from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general):
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
	 * [Log-in](https://app.voucherify.io/#/login) to Voucherify web interface and obtain your `Application Keys` from [Configuration](https://app.voucherify.io/#/app/core/projects/current/general):
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
	 * Optionally, you can add `apiVersion` to the client options if you want to use a [specific API version](https://docs.voucherify.io/docs/api-version-upgrades).
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
	/**
	 * You can pass additional headers to requests made by the API Client.
	 * It can prove to be useful when debugging various scenarios.
	 * ```javascript
	 * const voucherify = VoucherifyServerSide({
	 *		applicationId: 'YOUR-APPLICATION-ID',
	 *		secretKey: 'YOUR-SECRET-KEY',
	 *		customHeaders: {
	 *			"DEBUG-HEADER": "my_value",
	 *			"TEST-HEADER": "another_value"
	 *		}
	 * })
	 * ```
	 */
	customHeaders?: Record<string, string>
	/**
	 * If you wish to include original Axios error in VoucherifyError instance set this to true
	 * It can prove to be useful when debugging various scenarios.
	 * The original Axios error will be included in cause property of VoucherifyError
	 */
	exposeErrorCause?: boolean
	/**
	 * Optionally, you can set timeout in miliseconds. After this time request will be aborted. By default Voucherify's API has timeout value of 3 minutes.
	 */
	timeoutMs?: number
}
interface VoucherifyServerSideHeaders {
	'X-App-Id': string
	'X-App-Token': string
	'X-Voucherify-Channel': string
	'X-Voucherify-API-Version'?: string
	'Content-Type': 'application/json'
}
// export interface VoucherifyServerSideNamespaces {
//  apiLimitsHandler: ApiLimitsHandler
// 	campaigns: Campaigns
// 	consents: Consents
// 	customers: Customers
// 	distributions: Distributions
// 	events: Events
// 	loyalties: Loyalties
//  metadataSchemas: MetadataSchemas
// 	orders: Orders
// 	products: Products
// 	promotions: Promotions
// 	redemptions: Redemptions
// 	rewards: Rewards
// 	segments: Segments
// 	validationRules: ValidationRules
// 	validations: Validations
// 	vouchers: Vouchers
// }
export function VoucherifyServerSide(options: VoucherifyServerSideOptions) {
	assert(isObject(options), 'VoucherifyServerSide: the "options" argument must be an object')
	assert(isString(options.applicationId), 'VoucherifyServerSide: "options.applicationId" is required')
	assert(isString(options.secretKey), 'VoucherifyServerSide: "options.secretKey" is required')
	assert(isOptionalString(options.apiVersion), 'VoucherifyServerSide: expected "options.apiVersion" to be a string')
	assert(isOptionalString(options.channel), 'VoucherifyServerSide: expected "options.channel" to be a string')

	let headers: VoucherifyServerSideHeaders = {
		'X-App-Id': options.applicationId,
		'X-App-Token': options.secretKey,
		'X-Voucherify-Channel': options.channel || `${environment()}-SDK-v${__VERSION__}`,
		'Content-Type': 'application/json',
	}
	if (options.apiVersion) {
		headers['X-Voucherify-API-Version'] = options.apiVersion
	}

	if (isObject(options.customHeaders)) {
		headers = Object.assign({}, headers, options.customHeaders)
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
		exposeErrorCause: options.exposeErrorCause ?? false,
		timeoutMs: options.timeoutMs ?? 0,
	})
	const asyncActions = new AsyncActions(client)
	const balance = new Balance(client)
	const vouchers = new Vouchers(client, balance)
	const campaigns = new Campaigns(client)
	const categories = new Categories(client)
	const exportsNamespace = new Exports(client)
	const events = new Events(client)
	const distributions = new Distributions(client, exportsNamespace)
	const promotionTiers = new PromotionTiers(client)
	const promotionStack = new PromotionStack(client)
	const promotions = new Promotions(client, promotionTiers, promotionStack)
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
	const apiLimitsHandler = new ApiLimitsHandler(client)
	const metadataSchemas = new MetadataSchemas(client)

	return {
		vouchers,
		campaigns,
		categories,
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
		asyncActions,
		apiLimitsHandler,
		metadataSchemas,
	}
}
