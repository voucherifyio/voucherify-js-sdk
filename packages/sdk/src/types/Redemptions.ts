import { OrdersCreateResponse, OrdersCreate, OrdersItem, ObjectOrder, OrderObjectRollback } from './Orders'
import { RewardsCreateResponse, RewardRedemptionParams } from './Rewards'
import { CustomersCreateBody, SimpleCustomer } from './Customers'
import { VoucherDiscount, VouchersResponse } from './Vouchers'
import { GiftRedemptionParams } from './Gift'
import { ValidationSessionParams, ValidationSessionReleaseParams } from './ValidateSession'
import { StackableOptions, StackableRedeemableParams } from './Stackable'
import { PromotionTierRedeemDetailsSimple, PromotionTierRedeemDetails } from './PromotionTiers'
import { ProductObject, SkuObject } from './Products'

export type RedemptionsRedeemResponse =
	| RedemptionObjectDiscountVoucherExtended
	| RedemptionObjectLoyaltyCardExtended
	| RedemptionObjectGiftCardExtended

export interface RedemptionsGetForVoucherResponse {
	quantity: number
	redeemed_quantity?: number
	object: 'list'
	url: string
	data_ref: 'redemption_entries'
	total: number
	redemption_entries?: RedemptionObjectVoucher[] //7_obj_redemption_object_voucher
}

type RedemptionObjectVoucher =
	| RedemptionObjectVoucherDiscount
	| RedemptionObjectLoyaltyCard
	| RedemptionObjectGiftCard
	| RedemptionObjectVoucherFail
	| RedemptionRollbackObjectVoucherDiscount
	| RedemptionRollbackObjectGiftCard
	| RedemptionRollbackObjectLoyaltyCard
	| RedemptionRollbackObjectVoucherFail

interface RedemptionObjectVoucherDiscount {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	redemption?: string
	result: 'SUCCESS' | 'FAILURE'
	order?: ObjectOrder
	channel: {
		channel_id: string
		channel_type: 'USER' | 'API'
	}
	customer?: SimpleCustomer
	related_object_type: 'voucher'
	related_object_id?: string
	voucher?: {
		id: string
		code: string
		campaign?: string
		campaign_id?: string
	}
}

type RedemptionObjectLoyaltyCard = RedemptionObjectVoucherDiscount & {
	reward?:
		| RedemptionObjectLoyaltyCardPayWithPoints
		| RedemptionObjectLoyaltyCardMaterialProduct
		| RedemptionObjectLoyaltyCardMaterialSku
		| RedemptionObjectLoyaltyCardDigital
	loyalty_card?: {
		points: number
	}
}

type RedemptionObjectGiftCard = RedemptionObjectVoucherDiscount & {
	amount?: number
	gift?: {
		amount: number
	}
}

type RedemptionObjectVoucherFail = RedemptionObjectVoucherDiscount & {
	failure_code?: string
	failure_message?: string
	order?: any
}

interface RedemptionRollbackObjectVoucherDiscount {
	id: string
	object: 'redemption_rollback'
	date?: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	redemption?: string
	reason?: string
	result: 'SUCCESS' | 'FAILURE'
	order?: OrderObjectRollback
	channel?: {
		channel_id: string
		channel_type: 'USER' | 'API'
	}
	customer?: SimpleCustomer
	related_object_type: 'voucher'
	related_object_id?: string
	voucher?: {
		id: string
		code: string
		campaign?: string
		campaign_id?: string
	}
}

type RedemptionRollbackObjectLoyaltyCard = RedemptionRollbackObjectVoucherDiscount & {
	amount?: number
	reward?:
		| RedemptionObjectLoyaltyCardPayWithPoints
		| RedemptionObjectLoyaltyCardMaterialProduct
		| RedemptionObjectLoyaltyCardMaterialSku
		| RedemptionObjectLoyaltyCardDigital
	loyalty_card?: {
		points: number
	}
}

type RedemptionRollbackObjectGiftCard = RedemptionRollbackObjectVoucherDiscount & {
	amount?: number
	gift?: {
		amount: number
	}
}

type RedemptionRollbackObjectVoucherFail = Omit<RedemptionRollbackObjectVoucherDiscount, 'reason'> & {
	failure_code?: string
	failure_message?: string
}
interface RedemptionObjectDiscountVoucherExtended {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	result: 'SUCCESS' | 'FAILURE'
	order?: ObjectOrder
	channel?: {
		channel_id?: string
		channel_type?: 'USER' | 'API'
	}
	customer?: SimpleCustomer
	related_object_type: 'voucher'
	related_object_id: string
	voucher: VouchersResponse
}

