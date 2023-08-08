import { CustomerRequest, CustomersCreateBody, CustomersCreateResponse, CustomersUpdateConsentsBody } from './Customers'
import { VouchersListParams, VouchersListResponse, VouchersResponse } from "./Vouchers";
import { OrdersCreateResponse, OrdersItem } from './Orders'
import { ConsentsListResponse } from './Consents'
import { DistributionsPublicationsCreateParams, DistributionsPublicationsCreateResponse } from './Distributions'
import {
	ResponseValidateVoucherDiscountCode,
	ResponseValidateVoucherFalse,
	ResponseValidateVoucherGiftCard,
	ResponseValidateVoucherLoyaltyCard,
	ValidationsValidateStackableParams,
	ValidationValidateStackableResponseClientSide,
} from './Validations'
import {
	RedemptionsRedeemResponse,
	RedemptionsRedeemStackableParams,
	RedemptionsRedeemStackableResponse,
} from './Redemptions'
import { RewardRedemptionParams } from './Rewards'
import { GiftRedemptionParams } from './Gift'
import { ValidationSessionReleaseParams } from './ValidateSession'
import { PromotionsValidateResponse } from './Promotions'

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

export type ClientSideListVouchersResponse = VouchersListResponse

export type ClientSideValidateResponse =
	| ResponseValidateVoucherDiscountCode
	| ResponseValidateVoucherGiftCard
	| ResponseValidateVoucherLoyaltyCard
	| ResponseValidateVoucherFalse
	| PromotionsValidateResponse

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

export type ClientSidePublishPayload = DistributionsPublicationsCreateParams

export type ClientSidePublishPreparedPayload = ClientSidePublishPayload

export interface ClientSidePublishQueryParams {
	join_once?: boolean
	campaign?: string
}

export interface ClientSidePublishCampaign {
	name: string
	count?: number
}

export type ClientSidePublishResponse = DistributionsPublicationsCreateResponse
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
