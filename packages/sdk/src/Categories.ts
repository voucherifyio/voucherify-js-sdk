import * as T from './types/Categories'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class Categories {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference/list-categories
	 */
	public list(params: T.CategoriesListRequestQuery = {}) {
		return this.client.get<T.ListCategories>('/categories', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-category
	 */
	public create(createCategory: T.CreateCategory) {
		return this.client.post<T.ResponseCreateCategory>('/categories', createCategory)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-category
	 */
	public get(categoryId: string) {
		return this.client.get<T.CategoryObject>(`/categories/${encode(categoryId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-category
	 */
	public delete(categoryId: string) {
		return this.client.delete<{}>(`/categories/${encode(categoryId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-category
	 */
	public update(categoryId: string, updateCategory: T.UpdateCategoryRequest) {
		return this.client.put<T.ResponseUpdateCategory>(`/categories/${encode(categoryId)}`, updateCategory)
	}
}
