import * as T from './types/Categories'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

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
	/**
	 * @see https://docs.voucherify.io/reference/validate-promotions-1
	 */
	public get(id: string) {
		return this.client.get<T.CategoryObject>(`/categories/${encode(id)}`)
	}

	public delete(id: string) {
		return this.client.delete<{}>(`/categories/${encode(id)}`)
	}

	public update(id: string, body: T.UpdateCategoriesCategoryId) {
		return this.client.put<T.CategoryObject>(`/categories/${encode(id)}`, body)
	}
}
