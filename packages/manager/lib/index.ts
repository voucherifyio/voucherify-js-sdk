import { RequestController } from '@voucherify/core'
import { Voucherify } from './Voucherify'
import { URL, URLSearchParams } from 'url'
import FetchPolyfill, { Headers as HeadersPolyfill } from 'node-fetch'

type FetchType = typeof fetch
type HeadersType = typeof Headers

/**
 * @voucherify/manager – in NodeJS env
 */
export default function (options: any /** @todo */) {
	const Fetch = (FetchPolyfill as any) as FetchType
	const Headers = (HeadersPolyfill as any) as HeadersType

	const client = new RequestController({
		Fetch,
		URL: URL,
		URLSearchParams: URLSearchParams,
		headers: new Headers({
			'X-App-Id': options.applicationId,
			'X-App-Token': options.clientSecretKey,
			'X-Voucherify-Channel': options.channel,
			'X-Voucherify-API-Version': options.apiVersion,
		}),
	})

	return Voucherify(client)
}
