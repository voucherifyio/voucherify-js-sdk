import {
	VoucherObjectDiscountAmount,
	VoucherObjectDiscountFixed,
	VoucherObjectDiscountPercentage,
	VoucherObjectDiscountShipping,
	VoucherObjectDiscountUnitMultiple,
	VoucherObjectDiscountUnitOne,
	VouchersImport,
	VouchersResponse,
} from './Vouchers'

import { CustomerRequest } from './Customers'
import { OrdersGetResponse } from './Orders'
import { AsyncActionCreateResponse } from './AsyncActions'

export interface CampaignResponse {
	campaign_type:
		| 'LUCKY_DRAW'
		| 'LOYALTY_PROGRAM'
		| 'PROMOTION'
		| 'DISCOUNT_COUPONS'
		| 'GIFT_VOUCHERS'
		| 'REFERRAL_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	categories: {
		created_at: string
		hierarchy: number
		id: string
		name: string
		object: 'category'
		updated_at: string
	}
	category?: string
	category_id?: string
	created_at: string
	creation_status: 'DONE' | 'DRAFT' | 'FAILED' | 'IN_PROGRESS' | 'MODIFYING'
	expiration_date?: string
	id: string
	join_once?: boolean
	loyalty_tiers_expiration: LoyaltyTiersExpirationBalance | LoyaltyTiersExpirationPointsInPeriod
	metadata?: Record<string, any>
	name: string
	object: 'campaign'
	promotion: ListPromotionTiersFromCampaign
	protected: boolean
	referral_program?: {
		conversion_event_type: 'custom_event' | 'redemption'
		custom_event: {
			id: string
			name: string
		}
		referee_reward: {
			type: 'GIFT_VOUCHER' | 'LOYALTY_CARD'
			amount: string
			related_object_parent: {
				id: string
				name: string
				object: string
			}
		}
	}
	auto_join?: boolean
	// join_once?: boolean
	// description?: string
	// validation_rules_assignments: {
	// 	data?: ValidationRulesCreateAssignmentResponse[]
	// 	object: 'list'
	// 	total: number
	// 	data_ref: 'data'
	// }
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	// created_at: string
	vouchers_generation_status: 'IN_PROGRESS' | 'DONE' | 'FAILED' | 'DRAFT'
	active: boolean
	voucher?: CampaignVoucherObjectDiscount | CampaignVoucherObjectGiftCard | CampaignVoucherObjectLoyaltyCard
	// referral_program?: ReferralProgramCustomEventRedemption | ReferralProgramRedemption
	start_date: string
	updated_at: string
	use_voucher_metadata_schema?: boolean
	// protected?: boolean
	vouchers_count?: number
	// object: 'campaign'
}

interface AddPromotionTierToCampaign {
	tiers: {
		action: {
			discount:
				| VoucherObjectDiscountAmount
				| VoucherObjectDiscountPercentage
				| VoucherObjectDiscountFixed
				| VoucherObjectDiscountUnitOne
				| VoucherObjectDiscountUnitMultiple
				| VoucherObjectDiscountShipping
		}
		name: string
		banner: string
		metadata: Record<string, any>
		active: boolean
		start_date: string
		expiration_date: string
		validity_day_of_week: number[]
		validity_timeframe: {
			duration: string
			interval: string
		}
		validation_rules: string[]
		category: string
		category_id: string
	}[]
}

interface ListPromotionTiersFromCampaign {
	data_ref: 'tiers'
	has_more: boolean
	object: 'list'
	tiers?: {
		action: {
			discount:
				| VoucherObjectDiscountAmount
				| VoucherObjectDiscountPercentage
				| VoucherObjectDiscountFixed
				| VoucherObjectDiscountUnitOne
				| VoucherObjectDiscountUnitMultiple
				| VoucherObjectDiscountShipping
		}
		active: boolean
		banner: string
		campaign: {
			active: boolean
			category_id: string
			expiration_date: string
			id: string
			object: 'campaign'
			start_date: string
			validity_day_of_week: number[]
			validity_timeframe: {
				duration: string
				interval: string
			}
		}
		campaign_id: string
		categories: {
			created_at: string
			hierarchy: number
			id: string
			name: string
			object: 'category'
			updated_at: string
		}
		category_id: string
		created_at: string
		expiration_date: string
		hierarchy: number
		id: string
		metadata: Record<string, any>
		name: string
		object: 'promotion_tier'
		start_date: string
		summary: {
			orders: {
				total_amount: number
				total_discount_amount: number
			}
			redemptions: {
				total_redeemed: number
			}
		}
		updated_at: string
		validation_rule_assignments: {
			data: {
				created_at: string
				id: string
				object: 'validation_rules_assignment'
				related_object_id: string
				related_object_type:
					| 'campaign'
					| 'distribution'
					| 'earning_rule'
					| 'promotion_tier'
					| 'reward_assignment'
					| 'voucher'
				rule_id: string
			}[]
			data_ref: 'data'
			object: 'list'
			total: number
		}
		validity_day_of_week: number[]
		validity_timeframe: {
			duration: string
			interval: string
		}
	}[]
	// validity_day_of_week: number[]
	// validity_timeframe: {
	// 	duration: string
	// 	interval: string
	// }
	total: number
}

