import { VoucherifySubscribeInputs, VoucherifySubscribeInputsState } from '../types/VoucherifySubscribe'
import { useCallback, useState } from 'react'

function getEmptyInputs(): VoucherifySubscribeInputs {
	return {
		name: '',
		email: '',
		phone: '',
		line_1: '',
		line_2: '',
		postal_code: '',
		city: '',
		state: '',
		country: '',
		voucherifySubscribeStatus: '',
		voucherifySubscribe: '',
	}
}

function getEmptyInputState(): VoucherifySubscribeInputsState {
	return {
		name: true,
		phone: true,
		email: true,
		line_1: true,
		line_2: true,
		postal_code: true,
		city: true,
		state: true,
		country: true,
		voucherifySubscribeStatus: true,
		voucherifySubscribe: true,
	}
}

export function useVoucherifySubscribeInputs() {
	const [input, setInput] = useState(getEmptyInputs)
	const [inputStates, setInputState] = useState(getEmptyInputState)

	const onInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifySubscribeInputs

		if (event.target.value === 'off') {
			setInput(prev => ({ ...prev, [name]: 'on' }))
		} else if (event.target.value === 'on') {
			setInput(prev => ({ ...prev, [name]: 'off' }))
		} else {
			setInput(prev => ({ ...prev, [name]: event.target.value }))
		}
	}, [])

	const resetInputs = useCallback(function reset() {
		setInput(getEmptyInputs)
		setInputState(getEmptyInputState)
	}, [])

	return {
		input,
		inputStates,
		onInputChange,
		resetInputs,
		setInput,
		setInputState,
	}
}
