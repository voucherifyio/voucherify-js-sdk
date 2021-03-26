export interface VoucherifyValidateInputsState {
	[index: string]: boolean
	voucherifyCode: boolean
	voucherifyAmount: boolean
	voucherifyValidate: boolean
}
export interface VoucherifyValidateInputs {
	[index: string]: string | number
	voucherifyCode: string
	voucherifyAmount: string
	voucherifyDiscountType: string
	voucherifyPercentOff: number
	voucherifyAmountOff: number
	voucherifyUnitOff: number
	voucherifyTracking: string
}