type RedemptionObjectLoyaltyCardExtended = RedemptionObjectDiscountVoucherExtended & {
	reward?:
		| RedemptionObjectLoyaltyCardPayWithPoints
		| RedemptionObjectLoyaltyCardMaterialProduct
		| RedemptionObjectLoyaltyCardMaterialSku
		| RedemptionObjectLoyaltyCardDigital
	loyalty_card?: {
		points: number
	}
}

type RedemptionObjectGiftCardExtended = RedemptionObjectDiscountVoucherExtended & {
	amount?: number
	gift?: {
		amount: number
	}
}
export interface RedemptionsRedeemBody {
	tracking_id?: string
	customer?: Omit<SimpleCustomer, 'id'> & { description?: string; id?: string }
	order?: Pick<Partial<OrdersCreateResponse>, 'id' | 'source_id' | 'amount' | 'items' | 'status' | 'metadata'>
	metadata?: Record<string, any>
	reward?: RewardRedemptionParams
	gift?: GiftRedemptionParams
	session?: ValidationSessionReleaseParams
}

export interface RedemptionsRedeemResult {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: OrdersCreateResponse
	metadata?: Record<string, any>
	result: 'SUCCESS' | 'FAILURE'
	voucher: VouchersResponse
	customer?: SimpleCustomer
	reward?: RewardsCreateResponse
	related_object_type: 'voucher'
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
	promotion_tier?: PromotionTierRedeemDetailsSimple | PromotionTierRedeemDetails
	failure_code?: string
	failure_message?: string
}

export interface RedemptionsListParams {
	limit?: number
	page?: number
	result?: 'SUCCESS' | 'FAILURE'
	campaign?: string
	customer?: string
	created_at?: {
		before?: string
		after?: string
	}
}

export interface Redemption {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: Omit<OrdersCreateResponse, 'object'> & {
		related_object_id: string
		related_object_type: 'redemption'
		referrer?: string
	}
	metadata?: Record<string, any>
	result: 'SUCCESS' | 'FAILURE'
	failure_code?: string
	failure_message?: string
	customer?: SimpleCustomer
	related_object_type: 'string'
	voucher?: {
		code: string
		campaign?: string
		id: string
		object: 'voucher'
		campaign_id?: string
	}
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
}

export interface RedemptionsListResponse {
	object: 'list'
	total: number
	data_ref: 'redemptions'
	redemptions: (Redemption | SimpleRollback)[]
}

export interface RedemptionsRollbackParams {
	reason?: string
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
}

export interface RedemptionsRollbackQueryParams {
	reason?: string
	tracking_id?: string
}

export interface RedemptionsRollbackPayload {
	customer?: SimpleCustomer & { description?: string }
}

export type RedemptionsRollbackResponse = RollbackRedemptionObjectExtended

export type RollbackRedemptionObjectExtended =
	| RollbackRedemptionObjectDiscountVoucherExtended
	| RollbackRedemptionObjectLoyaltyCardExtended
	| RollbackRedemptionObjectGiftCardExtended
	| RollbackRedemptionObjectPromotionTierExtended

interface RollbackRedemptionObjectDiscountVoucherExtended {
	//7_obj_rollback_redemption_object_discount_voucher_extended
	id: string
	object: 'redemption_rollback'
	date?: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	redemption?: string
	reason?: string
	result: 'SUCCESS' | 'FAILURE'
	order?: OrderObjectRollback //7_obj_order_object_rollback
	channel?: {
		channel_id: string
		channel_type: 'USER' | 'API'
	}
	customer?: SimpleCustomer
	related_object_type: 'voucher'
	related_object_id: string
	voucher?: VouchersResponse
}

type RollbackRedemptionObjectLoyaltyCardExtended = RollbackRedemptionObjectDiscountVoucherExtended & {
	amount?: number
	reward?:
		| RedemptionObjectLoyaltyCardPayWithPoints
		| RedemptionObjectLoyaltyCardMaterialProduct
		| RedemptionObjectLoyaltyCardMaterialSku
		| RedemptionObjectLoyaltyCardDigital
	loyalty_card?: {
		points: number
	}
}

