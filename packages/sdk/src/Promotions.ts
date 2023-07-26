import * as T from './types/Promotions'

import type { RequestController } from './RequestController'
import type { PromotionTiers } from './PromotionTiers'
import { PromotionStack } from './PromotionStack'

export class Promotions {
	constructor(private client: RequestController, public tiers: PromotionTiers, public stack: PromotionStack) {}
	/**
	 * @see https://docs.voucherify.io/reference/create-promotion-campaign
	 */
	public create(promotionCampaign: T.PromotionsCreate) {
		return this.client.post<T.PromotionsCreateResponse>('/campaigns', promotionCampaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference/validate-promotions-1
	 */
	public validate(body: T.ValidatePromotionRequest, params?: T.PromotionsValidateQueryParams) {
		return this.client.post<T.ResponseValidatePromotion>('/promotions/validation', body, params)
	}
}
