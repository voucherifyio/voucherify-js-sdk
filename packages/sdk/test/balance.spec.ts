import axiosOrg, { AxiosResponse } from 'axios'
import { VoucherifyServerSide } from '../src'
import { encode } from '../src/helpers'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Balance API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should add balance to an existing gift voucher', async () => {
		const code = 'SDRT424'

		const balanceParams = {
			amount: 2000,
		}

		axios.post.mockResolvedValueOnce({ data: balanceParams, status: 200 } as AxiosResponse)

		await voucherify.vouchers.balance.create(code, balanceParams)

		expect(axios.post).toHaveBeenCalledWith(`/vouchers/${encode(code)}/balance`, balanceParams, { params: undefined })
	})
})
