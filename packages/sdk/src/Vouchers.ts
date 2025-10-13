import * as VT from './types/Vouchers'
import * as AAT from './types/AsyncActions'

import { assert, encode, environment } from './helpers'
import type { RequestController } from './RequestController'
import type { Balance } from './Balance'
import FormData from 'form-data'

class VouchersQualification {
	constructor(private client: RequestController) {}

	/**
	 * The method can be used for sending a request to display all vouchers qualified to the given customer and context (e.g., order, loyalty reward). A checking logic won't run among coupons from bulk unique codes campaigns. For campaigns with multiple unique codes, you should run a dedicated function for searching for qualified campaigns.
	 * As a sample use case, you can imagine a requirement of displaying below cart the coupons eligible to a customer. The customer can take and apply the proposed voucher.
	 *
	 * @see https://docs.voucherify.io/reference/push-qualification-request
	 */
	public examine(body: VT.VouchersQualificationExamineBody, params: VT.VouchersQualificationExamineParams = {}) {
		return this.client.post<VT.VouchersQualificationExamineResponse>('/vouchers/qualification', body, params)
	}
}
export class Vouchers {
	public qualifications: VouchersQualification

	constructor(private client: RequestController, public balance: Balance) {
		this.qualifications = new VouchersQualification(this.client)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-voucher
	 */
	public create(voucher: VT.VouchersCreate) {
		return this.client.post<VT.VouchersCreateResponse>(`/vouchers/${encode(voucher.code)}`, voucher)
	}
	/**
	 * @see https://docs.voucherify.io/reference/vouchers-get
	 */
	public get(code: string) {
		return this.client.get<VT.VouchersGetResponse>(`/vouchers/${encode(code)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-voucher
	 */
	public update(voucher: VT.VouchersUpdate) {
		return this.client.put<VT.VouchersUpdateResponse>(`/vouchers/${encode(voucher.code)}`, voucher)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-voucher
	 */
	public delete(code: string, params: VT.VouchersDeleteParams = {}) {
		return this.client.delete(`/vouchers/${encode(code)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-vouchers
	 */
	public list(params: VT.VouchersListParams = {}) {
		return this.client.get<VT.VouchersListResponse>('/vouchers', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/enable-voucher
	 */
	public enable(code: string) {
		return this.client.post<VT.VouchersEnableResponse>(`/vouchers/${encode(code)}/enable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-voucher
	 */
	public disable(code: string) {
		return this.client.post<VT.VouchersDisableResponse>(`/vouchers/${encode(code)}/disable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-vouchers-1
	 */
	public import(vouchers: VT.VouchersImport[]) {
		return this.client.post<VT.VouchersImportResponse>('/vouchers/import', vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/aaupdate-vouchers-metadata-in-bulk
	 */
	public bulkUpdateMetadata(params: VT.VouchersBulkUpdateMetadata) {
		return this.client.post<VT.VouchersBulkUpdateMetadataResponse>('/vouchers/metadata/async', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/aa-update-vouchers-in-bulk
	 */
	public bulkUpdate(vouchers: VT.VouchersBulkUpdate) {
		return this.client.post<VT.VouchersBulkUpdateResponse>('/vouchers/bulk/async', vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/release-validation-session
	 */
	public releaseValidationSession(code: string, sessionKey: string) {
		return this.client.delete(`/vouchers/${encode(code)}/sessions/${encode(sessionKey)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-vouchers-using-csv
	 */
	public async importCSV(filePath: string) {
		assert(
			environment().startsWith('Node'),
			`Method "client.vouchers.importCSV(filePath)" is only for Node environment`,
		)
		const fs = (await import('fs')).default
		const fileStream = fs.createReadStream(filePath)
		const form = new FormData()
		form.append('file', fileStream)
		const headers = { 'Content-Type': 'multipart/form-data' }

		return this.client.post<AAT.AsyncActionCreateResponse>('/vouchers/importCSV', form, undefined, headers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-voucher-transactions
	 */
	public listTransactions(code: string, params?: VT.VouchersListTransactionsRequestQuery) {
		return this.client.get<VT.VouchersListTransactionsResponseBody>(`/vouchers/${encode(code)}/transactions`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/export-voucher-transactions
	 */
	public exportTransactions(code: string, body: VT.VouchersExportTransactionsRequestBody) {
		return this.client.post<VT.VouchersExportTransactionsResponseBody>(
			`/vouchers/${encode(code)}/transactions/export`,
			body,
		)
	}
}
