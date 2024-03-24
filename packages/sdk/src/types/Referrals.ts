export interface RedeemableHoldersListQueryParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'id' | '-id'
	starting_after_id?: string
	filters?: Record<string, any>
}

export interface RedeemableHoldersListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: Record<string, RedeemableHolder>[]
}

export interface RedeemableHolder {
	id: string
	created_at: string
	redeemable_id: string
	redeemable_object: string
	customer_id: string
	holder_role: 'OWNER' | 'REFERRER' | 'REFEREE'
	campaign_id: string
	campaign_type: 'LOYALTY_PROGRAM' | 'PROMOTION' | 'DISCOUNT_COUPONS' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
	voucher_type: 'GIFT' | 'DISCOUNT' | 'LOYALTY_CARD' | 'LUCKY_DRAW'
	object: 'redeemable_holder'
}
