import { generateCampaignWithOnePromotionTier } from './generateCampaignWithOnePromotionTier'

export const generatePromotionTier = async () => {
	const campaign = await generateCampaignWithOnePromotionTier()
	if (!campaign.promotion.tiers?.[0]) {
		throw new Error('Could not create promotion')
	}
	return campaign.promotion.tiers[0]
}
