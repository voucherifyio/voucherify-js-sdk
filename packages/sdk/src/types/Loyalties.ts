import { OrdersCreateResponse, OrdersItem } from './Orders'
import { ProductsCreateResponse, ProductsCreateSkuResponse } from './Products'

import { SimpleCustomer } from './Customers'
import { VouchersResponse } from './Vouchers'
import { CampaignVoucherObjectLoyaltyCard, CategoryObject, LoyaltyCard, LoyaltyTiersExpiration } from './Campaigns'
import { AsyncActionCreateResponse } from './AsyncActions'

export type DeleteLoyaltyCampaign = AsyncActionCreateResponse

export interface LoyaltiesListParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface LoyaltiesListResponse {
	object: 'list'
	data_ref: 'campaigns'
	campaigns?: CampaignObjectNoExtendedCategories[]
	total: number
}

export interface LoyaltyCampaignObject {
	id: string
	name: string
	description: string
	campaign_type: 'LOYALTY_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	voucher: CampaignVoucherObjectLoyaltyCard
	auto_join: boolean
	join_once: boolean
	use_voucher_metadata_schema: boolean
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	vouchers_count: number
	active: boolean
	metadata: Record<string, any>
	created_at: string
	updated_at: string
	creation_status: 'DONE' | 'IN_PROGRESS' | 'FAILED' | 'DRAFT' | 'MODIFYING'
	vouchers_generation_status: 'DONE' | 'IN_PROGRESS' | 'FAILED' | 'DRAFT'
	protected: boolean
	category_id: string
	categories: CategoryObject
	loyalty_tiers_expiration: LoyaltyTiersExpirationBalance | LoyaltyTiersExpirationPointsInPeriod
	object: 'campaign'
}

export interface CampaignObjectNoExtendedCategories {
	id: string
	name: string
	description: string
	campaign_type: 'LOYALTY_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	voucher: CampaignVoucherObjectLoyaltyCard
	auto_join: boolean
	join_once: boolean
	use_voucher_metadata_schema: boolean
	start_date: string
	expiration_date: string
	validity_timeframe: {
		interval: string
		duration: string
	}
	validity_day_of_week: number[]
	activity_duration_after_publishing: string
	vouchers_count: number
	active: boolean
	metadata: Record<string, any>
	created_at: string
	updated_at: string
	creation_status: 'DONE' | 'IN_PROGRESS' | 'FAILED' | 'DRAFT' | 'MODIFYING'
	vouchers_generation_status: 'DONE' | 'IN_PROGRESS' | 'FAILED' | 'DRAFT'
	protected: boolean
	category_id: string
	categories: CategoryObject[]
	loyalty_tiers_expiration: LoyaltyTiersExpirationBalance | LoyaltyTiersExpirationPointsInPeriod
	object: 'campaign'
}
interface LoyaltyTiersExpirationPointsInPeriod {
	qualification_type: 'POINTS_IN_PERIOD'
	qualification_period: 'MONTH' | 'QUARTER' | 'HALF_YEAR' | 'YEAR'
	start_date: { type: 'IMMEDIATE' | 'NEXT_PERIOD' }
	expiration_date: {
		type: 'END_OF_PERIOD' | 'END_OF_NEXT_PERIOD'
		extend: string
	}
}

interface LoyaltyTiersExpirationBalance {
	qualification_type: 'BALANCE'
	start_date: { type: 'IMMEDIATE' }
	expiration_date:
		| LoyaltyTiersExpirationBalanceExpirationDateBalanceDrop
		| LoyaltyTiersExpirationBalanceExpirationDateCustom
}

interface LoyaltyTiersExpirationBalanceExpirationDateBalanceDrop {
	type: 'BALANCE_DROP'
}

interface LoyaltyTiersExpirationBalanceExpirationDateCustom {
	type: 'CUSTOM'
	extend: string
	rounding:
		| LoyaltyTiersExpirationExpirationDateRoundingDefaultOptions
		| LoyaltyTiersExpirationExpirationDateRoundingCustom
}

interface LoyaltyTiersExpirationExpirationDateRoundingDefaultOptions {
	type: 'MONTH' | 'QUARTER' | 'HALF_YEAR' | 'YEAR'
	strategy: 'END'
}

