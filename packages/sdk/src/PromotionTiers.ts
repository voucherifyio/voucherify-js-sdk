import * as T from './types/PromotionTiers'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class PromotionTiers {
	constructor(private client: RequestController) {}

	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-promotion-tiers
	 */
	public listAll(params: T.PromotionTiersListAllParams = {}) {
		return this.client.get<T.PromotionTiersListAllResponse>('/promotions/tiers', params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-promotions
	 */
	public list(promotionId: string) {
		return this.client.get<T.PromotionTiersListResponse>(`/promotions/${encode(promotionId)}/tiers`)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-promotion-tier-to-campaign
	 */
	public create(promotionId: string, params: T.PromotionTiersCreateParams) {
		return this.client.post<T.PromotionTiersCreateResponse>(`/promotions/${encode(promotionId)}/tiers`, params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-promotion
	 */
	public redeem(promotionsTierId: string, params: T.PromotionTiersRedeemParams) {
		return this.client.post<T.PromotionTiersRedeemResponse>(
			`/promotions/tiers/${encode(promotionsTierId)}/redemption`,
			params,
		)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-promotion
	 */
	public update(params: T.PromotionTiersUpdateParams) {
		return this.client.put<T.PromotionTiersUpdateResponse>(`/promotions/tiers/${encode(params.id)}`, params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-promotion
	 */
	public delete(promotionsTierId: string) {
		return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`)
	}
}
