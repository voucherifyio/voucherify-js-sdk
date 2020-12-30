export class VoucherifyError extends Error {
	constructor(statusCode: number, body?: unknown) {
		body = body ?? {}

		const message = (<any>body)?.message || generateMessage(body, statusCode)

		super(message)

		Object.assign(this, body)
	}
}

function generateMessage(body: unknown, statusCode: number) {
	body = typeof body === 'string' ? body : JSON.stringify(body, null, 2)

	return `Unexpected status code: ${statusCode} - Details: ${body}`
}
