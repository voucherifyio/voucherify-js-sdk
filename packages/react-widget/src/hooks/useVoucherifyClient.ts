import { useState, useEffect } from 'react'
import { VoucherifyClientSide, VoucherifyClientSideOptions } from '@voucherify/sdk'

export function useVoucherifyClient(options: VoucherifyClientSideOptions) {
	const [client, setClient] = useState(() => VoucherifyClientSide(options))
	const [isSubmitting, setSubmitting] = useState(false)

	useEffect(
		function () {
			setClient(VoucherifyClientSide(options))
		},
		[options.apiUrl, options.clientApplicationId, options.clientSecretKey, options.trackingId, options.origin],
	)

	return [client, isSubmitting, setSubmitting] as const
}
