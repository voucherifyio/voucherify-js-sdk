// require('source-map-support').install()
import { VoucherifyClientSide } from '@voucherify/sdk'

const voucherify = VoucherifyClientSide({
	clientApplicationId: '39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99',
	clientSecretKey: '9ec904dc-7cfe-457e-89ca-e54e5aae1d1b',
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
