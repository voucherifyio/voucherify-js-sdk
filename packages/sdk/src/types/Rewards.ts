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
export type RewardsGetResponse = RewardsResponse & RewardsTypeResponse

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

export type RewardsUpdate = Omit<RewardsCreate, 'type'> & { id: string }

export type RewardsUpdateResponse = RewardsCreateResponse

export interface RewardsAssignmentObject {
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
	campaign?: string
	parameters?: {
		loyalty?: {
			points: number
		}
	}
}

export type RewardsCreateAssignmentResponse = RewardsAssignmentObject

export type RewardsUpdateAssignment = RewardsCreateAssignment & { id: string }

export type RewardsUpdateAssignmentResponse = RewardsAssignmentObject

export interface RewardRedemptionParams {
	points?: number
	assignment_id?: string
	id?: string
}

// Domain types
// Reward

export type Reward = {
	id: string
	name?: string
	stock?: string
	redeemed?: string
	attributes?: {
		image_url?: string
		description?: string
	}
	created_at: string
	updated_at?: string
	object: 'reward'
} & RewardType

export interface RewardTypeCampaign {
	type: 'CAMPAIGN'
	parameters: {
		campaign: {
			id: string
			balance?: number
			type: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
		}
	}
}

export interface RewardTypeCoin {
	type: 'COIN'
	parameters: {
		coin: {
			exchange_ratio: number
			points_ratio?: number
		}
	}
}

export interface RewardTypeMaterial {
	type: 'MATERIAL'
	parameters: {
		product: {
			id: string
			sku: string | null
		}
	}
}

export type RewardType = RewardTypeCampaign | RewardTypeCoin | RewardTypeMaterial

// Reward assignment

export type RewardAssignment = RewardsAssignmentCoinReward | RewardsAssignmentCampaignOrMaterialReward

export interface RewardsAssignmentCoinReward {
	id: string
	reward_id: string
	related_object_id: string
	related_object_type: 'campaign'
	created_at: string
	updated_at: string | null
	object: 'reward-assignment'
}

export interface RewardsAssignmentCampaignOrMaterialReward {
	id: string
	reward_id: string
	related_object_id: string
	related_object_type: 'campaign'
	created_at: string
	updated_at: string | null
	object: 'reward-assignment'
	parameters: {
		loyalty: {
			points?: number
		}
	}
}

// 0-level types
// Get assignment

export type RewardsGetAssignmentResponseBody = RewardAssignment

// List assignments

export interface RewardsListAssignmentsRequestQuery {
	limit?: number
	page?: number
}
export interface RewardsListAssignmentsResponseBody {
	object: 'list'
	data_ref: 'data'
	data: RewardAssignment[]
	total: number
}

// Create assignment

export type RewardsCreateAssignmentRequestBody =
	| RewardsCreateAssignmentCoinRewardRequestBody
	| RewardsCreateAssignmentCampaignOrMaterialRewardRequestBody

export interface RewardsCreateAssignmentCoinRewardRequestBody {
	campaign: string
	validation_rules?: string[]
}

export interface RewardsCreateAssignmentCampaignOrMaterialRewardRequestBody {
	campaign: string
	parameters: {
		loyalty: {
			points?: number
		}
	}
}

export type RewardsCreateAssignmentResponseBody = RewardAssignment

// Update assignments

export interface RewardsUpdateAssignmentRequestBody {
	parameters?: {
		loyalty?: {
			points?: number
		}
	}
	id: string
}

export type RewardsUpdateAssignmentResponseBody = RewardAssignment
