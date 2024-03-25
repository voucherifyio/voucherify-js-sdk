import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { CustomerRequest, DiscountVouchersTypesEnum, DistributionsPublicationsCreateParams } from '@voucherify/sdk'

jest.setTimeout(15000)

describe('Referrals API', () => {
	it('Should return redeemable holders for campaign and member', async () => {
		const createdCustomer: CustomerRequest = await client.customers.create({ source_id: generateRandomString() })

		const referralCampaign = await client.campaigns.create({
			campaign_type: 'REFERRAL_PROGRAM',
			name: generateRandomString(),
			type: 'AUTO_UPDATE',
			voucher: {
				code_config: {
					length: 3,
				},
				type: 'DISCOUNT_VOUCHER',
				discount: {
					amount_off: 0,
					type: DiscountVouchersTypesEnum.AMOUNT,
				},
				is_referral_code: true,
			},
		})

		const distributionsPublicationsCreateParams: DistributionsPublicationsCreateParams = {
			customer: createdCustomer,
			campaign: referralCampaign,
		}

		const publication = await client.distributions.publications.create(distributionsPublicationsCreateParams)

		const redeemables = await client.referrals.listHolders(referralCampaign.id, publication.voucher.id)
		expect(redeemables.data).toBeDefined()

		const redeemables2 = await client.referrals.listHolders(null, publication.voucher.id)
		expect(redeemables2.data).toBeDefined()
	})
})
