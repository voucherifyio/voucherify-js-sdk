import { voucherifyClient as client } from '../client'
import { generateRandomString } from './generateRandomString'

export const generateCampaignWithOnePromotionTier = async () => {
	return await client.promotions.create({
		name: generateRandomString(),
		campaign_type: 'PROMOTION',
		promotion: {
			tiers: [
				{
					name: generateRandomString(60),
					action: {
						discount: {
							// @ts-ignore
							type: 'AMOUNT',
							amount_off: 1000,
						},
					},
				},
			],
		},
	})
}
