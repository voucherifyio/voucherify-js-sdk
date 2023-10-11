import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { isoRegex } from './utils/isoRegex'
import { ProductCollectionsCreateResponseBody } from '../src/types/ProductCollections'

describe('Product Collections API', () => {
	it('should create 3 products and create STATIC collection of those products, then delete it', async () => {
		const products = await Promise.all([
			client.products.create({}),
			client.products.create({}),
			client.products.create({}),
		])
		const newCollection = await client.productCollections.create({
			type: 'STATIC',
			name: generateRandomString(),
			products: products.map(product => ({
				id: product.id,
				object: 'product',
			})),
		})
		expect(newCollection).toEqual(
			expect.objectContaining({
				id: expect.stringMatching(/^pc_.*/),
				name: expect.stringMatching(/[\s\S]*/),
				type: 'STATIC',
				products: [
					{ id: expect.stringMatching(/^prod_.*/), object: 'product' },
					{ id: expect.stringMatching(/^prod_.*/), object: 'product' },
					{ id: expect.stringMatching(/^prod_.*/), object: 'product' },
				],
				created_at: expect.stringMatching(isoRegex),
				object: 'products_collection',
			} as ProductCollectionsCreateResponseBody),
		)
		//ts-check
		if (newCollection.type === 'STATIC') {
			expect(newCollection.products[0].id).toEqual(expect.stringMatching(/^prod_.*/))
			expect(newCollection.products[0].object).toBe('product')
		}
		await client.productCollections.delete(newCollection.id)
		await expect(client.productCollections.get(newCollection.id)).rejects.toThrow('Resource not found')
	})

	let staticCollectionId: string
	it('should create 3 SKUs and create STATIC collection of those SKUs', async () => {
		const product = await client.products.create({})
		const skus = await Promise.all([
			client.products.createSku(product.id, { sku: generateRandomString() }),
			client.products.createSku(product.id, { sku: generateRandomString() }),
			client.products.createSku(product.id, { sku: generateRandomString() }),
		])
		const newCollection = await client.productCollections.create({
			type: 'STATIC',
			name: generateRandomString(),
			products: skus.map(sku => ({
				id: sku.id,
				object: 'sku',
				product_id: product.id,
			})),
		})
		staticCollectionId = newCollection.id
		expect(newCollection).toEqual(
			expect.objectContaining({
				id: expect.stringMatching(/^pc_.*/),
				name: expect.stringMatching(/[\s\S]*/),
				type: 'STATIC',
				products: [
					{
						id: expect.stringMatching(/^sku_.*/),
						object: 'sku',
						product_id: expect.stringMatching(/^prod_.*/),
					},
					{
						id: expect.stringMatching(/^sku_.*/),
						object: 'sku',
						product_id: expect.stringMatching(/^prod_.*/),
					},
					{
						id: expect.stringMatching(/^sku_.*/),
						object: 'sku',
						product_id: expect.stringMatching(/^prod_.*/),
					},
				],
				created_at: expect.stringMatching(isoRegex),
				object: 'products_collection',
			} as ProductCollectionsCreateResponseBody),
		)
		//ts-check
		if (newCollection.type === 'STATIC') {
			expect(newCollection.products[0].id).toEqual(expect.stringMatching(/^sku_.*/))
			expect(newCollection.products[0].object).toBe('sku')
			//narrowing down product type, since only on object `sku` we have access to product_id property.
			if (newCollection.products[0].object !== 'sku') {
				return
			}
			expect(newCollection.products[0].product_id).toBe(product.id)
		}
	})
	it('should get static productCollection previously created', async () => {
		const productCollection = await client.productCollections.get(staticCollectionId)
		if (productCollection.type !== 'STATIC') {
			//narrowing down product type, since only on object `sku` we have access to product_id property.
			throw new Error(`This product collection should be static`)
		}
		for (const product of productCollection.products) {
			if (product.id.startsWith('prod')) {
				expect(product.id).toEqual(expect.stringMatching(/^prod_.*/))
				expect(product.object).toBe('product')
				continue
			}
			if (product.id.startsWith('sku')) {
				expect(product.id).toEqual(expect.stringMatching(/^sku_.*/))
				expect(product.object).toBe('sku')
				//narrowing down product type, since only on object `sku` we have access to product_id property.
				if (product.object !== 'sku') {
					continue
				}
				expect(product.product_id).toEqual(expect.stringMatching(/[\s\S]*/))
				continue
			}
			throw new Error(`Product object should be 'product or 'sku'`)
		}
	})

	it('should create 3 SKUs and create AUTO_UPDATE collection of those SKUs', async () => {
		const product = await client.products.create({})
		await Promise.all([
			client.products.createSku(product.id, { sku: generateRandomString(), price: 100 }),
			client.products.createSku(product.id, { sku: generateRandomString(), price: 101 }),
			client.products.createSku(product.id, { sku: generateRandomString(), price: 102 }),
		])
		const newAutoUpdateCollection = await client.productCollections.create({
			type: 'AUTO_UPDATE',
			name: generateRandomString(),
			filter: {
				junction: 'and',
				price: {
					conditions: {
						$is: [100],
					},
				},
			},
		})
		expect(newAutoUpdateCollection).toEqual(
			expect.objectContaining({
				id: expect.stringMatching(/^pc_.*/),
				name: expect.stringMatching(/[\s\S]*/),
				type: 'AUTO_UPDATE',
				filter: {
					junction: 'and',
					price: {
						conditions: {
							$is: [100],
						},
					},
				},
				created_at: expect.stringMatching(isoRegex),
				object: 'products_collection',
			} as ProductCollectionsCreateResponseBody),
		)
	})
})
