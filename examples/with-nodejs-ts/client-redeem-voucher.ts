// require('source-map-support').install()
const { VoucherifyClientSide } = require('@voucherify/sdk')

const voucherify = VoucherifyClientSide({
	clientApplicationId: '011240bf-d5fc-4ef1-9e82-11eb68c43bf5',
	clientSecretKey: '9e2230c5-71fb-460a-91c6-fbee64707a20',
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
