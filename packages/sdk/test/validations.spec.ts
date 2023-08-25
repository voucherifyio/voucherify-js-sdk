import { voucherifyClient as client } from './client'
import { generateVoucher } from './utils/generateVoucher'
import { generateRandomString } from './utils/generateRandomString'

describe('Validations API', () => {
	it('while validating not existing code, should get error message', async () => {
		const response = await client.validations.validateVoucher(generateRandomString(55))
		if (response.valid) {
			//ResponseValidateVoucherTrue
			return
		}
		//ResponseValidateVoucherFalse
		expect(typeof response.reason).toBe('string')
		expect(typeof response.error?.message).toBe('string')
		expect(typeof response.error?.key).toBe('string')
		expect(typeof response.error?.code).toBe('number')
	})

	it('should validate voucher without campaign', async () => {
		const code = (await generateVoucher()).code
		const response = await client.validations.validateVoucher(code)
		if (!response.valid) {
			//ResponseValidateVoucherFalse
			return
		}
		//ResponseValidateVoucherTrue
		expect(response.discount?.type).toEqual('AMOUNT')
		if (response.discount?.type === 'AMOUNT') {
			expect(typeof response.discount.amount_off).toEqual('number')
		}
	})
})
