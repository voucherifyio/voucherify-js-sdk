import * as T from './types/Promotions'

import type { RequestController } from './RequestController'
import type { Campaigns } from './Campaigns'
import type { PromotionTiers } from './PromotionTiers'

export class Promotions {
	constructor(private client: RequestController, private campaignsNamespace: Campaigns, public tiers: PromotionTiers) {}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-promotion-campaign
	 */
	public create(campaign: T.PromotionsCreate) {
		return this.campaignsNamespace.create(campaign)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#validate-promotions-1
	 */
	public validate(params: T.PromotionsValidateParams) {
		return this.client.post<T.PromotionsValidateResponse>('/promotions/validation', params)
	}
}
