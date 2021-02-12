import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'
import { encode, omit } from '../src/helpers'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Products API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should create a product', async () => {
		const product = { name: 'Product name' }

		axios.post.mockResolvedValueOnce({ data: product, status: 200 } as AxiosResponse)

		await voucherify.products.create(product)

		expect(axios.post).toHaveBeenCalledWith('/products', product, { params: undefined })
	})

	it('should get a product', async () => {
		const productId = '12345'
		const getProductResponse = { id: '12345', name: 'Product name' }

		axios.get.mockResolvedValueOnce({ data: getProductResponse, status: 200 } as AxiosResponse)

		await voucherify.products.get(productId)

		expect(axios.get).toHaveBeenCalledWith(`/products/${encode(productId)}`, { params: undefined })
	})

	it('should update product', async () => {
		const updateProduct = { id: '12345', name: 'Changed Product Name' }

		axios.put.mockResolvedValueOnce({ data: updateProduct, status: 200 } as AxiosResponse)

		await voucherify.products.update(updateProduct)

		expect(axios.put).toHaveBeenCalledWith(`/products/${encode(updateProduct.id)}`, omit(updateProduct, ['id']), {
			params: undefined,
		})
	})

	it('should bulk update products', async () => {
		const products = [
			{
				source_id: 'product_1',
			},
			{
				source_id: 'product_2',
			},
		]

		axios.post.mockResolvedValueOnce({ data: products, status: 200 } as AxiosResponse)

		await voucherify.products.bulkUpdate(products)

		expect(axios.post).toHaveBeenCalledWith('/products/bulk', products, { params: undefined })
	})

	it('should delete a product', async () => {
		const deleteProductId = '12345'

		const qs = {}
		axios.delete.mockResolvedValueOnce({ data: { params: { qs } }, status: 200 } as AxiosResponse)

		await voucherify.products.delete(deleteProductId, qs)

		// This will be updated after merging types-products branch

		expect(axios.delete).toHaveBeenCalledWith(`/products/${encode(deleteProductId)}`, { params: { qs } })
	})

	it('should delete a product pernamently', async () => {
		const deleteProductId = '65432'

		const qs = {
			force: true,
		}

		axios.delete.mockResolvedValueOnce({ data: { params: { qs } }, status: 200 } as AxiosResponse)

		await voucherify.products.delete(deleteProductId, qs)

		// This will be updated after merging types-products branch

		expect(axios.delete).toHaveBeenCalledWith(`/products/${encode(deleteProductId)}`, { params: { qs } })
	})

	it('should list products', async () => {
		axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.products.list()

		expect(axios.get).toHaveBeenCalledWith('/products', { params: undefined })
	})

	it('should create SKU', async () => {
		const productId = '12345'

		const sku = {
			sku: 'Sku 1',
		}

		axios.post.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.products.createSku(productId, sku)

		expect(axios.post).toHaveBeenCalledWith(`/products/${encode(productId)}/skus`, sku, { params: undefined })
	})

	it('should get SKU', async () => {
		const productId = 'test_product_1'
		const skuId = '12345'

		axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.products.getSku(productId, skuId)

		expect(axios.get).toHaveBeenCalledWith(`/products/${encode(productId)}/skus/${encode(skuId)}`, {
			params: undefined,
		})
	})

	it('should update SKU', async () => {
		const productId = '12345'

		const sku = {
			id: '12345',
			sku: 'Sku 2',
		}

		axios.put.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.products.updateSku(productId, sku)

		expect(axios.put).toHaveBeenCalledWith(`/products/${encode(productId)}/skus/${encode(sku.id)}`, omit(sku, ['id']), {
			params: undefined,
		})
	})

	it('should delete SKU pernamently', async () => {
		const productId = '12345'
		const skuId = '12345'

		const qs = {
			force: true,
		}

		axios.delete.mockResolvedValueOnce({ data: { params: { qs } }, status: 200 } as AxiosResponse)

		await voucherify.products.deleteSku(productId, skuId, qs)

		// This will be updated after merging types-products branch

		expect(axios.delete).toHaveBeenCalledWith(`/products/${encode(productId)}/skus/${encode(skuId)}`, {
			params: { qs },
		})
	})

	it('should list SKUs', async () => {
		const productId = '12345'

		axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.products.listSkus(productId)

		expect(axios.get).toHaveBeenCalledWith(`/products/${encode(productId)}/skus`, { params: undefined })
	})
})
