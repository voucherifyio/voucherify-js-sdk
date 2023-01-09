import { SimpleVoucher, VouchersImport, VouchersResponse } from './Vouchers'

import { CustomerRequest } from './Customers'
import { OrdersGetResponse } from './Orders'
import { ValidationRulesCreateAssignmentResponse } from './ValidationRules'

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

export interface CampaignResponse {
	id: string
	name: string
	campaign_type: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	type: 'AUTO_UPDATE' | 'STATIC'
	category?: string
	auto_join?: boolean
	join_once?: boolean
	description?: string
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
	metadata?: Record<string, any>
	created_at: string
	vouchers_generation_status: 'IN_PROGRESS' | 'DONE' | 'FAILED' | 'DRAFT'
	active: boolean
	voucher?: SimpleVoucher
	referral_program?: ReferralProgramCustomEventRedemption | ReferralProgramRedemption
	use_voucher_metadata_schema?: boolean
	protected?: boolean
	vouchers_count?: number
	object: 'campaign'
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

export type CampaignsCreateCampaign = Omit<
	CampaignResponse,
	| 'id'
	| 'protected'
	| 'vouchers_generation_status'
	| 'validation_rules_assignments'
	| 'object'
	| 'created_at'
	| 'active'
> & {
	active?: boolean
}

export type CampaignsUpdateCampaign = Pick<
	CampaignResponse,
	'start_date' | 'expiration_date' | 'type' | 'description' | 'metadata'
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

export type CampaignsAddVoucherResponse = Pick<
	VouchersResponse,
	| 'code'
	| 'object'
	| 'campaign'
	| 'category'
	| 'created_at'
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
	| 'assets'
>

export type CampaignsAddCertainVoucherResponse = CampaignsAddVoucherResponse

export type CampaignsImportVouchers = Pick<
	VouchersImport,
	'code' | 'redemption' | 'metadata' | 'additional_info' | 'active'
>

export interface CampaignsListParams {
	limit?: number
	page?: number
	campaign_type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
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
