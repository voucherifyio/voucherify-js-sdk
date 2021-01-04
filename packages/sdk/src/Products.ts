import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Products {
	constructor(private client: RequestController) {}

	public create(product: $FixMe) {
		return this.client.post('/products', product)
	}
	public get(productId: $FixMe) {
		return this.client.get(`/products/${encode(productId)}`)
	}
	public update(product: $FixMe) {
		return this.client.put(`/products/${encode(product.id || product.source_id)}`, omit(product, ['id']))
	}
	public bulkUpdate(products: $FixMe) {
		return this.client.post('/products/bulk', products)
	}
	public delete(productId: $FixMe, params?: $FixMe) {
		return this.client.delete(`/products/${encode(productId)}`, { qs: params })
	}
	public list(params?: $FixMe) {
		return this.client.get('/products', params)
	}
	public createSku(productId: string, sku: $FixMe) {
		return this.client.post(`/products/${encode(productId)}/skus`, sku)
	}
	public getSku(productId: string, skuId: string) {
		return this.client.get(`/products/${encode(productId)}/skus/${encode(skuId)}`)
	}
	public updateSku(productId: string, sku: $FixMe) {
		return this.client.put(`/products/${encode(productId)}/skus/${encode(sku.id || sku.source_id)}`, omit(sku, ['id']))
	}
	public deleteSku(productId: string, skuId: string, params?: $FixMe) {
		return this.client.delete(`/products/${encode(productId)}/skus/${encode(skuId)}`, { qs: params })
	}
	public listSkus(productId: string) {
		return this.client.get(`/products/${encode(productId)}/skus`)
	}
}
