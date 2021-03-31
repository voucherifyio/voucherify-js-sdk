export interface VoucherifyWidgetCustomer {
	[index: string]: string
	name: string
	email: string
	phone: string
	line_1: string
	line_2: string
	postal_code: string
	city: string
	state: string
	country: string
}

export interface VoucherifyWidgetCustomerState {
	[index: string]: boolean
	name: boolean
	phone: boolean
	email: boolean
	line_1: boolean
	line_2: boolean
	postal_code: boolean
	city: boolean
	state: boolean
	country: boolean
}

export type VoucherifyPublishInputs = {
	voucherifyPublishStatus: string
	voucherifyTracking: string
	voucherifyPublish: string
} & VoucherifyWidgetCustomer

export type VoucherifyPublishInputsState = {
	voucherifyPublishStatus: boolean
	voucherifyPublish: boolean
} & VoucherifyWidgetCustomerState

export type NotDefinedPlaceholder = Pick<
	VoucherifyPublishInputs,
	'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'postal_code' | 'city' | 'state' | 'country'
> & { [index: string]: string }
