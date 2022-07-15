import axios, { AxiosError, AxiosInstance } from 'axios'

import Qs from 'qs'
import { VoucherifyError } from './VoucherifyError'
import { ResultHeaders } from './types/ResultHeaders'

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
	private resultHeaders: ResultHeaders

	constructor({ basePath, baseURL, headers }: RequestControllerOptions) {
		this.basePath = basePath
		this.baseURL = baseURL
		this.headers = headers
		this.resultHeaders = {
			rateLimit: 0,
			rateLimitRemaining: 0,
		}

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

	public getResultHeaders(): ResultHeaders {
		return this.resultHeaders
	}
	private setResultHeaders(headers: Record<string, any>) {
		const rateLimit = headers['x-rate-limit-limit'] ?? false
		const rateLimitRemaining = headers['x-rate-limit-remaining'] ?? false

		if (rateLimit) {
			this.resultHeaders.rateLimit = parseInt(rateLimit)
		}

		if (rateLimitRemaining) {
			this.resultHeaders.rateLimitRemaining = parseInt(rateLimitRemaining)
		}
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
		this.setResultHeaders(response.headers)
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
		this.setResultHeaders(response.headers)
		return response.data
	}
	public async put<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		const response = await this.request.put<T>(path, body, { params })
		this.setResultHeaders(response.headers)
		return response.data
	}
	public async delete<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.delete<T>(path, { params })
		this.setResultHeaders(response.headers)
		return response.data
	}
}
