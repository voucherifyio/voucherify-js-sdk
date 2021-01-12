export interface Item {
	source_id?: string
	product_id?: string
	sku_id?: string
	quantity?: number
}

export interface ValidationParams {
	code?: string
	tracking_id?: string
	amount?: number
	order?: {
		items?: Item[]
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

export interface RedeemPayload {
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
		items?: Item[]
	}
	metadata?: Record<string, any>
	reward?: {
		id?: string
	}
	session?: {
		key?: string
	}
}

export interface RedeemResponse {
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
		items?: Item[]
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

export type ClientSideValidationParams = ValidationParams
export type ClientSideRedeemPayload = RedeemPayload
export type ClientSideRedeemResponse = RedeemResponse
