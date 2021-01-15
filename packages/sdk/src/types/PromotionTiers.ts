interface PromotionTiersVoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface PromotionTiersVoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface PromotionTiersVoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface PromotionTiersTier {
	id?: string
	object?: string
	name?: string
	banner?: string
	campaign?: {
		id?: string
		object?: 'campaign'
		start_date?: string
		expiration_date?: string
		active?: boolean
	}
	validation_rule_assignments?: {
		object?: 'list'
		total?: number
		data_ref?: 'data'
		data: {
			id?: string
			rule_id?: string
			related_object_id?: string
			related_object_type?: 'promotion_tier'
			created_at?: string
			updated_at?: string
			object?: 'validation_rules_assignment'
		}[]
	}
	action: {
		discount?:
			| PromotionTiersVoucherDiscountUnit
			| PromotionTiersVoucherDiscountAmount
			| PromotionTiersVoucherDiscountPercent
	}
	metadata: Record<string, any>
}

export interface PromotionTiersItem {
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

export interface PromotionTiersListAllParams {
	is_available?: boolean
	limit?: number
	page?: number
}

export interface PromotionTiersListAllResponse {
	object?: 'list'
	data_ref?: string
	tiers?: PromotionTiersTier[]
	has_more?: boolean
}

export type PromotionTiersListResponse = Omit<PromotionTiersListAllResponse, 'has_more'> & { total?: number }

export interface PromotionTiersCreateParams {
	name?: string
	banner?: string
	action?: {
		discount?:
			| PromotionTiersVoucherDiscountUnit
			| PromotionTiersVoucherDiscountAmount
			| PromotionTiersVoucherDiscountPercent
	}
	metadata?: Record<string, any>
}

export type PromotionTiersCreateResponse = Omit<PromotionTiersTier, 'validation_rule_assigments'>

export interface PromotionTiersRedeemParams {
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
		items?: PromotionTiersItem[]
		status?: 'CREATED' | 'PAID' | 'CANCELLED' | 'FULFILLED'
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
	session?: {
		key?: string
	}
}

export interface PromotionTiersRedeemResponse {
	id?: string
	object?: string
	date?: string
	customer_id?: string
	tracking_id?: string
	order: {
		object?: 'order'
		id?: string
		source_id?: string
		amount?: number
		discount_amount?: number
		created_at?: string
		updated_at?: string
		items?: PromotionTiersItem[]
		customer?: {
			id: string
			object: string
		}
		referrer?: $FixMe
		status?: string
		metadata?: Record<string, any>
	}
	result?: string
	promotion_tier?: {
		id?: string
		object?: 'promotion_tier'
		name?: string
		banner?: string
		campaign?: {
			id?: string
			object?: 'campaign'
			start_date?: string
			expiration_date?: string
			active?: boolean
		}
		condition?: {
			id?: string
			created_at?: string
			junction?: 'AND' | 'OR'
			[orders: string]: $FixMe
		}
		action?: {
			discount?:
				| PromotionTiersVoucherDiscountUnit
				| PromotionTiersVoucherDiscountAmount
				| PromotionTiersVoucherDiscountPercent
		}
		metadata?: Record<string, any>
	}
}

export type PromotionTiersUpdateParams = PromotionTiersCreateParams

export type PromotionTiersUpdateResponse = Omit<PromotionTiersTier, 'validation_rule_assigments'>
