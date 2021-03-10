import { DiscountAmount, DiscountPercent, DiscountUnit, VouchersListParams, VouchersResponse } from './Vouchers'
import { OrdersCreateResponse, OrdersItem } from './Orders'

import { CustomerRequest } from './Customers'
import { DistributionsPublicationsCreateResponse } from './Distributions'
import { SimplePromotionTier } from './PromotionTiers'

export interface ClientSideValidateParams {
	code?: string
	tracking_id?: string
	amount?: number
	items?: Pick<OrdersItem, 'source_id' | 'product_id' | 'sku' | 'quantity'>[]
	orderMetadata?: Record<string, any>
	customer?: Pick<CustomerRequest, 'source_id' | 'metadata'>
	metadata?: Record<string, any>
	session_type?: 'LOCK'
	session_key?: string
	session_ttl?: number
	session_ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
}

export type ClientSideListVouchersParams = VouchersListParams
export type ClientSideVoucherListing = Pick<
	VouchersResponse,
	'active' | 'code' | 'metadata' | 'assets' | 'object' | 'expiration_date' | 'start_date'
>

export interface ClientSideListVouchersResponse {
	object: 'list'
	total: number
	data_ref: 'vouchers'
	vouchers: ClientSideVoucherListing[]
}
export interface ClientSideValidateResponse {
	code?: string
	valid: boolean
	discount?: DiscountUnit | DiscountAmount | DiscountPercent
	order?: {
		object: 'order'
		amount?: number
		discount_amount?: number
		items: Pick<OrdersItem, 'source_id' | 'product_id' | 'sku' | 'quantity'>[]
	}
	tracking_id?: string
	promotions?: SimplePromotionTier[]
}

export interface ClientSideRedeemPayload {
	tracking_id?: string
	customer?: CustomerRequest
	order?: ClientSideRedeemOrder
	metadata?: Record<string, any>
	reward?: {
		id: string
	}
	session?: {
		key: string
	}
}

export interface ClientSideRedeemResponse {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: OrdersCreateResponse
	metadata?: Record<string, any>
	result: 'SUCCESS' | 'FAILURE'
	voucher?: VouchersResponse
}

export interface ClientSidePublishPayload {
	source_id?: string
	channel?: 'Voucherify.js' | string
	customer?: CustomerRequest
	voucher?: string
	metadata?: Record<string, any>
}

export type ClientSidePublishPreparedPayload = ClientSidePublishPayload

export interface ClientSidePublishQueryParams {
	join_once?: boolean
	campaign?: string
}

export interface ClientSidePublishCampaign {
	name: string
	count?: number
}

export type ClientSidePublishResponse = DistributionsPublicationsCreateResponse & { vouchers_id?: string[] }
export interface ClientSideTrackLoyalty {
	code?: string
}
export interface ClientSideTrackReferral {
	code?: string
}

export interface ClientSideTrackPayload {
	event: string
	metadata?: Record<string, any>
	customer?: CustomerRequest
	loyalty?: ClientSideTrackLoyalty
	referral?: ClientSideTrackReferral
}

export interface ClientSideTrackResponse {
	object: 'event'
	type: string
}

export type ClientSideRedeemOrder = Partial<Pick<OrdersCreateResponse, 'id' | 'source_id' | 'metadata' | 'amount'>> & {
	items?: ClientSideRedeemItem[]
}

export type ClientSideRedeemItem = Pick<OrdersItem, 'source_id' | 'product_id' | 'sku' | 'quantity'>
export type ClientSideResponseItem = ClientSideRedeemItem
export type ClientSideTrackCustomer = CustomerRequest
