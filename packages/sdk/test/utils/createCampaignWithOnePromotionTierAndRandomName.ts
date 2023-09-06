import { voucherifyClient as client } from '../client'
import { generateRandomString } from './generateRandomString'
import { DiscountVouchersTypesEnum } from '../../src'

export const createCampaignWithOnePromotionTierAndRandomName = async () => {
	return await client.promotions.create({
		name: generateRandomString(),
		campaign_type: 'PROMOTION',
		promotion: {
			tiers: [
				{
					name: generateRandomString(60),
					action: {
						discount: {
							type: DiscountVouchersTypesEnum.AMOUNT,
							amount_off: 1000,
						},
					},
				},
			],
		},
	})
}
