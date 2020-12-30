// eslint-disable no-restricted-globals

export function encode(value: string = '') {
	return encodeURIComponent(value)
}
export function isString(value: any): value is string {
	return typeof value === 'string'
}
export function isObject<T extends Record<string, any> = Record<string, any>>(value: any): value is T {
	return typeof value === 'object' && !Array.isArray(value) && value !== null
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
		/* eslint-disable-next-line no-restricted-globals */
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
