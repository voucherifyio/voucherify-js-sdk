import * as React from 'react'
import clsx from 'clsx'
import { VoucherifyClientSideOptions } from '@voucherify/sdk'
import { useVoucherifyClient } from './hooks/useVoucherifyClient'
import { VoucherifyLogo } from './VoucherifyLogo'

const INVALID_AMOUNT = 'invalid_amount'
const INVALID_NUMBER = 'invalid_number'
const MISSING_AMOUNT = 'missing_amount'
// const INVALID_CUSTOMER_PHONE = 'invalid_customer_phone'

interface VoucherifyPublishOptions extends VoucherifyClientSideOptions {
  /**
   * Identifier of a campaign object which will provide unique codes
   * 
   * @see https://docs.voucherify.io/reference#the-campaign-object
   */
  campaignName: string
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
	 *  a callback function invoked when publishing voucher will succeed, it takes response as a parameter
	 */
	onPublished?: (response: $FixMe) => void
	/**
	 * a callback function invoked when there is an error
	 */
  onError?: (error: $FixMe) => void
  /**
	 * list of the customer input fields that are displayed in widget
	 */
  customerFields?: {
    name: 'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'city' | 'postal_code' | 'state' | 'country'
    required: boolean
  }[]
  /**
	 * a text displayed on the button (default: "Get voucher")
	 */
  textPublish?: string
/**
	 * text displayed as a placeholder in the name input field
	 */
  customerNamePlaceholder?: string
  /**
	 * text displayed as a placeholder in the email input field
	 */
  customerEmailPlaceholder?: string
  /**
	 * text displayed as a placeholder in the phone input field
	 */
  customerPhonePlaceholder?: string
  /**
	 * text displayed as a placeholder in the first address line input field
	 */
  customerLine1Placeholder?: string
  /**
	 * text displayed as a placeholder in the second address line input field
	 */
  customerLine2Placeholder?: string
  /**
	 * text displayed as a placeholder in the postal code input field
	 */
  customerPostalCodePlaceholder?: string
  /**
	 * text displayed as a placeholder in the city input field
	 */
  customerCityPlaceholder?: string
  /**
	 * text displayed as a placeholder in the state input field
	 */
  customerStatePlaceholder?: string
  /**
	 * text displayed as a placeholder in the country input field
	 */
  customerCountryPlaceholder?: string

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
	customerFields,
	textPublish = 'Publish',
  customerNamePlaceholder,
  customerEmailPlaceholder,
  customerPhonePlaceholder,
  customerLine1Placeholder,
  customerLine2Placeholder,
  customerPostalCodePlaceholder,
  customerCityPlaceholder,
  customerStatePlaceholder,
  customerCountryPlaceholder,
}: VoucherifyPublishOptions) {
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

  const classNameCustomerName = clsx({
		voucherifyCustomerName: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerName,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerName,
		[classNameValid]: validInputState.voucherifyCustomerName,
		[classNameValidAnimation]: validInputState.voucherifyCustomerName,
  })
  
  const classNameCustomerEmail = clsx({
		voucherifyCustomerEmail: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerEmail,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerEmail,
		[classNameValid]: validInputState.voucherifyCustomerEmail,
		[classNameValidAnimation]: validInputState.voucherifyCustomerEmail,
  })
  
    const classNameCustomerPhone = clsx({
		voucherifyCustomerPhone: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerPhone,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerPhone,
		[classNameValid]: validInputState.voucherifyCustomerPhone,
		[classNameValidAnimation]: validInputState.voucherifyCustomerPhone,
  })
  
   const classNameCustomerLine1 = clsx({
		voucherifyCustomerLine1: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerLine1,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerLine1,
		[classNameValid]: validInputState.voucherifyCustomerLine1,
		[classNameValidAnimation]: validInputState.voucherifyCustomerLine1,
  })
  
   const classNameCustomerLine2 = clsx({
		voucherifyCustomerLine2: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerLine2,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerLine2,
		[classNameValid]: validInputState.voucherifyCustomerLine2,
		[classNameValidAnimation]: validInputState.voucherifyCustomerLine2,
  })

  const classNameCustomerCity = clsx({
		voucherifyCustomerCity: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerCity,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerCity,
		[classNameValid]: validInputState.voucherifyCustomerCity,
		[classNameValidAnimation]: validInputState.voucherifyCustomerCity,
  })
  
   const classNameCustomerPostalCode = clsx({
		voucherifyCustomerPostalCode: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerPostalCode,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerPostalCode,
		[classNameValid]: validInputState.voucherifyCustomerPostalCode,
		[classNameValidAnimation]: validInputState.voucherifyCustomerPostalCode,
  })
  
     const classNameCustomerState = clsx({
		voucherifyCustomerState: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerState,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerState,
		[classNameValid]: validInputState.voucherifyCustomerState,
		[classNameValidAnimation]: validInputState.voucherifyCustomerState,
	})

    const classNameCustomerCountry = clsx({
		voucherifyCustomerCountry: true,
		[classNameInvalid]: invalidInputState.voucherifyCustomerCountry,
		[classNameInvalidAnimation]: invalidInputState.voucherifyCustomerCountry,
		[classNameValid]: validInputState.voucherifyCustomerCountry,
		[classNameValidAnimation]: validInputState.voucherifyCustomerCountry,
  })
  
  const classNamePublish = clsx({
		voucherifyPublish: true,
		[classNameInvalid]: invalidInputState.voucherifyPublish,
		[classNameValid]: validInputState.voucherifyPublish,
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
        voucherifyTracking: '',
        voucherifyPublishStatus: '',
			}))

			setInvalidInputState(prev => ({ ...prev, voucherifyPublish: false }))
			setValidInputState(prev => ({ ...prev, voucherifyPublish: false }))

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
						setInvalidInputState(prev => ({ ...prev, voucherifyPublish: true }))
						setValidInputState(prev => ({ ...prev, voucherifyPublish: false }))

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
						
            voucherifyTracking: response?.tracking_id || '',
            voucherifyPublishStatus: response?.tracking_id || '',
					}))

					setDisabled(true)

					setValidInputState(prev => ({
						...prev,
						voucherifyCode: true,
						voucherifyAmount: true,
						voucherifyPublish: true,
					}))
					setInvalidInputState(prev => ({
						...prev,
						voucherifyPublish: false,
					}))

					if (typeof onPublished === 'function') onPublished(response)
				})
				.catch(err => {
					console.error(err)
					if (typeof onError === 'function') onError(err)
				})
				.finally(() => setSubmitting(false))
		},
		[input, onError, onPublished, amount],
	)

	return (
		<div className="voucherifyContainer">
			<VoucherifyLogo src={logoSrc} alt={logoAlt} />
      {customerFields?.some((el) => el.name === 'name') && (
        <input
          type="text"
          placeholder={customerNamePlaceholder || 'e.g. Bruce Wayne'}
          name="voucherifyCustomerName"
          value={input['voucherifyCustomerName']}
          onChange={onInputChange}
          className={classNameCustomerName}
          disabled={isSubmitting || allDisabled}
          required={customerFields?.find((el) => el.name === 'name')?.required}
        />
        )
      }
			
      <div className='voucherifyRow'>
        <input
				type="text"
				placeholder={customerEmailPlaceholder || 'e.g. bruce@wayneenterprise.com'}
				name="voucherifyCustomerEmail"
				value={input['voucherifyCustomerEmail']}
				onChange={onInputChange}
				className={classNameCustomerEmail}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'email')?.required}
			/>
      <input
				type="text"
				placeholder={customerPhonePlaceholder || 'e.g. 0012 000 000 000'}
				name="voucherifyCustomerPhone"
				value={input['voucherifyCustomerPhone']}
				onChange={onInputChange}
				className={classNameCustomerPhone}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'phone')?.required}

			/>
       </div>
      <input
				type="text"
				placeholder={customerLine1Placeholder || "e.g. 1007 Mountain Drive"}
				name="voucherifyCustomerLine1"
				value={input['voucherifyCustomerLine1']}
				onChange={onInputChange}
				className={classNameCustomerLine1}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'line_1')?.required}

			/>
      <input
				type="text"
				placeholder={customerLine2Placeholder || "e.g. Building B"}
				name="voucherifyCustomerLine2"
				value={input['voucherifyCustomerLine2']}
				onChange={onInputChange}
				className={classNameCustomerLine2}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'line_2')?.required}
			/>
      <input
				type="text"
				placeholder={customerCityPlaceholder || 'e.g. Gotham'}
				name="voucherifyCustomerCity"
				value={input['voucherifyCustomerCity']}
				onChange={onInputChange}
				className={classNameCustomerCity}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'city')?.required}

			/>
      <div className='voucherifyRow'>
        <input
				type="text"
				placeholder={customerPostalCodePlaceholder || 'e.g. 07001'}
				name="voucherifyCustomerPostalCode"
				value={input['voucherifyCustomerPostalCode']}
				onChange={onInputChange}
				className={classNameCustomerPostalCode}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'postal_code')?.required || false}
			/>
      
      </div>
      <div className='voucherifyRow'>
        <input
				type="text"
				placeholder={customerStatePlaceholder || e.g. New Jersey}
				name="voucherifyCustomerState"
				value={input['voucherifyCustomerState']}
				onChange={onInputChange}
				className={classNameCustomerState}
        disabled={isSubmitting || allDisabled}
                required={customerFields?.find((el) => el.name === 'state')?.required}

			/>
       <input
				type="text"
				placeholder={customerCountryPlaceholder || 'e.g. USA'}
				name="voucherifyCustomerCountry"
				value={input['voucherifyCustomerCountry']}
				onChange={onInputChange}
				className={classNameCustomerCountry}
        disabled={isSubmitting || allDisabled}
        required={customerFields?.find((el) => el.name === 'country')?.required}
			/>
      </div>
			
			<input
				type="hidden"
				name="voucherifyTracking"
				value={input['voucherifyTracking']}
				className="voucherifyTracking"
			/>
      <input
        type="text"
				name="voucherifyPublishStatus"
				value={input['voucherifyPublishStatus']}
				className="voucherifyPublishStatus"
			/>
			<button className={classNamePublish} disabled={isSubmitting || allDisabled} onClick={onSubmit}>
				<span className="voucherifyVPublishText">{textPublish}</span>
			</button>
		</div>
	)
}

