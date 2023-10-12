import { Category } from './Categories'

export interface ListPromotionStacksParams {
	limit?: number
	page?: number
	order?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'name' | '-name'
	created_at?: {
		before?: string
		after?: string
	}
	updated_at?: {
		before?: string
		after?: string
	}
}

export type UpdatePromotionStack = Partial<CreatePromotionStack>

export interface CreatePromotionStack {
	name?: string
	tiers?: {
		ids: string[]
		hierarchy_mode: 'MANUAL'
	}
	category?: string
	category_id?: string
}

export interface ListStacksInCampaignResponse {
	object: 'list'
	data_ref: 'data'
	data: PromotionStack[]
	total: number
}

export interface PromotionStack {
	id: string
	name: string
	created_at: string
	updated_at: string
	campaign_id: string
	object: 'promotion_stack'
	tiers: {
		ids: string[]
		hierarchy_mode: 'MANUAL'
	}
	category_id: string
	categories: Category
}
