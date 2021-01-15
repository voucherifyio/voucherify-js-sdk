export interface VouchersItem {
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

interface DiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface DiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface DiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface VouchersQualificationExamineBody {
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
		items?: VouchersItem[]
		metadata?: Record<string, any>
	}
	reward?: {
		id?: string
		assigment_id?: string
	}
	metadata?: Record<string, any>
}

export interface VouchersQualificationExamineParams {
	audienceRulesOnly?: boolean
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at'
	limit?: number
}

export interface VouchersQualificationExamineResponse {
	id?: string
	created_at?: string
	object?: 'list'
	total?: number
	data_ref?: 'data'
	data?: {
		id?: string
		code?: string
		campaign?: string
		category?: string
		type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
		discount: DiscountAmount | DiscountPercent | DiscountUnit
		gift?: {
			amount?: number
		}
		loyalty_card?: {
			points?: number
		}
		start_date?: string
		expiration_date?: string
		validity_timeframe?: string
		validity_day_of_week?: string
		publish?: {
			object?: 'list'
			count?: number
			url?: string
		}
		redemption?: {
			object?: 'list'
			quantity: number
			redeemed_quantity: number
			url?: string
		}
		active?: boolean
		additional_info?: string
		metadata: Record<string, any>
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
		updated_at?: string
		object?: 'voucher'
		validation_rules_assignments: {
			object?: 'list'
			total?: number
			data_ref?: 'data'
			data?: {
				id?: string
				rule_id?: string
				related_object_id?: string
				related_object_type?: string
				created_at?: string
				object?: 'validation_rules_assignment'
			}[]
		}
	}[]
}

export interface VouchersCreate {
	code: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount: DiscountAmount | DiscountPercent | DiscountUnit
	gift?: {
		amount?: number
	}
	category?: string
	additional_info?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	redemption?: {
		quantity?: number
	}
	code_config?: {
		length?: number
		charset?: string
		pattern?: string
		prefix?: string
		suffix?: string
	}
	metadata?: Record<string, any>
}

export interface VouchersCreateResponse {
	code: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount: DiscountAmount | DiscountPercent | DiscountUnit
	gift?: {
		amount?: number
	}
	category?: string
	additional_info?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	publish?: {
		object?: 'list'
		count?: number
		url?: string
	}
	redemption?: {
		object?: 'list'
		quantity?: number
		redeemed_quantity?: number
		url?: string
	}
	metadata?: Record<string, any>
}

export interface VouchersGetResponse {
	code: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount: DiscountAmount | DiscountPercent | DiscountUnit
	gift?: {
		amount?: number
	}
	category?: string
	additional_info?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	publish?: {
		object?: 'list'
		count?: number
		data_ref?: 'entries'
		entries?: $FixMe[]
		total?: number
		url?: string
	}
	redemption?: {
		object?: 'list'
		total?: number
		data_ref?: 'redemption_entries'
		quantity?: number
		redeemed_quantity?: number
		redeemed_amount?: number
		url?: string
		redemption_entries?: $FixMe[]
	}
	assets?: {
		barcode?: {
			id?: string
			url?: string
		}
		qr?: {
			id?: string
			url?: string
		}
	}
	metadata?: Record<string, any>
}

export interface VouchersUpdate {
	code?: string
	category?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	additional_info?: string
	metadata?: Record<string, any>
	gift?: {
		amount?: number
	}
}

export type VouchersUpdateResponse = VouchersCreateResponse

export interface VouchersDeleteParams {
	force?: boolean
}

export interface VouchersListParams {
	limit?: number
	page?: number
	category?: string
	campaign?: string
	customer?: string
	created_at?: {
		after?: string
		before?: string
	}
	updated_at?: {
		after?: string
		before?: string
	}
}

export interface VouchersListResponse {
	object?: 'list'
	total?: number
	data_ref?: 'vouchers'
	vouchers: VouchersGetResponse[]
}

export interface VouchersEnableParams {
	code?: string
}

export type VouchersEnableResponse = VouchersCreateResponse

export interface VouchersDisableParams {
	code?: string
}

export type VouchersDisableResponse = VouchersCreateResponse

export interface VouchersImport {
	code: string
	category?: string
	type?: 'DISCOUNT_VOUCHER' | 'GIFT_VOUCHER'
	discount: DiscountAmount | DiscountPercent | DiscountUnit
	additional_info?: string
	start_date?: string
	expiration_date?: string
	active?: boolean
	metadata?: Record<string, any>
}

export interface VouchersImportResponse {}
