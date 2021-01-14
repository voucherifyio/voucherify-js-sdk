interface CampaignsVoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface CampaignsVoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface CampaignsVoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

interface CampaignsVoucher {
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
	}
	type?: string
	is_referral_code?: boolean
	discount?: CampaignsVoucherDiscountAmount | CampaignsVoucherDiscountPercent | CampaignsVoucherDiscountUnit
	loyalty_card?: $FixMe
	redemption?: {
		quantity?: number
	}
}

export interface CampaignResponse {
	id?: string
	name?: string
	campaign_type?: string
	type?: string
	description?: string
	start_date?: string
	expiration_date?: string
	validity_timeframe?: string
	validity_day_of_week?: string
	metadata?: Record<string, any>
	vouchers_generation_status?: string
	active?: boolean
	voucher: CampaignsVoucher
	validation_rules_assignments?: {
		object?: 'list'
		total?: number
		data_ref?: 'data'
		data: {
			id?: string
			rule_id?: string
			related_object_id?: string
			related_object_type?: string
			created_at?: string
			object?: 'validation_rules_assignment'
		}[]
	}
	referral_program?: $FixMe
	object?: 'campaign'
}

export interface CampaignsQualificationsBody {
	customer?: {
		id?: string
		name?: string
		email?: string
		metadata?: Record<string, any>
		description?: string
		source_id?: string
		address?: {
			city?: string
			state?: string
			line_1?: string
			line_2?: string
			country?: string
			postal_code?: string
		}
		phone?: string
	}
	order: {
		id?: string
		source_id?: string
		items?: {
			product_id?: string
			sku_id?: string
			related_object?: string
			source_id?: string
			quantity?: number
			price?: number
			product?: {
				name?: string
				override?: boolean
				metadata?: Record<string, any>
			}
			sku?: {
				override?: boolean
				sku?: string
				metadata?: Record<string, any>
			}
		}[]
	}
}

export interface CampaignsQualificationsParams {
	audienceRulesOnly?: boolean
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
	limit?: number
}

export interface CampaignsQualificationsResponse {
	object?: 'list'
	total?: number
	data_ref?: 'data'
	data: CampaignResponse[]
	id?: string
	created_at?: string
}

export type CampaignsCreateCampaign = Omit<
	CampaignResponse,
	'vouchers_generation_status' | 'validation_rules_assigments' | 'object'
>

export type CampaignsUpdateCampaign = Pick<
	CampaignResponse,
	'start_date' | 'expiration_date' | 'type' | 'description' | 'metadata'
>

export interface CampaignsDeleteParams {
	force?: boolean
}

export interface CampaignsAddVoucherParams {
	vouchers_count?: number
}

export interface CampaignsAddVoucherBody {
	vouchers_count?: number
}

export interface CampaignsAddVoucherResponse {
	code?: string
	object?: string
	campaign?: string
	category?: string
	type?: string
	discount: CampaignsVoucherDiscountPercent | CampaignsVoucherDiscountAmount | CampaignsVoucherDiscountUnit
	gift?: $FixMe
	start_date?: string
	expiration_date?: string
	publish?: {
		count?: number
		entries: string[]
	}
	redemption: {
		quantity?: number
		redeemed_quantity?: number
		redemption_entries?: string[]
	}
	active: true
	additional_info?: string
	metadata?: Record<string, any>
}

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
	object?: 'list'
	total?: number
	data_ref?: 'campaigns'
	campaigns: CampaignResponse[]
}

export type CampaignsCreateCampaignResponse = CampaignResponse
export type CampaignsUpdateCampaignResponse = CampaignResponse
export type CampaignsGetCampaignResponse = CampaignResponse
