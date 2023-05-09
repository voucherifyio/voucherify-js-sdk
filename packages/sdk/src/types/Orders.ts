import { CustomerRequest } from './Customers'

export interface OrdersItem {
	sku_id?: string
	product_id?: string
	related_object?: 'product' | 'sku'
	source_id?: string
	discount_quantity?: number
	initial_quantity?: number
	quantity?: number
	price?: number
	amount?: number
	discount_amount?: number
	initial_amount?: number
	applied_discount_amount?: number
	subtotal_amount?: number
	product?: {
		id?: string
		source_id?: string
		override?: boolean
		name?: string
		metadata?: Record<string, any>
		price?: number
	}
	sku?: {
		id?: string
		source_id?: string
		override?: boolean
		sku?: string
		price?: number
	}
	object?: 'order_item'
	metadata?: Record<string, any>
}

export interface OrdersCreate {
	source_id?: string
	status?: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
	customer?: CustomerRequest
	amount?: number
	discount_amount?: number
	items?: OrdersItem[]
	metadata?: Record<string, any>
}

export interface OrdersCreateResponse {
	id: string
	source_id?: string
	created_at: string
	updated_at?: string
	status?: 'CREATED' | 'PAID' | 'PROCESSING' | 'CANCELED' | 'FULFILLED'
	amount?: number
	initial_amount?: number
	discount_amount?: number
	items_discount_amount?: number
	total_discount_amount?: number
	applied_discount_amount?: number
	items_applied_discount_amount?: number
	total_amount?: number
	total_applied_discount_amount?: number
	items?: OrdersItem[]
	metadata?: Record<string, any>
	customer?: CustomerRequest
	object: 'order'
}

export type OrdersGetResponse = OrdersCreateResponse

export interface OrdersUpdate {
	id: string
	source_id?: string
	status?: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
	items?: OrdersItem[]
	amount?: number
	discount_amount?: number
	metadata?: Record<string, any>
	customer?: {
		id: string
	}
}

export type OrdersUpdateResponse = OrdersGetResponse

export interface OrdersListParams {
	limit?: number
	page?: number
}

export interface OrdersListResponse {
	object: 'list'
	total: number
	data_ref: 'orders'
	orders: OrdersGetResponse[]
}
