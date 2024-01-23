import { voucherifyClient as client } from './client'
import {DiscountVouchersTypesEnum} from "@voucherify/sdk";
import {generateRandomString} from "./utils/generateRandomString";

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
                        "$is": [
                            "seg_" + generateRandomString()
                        ]
                    }
                },
                logic: '1'
            },
            error: {
                message: errorMessage,
            }
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
            validation_rules: [
                validationRule.id
            ]
        })

        try {
            await client.redemptions.redeem(voucher.code, {
                customer: {
                    source_id: 'cust_' + generateRandomString(),
                    name: 'John Doe',
                    object: 'customer',
                }
            })
        } catch (error) {
            expect(error.message).toBeDefined()
            expect(error.error.message).toBeDefined()
            expect(error.error.message).toEqual(errorMessage)
        }
    })
})
