import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'

describe('Loyalties API', () => {
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
})
