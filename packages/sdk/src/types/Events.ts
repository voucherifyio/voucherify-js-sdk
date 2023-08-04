import { CreateCustomer } from './Customers'

export interface EventsParams {
	event: string
	customer: CreateCustomer
	metadata?: Record<string, any>
	referral?: {
		code: string
		referrer_id?: string
	}
	loyalty?: {
		code: string
	}
}

export interface EventsResponse {
	object: 'event'
	type: string
	customer?: Record<string, any>
	loyalty?: Record<string, any>
	referral?: Record<string, any>
}
