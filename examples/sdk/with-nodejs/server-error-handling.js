// require('source-map-support').install()
const { VoucherifyServerSide } = require('@voucherify/sdk')

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
	// exposeErrorCause: true - if you wish to include bare Axios error in VoucherifyError
})

voucherify.customers
	.get('non_existing_customer')
	.then(result => {
		console.log('Result: ', result)
	})
	.catch(error => {
		if (error.isAxiosError) {
			// networking error
			console.log('Networking error: ', error)
		} else {
			console.log('Voucherify API error: ', error)
		}
	})
