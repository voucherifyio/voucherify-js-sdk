import {
	VoucherObject,
	VoucherObjectDiscountAmount,
	VoucherObjectDiscountFixed,
	VoucherObjectDiscountPercentage,
	VoucherObjectDiscountShipping,
	VoucherObjectDiscountUnitMultiple,
	VoucherObjectDiscountUnitOne,
	VouchersImport,
} from './Vouchers'

import { CreateCustomer } from './Customers'
import { CreateOrder } from './Orders'
import { AsyncActionCreateResponse } from './AsyncActions'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'

export interface CampaignResponse {
	start_date?: string
	validation_rules_assignments: {
		data?: ValidationRulesCreateAssignmentResponse[]
		object: 'list'
		total: number
		data_ref: 'data'
	}
	activity_duration_after_publishing?: string
	referral_program?: ReferralProgramCustomEventRedemption | ReferralProgramRedemption
	protected?: boolean
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
	description?: string
	id: string
	join_once?: boolean
	loyalty_tiers_expiration: LoyaltyTiersExpirationBalance | LoyaltyTiersExpirationPointsInPeriod
	metadata?: Record<string, any>
	name: string
	object: 'campaign'
	promotion: ListPromotionTiersFromCampaign
	auto_join?: boolean
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	vouchers_generation_status: 'IN_PROGRESS' | 'DONE' | 'FAILED' | 'DRAFT'
	active: boolean
	voucher?: CampaignVoucherObjectDiscount | CampaignVoucherObjectGiftCard | CampaignVoucherObjectLoyaltyCard
	updated_at: string
	use_voucher_metadata_schema?: boolean
	vouchers_count?: number
}

export type LoyaltyTiersExpiration = LoyaltyTiersExpirationBalance | LoyaltyTiersExpirationPointsInPeriod

interface AddPromotionTierToCampaign {
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
	customer?: Partial<CreateCustomer & { id: string }>
	order?: Partial<CreateOrder & { id: string }>
}

export interface CampaignsQualificationsParams {
	audienceRulesOnly?: boolean
	order?:
		| '-campaign'
		| '-category'
		| '-code'
		| '-created_at'
		| '-type'
		| '-updated_at'
		| 'campaign'
		| 'category'
		| 'code'
		| 'created_at'
		| 'type'
		| 'updated_at'
	limit?: number
}

export interface CampaignsQualificationsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: CampaignObjectCampaignsQualification[]
	id?: string
	created_at?: string
	tracking_id?: string
}

interface CampaignObjectCampaignsQualification {
	id: string
	name: string
	campaign_type: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	category?: string
	auto_join?: boolean
	join_once?: boolean
	description?: string
	start_date?: string
	expiration_date?: string
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	metadata?: Record<string, any>
	updated_at?: string
	vouchers_generation_status: 'IN_PROGRESS' | 'DONE' | 'FAILED' | 'DRAFT'
	active: boolean
	voucher?: CampaignVoucherObjectDiscount | CampaignVoucherObjectGiftCard | CampaignVoucherObjectLoyaltyCard
	referral_program?: ReferralProgramCustomEventRedemption | ReferralProgramRedemption
	use_voucher_metadata_schema?: boolean
	protected?: boolean
	vouchers_count?: number
	creation_status?: 'DONE' | 'IN_PROGRESS' | 'FAILED' | 'DRAFT' | 'MODIFYING'
	category_id?: string
	categories?: CategoryObject
}

interface ReferralProgramCustomEventRedemption {
	conversion_event_type: 'custom_event'
	custom_event: {
		id: string
		name: string
	}
	referee_reward?: {
		related_object_parent: {
			id: string
			name: string
			object: 'CAMPAIGN'
		}
		amount: number
		type: 'GIFT_VOUCHER' | 'LOYALTY_CARD'
	}
}
interface ReferralProgramRedemption {
	conversion_event_type: 'redemption'
	referee_reward?: {
		related_object_parent: {
			id: string
			name: string
			object: 'CAMPAIGN'
		}
		amount: number
		type: 'GIFT_VOUCHER' | 'LOYALTY_CARD'
	}
}

export interface CategoryObject {
	//20_obj_category_object
	id: string
	name: string
	hierarchy: number
	created_at: string
	updated_at: string
	object: 'category'
}

export type CampaignsCreateCampaign =
	| CreateCampaignDiscountVoucher
	| CreateCampaignLoyalty
	| CreateCampaignGift
	| CreateCampaignPromotion
	| CreateCampaignReferral

interface CreateCampaignDiscountVoucher {
	auto_join?: boolean
	description?: string
	start_date?: string
	validation_rules_assignments: {
		data?: ValidationRulesCreateAssignmentResponse[]
		object: 'list'
		total: number
		data_ref: 'data'
	}
	activity_duration_after_publishing?: string
	validity_day_of_week?: number[]
	metadata?: Record<string, any>
	created_at: string
	active?: boolean
	vouchers_count?: number
	name: string
	campaign_type: 'DISCOUNT_COUPONS'
	type: 'AUTO_UPDATE' | 'STATIC'
	join_once?: boolean
	use_voucher_metadata_schema?: boolean
	expiration_date?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	category_id?: string
	category?: string
	voucher?: CampaignVoucherObjectDiscount
}

