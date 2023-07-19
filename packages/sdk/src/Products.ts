import * as T from './types/Products'
import * as AAT from './types/AsyncActions'

import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Products {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference/create-product
	 */
	public create(product: T.ProductsCreate) {
		return this.client.post<T.ProductsCreateResponse>('/products', product)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-product
	 */
	public get(productId: string) {
		return this.client.get<T.ProductsGetResponse>(`/products/${encode(productId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-product
	 */
	public update(product: T.ProductsUpdate) {
		return this.client.put<T.ProductsUpdateResponse>(
			`/products/${encode(product.id || product.source_id)}`,
			omit(product, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/async-update-products-metadata-in-bulk
	 */
	public bulkUpdateMetadata(products: T.ProductsBulkUpdateMetadata) {
		return this.client.post<T.ProductsBulkUpdateMetadataResponse>('/products/metadata/async', products)
	}
	/**
	 * @see https://docs.voucherify.io/reference/post-products-in-bulk
	 */
	public bulkUpdate(products: T.ProductsBulkUpdate) {
		return this.client.post<T.ProductsBulkUpdateResponse>('/products/bulk/async', products)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-product
	 */
	public delete(productId: string, params?: T.ProductsDeleteParams) {
		return this.client.delete(`/products/${encode(productId)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-products
	 */
	public list(params?: T.ProductsListParams) {
		return this.client.get<T.ProductsListResponse>('/products', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-sku
	 */
	public createSku(productId: string, sku: T.ProductsCreateSku) {
		return this.client.post<T.ProductsCreateSkuResponse>(`/products/${encode(productId)}/skus`, sku)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-sku-v20210726
	 */
	public getSku(skuId: string) {
		return this.client.get<T.ProductsGetSkuResponse>(`/skus/${encode(skuId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-skus-using-csv
	 */
	public importSkusCSV(body: any) {
		return this.client.post<AAT.AsyncActionCreateResponse>(`/skus/importCSV`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-sku
	 */
	public updateSku(productId: string, sku: T.ProductsUpdateSku) {
		return this.client.put<T.ProductsUpdateSkuResponse>(
			`/products/${encode(productId)}/skus/${encode(sku.id || sku.source_id)}`,
			omit(sku, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-sku
	 */
	public deleteSku(productId: string, skuId: string, params?: T.ProductsDeleteSkuParams) {
		return this.client.delete(`/products/${encode(productId)}/skus/${encode(skuId)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-skus
	 */
	public listSkus(productId: string) {
		return this.client.get<T.ProductsListSkus>(`/products/${encode(productId)}/skus`)
	}
}
