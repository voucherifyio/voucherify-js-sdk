import axios, { AxiosInstance, AxiosError } from 'axios'
import { VoucherifyError } from './VoucherifyError'
import Qs from 'qs'

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

	constructor({ basePath, baseURL, headers }: RequestControllerOptions) {
		this.basePath = basePath
		this.baseURL = baseURL
		this.headers = headers

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

	public setBaseUrl(baseURL: string) {
		this.baseURL = baseURL
		this.request.defaults.baseURL = `${baseURL}/${this.basePath}/`
	}
	public async get<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.get<T>(path, {
			params,
			paramsSerializer: function (params) {
				return Qs.stringify(params, { arrayFormat: 'brackets', encode: false })
			},
		})
		return response.data
	}
	public async post<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		const response = await this.request.post<T>(path, body, { params })
		return response.data
	}
	public async put<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		const response = await this.request.put<T>(path, body, { params })
		return response.data
	}
	public async delete<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.delete<T>(path, { params })
		return response.data
	}
}
