import { RewardRedemptionParams } from './Rewards'
import { GiftRedemptionParams } from './Gift'
import { OrdersCreateResponse } from './Orders'
import { ApplicableToResultList } from './ApplicableTo'
import { DiscountVouchersTypes, DiscountVouchersEffectTypes, DiscountUnitVouchersEffectTypes } from './DiscountVoucher'
import { SimpleProduct, SimpleSku } from './Products'
import { LoyaltyPointsTransfer } from './Loyalties'
import { ValidationError } from './ValidationError'

type ExpandOption = 'order' | 'redeemable' | 'redemption'

export interface StackableOptions {
	expand: ExpandOption[]
}

export type StackableRedeemableObject = 'promotion_stack' | 'promotion_tier' | 'voucher'

export interface StackableRedeemableParams {
	object: StackableRedeemableObject
	id: string
	reward?: RewardRedemptionParams
	gift?: GiftRedemptionParams
}

export type StackableRedeemableResponseStatus = 'APPLICABLE' | 'INAPPLICABLE' | 'SKIPPED'

export interface StackableRedeemableResultDiscountUnit {
	effect: DiscountUnitVouchersEffectTypes
	unit_off: number
	unit_type: string
	sku?: SimpleSku
	product?: SimpleProduct
}

export interface StackableRedeemableResultDiscount {
	type: DiscountVouchersTypes
	effect: DiscountVouchersEffectTypes
	amount_off?: number
	amount_off_formula?: string
	percent_off?: number
	percent_off_formula?: string
	amount_limit?: number
	fixed_amount?: number
	fixed_amount_formula?: string
	unit_off?: number
	unit_off_formula?: string
	unit_type?: string
	sku?: SimpleSku
	product?: SimpleProduct
	units?: StackableRedeemableResultDiscountUnit[]
}

export interface StackableRedeemableResultGift {
	credits?: number
}

export interface StackableRedeemableResultLoyaltyCard {
	points?: number
	transfers?: LoyaltyPointsTransfer[]
}

export interface StackableRedeemableResultResponse {
	discount?: StackableRedeemableResultDiscount
	gift?: StackableRedeemableResultGift
	loyalty_card?: StackableRedeemableResultLoyaltyCard
	error?: ValidationError
}

export interface StackableRedeemableResponse {
	status: StackableRedeemableResponseStatus
	id: string
	object: StackableRedeemableObject
	order?: OrdersCreateResponse
	applicable_to?: ApplicableToResultList
	inapplicable_to?: ApplicableToResultList
	result?: StackableRedeemableResultResponse
	metadata?: Record<string, any>
}
