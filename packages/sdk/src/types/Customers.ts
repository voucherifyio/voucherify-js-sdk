export declare namespace Customers {
	interface CustomerObject {
		id: string
		source_id: string
		name: string
		email: string
		phone: string
		description: string
		address: {
			city: string
			state: string
			line_1: string
			line_2: null
			country: string
			postal_code: string
		}
		summary: {
			redemptions: {
				total_redeemed: number
				total_failed: number
				total_succeeded: number
				total_rolled_back: number
				total_rollback_failed: number
				total_rollback_succeeded: number
				gift: {
					redeemed_amount: number
					amount_to_go: number
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
		}
		metadata: {
			lang: string
		}
		created_at: string
		object: string
	}

	interface CustomerRequest {
		id?: string
		name?: string
		email?: string
		metadata?: Record<string, string>
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

	interface ListRequest {
		limit?: number
		page?: number
		email?: string
		city?: string
		name?: string
		order?: 'created_at' | '-created_at'
		starting_after?: Date | string
	}

	interface ListResponse {
		object: 'list'
		total: number
		data_ref: 'customers'
		customers: CustomerObject[]
		has_more?: boolean
	}

	namespace Create {
		type Body = CustomerRequest
		type Response = CustomerObject
	}
	namespace Get {
		type Response = CustomerObject
	}
	namespace List {
		type Params = ListRequest
		type Response = ListResponse
	}
	namespace Scroll {
		type Params = ListRequest
		type Response = ListResponse
		type Yield = CustomerObject
	}
	namespace Update {
		type Params = { id: string } | { source_id: string }
		type Response = CustomerObject
	}
	namespace UpdateConsents {
		type Params = { id: string } | { source_id: string }
		type Consents = Record<string, boolean>
	}
}
