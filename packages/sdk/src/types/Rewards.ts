export interface RewardsListParams {
	page?: number
	limit?: number
}

export interface RewardsListResponse {
	object?: 'list'
	total?: number
	data_ref?: string
	data: {
		id?: string
		name?: string
		parameters?: {
			campaign?: {
				id?: string
			}
		}
		created_at?: string
		updated_at?: string
		object?: string
	}[]
}

export interface RewardsCreate {
	name?: string
	parameters?: {
		campaign?: {
			id?: string
		}
	}
}

export interface RewardsCreateResponse {
	id?: string
	name?: string
	created_at?: string
	parameters?: {
		automation_id?: string
		campaign?: {
			id?: string
			type?: string
		}
	}
	object?: 'reward'
}

export type RewardsGetResponse = RewardsCreateResponse

export type RewardsUpdate = RewardsCreate & { id?: string }

export type RewardsUpdateResponse = RewardsCreateResponse

export interface RewardsAssigmentObject {
	id?: string
	reward_id?: string
	related_object_id?: string
	related_object_type?: string
	parameters?: {
		loyalty?: {
			points?: number
		}
	}
	created_at?: string
	updated_at?: string
	object?: 'reward_assignment'
}
export interface RewardsListAssigmentsParams {
	limit?: number
	page?: number
}

export interface RewardsListAssigmentsResponse {
	total?: number
	data?: RewardsAssigmentObject[]
	object?: 'list'
	data_ref?: 'data'
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

export type RewardsUpdateAssigment = RewardsCreateAssigment & { id?: string }

export type RewardsUpdateAssigmentResponse = RewardsAssigmentObject
