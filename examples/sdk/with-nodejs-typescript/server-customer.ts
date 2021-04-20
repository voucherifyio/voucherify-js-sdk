// require('source-map-support').install()
import { VoucherifyServerSide } from '@voucherify/sdk'

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

const payload = {
	name: 'John Doe',
	email: 'email@example.com',
	description: 'Premium user, ACME Inc.',
	metadata: {
		lang: 'en',
	},
}

console.log('==== CREATE ====')
voucherify.customers
	.create(payload)
	.then(customer => {
		console.log('New Customer: ', customer)

		console.log('==== READ ====')
		return voucherify.customers.get(customer.id).then(result => {
			console.log('Result: ', result)
			return customer
		})
	})
	.then(customer => {
		console.log('==== UPDATE ====')

		customer.metadata.type = 'premium'

		return voucherify.customers.update(customer).then(result => {
			console.log('Result: ', result)
			return customer
		})
	})
	.then(customer => {
		console.log('==== DELETE ====')
		return voucherify.customers.delete(customer.id).then(() => {
			console.log('Checking...')
			return voucherify.customers.get(customer.id).catch(err => {
				console.log('Result:', err)
			})
		})
	})
	.catch(console.error)