interface LoyaltyTiersExpirationExpirationDateRoundingCustom {
	type: 'CUSTOM'
	strategy: 'END'
	unit: 'MONTH'
	value: number
}

export interface LoyaltiesCreateCampaign {
	name: string
	description?: string
	type: 'AUTO_UPDATE' | 'STATIC'
	auto_join?: boolean
	join_once?: boolean
	use_voucher_metadata_schema?: boolean
	vouchers_count?: number
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		interval?: string
		duration?: string
	}
	validity_day_of_week?: number[]
	activity_duration_after_publishing?: string
	loyalty_tiers_expiration: LoyaltyTiersExpirationBalance | LoyaltyTiersExpirationPointsInPeriod
	category_id: string
	category?: string
	metadata?: Record<string, any>
	voucher?: Omit<CampaignVoucherObjectLoyaltyCard, 'is_referral_code'>
}

export type LoyaltiesGetCampaignResponse = LoyaltyCampaignObject

export type LoyaltiesUpdateCampaign = Partial<
	Omit<
		LoyaltiesCreateCampaign,
		'use_voucher_metadata_schema' | 'name' | 'loyalty_tiers_expiration' | 'voucher' | 'vouchers_count'
	> & {
		loyalty_card: LoyaltyCard
		loyalty_tiers_expiration: LoyaltyTiersExpiration
	}
>

export type LoyaltiesUpdateCampaignResponse = LoyaltyCampaignObject

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
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
	page?: number
}

export interface LoyaltyFixed {
	type: 'FIXED'
	points: number
}

