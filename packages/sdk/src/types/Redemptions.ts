import { OrdersItem, OrdersCreateResponse } from './Orders'
import { SimpleCustomer } from './Customers'
import { VouchersResponse } from './Vouchers'

export interface RedemptionsRedeemBody {
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
	order?: Pick<OrdersCreateResponse, 'id' | 'source_id' | 'amount' | 'items' | 'status' | 'metadata'>
	metadata?: Record<string, any>
	reward?: {
		id?: string
		points?: number
	}
	gift?: {
		credits: number
	}
	session?: {
		key: string
	}
}

export interface RedemptionsRedeemResponse {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: OrdersCreateResponse
	metadata?: Record<string, any>
	result?: string
	voucher?: VouchersResponse
}

export interface RedemptionsListParams {
	limit?: number
	page?: number
	result?: 'SUCCESS' | 'FAILURE'
	campaign?: string
	customer?: string
	created_at?: {
		before?: string
		after?: string
	}
}

export interface RedemptionsListResponse {
	object: 'list'
	total: number
	data_ref: 'redemptions'
	redemptions: {
		id?: string
		object: 'redemption'
		date?: string
		customer_id?: string
		tracking_id?: string
		order?: {
			amount?: number
			items?: OrdersItem[]
		}
		metadata?: Record<string, any>
		result?: string
		customer?: SimpleCustomer
		related_object_type?: 'string'
		voucher?: {
			code?: string
			campaign?: string
		}
		gift?: {
			amount: number
		}
		loyalty_card?: {
			points: number
		}
	}[]
}

export interface RedemptionsGetForVoucherResponse {
	object: 'list'
	total: number
	data_ref: string
	quantity: number
	redeemed_quantity?: number
	redeemed_amount?: number
	redemption_entries?: {
		id?: string
		object?: string
		date?: string
		customer_id?: string
		tracking_id?: string
		order?: {
			amount?: number
			items?: Pick<OrdersItem, 'product_id' | 'sku_id' | 'quantity'>[]
		}
		result?: string
	}[]
}

export interface RedemptionsRollbackParams {
	reason?: string
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
}

export interface RedemptionsRollbackQs {
	reason?: string
	tracking_id?: string
}

export interface RedemptionsRollbackPayload {
	customer?: SimpleCustomer & { description?: string }
}

export interface RedemptionsRollbackResponse {
	id: string
	object: 'redemption_rollback'
	date?: string
	customer_id?: string
	tracking_id?: string
	redemption?: string
	reason?: string
	result?: string
	voucher?: VouchersResponse
}
