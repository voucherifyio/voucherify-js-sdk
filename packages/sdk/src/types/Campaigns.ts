import { SimpleVoucher, VouchersImport, VouchersResponse } from './Vouchers'
import { OrdersGetResponse } from './Orders'
import { CustomerRequest } from './Customers'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'

export interface CampaignResponse {
	id: string
	name: string
	campaign_type?: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	category?: string
	auto_join?: boolean
	join_once?: boolean
	description: string
	start_date?: string
	validation_rules_assignments: {
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
	metadata?: Record<string, string>
	created_at: string
	vouchers_generation_status: 'DONE'
	active: boolean
	voucher?: SimpleVoucher
	referral_program?: {
		conversion_event_type: $FixMe
		custom_event: $FixMe
		referee_reward: $FixMe
	}
	use_voucher_metadata_schema?: boolean
	protected?: boolean
	vouchers_count?: number
	object: 'campaign'
}

export interface CampaignsQualificationsBody {
	customer?: CustomerRequest
	order: Pick<OrdersGetResponse, 'id' | 'source_id' | 'items'>
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

export type CampaignsCreateCampaign = Omit<
	CampaignResponse,
	'vouchers_generation_status' | 'validation_rules_assignments' | 'object'
>

export type CampaignsUpdateCampaign = Pick<
	CampaignResponse,
	'start_date' | 'expiration_date' | 'type' | 'description' | 'metadata'
>

export interface CampaignsDeleteParams {
	force?: boolean
}

export type CampaignsAddVoucherParams = Pick<
	VouchersImport,
	'code' | 'category' | 'redemption' | 'metadata' | 'additional_info'
>

export type CampaignsAddVoucherResponse = Pick<
	VouchersResponse,
	| 'code'
	| 'object'
	| 'campaign'
	| 'category'
	| 'type'
	| 'discount'
	| 'gift'
	| 'start_date'
	| 'expiration_date'
	| 'publish'
	| 'redemption'
	| 'active'
	| 'additional_info'
	| 'metadata'
>

export type CampaignsImportVouchers = Pick<VouchersImport, 'code' | 'redemption' | 'metadata' | 'additional_info'>

export interface CampaignsListParams {
	limit?: number
	page?: number
	campaign_type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	filters?: {
		junction?: string
		[filter_condition: string]: $FixMe
	}
}

export interface CampaignsListResponse {
	object: 'list'
	total: number
	data_ref: 'campaigns'
	campaigns: CampaignResponse[]
}

export type CampaignsCreateCampaignResponse = CampaignResponse
export type CampaignsUpdateCampaignResponse = CampaignResponse
export type CampaignsGetCampaignResponse = CampaignResponse
