import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Consents API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should get all consents', async () => {
		axios.get.mockResolvedValueOnce({ status: 200 } as AxiosResponse)

		await voucherify.consents.list()

		expect(axios.get).toHaveBeenCalledWith('/consents', { params: undefined })
	})
})
