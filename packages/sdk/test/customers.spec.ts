import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Customers API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should create a customer', async () => {
		const customer = { name: 'Customer name' }

		axios.post.mockResolvedValueOnce({ data: customer, status: 200 } as AxiosResponse)

		const response = await voucherify.customers.create(customer)

		expect(response).toBe(customer)
		expect(axios.post).toHaveBeenCalledWith('/customers', customer, { params: undefined })
	})
})