interface CreateCampaignLoyalty {
	description?: string
	start_date?: string
	expiration_date?: string
	activity_duration_after_publishing?: string
	active?: boolean
	use_voucher_metadata_schema?: boolean
	vouchers_count?: number
	name: string
	campaign_type: 'LOYALTY_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	auto_join?: boolean
	join_once?: boolean
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	category_id?: string
	category?: string
	metadata?: Record<string, any>
	voucher?: CampaignVoucherObjectLoyaltyCard
}

interface CreateCampaignGift {
	auto_join?: boolean
	join_once?: boolean
	description?: string
	start_date?: string
	expiration_date?: string
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	metadata?: Record<string, any>
	active: boolean
	use_voucher_metadata_schema?: boolean
	vouchers_count?: number
	name: string
	campaign_type: 'GIFT_VOUCHERS'
	type: 'AUTO_UPDATE' | 'STATIC'
	category_id?: string
	category?: string
	voucher?: CampaignVoucherObjectGiftCard
}

interface CreateCampaignPromotion {
	category?: string
	auto_join?: boolean
	join_once?: boolean
	description?: string
	start_date?: string
	expiration_date?: string
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	active: boolean
	use_voucher_metadata_schema?: boolean
	vouchers_count?: number
	name: string
	campaign_type: 'PROMOTION'
	type: 'AUTO_UPDATE' | 'STATIC'
	category_id?: string
	metadata?: Record<string, any>
	promotion?: Partial<AddPromotionTierToCampaign>
}

interface CreateCampaignReferral {
	auto_join?: boolean
	join_once?: boolean
	description?: string
	start_date?: string
	expiration_date?: string
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	metadata?: Record<string, any>
	active: boolean
	referral_program?: ReferralProgramCustomEventRedemption | ReferralProgramRedemption
	use_voucher_metadata_schema?: boolean
	vouchers_count?: number

	name: string
	campaign_type: 'REFERRAL_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	category_id?: string
	category?: string
	voucher?: CampaignVoucherObjectDiscount | CampaignVoucherObjectGiftCard | CampaignVoucherObjectLoyaltyCard
}

export type CampaignsUpdateCampaign = Partial<
	Pick<
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
		| 'description'
	>
>

export interface CampaignsDeleteParams {
	force?: boolean
}

export interface CampaignsAddVoucherParams {
	vouchers_count?: number
}

export type CampaignsAddCertainVoucherParams = Pick<
	Partial<VouchersImport>,
	'category' | 'redemption' | 'metadata' | 'additional_info'
>

export type CampaignsAddVoucherResponse = Partial<VoucherObject> | AsyncActionCreateResponse

export type CampaignsAddCertainVoucherResponse = CampaignsAddVoucherResponse

export type AddVouchersWithSpecificCodeToCampaign = Partial<Omit<AddVouchersToCampaign, 'code_config'>>
export interface AddVouchersToCampaign {
	category?: string
	category_id?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	metadata?: Record<string, any>
	redemption?: {
		quantity: number
	}
	additional_info?: string
	code_config?: {
		length?: string
		charset?: string
		prefix?: string
		postfix?: string
		pattern?: string
	}
}

export interface CampaignsImportVoucher {
	active?: boolean
	additional_info?: string
	category?: string
	category_id?: string
	code: string
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
	metadata?: Record<string, any>
	redemption?: {
		quantity: number
	}
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
}
export type CampaignsImportVouchers = CampaignsImportVoucher[]

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
	} & Record<string, any>
}

export interface CampaignsListResponse {
	object: 'list'
	total: number
	data_ref: 'campaigns'
	campaigns: Partial<CampaignResponse>[]
}

export type CampaignsVouchersImportResponse = {
	async_action_id: string
}

export type CampaignsCreateCampaignResponse = CampaignResponse

export type CampaignsUpdateCampaignResponse = CampaignResponse
export type CampaignsGetCampaignResponse = CampaignResponse

export interface CampaignVoucherObjectDiscount {
	//2_obj_campaign_object_voucher_object_DISCOUNT
	type: 'DISCOUNT_VOUCHER'
	discount:
		| VoucherObjectDiscountAmount
		| VoucherObjectDiscountPercentage
		| VoucherObjectDiscountFixed
		| VoucherObjectDiscountUnitOne
		| VoucherObjectDiscountUnitMultiple
		| VoucherObjectDiscountShipping
	redemption?: {
		quantity: number
	}
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
	is_referral_code?: boolean
}

export interface CampaignVoucherObjectGiftCard {
	//2_obj_campaign_object_voucher_object_GIFT_CARD
	type: 'GIFT_VOUCHER'
	gift?: {
		amount: number
		effect: 'APPLY_TO_ORDER' | 'APPLY_TO_ITEMS'
	}
	redemption?: {
		quantity: number
	}
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
	is_referral_code?: boolean
}

export interface CampaignVoucherObjectLoyaltyCard {
	//2_obj_campaign_object_voucher_object_LOYALTY_CARD
	type: 'LOYALTY_CARD'
	loyalty_card?: LoyaltyCard
	redemption?: {
		quantity: number
	}
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
	is_referral_code?: boolean
}

export interface LoyaltyCard {
	points: number
	balance?: number
	expiration_rules?: {
		period_type?: string
		period_value?: number
		rounding_type?: string
	}
}

export type CampaignsDeleteCampaignResponse = AsyncActionCreateResponse

export type CampaignVoucherObject = Partial<VoucherObject>
