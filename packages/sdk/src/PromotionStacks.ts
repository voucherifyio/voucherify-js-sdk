import * as T from './types/PromotionStacks'

import type { RequestController } from './RequestController'

export class PromotionStacks {
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
		return this.client.post<T.PromotionStack>(`/promotions/${campaignId}/stacks`, body)
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
		return this.client.get<T.PromotionStack>(`/promotions/${campaignId}/stacks/${stackId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-promotion-stack
	 */
	public update(campaignId: string, stackId: string, body: T.UpdatePromotionStack) {
		return this.client.put<T.PromotionStack>(`/promotions/${campaignId}/stacks/${stackId}`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public list(params?: T.ListPromotionStacksParams) {
		return this.client.get<T.ListStacksInCampaignResponse>(`/promotions/stacks`, params)
	}
}
