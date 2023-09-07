import { voucherifyClient as client } from './client'
import { createVoucher } from './utils/createVoucher'
import { generateRandomString } from './utils/generateRandomString'

describe('Validations API', () => {
	it('while validating not existing code, should get error message', async () => {
		const response = await client.validations.validateVoucher(generateRandomString(66))
		expect(response.valid).toBe(false)
		if (response.valid) {
			// this `if` is only to narrow down type of response
			return
		}
		// now as we narrowed down response type, we have access to attributes like `reason` or `error`,
		// for more info check the interface `ResponseValidateVoucherFalse` itself
		expect(typeof response.reason).toBe('string')
		expect(typeof response.error?.message).toBe('string')
		expect(typeof response.error?.key).toBe('string')
		expect(typeof response.error?.code).toBe('number')
	})

	it('should validate voucher without campaign', async () => {
		const code = (await createVoucher()).code
		const response = await client.validations.validateVoucher(code)
		expect(response.valid).toBe(true)
		if (!response.valid) {
			// this `if` is only to narrow down type of response
			return
		}
		// now as we narrowed down response type, we have access to attributes like `discount.type` or `discount.amount_off`,
		// for more info check the interface `ResponseValidateVoucherTrue` itself
		expect(response.discount?.type).toEqual('AMOUNT')
		if (response.discount?.type === 'AMOUNT') {
			expect(typeof response.discount.amount_off).toEqual('number')
		}
	})
})
