import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class PromotionTiers {
	constructor(private client: RequestController) {}

	listAll(params: $FixMe) {
		return this.client.get('/promotions/tiers', params)
	}
	list(promotionId: string) {
		return this.client.get(`/promotions/${encode(promotionId)}/tiers`)
	}
	create(promotionId: string, params: $FixMe) {
		return this.client.post(`/promotions/${encode(promotionId)}/tiers`, params)
	}
	redeem(promotionsTierId: string, params: $FixMe) {
		return this.client.post(`/promotions/tiers/${encode(promotionsTierId)}/redemption`, params)
	}
	update(params: $FixMe) {
		return this.client.put(`/promotions/tiers/${encode(params.id)}`, params)
	}
	delete(promotionsTierId: string) {
		return this.client.delete(`/promotions/tiers/${encode(promotionsTierId)}`)
	}
}
