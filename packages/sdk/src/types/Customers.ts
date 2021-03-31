export interface SimpleCustomer {
	id: string
	name?: string
	email?: string
	source_id?: string
	metadata?: Record<string, any>
	object: 'customer'
}

export interface CustomerObject {
	id: string
	source_id?: string
	name?: string
	email?: string
	phone?: string
	description?: string
	address: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	}
	summary: {
		redemptions: {
			total_redeemed: number
			total_failed: number
			total_succeeded: number
			total_rolled_back: number
			total_rollback_failed: number
			total_rollback_succeeded: number
			gift?: {
				redeemed_amount: number
				amount_to_go: number
			}
			loyalty?: {
				redeemed_points: number
				points_to_go: number
			}
		}
		orders: {
			total_amount: number
			total_count: number
			average_amount: number
			last_order_amount: number
			last_order_date?: string
		}
	}
	loyalty: {
		points: number
		referred_customers: number
		campaigns?: Record<
			string,
			{
				points: number
				referred_customers: number
			}
		>
	}
	metadata: Record<string, any>
	created_at: string
	object: 'customer'
}

export interface CustomerRequest {
	id?: string
	name?: string
	email?: string
	metadata?: Record<string, any>
	description?: string
	source_id?: string
	address?: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	}
	phone?: string
}

export interface CustomersCommonListRequest {
	limit?: number
	page?: number
	email?: string
	city?: string
	name?: string
	order?: 'created_at' | '-created_at'
	starting_after?: Date | string
}

export interface CustomersCommonListResponse {
	object: 'list'
	total: number
	data_ref: 'customers'
	customers: CustomerObject[]
	has_more?: boolean
}

export type CustomersCreateBody = CustomerRequest
export type CustomersCreateResponse = CustomerObject

export type CustomersGetResponse = CustomerObject

export type CustomersListParams = CustomersCommonListRequest
export type CustomersListResponse = CustomersCommonListResponse

export type CustomersScrollParams = CustomersCommonListRequest
export type CustomersScrollResponse = CustomersCommonListResponse
export type CustomersScrollYield = CustomerObject

export type CustomersUpdateParams = { id: string } | { source_id: string }
export type CustomersUpdateResponse = CustomerObject

export type CustomersUpdateConsentsBody = Record<string, boolean>
