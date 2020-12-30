import omit from 'lodash/omit'
import { encode } from './helpers'
import type { RequestController } from './RequestController'

export class Products {
	constructor(private client: RequestController) {}

	create(product: $FixMe) {
		return this.client.post('/products', product)
	}
	get(productId: $FixMe) {
		return this.client.get(`/products/${encode(productId)}`)
	}
	update(product: $FixMe) {
		return this.client.put(`/products/${encode(product.id || product.source_id)}`, omit(product, ['id']))
	}
	bulkUpdate(products: $FixMe) {
		return this.client.post('/products/bulk', products)
	}
	delete(productId: $FixMe, params?: $FixMe) {
		return this.client.delete(`/products/${encode(productId)}`, { qs: params })
	}
	list(params?: $FixMe) {
		return this.client.get('/products', params)
	}
	createSku(productId: string, sku: $FixMe) {
		return this.client.post(`/products/${encode(productId)}/skus`, sku)
	}
	getSku(productId: string, skuId: string) {
		return this.client.get(`/products/${encode(productId)}/skus/${encode(skuId)}`)
	}
	updateSku(productId: string, sku: $FixMe) {
		return this.client.put(`/products/${encode(productId)}/skus/${encode(sku.id || sku.source_id)}`, omit(sku, ['id']))
	}
	deleteSku(productId: string, skuId: string, params?: $FixMe) {
		return this.client.delete(`/products/${encode(productId)}/skus/${encode(skuId)}`, { qs: params })
	}
	listSkus(productId: string) {
		return this.client.get(`/products/${encode(productId)}/skus`)
	}
}
