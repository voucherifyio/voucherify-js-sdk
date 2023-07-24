import { ObjectOrder, OrdersCreateResponse, OrdersItem } from './Orders'
import { ProductsCreateResponse, ProductsCreateSkuResponse } from './Products'

import { CreateCustomer, SimpleCustomer } from './Customers'
import { VouchersResponse } from './Vouchers'
import { CampaignVoucherObjectLoyaltyCard, CategoryObject, LoyaltyCard, LoyaltyTiersExpiration } from './Campaigns'
import { AsyncActionCreateResponse } from './AsyncActions'
import {
	RedemptionObjectLoyaltyCardDigital,
	RedemptionObjectLoyaltyCardMaterialProduct,
	RedemptionObjectLoyaltyCardMaterialSku,
	RedemptionObjectLoyaltyCardPayWithPoints,
} from './Redemptions'
import { FilterConditionsString, FilterJunction } from './Exports'

export type DeleteLoyaltyCampaign = AsyncActionCreateResponse

export interface LoyaltiesListParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface LoyaltyCardObjectExpanded {
	//8_obj_redemption_object_loyalty_card_extended
	id: string
	object: 'redemption'
	date: string
	customer_id: string
	tracking_id: string
	metadata: Record<string, any>
	amount: number
	result: 'SUCCESS' | 'FAILURE'
	order?: ObjectOrder
	customer: {
		id: string
		name: string
		email: string
		source_id: string
		metadata: Record<string, any>
		object: 'customer'
	}
	related_object_type: 'voucher'
	related_object_id: string
	voucher: VouchersResponse
	reward:
		| RedemptionObjectLoyaltyCardPayWithPoints
		| RedemptionObjectLoyaltyCardMaterialProduct
		| RedemptionObjectLoyaltyCardMaterialSku
		| RedemptionObjectLoyaltyCardDigital
	loyalty_card: {
		points: number
	}
}

export interface ReqExportPointsExpirations {
	order: 'expires_at' | '-expires_at'
	fields: string[]
	filters: FilterCampaignId | FilterVoucherId
}

interface FilterCampaignId {
	campaign_id: FilterConditions
	junction: FilterJunction
}

interface FilterVoucherId {
	//8_req_filter_voucher_id
	voucher_id: FilterConditions
	junction: FilterJunction
}

interface FilterConditions {
	conditions: {
		properties?: {
			$in?: string[]
			$not_in?: string[]
			$is?: string
			$is_not?: string
		}
	}
}

export interface ExportObjectPointsExpiration {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel: 'API' | 'WEBSITE'
	exported_object: 'points_expiration'
	parameters: {
		order: 'expires_at' | '-expires_at'
		fields: string[]
		filters: FilterCampaignId | FilterVoucherId
	}
	result: {
		url: string
	}
	user_id: string
}

