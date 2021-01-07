import type { RequestController } from './RequestController'
import type { Campaigns } from './Campaigns'
import type { PromotionTiers } from './PromotionTiers'

export class Promotions {
	constructor(private client: RequestController, private campaignsNamespace: Campaigns, public tiers: PromotionTiers) {}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-promotion-campaign
	 */
	public create(params: $FixMe) {
		return this.campaignsNamespace.create(params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-promotions-1
	 */
	public validate(params: $FixMe) {
		return this.client.post('/promotions/validation', params)
	}
}
