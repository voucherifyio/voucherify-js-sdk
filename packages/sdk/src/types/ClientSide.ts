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

export interface VoucherifyPublishInputs {
	[index: string]: string
	name: string
	email: string
	phone: string
	line_1: string
	line_2: string
	postal_code: string
	city: string
	state: string
	country: string
	voucherifyPublishStatus: string
	voucherifyTracking: string
	voucherifyPublish: string
}

export interface VoucherifyPublishInputsState {
	[index: string]: boolean
	name: boolean
	phone: boolean
	email: boolean
	line_1: boolean
	line_2: boolean
	postal_code: boolean
	city: boolean
	state: boolean
	country: boolean
	voucherifyPublishStatus: boolean
	voucherifyPublish: boolean
}

export interface VoucherifyRedeemInputsState {
	[index: string]: boolean
	voucherifyCode: boolean
	voucherifyAmount: boolean
	voucherifyRedeem: boolean
}
export interface VoucherifyRedeemInputs {
	[index: string]: string
	voucherifyCode: string
	voucherifyAmount: string
	voucherifyTracking: string
}
export type NotDefinedPlaceholder = Pick<
	VoucherifyPublishInputs,
	'name' | 'email' | 'phone' | 'line_1' | 'line_2' | 'postal_code' | 'city' | 'state' | 'country'
> & { [index: string]: string }

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
	customer: CustomerRequest
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

export interface ClientSideRedeemWidgetPayload {
	order?: {
		amount?: number
	}
}
export type ClientSideRedeemItem = Pick<OrdersItem, 'source_id' | 'product_id' | 'sku' | 'quantity'>
export type ClientSideResponseItem = ClientSideRedeemItem
export type ClientSideTrackCustomer = CustomerRequest