export interface LoyaltyCardObjectNonExpandedCategories {
	//8_obj_loyalty_card_object_non_expanded_categories
	id: string
	code: string
	campaign: string
	campaign_id: string
	category: string
	category_id: string
	categories: CategoryObject[]
	type: 'LOYALTY_CARD'
	discount: any
	gift: any
	loyalty_card: {
		points: number
		balance: number
		next_expiration_date: string
		next_expiration_points: number
	}
	start_date: string
	expiration_date: string
	validity_timeframe: {
		duration: string
		interval: string
	}
	validity_day_of_week: (0 | 1 | 2 | 3 | 4 | 5 | 6)[]
	active: boolean
	additional_info: string
	metadata: Record<string, any>
	assets: {
		qr: {
			id: string
			url: string
		}
		barcode: {
			id: string
			url: string
		}
	}
	is_referral_code: boolean
	created_at: string
	updated_at: string
	holder_id: string
	redemption: {
		quantity: number
		redeemed_quantity: number
		redeemed_points: number
		object: 'list'
		url: string
	}
	publish: {
		object: 'list'
		count: number
		url: string
	}
	object: 'voucher'
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
export type EarningRuleObject =
	| EarningRuleObjectOrderPaid
	| EarningRuleObjectCustomEvent
	| EarningRuleObjectEnteredSegment
	| EarningRuleObjectTier

type CreateEarningRuleObject =
	| CreateEarningRuleObjectOrderPaid
	| CreateEarningRuleObjectCustomEvent
	| CreateEarningRuleObjectEnteredSegment
	| CreateEarningRuleObjectTier

export type UpdateEarningRuleObject = Partial<
	| UpdateEarningRuleObjectOrderPaid
	| UpdateEarningRuleObjectCustomEvent
	| UpdateEarningRuleObjectEnteredSegment
	| UpdateEarningRuleObjectTier
>

type UpdateEarningRuleObjectOrderPaid = Omit<
	EarningRuleObjectOrderPaid,
	'event' | 'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at'
> & { source: { banner: string } }

type UpdateEarningRuleObjectCustomEvent = Omit<
	EarningRuleObjectCustomEvent,
	'event' | 'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at' | 'custom_event'
> & { source: { banner: string } }

type UpdateEarningRuleObjectEnteredSegment = Omit<
	EarningRuleObjectEnteredSegment,
	'event' | 'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at' | 'segment'
> & { source: { banner: string } }

type UpdateEarningRuleObjectTier = Omit<
	EarningRuleObjectTier,
	'event' | 'automation_id' | 'created_at' | 'id' | 'object' | 'source' | 'updated_at' | 'loyalty_tier'
> & {
	source: { banner: string }
	event:
		| 'customer.loyalty.tier.joined'
		| 'customer.loyalty.tier.left'
		| 'customer.loyalty.tier.upgraded'
		| 'customer.loyalty.tier.downgraded'
		| 'customer.loyalty.tier.prolonged'
}

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

type CreateEarningRuleObjectOrderPaid = Omit<
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

type CreateEarningRuleObjectCustomEvent = Omit<
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

type CreateEarningRuleObjectEnteredSegment = Omit<
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

type CreateEarningRuleObjectTier = Omit<
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

export type LoyaltiesCreateEarningRule = Partial<CreateEarningRuleObject>[]
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
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
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
	vouchers: LoyaltyCardObjectNonExpandedCategories[]
}

export type LoyaltiesCreateMemberResponse = LoyaltyCardObjectNonExpandedCategories

export type LoyaltiesGetMemberResponse = LoyaltyCardObjectNonExpandedCategories

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
	expiration_date?: string
	points: number
	expiration_type?: 'CUSTOM_DATE' | 'NON_EXPIRING' | 'PROGRAM_RULES'
	reason?: string
	source_id?: string
}

export type ListLoyaltyCardTransactionsParams = LoyaltiesGetPointsExpirationParams
export interface LoyaltiesGetPointsExpirationParams {
	limit?: number
	page?: number
}

export interface LoyaltiesAddPointsResponse {
	points: number
	total: number
	balance: number
	type: 'loyalty_card'
	object: 'balance'
	related_object?: {
		type?: 'voucher'
		id?: string
	}
}

export interface GetLoyaltyCardTransactions {
	//8_res_get_loyalty_card_transactions
	object: 'list'
	data_ref: 'data'
	data: ObjectLoyaltyCardTransaction[] //1_obj_loyalty_card_transaction_object
	has_more: boolean
}

export type ObjectLoyaltyCardTransaction =
	| LoyaltyCardTransactionObjectRedemption
	| LoyaltyCardTransactionObjectAccrual
	| LoyaltyCardTransactionObjectAccrualCustomEvent
	| LoyaltyCardTransactionObjectRefund
	| LoyaltyCardTransactionObjectAddition
	| LoyaltyCardTransactionObjectRemoval
	| LoyaltyCardTransactionObjectExpiration
	| LoyaltyCardTransactionObjectTransferOut
	| LoyaltyCardTransactionObjectTransferIn
//1_obj_loyalty_card_transaction_object

//{
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_redemption"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_accrual"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_accrual_custom_event"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_refund"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_addition"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_removal"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_expiration"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_transfer_out"
//           },
//           {
//             "$ref": "#/components/schemas/1_obj_loyalty_card_transaction_object_transfer_in"
//           }

