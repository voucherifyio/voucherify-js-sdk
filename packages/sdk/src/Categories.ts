import * as T from './types/Categories'

import type { RequestController } from './RequestController'

export class Categories {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference/validate-promotions-1
	 */
	public list() {
		return this.client.get<T.ListCategories>('/categories')
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-promotion-campaign
	 */
	public create(promotionCampaign: T.CreateCategory) {
		return this.client.post<T.ResponseCreateCategory>('/categories', promotionCampaign)
	}
}
