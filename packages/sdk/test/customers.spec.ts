import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { generateCustomerCSV } from './utils/generateCustomerCSV'
import { CustomerRequest, DiscountVouchersTypesEnum, DistributionsPublicationsCreateParams } from '@voucherify/sdk'

jest.setTimeout(15000)

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
		const updateResponse = await client.customers.updateInBulk([
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
		expect(updatedCustomer.address).toEqual(null)
	})

	it('Should updateCustomersMetadataInBulk', async () => {
		const createdCustomer = await client.customers.create({ name: 'Bob', source_id: generateRandomString() })
		if (!('source_id' in createdCustomer) || typeof createdCustomer?.source_id !== 'string') {
			return
		}
		expect(createdCustomer).not.toHaveProperty('metadata')
		const metadata = { test: 123 }
		const updateResponse = await client.customers.updateMetadataInBulk({
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

		const removedMetadata = { test: null }

		const removeMetadataResponse = await client.customers.updateMetadataInBulk({
			source_ids: [createdCustomer.source_id],
			metadata: removedMetadata,
		})
		while ((await client.asyncActions.get(removeMetadataResponse.async_action_id)).status !== 'DONE') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const updatedCustomerWithRemovedMetadata = await client.customers.get(createdCustomer.id)
		if (!('metadata' in updatedCustomerWithRemovedMetadata)) {
			return
		}
		expect(updatedCustomerWithRemovedMetadata.metadata).toEqual(removedMetadata)
	})
	it('Should return address equal to null after creating new customer', async () => {
		const createdCustomer = await client.customers.create({ source_id: generateRandomString() })
		if (!('source_id' in createdCustomer) || typeof createdCustomer?.source_id !== 'string') {
			return
		}
		expect(createdCustomer.address).toEqual(null)
	})
	it('Should not return metadata after creating new customer', async () => {
		const createdCustomer = await client.customers.create({ source_id: generateRandomString() })
		if (!('source_id' in createdCustomer) || typeof createdCustomer?.source_id !== 'string') {
			return
		}
		expect(createdCustomer).not.toHaveProperty('metadata')
	})
	it('Should update address in bulk properly', async () => {
		const createdCustomer = await client.customers.create({ source_id: generateRandomString() })
		const secondCreatedCustomer = await client.customers.create({ source_id: generateRandomString() })
		if (!('source_id' in createdCustomer) || typeof createdCustomer?.source_id !== 'string') {
			return
		}
		if (!('source_id' in secondCreatedCustomer) || typeof secondCreatedCustomer?.source_id !== 'string') {
			return
		}
		const address = {
			city: 'New York',
			country: 'US',
		}
		const updateCustomerResponse = await client.customers.updateInBulk([
			{
				source_id: createdCustomer.source_id,
				name: 'Bob Doe',
				description: 'Bob from NY',
				address: address,
			},
			{
				source_id: secondCreatedCustomer.source_id,
				name: 'Jane Doe',
				description: 'Jane from NY',
				address: address,
			},
		])
		while ((await client.asyncActions.get(updateCustomerResponse.async_action_id)).status !== 'DONE') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const updatedCustomer = await client.customers.get(createdCustomer.id)
		if (!('address' in updatedCustomer)) {
			return
		}
		const secondUpdatedCustomer = await client.customers.get(secondCreatedCustomer.id)
		if (!('address' in secondUpdatedCustomer)) {
			return
		}
		expect(updatedCustomer.address).toEqual(address)
		expect(secondUpdatedCustomer.address).toEqual(address)

		const removedAddress = {
			city: null,
			country: null,
		}
		const updateCustomerRemoveAddressResponse = await client.customers.updateInBulk([
			{
				source_id: createdCustomer.source_id,
				address: removedAddress,
			},
		])
		while ((await client.asyncActions.get(updateCustomerRemoveAddressResponse.async_action_id)).status !== 'DONE') {
			await new Promise(r => setTimeout(r, 1000))
		}
		const updatedCustomerWithNoAddress = await client.customers.get(createdCustomer.id)
		if (!('address' in updatedCustomerWithNoAddress)) {
			return
		}
		expect(updatedCustomerWithNoAddress.address).toEqual(removedAddress)
	})

	it('Should return redeemable for customer', async () => {
		const createdCustomer: CustomerRequest = await client.customers.create({ source_id: generateRandomString() })

		const discountCampaign = await client.campaigns.create({
			campaign_type: 'DISCOUNT_COUPONS',
			name: generateRandomString(),
			type: 'AUTO_UPDATE',
			voucher: {
				code_config: {
					length: 3,
				},
				type: 'DISCOUNT_VOUCHER',
				discount: {
					amount_off: 0,
					type: DiscountVouchersTypesEnum.AMOUNT,
				},
			},
		})

		const distributionsPublicationsCreateParams: DistributionsPublicationsCreateParams = {
			customer: createdCustomer,
			campaign: discountCampaign,
		}

		await client.distributions.publications.create(distributionsPublicationsCreateParams)

		const redeemables = await client.customers.listRedeemables(createdCustomer.id as string)
		expect(redeemables.data).toBeDefined()
	})
})
