import type { RequestController } from './RequestController'
import type { Campaigns } from './Campaigns'
import type { PromotionTiers } from './PromotionTiers'

export class Promotions {
	constructor(private client: RequestController, private campaignsNamespace: Campaigns, public tiers: PromotionTiers) {}

	create(params: $FixMe) {
		return this.campaignsNamespace.create(params)
	}
	validate(params: $FixMe) {
		return this.client.post('/promotions/validation', params)
	}
}
