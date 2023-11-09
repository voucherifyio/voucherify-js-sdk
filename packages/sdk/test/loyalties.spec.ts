import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { isoRegex } from './utils/isoRegex'
import {
	LoyaltiesCreateCampaignResponse,
	LoyaltiesCreateMemberResponse,
	LoyaltiesAddPointsResponse,
	LoyaltiesListCardTransactionsResponseBody,
	LoyaltyTier,
} from '@voucherify/sdk'

describe('Loyalties API', () => {
	it('Create loyalty campaign, add 2 loyalty tiers', async () => {
		const campaign = await client.loyalties.create({
			name: generateRandomString(),
			vouchers_count: 10,
			voucher: {
				type: 'LOYALTY_CARD',
				loyalty_card: {
					points: 100,
				},
				redemption: {
					quantity: 100,
				},
				code_config: {
					pattern: 'TC2-PROMO-#######',
				},
			},
			type: 'AUTO_UPDATE',
			metadata: {
				campaign: true,
			},
		})
		const tiersToCreate = [
			{
				name: generateRandomString(),
				points: {
					from: 10,
					to: 100,
				},
			},
			{
				name: generateRandomString(),
				earning_rules: {},
				points: {},
			},
		]
		const tiers = await client.loyalties.createTiers(campaign.id, tiersToCreate)
		tiers.forEach(tier => {
			const findTier = (tier: LoyaltyTier) => tiersToCreate.find(tierToCreate => tierToCreate.name === tier.name)
			if (!findTier(tier)) {
				throw new Error('Could not find tier that should be created')
			}
			expect(tier).toEqual(expect.objectContaining(findTier(tier)))
			expect(typeof tier.name === 'string').toBeTruthy()
			expect(typeof tier.id === 'string').toBeTruthy()
			expect(typeof tier.points === 'object').toBeTruthy()
			if (tier.points?.from) {
				expect(typeof tier.points.from === 'number').toBeTruthy()
			}
			if (tier.points?.to) {
				expect(typeof tier.points.to === 'number').toBeTruthy()
			}
		})
	})

	it('Create loyalty campaign, create earning rule and validate it', async () => {
		const campaign = await client.loyalties.create({
			name: generateRandomString(),
			vouchers_count: 10,
			voucher: {
				type: 'LOYALTY_CARD',
				loyalty_card: {
					points: 100,
				},
				redemption: {
					quantity: 100,
				},
				code_config: {
					pattern: 'TC2-PROMO-#######',
				},
			},
			type: 'AUTO_UPDATE',
			metadata: {
				campaign: true,
			},
		})
		const earningRules = await client.loyalties.createEarningRule(campaign.id, [
			{
				event: 'order.paid',
				loyalty: {
					type: 'PROPORTIONAL',
					calculation_type: 'ORDER_AMOUNT',
					order: {
						amount: {
							every: 1000,
							points: 3,
						},
					},
				},
			},
		])
		for (const earningRuleId of earningRules.map(earningRule => earningRule.id)) {
			const earningRule = await client.loyalties.getEarningRule(campaign.id, earningRuleId)
			if (earningRule.loyalty.type === 'PROPORTIONAL') {
				if (earningRule.loyalty.calculation_type === 'ORDER_AMOUNT') {
					expect(typeof earningRule.loyalty.order.amount.every).toBe('number')
					expect(typeof earningRule.loyalty.order.amount.points).toBe('number')
				}
				if (earningRule.loyalty.calculation_type === 'ORDER_TOTAL_AMOUNT') {
					expect(typeof earningRule.loyalty.order.total_amount.every).toBe('number')
					expect(typeof earningRule.loyalty.order.total_amount.points).toBe('number')
				}
				if (earningRule.loyalty.calculation_type === 'ORDER_METADATA') {
					expect(typeof earningRule.loyalty.order.metadata.every).toBe('number')
					expect(typeof earningRule.loyalty.order.metadata.points).toBe('number')
					expect(typeof earningRule.loyalty.order.metadata.property).toBe('string')
				}
			}
		}
	})

	let loyaltyCampaign: LoyaltiesCreateCampaignResponse,
		loyaltiesMember: LoyaltiesCreateMemberResponse,
		startBalance = 100,
		addPoints = 88

	it('Should create loyalties campaign and 1 member', async () => {
		loyaltyCampaign = await client.loyalties.create({
			name: generateRandomString(),
			voucher: {
				type: 'LOYALTY_CARD',
				loyalty_card: {
					points: startBalance,
				},
			},
			type: 'AUTO_UPDATE',
		})
		loyaltiesMember = await client.loyalties.createMember(loyaltyCampaign.id, {
			customer: { name: generateRandomString() },
		}) //member
	})

	it('Should add loyalties points to a member previously added', async () => {
		const response = await client.loyalties.addOrRemoveCardBalance(
			loyaltiesMember.code,
			{ points: addPoints },
			loyaltyCampaign.id,
		)
		expect(response).toEqual({
			points: addPoints,
			total: startBalance + addPoints,
			balance: startBalance + addPoints,
			type: 'loyalty_card',
			object: 'balance',
			related_object: { type: 'voucher', id: expect.stringMatching(/^v_.*/) },
			operation_type: 'MANUAL',
			// use as `type` for typescript check
		} as LoyaltiesAddPointsResponse)
	})

	it('Should list members activities', async () => {
		const memberCardTransactions = await client.loyalties.listCardTransactions(loyaltiesMember.code, null)
		expect(memberCardTransactions).toEqual({
			object: 'list',
			data_ref: 'data',
			data: [
				{
					id: expect.stringMatching(/^vtx_.*/),
					source_id: null,
					voucher_id: expect.stringMatching(/^v_.*/),
					campaign_id: expect.stringMatching(/^camp_.*/),
					source: expect.stringMatching(/^Node.js.*/),
					reason: null,
					type: 'POINTS_ADDITION',
					details: {
						balance: {
							type: 'loyalty_card',
							total: startBalance + addPoints,
							object: 'balance',
							points: addPoints,
							balance: startBalance + addPoints,
							related_object: { id: expect.stringMatching(/^v_.*/), type: 'voucher' },
						},
					},
					related_transaction_id: null,
					created_at: expect.stringMatching(isoRegex),
				},
			],
			has_more: false,
			// use as `type` for typescript check
		} as LoyaltiesListCardTransactionsResponseBody)
	})

	it('Should generate and update campaign stack', async () => {
		const campaign = await client.campaigns.create({
			campaign_type: 'PROMOTION',
			type: 'STATIC',
			name: generateRandomString(),
		})
		const campaignTier1 = await client.promotions.tiers.create(campaign.id, { name: generateRandomString() })
		const campaignTier2 = await client.promotions.tiers.create(campaign.id, { name: generateRandomString() })
		const category = await client.categories.create({ name: generateRandomString(), hierarchy: 1 })
		const campaignStack = await client.promotions.stack.createInCampaign(campaign.id, {
			name: generateRandomString(),
			tiers: { ids: [campaignTier1.id, campaignTier2.id] },
			category_id: category.id,
		})
		expect(campaignStack).toEqual({
			id: expect.stringMatching(/^stack_.*/),
			name: expect.stringMatching(/^.*/),
			created_at: expect.stringMatching(isoRegex),
			campaign_id: expect.stringMatching(/^camp_.*/),
			object: 'promotion_stack',
			tiers: {
				ids: [expect.stringMatching(/^promo_.*/), expect.stringMatching(/^promo_.*/)],
			},
			category_id: expect.stringMatching(/^cat_.*/),
			categories: [
				{
					id: expect.stringMatching(/^cat_.*/),
					name: expect.stringMatching(/^.*/),
					hierarchy: 1,
					created_at: expect.stringMatching(isoRegex),
					object: 'category',
				},
			],
		})
		const newStackName = generateRandomString()
		expect((await client.promotions.stack.update(campaign.id, campaignStack.id, { name: newStackName })).name).toEqual(
			newStackName,
		)
	})
})
