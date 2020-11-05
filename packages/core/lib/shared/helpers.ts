export function assertOption<T extends Record<string, any>>(options: T, name: keyof T): asserts name is keyof T {
	if (!options[name]) {
		throw new Error(`Missing required option '${name}'`)
	}
}

export const encode = (value: string = '') => {
	return encodeURIComponent(value)
}
export const isString = (value: any): value is string => {
	return typeof value === 'string'
}
export const isObject = <T extends Record<string, any> = Record<string, any>>(value: any): value is T => {
	return typeof value === 'object' && !Array.isArray(value) && value !== null
}
export const isFunction = (value: any): value is Function => {
	return typeof value === 'function'
}
export const exists = <T extends any>(value: T): value is NonNullable<T> => {
	return typeof value !== 'undefined' && value !== null
}