export interface LoyaltyCardTransactionObjectRedemption {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: string
	reason: string
	type: 'POINTS_REDEMPTION'
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
		order: {
			id: string
			source_id: string
		}
		redemption: { id: string }
		reward: {
			id: string
			name: string
		}
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectAccrual {
	// 1_obj_loyalty_card_transaction_object_accrual
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'Automation'
	reason: string
	type: 'POINTS_ACCRUAL'
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
		order: {
			id: string
			source_id: string
		}
		event: {
			id: string
			type: string
		}
		earning_rule: {
			id: string
			source: {
				banner: string
			}
		}
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectAccrualCustomEvent {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'Automation'
	reason: string
	type: 'POINTS_ACCRUAL'
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
		event: {
			id: string
			type: string
		}
		earning_rule: {
			id: string
			source: {
				banner: string
			}
		}
		custom_event: {
			id: string
			type: string
		}
		event_schema: {
			id: string
			type: string
		}
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectRefund {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: string
	reason: string
	type: 'POINTS_REFUND'
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
		order: {
			id: string
			source_id: string
		}
		redemption: {
			id: string
		}
		rollback: {
			id: string
		}
		reward: {
			id: string
			name: string
		}
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectAddition {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'voucherify-web-ui' | 'API'
	reason: string
	type: 'POINTS_ADDITION'
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
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectRemoval {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'voucherify-web-ui' | 'API'
	reason: string
	type: 'POINTS_REMOVAL'
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
	}
	related_transaction_id: string
	created_at: string
}
export type CreateLoyaltyCardTransactions = ExportLoyaltyCardTransactions

interface ExportLoyaltyCardTransactions {
	order: '-created_at' | 'created_at'
	fields: (
		| 'id'
		| 'type'
		| 'source_id'
		| 'reason'
		| 'balance'
		| 'amount'
		| 'created_at'
		| 'voucher_id'
		| 'campaign_id'
		| 'source'
		| 'details'
		| 'related_transaction_id'
	)[]
}

export interface ExportTransactionObject {
	//8_obj_export_transactions_object
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel: 'API'
	exported_object: 'voucher_transactions'
	parameters: ExportLoyaltyCardTransactions
	result: {
		url: string
	}
	user_id: string
}

export type ReqTransferLoyaltyPoints = TransferLoyaltyPoints[]
interface TransferLoyaltyPoints {
	code: string
	points: number
	reason?: string
	source_id: string
}

interface ExportLoyaltyCardTransactions {
	//16_obj_export_loyalty_card_transactions
	order: '-created_at' | 'created_at'
	// @ts-ignore
	fields: (
		| 'id'
		| 'type'
		| 'source_id'
		| 'reason'
		| 'balance'
		| 'amount'
		| 'created_at'
		| 'voucher_id'
		| 'campaign_id'
		| 'details'
		| 'related_transaction_id'
	)[]
	filters?: {
		voucher_id: FilterConditionsString
		junction: FilterJunction
	}
}

export interface LoyaltyCardTransactionObjectExpiration {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'Automation'
	reason: string
	type: 'POINTS_EXPIRATION'
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
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectTransferOut {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'API'
	reason: string
	type: 'POINTS_TRANSFER_OUT'
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
		destination_voucher: {
			id: string
			code: string
			type: 'LOYALTY_CARD'
			campaign: string
			campaign_id: string
			loyalty_card: {
				points: number
				balance: number
				next_expiration_date: string
				next_expiration_points: string
			}
			is_referral_code: boolean
		}
	}
	related_transaction_id: string
	created_at: string
}

export interface LoyaltyCardTransactionObjectTransferIn {
	id: string
	source_id: string
	voucher_id: string
	campaign_id: string
	source: 'API'
	reason: string
	type: 'POINTS_TRANSFER_IN'
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
		source_voucher: {
			id: string
			code: string
			type: 'LOYALTY_CARD'
			campaign: string
			holder_id: string
			campaign_id: string
			loyalty_card: {
				points: number
				balance: number
				next_expiration_date: string
				next_expiration_points: string
			}
			is_referral_code: boolean
		}
	}
	related_transaction_id: string
	created_at: string
}

export interface GetPointsExpirationResponse {
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
		status: 'ACTIVE'
		expires_at: string
		updated_at: string
		object: 'loyalty_points_bucket'
	}[]
	total: number
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

export interface LoyaltiesCreateMember {
	voucher?: string
	channel?: string
	customer: string | { id: string } | { source_id: string } | CreateCustomer
	metadata?: Record<string, any>
}
