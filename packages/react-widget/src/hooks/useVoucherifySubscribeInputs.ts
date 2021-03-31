import { ConsentsInput, VoucherifySubscribeInputs, VoucherifySubscribeInputsState } from '../types/VoucherifySubscribe'
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
function getEmptyConsentsInput(consents: ConsentsInput): ConsentsInput {
	Object.keys(consents).forEach(function (key) {
		consents[key] = false
	})
	return consents
}

export function useVoucherifySubscribeInputs() {
	const [input, setInput] = useState(getEmptyInputs)
	const [inputStates, setInputState] = useState(getEmptyInputState)
	const [consentsInput, setConsentsInput] = useState<any>({})

	const onInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifySubscribeInputs
		setInput(prev => ({ ...prev, [name]: event.target.value }))
	}, [])

	const onConsentsInputChange = useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as any
		setConsentsInput((prev: any) => ({ ...prev, [name]: event.target.checked }))
	}, [])

	const resetInputs = useCallback(function reset() {
		setInput(getEmptyInputs)
		setInputState(getEmptyInputState)
		setConsentsInput(getEmptyConsentsInput(consentsInput))
	}, [])

	return {
		input,
		inputStates,
		consentsInput,
		onInputChange,
		onConsentsInputChange,
		resetInputs,
		setInput,
		setInputState,
		setConsentsInput,
	}
}
