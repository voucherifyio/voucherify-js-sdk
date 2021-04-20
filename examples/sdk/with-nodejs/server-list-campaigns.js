// require('source-map-support').install()
const { VoucherifyServerSide } = require('@voucherify/sdk')

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

voucherify.campaigns
	.list({
		limit: 10,
		page: 1,
		filters: {
			junction: 'AND',
			'metadata.lang': {
				conditions: {
					$is: ['en'],
					$is_not: ['es'],
				},
			},
		},
	})
	.then(function (result) {
		console.log(result)
	})
	.catch(function (err) {
		console.error(err)
	})
