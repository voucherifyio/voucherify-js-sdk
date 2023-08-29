import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'

describe('Validations API', () => {
	it('Should delete customer permanently', async () => {
		const createdCustomer = await client.customers.create({ name: 'Bob' })
		if (!('id' in createdCustomer)) {
			return
		}
		expect(await client.customers.get(createdCustomer.id)).toEqual(expect.objectContaining(createdCustomer))
		const deleteCustomerPermanently = await client.customers.deletePermanently(createdCustomer.id)
		expect(deleteCustomerPermanently).toMatchObject({
			id: expect.stringMatching(/^del-*/),
			created_at: expect.stringMatching(
				/^\d{4}-(?:0[1-9]|1[0-2])-(?:[0-2][1-9]|[1-3]0|3[01])T(?:[0-1][0-9]|2[0-3])(?::[0-6]\d)(?::[0-6]\d)?(?:\.\d{3})?(?:[+-][0-2]\d:[0-5]\d|Z)?$/,
			),
			related_object_id: expect.stringMatching(/^cust-*/),
			related_object: 'customer',
			status: 'DONE',
			data_json: {
				events: 0,
				customer_events: 0,
				daily_events: 0,
				segments: 0,
				orders: 0,
				order_events: 1,
				customer: 1,
			},
			object: 'pernament_deletion',
		})
		await expect(client.customers.get(createdCustomer.id)).rejects.toThrow('Resource not found')
	})

	it('Should updateCustomersInBulk', async () => {
		const createdCustomer = await client.customers.create({ name: 'Bob', source_id: generateRandomString() })
		if (!('source_id' in createdCustomer) || typeof createdCustomer?.source_id !== 'string') {
			return
		}
		const phone = '+0700',
			metadata = { test: 123 }
		const updateResponse = await client.customers.updateCustomersInBulk([
			{ source_id: createdCustomer.source_id, phone, metadata },
		])
		while ((await client.asyncActions.get(updateResponse.async_action_id)).status !== 'DONE') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const updatedCustomer = await client.customers.get(createdCustomer.id)
		if (!('phone' in updatedCustomer) || !('metadata' in updatedCustomer)) {
			return
		}
		expect(updatedCustomer.phone).toEqual(phone)
		expect(updatedCustomer.metadata).toEqual(metadata)
	})

	it('Should updateCustomersMetadataInBulk', async () => {
		const createdCustomer = await client.customers.create({ name: 'Bob', source_id: generateRandomString() })
		if (!('source_id' in createdCustomer) || typeof createdCustomer?.source_id !== 'string') {
			return
		}
		const metadata = { test: 123 }
		const updateResponse = await client.customers.updateCustomersMetadataInBulk({
			source_ids: [createdCustomer.source_id],
			metadata,
		})
		while ((await client.asyncActions.get(updateResponse.async_action_id)).status !== 'DONE') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const updatedCustomer = await client.customers.get(createdCustomer.id)
		if (!('metadata' in updatedCustomer)) {
			return
		}
		expect(updatedCustomer.metadata).toEqual(metadata)
	})
})
