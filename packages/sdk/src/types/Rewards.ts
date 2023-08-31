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

interface RewardsTypeCampaignResponse {
	type?: 'CAMPAIGN'
	parameters: {
		campaign?: {
			id: string
			balance?: number
			type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
		}
	}
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

export type RewardsTypeResponse =
	| Required<RewardsTypeCampaignResponse>
	| Required<RewardsTypeCoin>
	| Required<RewardsTypeMaterial>

export type RewardsCreate = Rewards & RewardsType

export type RewardsGetResponse = RewardsCreateResponse

export type RewardsUpdate = Omit<RewardsCreate, 'type'> & { id: string }

export type RewardsUpdateResponse = RewardsCreateResponse

export interface RewardsAssignmentObjectCommon {
	id: string
	reward_id: string
	related_object_id: string
	related_object_type: 'campaign'
	parameters: {
		loyalty: {
			points?: number
		}
	}
	created_at: string
	object: 'reward_assignment'
}

export interface RewardsAssignmentObject extends RewardsAssignmentObjectCommon {
	updated_at: string | null
}

export interface RewardsListAssignmentsParams {
	limit?: number
	page?: number
}

export interface RewardsListAssignmentsResponse {
	total: number
	data: RewardsAssignmentObject[]
	object: 'list'
	data_ref: 'data'
}

export interface RewardsCreateAssignment {
	campaign: string
	parameters: {
		loyalty: {
			points?: number
		}
	}
}

export type RewardsCreateAssignmentResponse = RewardsAssignmentObjectCommon & { updated_at: null }

export type RewardsUpdateAssignment = Partial<RewardsCreateAssignment> & { id: string }

export type RewardsUpdateAssignmentResponse = RewardsAssignmentObjectCommon & { updated_at: string }

export interface RewardRedemptionParams {
	points?: number
	assignment_id?: string
	id?: string
}