type RollbackRedemptionObjectGiftCardExtended = RollbackRedemptionObjectDiscountVoucherExtended & {
	amount?: number
	gift?: {
		amount: number
	}
}

type RollbackRedemptionObjectPromotionTierExtended = RollbackRedemptionObjectDiscountVoucherExtended & {
	promotion_tier?: {
		id: string
		campaign: {
			id: string
		}
	}
}

export type SimpleRollback = Pick<
	RedemptionsRollbackResponse,
	'id' | 'object' | 'date' | 'customer_id' | 'tracking_id' | 'redemption' | 'result' | 'customer'
> & {
	related_object_type: 'voucher'
	voucher: {
		id: string
		object: 'voucher'
		code: string
		campaign?: string
		campaign_id?: string
	}
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
}

export interface RedemptionsRedeemStackableParams {
	options?: StackableOptions
	redeemables: StackableRedeemableParams[]
	session?: ValidationSessionParams
	order?: OrdersCreate
	customer?: CustomersCreateBody
	metadata?: Record<string, any>
}

export type RedemptionsRedeemStackableRedemptionResult = RedemptionsRedeemResult & {
	redemption: string
}

interface RedemptionsRedeemStackableOrderResponse {
	id: string
	source_id?: string
	created_at: string
	updated_at?: string
	status?: 'CANCELED'
	amount?: number
	total_amount?: number
	items?: Omit<
		OrdersItem[],
		| 'applied_discount_amount'
		| 'discount_amount'
		| 'discount_quantity'
		| 'initial_amount'
		| 'initial_quantity'
		| 'metadata'
		| 'product'
		| 'related_object'
		| 'sku'
		| 'source_id'
	> & {
		product?: {
			id?: string
			name?: string
			price?: number
			source_id?: string
		}
		sku?: {
			id?: string
			price?: number
			sku?: string
			source_id?: string
		}
	}
	metadata?: Record<string, any>
	customer?: {
		id?: string
		object?: 'customer'
	}
	referrer?: {
		id?: string
		object?: 'customer'
	}
	customer_id?: string
	referrer_id?: string
	object: 'order'
	redemptions?: Record<
		string,
		{
			date: string
			rollback_id?: string
			rollback_date?: string
			related_object_type: 'redemption'
			related_object_id: string
			stacked: string[]
			rollback_stacked?: string[]
		}
	>
}

export interface RedemptionsRedeemStackableResponse {
	redemptions: RedemptionsRedeemStackableRedemptionResult[]
	parent_redemption: {
		id: string
		object: 'redemption'
		date: string
		customer_id?: string
		tracking_id?: string
		metadata?: Record<string, any>
		result: 'SUCCESS' | 'FAILURE'
		order?: RedemptionsRedeemStackableOrderResponse
		customer?: SimpleCustomer
		related_object_type: 'redemption'
		related_object_id: string
	}
	order?: RedemptionsRedeemStackableOrderResponse
}

export interface RedemptionsRollbackStackableResponse {
	rollbacks:
		| RedemptionRollbackDiscountVoucherStacked
		| RedemptionRollbackLoyaltyCardStacked
		| RedemptionRollbackGiftCardStacked
		| RedemptionRollbackPromotionTierStacked
	parent_rollback: {
		id: string
		date: string
		customer_id?: string
		tracking_id?: string
		order?: {
			id: string
			source_id?: string
			status?: 'CANCELED'
			customer_id?: string
			referrer_id?: string
			amount?: number
			total_amount?: number
			items?: {
				object?: 'order_item'
				product_id?: string
				sku_id?: string
				quantity?: number
				amount?: number
				price?: number
				subtotal_amount?: number
				product?: {
					id: string
					source_id?: string
					name?: string
					price?: number
				}
				sku?: {
					id: string
					source_id?: string
					sku?: string
					price?: number
				}
			}[]
			metadata?: Record<string, any>
			object: 'order'
		}
		customer?: Omit<SimpleCustomer, 'name' | 'email'>
		result: 'SUCCESS' | 'FAILURE'
		redemption: string
	}
	order?: RedemptionsRedeemStackableOrderResponse
}

