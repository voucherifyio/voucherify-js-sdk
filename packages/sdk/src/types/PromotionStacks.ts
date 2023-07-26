import { CategoryObject } from './Categories'

export type UpdatePromotionStack = Partial<CreatePromotionStack>

export interface CreatePromotionStack {
	name: string
	tiers?: {
		ids: string[]
		hierarchy_mode: string
	}
	category?: string
	category_id?: string
}

export interface ListStacksInCampaignResponse {
	object: 'list'
	data_ref: 'data'
	data: PromotionStackObject[]
	total: number
}

export interface PromotionStackObject {
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
	categories: CategoryObject
}
