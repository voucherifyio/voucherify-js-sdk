import * as T from './types/PromotionStacks'

import type { RequestController } from './RequestController'

export class PromotionStack {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public listInCampaign(campaignId: string) {
		return this.client.get<T.ListStacksInCampaignResponse>(`/promotions/${campaignId}/stacks`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public createInCampaign(campaignId: string, body: T.CreatePromotionStack) {
		return this.client.post<T.PromotionStackObject>(`/promotions/${campaignId}/stacks`, body)
	}
}
