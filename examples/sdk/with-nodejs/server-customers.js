// require('source-map-support').install()
const { VoucherifyServerSide } = require('@voucherify/sdk')

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

async function scrollCustomers() {
	for await (const customer of voucherify.customers.scroll({ limit: 5 })) {
		console.log('Customer', customer)
	}
}

scrollCustomers().catch(console.error)
