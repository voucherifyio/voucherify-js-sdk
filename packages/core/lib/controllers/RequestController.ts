import { createStringifySearchParams, StringifySearchParams } from 'lib/shared/stringifySearchParams'

/**
 * @internal
 */
interface RequestControllerOptions {
	Fetch: typeof fetch
	URL: typeof URL | typeof import('url').URL // Node.js API or Browser Web API
	URLSearchParams: typeof URLSearchParams | typeof import('url').URLSearchParams // Node.js API or Browser Web API
	headers: Headers
	hostname?: string
	version?: string
	credentials?: RequestCredentials
}

/**
 * @internal
 */
interface RequestControllerFetchOptions {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	path: string
	params?: Record<string, any>
	body?: Record<string, any>
}

/**
 * @internal
 */
export class RequestController {
	private baseUrl: string
	private qs: StringifySearchParams

	constructor(private options: RequestControllerOptions) {
		const { URL, URLSearchParams, headers } = this.options
		const url = new URL('https://api.voucherify.io')

		url.hostname = options.hostname ?? url.hostname

		headers.set('Content-Type', 'application/json')
		headers.set('Accept', 'application/json')

		this.baseUrl = url.toString()
		this.qs = createStringifySearchParams(URLSearchParams)
	}
	private async fetchRequest({ method, path, params, body }: RequestControllerFetchOptions) {
		const { Fetch, URL } = this.options
		const url = new URL(`v1/${path}`, this.baseUrl)

		if (params && typeof params === 'object') {
			url.search = this.qs(params)
		}

		const response = await Fetch(url.toString(), {
			method,
			headers: this.options.headers,
			credentials: this.options.credentials,
			body: body != null ? JSON.stringify(body) : void 0,
		})
		return response.json()
	}

	get<T>(path: string, params?: Record<string, any>): Promise<T> {
		return this.fetchRequest({
			method: 'GET',
			path,
			params,
		})
	}

	post<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		return this.fetchRequest({
			method: 'POST',
			path,
			body,
			params,
		})
	}

	put<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		return this.fetchRequest({
			method: 'PUT',
			path,
			body,
			params,
		})
	}

	delete<T>(path: string, params?: Record<string, any>): Promise<T> {
		return this.fetchRequest({
			method: 'PUT',
			path,
			params,
		})
	}
}
