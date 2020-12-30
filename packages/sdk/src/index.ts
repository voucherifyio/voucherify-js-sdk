import { RequestController, RequestControllerOptions } from './RequestController'
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
import { assert, isString, isObject } from './helpers'

export default function VoucherifyClient(options: RequestControllerOptions) {
	assert(isObject(options), 'VoucherifyClient(options): the "options" argument must be an object')
	assert(isString(options.applicationId), 'VoucherifyClient: "applicationId" option is required')
	assert(isString(options.clientSecretKey), 'VoucherifyClient: "clientSecretKey" option is required')

	const client = new RequestController(options)
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
