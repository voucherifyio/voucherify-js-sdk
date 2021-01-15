import * as T from './types/Vouchers'

import { encode, isObject } from './helpers'
import type { RequestController } from './RequestController'
import type { Balance } from './Balance'

class VouchersQualification {
	constructor(private client: RequestController) {}

	/**
	 * The method can be used for sending a request to display all vouchers qualified to the given customer and context (e.g., order, loyalty reward). A checking logic won't run among coupons from bulk unique codes campaigns. For campaigns with multiple unique codes, you should run a dedicated function for searching for qualified campaigns.
	 * As a sample use case, you can imagine a requirement of displaying below cart the coupons eligible to a customer. The customer can take and apply the proposed voucher.
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#push-qualification-request
	 */
	public examine(body: T.VouchersQualificationExamineBody, params?: T.VouchersQualificationExamineParams) {
		return this.client.post<T.VouchersQualificationExamineResponse>('/vouchers/qualification', body, params)
	}
}
export class Vouchers {
	public qualifications: VouchersQualification

	constructor(private client: RequestController, public balance: Balance) {
		this.qualifications = new VouchersQualification(this.client)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-voucher
	 */
	public create(voucher: T.VouchersCreate) {
		return this.client.post<T.VouchersCreateResponse>(`/vouchers/${encode(voucher.code)}`, voucher)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#vouchers-get
	 */
	public get(code: string) {
		return this.client.get<T.VouchersGetResponse>(`/vouchers/${encode(code)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-voucher
	 */
	public update(voucher: T.VouchersUpdate) {
		return this.client.put<T.VouchersUpdateResponse>(`/vouchers/${encode(voucher.code)}`, voucher)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-voucher
	 */
	public delete(code: string, params?: T.VouchersDeleteParams) {
		return this.client.delete(`/vouchers/${encode(code)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-vouchers
	 */
	public list(params?: T.VouchersListParams) {
		return this.client.get<T.VouchersListResponse>('/vouchers', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#enable-voucher
	 */
	public enable(params: string | T.VouchersEnableParams) {
		if (isObject(params)) {
			return this.client.post<T.VouchersEnableResponse>('/vouchers/enable', params)
		}
		return this.client.post<T.VouchersEnableResponse>(`/vouchers/${encode(params)}/enable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#disable-voucher
	 */
	public disable(params: string | T.VouchersDisableParams) {
		if (isObject(params)) {
			return this.client.post<T.VouchersDisableResponse>('/vouchers/disable', params)
		}
		return this.client.post<T.VouchersDisableResponse>(`/vouchers/${encode(params)}/disable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers-1
	 */
	public import(vouchers: T.VouchersImport[]) {
		return this.client.post('/vouchers/import', vouchers)
	}
}
