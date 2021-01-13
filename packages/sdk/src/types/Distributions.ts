export interface DistributionsPublicationsListParams {
	limit?: number
	page?: number
	order?: 'id' | 'voucher_code' | 'tracking_id' | 'customer_id' | 'created_at' | 'channel'
	campaign?: string
	customer?: string
	voucher?: string
	result?: string
	voucher_type?: string
	is_referral_code?: boolean
	filters?: {
		junction?: string
		[filter_condition: string]: any
	}
}

export interface DistributionsPublicationsListResponse {
	object?: 'list'
	total?: number
	data_ref?: 'publications'
	publications?: {
		id?: string
		source_id?: string
		object: 'publication'
		created_at?: string
		customer_id?: string
		tracking_id?: string
		metadata?: {}
		channel?: string
		result?: string
		customer?: {
			object?: string
			id?: string
		}
		voucher?: {
			code?: string
			object: 'voucher'
			campaign: string
			gift: {
				amount?: number
				balance?: number
			}
			loyalty_card: {
				amount?: number
				balance?: number
			}
			discount: {
				type?: string
				percent_off?: number
				amount_off?: number
				effect?: string
				unit_off?: number
				unit_type?: string
			}
			is_referral_code: boolean
		}
		vouchers?: string[]
		failure_code?: string
		failure_message?: string
	}[]
}

export interface DistributionsPublicationsCreateParams {
	join_once?: boolean
	source_id?: string
	campaign?: {
		name?: string
		count?: number
	}
	voucher?: string
	channel?: string
	customer?: {
		id?: string
		source_id?: string
		name?: string
		email?: string
		description?: string
		metadata?: Record<string, any>
	}
}

export interface DistributionsPublicationsCreateResponse {
	id?: string
	object?: string
	created_at?: string
	customer_id?: string
	tracking_id?: string
	metadata?: Record<string, any>
	channel?: string
	source_id?: string
	result?: string
	customer?: {
		id?: string
		name?: string
		email?: string
		source_id?: string
		metadata?: Record<string, any>
		object?: 'customer'
	}
	voucher: {
		id?: string
		code?: string
		campaign?: string
		campaign_id?: string
		category?: string
		type?: string
		discount?: {
			type?: string
			percent_off?: number
			amount_off?: number
			effect?: string
			unit_off?: number
			unit_type?: string
		}
		gift?: {
			amount?: number
			balance?: number
		}
		loyalty_card?: {
			amount?: number
			balance?: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: string
		validity_day_of_week?: string
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		assets?: {
			qr?: {
				id?: string
				url?: string
			}
			barcode?: {
				id?: string
				url?: string
			}
		}
		is_referral_code?: boolean
		created_at?: string
		updated_at?: string
		holder_id?: string
		object?: string
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
	}
}
