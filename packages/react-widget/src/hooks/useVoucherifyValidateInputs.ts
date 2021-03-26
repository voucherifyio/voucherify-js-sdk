import { VoucherifyValidateInputs, VoucherifyValidateInputsState } from '../types/VoucherifyValidate'
import { useCallback, useState } from 'react'

function getEmptyInputs(): VoucherifyValidateInputs {
	return {
		voucherifyCode: '',
		voucherifyAmount: '',
		voucherifyDiscountType: '',
		voucherifyPercentOff: 0,
		voucherifyAmountOff: 0,
		voucherifyUnitOff: 0,
		voucherifyTracking: '',
	}
}

function getEmptyInputState(): VoucherifyValidateInputsState {
	return {
		voucherifyCode: false,
		voucherifyAmount: false,
		voucherifyValidate: false,
	}
}

export function useVoucherifyValidateInputs() {
	const [input, setInput] = useState(getEmptyInputs)
	const [inputState, setInputState] = useState(getEmptyInputState)

	const onInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyValidateInputs
		setInput(prev => ({ ...prev, [name]: event.target.value }))
	}, [])

	const resetInputs = useCallback(function reset() {
		setInput(getEmptyInputs)
		setInputState(getEmptyInputState)
	}, [])

	return {
		input,
		inputState,
		onInputChange,
		resetInputs,
		setInput,
		setInputState,
	}
}
