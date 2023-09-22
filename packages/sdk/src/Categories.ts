import * as T from './types/Categories'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class Categories {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference/list-categories
	 */
	public list() {
		return this.client.get<T.CategoriesListResponseBody>('/categories')
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-category
	 */
	public create(createCategory: T.CategoriesCreateRequestBody) {
		return this.client.post<T.CategoriesCreateResponseBody>('/categories', createCategory)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-category
	 */
	public get(categoryId: string) {
		return this.client.get<T.CategoriesGetResponseBody>(`/categories/${encode(categoryId)}`)
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
	public update(categoryId: string, updateCategory: T.CategoriesUpdateRequestBody) {
		return this.client.put<T.CategoriesUpdateResponseBody>(`/categories/${encode(categoryId)}`, updateCategory)
	}
}
