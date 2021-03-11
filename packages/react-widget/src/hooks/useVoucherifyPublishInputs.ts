import { VoucherifyPublishInputs, VoucherifyPublishInputsState } from '@voucherify/sdk'
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
		name: false,
		phone: false,
		email: false,
		line_1: false,
		line_2: false,
		postal_code: false,
		city: false,
		state: false,
		country: false,
		voucherifyPublishStatus: false,
		voucherifyPublish: false,
	}
}

export function useVoucherifyPublishInputs() {
	const [input, setInput] = useState(getEmptyInputs)
	const [invalidInputState, setInvalidInputState] = useState(getEmptyInputState)
	const [validInputState, setValidInputState] = useState(getEmptyInputState)

	const onInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyPublishInputs
		setInput(prev => ({ ...prev, [name]: event.target.value }))
	}, [])

	const resetInputs = useCallback(function reset() {
		setInput(getEmptyInputs)
		setInvalidInputState(getEmptyInputState)
		setValidInputState(getEmptyInputState)
	}, [])

	return {
		input,
		invalidInputState,
		validInputState,
		onInputChange,
		resetInputs,
		setInput,
		setInvalidInputState,
		setValidInputState,
	}
}
