import { OrdersItem } from './Orders'

interface VouchersDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface VouchersDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface VouchersDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

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
	discount: VouchersDiscountAmount | VouchersDiscountUnit | VouchersDiscountPercent
	order: {
		object?: 'order'
		amount?: number
		discount_amount?: number
		items?: OrdersItem[]
	}
	tracking_id: string
}
export interface ValidationsValidateCode {
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
		items?: OrdersItem[]
		amount?: number
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

export type ValidationsValidateContext = ValidationsValidateVoucherParams