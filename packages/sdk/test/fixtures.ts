import { environment } from '../src/helpers'

export const CHANNEL_SERVER_SIDE = `${environment()}-SDK-v${__VERSION__}`
export const CHANNEL_CLIENT_SIDE = `${environment()}-ClientSide-SDK-v${__VERSION__}`

export const SERVER_SIDE_HEADERS = {
	'X-App-Id': 'node-test-app-id',
	'X-App-Token': 'node-test-secret-key',
	'X-Voucherify-Channel': CHANNEL_SERVER_SIDE,
	'Content-Type': 'application/json',
}
