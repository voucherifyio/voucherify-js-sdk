// require('source-map-support').install()
const { VoucherifyCustomer } = require('@voucherify/sdk')

const voucherify = VoucherifyCustomer({
	applicationId: '011240bf-d5fc-4ef1-9e82-11eb68c43bf5',
	clientToken: '9e2230c5-71fb-460a-91c6-fbee64707a20',
	trackingId: 'gustav@purpleson.com', // or voucherify.setIdentity('gustav@purpleson.com')
	origin: 'example.com',
})
const customer = {
	name: 'gustav@purpleson.com',
}
const metadata = {
	lang: 'en',
	test: true,
}
voucherify
	.track('Custom event 123', metadata, customer)
	.then(result => {
		console.log(result)
	})
	.catch(console.error)
