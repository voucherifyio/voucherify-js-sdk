import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { generateDiscountVoucher } from './utils/generateDiscountVoucher'
import { generateGiftVoucher } from './utils/generateGiftVoucher'

describe('Vouchers API', () => {
	describe('List Voucher Transactions', () => {
		it('should return required properties', async () => {
			const code = (await generateDiscountVoucher()).code
			const query = {
				limit: 20,
				page: 1,
			}
			const response = await client.vouchers.listTransactions(code, query)
			expect(typeof response.data).toBe('object')
			expect(typeof response.data_ref).toBe('string')
			expect(typeof response.object).toBe('string')
		})
		it('should throw error when code does not exist', async () => {
			try {
				await client.vouchers.listTransactions(generateRandomString(55))
			} catch (error) {
				expect(error?.message).toBe('Resource not found')
				expect(error?.key).toBe('not_found')
				expect(error?.code).toBe(404)
			}
		})
		it('should not throw error if query params were not specified', async () => {
			const code = (await generateDiscountVoucher()).code
			let hasError = false
			try {
				await client.vouchers.listTransactions(code)
			} catch (error) {
				hasError = true
			}
			expect(hasError).toBeFalsy()
		})
	})
	describe('Export Voucher Transactions', () => {
		it('should throw error when code does not exist', async () => {
			try {
				await client.vouchers.exportTransactions(generateRandomString(55), {
					parameters: {
						order: '-created_at',
						fields: ['id', 'type'],
					},
				})
			} catch (error) {
				expect(error?.message).toBe('Resource not found')
				expect(error?.key).toBe('not_found')
				expect(error?.code).toBe(404)
			}
		})
		it('should return all the required fields, the `filters` object and should not return `order` and `fields` if they were not passed in request body', async () => {
			const code = (await generateGiftVoucher()).code
			const response = await client.vouchers.exportTransactions(code, { parameters: {} })
			expect(typeof response.parameters.filters).toBe('object')
			expect(response.parameters).not.toContain('order')
			expect(response.parameters).not.toContain('fields')
			expect(response).toHaveProperty('id')
			expect(response).toHaveProperty('object')
			expect(response).toHaveProperty('created_at')
			expect(response).toHaveProperty('status')
			expect(response).toHaveProperty('channel')
			expect(response).toHaveProperty('exported_object')
			expect(response).toHaveProperty('parameters')
			expect(response).toHaveProperty('result')
			expect(response).toHaveProperty('user_id')
		})
	})
})
