export interface RewardsListParams {
	page?: number
	limit?: number
	assignment_id: string
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
	updated_at?: string | null
	metadata: Record<string, any>
	object: 'reward'
	type: 'CAMPAIGN' | 'COIN' | 'MATERIAL'
	parameters: RewardsResponseParametersCampaigns | RewardsResponseParametersCoin | RewardsResponseParametersProduct
}

export type RewardsCreateResponse = RewardsResponse

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

interface RewardsResponseParametersCampaigns {
	campaigns:
		| {
				type: 'DISCOUNT_COUPONS'
				id: string
		  }
		| {
				type: 'GIFT_VOUCHERS'
				balance: number
				id: string
		  }
		| {
				type: 'LOYALTY_PROGRAM'
				balance: number
				id: string
		  }
}

interface RewardsResponseParametersCoin {
	coin: {
		exchange_ratio: number
		points_ratio: number
	}
}

interface RewardsResponseParametersProduct {
	product: {
		id: string
		sku_id: string | null
	}
}

interface RewardsTypeMaterial {
	type?: 'MATERIAL'
	parameters: {
		product?: {
			id?: string
			sku_id?: string | null
		}
	}
	attributes: {
		image_url: string
	}
	metadata: string
	name: string
	stock: number
}

interface RewardsTypeCampaign {
	type?: 'CAMPAIGN'
	metadata: string
	name: string
	parameters: {
		campaign?:
			| {
					id: string
					balance?: number
			  }
			| {
					id: string
					balance?: number
			  }
			| {
					id: string
			  }
	}
}

// interface RewardsTypeCampaignResponse {
// 	type?: 'CAMPAIGN'
// 	parameters: {
// 		campaign?: {
// 			id: string
// 			balance?: number
// 			type?: 'DISCOUNT_COUPONS' | 'PROMOTION' | 'GIFT_VOUCHERS' | 'REFERRAL_PROGRAM'
// 		}
// 	}
// }

interface RewardsTypeCoin {
	type?: 'COIN'
	metadata: string
	name: string
	parameters: {
		coin?: {
			exchange_ratio?: number | string
			points_ratio?: number | string
		}
	}
}

export type RewardsType = RewardsTypeCampaign | RewardsTypeCoin | RewardsTypeMaterial
export type RewardsCreateBody = RewardsTypeCampaign | RewardsTypeMaterial | RewardsTypeCoin

// export type RewardsTypeResponse =
// 	| Required<RewardsTypeCampaignResponse>
// 	| Required<RewardsTypeCoin>
// 	| Required<RewardsTypeMaterial>

export type RewardsCreate = Rewards & RewardsType

export type RewardsGetResponse = RewardsCreateResponse

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
