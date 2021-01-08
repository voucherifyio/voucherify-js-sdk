import * as React from 'react'
import clsx from 'clsx'
import { VoucherifyClientSideOptions } from '@voucherify/sdk'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { VoucherifyLogo } from './VoucherifyLogo'

const INVALID_AMOUNT = 'invalid_amount'
const INVALID_NUMBER = 'invalid_number'
const MISSING_AMOUNT = 'missing_amount'
// const INVALID_CUSTOMER_PHONE = 'invalid_customer_phone'

interface VoucherifyValidateOptions extends VoucherifyClientSideOptions {
	/**
	 * CSS class applied to the input when entered code is invalid
	 */
	classInvalid?: string
	/**
	 * CSS class describing animation of the input field when entered code is invalid
	 */
	classInvalidAnimation?: string
	/**
	 * CSS class applied to the input when entered code is valid
	 */
	classValid?: string
	/**
	 * CSS class describing animation of the input field when entered code is valid
	 */
	classValidAnimation?: string
	/**
	 * source of the image appearing in the circle at the top
	 */
	logoSrc?: string
	/**
	 * alt message of the image appearing in the circle at the top
	 */
	logoAlt?: string
	/**
	 * a callback function invoked when the entered code is valid, it takes the validation response as a parameter
	 */
	onValidated?: (response: $FixMe) => void
	/**
	 * a callback function invoked when there is an error
	 */
	onError?: (error: $FixMe) => void
	/**
	 * flag enables the amount input field
	 */
	amount?: boolean
	/**
	 * text displayed as a placeholder in the code input field
	 */
	textPlaceholder?: string
	/**
	 * text displayed as a placeholder in the amount input field (`amount: true` is required)
	 */
	amountPlaceholder?: string
	/**
	 * a text displayed on the button (default: "Validate")
	 */
	textValidate?: string
}
export function VoucherifyValidate({
	apiUrl,
	clientApplicationId,
	clientSecretKey,
	trackingId,
	origin,
	classInvalid,
	classInvalidAnimation,
	classValid,
	classValidAnimation,
	logoSrc,
	logoAlt,
	onValidated,
	onError,
	amount,
	textPlaceholder,
	amountPlaceholder,
	textValidate = 'Validate',
}: VoucherifyValidateOptions) {
	const classNameInvalid = classInvalid || 'voucherifyInvalid'
	const classNameValid = classValid || 'voucherifyValid'
	const classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake'
	const classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada'

	const [allDisabled, setDisabled] = React.useState(false)
	const [client, isSubmitting, setSubmitting] = useVoucherifyClient({
		apiUrl,
		clientApplicationId,
		clientSecretKey,
		trackingId,
		origin,
	})

	const {
		input,
		invalidInputState,
		validInputState,
		onInputChange,
		resetInputs,
		setInput,
		setInvalidInputState,
		setValidInputState,
	} = useInputs()

	React.useEffect(() => {
		resetInputs()
		setDisabled(false)
	}, [client])

	const classNameCode = clsx({
		voucherifyCode: true,
		[classNameInvalid]: invalidInputState.voucherifyCode,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCode,
		[classNameValid]: validInputState.voucherifyCode,
		[classNameValidAnimation]: validInputState.voucherifyCode,
	})
	const classNameAmount = clsx({
		voucherifyAmount: true,
		[classNameInvalid]: invalidInputState.voucherifyAmount,
		[classNameInvalidAnimation]: invalidInputState.voucherifyAmount,
		[classNameValid]: validInputState.voucherifyAmount,
		[classNameValidAnimation]: validInputState.voucherifyAmount,
	})
	const classNameValidate = clsx({
		voucherifyValidate: true,
		[classNameInvalid]: invalidInputState.voucherifyValidate,
		[classNameValid]: validInputState.voucherifyValidate,
	})

	const onSubmit = React.useCallback(
		function onSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
			setInput(prev => ({
				...prev,
				voucherifyDiscountType: '',
				voucherifyAmountOff: '',
				voucherifyUnitOff: '',
				voucherifyPercentOff: '',
				voucherifyTracking: '',
			}))

			setInvalidInputState(prev => ({ ...prev, voucherifyValidate: false }))
			setValidInputState(prev => ({ ...prev, voucherifyValidate: false }))

			if (!input.voucherifyCode.trim()) {
				setInvalidInputState(prev => ({ ...prev, voucherifyCode: true }))
				return
			}

			const payload: $FixMe = {
				code: input.voucherifyCode,
				amount: parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10),
			}

			setSubmitting(true)

			client
				.validate(payload)
				.then(function (_response) {
					const response: $FixMe = _response

					if (!response || !response.valid) {
						setInvalidInputState(prev => ({ ...prev, voucherifyValidate: true }))
						setValidInputState(prev => ({ ...prev, voucherifyValidate: false }))

						const context: $FixMe = response?.context || {}
						const responseJSON: $FixMe = context?.responseJSON || {}
						const error_key = responseJSON?.key

						if (
							amount &&
							(error_key === INVALID_AMOUNT || error_key === INVALID_NUMBER || error_key === MISSING_AMOUNT)
						) {
							setInvalidInputState(prev => ({ ...prev, voucherifyAmount: true }))
							setValidInputState(prev => ({ ...prev, voucherifyAmount: false }))
						} else {
							setInvalidInputState(prev => ({ ...prev, voucherifyCode: true }))
							setValidInputState(prev => ({ ...prev, voucherifyCode: false }))
						}
						return
					}

					setInvalidInputState(prev => ({
						...prev,
						voucherifyCode: false,
						voucherifyAmount: false,
					}))
					setInput(prev => ({
						...prev,
						voucherifyDiscountType: response?.discount?.type || '',
						voucherifyAmountOff: response?.discount?.amount_off || 0,
						voucherifyUnitOff: response?.discount?.unit_off || 0,
						voucherifyPercentOff: response?.discount?.percent_off || 0,
						voucherifyTracking: response?.tracking_id || '',
					}))

					setDisabled(true)

					setValidInputState(prev => ({
						...prev,
						voucherifyCode: true,
						voucherifyAmount: true,
						voucherifyValidate: true,
					}))
					setInvalidInputState(prev => ({
						...prev,
						voucherifyValidate: false,
					}))

					if (typeof onValidated === 'function') onValidated(response)
				})
				.catch(err => {
					console.error(err)
					if (typeof onError === 'function') onError(err)
				})
				.finally(() => setSubmitting(false))
		},
		[input, onError, onValidated, amount],
	)

	return (
		<div className="voucherifyContainer">
			<VoucherifyLogo src={logoSrc} alt={logoAlt} />
			<input
				type="text"
				placeholder={textPlaceholder || 'e.g. abc-123'}
				name="voucherifyCode"
				value={input['voucherifyCode']}
				onChange={onInputChange}
				className={classNameCode}
				disabled={isSubmitting || allDisabled}
			/>
			<input
				type={amount ? 'text' : 'hidden'}
				placeholder={amountPlaceholder || 'e.g. 52.22'}
				name="voucherifyAmount"
				value={input['voucherifyAmount']}
				onChange={onInputChange}
				className={classNameAmount}
				disabled={isSubmitting || allDisabled}
			/>
			<input
				type="hidden"
				name="voucherifyDiscountType"
				value={input['voucherifyDiscountType']}
				className="voucherifyDiscountType"
			/>
			<input
				type="hidden"
				name="voucherifyPercentOff"
				value={input['voucherifyPercentOff']}
				className="voucherifyPercentOff"
			/>
			<input
				type="hidden"
				name="voucherifyAmountOff"
				value={input['voucherifyAmountOff']}
				className="voucherifyAmountOff"
			/>
			<input type="hidden" name="voucherifyUnitOff" value={input['voucherifyUnitOff']} className="voucherifyUnitOff" />
			<input
				type="hidden"
				name="voucherifyTracking"
				value={input['voucherifyTracking']}
				className="voucherifyTracking"
			/>
			<button className={classNameValidate} disabled={isSubmitting || allDisabled} onClick={onSubmit}>
				<span className="voucherifyValidateText">{textValidate}</span>
			</button>
		</div>
	)
}

