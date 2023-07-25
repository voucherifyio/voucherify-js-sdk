import { CustomerRequest } from './Customers'
import { FilterConditionsNumber, FilterConditionsString, FilterJunction } from './Exports'

export type CreateOrderExport = ExportOrderObject

export interface CreateOrderExportResponse {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel: 'API' | 'WEBSITE'
	exported_object: 'order'
	parameters: ExportOrderObject
	result: {
		url: string
	}
	user_id: string
}

export interface ExportOrderObject {
	order: '-created_at' | 'created_at' | 'updated_at' | '-updated_at' | 'status' | '-status'
	fields: (
		| 'id'
		| 'source_id'
		| 'created_at'
		| 'updated_at'
		| 'status'
		| 'amount'
		| 'discount_amount'
		| 'items_discount_amount'
		| 'total_discount_amount'
		| 'total_amount'
		| 'customer_id'
		| 'referrer_id'
		| 'metadata'
	)[]
	filters:
		| FilterOrderStatus
		| FilterOrderSourceId
		| FilterOrderAmount
		| FilterOrderTotalAmount
		| FilterOrderDiscountAmount
		| FilterOrderTotalDiscountAmount
		| FilterOrderItemsDiscountAmount
}

interface FilterOrderStatus {
	status?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterOrderSourceId {
	source_id?: FilterConditionsString
	junction?: FilterJunction
}

interface FilterOrderAmount {
	amount?: FilterConditionsNumber
	junction?: FilterJunction
}

interface FilterOrderTotalAmount {
	total_amount?: FilterConditionsNumber
	junction?: FilterJunction
}

interface FilterOrderDiscountAmount {
	discount_amount?: FilterConditionsNumber
	junction?: FilterJunction
}

interface FilterOrderTotalDiscountAmount {
	total_discount_amount?: FilterConditionsNumber
	junction?: FilterJunction
}

interface FilterOrderItemsDiscountAmount {
	items_discount_amount?: FilterConditionsNumber
	junction?: FilterJunction
}

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

export type ObjectOrder = ObjectOrderApplyToOrder | ObjectOrderApplyToItems //7_obj_order_object

export interface ResponseListOrders {
	object: 'list'
	data_ref: 'orders'
	orders: OrderObject[]
	total: number
}

export interface ObjectOrderApplyToOrder {
	//7_obj_order_object_apply_to_order
	id: string
	source_id: string
	created_at: string
	updated_at: string
	status: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
	amount: number
	discount_amount: number
	total_discount_amount: number
	total_amount: number
	applied_discount_amount: number
	total_applied_discount_amount: number
	items: {
		object: 'order_item'
		product_id: string
		sku_id: string
		quantity: number
		amount: number
		price: number
		subtotal_amount: number
		product: {
			id: string
			source_id: string
			name: string
			price: number
		}
		sku: {
			id: string
			source_id: string
			sku: string
			price: number
		}
	}[]
	metadata: Record<string, any>
	customer: {
		id: string
		object: 'customer'
	}
	referrer: {
		id: string
		object: 'customer'
	}
	customer_id: string
	referrer_id: string
	object: 'order'
	redemptions: OrderObjectUnstackedRedemptions[]
}

export interface ObjectOrderApplyToItems {
	//7_obj_order_object_apply_to_items
	id: string
	source_id: string
	created_at: string
	updated_at: string
	status: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
	amount: number
	items_discount_amount: number
	total_discount_amount: number
	total_amount: number
	items_applied_discount_amount: number
	total_applied_discount_amount: number
	items: {
		object: 'order_item'
		product_id: string
		sku_id: string
		quantity: number
		amount: number
		price: number
		subtotal_amount: number
		product: {
			id: string
			source_id: string
			name: string
			price: number
		}
		sku: {
			id: string
			source_id: string
			sku: string
			price: number
		}
	}[]
	metadata: Record<string, any>
	customer: {
		id: string
		object: 'customer'
	}
	referrer: {
		id: string
		object: 'customer'
	}
	customer_id: string
	referrer_id: string
	object: 'order'
	redemptions: OrderObjectUnstackedRedemptions[]
}

export interface OrderObject {
	id: string
	source_id?: string
	created_at: string
	updated_at?: string
	status?: 'CREATED' | 'PAID' | 'PROCESSING' | 'CANCELED' | 'FULFILLED'
	amount?: number
	discount_amount?: number
	items_discount_amount?: number
	total_discount_amount?: number
	total_amount?: number
	customer_id?: string
	items?: {
		object?: 'order_item'
		sku_id?: string
		product_id?: string
		quantity?: number
		amount?: number
		discount_amount?: number
		price?: number
		subtotal_amount?: number
		product?: {
			id?: string
			source_id?: string
			name?: string
			price?: number
		}
		sku?: {
			id?: string
			source_id?: string
			sku?: string
			price?: number
		}
	}[]
	metadata?: Record<string, any>
	customer?: { id: string; object: 'customer' }
	redemptions?: OrderObjectUnstackedRedemptions | OrderObjectStackedRedemptions
	referrer?: { id: string; object: 'customer' }
	referrer_id?: string
	object: 'order'
}

//10_obj_order_object_unstacked_redemptions
type OrderObjectUnstackedRedemptions = Record<
	string,
	{
		date: string
		related_object_type: 'voucher' | 'promotion_tier'
		related_object_id: string
		related_object_parent_id: string
	}
>

type OrderObjectStackedRedemptions = Record<
	string,
	{
		date: string
		related_object_type: 'voucher' | 'promotion_tier'
		related_object_id: string
		stacked: string[]
	}
>

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
	description?: string
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

export type OrdersItemsArray = OrdersOrderItem[] //10_req_orders_items_array

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
	customer?: OrdersCustomerObject
	referrer?: OrdersCustomerObject
	amount?: number
	discount_amount?: number
	items?: OrdersOrderItem[]
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
	items?: OrdersOrderItem[]
	amount?: number
	discount_amount?: number
	metadata?: Record<string, any>
	customer?: OrdersCustomerObject
	referrer?: OrdersCustomerObject
	referrer_id?: string
	customer_id?: string
}

export type OrdersUpdateResponse = OrdersGetResponse

export interface OrdersListParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}

export interface OrdersListResponse {
	object: 'list'
	total: number
	data_ref: 'orders'
	orders: OrdersGetResponse[]
}
