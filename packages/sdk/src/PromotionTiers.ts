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
	public list(campaignId: string) {
		return this.client.get<T.PromotionTiersListResponse>(`/promotions/${encode(campaignId)}/tiers`)
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
	public addToCampaign(campaignId: string, params: T.AddPromotionTierToCampaignBody) {
		return this.client.post<T.PromotionTiersCreateResponse>(`/promotions/${encode(campaignId)}/tiers`, params)
	}
	//Backward compatibility
	public create(promotionId: string, params: T.AddPromotionTierToCampaignBody) {
		return this.addToCampaign(promotionId, params)
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
	 * @see https://docs.voucherify.io/reference/validate-promotion-tier
	 */
	public validate(promotionsTierId: string, params: T.ValidatePromotionTier) {
		return this.client.post<T.ValidatePromotionTierResponse>(
			`/promotions/tiers/${encode(promotionsTierId)}/validation`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-promotion
	 */
	public update(params: T.PromotionTiersUpdateParams) {
		return this.client.put<T.PromotionTierUpdateResponse>(`/promotions/tiers/${encode(params.id)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-promotion
	 */
	public delete(promotionsTierId: string) {
		return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-promotion-tier
	 */
	public disable(promotionsTierId: string) {
		return this.client.post<T.PromotionTiersDisableResponse>(`/promotions/tiers/${encode(promotionsTierId)}/disable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference/enable-promotion-tier
	 */
	public enable(promotionsTierId: string) {
		return this.client.post<T.PromotionTiersEnableResponse>(`/promotions/tiers/${encode(promotionsTierId)}/enable`, {})
	}
}
