import { OrdersCreateResponse, OrdersItem } from './Orders'
import { ProductsCreateResponse, ProductsCreateSkuResponse } from './Products'

import { SimpleCustomer } from './Customers'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'
import {
	VouchersExportTransactionsRequestBody,
	VouchersExportTransactionsResponseBody,
	VouchersResponse,
} from './Vouchers'
import { Reward, RewardAssignment } from './Rewards'
import { Category } from './Categories'

// Legacy code
interface LoyaltiesVoucher {
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
	type?: string
	is_referral_code?: boolean
	loyalty_card?: {
		points: number
		balance: number
	}
	redemption?: {
		quantity?: number
	}
}

export interface LoyaltiesListParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListResponse {
	object: 'list'
	total: number
	data_ref: 'campaigns'
	campaigns?: LoyaltiesCreateCampaignResponse[]
}

export interface LoyaltiesCreateCampaign {
	name: string
	start_date?: string
	expiration_date?: string
	type?: 'AUTO_UPDATE' | 'STATIC'
	vouchers_count?: number
	voucher: {
		type: 'LOYALTY_CARD'
		redemption?: {
			quantity: number
		}
		loyalty_card: {
			points: number
			balance?: number
		}
		code_config?: {
			length?: number
			charset?: string
			pattern?: string
			prefix?: string
			suffix?: string
		}
	}
	metadata?: Record<string, any>
}

export interface LoyaltiesCreateCampaignResponse {
	id: string
	name: string
	campaign_type?: 'LOYALTY_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	category?: string
	auto_join?: boolean
	join_once?: boolean
	description?: string
	start_date?: string
	validation_rules_assignments?: {
		data?: ValidationRulesCreateAssignmentResponse[]
		object: 'list'
		total: number
		data_ref: 'data'
	}
	expiration_date?: string
	activity_duration_after_publishing?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	metadata?: Record<string, any>
	created_at: string
	vouchers_generation_status: 'IN_PROGRESS' | 'DONE' | 'FAILED' | 'DRAFT'
	active: boolean
	voucher?: LoyaltiesVoucher
	referral_program?: boolean
	use_voucher_metadata_schema?: boolean
	protected?: boolean
	vouchers_count?: number
	object: 'campaign'
}

export type LoyaltiesGetCampaignResponse = LoyaltiesCreateCampaignResponse

export interface LoyaltiesUpdateCampaign {
	id: string
	start_date?: string
	expiration_date?: string
	metadata?: Record<string, any>
	description?: string
	type?: 'AUTO_UPDATE' | 'STATIC'
}

export type LoyaltiesUpdateCampaignResponse = LoyaltiesCreateCampaignResponse

export interface LoyaltiesDeleteCampaignParams {
	force?: boolean
}

export interface LoyaltiesListRewardAssignmentsParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListRewardAssignmentsResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: LoyaltiesCreateRewardAssignmentResponse[]
}

export interface LoyaltiesCreateRewardAssignments {
	reward: string
	parameters: {
		loyalty: {
			points: number
		}
	}
}

export interface LoyaltiesCreateRewardAssignmentResponse {
	id: string
	reward_id: string
	related_object_id?: string
	related_object_type?: string
	parameters?: {
		loyalty: {
			points: number
		}
	}
	created_at: string
	updated_at?: string
	object: 'reward_assignment'
}

export interface LoyaltiesUpdateRewardAssignment {
	id: string
	parameters: {
		loyalty: {
			points: number
		}
	}
}

export type LoyaltiesUpdateRewardAssignmentResponse = LoyaltiesCreateRewardAssignmentResponse

export interface LoyaltiesListEarningRulesParams {
	limit?: number
	page?: number
}

export interface LoyaltyFixed {
	type: 'FIXED'
	points: number
}

export interface LoyaltyProportional {
	type: 'PROPORTIONAL'
	calculation_type?:
		| 'ORDER_AMOUNT'
		| 'ORDER_TOTAL_AMOUNT'
		| 'ORDER_METADATA'
		| 'ORDER_ITEMS_QUANTITY'
		| 'ORDER_ITEMS_AMOUNT'
		| 'ORDER_ITEMS_SUBTOTAL_AMOUNT'
		| 'CUSTOMER_METADATA'
		| 'CUSTOM_EVENT_METADATA'
	order?: {
		amount: {
			every: number
			points: number
		}
	}
}

