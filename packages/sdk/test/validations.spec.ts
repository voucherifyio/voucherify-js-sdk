import axiosOrg, { AxiosResponse } from 'axios'

import { VoucherifyServerSide } from '../src'
import { encode } from '../src/helpers'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Validations API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should validate a voucher without additional context', async () => {
		const code = 'TEST-CODE'
		const context = {}
		axios.post.mockResolvedValueOnce({ data: context, status: 200 } as AxiosResponse)

		await voucherify.validations.validateVoucher(code, context)

		expect(axios.post).toHaveBeenCalledWith(`/vouchers/${encode(code)}/validate`, context, { params: undefined })
	})

	it('should validate a voucher with additional context', async () => {
		const code = 'TEST-CODE'

		const context = {
			customer: {
				source_id: 'alice@swanson.co',
				name: 'Alice Swanson',
			},
			order: {
				amount: 1500,
				items: [{ product_id: 'prod_1' }, { product_id: 'prod_2' }],
			},
		}

		axios.post.mockResolvedValueOnce({ data: context, status: 200 } as AxiosResponse)

		await voucherify.validations.validateVoucher(code, context)

		expect(axios.post).toHaveBeenCalledWith(`/vouchers/${encode(code)}/validate`, context, { params: undefined })
	})

	it('should validate a voucher using alias', async () => {
		const code = 'TEST-CODE2'
		const context = {}

		axios.post.mockResolvedValueOnce({ data: context, status: 200 } as AxiosResponse)

		await voucherify.validations.validate(code)

		expect(axios.post).toHaveBeenCalledWith(`/vouchers/${encode(code)}/validate`, context, { params: undefined })
	})

	it('should validate a promotion tier', async () => {
		const context = {
			customer: {
				source_id: 'alice@swanson.co',
				name: 'Alice Swanson',
			},
			order: {
				amount: 1500,
				items: [{ product_id: 'prod_1' }, { product_id: 'prod_2' }],
			},
		}

		axios.post.mockResolvedValueOnce({ data: context, status: 200 } as AxiosResponse)

		await voucherify.promotions.validate(context)

		expect(axios.post).toHaveBeenCalledWith('/promotions/validation', context, { params: undefined })
	})
})
