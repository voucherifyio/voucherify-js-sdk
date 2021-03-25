import { DiscountAmount, DiscountPercent, DiscountUnit } from './Vouchers'

import { OrdersItem } from './Orders'
import { PromotionsValidateParams } from './Promotions'

export interface ValidationsValidateVoucherParams {
	customer?: {
		id?: string
		source_id?: string
		name?: string
		email?: string
		description?: string
		metadata?: Record<string, any>
	}
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: OrdersItem[]
		metadata?: Record<string, any>
	}
	gift?: {
		credits: number
	}
	reward?: {
		id: string
	}
	session?: {
		type: 'LOCK'
		key?: string
		ttl?: number
		ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
	}
}

export interface ValidationsValidateVoucherResponse {
	applicable_to?: {
		object: 'list'
		total: number
		data?: {
			id: string
			object: 'product'
			source_id?: string
		}[]
	}
	campaign?: string
	campaign_id?: string
	metadata?: Record<string, any>
	code?: string
	valid?: boolean
	discount?: DiscountAmount | DiscountUnit | DiscountPercent
	gift?: {
		amount: number
		balance: number
	}
	loyalty?: {
		points_cost: number
	}
	order?: {
		amount: number
		discount_amount: number
		total_discount_amount: number
		total_amount: number
		items?: OrdersItem[]
	}
	tracking_id: string
}

export type ValidationsValidateCode = PromotionsValidateParams

export type ValidationsValidateContext = ValidationsValidateVoucherParams
