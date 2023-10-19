import { VoucherifyServerSide } from '../../sdk/src'
import 'dotenv/config'
const getVoucherifyClient = () => {
	const applicationId = process.env.APPLICATION_ID as string,
		secretKey = process.env.SECRET_KEY as string,
		apiUrl = (process.env.API_URL as string) || `https://api.voucherify.io`
	if (!applicationId || !secretKey) {
		throw new Error('Missing applicationId or secretKey')
	}
	return VoucherifyServerSide({
		applicationId,
		secretKey,
		apiUrl,
	})
}

export const voucherifyClient = getVoucherifyClient()