interface VoucherifyValidateInputs {
	voucherifyCode: string
	voucherifyAmount: string
	voucherifyDiscountType: string
	voucherifyPercentOff: string
	voucherifyAmountOff: string
	voucherifyUnitOff: string
	voucherifyTracking: string
}
function getEmptyInputs(): VoucherifyValidateInputs {
	return {
		voucherifyCode: '',
		voucherifyAmount: '',
		voucherifyDiscountType: '',
		voucherifyPercentOff: '',
		voucherifyAmountOff: '',
		voucherifyUnitOff: '',
		voucherifyTracking: '',
	}
}

interface VoucherifyValidateInputsState {
	voucherifyCode: boolean
	voucherifyAmount: boolean
	voucherifyValidate: boolean
}
function getEmptyInputState(): VoucherifyValidateInputsState {
	return {
		voucherifyCode: false,
		voucherifyAmount: false,
		voucherifyValidate: false,
	}
}

function useInputs() {
	const [input, setInput] = React.useState(getEmptyInputs)
	const [invalidInputState, setInvalidInputState] = React.useState(getEmptyInputState)
	const [validInputState, setValidInputState] = React.useState(getEmptyInputState)

	const onInputChange = React.useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyValidateInputs
		setInput(prev => ({ ...prev, [name]: event.target.value }))
	}, [])

	const resetInputs = React.useCallback(function reset() {
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
