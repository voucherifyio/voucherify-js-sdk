import { encode } from './helpers'
import type { RequestController } from './RequestController'

class CampaignsQualifications {
	constructor(private client: RequestController) {}

	public examine(body: $FixMe, params?: $FixMe) {
		return this.client.post('/campaigns/qualification', body, params)
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
	public create(campaign: $FixMe) {
		return this.client.post('/campaigns', campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#update-campaign
	 */
	public update(nameOrId: $FixMe, campaign: $FixMe) {
		return this.client.put(`/campaigns/${encode(nameOrId)}`, campaign)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#get-campaign
	 */
	public get(name: $FixMe) {
		return this.client.get(`/campaigns/${encode(name)}`)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#delete-campaign
	 */
	public delete(name: $FixMe, params?: { force: boolean }) {
		return this.client.delete(`/campaigns/${encode(name)}`, { force: !!params?.force })
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#add-voucher-to-campaign
	 */
	public addVoucher(campaignName: string, body: $FixMe = {}) {
		return this.client.post(`/campaigns/${encode(campaignName)}/vouchers`, body)
	}
	/**
	 * @see https://docs.voucherify.io/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#import-vouchers
	 */
	public importVouchers(campaignName: string, vouchers: $FixMe) {
		return this.client.post(`/campaigns/${encode(campaignName)}/import`, vouchers)
	}
	/**
	 * @see https://docs.voucherify.io/v2017-04-20/reference?utm_source=github&utm_medium=sdk&utm_campaign=acq#list-campaigns
	 */
	public list(params: $FixMe) {
		return this.client.get('/campaigns', params)
	}
}
