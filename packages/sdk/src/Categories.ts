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
	public create(createCategory: T.CreateCategory) {
		return this.client.post<T.ResponseCreateCategory>('/categories', createCategory)
	}
	/**
	 * @see https://docs.voucherify.io/reference/validate-promotions-1
	 */
	public get(categoryId: string) {
		return this.client.get<T.CategoryObject>(`/categories/${encode(categoryId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/validate-promotions-1
	 */
	public delete(categoryId: string) {
		return this.client.delete<{}>(`/categories/${encode(categoryId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/validate-promotions-1
	 */
	public update(categoryId: string, updateCategory: T.UpdateCategory) {
		return this.client.put<T.ResponseUpdateCategory>(`/categories/${encode(categoryId)}`, updateCategory)
	}
}
