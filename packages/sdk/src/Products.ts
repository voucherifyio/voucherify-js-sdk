import * as T from './types/Products'

import { encode, omit } from './helpers'
import type { RequestController } from './RequestController'

export class Products {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-product
	 */
	public create(product: T.ProductsCreate) {
		return this.client.post<T.ProductsCreateResponse>('/products', product)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-product
	 */
	public get(productId: string) {
		return this.client.get<T.ProductsGetResponse>(`/products/${encode(productId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-product
	 */
	public update(product: T.ProductsUpdate) {
		return this.client.put<T.ProductsUpdateResponse>(
			`/products/${encode(product.id || product.source_id)}`,
			omit(product, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-products-in-bulk
	 */
	public bulkUpdate(products: T.ProductsBulkUpdate) {
		return this.client.post<T.ProductsBulkUpdateResponse>('/products/bulk', products)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-product
	 */
	public delete(productId: string, params?: T.ProductsDeleteParams) {
		return this.client.delete(`/products/${encode(productId)}`, { qs: params })
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-products
	 */
	public list(params?: T.ProductsListParams) {
		return this.client.get<T.ProductsListResponse>('/products', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-sku
	 */
	public createSku(productId: string, sku: T.ProductsCreateSku) {
		return this.client.post<T.ProductsCreateSkuResponse>(`/products/${encode(productId)}/skus`, sku)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-sku
	 */
	public getSku(productId: string, skuId: string) {
		return this.client.get<T.ProductsGetSkuResponse>(`/products/${encode(productId)}/skus/${encode(skuId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-sku
	 */
	public updateSku(productId: string, sku: T.ProductsUpdateSku) {
		return this.client.put<T.ProductsUpdateSkuResponse>(
			`/products/${encode(productId)}/skus/${encode(sku.id || sku.source_id)}`,
			omit(sku, ['id']),
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-sku
	 */
	public deleteSku(productId: string, skuId: string, params?: T.ProductsDeleteSkuParams) {
		return this.client.delete(`/products/${encode(productId)}/skus/${encode(skuId)}`, { qs: params })
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-skus
	 */
	public listSkus(productId: string) {
		return this.client.get<T.ProductsListSkus>(`/products/${encode(productId)}/skus`)
	}
}
