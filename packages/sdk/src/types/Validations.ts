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

interface VouchersDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface VouchersDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface VouchersDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface ValidationsValidateVoucherParams {
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
	gift?: {
		credits?: number
	}
	session?: {
		type?: 'LOCK'
		key?: string
		ttl?: number
		ttl_unit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS'
	}
}

export interface ValidationsValidateVoucherResponse {
	code?: string
	valid?: boolean
	discount: VouchersDiscountAmount | VouchersDiscountUnit | VouchersDiscountPercent
	order: {
		object?: 'order'
		amount?: number
		discount_amount?: number
		items?: VouchersItem[]
	}
	tracking_id?: string
}
export interface ValidationsValidateCode {
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
		items?: VouchersItem[]
		amount?: number
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

export type ValidationsValidateContext = ValidationsValidateVoucherParams
