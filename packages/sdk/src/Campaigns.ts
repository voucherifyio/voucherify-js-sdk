import * as T from './types/Campaigns'

import { encode } from './helpers'
import type { RequestController } from './RequestController'

class CampaignsQualifications {
	constructor(private client: RequestController) {}

	public examine(body: T.CampaignsQualificationsBody, params?: T.CampaignsQualificationsParams) {
		return this.client.post<T.CampaignsQualificationsResponse>('/campaigns/qualification', body, params)
	}
}

export class Campaigns {
	public qualifications: CampaignsQualifications

	constructor(private client: RequestController) {
		this.qualifications = new CampaignsQualifications(this.client)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#create-campaign
	 */
	public create(campaign: T.CampaignsCreateCampaign) {
		return this.client.post<T.CampaignsCreateCampaignResponse>('/campaigns', campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-campaign
	 */
	public update(nameOrId: string, campaign: T.CampaignsUpdateCampaign) {
		return this.client.put<T.CampaignsUpdateCampaignResponse>(`/campaigns/${encode(nameOrId)}`, campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-campaign
	 */
	public get(name: string) {
		return this.client.get<T.CampaignsGetCampaignResponse>(`/campaigns/${encode(name)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-campaign
	 */
	public delete(name: string, params?: T.CampaignsDeleteParams) {
		return this.client.delete(`/campaigns/${encode(name)}`, params)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-voucher-to-campaign
	 */

	// @todo - fix addVoucher params & body
	public addVoucher(name: string, params: T.CampaignsAddVoucherParams = {}) {
		return this.client.post<T.CampaignsAddVoucherResponse>(`/campaigns/${encode(name)}/vouchers`, params)
	}

	public addVoucherSpecific(name: string, code: string, params: T.CampaignsAddVoucherParams = {}) {
		return this.client.post<T.CampaignsAddVoucherResponse>(
			`/campaigns/${encode(name)}/vouchers/${encode(code)}`,
			params,
		)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers
	 */
	public importVouchers(campaignName: string, vouchers: T.CampaignsImportVouchers[]) {
		return this.client.post(`/campaigns/${encode(campaignName)}/import`, vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/v2017-04-20/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-campaigns
	 */
	public list(params: T.CampaignsListParams) {
		return this.client.get('/campaigns', params)
	}
}