interface LoyaltyTiersExpirationBalance {
	expiration_date:
		| LoyaltyTiersExpirationBalanceExpirationDateBalanceDrop
		| LoyaltyTiersExpirationBalanceExpirationDateCustom
	qualification_type: 'BALANCE'
	start_date: {
		type: 'IMMEDIATE'
	}
}

interface LoyaltyTiersExpirationPointsInPeriod {
	expiration_date: {
		type: 'END_OF_NEXT_PERIOD' | 'END_OF_PERIOD'
		extend: string
	}
	qualification_period: 'HALF_YEAR' | 'MONTH' | 'QUARTER' | 'YEAR'
	qualification_type: 'POINTS_IN_PERIOD'
	start_date: {
		type: 'IMMEDIATE' | 'NEXT_PERIOD'
	}
}

interface LoyaltyTiersExpirationBalanceExpirationDateBalanceDrop {
	type: 'BALANCE_DROP'
}
interface LoyaltyTiersExpirationBalanceExpirationDateCustom {
	type: 'CUSTOM'
	extend: string
	rounding:
		| LoyaltyTiersExpirationBalanceExpirationDateRoundingDefaultOptions
		| LoyaltyTiersExpirationBalanceExpirationDateRoundingCustom
}

interface LoyaltyTiersExpirationBalanceExpirationDateRoundingDefaultOptions {
	type: 'HALF_YEAR' | 'MONTH' | 'QUARTER' | 'YEAR'
	strategy: 'END'
}
interface LoyaltyTiersExpirationBalanceExpirationDateRoundingCustom {
	type: 'CUSTOM'
	strategy: 'END'
	unit: 'MONTH'
	value: number
}

export interface CampaignsQualificationsBody {
	customer?: CustomerRequest
	order?: Pick<OrdersGetResponse, 'id' | 'source_id' | 'items'>
}

export interface CampaignsQualificationsParams {
	audienceRulesOnly?: boolean
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
	limit?: number
}

export interface CampaignsQualificationsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: CampaignResponse[]
	id?: string
	created_at?: string
}

export type CampaignsCreateCampaign =
	| CreateCampaignDiscountVoucher
	| CreateCampaignLoyalty
	| CreateCampaignGift
	| CreateCampaignPromotion
	| CreateCampaignReferral

interface CreateCampaignDiscountVoucher {
	name: string
	campaign_type: 'DISCOUNT_COUPONS'
	type: 'AUTO_UPDATE' | 'STATIC'
	join_once: boolean
	use_voucher_metadata_schema: boolean
	vouchers_count: number
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	category_id: string
	category: string
	metadata: Record<string, any>
	voucher: CampaignVoucherObjectDiscount
}

interface CreateCampaignLoyalty {
	name: string
	campaign_type: 'LOYALTY_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	auto_join: boolean
	join_once: boolean
	use_voucher_metadata_schema: boolean
	vouchers_count: number
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	category_id: string
	category: string
	metadata: Record<string, any>
	voucher: Omit<CampaignVoucherObjectLoyaltyCard, 'is_referral_code'>
}

interface CreateCampaignGift {
	name: string
	campaign_type: 'GIFT_VOUCHERS'
	type: 'AUTO_UPDATE' | 'STATIC'
	join_once: boolean
	use_voucher_metadata_schema: boolean
	vouchers_count: number
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	category_id: string
	category: string
	metadata: Record<string, any>
	voucher: CampaignVoucherObjectGiftCard
}

interface CreateCampaignPromotion {
	name: string
	campaign_type: 'PROMOTION'
	type: 'AUTO_UPDATE' | 'STATIC'
	join_once: boolean
	use_voucher_metadata_schema: boolean
	vouchers_count: number
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	category_id: string
	category: string
	metadata: Record<string, any>
	promotion: AddPromotionTierToCampaign
	// metadata: Record<string, any>
	// active: boolean
	// start_date: string
	// expiration_date: string
	// validity_day_of_week: number[]
	// validity_timeframe: {
	// 	duration: string
	// 	interval: string
	// }
	// validation_rules: {
	// 	type: string
	// }[]
	// category: string
	// category_id: string
}

