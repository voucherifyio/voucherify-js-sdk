<<<<<<< HEAD:examples/sdk/with-nodejs-typescript/server-list-campaigns.ts
// require('source-map-support').install()
import { VoucherifyServerSide } from '@voucherify/sdk'
=======
// require('source-map-support').install()const { VoucherifyServerSide } = require('@voucherify/sdk')
>>>>>>> 0cdf868c331cb5eed6fb3a8b512a5274494e7a58:examples/with-nodejs/server-list-campaigns.js

const voucherify = VoucherifyServerSide({
	applicationId: 'c70a6f00-cf91-4756-9df5-47628850002b',
	secretKey: '3266b9f8-e246-4f79-bdf0-833929b1380c',
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
	)
