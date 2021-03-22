import * as React from 'react'

import { ClientSideRedeemResponse, ClientSideRedeemWidgetPayload, VoucherifyClientSideOptions } from '@voucherify/sdk'

import { VoucherifyLogo } from './VoucherifyLogo'
import clsx from 'clsx'
import { removeEmptyAttributes } from './helpers'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { useVoucherifyRedeemInputs } from './hooks/useVoucherifyRedeemInputs'

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
	onRedeemed?: (response: ClientSideRedeemResponse) => void
	/**
	 * a callback function invoked when there is an error
	 */
	onError?: (error: any) => void
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
	const [runRedeemOnce, setRunRedeemOnce] = React.useState(false)

	const [client, isSubmitting, setSubmitting] = useVoucherifyClient({
		apiUrl,
		clientApplicationId,
		clientSecretKey,
		trackingId,
		origin,
	})

	const {
		input,
		inputStates,
		onInputChange,
		resetInputs,
		setInput,
		setInputState,
		inputValidStates,
		setValidInputState,
	} = useVoucherifyRedeemInputs()

	React.useEffect(() => {
		resetInputs()
		setDisabled(false)
	}, [client])

	const classNames: any[] = Object.keys(inputStates).map(key => {
		let className: string = key

		const classes = clsx([
			className,
			runRedeemOnce ? (inputStates[key] ? `${classNameInvalid} ${classNameInvalidAnimation}` : '') : '',
			runRedeemOnce ? (inputValidStates[key] ? `${classNameValid} ${classNameValidAnimation}` : '') : '',
		])

		return {
			name: key,
			classes,
		}
	})

	const onSubmit = React.useCallback(
		function onSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
			setInput(prev => ({
				...prev,
				voucherifyTracking: '',
			}))

			setRunRedeemOnce(true)

			const payload: ClientSideRedeemWidgetPayload = {
				order: {
					amount:
						input.voucherifyAmount.trim() === '' ||
						isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10))
							? 0
							: parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10),
				},
			}

			const sanitizedPayload = removeEmptyAttributes(payload)

			const code: string = input.voucherifyCode.replace(/[\r\n\t\f\v]/g, '').trim()

			if (
				!code ||
				(input.voucherifyAmount.trim() !== '' &&
					isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10)))
			) {
				return setInputState(prev => ({
					...prev,
					voucherifyCode: !code ? true : false,
					voucherifyAmount:
						amount && isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10))
							? true
							: false,
				}))
			}

			setSubmitting(true)

			client
				.redeem(code, sanitizedPayload)
				.then(function (_response) {
					const response: ClientSideRedeemResponse = _response
					if (!response || response.result !== 'SUCCESS') {
						setInputState(prev => ({ ...prev, voucherifyRedeem: true }))
					}

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

					if (typeof onRedeemed === 'function') onRedeemed(response)
				})
				.catch(err => {
					console.error(err)
					setInputState(prev => ({
						...prev,
						voucherifyRedeem: true,
						voucherifyAmount: true,
						voucherifyCode: true,
					}))
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
				className={classNames.find((cls: any) => cls.name === 'voucherifyCode').classes}
				disabled={isSubmitting || allDisabled}
			/>
			<input
				type={amount ? 'text' : 'hidden'}
				placeholder={amountPlaceholder || 'e.g. 52.22'}
				name="voucherifyAmount"
				value={input['voucherifyAmount']}
				onChange={onInputChange}
				className={classNames.find((cls: any) => cls.name === 'voucherifyAmount').classes}
				disabled={isSubmitting || allDisabled}
			/>
			<input
				type="hidden"
				name="voucherifyTracking"
				value={input['voucherifyTracking']}
				className="voucherifyTracking"
			/>
			<button
				className={classNames.find((cls: any) => cls.name === 'voucherifyRedeem').classes}
				disabled={isSubmitting || allDisabled}
				onClick={onSubmit}
			>
				<span className="voucherifyRedeemText">{textRedeem}</span>
			</button>
		</div>
	)
}
