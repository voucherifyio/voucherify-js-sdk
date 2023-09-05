import { voucherifyClient as client } from './client'
import { generateVoucher } from './utils/generateVoucher'
import { generateRandomString } from './utils/generateRandomString'

describe('Vouchers API', () => {
	describe('List Gift Card Transactions', () => {
		it('should return required properties', async () => {
			const code = (await generateVoucher()).code
			const query = {
				limit: 20,
				page: 1,
			}
			const response = await client.vouchers.listGiftCardTransactions(code, query)
			expect(typeof response.data).toBe('object')
			expect(typeof response.data_ref).toBe('string')
			expect(typeof response.object).toBe('string')
		})
		it('should throw error when code does not exist', async () => {
			try {
				await client.vouchers.listGiftCardTransactions(generateRandomString(55))
			} catch (error) {
				expect(error?.message).toBe('Resource not found')
				expect(error?.key).toBe('not_found')
				expect(error?.code).toBe(404)
			}
		})
		it('should not throw error if query params were not specified', async () => {
			const code = (await generateVoucher()).code
			let hasError = false
			try {
				await client.vouchers.listGiftCardTransactions(code)
			} catch (error) {
				hasError = true
			}
			expect(hasError).toBeFalsy()
		})
	})
})
