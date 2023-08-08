import { CustomerRequest, CustomersCreateBody, CustomersCreateResponse, CustomersUpdateConsentsBody } from './Customers'
import { VouchersListParams, VouchersResponse } from './Vouchers'
import { DiscountAmount, DiscountPercent, DiscountUnit, DiscountFixed } from './DiscountVoucher'
import { OrdersCreateResponse, OrdersItem } from './Orders'

import { ConsentsListResponse } from './Consents'
import { DistributionsPublicationsCreateResponse } from './Distributions'
import { SimplePromotionTier } from './PromotionTiers'
import { ApplicableToResultList } from './ApplicableTo'
import { ValidationsValidateStackableParams, ValidationValidateStackableResponseClientSide } from './Validations'
import {
	RedemptionsRedeemResponse,
	RedemptionsRedeemStackableParams,
	RedemptionsRedeemStackableResponse,
} from './Redemptions'
import { RewardRedemptionParams } from './Rewards'
import { GiftRedemptionParams } from './Gift'
import { ValidationSessionReleaseParams } from './ValidateSession'

type ClientSideItem = Pick<
	OrdersItem,
	'source_id' | 'sku_id' | 'product_id' | 'sku' | 'quantity' | 'related_object' | 'amount' | 'price'
>

export type ClientSideCustomersUpdateConsentsBody = CustomersUpdateConsentsBody

export type ClientSideCustomersCreateParams = CustomersCreateBody

export type ClientSideCustomersCreateResponse = CustomersCreateResponse

export interface ClientSideValidateParams {
	code?: string
	tracking_id?: string
	amount?: number
	session_key?: string
	session_ttl?: number
	session_ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
	metadata?: Record<string, any>
	items?: ClientSideItem[]
	orderMetadata?: Record<string, any>
	session_type?: 'LOCK'
	customer?: Pick<CustomerRequest, 'source_id' | 'metadata'>
	reward?: {
		id: string
	}
}

export type ClientSideListVouchersParams = VouchersListParams
export type ClientSideVoucherListing = Pick<
	VouchersResponse,
	'active' | 'code' | 'metadata' | 'assets' | 'object' | 'expiration_date' | 'start_date' | 'created_at'
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
	discount?: DiscountUnit | DiscountAmount | DiscountPercent | DiscountFixed
	applicable_to?: ApplicableToResultList
	order?: {
		amount: number
		discount_amount: number
		total_discount_amount: number
		total_amount: number
		items?: ClientSideItem[]
	}
	tracking_id?: string
	campaign_id?: string
	loyalty?: {
		points_cost: number
	}
	gift?: {
		amount: number
		balance: number
	}
	promotions?: SimplePromotionTier[]
}

export interface ClientSideRedeemPayload {
	tracking_id?: string
	customer?: CustomerRequest
	order?: Pick<Partial<OrdersCreateResponse>, 'id' | 'source_id' | 'amount' | 'items' | 'status' | 'metadata'>
	metadata?: Record<string, any>
	reward?: RewardRedemptionParams
	gift?: GiftRedemptionParams
	session?: ValidationSessionReleaseParams
}

export type ClientSideRedeemOrder = Partial<Pick<OrdersCreateResponse, 'id' | 'source_id' | 'metadata' | 'amount'>> & {
	items?: ClientSideItem[]
}

export type ClientSideRedeemResponse = RedemptionsRedeemResponse

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
	customer: CustomerRequest
	loyalty?: ClientSideTrackLoyalty
	referral?: ClientSideTrackReferral
}

export interface ClientSideTrackResponse {
	object: 'event'
	type: string
}

export interface ClientSideRedeemWidgetPayload {
	order?: {
		amount?: number
	}
}
export type ClientSideTrackCustomer = CustomerRequest

export type ClientSideConsentsListResponse = ConsentsListResponse

export type ClientSideValidationsValidateStackableParams = ValidationsValidateStackableParams

export type ClientSideValidationValidateStackableResponse = ValidationValidateStackableResponseClientSide

export type ClientSideRedemptionsRedeemStackableParams = RedemptionsRedeemStackableParams

export type ClientSideRedemptionsRedeemStackableResponse = RedemptionsRedeemStackableResponse
