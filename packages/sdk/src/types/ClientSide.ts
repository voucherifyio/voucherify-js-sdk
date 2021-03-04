import { CustomerRequest, SimpleCustomer } from './Customers'
import { DiscountAmount, DiscountPercent, DiscountUnit, VouchersResponse } from './Vouchers'
import { OrdersCreateResponse, OrdersItem } from './Orders'

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

export interface ClientSideListVouchersParams {
	campaign?: string
	category?: string
	page?: number
	limit?: number
	customer?: string
	created_at?: string
	updated_at?: string
}

export interface ClientSideValidateResponse {
	code?: string
	valid?: boolean
	discount?: DiscountUnit | DiscountAmount | DiscountPercent
	order: {
		object?: 'order'
		amount?: number
		discount_amount?: number
		items: Pick<OrdersItem, 'source_id' | 'product_id' | 'sku' | 'quantity'>[]
	}
	tracking_id?: string
}

export interface ClientSideRedeemPayload {
	tracking_id?: string
	customer?: CustomerRequest
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: ClientSideRedeemItem[]
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	reward?: {
		id: string
	}
	session?: {
		key: string
	}
}

export interface ClientSideRedeemResponse {
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: OrdersCreateResponse
	metadata?: Record<string, any>
	result?: string
	voucher?: VouchersResponse
}

export interface ClientSidePublishPayload {
	source_id?: string
	channel?: 'Voucherify.js' | string
	customer?: CustomerRequest
	voucher?: string
	metadata?: Record<string, any>
}

export interface ClientSidePublishCampaign {
	name: string
	count?: number
}

export interface ClientSidePublishResponse {
	id: string
	object: 'publication'
	created_at: string
	customer_id?: string
	tracking_id?: string
	metadata: Record<string, any>
	channel?: 'Voucherify.js' | string
	source_id?: string
	result?: string
	customer?: SimpleCustomer
	voucher: VouchersResponse
	vouchers_id?: string[]
}

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
	object?: 'event'
	type?: string
}

export type ClientSideRedeemItem = Pick<OrdersItem, 'source_id' | 'product_id' | 'sku' | 'quantity'>
export type ClientSideResponseItem = ClientSideRedeemItem
export type ClientSideTrackCustomer = CustomerRequest