interface VoucherifyValidateInputs {
  voucherifyCustomerName: string
  voucherifyCustomerEmail: string
  voucherifyCustomerPhone: string
  voucherifyCustomerLine1: string
  voucherifyCustomerLine2: string
  voucherifyCustomerPostalCode: string
  voucherifyCustomerCity: string
  voucherifyCustomerState: string
  voucherifyCustomerCountry: string
	voucherifyCode: string
	voucherifyAmount: string
	voucherifyDiscountType: string
	voucherifyPercentOff: string
	voucherifyAmountOff: string
  voucherifyUnitOff: string
  voucherifyPublishStatus: string
	voucherifyTracking: string
}
function getEmptyInputs(): VoucherifyValidateInputs {
	return {
    voucherifyCustomerName: '',
    voucherifyCustomerEmail: '',
    voucherifyCustomerPhone: '',
    voucherifyCustomerLine1: '',
    voucherifyCustomerLine2: '',
    voucherifyCustomerPostalCode: '',
    voucherifyCustomerCity: '',
    voucherifyCustomerState: '',
    voucherifyCustomerCountry: '',
		voucherifyCode: '',
		voucherifyAmount: '',
		voucherifyDiscountType: '',
		voucherifyPercentOff: '',
		voucherifyAmountOff: '',
    voucherifyUnitOff: '',
    voucherifyPublishStatus: '',
		voucherifyTracking: '',
	}
}

interface VoucherifyValidateInputsState {
  voucherifyCustomerName: boolean
  voucherifyCustomerEmail: boolean
  voucherifyCustomerPhone: boolean
  voucherifyCustomerLine1: boolean
  voucherifyCustomerLine2: boolean
  voucherifyCustomerPostalCode: boolean
  voucherifyCustomerCity: boolean
  voucherifyCustomerState: boolean
  voucherifyCustomerCountry: boolean
	voucherifyCode: boolean
  voucherifyAmount: boolean
  voucherifyPublish: boolean
	voucherifyValidate: boolean
}
function getEmptyInputState(): VoucherifyValidateInputsState {
	return {
    voucherifyCustomerName: false,
    voucherifyCustomerEmail: false,
    voucherifyCustomerPhone: false,
    voucherifyCustomerLine1: false,
    voucherifyCustomerLine2: false,
    voucherifyCustomerPostalCode: false,
    voucherifyCustomerCity: false,
    voucherifyCustomerState: false,
    voucherifyCustomerCountry: false,
		voucherifyCode: false,
    voucherifyAmount: false,
    voucherifyPublish: false,
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
