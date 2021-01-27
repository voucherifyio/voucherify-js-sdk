export interface RewardsListParams {
	page?: number
	limit?: number
}

export interface RewardsResponse {
	id: string
	name?: string
	stock?: number
	redeemed?: number
	attributes?: {
		image_url?: string
		description?: string
	}
	created_at: string
	updated_at?: string
	object: 'reward'
}

export type RewardsCreateResponse = RewardsResponse & RewardsTypeResponse

export interface RewardsListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: RewardsCreateResponse[]
}

export interface Rewards {
	name: string
	stock?: number
	attributes?: {
		image_url?: string
		description?: string
	}
}

interface RewardsTypeMaterial {
	type?: 'MATERIAL'
	parameters: {
		product?: {
			id?: string
			sku?: string
		}
	}
}

interface RewardsTypeCampaign {
	type?: 'CAMPAIGN'
	parameters: {
		campaign?: {
			id: string
			balance?: number
		}
	}
}

export type RewardsTypeCampaignResponse = RewardsTypeCampaign & {
	parameters: { campaign?: { type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM' } }
}

interface RewardsTypeCoin {
	type?: 'COIN'
	parameters: {
		coin?: {
			exchange_ratio?: number
		}
	}
}

export type RewardsType = RewardsTypeCampaign | RewardsTypeCoin | RewardsTypeMaterial

export type RewardsTypeResponse = RewardsTypeCampaignResponse | RewardsTypeCoin | RewardsTypeMaterial

export type RewardsCreate = Rewards & RewardsType

export type RewardsGetResponse = RewardsCreateResponse

export type RewardsUpdate = Omit<RewardsCreate, 'type'> & { id: string }

export type RewardsUpdateResponse = RewardsCreateResponse

export interface RewardsAssigmentObject {
	id: string
	reward_id: string
	related_object_id?: string
	related_object_type?: string
	parameters?: {
		loyalty?: {
			points: number
		}
	}
	created_at: string
	updated_at?: string
	object: 'reward_assignment'
}

export interface RewardsListAssigmentsParams {
	limit?: number
	page?: number
}

export interface RewardsListAssigmentsResponse {
	total: number
	data: RewardsAssigmentObject[]
	object: 'list'
	data_ref: 'data'
}

export interface RewardsCreateAssigment {
	campaign?: string
	parameters?: {
		loyalty?: {
			points: number
		}
	}
}

export type RewardsCreateAssigmentResponse = RewardsAssigmentObject

export type RewardsUpdateAssigment = RewardsCreateAssigment & { id: string }

export type RewardsUpdateAssigmentResponse = RewardsAssigmentObject
