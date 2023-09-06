function getRandomIntInclusive(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const seeds = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const generateRandomString = (length = 40) => {
	if (!length) {
		throw new Error('length must be greater than zero')
	}
	if (length > 100) {
		throw new Error('length must be smaller or equal to 100')
	}
	if (!Number.isInteger(length)) {
		throw new Error('length must an integer')
	}
	const tableOfStrings = []
	while (tableOfStrings.length < length) {
		const index = getRandomIntInclusive(0, seeds.length - 1)
		tableOfStrings.push(seeds.slice(index, index + 1))
	}
	return tableOfStrings.join('')
}
