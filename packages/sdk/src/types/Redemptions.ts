import { OrdersCreateResponse } from './Orders'
import { RewardsCreateResponse } from './Rewards'
import { SimpleCustomer } from './Customers'
import { VouchersResponse } from './Vouchers'

export interface RedemptionsRedeemBody {
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
	order?: Pick<Partial<OrdersCreateResponse>, 'id' | 'source_id' | 'amount' | 'items' | 'status' | 'metadata'>
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
	result: 'SUCCESS' | 'FAILURE'
	voucher: VouchersResponse
	customer?: SimpleCustomer
	reward?: RewardsCreateResponse
	related_object_type: 'voucher'
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
	failure_code?: string
	failure_message?: string
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

export interface Redemption {
	id: string
	object: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: Omit<OrdersCreateResponse, 'object'> & {
		related_object_id: string
		related_object_type: 'redemption'
		referrer?: string
	}
	metadata?: Record<string, any>
	result: 'SUCCESS' | 'FAILURE'
	failure_code?: string
	failure_message?: string
	customer?: SimpleCustomer
	related_object_type?: 'string'
	voucher?: {
		code?: string
		campaign?: string
		id: string
		object: 'voucher'
		campaign_id: string
	}
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
}

export interface RedemptionsListResponse {
	object: 'list'
	total: number
	data_ref: 'redemptions'
	redemptions: (Redemption | SimpleRollback)[]
}

export interface RedemptionsGetForVoucherResponse {
	object: 'list'
	total: number
	data_ref: string
	quantity: number
	redeemed_quantity?: number
	redeemed_amount?: number
	redemption_entries?: (Redemption | SimpleRollback)[]
}

export interface RedemptionsRollbackParams {
	reason?: string
	tracking_id?: string
	customer?: SimpleCustomer & { description?: string }
}

export interface RedemptionsRollbackQueryParams {
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
	amount?: number
	reason?: string
	result: 'SUCCESS' | 'FAILURE'
	voucher?: VouchersResponse
	customer?: SimpleCustomer
	reward?: {
		assignment_id: string
		object: 'reward'
	}
}

export type SimpleRollback = Pick<
	RedemptionsRollbackResponse,
	'id' | 'object' | 'date' | 'customer_id' | 'tracking_id' | 'redemption' | 'result' | 'customer'
> & {
	related_object_type: 'voucher'
	voucher: {
		id: string
		object: 'voucher'
		code: string
		campaign?: string
		campaign_id?: string
	}
	gift?: {
		amount: number
	}
	loyalty_card?: {
		points: number
	}
}
