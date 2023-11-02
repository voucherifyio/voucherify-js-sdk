import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'

describe('Rewards API', () => {
	it('Should not create reward assignment for COIN reward with parameters.loyalty passed', async () => {
		//Create loyalty campaign
		const loyaltyCampaign = await client.campaigns.create({
			campaign_type: 'LOYALTY_PROGRAM',
			name: generateRandomString(),
			type: 'AUTO_UPDATE',
			voucher: {
				code_config: {
					length: 3,
				},
				type: 'LOYALTY_CARD',
				loyalty_card: {
					balance: 200,
					points: 1000,
				},
			},
		})

		if (!loyaltyCampaign.id || !loyaltyCampaign.name) {
			return
		}
		const loyaltyCampaignId = loyaltyCampaign.id
		const loyaltyCampaignName = loyaltyCampaign.name

		// Create coin reward
		const createdCoinReward = await client.rewards.create({
			parameters: {
				coin: {
					exchange_ratio: 10,
				},
			},
			type: 'COIN',
			name: generateRandomString(),
		})
		if (!createdCoinReward.id) {
			return
		}
		const rewardId = createdCoinReward.id

		// Create reward assignment for coin reward
		await expect(
			client.rewards.createAssignment(rewardId, {
				campaign: loyaltyCampaignId,
				parameters: {
					loyalty: {
						points: 200,
					},
				},
			}),
		).rejects.toThrow('Invalid payload')

		await client.campaigns.delete(loyaltyCampaignName, { force: true })
		await client.rewards.delete(rewardId)
	})

	it('Should not create reward assignment for COIN reward with validation_rules array containing more than 1 element', async () => {
		//Create loyalty campaign
		const loyaltyCampaign = await client.campaigns.create({
			campaign_type: 'LOYALTY_PROGRAM',
			name: generateRandomString(),
			type: 'AUTO_UPDATE',
			voucher: {
				code_config: {
					length: 3,
				},
				type: 'LOYALTY_CARD',
				loyalty_card: {
					balance: 200,
					points: 1000,
				},
			},
		})

		if (!loyaltyCampaign.id || !loyaltyCampaign.name) {
			return
		}
		const loyaltyCampaignId = loyaltyCampaign.id
		const loyaltyCampaignName = loyaltyCampaign.name

		// Create coin reward
		const createdCoinReward = await client.rewards.create({
			parameters: {
				coin: {
					exchange_ratio: 10,
				},
			},
			type: 'COIN',
			name: generateRandomString(),
		})
		if (!createdCoinReward.id) {
			return
		}
		const rewardId = createdCoinReward.id

		// Create two new validation rules
		const firstRule = await client.validationRules.create({ name: 'val1' })
		const secondRule = await client.validationRules.create({ name: 'val2' })

		if (!firstRule.id || !secondRule.id) {
			return
		}

		const firstRuleId = firstRule.id
		const secondRuleId = secondRule.id

		// Create reward assignment for coin reward
		await expect(
			client.rewards.createAssignment(rewardId, {
				campaign: loyaltyCampaignId,
				validation_rules: [firstRuleId, secondRuleId],
			}),
		).rejects.toThrow('Invalid payload')

		await client.campaigns.delete(loyaltyCampaignName, { force: true })
		await client.rewards.delete(rewardId)
		await client.validationRules.delete(firstRuleId)
		await client.validationRules.delete(secondRuleId)
	})
	it('Should not create reward assignment for MATERIAL reward without parameters.loyalty provided', async () => {
		//Create loyalty campaign
		const loyaltyCampaign = await client.campaigns.create({
			campaign_type: 'LOYALTY_PROGRAM',
			name: generateRandomString(),
			type: 'AUTO_UPDATE',
			voucher: {
				code_config: {
					length: 3,
				},
				type: 'LOYALTY_CARD',
				loyalty_card: {
					balance: 200,
					points: 1000,
				},
			},
		})

		if (!loyaltyCampaign.id || !loyaltyCampaign.name) {
			return
		}
		const loyaltyCampaignId = loyaltyCampaign.id
		const loyaltyCampaignName = loyaltyCampaign.name

		// Create product
		const product = await client.products.create({ name: 'product_for_material_reward' })
		if (!product.id) {
			return
		}

		const productId = product.id

		// Create material reward
		const createdMaterialReward = await client.rewards.create({
			parameters: {
				product: {
					id: productId,
				},
			},
			type: 'MATERIAL',
			name: generateRandomString(),
		})
		if (!createdMaterialReward.id) {
			return
		}
		const rewardId = createdMaterialReward.id

		// Create reward assignment for material reward
		await expect(
			client.rewards.createAssignment(rewardId, {
				campaign: loyaltyCampaignId,
			}),
		).rejects.toThrow('Missing required parameter')

		await client.campaigns.delete(loyaltyCampaignName, { force: true })
		await client.rewards.delete(rewardId)
	})
})
