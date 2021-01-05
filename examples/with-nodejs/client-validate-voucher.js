// require('source-map-support').install()
const { VoucherifyClientSide } = require('@voucherify/sdk')

const voucherify = VoucherifyClientSide({
	applicationId: '011240bf-d5fc-4ef1-9e82-11eb68c43bf5',
	clientToken: '9e2230c5-71fb-460a-91c6-fbee64707a20',
	trackingId: 'gustav@purpleson.com', // or voucherify.setIdentity('gustav@purpleson.com')
	origin: 'localhost:5000',
})
// Validate Voucher
voucherify
	.validate({
		code: 'sKKFCKLZ',
		amount: 1000,
		items: [{ product_id: 'prod_f1r5Tpr0DuC7', quantity: 1 }],
		orderMetadata: {
			source: 'website',
		},
	})
	.then(result => {
		console.log(result)
	})
	.catch(console.error)

// Validate Promotion
voucherify
	.validate({
		amount: 1000,
		items: [{ product_id: 'prod_f1r5Tpr0DuC7', quantity: 1 }],
		orderMetadata: {
			source: 'website',
		},
	})
	.then(result => {
		console.log(result)
	})
	.catch(console.error)
