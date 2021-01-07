import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class PromotionTiers {
	constructor(private client: RequestController) {}

	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-promotion-tiers
	 */
	public listAll(params: $FixMe) {
		return this.client.get('/promotions/tiers', params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-promotions
	 */
	public list(promotionId: string) {
		return this.client.get(`/promotions/${encode(promotionId)}/tiers`)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-promotion-tier-to-campaign
	 */
	public create(promotionId: string, params: $FixMe) {
		return this.client.post(`/promotions/${encode(promotionId)}/tiers`, params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#redeem-promotion
	 */
	public redeem(promotionsTierId: string, params: $FixMe) {
		return this.client.post(`/promotions/tiers/${encode(promotionsTierId)}/redemption`, params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-promotion
	 */
	public update(params: $FixMe) {
		return this.client.put(`/promotions/tiers/${encode(params.id)}`, params)
	}
	/**
	 * @see http://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-promotion
	 */
	public delete(promotionsTierId: string) {
		return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`)
	}
}
