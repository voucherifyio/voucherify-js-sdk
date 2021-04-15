// require('source-map-support').install()
import { VoucherifyClientSide } from '@voucherify/sdk'

const voucherify = VoucherifyClientSide({
	clientApplicationId: '39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99',
	clientSecretKey: '9ec904dc-7cfe-457e-89ca-e54e5aae1d1b',
	trackingId: 'gustav@purpleson.com', // or voucherify.setIdentity('gustav@purpleson.com')
	origin: 'example.com',
})
voucherify
	.redeem('gfct5ZWI1nL', {
		customer: {
			source_id: 'track_+EUcXP8WDKXGf3mYmWxbJvEosmKXi3Aw',
			name: 'Alice Morgan',
		},
		order: {
			amount: 1000,
			items: [{ product_id: 'prod_Bi7sRr3kwvxH2I', sku_id: null, quantity: 1 }],
		},
		metadata: {
			referrer: 'pinterest.com',
		},
	})
	.then(result => console.log(result))
	.catch(console.error)
