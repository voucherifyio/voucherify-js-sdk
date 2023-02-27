/**
 * @internal
 */
export class VoucherifyError extends Error {
	public code: string
	public key: string
	public details?: string
	public request_id?: string
	public resource_id?: string
	public resource_type?: string
	constructor(statusCode: number, body?: unknown) {
		body = body ?? {}

		const message = (<any>body)?.message || generateMessage(body, statusCode)

		super(message)

		this.code = (<any>body).code
		this.key = (<any>body).key
		this.details = (<any>body).details
		this.request_id = (<any>body).request_id
		this.resource_id = (<any>body).resource_id
		this.resource_type = (<any>body).resource_type
	}
}

function generateMessage(body: unknown, statusCode: number) {
	body = typeof body === 'string' ? body : JSON.stringify(body, null, 2)

	return `Unexpected status code: ${statusCode} - Details: ${body}`
}
