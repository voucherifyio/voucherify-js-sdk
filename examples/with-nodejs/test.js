// require('source-map-support').install()
const { VoucherifyServerSide } = require('@voucherify/sdk')

const applicationId = 'c1a73462-ed78-4ec1-9266-bf10a27ad2bd'
const secretKey = '4101176f-82ce-4c27-85be-f3af3c44541a'

const voucherify = VoucherifyServerSide({
	applicationId,
	secretKey,
})

const coin = 'rew_Ad6sViakxzY7Bk0EvkvCKzPA'
const material = 'rew_xbLAw6Cvby2epXbBoFuzOYiq'

voucherify.orders
	.create({
		order: {
			amount: 200,
			items: [{ product_id: '22' }],
		},
	})
	// voucherify.loyalties
	// 	.redeemReward('camp_zyL3XdPHJms4rxHlh4h3NJrY', 'HOT-BEANS-UMz1YeS', {
	// 		reward: {
	// 			id: coin,
	// 		},
	// 		order: {
	// 			amount: 200,
	// 			items: [{ product_id: '22' }],
	// 		},
	// 	})
	.then(function (result) {
		console.log(result)
	})
	.catch(function (err) {
		console.error(err)
	})
