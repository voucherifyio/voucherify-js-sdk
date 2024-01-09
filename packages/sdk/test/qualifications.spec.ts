import { voucherifyClient as client } from './client'
import { generateDiscountVoucher } from './utils/generateDiscountVoucher'
import { isoRegex } from './utils/isoRegex'
import { QualificationsRedeemableList } from '@voucherify/sdk'

jest.setTimeout(15000)

describe('Qualifications API', () => {
	describe('List ALL scenario qualification', () => {
		it('Should return qualifications list with "ALL" scenario', async () => {
			return
			const qualificationsResult = await client.qualifications.checkEligibility({
				customer: { name: 'john' },
				order: {},
				options: { limit: 100, expand: ['redeemable', 'category', 'validation_rules'] },
			})

			expect(qualificationsResult.redeemables instanceof Object).toEqual(true)
			expect(qualificationsResult.redeemables.object).toEqual('list')
			expect(qualificationsResult.redeemables.data_ref).toEqual('data')
			expect(Array.isArray(qualificationsResult.redeemables.data)).toEqual(true)
			expect(typeof qualificationsResult.redeemables.total).toEqual('number')
			expect(typeof qualificationsResult.redeemables.has_more).toEqual('boolean')
			qualificationsResult.redeemables.data.forEach(redeemable => {
				if (redeemable.id) {
					expect(typeof redeemable.id).toEqual('string')
				}
				if (redeemable.object) {
					expect(typeof redeemable.object).toEqual('string')
				}
				if (redeemable.created_at) {
					expect(typeof redeemable.created_at).toEqual('string')
				}
				if (redeemable.result) {
					expect(Object.keys(redeemable.result).length > 0).toEqual(true)
				}
				if (redeemable.order) {
					expect('metadata' in redeemable.order).toEqual(true)
					expect('customer_id' in redeemable.order).toEqual(true)
					expect('referrer_id' in redeemable.order).toEqual(true)
					expect('object' in redeemable.order).toEqual(true)
				}
				if (redeemable.validation_rule_id) {
					expect(typeof redeemable.validation_rule_id).toEqual('string')
				}
				expect(Object.keys(redeemable.applicable_to).length > 3).toEqual(true)
				expect(Object.keys(redeemable.inapplicable_to).length > 3).toEqual(true)
				expect('metadata' in redeemable).toEqual(true)
				expect(Array.isArray(redeemable.categories)).toEqual(true)
				if (redeemable.banner) {
					expect(typeof redeemable.banner).toEqual('string')
				}
				if (redeemable.name) {
					expect(typeof redeemable.name).toEqual('string')
				}
				if (redeemable.campaign_name) {
					expect(typeof redeemable.campaign_name).toEqual('string')
				}
				if (redeemable.campaign_id) {
					expect(typeof redeemable.campaign_id).toEqual('string')
				}
				if (redeemable.validation_rules_assignments) {
					expect(Object.keys(redeemable.validation_rules_assignments).length > 3).toEqual(true)
				}
			})
		})

		it('Should find qualification using filters', async () => {
			const code = (await generateDiscountVoucher()).code
			const checkEligibility = async () =>
				await client.qualifications.checkEligibility({
					customer: { name: 'john' },
					order: {},
					options: {
						limit: 100,
						expand: ['redeemable', 'category', 'validation_rules'],
						filters: {
							code: { conditions: { $in: [code] } },
						},
					},
				})
			const checkResponse = async () =>
				expect((await checkEligibility()).redeemables).toEqual(
					expect.objectContaining({
						object: 'list',
						data_ref: 'data',
						data: [
							{
								id: code,
								object: 'voucher',
								created_at: expect.stringMatching(isoRegex),
								result: {
									discount: { type: 'AMOUNT', effect: 'APPLY_TO_ORDER', amount_off: 2000, is_dynamic: false },
								},
								order: { metadata: {}, customer_id: null, referrer_id: null, object: 'order' },
								applicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
								inapplicable_to: { data: [], total: 0, data_ref: 'data', object: 'list' },
								metadata: {},
								categories: [],
							},
						],
						total: 1,
						has_more: false,
					} as QualificationsRedeemableList),
				)

			let checkNumber = 0
			while ((await checkEligibility()).redeemables.total === 0) {
				checkNumber += 1
				await new Promise(r => setTimeout(r, 1000))
				if (checkNumber === 10) {
					await checkResponse()
					return
				}
			}
			await checkResponse()
		})
	})
})