interface RedemptionRollbackDiscountVoucherStacked {
	id: string
	customer_id?: string
	tracking_id?: string
	date?: string
	order?: OrderObjectRollbackStackedPerRedemptionApplyToOrder | OrderObjectRollbackStackedPerRedemptionApplyToItems
	customer?: {
		id?: string
		source_id?: string
		metadata?: Record<string, any>
		object?: 'customer'
	}
	result: 'SUCCESS' | 'FAILURE'
	voucher: {
		id: string
		code: string
		discount?: VoucherDiscount
		type?: 'DISCOUNT_VOUCHER'
		campaign?: string
		campaign_id?: string
		is_referral_code: boolean
	}
	redemption: string
}

type RedemptionRollbackLoyaltyCardStacked = Omit<RedemptionRollbackDiscountVoucherStacked, 'voucher'> & {
	reward?:
		| RedemptionObjectLoyaltyCardPayWithPoints
		| RedemptionObjectLoyaltyCardMaterialProduct
		| RedemptionObjectLoyaltyCardMaterialSku
		| RedemptionObjectLoyaltyCardDigital
	voucher: {
		id: string
		code: string
		loyalty_card?: {
			points: number
			balance: number
		}
		type?: 'LOYALTY_CARD'
		campaign?: string
		campaign_id?: string
		is_referral_code: boolean
		holder_id?: string
	}
}

type RedemptionRollbackGiftCardStacked = Omit<RedemptionRollbackDiscountVoucherStacked, 'voucher'> & {
	amount?: number
	voucher: {
		id: string
		code: string
		gift?: {
			amount: number
			balance: number
			effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
		}
		type?: 'GIFT_VOUCHER'
		campaign?: string
		campaign_id?: string
		is_referral_code: boolean
	}
}

type RedemptionRollbackPromotionTierStacked = Omit<RedemptionRollbackDiscountVoucherStacked, 'voucher'> & {
	amount?: number
	promotion_tier?: {
		id: string
		name?: string
		banner?: string
		campaign?: {
			id?: string
		}
	}
}

interface OrderObjectRollbackStackedPerRedemptionApplyToOrder {
	amount?: number
	total_amount?: number
	items?: {
		object?: 'order_item'
		product_id?: string
		sku_id?: string
		quantity?: number
		amount?: number
		price?: number
	}[]
	metadata?: Record<string, any>
	object?: 'order'
}

type OrderObjectRollbackStackedPerRedemptionApplyToItems = Omit<
	OrderObjectRollbackStackedPerRedemptionApplyToOrder,
	'items'
> & {
	items?: {
		object?: 'order_item'
		product_id?: string
		sku_id?: string
		quantity?: number
		amount?: number
		price?: number
		subtotal_amount?: number
	}[]
	items_discount_amount?: number
	total_discount_amount?: number
}

export interface RedemptionObjectLoyaltyCardPayWithPoints {
	//7_obj_redemption_object_loyalty_card_pay_with_points
	id: string
	customer?: SimpleCustomer
	assignment_id?: string
	object: 'reward'
	name?: string
	created_at?: string
	updated_at?: string
	parameters?: {
		coin?: {
			exchange_ratio?: number
			points_ratio?: number
		}
	}
	type?: 'COIN'
}

export type RedemptionObjectLoyaltyCardMaterialProduct = Omit<
	RedemptionObjectLoyaltyCardPayWithPoints,
	'parameters' | 'type'
> & {
	product?: ProductObject
	parameters?: {
		product?: {
			id: string
			sku_id?: null
		}
	}
	type?: 'MATERIAL'
}

export type RedemptionObjectLoyaltyCardMaterialSku = RedemptionObjectLoyaltyCardMaterialProduct & {
	sku?: SkuObject
}

export type RedemptionObjectLoyaltyCardDigital = Omit<
	RedemptionObjectLoyaltyCardPayWithPoints,
	'parameters' | 'type'
> & {
	parameters?: {
		campaign?:
			| RedemptionObjectLoyaltyCardDigitalDiscountVoucher
			| RedemptionObjectLoyaltyCardDigitalGiftCardCredits
			| RedemptionObjectLoyaltyCardDigitalLoyaltyCardPoints
	}
	type?: 'CAMPAIGN'
}
interface RedemptionObjectLoyaltyCardDigitalDiscountVoucher {
	id: string
	type?: 'DISCOUNT_COUPONS'
}

interface RedemptionObjectLoyaltyCardDigitalGiftCardCredits {
	id: string
	balance: number
	type?: 'GIFT_VOUCHERS'
}

interface RedemptionObjectLoyaltyCardDigitalLoyaltyCardPoints {
	id: string
	balance: number
	type?: 'LOYALTY_PROGRAM'
}
