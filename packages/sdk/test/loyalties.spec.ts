import { voucherifyClient as client } from './client'
import { generateRandomString } from './utils/generateRandomString'
import { DiscountVouchersTypesEnum } from '@voucherify/sdk'

describe('Loyalties API', () => {
	it('Create loyalty campaign, create earning rule and validate it', async () => {
		const campaign = await client.campaigns.create({
			name: generateRandomString(),
			campaign_type: 'LOYALTY_PROGRAM',
			vouchers_count: 10,
			voucher: {
				type: 'DISCOUNT_VOUCHER',
				discount: {
					percent_off: 10,
					type: DiscountVouchersTypesEnum.PERCENT,
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
		const earningRules = await client.loyalties.createEarningRules(campaign.id, [
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
		for (const earningRule of earningRules) {
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
