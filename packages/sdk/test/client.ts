import { VoucherifyServerSide } from '../../sdk/src'
import 'dotenv/config'
export const voucherifyClient = VoucherifyServerSide({
	applicationId: process.env.APPLICATION_ID as string,
	secretKey: process.env.SECRET_KEY as string,
	apiUrl: (process.env.API_URL as string) || `https://api.voucherify.io`,
})
