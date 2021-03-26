import { VoucherifyRedeemInputs, VoucherifyRedeemInputsState } from '../types/VoucherifyRedeem'
import { useCallback, useState } from 'react'

function getEmptyInputs(): VoucherifyRedeemInputs {
	return {
		voucherifyCode: '',
		voucherifyAmount: '',
		voucherifyTracking: '',
	}
}

function getEmptyInputState(): VoucherifyRedeemInputsState {
	return {
		voucherifyCode: false,
		voucherifyAmount: false,
		voucherifyRedeem: false,
	}
}

function getEmptyValidInputState(): VoucherifyRedeemInputsState {
	return {
		voucherifyCode: false,
		voucherifyAmount: false,
		voucherifyRedeem: false,
	}
}

export function useVoucherifyRedeemInputs() {
	const [input, setInput] = useState(getEmptyInputs)
	const [inputStates, setInputState] = useState(getEmptyInputState)
	const [inputValidStates, setValidInputState] = useState(getEmptyValidInputState)

	const onInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyRedeemInputs
		setInput(prev => ({ ...prev, [name]: event.target.value }))
	}, [])

	const resetInputs = useCallback(function reset() {
		setInput(getEmptyInputs)
		setInputState(getEmptyInputState)
	}, [])

	return {
		input,
		inputStates,
		inputValidStates,
		setValidInputState,
		onInputChange,
		resetInputs,
		setInput,
		setInputState,
	}
}
