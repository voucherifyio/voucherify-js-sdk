export interface EventsParams {
	event?: string
	customer?: {
		source_id?: string
		id?: string
		name?: string
		email?: string
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	referral?: {
		code?: string
		referrer_id?: string
	}
	loyalty?: {
		code?: string
	}
}

export interface EventsResponse {
	object?: 'event'
	type?: string
}
