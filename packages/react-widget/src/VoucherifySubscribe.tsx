import * as React from 'react'

import { ClientSidePublishPayload, ClientSidePublishResponse, VoucherifyClientSideOptions } from '@voucherify/sdk'
import { removeEmptyAttributes, splitLongKey, validateEmail, validatePhoneNumber } from './helpers'

import { NotDefinedPlaceholder } from './types/VoucherifyPublish'
import { VoucherifyLogo } from './VoucherifyLogo'
import clsx from 'clsx'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { useVoucherifyPublishInputs } from './hooks/useVoucherifyPublishInputs'

interface VoucherifySubscribeOptions extends VoucherifyClientSideOptions {
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
	onPublished?: (response: ClientSidePublishResponse) => void
	/**
	 * a callback function invoked when there is an error
	 */
	onError?: (error: any) => void
	/**
	 * name of the campaign to which voucher will be published
	 */
	campaignName: string
	/**
	 * list of fields to be displayed on the widget
	 */
	customerFields?: {
		name: 'name' | 'phone' | 'line_1' | 'line_2' | 'city' | 'postal_code' | 'state' | 'country'
		required: boolean
		placeholder: string
	}[]
	/**
	 * a placeholder text to displayed on required 'email' field
	 */
	emailPlaceholder: string
	/**
	 * list of consents ids to be displayed on the widget
	 */
	consents: string[]
	/**
	 * a text displayed on the button (default: "Get Voucher")
	 */
	textSubscribe?: string
}

