import { VoucherifyServerSide } from '@voucherify/sdk'

const voucherify = VoucherifyServerSide({
	applicationId: '5452e923-810c-4880-83fb-65202fab8e28',
	secretKey: '6a0f56de-b5a8-4893-bedd-79711134108b',
})

;(async () => {
	const response = await voucherify.validations.validateVoucher('test')

	// First we must narrow down response type by checking the `valid` value
	// As the response type may be either ResponseValidateVoucherTrue or ResponseValidateVoucherFalse
	if (response.valid) {
		// We have narrowed down the `ValidationsValidateVoucherResponse` type to `ResponseValidateVoucherTrue` so now we can access attributes specific for this type like `order`
		// import { ResponseValidateVoucherTrue } from '@voucherify/sdk';
		return { success: true, order: response.order }
	}
	// We have narrowed down the `ValidationsValidateVoucherResponse` type to `ResponseValidateVoucherFalse` so now we can access attributes specific for this type like `reason` or `error`
	// import { ResponseValidateVoucherFalse } from '@voucherify/sdk';
	return { success: false, reason: response.reason || response.error?.message || 'Unknown error' }
})()
