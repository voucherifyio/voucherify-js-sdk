import * as T from './types/PromotionStacks'

import type { RequestController } from './RequestController'

export class PromotionStack {
	constructor(private client: RequestController) {}
git m
	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public createInCampaign(campaignId: string, body: T.CreatePromotionStack) {
		return this.client.post<T.PromotionStackObject>(`/promotions/${campaignId}/stacks`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-promotion-stack
	 */
	public delete(campaignId: string, stackId: string) {
		return this.client.delete<{}>(`/promotions/${campaignId}/stacks/${stackId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-promotion-stack
	 */
	public get(campaignId: string, stackId: string) {
		return this.client.get<T.PromotionStackObject>(`/promotions/${campaignId}/stacks/${stackId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-promotion-stack
	 */
	public update(campaignId: string, stackId: string, body: T.UpdatePromotionStack) {
		return this.client.put<T.PromotionStackObject>(`/promotions/${campaignId}/stacks/${stackId}`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public list(campaignId?: string | null, params?: T.ListPromotionStacksParams) {
		return this.client.get<T.ListStacksInCampaignResponse>(
			campaignId ? `/promotions/${campaignId}/stacks` : `/promotions/stacks`,
			params,
		)
	}
}
