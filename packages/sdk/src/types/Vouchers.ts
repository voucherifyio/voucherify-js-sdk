export interface VoucherObject {
	id?: string
	code?: string
	campaign?: string
	campaign_id?: string
	category?: string
	type?: string
	is_referral_code?: boolean
	discount?: VoucherDiscountUnit | VoucherDiscountAmount | VoucherDiscountPercent
	redemption?: {
		quantity?: number
	}
	loyalty_card?: VoucherLoyaltyCard
	gift?: VoucherGiftCard
	code_config?: {
		lenght?: number
		charset?: string
		pattern?: string
	}
	metadata: Record<string, any>
}

export interface VoucherDiscountUnit {
	type?: 'UNIT'
	unit_off?: number
	unit_type?: string
	effect?: string
}
export interface VoucherDiscountAmount {
	type?: 'AMOUNT'
	amount_off?: number
}
export interface VoucherDiscountPercent {
	type?: 'PERCENT'
	percent_off?: number
}

export interface VoucherLoyaltyCard {
	points?: number
	balance?: number
}

export interface VoucherGiftCard {
	amount?: number
	balance?: number
}
