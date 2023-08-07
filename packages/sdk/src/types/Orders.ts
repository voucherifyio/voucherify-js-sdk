import { CustomerRequest } from './Customers'
import { FilterConditionsNumber, FilterConditionsString, FilterJunction } from './Exports'

export type CreateOrderExport = Partial<ExportOrderObject>

export interface ApplicableToObjectPromotionTier {
	//6_res_applicable_to_object
	data: (
		| ProductCollection
		| ProductCollectionUnit
		| ProductCollectionFixedAmount
		| Product
		| ProductUnit
		| ProductFixedAmount
		| Sku
		| SkuUnit
		| SkuFixedAmount
	)[]
	total: number
	data_ref: 'data'
	object: 'list'
}

export interface InapplicableToObjectPromotionTier {
	//6_res_applicable_to_object
	data: (ProductCollectionExcluded | ProductExcluded | SkuExcluded)[]
	total: number
	data_ref: 'data'
	object: 'list'
}
interface ProductCollectionExcluded {
	object: 'products_collection'
	id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY'
}

interface ProductExcluded {
	object: 'product'
	id: string
	source_id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY'
}

interface SkuExcluded {
	object: 'sku'
	id: string
	source_id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY'
}

interface ProductCollection {
	object: 'products_collection'
	id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
}

interface ProductCollectionUnit {
	object: 'products_collection'
	id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
	quantity_limit: number
	aggregated_quantity_limit: number
}

interface ProductCollectionFixedAmount {
	object: 'products_collection'
	id: string
	strict: boolean
	price: number
	price_formula: string
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
}

interface Product {
	object: 'product'
	id: string
	source_id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
}

interface ProductUnit {
	object: 'product'
	id: string
	source_id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
	quantity_limit: number
	aggregated_quantity_limit: number
}

interface ProductFixedAmount {
	object: 'product'
	id: string
	source_id: string
	strict: boolean
	price: number
	price_formula: string
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
}

interface Sku {
	object: 'sku'
	id: string
	source_id: string
	product_id: string
	product_source_id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
}

interface SkuUnit {
	object: 'sku'
	id: string
	source_id: string
	product_id: string
	product_source_id: string
	strict: boolean
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
	quantity_limit: number
	aggregated_quantity_limit: number
}

interface SkuFixedAmount {
	object: 'sku'
	id: string
	source_id: string
	product_id: string
	product_source_id: string
	strict: boolean
	price: number
	price_formula: string
	effect: 'APPLY_TO_EVERY' | 'APPLY_TO_CHEAPEST' | 'APPLY_TO_MOST_EXPENSIVE'
}

export interface CreateOrderExportResponse {
	id: string
	object: 'export'
	created_at: string
	status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE' | 'ERROR'
	channel: 'API' | 'WEBSITE'
	exported_object: 'order'
	parameters: Partial<ExportOrderObject>
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

export type ObjectOrder = ObjectOrderApplyToOrder | ObjectOrderApplyToItems //7_obj_order_object

export interface ObjectOrderApplyToOrder {
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
}

export type OrdersListResponse = ResponseListOrders

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
	initial_amount?: number
	discount_amount?: number
	items_discount_amount?: number
	total_discount_amount?: number
	applied_discount_amount?: number
	items_applied_discount_amount?: number
	total_amount?: number
	total_applied_discount_amount?: number
	items?: OrdersOrderItem[]
	metadata?: Record<string, any>
	customer?: CustomerRequest
	customer_id?: string
	redemptions?: Partial<OrderObjectUnstackedRedemptions | OrderObjectStackedRedemptions>
	referrer?: CustomerRequest
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
	status: 'CREATED' | 'PAID' | 'CANCELED' | 'FULFILLED'
	amount: number
	metadata: Record<string, any>
	customer: OrdersCustomerObject //10_req_orders_customer_object
	referrer: OrdersCustomerObject //10_req_orders_referrer_object
	items: OrdersOrderItem[] //10_req_orders_items_array
}

export interface OrdersCustomerObject {
	//10_req_orders_customer_object
	id?: string
	source_id?: string
	name?: string
	email?: string
	description?: string
	phone?: string
	address?: {
		city?: string
		state?: string
		line_1?: string
		line_2?: string
		country?: string
		postal_code?: string
	}
	birthdate?: string
	birthday?: string
	metadata?: Record<string, any>
}

export type OrdersItemsArray = OrdersOrderItem[] //10_req_orders_items_array

export interface OrdersOrderItem {
	//10_req_orders_order_item
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
	product?: Partial<OrdersOrderItemProduct> //10_req_orders_order_item_product
	sku?: Partial<OrdersOrderItemSku> //10_req_orders_order_item_sku
	object?: 'order_item'
	metadata?: Record<string, any>
}

export interface OrdersOrderItemProduct {
	//10_req_orders_order_item_product
	id: string
	source_id: string
	name: string
	price: number
	metadata: Record<string, any>
	override: boolean
}

export interface OrdersOrderItemSku {
	//10_req_orders_order_item_sku
	id: string
	source_id: string
	sku: string
	price: number
	metadata: Record<string, any>
	override: boolean
}

export interface OrdersItem {
	sku_id?: string | null
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
	items?: Partial<OrdersItem>[]
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
	customer?: CustomerRequest
	referrer?: CustomerRequest
	referrer_id?: string
	customer_id?: string
}

export type OrdersUpdateResponse = OrdersGetResponse

export interface OrdersListParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
}


export interface OrderObjectRollback {
	//7_obj_order_object_rollback
	id: string
	source_id?: string
	created_at: string
	updated_at?: string
	status?: 'CANCELED'
	amount?: number
	total_amount?: number
	items?: {
		object?: 'order_item'
		product_id?: string
		sku_id?: string
		quantity?: number
		amount?: number
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
			price?: string
		}
	}[]
	metadata?: Record<string, any>
	customer?: {
		id: string
		object: 'customer'
	}
	referrer?: {
		id: string
		object: 'customer'
	}
	customer_id?: string
	referrer_id?: string
	object: 'order'
	redemptions?: {
		redemption_ID?: {
			date?: string
			rollback_id?: string
			rollback_date?: string
			related_object_type?: 'voucher' | 'promotion_tier'
			related_object_id?: string
			related_object_parent_id?: string
		}
	}
}
