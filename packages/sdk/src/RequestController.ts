import axios, { AxiosInstance, AxiosError } from 'axios'
import { assert, isString, environment } from './helpers'
import { VoucherifyError } from './VoucherifyError'

export interface RequestControllerOptions {
	apiUrl?: string
	applicationId: string
	clientSecretKey: string
	apiVersion?: string
	channel?: string
}

interface RequestControllerHeaders {
	'X-App-Id': string
	'X-App-Token': string
	'X-Voucherify-Channel': string
	'X-Voucherify-API-Version'?: string
	'Content-Type': 'application/json'
}

export class RequestController {
	private baseURL: string
	private headers: RequestControllerHeaders
	private request: AxiosInstance

	constructor({ apiUrl, applicationId, clientSecretKey, apiVersion, channel }: RequestControllerOptions) {
		assert(isString(applicationId), 'RequestController.constructor: applicationId option is required')
		assert(isString(clientSecretKey), 'RequestController.constructor: clientSecretKey option is required')

		this.baseURL = apiUrl || 'https://api.voucherify.io'
		this.headers = {
			'X-App-Id': applicationId,
			'X-App-Token': clientSecretKey,
			'X-Voucherify-Channel': channel || `${environment()}-SDK-v${__VERSION__}`,
			'Content-Type': 'application/json',
		}

		if (apiVersion) {
			this.headers['X-Voucherify-API-Version'] = apiVersion
		}

		this.request = axios.create({
			baseURL: `${this.baseURL}/v1/`,
			headers: this.headers,
			responseType: 'json',
		})
		this.request.interceptors.response.use(void 0, (error: AxiosError<unknown>) => {
			if (error?.response?.status) {
				return Promise.reject(new VoucherifyError(error.response.status, error.response.data))
			}
			return Promise.reject(error)
		})
	}

	async get<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.get<T>(path, { params })
		return response.data
	}
	async post<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		const response = await this.request.post<T>(path, body, { params })
		return response.data
	}
	async put<T>(path: string, body: Record<string, any>, params?: Record<string, any>): Promise<T> {
		const response = await this.request.put<T>(path, body, { params })
		return response.data
	}
	async delete<T>(path: string, params?: Record<string, any>): Promise<T> {
		const response = await this.request.delete<T>(path, { params })
		return response.data
	}
}
