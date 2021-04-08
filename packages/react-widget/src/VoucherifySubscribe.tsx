import * as React from 'react'

import {
	ClientSideCustomersCreateParams,
	ClientSideCustomersCreateResponse,
	VoucherifyClientSideOptions,
} from '@voucherify/sdk'
import { removeEmptyAttributes, splitLongKey, validateEmail, validatePhoneNumber } from './helpers'

import { NotDefinedPlaceholder } from './types/VoucherifyPublish'
import { VoucherifyLogo } from './VoucherifyLogo'
import { VoucherifySubscribeLoadedConsents } from './types/VoucherifySubscribe'
import clsx from 'clsx'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { useVoucherifySubscribeInputs } from './hooks/useVoucherifySubscribeInputs'

const UNCONFIRMED_CUSTOMER = 'Confirm your subscription to our list. Check your email for further instructions.'
const ERROR_MESSAGE =
	'We ran into a configuration error. Please try that again. If the error persists, please contact support.'

interface WidgetFields {
	name?: 'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'city' | 'postal_code' | 'state' | 'country'
	required: boolean
	placeholder?: string
	id?: string
}

interface Consents {
	id: string
	required: boolean
}
interface VoucherifySubscribeOptions extends VoucherifyClientSideOptions {
	/**
	 * CSS class applied to the input when data is invalid
	 */
	classInvalid?: string
	/**
	 * CSS class describing animation of the input field when data is invalid
	 */
	classInvalidAnimation?: string
	/**
	 * CSS class applied to the input when data is valid
	 */
	classValid?: string
	/**
	 * CSS class describing animation of the input field when data is valid
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
	 * a callback function invoked when the data is valid, it takes the updateConsents response as a parameter
	 */
	onSubscribed?: (response: any) => void
	/**
	 * a callback function invoked when there is an error
	 */
	onError?: (error: any) => void
	/**
	 * require customer to confirm subscription by email
	 */
	enableDoubleOptIn?: boolean
	/**
	 * list of fields to be displayed on the widget
	 */
	customerFields?: WidgetFields[]
	/**
	 * a placeholder text to displayed on required 'email' field
	 */
	emailPlaceholder: string
	/**
	 * list of consent objects to be displayed on the widget
	 */
	consents: Consents[]
	/**
	 * a text displayed on the button (default: "Subscribe")
	 */
	textSubscribe?: string
	/**
	 * a text displayed after successful subscription (default: "Thank you for subscribing")
	 */
	textSubscribeSuccess?: string
}

