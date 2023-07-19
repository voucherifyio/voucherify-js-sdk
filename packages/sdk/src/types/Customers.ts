export interface SimpleCustomer {
	id: string
	name?: string
	email?: string
	source_id?: string
	metadata?: Record<string, any>
	object: 'customer'
}


export type CustomerUnconfirmed = Pick<CustomerObject, 'summary' | 'email' | 'loyalty'> & {
	object: 'unconfirmed_customer'
}

export interface ValidateVoucherCustomerId {
	//6_req_validate_voucher_customer_id
	id: string
}

export interface ValidateVoucherSourceId {
	//6_req_validate_voucher_customer_source_id
	source_id: string
}
export interface CreateCustomer {
	source_id?: string
	name?: string
	email?: string
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
} //9_req_create_customer
export interface CustomerRequest {
	id?: string
	source_id?: string
	name?: string
	email?: string
	metadata?: Record<string, any>
	description?: string
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

export interface CustomerActivitiesListQueryParams {
	limit?: number
	order?: 'created_at' | '-created_at'
	starting_after?: string
	starting_after_id?: string
	campaign_type?: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	campaign_id?: string
}

export interface CustomerActivitiesListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: Record<string, any>[]
}

export type CustomersCreateBody = CustomerRequest
export type CustomersCreateResponse = CustomerObject | CustomerUnconfirmed

export type CustomersGetResponse = CustomerObject | CustomerUnconfirmed

export interface CustomersListParams {
	limit?: number
	page?: number
	email?: string
	city?: string
	name?: string
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'source_id' | '-source_id'
	starting_after?: string
}
export type CustomersListResponse = CustomersCommonListResponse

export type CustomersScrollParams = CustomersCommonListRequest
export type CustomersScrollResponse = CustomersCommonListResponse
export type CustomersScrollYield = CustomerObject

type IdOrSourceId = { id: string } | { source_id: string }
export type CustomersUpdateParams = CustomerRequest & IdOrSourceId

export type CustomersUpdateResponse = CustomerObject | CustomerUnconfirmed

export type CustomersUpdateConsentsBody = Record<string, boolean>

export interface ListCustomers {
	//9_res_list_customers
	object: 'list'
	data_ref: 'customers'
	customers: CustomerObject[] //9_obj_customer_object
	total: number
}

export interface CustomerObject {
	//9_obj_customer_object
	id: string
	source_id: string
	name: string
	birthday: string
	email: string
	phone: string
	birthdate: string
	description: string
	address?: {
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
			total_rollback_succeeded: number
			total_rollback_failed: number
			gift: {
				redeemed_amount: number
				amount_to_go: number
			}
			loyalty_card: {
				redeemed_points: number
				points_to_go: number
			}
		}
		orders: {
			total_amount: number
			total_count: number
			average_amount: number
			last_order_amount: number
			last_order_date: string
		}
	}
	loyalty: {
		points: number
		referred_customers: number
		campaigns: {
			campaign_name: {
				points: number
				loyalty_tier: string
				referred_customers: number
			}
		}
	}
	referrals: {
		total: number
		campaigns: {
			campaign_id: string
			referrer_id: string
			related_object_id: string
			related_object_type: string
			date: string
		}[]
	}
	metadata: Record<string, any>
	system_metadata: {
		consents: {
			consentId: {
				date: string
				value: boolean
			}
		}
		source: string
	}
	created_at: string
	updated_at: string
	assets: {
		cockpit_url: string
	}
	object: 'customer'
}
