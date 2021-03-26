import * as React from 'react'

import {
	ClientSideValidateParams,
	ClientSideValidateResponse,
	DiscountAmount,
	DiscountPercent,
	DiscountUnit,
	VoucherifyClientSideOptions,
} from '@voucherify/sdk'

import { VoucherifyLogo } from './VoucherifyLogo'
import clsx from 'clsx'
import { removeEmptyAttributes } from './helpers'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { useVoucherifyValidateInputs } from './hooks/useVoucherifyValidateInputs'

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
	onValidated?: (response: ClientSideValidateResponse) => void
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

	const { input, inputState, onInputChange, resetInputs, setInput, setInputState } = useVoucherifyValidateInputs()

	const [runValidateOnce, setRunValidateOnce] = React.useState(false)

	React.useEffect(() => {
		resetInputs()
		setDisabled(false)
	}, [client])

	const classNames: any[] = Object.keys(inputState).map(key => {
		let className: string = key

		const classes = clsx([
			className,
			runValidateOnce
				? inputState[key]
					? `${classNameValid} ${classNameValidAnimation}`
					: `${classNameInvalid} ${classNameInvalidAnimation}`
				: '',
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
				voucherifyDiscountType: '',
				voucherifyAmountOff: 0,
				voucherifyUnitOff: 0,
				voucherifyPercentOff: 0,
				voucherifyTracking: '',
			}))

			setInputState(prev => ({ ...prev, voucherifyValidate: false }))

			if (!input.voucherifyCode.trim()) {
				setInputState(prev => ({ ...prev, voucherifyCode: false }))
				return
			}

			const payload: ClientSideValidateParams = {
				code: input.voucherifyCode,
				amount:
					input.voucherifyAmount.trim() === '' ||
					isNaN(parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10))
						? 0
						: parseInt((parseFloat(input.voucherifyAmount.replace(/,/, '.')) * 100).toString(), 10),
			}

			const sanitizedPayload = removeEmptyAttributes(payload)

			setSubmitting(true)

			client
				.validate(sanitizedPayload)
				.then(function (_response) {
					const response: ClientSideValidateResponse = _response

					if (!response || !response.valid) {
						setInputState(prev => ({
							...prev,
							voucherifyValidate: false,
							voucherifyAmount: false,
							voucherifyCode: false,
						}))
						return
					}

					if (response?.discount) {
						const responseDiscount = response?.discount as DiscountUnit | DiscountAmount | DiscountPercent

						switch (responseDiscount.type) {
							case 'AMOUNT':
								setInput(prev => ({
									...prev,
									voucherifyDiscountType: responseDiscount.type || '',
									voucherifyAmountOff: responseDiscount.amount_off || 0,
									voucherifyUnitOff: 0,
									voucherifyPercentOff: 0,
									voucherifyTracking: response?.tracking_id || '',
								}))
								break
							case 'UNIT':
								setInput(prev => ({
									...prev,
									voucherifyDiscountType: responseDiscount.type || '',
									voucherifyAmountOff: 0,
									voucherifyUnitOff: responseDiscount.unit_off || 0,
									voucherifyPercentOff: 0,
									voucherifyTracking: response?.tracking_id || '',
								}))
								break

							case 'PERCENT':
								setInput(prev => ({
									...prev,
									voucherifyDiscountType: responseDiscount.type || '',
									voucherifyAmountOff: 0,
									voucherifyUnitOff: 0,
									voucherifyPercentOff: responseDiscount.percent_off || 0,
									voucherifyTracking: response?.tracking_id || '',
								}))
								break
							default:
								break
						}
					} else {
						setInput(prev => ({
							...prev,
							voucherifyDiscountType: 'GIFT_CARD',
							voucherifyAmountOff: response?.order?.total_discount_amount || 0,
							voucherifyUnitOff: 0,
							voucherifyPercentOff: 0,
							voucherifyTracking: response?.tracking_id || '',
						}))
					}

					setDisabled(true)

					setInputState(prev => ({
						...prev,
						voucherifyCode: true,
						voucherifyAmount: true,
						voucherifyValidate: true,
					}))

					if (typeof onValidated === 'function') onValidated(response)
				})
				.catch(err => {
					console.error(err)
					if (err.key === 'missing_order') {
						setInputState(prev => ({
							...prev,
							voucherifyValidate: false,
							voucherifyAmount: false,
							voucherifyCode: false,
						}))
					}
					if (typeof onError === 'function') onError(err)
				})
				.finally(() => {
					setSubmitting(false)
					setRunValidateOnce(true)
				})
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
			<button
				className={classNames.find((cls: any) => cls.name === 'voucherifyValidate').classes}
				disabled={isSubmitting || allDisabled}
				onClick={onSubmit}
			>
				<span className="voucherifyValidateText">{textValidate}</span>
			</button>
		</div>
	)
}
