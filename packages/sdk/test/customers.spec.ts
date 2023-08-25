import { voucherifyClient as client } from './client'
import { CustomersCreateResponse, CustomersUpdateResponse } from '../src'
import { generateRandomString } from './utils/generateRandomString'
import { generateCustomerCSV } from './utils/generateCustomerCSV'

describe('Customers API', () => {
	//client.customers.create
	let customerCreate: CustomersCreateResponse

	it('should create a customer without any data', async () => {
		customerCreate = await client.customers.create({})
	})

	it('should update a customer with id', async () => {
		const name = 'John'
		if ('id' in customerCreate) {
			customerCreate = await client.customers.create({ id: customerCreate.id, name })
		}
		expect(customerCreate.name).toBe(name)
	})

	it('should create a customer with data', async () => {
		const customerData = {
			source_id: 'string',
			name: 'string',
			email: 'string@example.com',
			metadata: {
				dsadas: 'string',
			},
			description: 'string',
			address: {
				city: 'string',
				state: 'string',
				line_1: 'string',
				line_2: 'string',
				country: 'string',
				postal_code: 'string',
			},
			phone: '+000321321',
		}
		customerCreate = await client.customers.create(customerData)
		expect(customerCreate).toEqual(expect.objectContaining(customerData))
	})

	it('should update a customer with source id', async () => {
		const name = 'Adam'
		customerCreate = await client.customers.create({ source_id: customerCreate.source_id, name })
		expect(customerCreate.name).toBe(name)
	})
	/////////////////////////////////////////////////////////////////////

	//client.customers.update
	let customerUpdate: CustomersUpdateResponse

	it('should update a customer with source id', async () => {
		const name = 'Stan'
		if (!customerCreate.source_id) {
			throw new Error(`source Id should not be undefined`)
		}
		customerUpdate = await client.customers.update({ source_id: customerCreate.source_id, name })
		expect(customerUpdate.name).toBe(name)
	})

	it('should update a customer with id', async () => {
		const name = 'Lee'
		if (!customerUpdate.id) {
			throw new Error(`id should not be undefined`)
		}
		customerUpdate = await client.customers.update({ id: customerUpdate.id, name })
		expect(customerUpdate.name).toBe(name)
	})

	//client.customers.delete
	it('should create a customer, and then delete it by sourceId', async () => {
		const source_id = generateRandomString()
		await client.customers.create({ source_id })
		await client.customers.delete(source_id)
		try {
			await client.customers.get(source_id)
			throw new Error(`Customer should not be found`)
		} catch (e) {
			expect(e.message).toBe('Resource not found')
		}
	})

	it('should create a customer, and then delete it by id', async () => {
		const customer = await client.customers.create({})
		await client.customers.delete(customer.id)
		try {
			await client.customers.get(customer.id)
			throw new Error(`Customer should not be found`)
		} catch (e) {
			expect(e.message).toBe('Resource not found')
		}
	})

	//client.customers.deletePermanently
	it('should create a customer, and then delete it permanently by sourceId', async () => {
		const source_id = generateRandomString()
		await client.customers.create({ source_id })
		await client.customers.deletePermanently(source_id)
		//jest expect to throw
		try {
			await client.customers.get(source_id)
		} catch (e) {
			return expect(e.message).toBe('Resource not found')
		}
		throw new Error(`Customer should not be found`)
	})

	it('should create a customer, and then delete it permanently by id', async () => {
		const customer = await client.customers.create({})
		await client.customers.deletePermanently(customer.id)
		try {
			await client.customers.get(customer.id)
			throw new Error(`Customer should not be found`)
		} catch (e) {
			expect(e.message).toBe('Resource not found')
		}
	})

	//client.customers.list
	it('should list customers', async () => {
		const response = await client.customers.list({ limit: 5, page: 1, name: 'John' })
		const { object, data_ref, customers, total } = response
		if (!object || !data_ref || !customers || !total) {
			throw new Error('All values should be not undefined')
		}
	})

	// const allCustomers = []
	// //client.customers.scroll ---- does not work
	// it('should scroll through all customers', async () => {
	// 	const response = await client.customers.list({ limit: 1 })
	// 	const { total } = response
	// 	for await (const customer of client.customers.scroll({ limit: 5 })) {
	// 		allCustomers.push(customer)
	// 	}
	// 	console.log(total, allCustomers.length)
	// 	if (total !== allCustomers.length) {
	// 		throw new Error(`Scroll got incorrect number of customers`)
	// 	}
	// })

	//client.customers.import
	it('should import customer via csv file', async () => {
		const customerSourceId = generateRandomString()
		await generateCustomerCSV(customerSourceId)
		const response = await client.customers.importCustomersUsingCSV(__dirname + '/csv/customers.csv')
		expect(response.async_action_id).toEqual(expect.stringMatching(/^aa_.*/))
		while ((await client.asyncActions.get(response.async_action_id)).status === 'IN_PROGRESS') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const importedCustomer = await client.customers.get(customerSourceId)
		expect(importedCustomer.source_id).toEqual(customerSourceId)
	})
})
