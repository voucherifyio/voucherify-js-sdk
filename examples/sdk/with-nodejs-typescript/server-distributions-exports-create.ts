import { VoucherifyServerSide } from '@voucherify/sdk'

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

;(async () => {
	const request = {
		exported_object: 'voucher',
		parameters: {
			fields: ['id', 'code', 'voucher_type', 'value', 'discount_type'],
			filters: { code: { conditions: { $is_unknown: true } } },
		},
	} as const
	const result = await voucherify.distributions.exports.create(request)
	switch (result.exported_object) {
		case 'voucher':
			if (result.parameters?.fields && result.parameters.fields.includes('code')) {
				console.log(`will export voucher codes!`)
			}
	}
})()