interface CreateCampaignReferral {
	name: string
	campaign_type: 'REFERRAL_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	join_once: boolean
	use_voucher_metadata_schema: boolean
	vouchers_count: number
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	category_id: string
	category: string
	metadata: Record<string, any>
	referral_program: {
		conversion_event_type: 'redemption' | 'custom_event'
		custom_event: {
			id: string
			name: string
		}
		referee_reward: {
			related_object_parent: {
				id: string
				name: string
				object: 'CAMPAIGN'
			}
			type: 'LOYALTY_CARD' | 'GIFT_VOUCHER'
			amount: string
		}
	}
	voucher:
		| CampaignVoucherObjectDiscount
		| CampaignVoucherObjectGiftCard
		| Omit<CampaignVoucherObjectLoyaltyCard, 'is_referral_code'>
}

export type CampaignsUpdateCampaign = Pick<
	CampaignResponse,
	| 'type'
	| 'activity_duration_after_publishing'
	| 'auto_join'
	| 'category'
	| 'category_id'
	| 'expiration_date'
	| 'join_once'
	| 'metadata'
	| 'start_date'
	| 'validity_day_of_week'
	| 'validity_timeframe'
>

export interface CampaignsDeleteParams {
	force?: boolean
}

export type CampaignsAddVoucherBody = Pick<
	Partial<VouchersImport>,
	'code_config' | 'category' | 'redemption' | 'metadata' | 'additional_info'
>

export interface CampaignsAddVoucherParams {
	vouchers_count?: number
}

export type CampaignsAddCertainVoucherParams = Pick<
	Partial<VouchersImport>,
	'category' | 'redemption' | 'metadata' | 'additional_info'
>

export type CampaignsAddVoucherResponse =
	| (Pick<
			VouchersResponse,
			| 'code'
			| 'object'
			| 'campaign'
			| 'category'
			| 'created_at'
			| 'discount'
			| 'gift'
			| 'start_date'
			| 'expiration_date'
			| 'publish'
			| 'redemption'
			| 'active'
			| 'additional_info'
			| 'metadata'
			| 'assets'
	  > & { type: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER' | 'LOYALTY_CARD' })
	| AsyncActionCreateResponse

export type CampaignsAddCertainVoucherResponse = CampaignsAddVoucherResponse

export interface CampaignsImportVouchers {
	active: boolean
	additional_info: string
	category: string
	category_id: string
	code: string
	gift: {
		amount: number
	}
	loyalty_card: {
		points: number
	}
	metadata: Record<string, any>
	redemption: {
		quantity: number
	}
}

export interface CampaignsListParams {
	campaign_type?:
		| 'DISCOUNT_COUPONS'
		| 'PROMOTION'
		| 'GIFT_VOUCHERS'
		| 'REFERRAL_PROGRAM'
		| 'LOYALTY_PROGRAM'
		| 'LUCKY_DRAW'
	expand?: 'category'
	limit?: number
	order?: '-created_at' | '-updated_at' | 'created_at' | 'updated_at'
	page?: number
	filters?: {
		junction?: string
		[filter_condition: string]: any
	}
}

export interface CampaignsListResponse {
	object: 'list'
	total: number
	data_ref: 'campaigns'
	campaigns: CampaignResponse[]
}

export type CampaignsVouchersImportResponse = {
	async_action_id: string
}

export type CampaignsCreateCampaignResponse = CampaignResponse

export type CampaignsUpdateCampaignResponse = CampaignResponse
export type CampaignsGetCampaignResponse = CampaignResponse

export interface CampaignVoucherObjectDiscount {
	type: 'DISCOUNT_VOUCHER'
	discount:
		| VoucherObjectDiscountAmount
		| VoucherObjectDiscountPercentage
		| VoucherObjectDiscountFixed
		| VoucherObjectDiscountUnitOne
		| VoucherObjectDiscountUnitMultiple
		| VoucherObjectDiscountShipping
	redemption: {
		quantity: number
	}
	code_config: {
		length: string
		charset: string
		prefix: string
		postfix: string
		pattern: string
	}
	is_referral_code: boolean
}

export interface CampaignVoucherObjectGiftCard {
	type: 'GIFT_VOUCHER'
	gift: {
		amount: number
		effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	}
	redemption: {
		quantity: number
	}
	code_config: {
		length: string
		charset: string
		prefix: string
		postfix: string
		pattern: string
	}
	is_referral_code: boolean
}

export interface CampaignVoucherObjectLoyaltyCard {
	type: 'LOYALTY_CARD'
	loyalty_card: {
		points: number
		expiration_rules: {
			period_type: 'MONTH'
			period_value: number
			rounding_type: 'END_OF_MONTH' | 'END_OF_QUARTER' | 'END_OF_HALF_YEAR' | 'END_OF_YEAR' | 'PARTICULAR_MONTH'
		}
	}
	redemption: {
		quantity: number
	}
	code_config: {
		length: string
		charset: string
		prefix: string
		postfix: string
		pattern: string
	}
	is_referral_code: boolean
}

export type CampaignsDeleteCampaignResponse = AsyncActionCreateResponse