export interface LoyaltiesEarningRulesResponse {
	id: string
	created_at: string
	updated_at?: string
	validation_rule_id?: string
	loyalty: LoyaltyFixed | LoyaltyProportional
	segment?: {
		id: string
	}
	event: 'customer.segment.entered' | 'order.paid' | string
	source?: {
		banner?: string
		object_id?: string
		object_type?: string
	}
	object: 'earning_rule'
	automation_id: string
}
export interface LoyaltiesListEarningRulesResponse {
	object: 'list'
	total: number
	data_ref: string
	data: LoyaltiesEarningRulesResponse[]
}

export interface LoyaltiesCreateEarningRule {
	event: 'order.paid' | 'customer.segment.entered' | string
	validation_rule_id?: string
	loyalty: LoyaltyProportional | LoyaltyFixed
	source?: { banner?: string }
	custom_event?: { schema_id?: string }
	segment?: { id?: string }
}

export type LoyaltiesCreateEarningRuleResponse = LoyaltiesEarningRulesResponse

export interface LoyaltiesUpdateEarningRule {
	id: string
	validation_rule_id?: string
	source?: {
		banner: string
	}
	loyalty?: {
		points: number
	}
}

export type LoyaltiesUpdateEarningRuleResponse = LoyaltiesEarningRulesResponse

export interface LoyaltiesListMembersParams {
	limit?: number
	page?: number
	created_at?: {
		before?: string
		after?: string
	}
	updated_at?: {
		before?: string
		after?: string
	}
}

export interface LoyaltiesVoucherResponse {
	id: string
	code: string
	campaign: string
	campaign_id: string
	category?: string
	type: 'LOYALTY_CARD'
	loyalty_card: {
		points: number
		balance: number
	}
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	publish?: {
		count?: number
		entries?: string[]
	}
	redemption?: {
		quantity?: number
		redeemed_points?: number
		redeemed_quantity?: number
		redemption_entries?: string[]
	}
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	is_referral_code?: boolean
	holder_id?: string
	updated_at?: string
}

export interface LoyaltiesListMembersResponse {
	object: 'list'
	total: number
	data_ref: 'vouchers'
	vouchers: LoyaltiesVoucherResponse[]
}

export interface LoyaltiesCreateMember {
	voucher?: string
	channel?: string
	customer: {
		id?: string
		name?: string
		email?: string
		metadata?: Record<string, any>
		description?: string
		source_id?: string
	}
	metadata?: Record<string, any>
}

export type LoyaltiesCreateMemberResponse = LoyaltiesVoucherResponse

export type LoyaltiesGetMemberResponse = LoyaltiesCreateMemberResponse

export interface LoyaltiesGetMemberActivitiesResponse {
	object: 'list'
	data_ref: 'activities'
	total: number
	activities: {
		id: string
		type: string
		object: string
		created_at: string
		data: any
	}[]
}

export interface LoyaltiesAddPoints {
	points: number
}

export interface LoyaltiesAddPointsResponse {
	points: number
	total: number
	balance: number
	type: string
	object: 'balance'
	related_object?: {
		type?: string
		id?: string
	}
}

