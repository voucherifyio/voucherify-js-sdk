import { OrdersCreateResponse, OrdersItem } from './Orders'
import { ProductsCreateResponse, ProductsCreateSkuResponse } from './Products'

import { SimpleCustomer } from './Customers'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'
import { VouchersResponse } from './Vouchers'
import { RewardsAssignmentObject, RewardsGetResponse } from './Rewards'

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
	type: string // LOYALTY_CARD | GIFT_VOUCHER
	object: 'balance'
	related_object?: {
		type?: string // always "voucher"
		id?: string
	}
	operation_type?: 'MANUAL' | 'AUTOMATIC' //always
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

export interface ListMemberRewardsParams {
	affordable_only?: boolean
	limit?: number
	page?: number
}

export interface LoyaltiesListMemberRewardsResponse {
	object: 'list'
	data_ref: 'data'
	data: { reward: RewardsGetResponse; assignment: RewardsAssignmentObject; object: 'loyalty_reward' }[]
	total: number
}

export interface LoyaltiesTransferPoints {
	code: string
	points: number
	reason?: string
	source_id: string
}

export interface GetPointsExpirationParams {
	limit?: number
	page?: number
}

export interface LoyaltiesGetPointsExpirationResponse {
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

export interface ListLoyaltyCardTransactionsParams {
	limit?: number
	page?: number
}

export interface LoyaltiesListLoyaltyCardTransactionsResponse {
	object: 'list'
	data_ref: 'data'
	data: LoyaltyCardTransactionsResponse[] //1_obj_loyalty_card_transaction_object
	has_more: boolean
}

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

export interface SimpleLoyaltyVoucher {
	id: string
	code: string
	loyalty_card: {
		points: number
		balance: number
		next_expiration_date: string
		next_expiration_points: string
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

export interface LoyaltyCardTransactionsResponse {
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
		custom_event: {
			id: string
			type: string
		}
		event_schema: {
			id: string
			name: string
		}
		source_voucher?: SimpleLoyaltyVoucher
		destination_voucher?: SimpleLoyaltyVoucher
	}
	related_transaction_id: string
	created_at: string
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

export interface LoyaltiesExportLoyaltyCardTransactionsParams {
	order: 'created_at' | '-created_at'
	fields: LoyaltyCardTransactionsFields[]
}

export interface LoyaltiesExportLoyaltyCardTransactionsResponse {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED'
	channel: string
	exported_object: 'voucher_transactions'
	parameters: {
		order?: string
		fields?: LoyaltyCardTransactionsFields[]
		filters: {
			voucher_id: {
				conditions: {
					$in: [string] //memberId
				}
			}
		}
	}
	result: null
	user_id: null | string
}
