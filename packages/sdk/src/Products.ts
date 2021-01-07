import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Products {
	constructor(private client: RequestController) {}

	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-product
	 */
	public create(product: $FixMe) {
		return this.client.post('/products', product)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-product
	 */
	public get(productId: $FixMe) {
		return this.client.get(`/products/${encode(productId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-product
	 */
	public update(product: $FixMe) {
		return this.client.put(`/products/${encode(product.id || product.source_id)}`, omit(product, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-products-in-bulk
	 */
	public bulkUpdate(products: $FixMe) {
		return this.client.post('/products/bulk', products)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-product
	 */
	public delete(productId: $FixMe, params?: $FixMe) {
		return this.client.delete(`/products/${encode(productId)}`, { qs: params })
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-products
	 */
	public list(params?: $FixMe) {
		return this.client.get('/products', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-sku
	 */
	public createSku(productId: string, sku: $FixMe) {
		return this.client.post(`/products/${encode(productId)}/skus`, sku)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-sku
	 */
	public getSku(productId: string, skuId: string) {
		return this.client.get(`/products/${encode(productId)}/skus/${encode(skuId)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-sku
	 */
	public updateSku(productId: string, sku: $FixMe) {
		return this.client.put(`/products/${encode(productId)}/skus/${encode(sku.id || sku.source_id)}`, omit(sku, ['id']))
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-sku
	 */
	public deleteSku(productId: string, skuId: string, params?: $FixMe) {
		return this.client.delete(`/products/${encode(productId)}/skus/${encode(skuId)}`, { qs: params })
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-skus
	 */
	public listSkus(productId: string) {
		return this.client.get(`/products/${encode(productId)}/skus`)
	}
}
