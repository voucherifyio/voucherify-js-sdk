export function encode(value: string = '') {
	return encodeURIComponent(value)
}
export function isNumber(value: any): value is number {
	// eslint-disable-next-line no-self-compare
	return typeof value === 'number' && value === value
}
export function isString(value: any): value is string {
	return typeof value === 'string'
}
export function isOptionalString(value: any): value is string | undefined {
	return value == null || isString(value)
}
export function isObject<T extends Record<string, any> = Record<string, any>>(value: any): value is T {
	return typeof value === 'object' && !Array.isArray(value) && value !== null
}
export function isOptionalObject<T extends Record<string, any> = Record<string, any>>(
	value: any,
): value is T | null | undefined {
	return value == null || isObject(value)
}
export function isFunction(value: any): value is Function {
	return typeof value === 'function'
}
export function exists<T extends any>(value: T): value is NonNullable<T> {
	return typeof value !== 'undefined' && value !== null
}

export function environment(): string {
	if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
		return 'Browser'
		// eslint-disable-next-line no-restricted-globals
	} else if (typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope') {
		return 'WebWorker'
	} else if (typeof process !== 'undefined' && process.versions != null && process.versions.node != null) {
		return `Node.js-${process.version}`
	} else if (
		(typeof window !== 'undefined' && window.name === 'nodejs') ||
		navigator.userAgent.includes('Node.js') ||
		navigator.userAgent.includes('jsdom')
	) {
		return 'JsDom'
	}

	return 'Unknown'
}

export function assert(condition: any, message?: string): asserts condition {
	if (condition) return
	throw new Error(message)
}

/**
 * Return an object containing all properties of `obj` excluding the ones in `keys` array
 * e.g:
 * ```javascript
 * omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']) // output: { a: 1, c: 3 }
 * ```
 */
export function omit<T extends {}, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
	return Object.fromEntries(
		Object.entries(obj).filter(([propertyKey]) => {
			return !keys.includes(propertyKey as K)
		}),
	) as Omit<T, K>
}
