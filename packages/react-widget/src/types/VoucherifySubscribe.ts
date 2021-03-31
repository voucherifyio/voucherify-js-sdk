export interface VoucherifySubscribeInputs {
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
	voucherifySubscribeStatus: string
	voucherifySubscribe: string
}

export type ConsentsInput = Record<string, string | boolean>

export interface VoucherifySubscribeInputsState {
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
	voucherifySubscribeStatus: boolean
	voucherifySubscribe: boolean
}

export type NotDefinedPlaceholder = Pick<
	VoucherifySubscribeInputs,
	'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'postal_code' | 'city' | 'state' | 'country'
> & { [index: string]: string }
