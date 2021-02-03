import * as React from 'react'
import clsx from 'clsx'
import { VoucherifyClientSideOptions } from '@voucherify/sdk'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { VoucherifyLogo } from './VoucherifyLogo'

const RESOURCE_NOT_FOUND = 'resource_not_found'
const ORDER_RULES_VIOLATED = 'order_rules_violated'

interface VoucherifyRedeemOptions extends VoucherifyClientSideOptions {
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
	onRedeem?: (response: $FixMe) => void
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
	textRedeem?: string
}
export function VoucherifyRedeem({
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
	onRedeem,
	onError,
	amount,
	textPlaceholder,
	amountPlaceholder,
	textRedeem = 'Redeem',
}: VoucherifyRedeemOptions) {
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
	const classNameRedeem = clsx({
		voucherifyRedeem: true,
		[classNameInvalid]: invalidInputState.voucherifyRedeem,
		[classNameValid]: validInputState.voucherifyRedeem,
	})

	const onSubmit = React.useCallback(
		function onSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
			setInput(prev => ({
				...prev,
				voucherifyTracking: '',
			}))

			setInvalidInputState(prev => ({ ...prev, VoucherifyRedeem: false }))
			setValidInputState(prev => ({ ...prev, VoucherifyRedeem: false }))

			if (!input.voucherifyCode.trim()) {
				setInvalidInputState(prev => ({ ...prev, voucherifyCode: true }))
				return
			}

			const code: string = input.voucherifyCode

			const payload: $FixMe = {
				order: {
					amount: parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10),
				},
			}

			setSubmitting(true)

			client
				.redeem(code, payload)
				.then(function (_response) {
					console.log('response', _response)
					const response: $FixMe = _response

					setInvalidInputState(prev => ({
						...prev,
						voucherifyCode: false,
						voucherifyAmount: false,
					}))
					setInput(prev => ({
						...prev,
						voucherifyTracking: response?.tracking_id || '',
					}))

					setDisabled(true)

					setValidInputState(prev => ({
						...prev,
						voucherifyCode: true,
						voucherifyAmount: true,
						voucherifyRedeem: true,
					}))
					setInvalidInputState(prev => ({
						...prev,
						voucherifyRedeem: false,
					}))

					if (typeof onRedeem === 'function') onRedeem(response)
				})
				.catch(err => {
					if (err.key === ORDER_RULES_VIOLATED) {
						setInvalidInputState(prev => ({ ...prev, voucherifyCode: false, voucherifyAmount: true }))

						setValidInputState(prev => ({ ...prev, voucherifyAmount: false }))
					}

					if (err.key === RESOURCE_NOT_FOUND) {
						setInvalidInputState(prev => ({ ...prev, voucherifyAmount: false, voucherifyCode: true }))
						setValidInputState(prev => ({ ...prev, voucherifyCode: false }))
					}
					if (typeof onError === 'function') onError(err)
				})
				.finally(() => setSubmitting(false))
		},
		[input, onError, onRedeem, amount],
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
			<button className={classNameRedeem} disabled={isSubmitting || allDisabled} onClick={onSubmit}>
				<span className="voucherifyRedeemText">{textRedeem}</span>
			</button>
		</div>
	)
}

interface VoucherifyRedeemInputs {
	voucherifyCode: string
	voucherifyAmount: string
	voucherifyTracking: string
}
function getEmptyInputs(): VoucherifyRedeemInputs {
	return {
		voucherifyCode: '',
		voucherifyAmount: '',
		voucherifyTracking: '',
	}
}

interface VoucherifyRedeemInputsState {
	voucherifyCode: boolean
	voucherifyAmount: boolean
	voucherifyRedeem: boolean
}
function getEmptyInputState(): VoucherifyRedeemInputsState {
	return {
		voucherifyCode: false,
		voucherifyAmount: false,
		voucherifyRedeem: false,
	}
}

function useInputs() {
	const [input, setInput] = React.useState(getEmptyInputs)
	const [invalidInputState, setInvalidInputState] = React.useState(getEmptyInputState)
	const [validInputState, setValidInputState] = React.useState(getEmptyInputState)

	const onInputChange = React.useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyRedeemInputs
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
