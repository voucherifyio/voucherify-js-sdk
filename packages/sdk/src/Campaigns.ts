import { encode } from './helpers'
import type { RequestController } from './RequestController'

class CampaignsQualifications {
	constructor(private client: RequestController) {}

	examine(body: $FixMe, params?: $FixMe) {
		return this.client.post('/campaigns/qualification', body, params)
	}
}

export class Campaigns {
	public qualifications: CampaignsQualifications

	constructor(private client: RequestController) {
		this.qualifications = new CampaignsQualifications(this.client)
	}

	create(campaign: $FixMe) {
		return this.client.post('/campaigns', campaign)
	}
	update(nameOrId: $FixMe, campaign: $FixMe) {
		return this.client.put(`/campaigns/${encode(nameOrId)}`, campaign)
	}
	get(name: $FixMe) {
		return this.client.get(`/campaigns/${encode(name)}`)
	}
	delete(name: $FixMe, params?: { force: boolean }) {
		return this.client.delete(`/campaigns/${encode(name)}`, { force: !!params?.force })
	}
	addVoucher(campaignName: string, body: $FixMe = {}) {
		return this.client.post(`/campaigns/${encode(campaignName)}/vouchers`, body)
	}
	importVouchers(campaignName: string, vouchers: $FixMe) {
		return this.client.post(`/campaigns/${encode(campaignName)}/import`, vouchers)
	}
	list(params: $FixMe) {
		return this.client.get('/campaigns', params)
	}
}
