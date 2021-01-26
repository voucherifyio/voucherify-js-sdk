import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'
import { encode } from '../src/helpers'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Customers API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should create a campaign', async () => {
		const campaign = { name: 'Test campaign' }

		axios.post.mockResolvedValueOnce({ data: campaign, status: 200 } as AxiosResponse)

		await voucherify.campaigns.create(campaign)

		expect(axios.post).toHaveBeenCalledWith('/campaigns', campaign, { params: undefined })
	})

	it('should update a campaign', async () => {
		const nameOrId = 'Test campaign'
		const campaign = { description: 'test campaign' }

		axios.put.mockResolvedValueOnce({ data: campaign, status: 200 } as AxiosResponse)

		await voucherify.campaigns.update(nameOrId, campaign)

		expect(axios.put).toHaveBeenCalledWith(`/campaigns/${encode(nameOrId)}`, campaign, { params: undefined })
	})

	it('should get a campaign', async () => {
		const name = 'Test campaign'

		axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.campaigns.get(name)

		expect(axios.get).toHaveBeenCalledWith(`/campaigns/${encode(name)}`, { params: undefined })
	})

	it('should delete a campaign pernamently', async () => {
		const name = 'Test campaign'

		const force = {
			force: true,
		}

		axios.delete.mockResolvedValueOnce({ data: force, status: 200 } as AxiosResponse)

		await voucherify.campaigns.delete(name, force)

		expect(axios.delete).toHaveBeenCalledWith(`/campaigns/${encode(name)}`, { params: force })
	})

	it('should add voucher to a campaign', async () => {
		const name = 'Test campaign'
		const body = { code: 'test voucher' }
	})
	it('should import vouchers to a campaign', async () => {})
	it('should list all campaigns', async () => {})
})
