import { RequestController } from './RequestController'
import { ClientSide } from './ClientSide'
import { assert, isObject, isString, isOptionalString, environment } from './helpers'

export interface VoucherifyCustomer {
	applicationId: string
	clientToken: string
	baseUrl?: string
	trackingId?: string
	origin?: string // only on NodeJS
}
export interface VoucherifyCustomerHeaders {
	'X-Client-Application-Id': string
	'X-Client-Token': string
	'X-Voucherify-Channel'?: string
	origin?: string
}
export function VoucherifyCustomer(options: VoucherifyCustomer) {
	assert(isObject(options), 'VoucherifyCustomer: expected "options" argument to be an object')
	assert(isString(options.applicationId), 'VoucherifyCustomer: "options.applicationId" is required')
	assert(isString(options.clientToken), 'VoucherifyCustomer: "options.clientToken" is required')
	assert(isOptionalString(options.baseUrl), 'VoucherifyCustomer: expected "options.baseUrl" to be a string')
	assert(isOptionalString(options.trackingId), 'VoucherifyCustomer: expected "options.trackingId" to be a string')

	const headers: VoucherifyCustomerHeaders = {
		'X-Client-Application-Id': options.applicationId,
		'X-Client-Token': options.clientToken,
		'X-Voucherify-Channel': `${environment()}-Customer-SDK-v${__VERSION__}`,
	}

	if (environment().startsWith('Node')) {
		assert(isString(options.origin), 'VoucherifyCustomer: "options.origin" is required in NodeJS')
		headers['origin'] = options.origin
	}

	const client = new RequestController({
		basePath: 'client/v1',
		baseURL: options.baseUrl ?? 'https://api.voucherify.io',
		headers,
	})

	return new ClientSide(client, options.trackingId)
}
