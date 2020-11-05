import {
	RequestController,
	Balance,
	Campaigns,
	Consents,
	Customers,
	Distributions,
	Events,
	Exports,
	Loyalties,
	Orders,
	Products,
	PromotionTiers,
	Promotions,
	Redemptions,
	Rewards,
	Segments,
	ValidationRules,
	Validations,
	Vouchers,
} from '@voucherify/core'

export function Voucherify(client: RequestController) {
	const balance = new Balance(client)
	const vouchers = new Vouchers(client, balance)
	const campaigns = new Campaigns(client)
	const exportsNamespace = new Exports(client)
	const events = new Events(client)
	const distributions = new Distributions(client, exportsNamespace)
	const promotionTiers = new PromotionTiers(client)
	const promotions = new Promotions(client, campaigns, promotionTiers)
	const validations = new Validations(client, promotions)
	const redemptions = new Redemptions(client, promotions)
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
