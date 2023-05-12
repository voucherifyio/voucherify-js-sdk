import * as T from './types/PromotionTiers'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class PromotionTiers {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-tiers
	 */
	public listAll(params: T.PromotionTiersListAllParams = {}) {
		return this.client.get<T.PromotionTiersListAllResponse>('/promotions/tiers', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-promotions
	 */
	public list(promotionId: string) {
		return this.client.get<T.PromotionTiersListResponse>(`/promotions/${encode(promotionId)}/tiers`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-promotion-tier
	 */
	public get(tierId: string) {
		return this.client.get<T.PromotionTierGetResponse>(`/promotions/tiers/${encode(tierId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-promotion-tier-to-campaign
	 */
	public create(promotionId: string, params: T.PromotionTiersCreateParams) {
		return this.client.post<T.PromotionTiersCreateResponse>(`/promotions/${encode(promotionId)}/tiers`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/redeem-promotion
	 */
	public redeem(promotionsTierId: string, params: T.PromotionTiersRedeemParams) {
		return this.client.post<T.PromotionTiersRedeemResponse>(
			`/promotions/tiers/${encode(promotionsTierId)}/redemption`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-promotion
	 */
	public update(params: T.PromotionTiersUpdateParams) {
		return this.client.put<T.PromotionTiersUpdateResponse>(`/promotions/tiers/${encode(params.id)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-promotion
	 */
	public delete(promotionsTierId: string) {
		return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`)
	}
}
