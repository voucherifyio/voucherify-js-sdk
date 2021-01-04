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

	public create(campaign: $FixMe) {
		return this.client.post('/campaigns', campaign)
	}
	public update(nameOrId: $FixMe, campaign: $FixMe) {
		return this.client.put(`/campaigns/${encode(nameOrId)}`, campaign)
	}
	public get(name: $FixMe) {
		return this.client.get(`/campaigns/${encode(name)}`)
	}
	public delete(name: $FixMe, params?: { force: boolean }) {
		return this.client.delete(`/campaigns/${encode(name)}`, { force: !!params?.force })
	}
	public addVoucher(campaignName: string, body: $FixMe = {}) {
		return this.client.post(`/campaigns/${encode(campaignName)}/vouchers`, body)
	}
	public importVouchers(campaignName: string, vouchers: $FixMe) {
		return this.client.post(`/campaigns/${encode(campaignName)}/import`, vouchers)
	}
	public list(params: $FixMe) {
		return this.client.get('/campaigns', params)
	}
}