export interface LoyaltyProportional {
	type: 'PROPORTIONAL'
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
export interface LoyaltiesListEarningRules {
	object: 'list'
	total: number
	data_ref: 'data'
	data: EarningRuleObject[]
}

//8_obj_earning_rule_object
type EarningRuleObject =
	| EarningRuleObjectOrderPaid
	| EarningRuleObjectCustomEvent
	| EarningRuleObjectEnteredSegment
	| EarningRuleObjectTier

type CreateEarningRuleObject =
	| EarningRequestRuleObjectOrderPaid
	| EarningRequestRuleObjectCustomEvent
	| EarningRequestRuleObjectEnteredSegment
	| EarningRequestRuleObjectTier

interface EarningRuleObjectOrderPaid {
	//8_obj_earning_rule_object_order_paid
	id: string
	created_at: string
	updated_at: string
	validation_rule_id: string
	loyalty: ObjectFixed | ObjectCalculatePointsProportionallyOrderPaid
	event: 'order.paid'
	source: {
		banner: string
		object_id: string
		object_type: 'campaign'
	}
	active: boolean
	start_date: string
	expiration_date: string
	validity_timeframe: {
		duration: string
		interval: string
	}
	validity_day_of_week: number[]
	object: 'earning_rule'
	automation_id: string
	metadata: Record<string, any>
}

type EarningRequestRuleObjectOrderPaid = Omit<
	EarningRuleObjectOrderPaid,
	'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at'
> & { source: { banner: string } }

interface EarningRuleObjectCustomEvent {
	id: string
	created_at: string
	updated_at: string
	validation_rule_id: string
	loyalty:
		| ObjectFixed
		| ObjectCalculatePointsProportionallyCustomEventMetadata
		| ObjectCalculatePointsProportionallyCustomerMetadata
	custom_event: { schema_id: string }
	event: 'custom_event_defined_in_EVENT_SCHEMA'
	source: {
		banner: string
		object_id: string
		object_type: 'campaign'
	}
	active: boolean
	start_date: string
	expiration_date: string
	validity_timeframe: {
		duration: string
		interval: string
	}
	validity_day_of_week: number[]
	object: 'earning_rule'
	automation_id: string
	metadata: Record<string, any>
}

type EarningRequestRuleObjectCustomEvent = Omit<
	EarningRuleObjectCustomEvent,
	'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at'
> & { source: { banner: string } }

interface EarningRuleObjectEnteredSegment {
	//8_obj_earning_rule_object_entered_segment
	id: string
	created_at: string
	updated_at: string
	validation_rule_id: string
	loyalty: ObjectFixed | ObjectCalculatePointsProportionallyCustomerMetadata
	segment: {
		id: string
	}
	event: 'customer.segment.entered'
	source: {
		banner: string
		object_id: string
		object_type: 'campaign'
	}
	active: boolean
	start_date: string
	expiration_date: string
	validity_timeframe: {
		duration: string
		interval: string
	}
	validity_day_of_week: number[]
	object: 'earning_rule'
	automation_id: string
	metadata: Record<string, any>
}

type EarningRequestRuleObjectEnteredSegment = Omit<
	EarningRuleObjectEnteredSegment,
	'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at'
> & { source: { banner: string } }

interface EarningRuleObjectTier {
	//8_obj_earning_rule_object_tier
	id: string
	created_at: string
	updated_at: string
	validation_rule_id: string
	loyalty: ObjectFixed | ObjectCalculatePointsProportionallyCustomerMetadata
	event:
		| 'customer.loyalty.tier.joined'
		| 'customer.loyalty.tier.left'
		| 'customer.loyalty.tier.upgraded'
		| 'customer.loyalty.tier.downgraded'
		| 'customer.loyalty.tier.prolonged'
	loyalty_tier: {
		id: string
	}
	source: {
		banner: string
		object_id: string
		object_type: 'campaign'
	}
	active: boolean
	start_date: string
	expiration_date: string
	validity_timeframe: {
		duration: string
		interval: string
	}
	validity_day_of_week: number[]
	object: 'earning_rule'
	automation_id: string
	metadata: Record<string, any>
}

type EarningRequestRuleObjectTier = Omit<
	EarningRuleObjectTier,
	'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at'
> & { source: { banner: string } }

interface ObjectFixed {
	//8_obj_fixed_points
	points: number
	type: 'FIXED'
}

type ObjectCalculatePointsProportionallyOrderPaid =
	//8_obj_calculate_points_proportionally_order_paid
	| ObjectCalculatePointsProportionallyOrderAmounts
	| ObjectCalculatePointsProportionallyOrderTotalAmounts
	| ObjectCalculatePointsProportionallyOrderMetadata
	| ObjectCalculatePointsProportionallyItemAmount
	| ObjectCalculatePointsProportionallyItemsSubtotalAmount
	| ObjectCalculatePointsProportionallyItemsQuantity
	| ObjectCalculatePointsProportionallyCustomerMetadata

interface ObjectCalculatePointsProportionallyOrderAmounts {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_AMOUNT'
	order: {
		amount: {
			every: number
			points: number
		}
	}
}

interface ObjectCalculatePointsProportionallyOrderTotalAmounts {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_TOTAL_AMOUNT'
	order: {
		total_amount: {
			every: number
			points: number
		}
	}
}

interface ObjectCalculatePointsProportionallyOrderMetadata {
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

interface ObjectCalculatePointsProportionallyItemAmount {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_ITEMS_AMOUNT'
	order_items: {
		amount: {
			every: number
			points: number
			object: 'products_collection' | 'product' | 'sku'
			id: string
		}
	}
}

interface ObjectCalculatePointsProportionallyItemsSubtotalAmount {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_ITEMS_SUBTOTAL_AMOUNT'
	order_items: {
		subtotal_amount: {
			every: number
			points: number
			object: 'products_collection' | 'product' | 'sku'
			id: string
		}
	}
}

interface ObjectCalculatePointsProportionallyItemsQuantity {
	type: 'PROPORTIONAL'
	calculation_type: 'ORDER_ITEMS_QUANTITY'
	order_items: {
		quantity: {
			every: number
			points: number
			object: 'products_collection' | 'product' | 'sku'
			id: string
		}
	}
}

interface ObjectCalculatePointsProportionallyCustomEventMetadata {
	type: 'PROPORTIONAL'
	calculation_type: 'CUSTOMER_METADATA'
	custom_event: {
		metadata: {
			every: number
			points: number
			property: string
		}
	}
}

interface ObjectCalculatePointsProportionallyCustomerMetadata {
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

type LoyaltiesCreateEarningRule = Partial<CreateEarningRuleObject>
export type LoyaltiesCreateEarningRules = LoyaltiesCreateEarningRule[]
export type LoyaltiesCreateEarningRuleResponse = EarningRuleObject[]

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
