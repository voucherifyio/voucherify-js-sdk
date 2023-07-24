export interface LoyaltyTierRewardObject {
	reward: RewardObject
	assignment: RewardAssignmentObject
	object: 'loyalty_tier_reward'
}
export interface RewardAssignmentObject {
	//4_obj_reward_assignment_object
	id: string
	reward_id: string
	related_object_id: string
	related_object_type: string
	parameters: {
		loyalty: {
			points: number
		}
	}
	created_at: string
	updated_at: string
	object: 'reward_assignment'
}

export interface RewardsListParams {
	page?: number
	limit?: number
	assignment_id?: string
}

export type RewardsCreateResponse = RewardObject

export interface RewardObject {
	//4_obj_reward_object
	id: string
	name?: string
	type?: 'CAMPAIGN' | 'COIN' | 'MATERIAL'
	stock?: number
	redeemed?: number
	attributes?: {
		image_url?: string
		description?: string
	}
	created_at?: string
	updated_at?: string | null
	metadata?: Record<string, any>
	object?: 'reward'
	parameters?: RewardObjectParametersCampaign | RewardObjectParametersCoin | RewardObjectParametersMaterial
}

interface RewardObjectParametersCampaign {
	//4_obj_reward_object_parameters_CAMPAIGN
	campaign?:
		| RewardObjectParametersCampaignDiscountCoupons
		| RewardObjectParametersCampaignGiftVouchers
		| RewardObjectParametersCampaignLoyaltyProgram
}

interface RewardObjectParametersCoin {
	//4_obj_reward_object_parameters_COIN
	coin?: {
		exchange_ratio?: number
		points_ratio?: number
	}
}

interface RewardObjectParametersMaterial {
	//4_obj_reward_object_parameters_MATERIAL
	product?: {
		id: string
		sku_id?: string | null
	}
}

interface RewardObjectParametersCampaignDiscountCoupons {
	//4_obj_reward_object_parameters_CAMPAIGN_DISCOUNT_COUPONS
	id: string
	type?: 'DISCOUNT_COUPONS'
}

interface RewardObjectParametersCampaignGiftVouchers {
	//4_obj_reward_object_parameters_CAMPAIGN_GIFT_VOUCHERS
	id: string
	type?: 'GIFT_VOUCHERS'
	balance?: number
}

interface RewardObjectParametersCampaignLoyaltyProgram {
	//4_obj_reward_object_parameters_CAMPAIGN_LOYALTY_PROGRAM
	id: string
	type?: 'LOYALTY_PROGRAM'
	balance?: number
}
export interface RewardsListResponse {
	object?: 'list'
	total?: number
	data_ref?: 'data'
	data?: RewardsCreateResponse[]
}

interface RewardsTypeMaterial {
	type?: 'MATERIAL'
	parameters?: {
		product?: {
			id?: string
			sku?: string
		}
	}
}

interface RewardsTypeCampaign {
	type?: 'CAMPAIGN'
	parameters?: {
		campaign?: {
			id: string
			balance?: number
		}
	}
}

interface RewardsTypeCampaignResponse {
	type?: 'CAMPAIGN'
	metadata?: string
	name?: string
	parameters?: {
		campaign?: {
			id: string
			balance?: number
			type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
		}
	}
}

interface RewardsTypeCoin {
	type?: 'COIN'
	parameters?: {
		coin?: {
			exchange_ratio?: number
		}
	}
}

export type RewardsType = RewardsTypeCampaign | RewardsTypeCoin | RewardsTypeMaterial

export type RewardsTypeResponse = RewardsTypeCampaignResponse | RewardsTypeCoin | RewardsTypeMaterial

export type RewardsCreateBody = CreateRewardCampaign | CreateRewardMaterial | CreateRewardCoin

export type RewardsGetResponse = RewardsCreateResponse

//4_req_update_reward
export type RewardsUpdateBody =
	| Omit<CreateRewardCampaign, 'type'>
	| Omit<CreateRewardCoinForUpdate, 'type'>
	| Omit<CreateRewardMaterial, 'type'>

export type RewardsUpdateResponse = RewardsCreateResponse

interface CreateRewardCampaign {
	//4_req_create_reward_CAMPAIGN
	name?: string
	type?: 'CAMPAIGN'
	parameters?: RewardParametersCampaign
	metadata?: string
}

interface CreateRewardMaterial {
	//4_req_create_reward_MATERIAL
	name?: string
	type?: 'MATERIAL'
	parameters?: RewardParametersMaterial
	stock?: number
	attributes?: {
		image_url?: string
	}
	metadata?: string
}

type CreateRewardCoinForUpdate = Omit<CreateRewardCoin, 'attributes'>
interface CreateRewardCoin {
	//4_req_create_reward_COIN
	name?: string
	type?: 'COIN'
	parameters?: RewardParametersCoin
	metadata?: string
}

interface RewardParametersCampaign {
	campaign?:
		| RewardParametersCampaignLoyaltyProgram
		| RewardParametersCampaignGiftVouchers
		| RewardParametersCampaignDiscountCoupons
}

type RewardParametersCampaignLoyaltyProgram = Omit<RewardObjectParametersCampaignLoyaltyProgram, 'type'>
type RewardParametersCampaignGiftVouchers = Omit<RewardObjectParametersCampaignGiftVouchers, 'type'>
type RewardParametersCampaignDiscountCoupons = Omit<RewardObjectParametersCampaignDiscountCoupons, 'type'>

interface RewardParametersMaterial {
	//4_req_reward_parameters_MATERIAL
	product?: {
		id: string
		sku_id?: string | null
	}
}

interface RewardParametersCoin {
	//4_req_reward_parameters_COIN
	coin?: {
		exchange_ratio?: string | number
		points_ratio?: string | number
	}
}

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

export type RewardsUpdateAssignmentResponse = RewardsAssignmentObject

export type RewardsUpdateAssignmentBody = Pick<RewardsAssignmentObject, 'parameters'>

export interface RewardRedemptionParams {
	points?: number
	assignment_id?: string
	id?: string
}
