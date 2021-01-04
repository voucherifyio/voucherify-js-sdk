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

export interface VoucherifyManagerOptions {
	baseUrl?: string
	applicationId: string
	clientSecretKey: string
	apiVersion?: string
	channel?: string
}
export interface VoucherifyManagerHeaders {
	'X-App-Id': string
	'X-App-Token': string
	'X-Voucherify-Channel': string
	'X-Voucherify-API-Version'?: string
	'Content-Type': 'application/json'
}
export function VoucherifyManager(options: VoucherifyManagerOptions) {
	assert(isObject(options), 'VoucherifyManager: the "options" argument must be an object')
	assert(isString(options.applicationId), 'VoucherifyManager: "options.applicationId" is required')
	assert(isString(options.clientSecretKey), 'VoucherifyManager: "options.clientSecretKey" is required')
	assert(isOptionalString(options.apiVersion), 'VoucherifyManager: expected "options.apiVersion" to be a string')
	assert(isOptionalString(options.channel), 'VoucherifyManager: expected "options.channel" to be a string')

	const headers: VoucherifyManagerHeaders = {
		'X-App-Id': options.applicationId,
		'X-App-Token': options.clientSecretKey,
		'X-Voucherify-Channel': options.channel || `${environment()}-SDK-v${__VERSION__}`,
		'Content-Type': 'application/json',
	}
	if (options.apiVersion) {
		headers['X-Voucherify-API-Version'] = options.apiVersion
	}

	const client = new RequestController({
		basePath: 'v1',
		baseURL: options.baseUrl ?? 'https://api.voucherify.io',
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
