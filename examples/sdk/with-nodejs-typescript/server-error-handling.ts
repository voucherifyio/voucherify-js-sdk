// require('source-map-support').install()
import { VoucherifyError, VoucherifyServerSide } from '@voucherify/sdk'
// Make sure you have axios installed
import { AxiosError } from 'axios'

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
	// exposeAxiosError: true - if you wish to include bare Axios error in VoucherifyError
})

voucherify.customers
	.get('non_existing_customer')
	.then(result => {
		console.log('Result: ', result)
	})
	.catch((error: VoucherifyError & AxiosError<unknown>) => {
		if (error.isAxiosError) {
			// networking error
			// cast to AxiosError for correct typing
			const axiosError = error as AxiosError<unknown>
			console.log('Networking error: ', axiosError)
		} else {
			// Voucherify API error
			// case to VoucherifyError for correct typing
			const voucherifyError = error as VoucherifyError
			console.log('Voucherify API error: ', voucherifyError)
		}
	})
