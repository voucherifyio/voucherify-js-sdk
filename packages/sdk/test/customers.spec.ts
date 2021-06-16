import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'
import { encode, omit } from '../src/helpers'

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

	it('should get a customer', async () => {
		const customerId = '12345'
		const getCustomerResponse = { id: customerId, name: 'Customer Name' }

		axios.get.mockResolvedValueOnce({ data: getCustomerResponse, status: 200 } as AxiosResponse)

		const response = await voucherify.customers.get(customerId)

		expect(response).toBe(getCustomerResponse)
		expect(axios.get).toHaveBeenCalledWith(`/customers/${encode(customerId)}`, { params: undefined })
	})

	it('should list customers', async () => {
		const customersList = { object: 'list', customers: [{ name: 'Test' }, { name: 'Test 2' }] }

		axios.get.mockResolvedValueOnce({ data: customersList, status: 200 } as AxiosResponse)

		const response = await voucherify.customers.list({})

		expect(response).toBe(customersList)
		expect(axios.get).toHaveBeenCalledWith('/customers', { params: {} })
	})

	it('should scroll through customers and sort them by descending order without initial cursor (starting_after)', async () => {})

	it('should scroll through customers and sort them by descending order with initial cursor (starting_after)', async () => {})

	it('should scroll through customers and sort them by ascending order without initial cursor (starting_after)', async () => {})

	it('should scroll through customers and sort them by ascending order with initial cursor (starting_after)', async () => {})

	it('should update customer', async () => {
		const updateCustomer = { id: '098765', name: 'Changed Name' }

		axios.put.mockResolvedValueOnce({ data: updateCustomer, status: 200 } as AxiosResponse)

		const response = await voucherify.customers.update(updateCustomer)

		expect(response).toBe(updateCustomer)
		expect(axios.put).toHaveBeenCalledWith(`/customers/${encode(updateCustomer.id)}`, omit(updateCustomer, ['id']), {
			params: undefined,
		})
	})

	it('should delete a customer', async () => {
		const deleteCustomerId = '098765'

		axios.delete.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		const response = await voucherify.customers.delete(deleteCustomerId)

		expect(response).toBe(undefined)
		expect(axios.delete).toHaveBeenCalledWith(`/customers/${encode(deleteCustomerId)}`, { params: undefined })
	})

	it('should update customer consents', async () => {
		const updateCustomer = { id: '123456', name: 'Test Name' }
		const updateConsent = { unsubscribed: true }

		axios.put.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		const response = await voucherify.customers.updateConsents(updateCustomer, updateConsent)

		expect(response).toBe(undefined)
		expect(axios.put).toHaveBeenCalledWith(`/customers/${encode(updateCustomer.id)}/consents`, updateConsent, {
			params: undefined,
		})
	})
})
