import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class PromotionTiers {
	constructor(private client: RequestController) {}

	public listAll(params: $FixMe) {
		return this.client.get('/promotions/tiers', params)
	}
	public list(promotionId: string) {
		return this.client.get(`/promotions/${encode(promotionId)}/tiers`)
	}
	public create(promotionId: string, params: $FixMe) {
		return this.client.post(`/promotions/${encode(promotionId)}/tiers`, params)
	}
	public redeem(promotionsTierId: string, params: $FixMe) {
		return this.client.post(`/promotions/tiers/${encode(promotionsTierId)}/redemption`, params)
	}
	public update(params: $FixMe) {
		return this.client.put(`/promotions/tiers/${encode(params.id)}`, params)
	}
	public delete(promotionsTierId: string) {
		return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`)
	}
}
