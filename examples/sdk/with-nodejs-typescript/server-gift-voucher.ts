// require('source-map-support').install()
import { VoucherifyServerSide } from '@voucherify/sdk'

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

let voucherCode

voucherify.vouchers
	.create({
		type: 'GIFT_VOUCHER',
		gift: {
			amount: 10000,
		},
		category: 'Node SDK Test',
		start_date: '2021-01-01T00:00:00Z',
		expiration_date: '2021-12-31T23:59:59Z',
	})
	.then(function (result) {
		console.log('Voucher %s created. Redeeming...', result.code)
		voucherCode = result.code
		return voucherify.redemptions.redeem(result.code, { order: { amount: 5000 } })
	})
	.then(function (result) {
		console.log('Voucher %s redeemed. Redemption id: %s, Rolling back...', result.voucher.code, result.id)
		return voucherify.redemptions.rollback(result.id, { reason: 'Just so' })
	})
	.then(function (result) {
		console.log('Redemption %s rolled back. Rollback id: %s', result.redemption, result.id)
		console.log(JSON.stringify(result, null, 4))
		return voucherify.vouchers.delete(voucherCode, { force: true })
	})
	.then(function (result) {
		console.log('Voucher %s deleted. Result: %j', voucherCode, result)
	})
	.catch(function (error) {
		console.error(error)
	})
