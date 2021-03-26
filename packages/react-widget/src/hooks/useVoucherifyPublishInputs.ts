import { VoucherifyPublishInputs, VoucherifyPublishInputsState } from '../types/VoucherifyPublish'
import { useCallback, useState } from 'react'

function getEmptyInputs(): VoucherifyPublishInputs {
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
		voucherifyPublishStatus: '',
		voucherifyTracking: '',
		voucherifyPublish: '',
	}
}

function getEmptyInputState(): VoucherifyPublishInputsState {
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
		voucherifyPublishStatus: true,
		voucherifyPublish: true,
	}
}

export function useVoucherifyPublishInputs() {
	const [input, setInput] = useState(getEmptyInputs)
	const [inputStates, setInputState] = useState(getEmptyInputState)

	const onInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyPublishInputs
		setInput(prev => ({ ...prev, [name]: event.target.value }))
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
