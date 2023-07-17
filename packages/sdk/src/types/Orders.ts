import { CustomerRequest } from './Customers'

export interface ValidateVoucherOrderId {
	id: string
}
export interface ValidateVoucherOrderSourceId {
	source_id: string
}

export interface ValidateVoucherOrderId {
	//6_req_validate_voucher_order_id
	id: string
}

export interface ValidateVoucherOrderSourceId {
	//6_req_validate_voucher_order_source_id
	source_id: string
}

export interface CreateOrder {
	//10_req_create_order
	source_id: string
	status: 'CREATED' | 'PAID' | 'CANCELED' | 'FULLFILLED'
	amount: number
	metadata: Record<string, any>
	customer: OrdersCustomerObject //10_req_orders_customer_object
	referrer: OrdersCustomerObject //10_req_orders_referrer_object
	items: OrdersItemsArray //10_req_orders_items_array
}

export interface OrdersCustomerObject {
	//10_req_orders_customer_object
	id: string
	source_id: string
	name: string
	email: string
	phone: string
	address: {
		city: string
		state: string
		line_1: string
		line_2: string
		country: string
		postal_code: string
	}
	birthdate?: string
	birthday?: string
	metadata?: Record<string, any>
}

export type OrdersReferrerObject = OrdersCustomerObject //10_req_orders_referrer_object

type OrdersItemsArray = OrdersOrderItem[] //10_req_orders_items_array

export interface OrdersOrderItem {
	//10_req_orders_order_item
	source_id: string
	related_object: string
	product_id: string
	sku_id: string
	quantity: number
	price: number
	amount: number
	product: OrdersOrderItemProduct //10_req_orders_order_item_product
	sku: OrdersOrderItemSku //10_req_orders_order_item_sku
}

export interface OrdersOrderItemProduct {
	//10_req_orders_order_item_product
	source_id: string
	name: string
	price: number
	metadata: Record<string, any>
	override: boolean
}

export interface OrdersOrderItemSku {
	//10_req_orders_order_item_sku
	source_id: string
	sku: string
	price: number
	metadata: Record<string, any>
	override: boolean
}

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
