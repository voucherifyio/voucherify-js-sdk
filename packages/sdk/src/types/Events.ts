import { CustomerRequest } from './Customers'

export interface EventsParams {
	event: string
	customer: CustomerRequest
	metadata?: Record<string, any>
	referral?: {
		code: string
		referrer_id?: string
	}
	loyalty?: {
		code: string
	}
}

export type EventsResponse = {
	object: 'event'
	type: string
} & Record<string, any>
