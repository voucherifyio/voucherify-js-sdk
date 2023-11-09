import { voucherifyClient as client } from '../client'
import { DiscountVouchersTypesEnum } from '@voucherify/sdk'

export const generateDiscountVoucher = async () =>
	await client.vouchers.create({
		type: 'DISCOUNT_VOUCHER',
		discount: {
			amount_off: 2000,
			type: DiscountVouchersTypesEnum.AMOUNT,
		},
		redemption: {
			quantity: 1,
		},
		metadata: {},
	})
