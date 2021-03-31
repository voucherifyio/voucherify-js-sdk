import { VoucherifyWidgetCustomer, VoucherifyWidgetCustomerState } from './VoucherifyPublish'

// This will be fixed
export type VoucherifySubscribeLoadedConsents = any[]

export type VoucherifySubscribeInputs = {
	[index: string]: string
	voucherifySubscribeStatus: string
	voucherifySubscribe: string
} & VoucherifyWidgetCustomer

export type ConsentsInput = Record<string, string | boolean>

export type VoucherifySubscribeInputsState = {
	[index: string]: boolean
	voucherifySubscribeStatus: boolean
	voucherifySubscribe: boolean
} & VoucherifyWidgetCustomerState

export type NotDefinedPlaceholder = Pick<
	VoucherifySubscribeInputs,
	'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'postal_code' | 'city' | 'state' | 'country'
> & { [index: string]: string }
