import { VoucherifyWidgetCustomer, VoucherifyWidgetCustomerState } from './VoucherifyPublish'

import { Consent } from '@voucherify/sdk'

export type VoucherifySubscribeLoadedConsents = Consent[]

export type VoucherifySubscribeInputs = {
	voucherifySubscribeStatus: string
	voucherifySubscribe: string
} & VoucherifyWidgetCustomer &
	Record<any, any>

export type VoucherifySubscribeInputsState = {
	voucherifySubscribeStatus: boolean
	voucherifySubscribe: boolean
} & VoucherifyWidgetCustomerState &
	Record<string, boolean>

export type NotDefinedPlaceholder = Pick<
	VoucherifySubscribeInputs,
	'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'postal_code' | 'city' | 'state' | 'country'
> & { [index: string]: string }
