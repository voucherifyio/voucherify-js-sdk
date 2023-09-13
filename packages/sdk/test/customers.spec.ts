import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { generateCustomerCSV } from './utils/generateCustomerCSV'

describe('Customers API', () => {
	it('should import customer via csv file', async () => {
		const customerSourceId = generateRandomString()
		await generateCustomerCSV(customerSourceId)
		const response = await client.customers.importCSV(__dirname + '/csv/customers.csv')
		expect(response.async_action_id).toEqual(expect.stringMatching(/^aa_.*/))
		while ((await client.asyncActions.get(response.async_action_id)).status === 'IN_PROGRESS') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const importedCustomer = await client.customers.get(customerSourceId)
		if ('source_id' in importedCustomer) {
			expect(importedCustomer?.source_id).toEqual(customerSourceId)
		}
	})
})
