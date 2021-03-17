const capitalizeString = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export const splitLongKey = (key: string) => {
	return key
		.split('_')
		.map(k => capitalizeString(k))
		.join('')
}

export const removeEmptyAttributes = (obj: { [x: string]: any }) => {
	Object.keys(obj).forEach(
		k =>
			(obj[k] && typeof obj[k] === 'object' && removeEmptyAttributes(obj[k])) ||
			(!obj[k] && (obj[k] !== undefined || obj[k] === '') && delete obj[k]),
	)
	return obj
}

export const validatePhoneNumber = (phoneNumber: string) => {
	const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
	return re.test(phoneNumber)
}

export const validateEmail = (email: string) => {
	const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
	return re.test(email.toLowerCase())
}
