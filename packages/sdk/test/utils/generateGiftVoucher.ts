import { voucherifyClient as client } from '../client'

export const generateGiftVoucher = async () =>
	await client.vouchers.create({
		type: 'GIFT_VOUCHER',
		redemption: {
			quantity: 1,
		},
		gift: {
			amount: 200,
			balance: 200,
		},
	})