export function VoucherifyPublish({
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
	onPublished,
	onError,
	campaignName,
	customerFields = [],
	// customerNamePlaceholder,
	// customerEmailPlaceholder,
	// customerPhonePlaceholder,
	// customerLine1Placeholder,
	// customerLine2Placeholder,
	// customerPostalCodePlaceholder,
	// customerCityPlaceholder,
	// customerStatePlaceholder,
	// customerCountryPlaceholder,
	textSubscribe = 'Get voucher',
}: VoucherifySubscribeOptions) {
	const classNameInvalid = classInvalid || 'voucherifyInvalid'
	const classNameValid = classValid || 'voucherifyValid'
	const classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake'
	const classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada'

	const [allDisabled, setDisabled] = React.useState(false)
	const [visible, setVisible] = React.useState(true)
	const [runPublishOnce, setRunPublishOnce] = React.useState(false)

	const [client, isSubmitting, setSubmitting] = useVoucherifyClient({
		apiUrl,
		clientApplicationId,
		clientSecretKey,
		trackingId,
		origin,
	})

	const { input, inputStates, onInputChange, resetInputs, setInput, setInputState } = useVoucherifyPublishInputs()

	React.useEffect(() => {
		resetInputs()
		setDisabled(false)
	}, [client])

	const classNames: any[] = Object.keys(input).map(key => {
		let className: string

		if (key === 'voucherifyPublishStatus' || key === 'voucherifyTracking' || key === 'voucherifyPublish') {
			className = key
		} else {
			className = `voucherifyCustomer${splitLongKey(key)}`
		}

		const classes = clsx([
			className,
			runPublishOnce ? (inputStates[key] ? '' : `${classNameInvalid} ${classNameInvalidAnimation}`) : '',
		])

		return {
			name: key,
			classes,
		}
	})

	const notDefinedPlaceholders: NotDefinedPlaceholder = {
		name: 'e.g. Bruce Wayne',
		email: 'e.g. bruce@wayne.com',
		phone: 'e.g. +48 000 000 000',
		line_1: 'e.g. Wayne Manor',
		line_2: 'e.g. 22B',
		postal_code: 'e.g. 00-0014',
		city: 'e.g. Gotham',
		state: 'e.g. New Jersey',
		country: 'e.g. USA',
	}

	const createInput = (inputName: string, inputPlaceholder: string = '') => {
		let inputType: string

		if (inputName === 'phone') {
			inputType = 'tel'
		} else if (inputName === 'email') {
			inputType = 'email'
		} else {
			inputType = 'text'
		}
		return (
			<input
				type={inputType}
				placeholder={inputPlaceholder ? inputPlaceholder : notDefinedPlaceholders[`${inputName}`]}
				name={inputName}
				value={input[`${inputName}`]}
				onChange={onInputChange}
				className={classNames.find((cls: any) => cls.name === inputName).classes}
				disabled={isSubmitting || allDisabled}
				style={{ display: visible ? 'block' : 'none' }}
			></input>
		)
	}

	const onSubmit = React.useCallback(
		function onSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
			setSubmitting(true)
			setInput(prev => ({
				...prev,
				voucherifyPublishStatus: '',
				voucherifyTracking: '',
			}))

			setRunPublishOnce(true)

			const payload: ClientSidePublishPayload = {
				customer: {
					name: input.name,
					phone: input.phone.replace(/[\r\n\t\f\s\v]/g, '').trim(),
					email: input.email,
					source_id: input.email,
					address: {
						line_1: input.line_1,
						line_2: input.line_2,
						postal_code: input.postal_code,
						city: input.city,
						state: input.state,
						country: input.country,
					},
				},
			}

			const sanitizedPayload = removeEmptyAttributes(payload)

			const inputStatesAfterValidation = customerFields.reduce(
				(result, field) => {
					if (field.required && input[field.name].trim() === '') {
						result[field.name] = false
						return result
					}
					if (field.name === 'phone' && input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
						result['phone'] = validatePhoneNumber(input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim())
						return result
					}
					if (input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
						result['email'] = validateEmail(input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim())
						return result
					}
					result[field.name] = true
					return result
				},
				{
					name: true,
					email: true,
					phone: true,
					line_1: true,
					line_2: true,
					postal_code: true,
					city: true,
					state: true,
					country: true,
					voucherifyPublishStatus: true,
					voucherifyPublish: true,
				},
			)

			setInputState(prev => ({
				...prev,
				...inputStatesAfterValidation,
			}))

			const validationFailed = Object.values(inputStatesAfterValidation).some(val => !val)

			if (!validationFailed) {
				client
					.publish(campaignName, sanitizedPayload)
					.then(function (_response) {
						const response: ClientSidePublishResponse = _response

						setInput(prev => ({
							...prev,
							name: '',
							email: '',
							phone: '',
							line_1: '',
							line_2: '',
							postal_code: '',
							city: '',
							state: '',
							country: '',
							voucherifyTracking: response?.tracking_id || '',
							voucherifyPublishStatus: response.voucher.code,
						}))

						setDisabled(true)
						setVisible(false)

						setInputState(prev => ({
							...prev,
							voucherifyPublishStatus: true,
						}))

						if (typeof onPublished === 'function') onPublished(response)
					})
					.catch(err => {
						console.error(err)
						setInputState(prev => ({
							...prev,
							voucherifyPublish: false,
						}))

						if (typeof onError === 'function') onError(err)
					})
					.finally(() => setSubmitting(false))
			} else {
				setSubmitting(false)
			}
		},
		[input, onError, onPublished],
	)

	return (
		<div className="voucherifyContainer wide">
			<VoucherifyLogo src={logoSrc} alt={logoAlt} />

			{customerFields.some(val => val.name === 'name') &&
				createInput('name', customerFields.find(field => field.name === 'name')?.placeholder)}

			{customerFields.some(val => val.name === 'phone') && (
				<div className="voucherifyRow" style={{ display: visible ? 'flex' : 'none' }}>
					{createInput('email', emailPlaceholder)}
					{customerFields.some(val => val.name === 'phone') &&
						createInput('phone', customerFields.find(field => field.name === 'phone')?.placeholder)}
				</div>
			)}

			{customerFields.some(val => val.name === 'line_1') &&
				createInput('line_1', customerFields.find(field => field.name === 'line_1')?.placeholder)}
			{customerFields.some(val => val.name === 'line_2') &&
				createInput('line_2', customerFields.find(field => field.name === 'line_2')?.placeholder)}

			{customerFields.some(val => val.name === 'postal_code' || val.name === 'city') && (
				<div className="voucherifyRow" style={{ display: visible ? 'flex' : 'none' }}>
					{customerFields.some(val => val.name === 'postal_code') &&
						createInput('postal_code', customerFields.find(field => field.name === 'postal_code')?.placeholder)}
					{customerFields.some(val => val.name === 'city') &&
						createInput('city', customerFields.find(field => field.name === 'city')?.placeholder)}
				</div>
			)}

			{customerFields.some(val => val.name === 'state' || val.name === 'country') && (
				<div className="voucherifyRow" style={{ display: visible ? 'flex' : 'none' }}>
					{customerFields.some(val => val.name === 'state') &&
						createInput('state', customerFields.find(field => field.name === 'state')?.placeholder)}
					{customerFields.some(val => val.name === 'country') &&
						createInput('country', customerFields.find(field => field.name === 'country')?.placeholder)}
				</div>
			)}

			<input
				type="hidden"
				name="voucherifyTracking"
				value={input['voucherifyTracking']}
				className="voucherifyTracking"
			/>

			<input
				type="text"
				name="voucherifyPublishStatus"
				className={`voucherifyPublishStatus ${classNameValid} ${classNameValidAnimation}`}
				value={input['voucherifyPublishStatus']}
				style={{ display: !visible ? 'block' : 'none' }}
			/>

			<button
				className={classNames.find((cls: any) => cls.name === 'voucherifyPublish').classes}
				disabled={isSubmitting || allDisabled}
				onClick={onSubmit}
				style={{ display: visible ? 'block' : 'none' }}
			>
				<span className="VoucherifyPublishText">{textSubscribe}</span>
			</button>
		</div>
	)
}
