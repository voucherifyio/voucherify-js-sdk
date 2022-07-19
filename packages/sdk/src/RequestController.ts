import axios, { AxiosError, AxiosInstance } from 'axios'

import Qs from 'qs'
import { VoucherifyError } from './VoucherifyError'

export interface RequestControllerOptions {
	baseURL: string
	basePath: string
	headers: Record<string, any>
}

/**
 * @internal
 */
export class RequestController {
	private baseURL: string
	private basePath: string
	private headers: Record<string, any>
	private request: AxiosInstance
	private lastResponseHeaders: Record<string, string>
	private isLastResponseHeadersSet: boolean

	constructor({ basePath, baseURL, headers }: RequestControllerOptions) {
		this.basePath = basePath
		this.baseURL = baseURL
		this.headers = headers
		this.lastResponseHeaders = {}
		this.isLastResponseHeadersSet = false

		this.request = axios.create({
			baseURL: `${this.baseURL}/${this.basePath}/`,
			headers: this.headers,
			responseType: 'json',
		})
		this.request.interceptors.response.use(void 0, (error: AxiosError<unknown>) => {
			/**
			 * Handle any HTTP response error (status code outside of 2xx) as a VoucherifyError
			 */
			if (error?.response?.status) {
				return Promise.reject(new VoucherifyError(error.response.status, error.response.data))
			}
			return Promise.reject(error)
		})
	}
	public isLastReponseHeadersSet(): boolean {
		return this.isLastResponseHeadersSet
	}
	public getLastResponseHeaders(): Record<string, string> {
		return this.lastResponseHeaders
	}
	private setLastResponseHeaders(headers: Record<string, string>) {
		this.lastResponseHeaders = headers
		this.isLastResponseHeadersSet = true
	}
	public setBaseUrl(baseURL: string) {
		this.baseURL = baseURL
		this.request.defaults.baseURL = `${baseURL}/${this.basePath}/`
	}
	public async get<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.get<T>(path, {
			params,
			paramsSerializer: function (params) {
				return Qs.stringify(params)
			},
		})
		this.setLastResponseHeaders(response.headers)
		return response.data
	}
	public async post<T>(
		path: string,
		body: Record<string, any>,
		params?: Record<string, any>,
		headers?: Record<string, any>,
	): Promise<T> {
		const response = await this.request.post<T>(path, body, {
			params,
			paramsSerializer: function (params) {
				return Qs.stringify(params)
			},
			headers,
		})
		this.setLastResponseHeaders(response.headers)
		return response.data
	}
	public async put<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		const response = await this.request.put<T>(path, body, { params })
		this.setLastResponseHeaders(response.headers)
		return response.data
	}
	public async delete<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.delete<T>(path, { params })
		this.setLastResponseHeaders(response.headers)
		return response.data
	}
}
