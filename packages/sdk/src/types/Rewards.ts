import { WithRequiredProperty } from './UtilityTypes'

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

export interface RewardRedemptionParams {
	points?: number
	assignment_id?: string
	id?: string
}

//Domain types
// Reward assignment
export interface RewardAssignmentIdentity {
	id?: string
	reward_id?: string
}
export interface RewardAssignmentBase {
	related_object_id?: string
	related_object_type?: 'campaign'
	parameters?: {
		loyalty: {
			points: number
		}
	}
}

export interface RewardAssignmentResponseData {
	created_at?: string
	updated_at?: string | null
	object?: 'reward-assignment'
}

export type RewardAssignment = Required<RewardAssignmentIdentity> &
	WithRequiredProperty<RewardAssignmentBase, 'related_object_id' | 'related_object_type'> &
	Required<RewardAssignmentResponseData>

// 0-level types
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
	| RewardsCreateAssignmentCoinRequestBody
	| RewardsCreateAssignmentMainRequestBody

export type RewardsCreateAssignmentCoinRequestBody = WithRequiredProperty<
	RewardsCreateAssignmentMainRequestBody,
	'campaign'
>
export interface RewardsCreateAssignmentMainRequestBody {
	campaign: string
	parameters: {
		loyalty: {
			points?: number
		}
	}
}

export type RewardsCreateAssignmentResponseBody = Required<RewardAssignment>

// Update assignments
export interface RewardsUpdateAssignmentRequestBody {
	parameters?: {
		loyalty?: {
			points?: number
		}
	}
	id: string
}

export type RewardsUpdateAssignmentResponseBody = Required<RewardAssignment>
