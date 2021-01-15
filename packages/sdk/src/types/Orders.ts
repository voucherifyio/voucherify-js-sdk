export interface OrdersItem {
	sku_id?: string
	product_id?: string
	related_object?: 'product' | 'sku'
	source_id?: string
	quantity?: number
	price?: number
	amount?: number
	product?: {
		override?: boolean
		name?: string
		metadata?: Record<string, any>
	}
	sku?: {
		override?: boolean
		sku?: string
	}
}

export interface OrdersCreate {
	customer?: {
		source_id?: string
		name?: string
		email?: string
		metadata?: Record<string, any>
	}
	amount?: number
	items?: OrdersItem[]
	metadata?: Record<string, any>
}

export interface OrdersCreateResponse {
	id?: string
	source_id?: string
	created_at?: string
	updated_at?: string
	status?: string
	amount?: number
	discount_amount?: number
	items?: OrdersItem[]
	metadata?: Record<string, any>
	customer?: {
		id?: string
		object: 'customer'
	}
	object: 'order'
}

export type OrdersGetResponse = OrdersCreateResponse

export interface OrdersUpdate {
	id: string
	source_id?: string
	status?: 'CREATED' | 'PAID' | 'CANCELLED' | 'FULFILLED'
	items?: OrdersItem[]
	amount?: number
	metadata?: Record<string, any>
	customer?: {
		id?: string
	}
}

export type OrdersUpdateResponse = OrdersGetResponse

export interface OrdersListParams {
	limit?: number
	page?: number
}

export interface OrdersListResponse {
	object?: string
	total?: string
	data_ref: 'orders'
	orders: OrdersGetResponse[]
}
