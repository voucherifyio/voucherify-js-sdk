import { voucherifyClient as client } from './client'
import { DiscountVouchersTypesEnum } from '@voucherify/sdk'
import { generateRandomString } from './utils/generateRandomString'
import { VoucherifyError } from '../src/VoucherifyError'

jest.setTimeout(15000)

describe('Redemptions API', () => {
	it('redemption that failed due validation rule validate error should has .error.message element if defined in validation rule', async () => {
		const errorMessage = 'CUSTOMER NOT IN SEGMENT'

		const validationRule = await client.validationRules.create({
			name: 'Customer must be in segment',
			rules: {
				1: {
					name: 'customer_segment',
					rules: {},
					property: null,
					conditions: {
						$is: ['seg_' + generateRandomString()],
					},
				},
				logic: '1',
			},
			error: {
				message: errorMessage,
			},
		})

		const voucher = await client.vouchers.create({
			type: 'DISCOUNT_VOUCHER',
			discount: {
				amount_off: 2000,
				type: DiscountVouchersTypesEnum.AMOUNT,
			},
			redemption: {
				quantity: 1,
			},
			metadata: {},
			validation_rules: [validationRule.id],
		})

		try {
			await client.redemptions.redeem(voucher.code, {
				customer: {
					source_id: 'cust_' + generateRandomString(),
					name: 'John Doe',
					object: 'customer',
				},
			})
		} catch (error) {
			if (error instanceof VoucherifyError) {
				expect(error.message).toBeDefined()
				expect(error.error?.message).toBeDefined()
				expect(error.error?.message).toEqual(errorMessage)
			}
		}
	})

	it('should return proper response object', async () => {
		try {
			const createdVoucher = await client.vouchers.create({ code: `test-${Math.random()}` })
			const createdVoucher2 = await client.vouchers.create({ code: `test2-${Math.random()}` })

			const stackedRedemption = await client.redemptions.redeemStackable({
				redeemables: [
					{ object: 'voucher', id: createdVoucher.id },
					{ object: 'voucher', id: createdVoucher2.id },
				],
			})

			const stackableBasicResponseObject = {
				id: expect.any(String),
				object: 'redemption',
				date: expect.any(String),
				metadata: expect.any(Object) || null,
				result: expect.stringMatching(/SUCCESS|FAILURE/),
				status: expect.stringMatching(/SUCCEEDED|FAILED/),
			}

			expect(stackedRedemption).toEqual(
				expect.objectContaining({
					redemptions: expect.objectContaining(stackableBasicResponseObject),
					parent_redemption: expect.objectContaining(stackableBasicResponseObject),
				}),
			)

			const stackedRolledBackRedemption = await client.redemptions.rollbackStackable(
				stackedRedemption.parent_redemption.id,
			)

			expect(stackedRolledBackRedemption).toEqual(
				expect.objectContaining({
					rollbacks: expect.objectContaining(stackableBasicResponseObject),
					parent_rollback: expect.objectContaining(stackableBasicResponseObject),
				}),
			)
		} catch (error) {
			if (error instanceof VoucherifyError) {
				console.error(error.message)
			}
		}
	})
})
