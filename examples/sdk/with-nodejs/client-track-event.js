// require('source-map-support').install()
const { VoucherifyClientSide } = require('@voucherify/sdk')

const voucherify = VoucherifyClientSide({
	clientApplicationId: '39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99',
	clientSecretKey: '9ec904dc-7cfe-457e-89ca-e54e5aae1d1b',
	origin: 'example.com',
})

voucherify.setIdentity('gustav@purpleson.com')

const customer = {
	name: 'gustav@purpleson.com',
}
const metadata = {
	lang: 'en',
	test: true,
}
voucherify
	.track('Custom event 123', customer, metadata)
	.then(result => {
		console.log(result)
	})
	.catch(console.error)
