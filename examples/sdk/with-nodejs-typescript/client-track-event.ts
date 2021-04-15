// require('source-map-support').install()
import { VoucherifyClientSide } from '@voucherify/sdk'

const voucherify = VoucherifyClientSide({
	clientApplicationId: '39f0d4d7-ca5b-4e49-bd5b-730a4d9dce99',
	clientSecretKey: '9ec904dc-7cfe-457e-89ca-e54e5aae1d1b',
	trackingId: 'gustav@purpleson.com', // or voucherify.setIdentity('gustav@purpleson.com')
	origin: 'example.com',
})

interface Customer {
	name: string
}

type Metadata = Record<string, any>

const customer: Customer = {
	name: 'gustav@purpleson.com',
}
const metadata: Metadata = {
	lang: 'en',
	test: true,
}
voucherify
	.track('Custom event 123', metadata, customer)
	.then(result => {
		console.log(result)
	})
	.catch(console.error)
