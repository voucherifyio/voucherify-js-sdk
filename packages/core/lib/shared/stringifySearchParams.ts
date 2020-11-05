/**
 * @internal
 */
export interface StringifySearchParams {
	(params?: Record<string, any>): string
}

/**
 * Creates a lightweight alternative to `qs` module using native URLSearchParams constructor
 * @param URLSearchParamsCtr - URLSearchParams constructor native or polyfill implementation (e.g: for IE11)
 * @internal
 */
export function createStringifySearchParams(
	URLSearchParamsCtr: typeof URLSearchParams | typeof import('url').URLSearchParams,
): StringifySearchParams {
	function stringifyRecursively(
		record: Record<string, any> | any[],
		prefix?: string,
		searchParams?: URLSearchParams,
	): string {
		const params = searchParams ?? new URLSearchParamsCtr()
		const isArray = Array.isArray(record)
		const properties = isArray ? record : Object.keys(record)

		for (let i = 0; i < properties.length; i++) {
			const property = isArray ? i : (properties as Record<string, string>)[i]
			const value = (record as Record<string, string>)[property]
			const encodedProperty = prefix
				? `${prefix}[${encodeURIComponent(property)}]`
				: property.toString()

			if (typeof value === 'object' && value != null) {
				stringifyRecursively(value, encodedProperty, params)
				continue
			}

			params.set(encodedProperty, value)
		}
		return params.toString()
	}

	return function stringifySearchParams(params) {
		if (params == null) return ''
		return stringifyRecursively(params)
	}
}
