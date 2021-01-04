import { encode, isObject } from './helpers'
import type { RequestController } from './RequestController'
import type { Balance } from './Balance'

class VouchersQualification {
	constructor(private client: RequestController) {}

	public examine(body: $FixMe, params?: $FixMe) {
		return this.client.post('/vouchers/qualification', body, params)
	}
}
export class Vouchers {
	public qualifications: VouchersQualification

	constructor(private client: RequestController, public balance: Balance) {
		this.qualifications = new VouchersQualification(this.client)
	}

	public create(voucher: $FixMe) {
		return this.client.post(`/vouchers/${encode(voucher.code)}`, voucher)
	}
	public get(code: string) {
		return this.client.get(`/vouchers/${encode(code)}`)
	}
	public update(voucher: $FixMe) {
		return this.client.put(`/vouchers/${encode(voucher.code)}`, voucher)
	}
	public delete(code: string, params?: { force: boolean }) {
		return this.client.delete(`/vouchers/${encode(code)}`, { force: !!params?.force })
	}
	public list(params?: $FixMe) {
		return this.client.get('/vouchers', params)
	}
	public enable(params: $FixMe) {
		if (isObject(params)) {
			return this.client.post('/vouchers/enable', params)
		}
		return this.client.post(`/vouchers/${encode(params)}/enable`, {})
	}
	public disable(params: $FixMe) {
		if (isObject(params)) {
			return this.client.post('/vouchers/disable', params)
		}
		return this.client.post(`/vouchers/${encode(params)}/disable`, {})
	}
	public import(vouchers: $FixMe) {
		return this.client.post('/vouchers/import', vouchers)
	}
}
