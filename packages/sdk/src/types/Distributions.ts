import { CustomerRequest, SimpleCustomer } from './Customers'

import { VoucherDiscount, VoucherType } from './Vouchers'

type OrderType =
	| 'id'
	| '-id'
	| 'voucher_code'
	| '-voucher_code'
	| 'tracking_id'
	| '-tracking_id'
	| 'customer_id'
	| '-customer_id'
	| 'created_at'
	| '-created_at'
	| 'channel'
	| '-channel'

export type PublicationResponseChannel =
	| 'Activecampaign'
	| 'API'
	| 'Automation'
	| 'Braze'
	| 'Dashboard'
	| 'Email'
	| 'Intercom'
	| 'Mailchimp'
	| 'Reward'
	| 'Shopify'
	| 'SMS'
	| 'voucherify-website'
	| 'Webhook'

export type DistributionsPublicationsVoucher =
	| DistributionsPublicationsVoucherDiscount
	| DistributionsPublicationsVoucherLoyaltyCard
	| DistributionsPublicationsVoucherGiftCard

interface DistributionsPublicationsVoucherDiscount {
	//5_obj_publication_object_discount
	code?: string
	object?: 'voucher'
	campaign?: string
	is_referral_code?: boolean
	discount?: VoucherDiscount
}

interface DistributionsPublicationsVoucherLoyaltyCard {
	//5_obj_publication_object_loyalty_card
	code?: string
	object?: 'voucher'
	campaign?: string
	loyalty_card?: {
		points?: number
		balance?: number
	}
	is_referral_code?: boolean
}

interface DistributionsPublicationsVoucherGiftCard {
	//5_obj_publication_object_gift_card
	code?: string
	object?: 'voucher'
	campaign?: string
	gift?: {
		amount?: number
		balance?: number
		effect?: 'APPLY_TO_ITEMS' | 'APPLY_TO_ORDER'
	}
	is_referral_code?: boolean
}

export interface DistributionsPublicationsCreateResponseVoucher {
	id: string
	code: string
	campaign?: string
	campaign_id?: string
	category?: string
	category_id?: string
	categories?: {
		created_at?: string
		hierarchy?: number
		id?: string
		name?: string
		object?: 'category'
		updated_at?: string
	}[]
	type?: VoucherType
	discount?: VoucherDiscount
	gift?: {
		amount?: number
		balance?: number
		effect?: 'APPLY_TO_ITEMS' | 'APPLY_TO_ORDER'
	}
	loyalty_card?: {
		points?: number
		balance?: number
		next_expiration_date?: string
		next_expiration_points?: number
	}
	start_date?: string
	expiration_date?: string
	validity_timeframe?: {
		duration?: string
		interval?: string
	}
	validity_day_of_week?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[]
	validation_rules_assignments?: {
		data?: {
			created_at?: string
			id?: string
			object?: 'validation_rules_assignment'
			related_object_id?: string
			related_object_type?: string
			rule_id?: string
		}[]
		data_ref?: 'data'
		object?: 'list'
		total?: number
	}
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	assets?: {
		qr?: {
			id?: string
			url?: string
		}
		barcode?: {
			id?: string
			url?: string
		}
	}
	is_referral_code?: boolean
	created_at?: string
	updated_at?: string
	holder_id?: string
	object: 'voucher'
	publish: {
		object: 'list'
		count: number
		url: string
	}
	redemption: {
		object: 'list'
		quantity: number
		redeemed_quantity: number
		redeemed_amount?: number
		redeemed_points?: number
		url?: string
	}
}
// Eddy's comment (regarding how to set up filters type) is not quite working here - as we can have multiple `conditions` inside the `filter_condition`. I did not explain it correctly

export interface DistributionsPublicationsListParams {
	limit?: number
	page?: number
	order?: OrderType
	campaign?: string
	customer?: string
	voucher?: string
	result?: 'SUCCESS' | 'FAILURE'
	voucher_type?: 'GIFT' | 'DISCOUNT' | 'LOYALTY_CARD' | 'LUCKY_DRAW'
	is_referral_code?: boolean
	filters?: {
		junction?: 'OR' | 'AND'
	} & Record<string, any>
}

interface PublicationResponse {
	id: string
	source_id?: string
	object?: 'publication'
	created_at?: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	channel?: PublicationResponseChannel
	result?: 'SUCCESS' | 'FAILURE'
	customer?: Partial<SimpleCustomer>
	voucher?: DistributionsPublicationsVoucher
	vouchers_id?: string[]
	vouchers?: string[]
	failure_code?: string
	failure_message?: string
}

export interface DistributionsPublicationsListResponse {
	object: 'list'
	total: number
	data_ref: 'publications'
	publications?: PublicationResponse[]
}

export type CreatePublicationViaGetRequest = DistributionsPublicationsCreateParams &
	DistributionsPublicationsCreateQueryParams

//5_req_create_publication
export type DistributionsPublicationsCreateParams = (
	| CreatePublicationStandaloneVoucher
	| CreatePublicationFromCampaign
) & { join_once?: boolean }

export interface CreatePublicationStandaloneVoucher {
	//5_req_create_publication_standalone_voucher
	metadata?: Record<string, any>
	source_id?: string
	campaign?:
		| {
				name: string
				count?: number
		  }
		| string
	voucher?: string
	channel?: PublicationResponseChannel
	customer?: CustomerRequest
}

export type CreatePublicationFromCampaign =
	| CreatePublicationFromCampaignAutoUpdate
	| CreatePublicationFromCampaignOneSpecificVoucher
	| CreatePublicationFromCampaignMultipleVouchers

//
interface CreatePublicationFromCampaignAutoUpdate {
	//5_req_create_publication_from_campaign_auto_update
	source_id?: string
	channel?: PublicationResponseChannel
	customer?: CustomerRequest
	campaign?: string
	metadata?: Record<string, any>
}

interface CreatePublicationFromCampaignOneSpecificVoucher {
	//5_req_create_publication_from_campaign_one_specific_voucher
	source_id?: string
	channel?: PublicationResponseChannel
	customer?: CustomerRequest
	voucher?: string
	campaign?: string
	metadata?: Record<string, any>
}

interface CreatePublicationFromCampaignMultipleVouchers {
	//5_req_create_publication_from_campaign_multiple_vouchers
	source_id?: string
	channel?: PublicationResponseChannel
	customer?: CustomerRequest
	voucher?: string
	campaign?: {
		name?: string
		count?: string
	}
	metadata?: Record<string, any>
}

export interface DistributionsPublicationsCreateQueryParams {
	join_once?: boolean
}

export interface DistributionsPublicationsCreateResponse {
	id: string
	object: 'publication'
	created_at: string
	customer_id: string
	tracking_id?: string
	metadata?: Record<string, any>
	channel?: PublicationResponseChannel
	source_id?: string
	result: 'SUCCESS' | 'FAILURE'
	customer?: SimpleCustomer
	voucher: DistributionsPublicationsCreateResponseVoucher
	vouchers_id?: string[]
}
