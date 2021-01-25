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

		const response = await voucherify.products.create(product)

		expect(response).toBe(product)
		expect(axios.post).toHaveBeenCalledWith('/products', product, { params: undefined })
	})

	it('should get a product', async () => {
		const productId = '12345'
		const getProductResponse = { id: '12345', name: 'Product name' }

		axios.post.mockResolvedValueOnce({ data: getProductResponse, status: 200 } as AxiosResponse)

		const response = await voucherify.products.get(productId)

		expect(response).toBe(getProductResponse)
		expect(axios.post).toHaveBeenCalledWith(`/products/${encode(productId)}`, { params: undefined })
	})

	it('should update product', async () => {
		const updateProduct = { id: '12345', name: 'Changed Product Name' }

		axios.put.mockResolvedValueOnce({ data: updateProduct, status: 200 } as AxiosResponse)

		const response = await voucherify.products.update(updateProduct)

		expect(response).toBe(updateProduct)
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

		const bulkUpdateResponse = [
			{
				source_id: 'product_1',
				found: true,
				updated: true,
			},
			{
				source_id: 'product_2',
				found: false,
				updated: true,
			},
    ]
    
    axios.post.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

    const response = await voucherify.products.bulkUpdate(products)

		expect(response).toBe(bulkUpdateResponse)
		expect(axios.post).toHaveBeenCalledWith('/products/bulk', products { params: undefined })
  })
  
  it('should delete a product', async () => {
		const deleteProductId = '12345'

		axios.delete.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		const response = await voucherify.products.delete(deleteProductId)

		expect(response).toBe({})
		expect(axios.delete).toHaveBeenCalledWith(`/products/${encode(deleteProductId)}`, { params: undefined })
  })

   it('should delete a product pernamently', async () => {
    const deleteProductId = '12345'
    
    const params = {
      force: true
    }

		axios.delete.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		const response = await voucherify.products.delete(deleteProductId, params)

		expect(response).toBe({})
		expect(axios.delete).toHaveBeenCalledWith(`/products/${encode(deleteProductId)}`, { params })
  })
  
  it('should list products', async () => {

    const productsListResponse = {
      object: 'list',
      total: 2,
      data_ref: 'products',
      products: [
        {
          id: 'PROD1',
          source_id: 'Product_1',
          object: 'product',
          name: 'Product 1',
          price: 1000,
          created_at: '2021-09-04T14:58:25.000Z',
        },
        {
          id: 'PROD2',
          source_id: 'Product_2',
          object: 'product',
          name: 'Product 2',
          price: 2000,
          created_at: '2021-10-04T14:58:25.000Z',
        }
      ]
    }

    axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)
    
    const response = await voucherify.products.list()

    expect(response).toBe(productsListResponse)
		expect(axios.get).toHaveBeenCalledWith('/products', { params: undefined })

  })

  it('should create SKU', async () => {
    const productId = '12345';

    const sku = {
      sku: 'Sku 1'
    }

    const createSkuResponse = {
      	id: '12345',
        source_id?: 'Product1',
        sku?: 'Sku 1',
        created_at: '2021-09-04T14:58:25.000Z',
        object: 'sku',
      }


    axios.post.mockResolvedValueOnce({ status: 200 } as AxiosResponse)
    
    const response = await voucherify.products.createSku(productId, sku)

    expect(response).toBe(createSkuResponse)
		expect(axios.post).toHaveBeenCalledWith(`/products/${encode(productId)}/skus`, sku, { params: undefined })

  })

  it('should get SKU', async () => {
    const productId = '12345';
    const skuId = '12345'

    
    const getSkuResponse = {
      	id: '12345',
        source_id?: 'Product1',
        sku?: 'Sku 1',
        created_at: '2021-09-04T14:58:25.000Z',
        object: 'sku',
      }


    axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)
    
    const response = await voucherify.products.getSku(productId, skuId)

    expect(response).toBe(getSkuResponse)
		expect(axios.post).toHaveBeenCalledWith(`/products/${encode(productId)}/skus/${encode(skuId)}`, { params: undefined })

  })

  it('should update SKU', async () => {
        const productId = '12345';

    const sku = {
      id: '12345',
      sku: 'Sku 2'
    }

    const updateSkuResponse = {
      	id: '12345',
        source_id?: 'Product1',
        sku?: 'Sku 2',
        created_at: '2021-09-04T14:58:25.000Z',
        object: 'sku',
      }


    axios.put.mockResolvedValueOnce({ status: 200 } as AxiosResponse)
    
    const response = await voucherify.products.updateSku(productId, sku)

    expect(response).toBe(updateSkuResponse)
		expect(axios.put).toHaveBeenCalledWith(`/products/${encode(productId)}/skus/${encode(sku.id)}`, omit(sku, ['id']), { params: undefined })

  })

  it('should delete SKU', async () => {
    const productId = '12345';
    const skuId = '12345'

		axios.delete.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		const response = await voucherify.products.deleteSku(productId, skuId)

		expect(response).toBe({})
		expect(axios.delete).toHaveBeenCalledWith(`/products/${encode(productId)}/skus/${encode(skuId)}`, { params: undefined })
  })

  it('should list SKUs', async () => {

    const productId = '12345';
    const productsListSkusResponse = {
      object: 'list',
      total: 2,
      skus: [
        {
          id: 'SKU1',
          source_id?: 'Sku_1',
          sku?: 'Sku 1',
          created_at: '2021-09-04T14:58:25.000Z',
          object: 'sku',
        },
        {
          id: 'SKU2',
          source_id?: 'Sku_2',
          sku?: 'Sku 2',
          created_at: '2021-10-04T14:58:25.000Z',
          object: 'sku',
        },
      ]};

    axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)
    
    const response = await voucherify.products.listSkus(productId)

    expect(response).toBe(productsListSkusResponse)
		expect(axios.get).toHaveBeenCalledWith(`/products/${encode(productId)}/skus`,  { params: undefined })
  })

})