export interface LoyaltiesRedeemRewardParams {
	reward: {
		id: string
	}
	order?: {
		id?: string
		source_id?: string
		amount: number
		items?: OrdersItem[]
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

interface CoinReward {
	assignment_id: string
	loyalty_tier_id: string
	id: string
	name: string
	created_at: string
	updated_at?: string
	parameters: {
		automation_id?: string
		coin: {
			exchange_ratio: number
			points_ratio: number
		}
	}
	type: 'COIN'
	object: 'reward'
}

interface MaterialReward {
	assignment_id: string
	loyalty_tier_id: string
	product: ProductsCreateResponse & ProductsCreateSkuResponse
	id: string
	name: string
	created_at: string
	updated_at?: string
	parameters: {
		automation_id?: string
		product?: {
			id: string
		}
	}
	type: 'MATERIAL'
	object: 'reward'
}

interface CampaignReward {
	assignment_id: string
	loyalty_tier_id: string
	voucher: VouchersResponse
	id: string
	name: string
	created_at: string
	updated_at?: string
	parameters: {
		automation_id?: string
		campaign?: {
			id: string
		}
	}
	type: 'CAMPAIGN'
	object: 'reward'
}

export interface LoyaltiesRedeemRewardResponse {
	id: string
	object: 'redemption'
	date: string
	customer_id: string
	amount: number
	order?: Omit<OrdersCreateResponse, 'customer'> & {
		total_discount_amount: number
		total_amount: number
		customer: {
			id: string
			object: 'customer'
			referrals: {
				campaigns: any[]
				total: number
			}
		}
	}
	customer: SimpleCustomer
	reward: MaterialReward | CampaignReward | CoinReward
	result: 'SUCCESS' | 'FAILURE'
	tracking_id?: string
	voucher: {
		id: string
		code?: string
		campaign?: string
		campaign_id?: string
		category?: string
		type: 'LOYALTY_CARD'
		loyalty_card?: {
			points: number
			balance: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: {
			interval?: string
			duration?: string
		}
		validity_day_of_week?: number[]
		publish: {
			object: 'list'
			count: number
			url: string
		}
		redemption: {
			object: 'list'
			quantity: number
			redeemed_quantity: number
			url: string
			redeemed_points: number
		}
		active: true
		additional_info?: string
		assets?: {
			qr?: {
				id: string
				url: string
			}
			barcode?: {
				id: string
				url: string
			}
		}
		is_referral_code: boolean
		referrer_id: string
		holder_id: string
		created_at: string
		updated_at: string
		holder: {
			id: string
			source_id: string
			metadata?: Record<string, any>
			object: 'customer'
		}
		object?: 'voucher'
		validation_rules_assignments: {
			object: 'list'
			total: number
			data_ref: 'data'
			data?: {
				id: string
				rule_id?: string
				related_object_id?: string
				related_object_type?: string
				created_at: string
				object: 'validation_rules_assignment'
			}[]
		}
	}
}

export interface LoyaltyPointsTransfer {
	code: string
	points: number
}

// 0-level types

export type LoyaltiesTransferPointsResponseBody = {
	id: string
	code: string
	campaign: string
	campaign_id: string
	category: string | null
	category_id: string | null
	categories: Category[]
	type: 'LOYALTY_CARD'
	loyalty_card: {
		points: number
		balance: number
		next_expiration_date?: string
		next_expiration_points?: number
	}
	start_date: string | null
	expiration_date: string | null
	validity_timeframe: {
		interval?: string
		duration?: string
	} | null
	validity_day_of_week: number[] | null
	publish?: {
		object: 'list'
		count?: number
		entries?: string[]
		url?: string
	}
	redemption?: {
		quantity: number | null
		redeemed_points?: number
		redeemed_quantity?: number
		redemption_entries?: string[]
		object?: 'list'
		url?: string
	}
	active: boolean
	additional_info: string | null
	metadata: Record<string, unknown>
	is_referral_code: boolean
	holder_id?: string
	updated_at?: string
	created_at: string
}

export type LoyaltiesTransferPointsRequestBody = LoyaltiesTransferPoints[]

export interface LoyaltiesListMemberRewardsRequestQuery {
	affordable_only?: boolean
	limit?: number
	page?: number
}

export interface LoyaltiesListMemberRewardsResponseBody {
	object: 'list'
	data_ref: 'data'
	data: { reward: Reward; assignment: RewardAssignment; object: 'loyalty_reward' }[]
	total: number
}

export interface LoyaltiesGetPointsExpirationRequestQuery {
	limit?: number
	page?: number
}

export interface LoyaltiesGetPointsExpirationResponseBody {
	object: 'list'
	data_ref: 'data'
	data: {
		id: string
		voucher_id: string
		campaign_id: string
		bucket: {
			total_points: number
		}
		created_at: string
		status: string
		expires_at: string
		updated_at?: string
		object: 'loyalty_points_bucket'
	}[]
	total: number
}

export interface LoyaltiesListCardTransactionsRequestQuery {
	limit?: number
	page?: number
}

export interface LoyaltiesListCardTransactionsResponseBody {
	object: 'list'
	data_ref: 'data'
	data: LoyaltyCardTransaction[]
	has_more: boolean
}

export type LoyaltiesExportCardTransactionsRequestBody = VouchersExportTransactionsRequestBody

export interface LoyaltiesAddOrRemoveCardBalanceRequestBody {
	points: number
	expiration_date?: string //ISO-8601
	expiration_type?: PointsExpirationTypes
	reason?: string
	source_id?: string
}

export interface LoyaltiesAddOrRemoveCardBalanceResponseBody {
	points?: number
	amount?: number
	total: number
	balance: number
	type: 'LOYALTY_CARD' | 'GIFT_VOUCHER'
	object: 'balance'
	related_object: {
		type: 'voucher'
		id: string
	}
	operation_type?: 'MANUAL' | 'AUTOMATIC'
}

export type LoyaltiesCreateTiersRequestBody = (LoyaltyTierBase & { metadata?: Record<string, unknown> })[]

export type LoyaltiesCreateTiersResponseBody = LoyaltyTier[]

export type LoyaltiesGetRewardDetailsResponseBody = Reward

export interface LoyaltiesListTiersRequestQuery {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface LoyaltiesListLoyaltyTierEarningRulesRequestQuery {
	limit?: number
	page?: number
}

export type LoyaltiesGetTierResponseBody = LoyaltyTier

export interface LoyaltiesListTiersResponseBody {
	object: 'list'
	data_ref: 'data'
	data: LoyaltyTier[]
	total: number
}

export interface LoyaltiesListMemberLoyaltyTiersResponseBody {
	object: 'list'
	data_ref: 'data'
	data: LoyaltyTier[]
	total: number
}

export interface LoyaltiesListMemberRewardsRequestQuery {
	affordable_only?: boolean
	limit?: number
	page?: number
}

export interface LoyaltiesListMemberRewardsResponseBody {
	object: 'list'
	data_ref: 'data'
	data: { reward: Reward; assignment: RewardAssignment; object: 'loyalty_reward' }[]
	total: number
}

export interface LoyaltiesGetPointsExpirationRequestQuery {
	limit?: number
	page?: number
}

export interface LoyaltiesGetPointsExpirationResponseBody {
	object: 'list'
	data_ref: 'data'
	data: {
		id: string
		voucher_id: string
		campaign_id: string
		bucket: {
			total_points: number
		}
		created_at: string
		status: string
		expires_at: string
		updated_at?: string
		object: 'loyalty_points_bucket'
	}[]
	total: number
}

export interface LoyaltiesListCardTransactionsRequestQuery {
	limit?: number
	page?: number
}

export interface LoyaltiesListCardTransactionsResponseBody {
	object: 'list'
	data_ref: 'data'
	data: LoyaltyCardTransaction[]
	has_more: boolean
}

export type LoyaltiesExportCardTransactionsResponseBody = VouchersExportTransactionsResponseBody

export interface LoyaltiesAddOrRemoveCardBalanceRequestBody {
	points: number
	expiration_date?: string //ISO-8601
	expiration_type?: PointsExpirationTypes
	reason?: string
	source_id?: string
}

export interface LoyaltiesAddOrRemoveCardBalanceResponseBody {
	points?: number
	amount?: number
	total: number
	balance: number
	type: 'LOYALTY_CARD' | 'GIFT_VOUCHER'
	object: 'balance'
	related_object: {
		type: 'voucher'
		id: string
	}
	operation_type?: 'MANUAL' | 'AUTOMATIC'
}

export type LoyaltiesGetEarningRuleResponseBody = EarningRule

export type LoyaltiesEnableEarningRulesResponseBody = EarningRuleBase & {
	updated_at: string | null
	active: true
}

export type LoyaltiesDisableEarningRulesResponseBody = EarningRuleBase & {
	updated_at: string | null
	active: false
}

export type LoyaltiesListLoyaltyTierEarningRulesResponseBody = {
	object: 'list'
	data_ref: 'data'
	data: EarningRule[]
	total: number
}

export type LoyaltiesGetRewardAssignmentResponseBody = RewardAssignment

export interface LoyaltiesListLoyaltyTierRewardsResponseBody {
	object: 'list'
	data_ref: 'data'
	total: number
	data: {
		reward: {
			id: string
			name: string
			stock: number | null
			redeemed: number | null
			attributes?: {
				image_url?: string
				description?: string
			}
			metadata: Record<string, undefined>
			created_at: string
			updated_at: string | null
			object: 'reward'
		} & LoyaltyTierRewardItemParameters
		assignment: RewardAssignment
		object: 'loyalty_tier_reward'
	}[]
}

// domain types

export interface LoyaltyTierBase {
	name: string
	earning_rules?: Record<string, MappingMultiply | MappingFixed>
	rewards?: Record<string, MappingMultiply | MappingFixed>
	points: {
		from?: number
		to?: number
	}
}

export type LoyaltyTier = LoyaltyTierBase & {
	id: string
	campaign_id: string
	metadata: Record<string, unknown> | null
	created_at: string
	updated_at?: string | null
	config: {
		points: {
			from?: number
			to?: number
		}
	}
	expiration?: {
		customer_id: string
		campaign_id: string
		tier_id: string
		start_date?: string
		expiration_date?: string
		created_at: string
		updated_at?: string
	}
	object: 'loyalty_tier'
}

interface MappingMultiply {
	type: 'MULTIPLY'
	multiplier: number
}

interface MappingFixed {
	type: 'CUSTOM'
	points: number
}

export interface SimpleLoyaltyVoucher {
	id: string
	code: string
	loyalty_card: {
		points: number
		balance: number
		next_expiration_date?: string
		next_expiration_points?: string
	}
	type: 'LOYALTY_CARD'
	campaign: string
	campaign_id: string
	is_referral_code?: boolean
	holder_id?: string
	referrer_id?: string
	created_at?: string
	object: 'voucher'
}

export interface LoyaltiesTransferPoints {
	code: string
	points: number
	reason?: string
	source_id: string
}

export type LoyaltyCardTransactionsFields =
	| 'id'
	| 'campaign_id'
	| 'voucher_id'
	| 'type'
	| 'source_id'
	| 'reason'
	| 'source'
	| 'balance'
	| 'amount'
	| 'related_transaction_id'
	| 'created_at'
	| 'details'

export type LoyaltyCardTransactionsType =
	| 'POINTS_ACCRUAL'
	| 'POINTS_CANCELLATION'
	| 'POINTS_REDEMPTION'
	| 'POINTS_REFUND'
	| 'POINTS_ADDITION'
	| 'POINTS_REMOVAL'
	| 'POINTS_EXPIRATION'
	| 'POINTS_TRANSFER_IN'
	| 'POINTS_TRANSFER_OUT'

export type EarningRule = EarningRuleBase & {
	validation_rule_id: string | null
	updated_at: string | null
	active: boolean
}

export type PointsExpirationTypes = 'PROGRAM_RULES' | 'CUSTOM_DATE' | 'NON_EXPIRING'

export interface LoyaltyCardTransaction {
	id: string
	source_id: string | null
	voucher_id: string
	campaign_id: string
	source: string | null
	reason: string | null
	type: LoyaltyCardTransactionsType
	details: {
		balance: {
			type: 'loyalty_card'
			total: number
			object: 'balance'
			points: number
			balance: number
			related_object: {
				id: string
				type: 'voucher'
			}
		}
		order?: {
			id: string
			source_id: string
		}
		event?: {
			id: string
			type: string
		}
		earning_rule?: {
			id: string
			source: {
				banner: string
			}
		}
		segment?: {
			id: string
			name: string
		}
		loyalty_tier?: {
			id: string
			name: string
		}
		redemption?: {
			id: string
		}
		rollback?: {
			id: string
		}
		reward?: {
			id: string
			name: string
		}
		custom_event?: {
			id: string
			type: string
		}
		event_schema?: {
			id: string
			name: string
		}
		source_voucher?: SimpleLoyaltyVoucher
		destination_voucher?: SimpleLoyaltyVoucher
	}
	related_transaction_id: string | null
	created_at: string
}

export interface SimpleLoyaltyVoucher {
	id: string
	code: string
	loyalty_card: {
		points: number
		balance: number
		next_expiration_date?: string
		next_expiration_points?: string
	}
	type: 'LOYALTY_CARD'
	campaign: string
	campaign_id: string
	is_referral_code?: boolean
	holder_id?: string
	referrer_id?: string
	created_at?: string
	object: 'voucher'
}

export interface LoyaltiesTransferPoints {
	code: string
	points: number
	reason?: string
	source_id: string
}

export interface EarningRuleBase {
	id: string
	created_at: string
	loyalty: EarningRuleFixed | EarningRuleProportional
	event?: EarningRuleEvent
	custom_event?: {
		schema_id: string
	}
	segment?: {
		id: string
	}
	source: {
		banner?: string
		object_id: string
		object_type: 'campaign'
	}
	loyalty_tier?: {
		id: string
	}
	object: 'earning_rule'
	automation_id: string
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		duration: string
		interval: string
	}
	validity_day_of_week?: number[]
	metadata: Record<string, unknown>
}

export type EarningRuleEvent =
	| 'order.paid'
	| 'customer.segment.entered'
	| 'custom_event'
	| 'customer.loyalty.tier.upgraded'
	| 'customer.loyalty.tier.downgraded'
	| 'customer.loyalty.tier.prolonged'
	| 'customer.loyalty.tier.joined'
	| 'customer.loyalty.tier.left'

export interface EarningRuleFixed {
	type: 'FIXED'
	points: number
}

export type EarningRuleProportionalOrder =
	| EarningRuleProportionalOrderAmount
	| EarningRuleProportionalOrderTotalAmount
	| EarningRuleProportionalOrderMetadata

export interface EarningRuleProportionalOrderAmount {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_AMOUNT'
	order: {
		amount: {
			every: number
			points: number
		}
	}
}

export interface EarningRuleProportionalOrderTotalAmount {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_TOTAL_AMOUNT'
	order: {
		total_amount: {
			every: number
			points: number
		}
	}
}

export interface EarningRuleProportionalOrderMetadata {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_METADATA'
	order: {
		metadata: {
			every: number
			points: number
			property: string
		}
	}
}

export type EarningRuleProportional =
	| EarningRuleProportionalOrder
	| EarningRuleProportionalOrderItems
	| EarningRuleProportionalCustomerMetadata
	| EarningRuleProportionalCustomEvent

export type EarningRuleProportionalOrderItems =
	| EarningRuleProportionalOrderItemsQuantity
	| EarningRuleProportionalOrderItemsAmount
	| EarningRuleProportionalOrderItemsSubtotalAmount

export interface EarningRuleProportionalOrderItemsQuantity {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_ITEMS_QUANTITY'
	order_items: {
		quantity: { every: number; points: number; object: `products_collection` | `product` | `sku`; id: string }
	}
}

export interface EarningRuleProportionalOrderItemsAmount {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_ITEMS_AMOUNT'
	order_items: {
		amount: { every: number; points: number; object: `products_collection` | `product` | `sku`; id: string }
	}
}

export interface EarningRuleProportionalOrderItemsSubtotalAmount {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_ITEMS_SUBTOTAL_AMOUNT'
	order_items: {
		subtotal_amount: { every: number; points: number; object: `products_collection` | `product` | `sku`; id: string }
	}
}

export interface EarningRuleProportionalCustomerMetadata {
	type: 'PROPORTIONAL'
	calculation_type: 'CUSTOMER_METADATA'
	customer: {
		metadata: {
			every: number
			points: number
			property: string
		}
	}
}

export interface EarningRuleProportionalCustomEvent {
	type: 'PROPORTIONAL'
	calculation_type: 'CUSTOM_EVENT_METADATA'
	custom_event: {
		metadata: {
			every: number
			points: number
			property: string
		}
	}
}

export type LoyaltyTierRewardItemParameters =
	| LoyaltyTierRewardItemCampaignParameters
	| LoyaltyTierRewardItemCoinParameters
	| LoyaltyTierRewardItemMaterialParameters

export interface LoyaltyTierRewardItemCampaignParameters {
	type: 'CAMPAIGN'
	parameters: {
		campaign: LoyaltyTierRewardItemCampaignDiscountCoupons | LoyaltyTierRewardItemCampaignGiftVouchersAndLoyaltyProgram
	}
}

export interface LoyaltyTierRewardItemCoinParameters {
	type: 'COIN'
	parameters: {
		coin: {
			exchange_ratio: number
			points_ratio: number
		}
	}
}

export interface LoyaltyTierRewardItemMaterialParameters {
	type: 'MATERIAL'
	parameters: {
		product: {
			id: string
			sku_id: string | null
		}
	}
}

export interface LoyaltyTierRewardItemCampaignDiscountCoupons {
	id: string
	type: string
}

export interface LoyaltyTierRewardItemCampaignGiftVouchersAndLoyaltyProgram {
	id: string
	balance: number
	type: string
}
