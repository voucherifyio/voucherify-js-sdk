import * as T from './types/PromotionsStacks'

import type { RequestController } from './RequestController'
export class PromotionsStacks {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public listInCampaign(campaignId: string) {
		return this.client.get<T.PromotionsStacksListInCampaignResponseBody>(`/promotions/${campaignId}/stacks`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public createInCampaign(campaignId: string, body: T.PromotionsStacksCreateInCampaignRequestBody) {
		return this.client.post<T.PromotionsStacksCreateInCampaignResponseBody>(`/promotions/${campaignId}/stacks`, body)
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
		return this.client.get<T.PromotionsStacksGetResponseBody>(`/promotions/${campaignId}/stacks/${stackId}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-promotion-stack
	 */
	public update(campaignId: string, stackId: string, body: T.PromotionsStacksUpdateRequestBody) {
		return this.client.put<T.PromotionsStacksUpdateResponseBody>(`/promotions/${campaignId}/stacks/${stackId}`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-promotion-stacks-in-campaign
	 */
	public list(params?: T.PromotionsStacksListRequestQuery) {
		return this.client.get<T.PromotionsStacksListResponseBody>(`/promotions/stacks`, params)
	}
}
