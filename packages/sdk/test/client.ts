import { VoucherifyServerSide } from '../../sdk/src'
import 'dotenv/config'
export const voucherifyClient = VoucherifyServerSide({
	applicationId: process.env.APPLICATION_ID as string,
	secretKey: process.env.SECRET_KEY as string,
})
