interface RedemptionsVoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface RedemptionsVoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface RedemptionsVoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface RedemptionsItem {
	sku_id?: string
	product_id?: string
	related_object?: 'product' | 'sku'
	source_id?: string
	quantity?: number
	price?: number
	amount?: number
	product?: {
		override?: boolean
		name?: string
		metadata?: Record<string, any>
	}
	sku?: {
		override?: boolean
		sku?: string
	}
}

export interface RedemptionsRedeemBody {
	tracking_id?: string
	customer?: {
		id?: string
		source_id?: string
		name?: string
		email?: string
		description?: string
		metadata?: Record<string, any>
	}
	order?: {
		id?: string
		source_id?: string
		amount?: number
		items?: RedemptionsItem[]
		status?: 'CREATED' | 'PAID' | 'CANCELLED' | 'FULFILLED'
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	reward?: {
		id?: string
		points?: number
	}
	gift?: {
		credits?: number
	}
	session?: {
		key?: string
	}
}

export interface RedemptionsRedeemResponse {
	id?: string
	object?: 'redemption'
	date?: string
	customer_id?: string
	tracking_id?: string
	order?: {
		object?: 'order'
		id?: string
		source_id?: string
		amount?: 20050
		discount_amount?: 10
		created_at?: string
		updated_at?: string
		items?: RedemptionsItem[]
		customer?: {
			id?: string
			object?: string
		}
		referrer?: $FixMe
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
		discount?: RedemptionsVoucherDiscountPercent | RedemptionsVoucherDiscountAmount | RedemptionsVoucherDiscountUnit
		gift?: $FixMe
		start_date?: string
		expiration_date?: string
		validity_timeframe?: string
		publish: {
			object?: 'list'
			count?: number
			url?: string
		}
		redemption: {
			object: 'list'
			quantity?: number
			redeemed_quantity?: number
			url?: string
		}
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		is_referral_code?: false
		updated_at?: string
		object?: 'voucher'
	}
}

export interface RedemptionsListParams {
	limit?: number
	page?: number
	result?: 'SUCCESS' | 'FAILURE'
	campaign?: string
	customer?: string
	created_at?: {
		before?: string
		after?: string
	}
}

// Here API returns string for 'total' as in other API examples it returns number
export interface RedemptionsListResponse {
	object?: 'list'
	total?: string
	data_ref?: 'redemptions'
	redemptions: {
		object?: 'redemption'
		id?: string
		customer_id?: string
		tracking_id?: string
		date?: string
		result?: string
		failure_code?: $FixMe
		order?: {
			amount?: number
			items?: RedemptionsItem[]
		}
		metadata?: Record<string, any>
		voucher?: {
			code?: string
			campaign?: string
		}
		customer?: $FixMe
	}[]
}

export interface RedemptionsGetForVoucherResponse {
	object?: 'list'
	total?: number
	data_ref?: string
	quantity?: number
	redeemed_quantity?: number
	redeemed_amount?: number
	redemption_entries?: {
		id?: string
		object?: string
		date?: string
		customer_id?: string
		tracking_id?: string
		order?: {
			amount?: number
			items?: {
				product_id?: string
				sku_id?: string
				quantity?: number
			}[]
		}
		result?: string
	}[]
}

export interface RedemptionsRollbackParams {
	reason?: string
	tracking_id?: string
	customer?: {
		id?: string
		source_id?: string
		name?: string
		email?: string
		description?: string
		metadata?: Record<string, any>
	}
}

export interface RedemptionsRollbackQs {
	reason?: string
	tracking_id?: string
}

export interface RedemptionsRollbackPayload {
	customer?: {
		id?: string
		source_id?: string
		name?: string
		email?: string
		description?: string
		metadata?: Record<string, any>
	}
}

export interface RedemptionsRollbackResponse {
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	redemption?: string
	reason?: string
	result?: string
	voucher?: {
		code?: string
		campaign?: string
		category?: string
		type?: string
		discount?: RedemptionsVoucherDiscountPercent | RedemptionsVoucherDiscountAmount | RedemptionsVoucherDiscountUnit
		gift?: $FixMe
		start_date?: string
		expiration_date?: string
		publish?: {
			count?: number
			entries?: $FixMe[]
		}
		redemption?: {
			quantity?: number
			redeemed_quantity?: number
			redeemed_amount?: number
			redemption_entries?: $FixMe[]
		}
		active?: boolean
		additional_info?: string
		metadata?: Record<string, any>
		assets?: {
			qr?: {
				id?: string
				url?: string
			}
		}
	}
}