export function VoucherifySubscribe({
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
	consents,
	onSubscribed,
	onError,
	emailPlaceholder,
	customerFields = [],
	enableDoubleOptIn = false,
	textSubscribe = 'Subscribe',
	textSubscribeSuccess = 'Thank you for subscribing',
}: VoucherifySubscribeOptions) {
	const classNameInvalid = classInvalid || 'voucherifyInvalid'
	const classNameValid = classValid || 'voucherifyValid'
	const classNameInvalidAnimation = classInvalidAnimation || 'voucherifyAnimationShake'
	const classNameValidAnimation = classValidAnimation || 'voucherifyAnimationTada'

	const [allDisabled, setDisabled] = React.useState(false)
	const [visible, setVisible] = React.useState(true)
	const [runSubscribeOnce, setRunSubscribeOnce] = React.useState(false)
	const [consentsError, setConsentsError] = React.useState(false)
	const [loading, setLoading] = React.useState(true)
	const [client, isSubmitting, setSubmitting] = useVoucherifyClient({
		apiUrl,
		clientApplicationId,
		clientSecretKey,
		trackingId,
		origin,
	})
	const [loadedConsents, setLoadedConsents] = React.useState<VoucherifySubscribeLoadedConsents>([])

	const widgetFields: WidgetFields[] = [
		...customerFields,
		{ name: 'email', required: true, placeholder: emailPlaceholder },
		...consents,
	]

	const { input, inputStates, onInputChange, resetInputs, setInput, setInputState } = useVoucherifySubscribeInputs()

	React.useEffect(() => {
		resetInputs()
		setDisabled(false)
	}, [client])

	const onRender = React.useCallback(
		function _onRender() {
			if (!enableDoubleOptIn && consents !== [] && consents !== undefined) {
				client
					.listConsents()
					.then(fetchedData => {
						const fetchedConsents = fetchedData.consents.data
						const filteredConsents = fetchedConsents.filter(o1 => consents.some(o2 => o1.id === o2?.id))
						if (filteredConsents.length === 0 || filteredConsents.length !== consents.length) {
							setInputState(prev => ({
								...prev,
								voucherifySubscribeStatus: true,
							}))
							setConsentsError(true)
							setVisible(false)
							setInput(prev => ({ ...prev, voucherifySubscribeStatus: ERROR_MESSAGE }))
						} else {
							const foundConsents: any = {}
							const foundConsentsStates: any = {}

							filteredConsents.forEach(consent => {
								foundConsents[consent.id] = ''
								foundConsentsStates[consent.id] = true
							})

							setInput(prev => ({
								...prev,
								...foundConsents,
							}))
							setInputState(prev => ({
								...prev,
								...foundConsentsStates,
							}))
							setLoadedConsents(filteredConsents)
						}
						setLoading(false)
					})
					.catch(err => {
						setLoading(false)
						setVisible(false)
						console.error(err)
						setInputState(prev => ({
							...prev,
							voucherifySubscribe: false,
						}))
						setInput(prev => ({ ...prev, voucherifySubscribeStatus: ERROR_MESSAGE }))

						if (typeof onError === 'function') onError(err)
					})
			} else {
				setLoading(false)
			}
		},
		[enableDoubleOptIn, consentsError],
	)

	React.useEffect(() => {
		onRender()
	}, [onRender])

	const classNames: any[] = Object.keys(input).map(key => {
		let className: string

		if (key === 'voucherifySubscribeStatus' || key === 'voucherifySubscribe') {
			className = key
		} else {
			className = `voucherifyCustomer${splitLongKey(key)}`
		}

		const classes = clsx([
			className,
			runSubscribeOnce ? (inputStates[key] ? '' : `${classNameInvalid} ${classNameInvalidAnimation}`) : '',
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
				voucherifySubscribeStatus: '',
			}))

			setRunSubscribeOnce(true)

			const payload: ClientSideCustomersCreateParams = {
				source_id: input.email,
				name: input.name,
				phone: input.phone.replace(/[\r\n\t\f\s\v]/g, '').trim(),
				email: input.email,
				address: {
					line_1: input.line_1,
					line_2: input.line_2,
					postal_code: input.postal_code,
					city: input.city,
					state: input.state,
					country: input.country,
				},
			}

			const sanitizedPayload = removeEmptyAttributes(payload)

			const inputStatesAfterValidation = widgetFields.reduce(
				(result, field) => {
					if (
						!enableDoubleOptIn &&
						field?.required &&
						field?.id &&
						(input[field.id] === 'off' || input[field.id].trim() === '')
					) {
						result[field.id] = false
						return result
					}
					if (field?.required && field?.name && input[field.name].trim() === '') {
						result[field.name] = false
						return result
					}
					if (field?.name === 'phone' && input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
						result['phone'] = validatePhoneNumber(input['phone'].replace(/[\r\n\t\f\s\v]/g, '').trim())
						return result
					}
					if (field?.name === 'email' && input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim() !== '') {
						result['email'] = validateEmail(input['email'].replace(/[\r\n\t\f\s\v]/g, '').trim())
						return result
					}
					if (field?.name) {
						result[field.name] = true
					} else if (field?.id) {
						result[field.id] = true
					}
					return result
				},
				{
					...inputStates,
				},
			)

			setInputState(prev => ({
				...prev,
				...inputStatesAfterValidation,
			}))

			const validationFailed = Object.values(inputStatesAfterValidation).some(val => !val)

			if (!validationFailed) {
				client
					.createCustomer(sanitizedPayload, enableDoubleOptIn)
					.then(function (_response: ClientSideCustomersCreateResponse) {
						if (_response.object === 'unconfirmed_customer') {
							setInput(prev => ({
								...prev,
								voucherifySubscribeStatus: UNCONFIRMED_CUSTOMER,
							}))
							return
						}

						setInput(prev => ({
							...prev,
							voucherifySubscribeStatus: textSubscribeSuccess,
						}))

						if (loadedConsents.length !== 0) {
							const createdCustomerId = _response.id
							const {
								name,
								email,
								phone,
								line_1,
								line_2,
								postal_code,
								city,
								state,
								country,
								voucherifySubscribeStatus,
								voucherifySubscribe,
								voucherifyTracking,
								...consents
							} = input

							Object.keys(consents).forEach(function (key) {
								consents[key] = consents[key] === 'on'
							})

							return client.updateConsents(createdCustomerId, consents)
						}
						return
					})
					.then(function (_response) {
						setDisabled(true)

						setVisible(false)

						setInputState(prev => ({
							...prev,
							voucherifySubscribeStatus: true,
						}))

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
							voucherifySubscribe: '',
						}))

						if (typeof onSubscribed === 'function') onSubscribed(_response)
					})
					.catch(err => {
						setVisible(false)
						console.error(err)
						setInputState(prev => ({
							...prev,
							voucherifySubscribe: false,
						}))
						setInput(prev => ({ ...prev, voucherifySubscribeStatus: ERROR_MESSAGE }))

						if (typeof onError === 'function') onError(err)
					})
					.finally(() => setSubmitting(false))
			} else {
				setSubmitting(false)
			}
		},
		[input, onError, onSubscribed],
	)
	return (
		<div className="voucherifyContainer wide">
			<VoucherifyLogo src={logoSrc} alt={logoAlt} />

			{loading ? (
				<div className="loader">Loading consents...</div>
			) : (
				<>
					{customerFields.some(val => val.name === 'name') &&
						createInput('name', customerFields.find(field => field.name === 'name')?.placeholder)}

					<div className="voucherifyRow" style={{ display: visible ? 'flex' : 'none' }}>
						{createInput('email', emailPlaceholder)}
						{customerFields.some(val => val.name === 'phone') &&
							createInput('phone', customerFields.find(field => field.name === 'phone')?.placeholder)}
					</div>

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

					<div
						className={
							consentsError
								? `voucherifySubscribeStatus ${classNameInvalid} ${classNameInvalidAnimation}`
								: `voucherifySubscribeStatus ${classNameValid} ${classNameValidAnimation}`
						}
						style={{ display: !visible ? 'block' : 'none' }}
					>
						<p>{input['voucherifySubscribeStatus']}</p>
					</div>
					{!enableDoubleOptIn &&
						loadedConsents.length !== 0 &&
						loadedConsents.map((consent: any) => (
							<>
								{classNames.some(val => val.name === consent.id) && (
									<label className="voucherifyCheckboxContainer" style={{ display: visible ? 'block' : 'none' }}>
										{consent.description}
										<input
											type="checkbox"
											id={consent.name}
											name={consent.id}
											onChange={onInputChange}
											value={input[consent.id] === 'on' ? 'on' : 'off'}
										/>
										<span
											className={`voucherifyCheckmark ${
												classNames.find((cls: any) => cls.name === consent.id).classes
											}`}
										></span>
									</label>
								)}
							</>
						))}
					<button
						className={classNames.find((cls: any) => cls.name === 'voucherifySubscribe').classes}
						disabled={isSubmitting || allDisabled}
						onClick={onSubmit}
						style={{ display: visible ? 'block' : 'none' }}
					>
						<span className="voucherifySubscribeText">{textSubscribe}</span>
					</button>
				</>
			)}
		</div>
	)
}
