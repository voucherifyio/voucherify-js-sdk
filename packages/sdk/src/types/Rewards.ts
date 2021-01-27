export interface RewardsListParams {
	page?: number
	limit?: number
}

export interface RewardsCreateResponse {
	id: string
	name?: string
	paramteres?: {
		campaign?: {
			id: string
			balance?: number
		}
		product?: {
			id?: string
			sku_id?: string
		}
		coin?: {
			exchange_ratio: number
		}
	}
	type?: 'MATERIAL' | 'CAMPAIGN' | 'COIN'
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

export interface RewardsListResponse {
	object: 'list'
	total: number
	data_ref: 'data'
	data: RewardsCreateResponse[]
}

export interface RewardsCreate {
	name: string
	parameters: {
		campaign?: {
			id: string
			balance?: number
		}
		product?: {
			id?: string
			sku_id?: string
		}
		coin?: {
			exchange_ratio: number
		}
	}
	type?: 'MATERIAL' | 'CAMPAIGN' | 'COIN'
	stock?: number
	attributes?: {
		image_url?: string
		description?: string
	}
}

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
			points?: number
		}
	}
}

export type RewardsCreateAssigmentResponse = RewardsAssigmentObject

export type RewardsUpdateAssigment = RewardsCreateAssigment & { id: string }

export type RewardsUpdateAssigmentResponse = RewardsAssigmentObject
