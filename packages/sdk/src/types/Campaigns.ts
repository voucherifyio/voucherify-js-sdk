export interface CampaignObject {
	name: string
	campaign_type?: string
	start_date?: string
	expiration_date?: string
	vouchers_count?: number
	voucher?: {
		type?: string
		discount?: {
			type?: string
			percent_off?: string
			amount_off?: number
		}
		redemption?: {
			qunatity?: number
		}
		code_config?: {
			pattern?: string
		}
	}
	metadata?: Record<string, string>
}

export interface CampaignsQualificationsParams {
	audienceRulesOnly?: boolean
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
	limit?: number
}

export interface CampaignsQualificationsBody {
	customer?: {
		id?: string
		name?: string
		email?: string
		metadata?: Record<string, string>
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
				metadata?: Record<string, string>
			}
			sku?: {
				override?: boolean
				sku?: string
				metadata?: Record<string, string>
			}
		}[]
	}
}

export interface CampaignAddVoucherObject {
	additional_info?: string
	metadata?: Record<string, string>
	redemption: {
		quantity?: string
	}
	category?: string
	code_config: {
		pattern?: string
	}
}

export interface CampaignAddVoucherParams {
	vouchers_count?: number
}

export interface Voucher {
	code: string
	redemption: {
		quantity: number
	}
	metadata?: Record<string, string>
	additional_info: string
}

export interface Campaigns {
	limit?: number
	page?: number
	campaign_type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	filters?: {
		junction?: string
		[filter_condition: string]: any
	}
}

export type CampaignsQualificationsCreateBody = CampaignsQualificationsBody
export type CampaignsQualificationsCreateParams = CampaignsQualificationsParams
export type CampaignCreate = CampaignObject
export type CampaignUpdateResponse = CampaignObject
export type CampaignAddVoucherBody = CampaignAddVoucherParams & CampaignAddVoucherObject
export type CampaignImportVouchersVoucher = Voucher
export type CampaignsList = Campaigns
