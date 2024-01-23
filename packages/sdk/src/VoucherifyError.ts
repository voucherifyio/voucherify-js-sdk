import { AxiosError } from 'axios'

/**
 * @internal
 */
export class VoucherifyError extends Error {
	public code: number
	public key: string
	public details?: string
	public request_id?: string
	public resource_id?: string
	public resource_type?: string
	public related_object_ids?: string[]
	public related_object_type?: string
	public related_object_total?: number
	public error?: { message: string }
	public cause?: AxiosError

	constructor(statusCode: number, body?: unknown, axiosError?: AxiosError) {
		body = body ?? {}

		const message = (<any>body)?.message || generateMessage(body, statusCode)

		super(message)

		this.code = (<any>body).code
		this.key = (<any>body).key
		this.details = (<any>body).details
		this.request_id = (<any>body).request_id
		this.resource_id = (<any>body).resource_id
		this.resource_type = (<any>body).resource_type
		this.related_object_ids = (<any>body).related_object_ids
		this.related_object_type = (<any>body).related_object_type
		this.related_object_total = (<any>body).related_object_total
		this.error = (<any>body).error
		this.cause = axiosError
	}
}

function generateMessage(body: unknown, statusCode: number) {
	body = typeof body === 'string' ? body : JSON.stringify(body, null, 2)

	return `Unexpected status code: ${statusCode} - Details: ${body}`
}
