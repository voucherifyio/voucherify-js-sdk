import * as T from './types/Vouchers'

import { encode } from './helpers'
import type { RequestController } from './RequestController'
import type { Balance } from './Balance'
import * as fs from 'fs'
import FormData from 'form-data'

class VouchersQualification {
	constructor(private client: RequestController) {}

	/**
	 * The method can be used for sending a request to display all vouchers qualified to the given customer and context (e.g., order, loyalty reward). A checking logic won't run among coupons from bulk unique codes campaigns. For campaigns with multiple unique codes, you should run a dedicated function for searching for qualified campaigns.
	 * As a sample use case, you can imagine a requirement of displaying below cart the coupons eligible to a customer. The customer can take and apply the proposed voucher.
	 *
	 * @see https://docs.voucherify.io/reference/push-qualification-request
	 */
	public examine(body: T.VouchersQualificationExamineBody, params: T.VouchersQualificationExamineParams = {}) {
		return this.client.post<T.VouchersQualificationExamineResponse>('/vouchers/qualification', body, params)
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
	public create(voucher: T.VouchersCreateBody, code: string) {
		return this.client.post<T.VouchersCreateResponse>(`/vouchers/${encode(code)}`, voucher)
	}
	/**
	 * @see https://docs.voucherify.io/reference/vouchers-get
	 */
	public get(code: string) {
		return this.client.get<T.VouchersGetResponse>(`/vouchers/${encode(code)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-voucher
	 */
	public update(voucher: T.VouchersUpdate, code: string) {
		return this.client.put<T.VouchersUpdateResponse>(`/vouchers/${encode(code)}`, voucher)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-voucher
	 */
	public delete(code: string, params: T.VouchersDeleteParams = {}) {
		return this.client.delete<undefined>(`/vouchers/${encode(code)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-vouchers
	 */
	public list(params: T.VouchersListParams = {}) {
		return this.client.get<T.VouchersListResponse>('/vouchers', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/enable-voucher
	 */
	public enable(code: string) {
		return this.client.post<T.VouchersEnableResponse>(`/vouchers/${encode(code)}/enable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-voucher
	 */
	public disable(code: string) {
		return this.client.post<T.VouchersDisableResponse>(`/vouchers/${encode(code)}/disable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-vouchers-1
	 */
	public import(vouchers: T.VouchersImport[]) {
		return this.client.post<T.VouchersImportResponse>('/vouchers/import', vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-vouchers-using-csv
	 */
	public importVouchersUsingCSV(filePath: string) {
		const fileStream = fs.createReadStream(filePath)
		const form = new FormData()
		form.append('file', fileStream)
		return this.client.post<T.VouchersImportResponse>('/vouchers/importCSV', form)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-gift-card-transactions
	 */
	public listGiftCardTransactions(code: string, query?: T.ListTransactionsQuery) {
		return this.client.get<T.ListTransactionsResponse>(`/vouchers/${encode(code)}/transactions`, query)
	}
	/**
	 * @see https://docs.voucherify.io/reference/export-gift-card-transactions
	 */
	public exportGiftCardTransactions(code: string, body: T.TransactionsExportBody) {
		return this.client.post<T.ExportTransactionsResponse>(`/vouchers/${encode(code)}/transactions/export`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference/aaupdate-vouchers-metadata-in-bulk
	 */
	public bulkUpdateMetadata(params: T.VouchersBulkUpdateMetadata) {
		return this.client.post<T.VouchersBulkUpdateMetadataResponse>('/vouchers/metadata/async', params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/aa-update-vouchers-in-bulk
	 */
	public bulkUpdate(vouchers: T.VouchersBulkUpdate) {
		return this.client.post<T.VouchersBulkUpdateResponse>('/vouchers/bulk/async', vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/release-validation-session
	 */
	public releaseValidationSession(code: string, sessionKey: string) {
		return this.client.delete<undefined>(`/vouchers/${encode(code)}/sessions/${encode(sessionKey)}`)
	}
}
