// require('source-map-support').install()
const { VoucherifyServerSide } = require('@voucherify/sdk')

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

const payload = {
	name: 'Apple iPhone 6',
	metadata: {
		type: 'normal',
	},
	attributes: ['attr_one', 'attr_two'],
}

let skuId = null

console.log('==== CREATE ====')
voucherify.products
	.create(payload)
	.then(product => {
		console.log('New Product: ', product)

		console.log('==== READ ====')
		return voucherify.products
			.get(product.id)
			.then(result => {
				console.log('Result: ', result)
			})
			.then(() => {
				console.log('==== CREATE - SKU ====')

				const sku = {
					sku: 'APPLE_IPHONE_6_BLACK',
				}

				return voucherify.products
					.createSku(product.id, sku)
					.then(sku => {
						console.log('Result: ', sku)
						console.log('==== GET - SKU ====')

						return voucherify.products.getSku(product.id, sku.id).then(sku => {
							console.log('Result: ', sku)
							console.log('==== UPDATE - SKU ====')

							sku.sku = 'eur'
							sku.price = 1000

							return voucherify.products.updateSku(product.id, sku)
						})
					})
					.then(sku => {
						console.log('Result: ', sku)

						skuId = sku.id

						return product
					})
			})
	})
	.then(product => {
		console.log('==== UPDATE ====')

		product.metadata = product.metadata || {}
		product.metadata.type = 'premium'

		return voucherify.products.update(product).then(result => {
			console.log('Result: ', JSON.stringify(result, null, 2))
			return product
		})
	})
	.then(product => {
		if (!skuId) {
			return product
		}

		console.log('==== DELETE - SKU ====')

		return voucherify.products.deleteSku(product.id, skuId).then(() => {
			console.log('Checking...')
			return voucherify.products
				.getSku(product.id, skuId)
				.catch(err => {
					console.log('Result:', err)
					return product
				})
				.then(product => {
					skuId = null
					return product
				})
		})
	})
	.then(product => {
		console.log('==== DELETE ====')
		return voucherify.products.delete(product.id).then(() => {
			console.log('Checking...')
			return voucherify.products.get(product.id).catch(err => {
				console.log('Result:', err)
			})
		})
	})
	.catch(err => {
		console.error(err)
	})
