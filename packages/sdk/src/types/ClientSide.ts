export interface ClientSideParams {
	code?: string
	tracking_id?: string
	amount?: number
	order?: {
		items?: {
			source_id?: string
			product_id?: string
			sku_id?: string
			quantity?: number
		}[]
		metadata?: Record<string, any>
	}
	customer?: {
		source_id?: string
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	session_type?: 'LOCK'
	session_key?: string
	session_ttl?: number
	session_ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
}

export interface ClientSidePayload {
	tracking_id?: string
	customer?: {
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
	order?: {
		id?: string
		source_id?: string
		amount?: number
		metadata?: Record<string, any>
		items?: {
			source_id?: string
			product_id?: string
			sku_id?: string
			quantity?: number
		}[]
	}
	metadata?: Record<string, any>
	reward?: {
		id?: string
	}
	session?: {
		key?: string
	}
}

export interface ClientSideResponse {
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: {
		object?: string
		id?: string
		source_id?: string
		amount?: number
		discount_amount?: number
		created_at?: string
		updated_at?: string
		items?: {
			source_id?: string
			product_id?: string
			sku_id?: string
			quantity?: number
		}[]
		customer?: {
			id?: string
			object?: string
		}
		referrer?: string
		status?: string
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	result?: string
	voucher?: {
		code?: string
		campaign?: string
		category?: string
		type?: string
		discount?: {
			type?: string
			effect?: string
			unit_type?: string
			unit_off?: number
			amount_off?: number
			precent_off?: number
		}
		gift?: {
			credits?: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: string
		publish?: {
			object?: string
			count?: number
			url?: string
		}
		redemption?: {
			object?: string
			quantity?: number
			redeemed_quantity?: number
			url?: string
		}
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		is_referral_code?: boolean
		updated_at?: string
		object?: string
	}
}

export interface ClientSideEventCustomer {
	id?: string
	source_id?: string
	name?: string
	email?: string
	description?: string
	metadata?: Record<string, any>
}

export interface ClientSideReferral {
	code?: string
}

export interface ClientSideLoyalty {
	code?: string
}

export interface ClientSideTrackPayload {
	event: string
	metadata?: Record<string, any>
	customer?: any
	referral?: ClientSideReferral
	loyalty?: ClientSideLoyalty
}

export interface CliendSideTrackResponse {
	object?: 'event'
	type?: string
}

export type ClientSideValidationParams = ClientSideParams
export type ClientSideRedeemPayload = ClientSidePayload
export type ClientSideRedeemResponse = ClientSideResponse
export type ClientSideTrackEventCustomer = ClientSideEventCustomer
export type ClientSideTrackEventReferral = ClientSideReferral
export type ClientSideTrackEventLoyalty = ClientSideLoyalty
export type ClientSideTrackEventPayload = ClientSideTrackPayload
export type ClientSideTrackEventResponse = CliendSideTrackResponse
