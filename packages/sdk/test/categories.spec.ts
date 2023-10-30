import { voucherifyClient as client } from './client'
import { isoRegex } from './utils/isoRegex'
import { generateRandomString } from './utils/generateRandomString'

describe('Categories API', () => {
	const newCategoryData = { name: generateRandomString(50), hierarchy: 0 }
	let categoryId: string

	it('should create simple category', async () => {
		const newCategory = await client.categories.create(newCategoryData)
		expect(newCategory).toEqual({
			id: expect.stringMatching(/^cat_.*/),
			...newCategoryData,
			created_at: expect.stringMatching(isoRegex),
			object: 'category',
		})
		categoryId = newCategory.id
	})

	it('should get category', async () => {
		const category = await client.categories.get(categoryId)
		expect(category).toEqual({
			id: expect.stringMatching(/^cat_.*/),
			...newCategoryData,
			created_at: expect.stringMatching(isoRegex),
			object: 'category',
		})
	})

	it('should update category', async () => {
		const updatedCategoryData = { name: generateRandomString(50), hierarchy: 33 }
		const category = await client.categories.update(categoryId, updatedCategoryData)
		expect(category).toEqual({
			id: expect.stringMatching(/^cat_.*/),
			...updatedCategoryData,
			created_at: expect.stringMatching(isoRegex),
			object: 'category',
			updated_at: expect.stringMatching(isoRegex),
		})
	})

	it('should list categories', async () => {
		const categoriesList = await client.categories.list({ limit: 100 })
		expect(categoriesList).toMatchObject(
			expect.objectContaining({
				object: 'list',
				data_ref: 'data',
			}),
		)
		expect(typeof categoriesList.has_more).toBe('boolean')
		expect(typeof categoriesList.total).toBe('number')
		expect(Array.isArray(categoriesList.data)).toBeTruthy()
		categoriesList.data.forEach(category => {
			const expectObjectContaining = expect.objectContaining({
				id: expect.stringMatching(/[\s\S]*/),
				created_at: expect.stringMatching(isoRegex),
				name: expect.stringMatching(/[\s\S]*/),
				object: 'category',
			})
			expect(category).toEqual(expectObjectContaining)
			expect(typeof category.hierarchy).toBe('number')
			if (category.updated_at) {
				expect(category.updated_at).toEqual(expect.stringMatching(isoRegex))
			}
		})
	})

	it('should delete category', async () => {
		await client.categories.delete(categoryId)
		await expect(client.categories.get(categoryId)).rejects.toThrow('Resource not found')
	})
})
