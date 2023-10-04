import * as T from './types/ProductCollections'

import type { RequestController } from './RequestController'
import { encode } from './helpers'

export class ProductCollections {
	constructor(private client: RequestController) {}
	/**
	 * @see https://docs.voucherify.io/reference/create-product-collection
	 */
	public create(productCollection: T.ProductCollectionsCreateRequestBody) {
		return this.client.post<T.ProductCollectionsCreateResponseBody>(`/product-collections`, productCollection)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-product-collections
	 */
	public list(params?: T.ProductCollectionsListRequestQuery) {
		return this.client.get<T.ProductCollectionsListResponseBody>(`/product-collections`, params)
	}

	/**
	 * @see https://docs.voucherify.io/reference/delete-product-collection
	 */
	public delete(productCollectionId: string) {
		return this.client.delete<{}>(`/product-collections/${encode(productCollectionId)}`)
	}

	/**
	 * @see https://docs.voucherify.io/reference/get-product-collection
	 */
	public get(productCollectionId: string) {
		return this.client.get<T.ProductCollectionsGetResponseBody>(`/product-collections/${encode(productCollectionId)}`)
	}

	/**
	 * @see https://docs.voucherify.io/reference/list-products-in-collection
	 */
	public listProducts(productCollectionId: string, params?: T.ProductCollectionsListProductsRequestQuery) {
		return this.client.get<T.ProductCollectionsListProductsResponseBody>(
			`/product-collections/${encode(productCollectionId)}/products`,
			params,
		)
	}
}
