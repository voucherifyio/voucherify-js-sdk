import * as React from 'react'

import { VoucherifyClientSideOptions } from '@voucherify/sdk'
import { VoucherifyLogo } from './VoucherifyLogo'
import clsx from 'clsx'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'

interface VoucherifyPublishOptions extends VoucherifyClientSideOptions {
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
	onPublished?: (response: $FixMe) => void
	/**
	 * a callback function invoked when there is an error
	 */
	onError?: (error: $FixMe) => void
	/**
	 * flag enables the amount input field
	 */
	campaignName: string

	customerFields?: {
		name: 'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'city' | 'postal_code' | 'state' | 'country'
		required: boolean
	}[]
	/**
	 * a text displayed on the button (default: "Validate")
	 */
	customerNamePlaceholder?: string
	customerEmailPlaceholder?: string
	customerPhonePlaceholder?: string
	customerLine1Placeholder?: string
	customerLine2Placeholder?: string
	customerPostalCodePlaceholder?: string
	customerCityPlaceholder?: string
	customerStatePlaceholder?: string
	customerCountryPlaceholder?: string
	textPublish?: string
}

interface VoucherifyPublishResponse {
	channel: 'Voucherify.js'
	created_at: string
	customer?: {
		id: string
		email?: string
		source_id?: string
		object: 'customer'
		metadata?: Record<string, any>
		name?: string
	}
	customer_id?: string
	id: string
	metadata?: Record<string, any>
	object: 'publication'
	result: 'SUCCESS'
	source_id?: string
	tracking_id?: string
	voucher: $FixMe
	vouchers_id?: string[]
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
	customerNamePlaceholder,
	customerEmailPlaceholder,
	customerPhonePlaceholder,
	customerLine1Placeholder,
	customerLine2Placeholder,
	customerPostalCodePlaceholder,
	customerCityPlaceholder,
	customerStatePlaceholder,
	customerCountryPlaceholder,
	textPublish = 'Get voucher',
}: VoucherifyPublishOptions) {
	const classNameInvalid = classInvalid || 'voucherifyInvalid'
	const classNameValid = classValid || 'voucherifyValid'
	const classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake'
	const classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada'

	const [allDisabled, setDisabled] = React.useState(false)
	const [visible, setVisible] = React.useState(true)
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

	const classNameCustomerName = clsx({
		voucherifyCustomerName: true,
		[classNameInvalid]: invalidInputState.name,
		[classNameInvalidAnimation]: invalidInputState.name,
		[classNameValid]: validInputState.name,
		[classNameValidAnimation]: validInputState.name,
	})

	const classNameCustomerPhone = clsx({
		voucherifyCustomerPhone: true,
		[classNameInvalid]: invalidInputState.phone,
		[classNameInvalidAnimation]: invalidInputState.phone,
		[classNameValid]: validInputState.phone,
		[classNameValidAnimation]: validInputState.phone,
	})

	const classNameCustomerEmail = clsx({
		voucherifyCustomerEmail: true,
		[classNameInvalid]: invalidInputState.email,
		[classNameInvalidAnimation]: invalidInputState.email,
		[classNameValid]: validInputState.email,
		[classNameValidAnimation]: validInputState.email,
	})

	const classNameCustomerLine1 = clsx({
		voucherifyCustomerLine1: true,
		[classNameInvalid]: invalidInputState.line_1,
		[classNameInvalidAnimation]: invalidInputState.line_1,
		[classNameValid]: validInputState.line_1,
		[classNameValidAnimation]: validInputState.line_1,
	})

	const classNameCustomerLine2 = clsx({
		voucherifyCustomerLine2: true,
		[classNameInvalid]: invalidInputState.line_2,
		[classNameInvalidAnimation]: invalidInputState.line_2,
		[classNameValid]: validInputState.line_2,
		[classNameValidAnimation]: validInputState.line_2,
	})

	const classNameCustomerPostalCode = clsx({
		voucherifyCustomerPostalCode: true,
		[classNameInvalid]: invalidInputState.postal_code,
		[classNameInvalidAnimation]: invalidInputState.postal_code,
		[classNameValid]: validInputState.postal_code,
		[classNameValidAnimation]: validInputState.postal_code,
	})

	const classNameCustomerCity = clsx({
		voucherifyCustomerCity: true,
		[classNameInvalid]: invalidInputState.city,
		[classNameInvalidAnimation]: invalidInputState.city,
		[classNameValid]: validInputState.city,
		[classNameValidAnimation]: validInputState.city,
	})

	const classNameCustomerState = clsx({
		voucherifyCustomerState: true,
		[classNameInvalid]: invalidInputState.state,
		[classNameInvalidAnimation]: invalidInputState.state,
		[classNameValid]: validInputState.state,
		[classNameValidAnimation]: validInputState.state,
	})

	const classNameCustomerCountry = clsx({
		voucherifyCustomerCountry: true,
		[classNameInvalid]: invalidInputState.country,
		[classNameInvalidAnimation]: invalidInputState.country,
		[classNameValid]: validInputState.country,
		[classNameValidAnimation]: validInputState.country,
	})
	const classNamePublishStatus = clsx({
		voucherifyPublishStatus: true,
		[classNameInvalid]: invalidInputState.voucherifyPublishStatus,
		[classNameInvalidAnimation]: invalidInputState.voucherifyPublishStatus,
		[classNameValid]: validInputState.voucherifyPublishStatus,
		[classNameValidAnimation]: validInputState.voucherifyPublishStatus,
	})
	const classNamePublish = clsx({
		voucherifyPublish: true,
		[classNameInvalid]: invalidInputState.voucherifyPublish,
		[classNameValid]: validInputState.voucherifyPublish,
	})

	const onSubmit = React.useCallback(
		function onSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
			setInput(prev => ({
				...prev,
				name: '',
				phone: '',
				email: '',
				voucherifyPublishStatus: '',
				voucherifyTracking: '',
			}))


			setInvalidInputState(prev => ({
				...prev,
				name: false,
				phone: false,
				email: false,
				voucherifyPublishStatus: false,
				voucherifyPublish: false,
			}))

			setValidInputState(prev => ({
				...prev,
				name: false,
				phone: false,
				email: false,
				voucherifyPublishStatus: false,
				voucherifyPublish: false,
			}))

			const payload: VoucherifyPublishPayload = {
				customer: {
					name: input.name,
					phone: input.phone,
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

			customerFields.forEach(field => {
				if (field.required && input[field.name] === '') {
					setInvalidInputState(prev => ({ ...prev, [field.name]: true }))
				}
			})

			client
				.publish(campaignName, payload)
				.then(function (_response) {
					const response: VoucherifyPublishResponse = _response
					setInvalidInputState(prev => ({
						...prev,
					}))

					setInput(prev => ({
						...prev,
						voucherifyTracking: response?.tracking_id || '',
						voucherifyPublishStatus: response.voucher.code,
					}))

					setDisabled(true)
					setVisible(false)

					setValidInputState(prev => ({
						...prev,
						voucherifyPublishStatus: true,
					}))

					setInvalidInputState(prev => ({
						...prev,
						voucherifyPublishStatus: false,
					}))

					if (typeof onPublished === 'function') onPublished(response)
				})
				.catch(err => {
					console.error(err)
					if (typeof onError === 'function') onError(err)
				})
				.finally(() => setSubmitting(false))
		},
		[input, onError, onPublished],
	)

	return (
		<div className="voucherifyContainer wide">
			<VoucherifyLogo src={logoSrc} alt={logoAlt} />
			{visible && customerFields.some(val => val.name === 'name') && (
				<input
					type="text"
					placeholder={customerNamePlaceholder ? customerNamePlaceholder : 'e.g. Bruce Wayne'}
					name="name"
					value={input['name']}
					onChange={onInputChange}
					className={classNameCustomerName}
					disabled={isSubmitting || allDisabled}
				/>
			)}
			{visible && customerFields.some(val => val.name === 'email' || val.name === 'phone') && (
				<div className="voucherifyRow">
					{visible && customerFields.some(val => val.name === 'email') && (
						<input
							type="email"
							placeholder={customerEmailPlaceholder ? customerEmailPlaceholder : 'e.g. bruce@wayne.com'}
							name="email"
							value={input['email']}
							onChange={onInputChange}
							className={classNameCustomerEmail}
							disabled={isSubmitting || allDisabled}
						/>
					)}
					{visible && customerFields.some(val => val.name === 'phone') && (
						<input
							type="text"
							placeholder={customerPhonePlaceholder ? customerPhonePlaceholder : 'e.g. +0000 000 000 000'}
							name="phone"
							value={input['phone']}
							onChange={onInputChange}
							className={classNameCustomerPhone}
							disabled={isSubmitting || allDisabled}
						/>
					)}
				</div>
			)}
			{visible && customerFields.some(val => val.name === 'line_1') && (
				<input
					type="text"
					placeholder={customerLine1Placeholder ? customerLine1Placeholder : 'e.g. Wayne Manor'}
					name="line_1"
					value={input['line_1']}
					onChange={onInputChange}
					className={classNameCustomerLine1}
					disabled={isSubmitting || allDisabled}
				/>
			)}
			{visible && customerFields.some(val => val.name === 'line_2') && (
				<input
					type="text"
					placeholder={customerLine2Placeholder ? customerLine2Placeholder : 'e.g. 22B'}
					name="line_2"
					value={input['line_2']}
					onChange={onInputChange}
					className={classNameCustomerLine2}
					disabled={isSubmitting || allDisabled}
				/>
			)}
			{visible && customerFields.some(val => val.name === 'postal_code' || val.name === 'city') && (
				<div className="voucherifyRow">
					{visible && customerFields.some(val => val.name === 'postal_code') && (
						<input
							type="text"
							placeholder={customerPostalCodePlaceholder ? customerPostalCodePlaceholder : 'e.g. 00-0014'}
							name="postal_code"
							value={input['postal_code']}
							onChange={onInputChange}
							className={classNameCustomerPostalCode}
							disabled={isSubmitting || allDisabled}
						/>
					)}
					{visible && customerFields.some(val => val.name === 'city') && (
						<input
							type="text"
							placeholder={customerCityPlaceholder ? customerCityPlaceholder : 'e.g. Gotham'}
							name="city"
							value={input['city']}
							onChange={onInputChange}
							className={classNameCustomerCity}
							disabled={isSubmitting || allDisabled}
						/>
					)}
				</div>
			)}
			{visible && customerFields.some(val => val.name === 'state' || val.name === 'country') && (
				<div className="voucherifyRow">
					{visible && customerFields.some(val => val.name === 'state') && (
						<input
							type="text"
							placeholder={customerStatePlaceholder ? customerStatePlaceholder : 'e.g. New Jersey'}
							name="state"
							value={input['state']}
							onChange={onInputChange}
							className={classNameCustomerState}
							disabled={isSubmitting || allDisabled}
						/>
					)}
					{visible && customerFields.some(val => val.name === 'country') && (
						<input
							type="text"
							placeholder={customerCountryPlaceholder ? customerCountryPlaceholder : 'e.g. USA'}
							name="country"
							value={input['country']}
							onChange={onInputChange}
							className={classNameCustomerCountry}
							disabled={isSubmitting || allDisabled}
						/>
					)}
				</div>
			)}
			<input
				type="hidden"
				name="voucherifyTracking"
				value={input['voucherifyTracking']}
				className="voucherifyTracking"
			/>
			{!visible && (
				<input
					type="text"
					name="voucherifyPublishStatus"
					className={classNamePublishStatus}
					value={input['voucherifyPublishStatus']}
				/>
			)}
			{visible && (
				<button className={classNamePublish} disabled={isSubmitting || allDisabled} onClick={onSubmit}>
					<span className="VoucherifyPublishText">{textPublish}</span>
				</button>
			)}
		</div>
	)
}

interface VoucherifyPublishPayload {
	customer?: {
		name?: string
		email?: string
		source_id?: string
		phone?: string
		address?: {
			line_1?: string
			line_2?: string
			postal_code?: string
			city?: string
			state?: string
			country?: string
		}
	}
}
interface VoucherifyPublishInputs {
	name: string
	email: string
	phone: string
	line_1: string
	line_2: string
	postal_code: string
	city: string
	state: string
	country: string
	voucherifyPublishStatus: string
	voucherifyTracking: string
	voucherifyPublish: string
}
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

interface VoucherifyPublishInputsState {
	name: boolean
	phone: boolean
	email: boolean
	line_1: boolean
	line_2: boolean
	postal_code: boolean
	city: boolean
	state: boolean
	country: boolean
	voucherifyPublishStatus: boolean
	voucherifyPublish: boolean
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

function useInputs() {
	const [input, setInput] = React.useState(getEmptyInputs)
	const [invalidInputState, setInvalidInputState] = React.useState(getEmptyInputState)
	const [validInputState, setValidInputState] = React.useState(getEmptyInputState)

	const onInputChange = React.useCallback(function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const name = event.target.name as keyof VoucherifyPublishInputs
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
