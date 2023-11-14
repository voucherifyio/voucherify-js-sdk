import * as T from './types/Campaigns'
import * as AAT from './types/AsyncActions'

import type { RequestController } from './RequestController'
import { assert, encode, environment } from './helpers'
import FormData from 'form-data'

class CampaignsQualifications {
	constructor(private client: RequestController) {}

	public examine(body: T.CampaignsQualificationsBody = {}, params?: T.CampaignsQualificationsParams) {
		return this.client.post<T.CampaignsQualificationsResponse>('/campaigns/qualification', body, params)
	}
}

export class Campaigns {
	public qualifications: CampaignsQualifications

	constructor(private client: RequestController) {
		this.qualifications = new CampaignsQualifications(this.client)
	}
	/**
	 * @see https://docs.voucherify.io/reference/create-campaign
	 */
	public create(campaign: T.CampaignsCreateCampaign) {
		return this.client.post<T.CampaignsCreateCampaignResponse>('/campaigns', campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference/update-campaign
	 */
	public update(nameOrId: string, campaign: T.CampaignsUpdateCampaign) {
		return this.client.put<T.CampaignsUpdateCampaignResponse>(`/campaigns/${encode(nameOrId)}`, campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference/get-campaign
	 */
	public get(name: string) {
		return this.client.get<T.CampaignsGetCampaignResponse>(`/campaigns/${encode(name)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference/delete-campaign
	 */
	public delete(name: string, params: T.CampaignsDeleteParams = {}) {
		return this.client.delete(`/campaigns/${encode(name)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-voucher-to-campaign
	 */

	public addVoucher(name: string, body: T.CampaignsAddVoucherBody = {}, params: T.CampaignsAddVoucherParams = {}) {
		return this.client.post<T.CampaignsAddVoucherResponse | {}>(`/campaigns/${encode(name)}/vouchers`, body, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference/add-voucher-with-certain-code-to-campaign
	 */

	public addCertainVoucher(name: string, code: string, body: T.CampaignsAddCertainVoucherParams = {}) {
		return this.client.post<T.CampaignsAddCertainVoucherResponse>(
			`/campaigns/${encode(name)}/vouchers/${encode(code)}`,
			body,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/import-vouchers
	 */
	public importVouchers(campaignName: string, vouchers: T.CampaignsImportVouchers[]) {
		return this.client.post<T.CampaignsVouchersImportResponse>(`/campaigns/${encode(campaignName)}/import`, vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/reference/list-campaigns
	 */
	public list(params: T.CampaignsListParams = {}) {
		return this.client.get<T.CampaignsListResponse>('/campaigns', params)
	}
	/**
	 * @see https://api.voucherify.io/v1/campaigns/{campaignId}/importCSV
	 */
	public async importVouchersCSV(campaignId: string, filePath: string) {
		assert(
			environment().startsWith('Node'),
			`Method "client.campaigns.importVouchersCSV(campaignId, filePath)" is only for Node environment`,
		)
		const fs = (await import('fs')).default
		const fileStream = fs.createReadStream(filePath)
		const form = new FormData()
		form.append('file', fileStream)
		const headers = { 'Content-Type': 'multipart/form-data' }

		return this.client.post<AAT.AsyncActionCreateResponse>(
			`/campaigns/${campaignId}/importCSV`,
			form,
			undefined,
			headers,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference/enable-campaign
	 */
	public enable(campaignId: string) {
		return this.client.post<{}>(`/campaigns/${encode(campaignId)}/enable`, {})
	}
	/**
	 * @see https://docs.voucherify.io/reference/disable-campaign
	 */
	public disable(campaignId: string) {
		return this.client.post<{}>(`/campaigns/${encode(campaignId)}/disable`, {})
	}
}
