import * as React from 'react'

import { VoucherifyClientSideOptions } from '@voucherify/sdk'
import { VoucherifyLogo } from './VoucherifyLogo'
import clsx from 'clsx'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'

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
	onRedeemed?: (response: $FixMe) => void
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
	 * a text displayed on the button (default: "Redeem")
	 */
	textRedeem?: string
}

interface DiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: 'ADD_MISSING_ITEMS' | 'ADD_NEW_ITEMS'
	unit_type?: string
}

interface DiscountAmount {
	type?: 'AMOUNT'
	amount_off?: number
}

interface DiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
	amount_limit?: number
}

interface VoucherifyRedeemResponse {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: {
		id: string
		source_id?: string
		created_at: string
		updated_at?: string
		status?: 'CREATED' | 'PAID' | 'PROCESSING' | 'CANCELED' | 'FULFILLED'
		amount?: number
		discount_amount?: number
		items?: {
			sku_id?: string
			product_id?: string
			related_object?: 'product' | 'sku'
			source_id?: string
			quantity?: number
			price?: number
			amount?: number
			product?: {
				override?: boolean
				name?: string
				metadata?: Record<string, any>
			}
			sku?: {
				override?: boolean
				sku?: string
			}
		}[]
		object: 'order'
	}
	result?: string
	voucher?: {
		id: string
		code: string
		campaign?: string
		category?: string
		type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
		discount?: DiscountAmount | DiscountPercent | DiscountUnit
		gift?: {
			amount: number
		}
		loyalty_card?: {
			points: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: {
			interval: string
			duration: string
		}
		validity_day_of_week?: number[]
		publish?: {
			object: 'list'
			count: number
			data_ref: 'entries'
			entries: $FixMe[]
			total: number
			url: string
		}
		redemption?: {
			object: 'list'
			quantity?: number
			redeemed_quantity: number
			data_ref: 'redemption_entries'
			redemption_entries: $FixMe[]
			total: number
			url: string
		}
		active: boolean
		additional_info?: string
		metadata?: Record<string, any>
		assets?: {
			qr?: {
				id: string
				url: string
			}
			barcode?: {
				id: string
				url: string
			}
		}
		is_referral_code: boolean
		referrer_id?: string
		holder_id?: string
		updated_at?: string
		object: 'voucher'
		validation_rules_assignments: {
			object: 'list'
			total: number
			data_ref: 'data'
			data?: {
				id: string
				rule_id?: string
				related_object_id?: string
				related_object_type?: string
				created_at: string
				object: 'validation_rules_assignment'
			}[]
		}
	}
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
	onRedeemed,
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

			setInvalidInputState(prev => ({ ...prev, voucherifyRedeem: false }))
			setValidInputState(prev => ({ ...prev, voucherifyRedeem: false }))

			if (!input.voucherifyCode.trim()) {
				setInvalidInputState(prev => ({ ...prev, voucherifyCode: true }))
				return
			}

			const payload: $FixMe = {
				order: {
					amount: parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10),
				},
			}

			setSubmitting(true)

			client
				.redeem(input.voucherifyCode, payload)
				.then(function (_response) {
					const response: VoucherifyRedeemResponse = _response
					if (!response || response.result !== 'SUCCESS') {
						setInvalidInputState(prev => ({ ...prev, voucherifyRedeem: true }))
						setValidInputState(prev => ({ ...prev, voucherifyRedeem: false }))
					}

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

					if (typeof onRedeemed === 'function') onRedeemed(response)
				})
				.catch(err => {
					console.error(err)
					if (typeof onError === 'function') onError(err)
				})
				.finally(() => setSubmitting(false))
		},
		[input, onError, onRedeemed, amount],
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
				name="voucherifyTracking"
				value={input['voucherifyTracking']}
				className="voucherifyTracking"
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
