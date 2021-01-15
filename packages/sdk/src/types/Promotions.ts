export interface PromotionsItem {
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
interface PromotionsVoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	effect?: string
}

interface PromotionsVoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: string
}

interface PromotionsVoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface PromotionsCreate {
	name: string
	campaign_type: 'PROMOTION'
	start_date?: string
	expiration_date: string
	promotion: {
		tiers: {
			name: string
			banner: string
			action: {
				discount?: PromotionsVoucherDiscountAmount | PromotionsVoucherDiscountPercent | PromotionsVoucherDiscountUnit
			}
		}[]
	}
}

export interface PromotionsValidateParams {
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
		items?: PromotionsItem[]
		amount?: number
		metadata?: Record<string, any>
	}
	metadata?: Record<string, any>
}

export interface PromotionsValidateResponse {
	valid?: boolean
	promotions?: {
		id?: string
		object?: 'promotion_tier'
		banner?: string
		discount?: PromotionsVoucherDiscountAmount | PromotionsVoucherDiscountPercent | PromotionsVoucherDiscountUnit
		discount_amount?: number
	}[]
	tracking_id?: string
}
