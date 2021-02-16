import axiosOrg, { AxiosResponse } from 'axios'

import { VoucherifyServerSide } from '../src'
import { encode } from '../src/helpers'

const axios = axiosOrg as jest.Mocked<typeof import('axios')['default']>

describe('Validation Rules API', () => {
	const voucherify = VoucherifyServerSide({
		applicationId: 'node-test-app-id',
		secretKey: 'node-test-secret-key',
	})

	it('should validate a voucher without additional context', async () => {
	
	})
}
