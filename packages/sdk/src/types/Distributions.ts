import { CustomerRequest, SimpleCustomer } from './Customers'

import { VoucherDiscount, VoucherObject } from './Vouchers'

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

type PublicationResponseChannel =
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

type DistributionsPublicationsVoucher =
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

export interface DistributionsPublicationsListParams {
	limit?: number
	page?: number
	order?: OrderType
	campaign?: string
	customer?: string
	voucher?: string
	result?: 'SUCCESS' | 'FAILURE'
	voucher_type?: 'discount' | 'loyalty' | 'lucky_draw'
	is_referral_code?: boolean
	filters?: string
	source_id?: string
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
	customer?: SimpleCustomer
	voucher?: DistributionsPublicationsVoucher
	vouchers_id?: string[]
}

export interface DistributionsPublicationsListResponse {
	object: 'list'
	total: number
	data_ref: 'publications'
	publications?: PublicationResponse[]
}

export interface CreatePublicationViaGetRequest {
	campaign: string | { id: string } | { name: string }
	customer:
		| string
		| { id: string }
		| { source_id: string }
		| {
				source_id: string
				name: string
				description: string
				email: string
				phone: string
				birthdate: string
				birthday: string
				metadata: Record<string, any>
				address: {
					city: string
					state: string
					line_1: string
					line_2: string
					country: string
					postal_code: string
				}
		  }
	metadata: Record<string, any>
	source_id: string
	voucher: string
}

//5_req_create_publication
export type DistributionsPublicationsCreateParams = CreatePublicationStandaloneVoucher | CreatePublicationFromCampaign

interface CreatePublicationStandaloneVoucher {
	//5_req_create_publication_standalone_voucher
	metadata?: Record<string, any>
	source_id?: string
	campaign?: string
	voucher?: string
	channel?: PublicationResponseChannel
	customer?: { id: string } | { source_id: string } | Omit<CustomerRequest, 'id'>
}

type CreatePublicationFromCampaign =
	| CreatePublicationFromCampaignAutoUpdate
	| CreatePublicationFromCampaignOneSpecificVoucher
	| CreatePublicationFromCampaignMultipleVouchers

//
interface CreatePublicationFromCampaignAutoUpdate {
	//5_req_create_publication_from_campaign_auto_update
	source_id?: string
	channel?: PublicationResponseChannel
	customer?: { id: string } | { source_id: string } | Omit<CustomerRequest, 'id'>
	campaign?: string
	metadata?: Record<string, any>
}

interface CreatePublicationFromCampaignOneSpecificVoucher {
	//5_req_create_publication_from_campaign_one_specific_voucher
	source_id?: string
	channel?: PublicationResponseChannel
	customer?: { id: string } | { source_id: string } | Omit<CustomerRequest, 'id'>
	voucher?: string
	campaign?: string
	metadata?: Record<string, any>
}

interface CreatePublicationFromCampaignMultipleVouchers {
	//5_req_create_publication_from_campaign_multiple_vouchers
	source_id?: string
	channel?: PublicationResponseChannel
	customer?: { id: string } | { source_id: string } | Omit<CustomerRequest, 'id'>
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

export type DistributionsPublicationsCreateResponse = VoucherObject
